import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/UserContext';
import Loading from '../../../components/Loading/Loading';
import { BASE_URL } from '../../../config';
import CheckoutForm from './CheckoutForm';
import toast from 'react-hot-toast';


const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { data: orders = [], isLoading, refetch } = useQuery({
    queryKey: ['myOrders', user?.email],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/orders?buyerEmail=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      return res.json();
    }
  });

  const handlePaymentSuccess = () => {
    toast.success('Payment successful!');
    refetch(); 
    setSelectedOrder(null);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Seller</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td>{order.productName}</td>
                <td>${order.price}</td>
                <td>{order.sellerEmail}</td>
                <td>
                  {order.paid ? (
                    'Paid'
                  ) : (
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="btn btn-sm btn-primary"
                    >
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      {selectedOrder && (
        <div className="modal modal-open">
          <div className="modal-box max-w-md">
            <h3 className="font-bold text-lg mb-4">Complete Payment</h3>
            <p className="mb-2">Product: {selectedOrder.productName}</p>
            <p className="mb-4">Price: ${selectedOrder.price}</p>
            <CheckoutForm
              order={selectedOrder}
              onSuccess={handlePaymentSuccess}
              onCancel={() => setSelectedOrder(null)}
            />
            <div className="modal-action">
              <button
                onClick={() => setSelectedOrder(null)}
                className="btn btn-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;

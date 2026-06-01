import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/UserContext';
import { BASE_URL } from '../../../config';
import toast from 'react-hot-toast';

const PurchaseModel = ({ product, setSelectedProduct }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const order = {
      productId: product._id,
      productName: product.name,
      price: product.price,
      buyerName: user.displayName,
      buyerEmail: user.email,
      phone: data.phone,
      location: data.location,
      sellerEmail: product.sellerEmail,
    };

    try {
      const res = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(order),
      });

      const result = await res.json();
      if (result.acknowledged) {
        toast.success('Order placed successfully!');
        reset();
        setSelectedProduct(null);
      } else {
        toast.error('Failed to place order');
      }
    } catch (error) {
      toast.error('An error occurred while placing the order.');
      console.error(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="purchaseModal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-md mx-auto">
          <img
            src="/src/assets/images/product detail images / ecommerce product showcase images.jpg"
            alt={product?.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold mb-4">{product?.name}</h3>
          <label
            htmlFor="purchaseModal"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
            onClick={() => setSelectedProduct(null)}
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input type="text" readOnly value={product?.name} className="input w-full bg-gray-100" />
            <input type="text" readOnly value={`$${product?.price}`} className="input w-full bg-gray-100" />
            <input type="text" readOnly value={user?.displayName} className="input w-full bg-gray-100" />
            <input type="email" readOnly value={user?.email} className="input w-full bg-gray-100" />
            <div>
              <input
                type="number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: { value: /^[0-9]+$/, message: "Phone number must be numeric" }
                })}
                placeholder="Phone Number"
                className="input w-full"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>
            <div>
              <input
                type="text"
                {...register("location", { required: "Meeting location is required" })}
                placeholder="Meeting Location"
                className="input w-full"
              />
              {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary w-full">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModel;

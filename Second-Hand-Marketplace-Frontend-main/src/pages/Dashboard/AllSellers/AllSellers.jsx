import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import { BASE_URL } from '../../../config';

const AllSellers = () => {
  const { data: sellers = [], isLoading, refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/users?role=seller`, {
        headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });
      return res.json();
    }
  });

  const handleVerify = id => {
    fetch(`${BASE_URL}/users/verify/${id}`, {
      method: 'PUT',
      headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Seller verified!');
          refetch();
        }
      });
  };

  const handleDelete = id => {
    fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Seller deleted!');
          refetch();
        }
      });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.verified ? 'Yes' : <button onClick={() => handleVerify(seller._id)} className="btn btn-xs btn-primary">Verify</button>}</td>
                <td><button onClick={() => handleDelete(seller._id)} className="btn btn-xs btn-error">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import { BASE_URL } from '../../../config';

const AllBuyers = () => {
  const { data: buyers = [], isLoading, refetch } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/users?role=buyer`, {
        headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });
      return res.json();
    }
  });

  const handleDelete = id => {
    fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Buyer deleted!');
          refetch();
        }
      });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td><button onClick={() => handleDelete(buyer._id)} className="btn btn-xs btn-error">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;

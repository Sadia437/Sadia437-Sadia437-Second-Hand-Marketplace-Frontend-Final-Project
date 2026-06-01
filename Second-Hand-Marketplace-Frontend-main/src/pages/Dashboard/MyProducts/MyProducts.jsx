import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import Loading from "../../../components/Loading/Loading";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../config";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: myProducts = [], refetch, isLoading } = useQuery({
    queryKey: ["my-products", user?.email],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/my-products?email=${user?.email}`);
      return res.json();
    },
    enabled: !!user?.email, 
  });

  const handleDeleteProduct = (productId) => {
    const agree = window.confirm("Are you sure you want to delete this product?");
    if (agree) {
      fetch(`${BASE_URL}/products/${productId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Product deleted successfully!");
            refetch();
          }
        });
    }
  };

  if (isLoading) return <Loading />; 

  return (
    <div>
      <h1 className="text-2xl font-semibold">My Products ({myProducts.length})</h1>
      <div className="overflow-x-auto shadow-lg mt-7">
        <table className="table">
          <thead className="bg-base-300">
            <tr>
              <th>Serial</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((product, i) => (
              <tr key={product._id} className="hover:bg-base-300">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/src/assets/images/product preview.webp" alt={product.name} />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <span className={`badge ${product.status === 'available' ? 'badge-success' : product.status === 'sold' ? 'badge-error' : 'badge-warning'}`}>
                    {product.status || 'available'}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-sm btn-error btn-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;

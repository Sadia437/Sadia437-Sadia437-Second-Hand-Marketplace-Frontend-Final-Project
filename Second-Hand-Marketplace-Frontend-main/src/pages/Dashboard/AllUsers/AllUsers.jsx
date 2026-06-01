import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";

const AllUsers = () => {
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return res.json();
    },
  });

  const handleMakeAdmin = async (user) => {
    const agree = window.confirm(`Are you sure ${user.name} will be Admin?`);
    if (agree) {
      const res = await fetch(`http://localhost:5000/users/${user._id}/verify`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      if (data.modifiedCount > 0) {
        alert("Successfully Admin Done!");
        refetch();
      }
    }
  };

  const handleDeleteUser = async (user) => {
    const agree = window.confirm(`Are you sure ${user.name} will be deleted?`);
    if (agree) {
      const res = await fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      if (data.deletedCount > 0) {
        alert("Successfully Deleted!");
        refetch();
      }
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="text-2xl font-semibold">All Users {users.length}</h1>
      <div className="overflow-x-auto shadow-lg mt-7">
        <table className="table">
          <thead className="bg-base-300">
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete User</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-base-300">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-sm btn-error btn-outline"
                  >
                    Delete User
                  </button>
                </td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-primary btn-sm btn-outline"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

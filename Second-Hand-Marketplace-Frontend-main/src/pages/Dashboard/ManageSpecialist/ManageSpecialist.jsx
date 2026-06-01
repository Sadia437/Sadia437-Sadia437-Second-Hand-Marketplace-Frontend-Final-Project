import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../components/Loading/Loading";

const ManageSpecialist = () => {
  const {
    data: specialists = [],
    isLoading,
  } = useQuery({
    queryKey: ["all-specialists"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/all-specialists`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Manage Specialist</h1>
      <div className="overflow-x-auto shadow-lg mt-7">
        <table className="table">
        <thead className="bg-base-300">
            <tr>
              <th>Serial</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Specialty</th>
            </tr>
          </thead>
          <tbody>
            {specialists?.map((specialist, i) => (
              <tr key={i} className="hover:bg-base-300">
                <th>{i + 1} </th>
                <td>
                   <div className="">
                      <img className="w-10 h-10 rounded-full"
                        alt="img"
                        src={`data:image/jpeg;base64,${specialist.img}`}
                      />
                    </div>
                </td>
                <td>{specialist.name}</td>
                <td>{specialist.email}</td>

                <td>{specialist.phone}</td>
                <td>{specialist.specialist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSpecialist;

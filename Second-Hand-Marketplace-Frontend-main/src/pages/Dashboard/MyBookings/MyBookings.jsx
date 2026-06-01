import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "./../../../context/UserContext";
import Loading from "../../../components/Loading/Loading";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myBookings = [],
    isLoading,
  } = useQuery({
    queryKey: ["mybookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/mybookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">
        My Bookings {myBookings.length}
      </h1>
      <div className="overflow-x-auto shadow-lg mt-7">
        <table className="table">
       <thead className="bg-base-300">
            <tr>
              <th>Serial</th>
              <th>Service</th>
              <th>Email</th>
              <th>Time</th>
              <th>Date</th>
              <th>Patient</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((booking, i) => (
              <tr key={i} className="hover:bg-base-300">
                <th>{i + 1} </th>
                <td>{booking.treatment}</td>
                <td>{booking.email}</td>
                <td>{booking.slot}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.patient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;

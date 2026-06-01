import React from "react";

const ServiceOption = ({ service,setService }) => {
  const { name, slots } = service;

  return (
    <div className="rounded-lg bg-primary mt-8 shadow-sm">
      <div className="card-body">
        <h2 className="text-xl font-semibold text-white text-center">{name}</h2>
        <p className="text-white ">Available Slots {slots.length}</p>
        <label onClick={()=>setService(service)} htmlFor="bookingModal" className="btn btn-outline border-white text-white">
          Book Now
        </label>

        
      </div>
    </div>
  );
};

export default ServiceOption;

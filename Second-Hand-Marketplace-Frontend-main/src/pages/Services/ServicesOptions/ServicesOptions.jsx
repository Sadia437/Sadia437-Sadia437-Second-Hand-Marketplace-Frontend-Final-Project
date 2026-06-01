import React from "react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import ServiceOption from "./ServiceOption";

const ServicesOptions = ({ selected }) => {
  const date = format(selected, "PP");

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-10 p-5 md:p-30 md:pt-0">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Our Special <span className="text-primary">Services</span>
        </h1>
        <h1 className="text-2xl font-semibold">
          <span className="text-primary">Get Service On: {date}</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceOption
              key={service._id}
              service={service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOptions;

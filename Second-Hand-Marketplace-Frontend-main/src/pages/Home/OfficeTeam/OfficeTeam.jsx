import React from "react";
import meet from "../../../assets/images/office team photo.jpg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const OfficeTeam = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center p-5 md:p-20">
     
      <div className="w-full md:w-1/2">
        <img
          src={meet}
          alt="Office Team"
          className="w-full h-auto rounded-2xl object-contain"
        />
      </div>


      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-semibold mt-4 md:mt-0">
          Rediscover Youth, <span className="text-primary">Redefine Life.</span>
        </h1>
        <p className="text-gray-700 md:text-lg">
          Embrace a renewed sense of vitality and confidence with advanced
          anti-aging therapies. At Relive, we help you unlock the best version
          of yourself—inside and out.
        </p>
        <div className="flex justify-center md:justify-start">
          <PrimaryButton>Learn More</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default OfficeTeam;

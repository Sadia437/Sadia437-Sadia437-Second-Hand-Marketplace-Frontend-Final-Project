import React from "react";
import CategoriesBannerImage from "../../../assets/images/CategoriesBanner.jpg";

const CategoriesBanner = () => {
  return (
    <div className="hero min-h-[400px] bg-base-200 relative">
      <img
        src={CategoriesBannerImage}
        alt="Product Category Banner"
        className="w-full h-full object-cover"
      />
      <div className="hero-content text-center absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
        <h1 className="text-5xl font-bold text-white">Second-Hand Categories</h1>
        <p className="py-6 text-white">
          Explore our wide range of second-hand product categories. Find the perfect item for you!
        </p>
      </div>
    </div>
  );
};

export default CategoriesBanner;

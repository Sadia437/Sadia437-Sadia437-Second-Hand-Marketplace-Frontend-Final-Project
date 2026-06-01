import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/banner.jpg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative flex justify-center items-center text-white min-h-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      <div className="relative z-10 text-center px-5 md:px-10 space-y-6 max-w-4xl">
        <h1 className="text-3xl md:text-6xl font-bold text-text-primary font-inter">
          Buy & Sell Second-Hand Products <span className="text-primary">Safely</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary font-inter max-w-2xl mx-auto">
          Find great deals in your city. Discover quality pre-owned items from trusted sellers.
        </p>
        <Link to="/categories">
          <PrimaryButton>Shop Now</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

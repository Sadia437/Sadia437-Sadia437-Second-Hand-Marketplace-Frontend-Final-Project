import React from "react";
import quote from "../../../assets/icons/quote.png";
const Review = ({ review }) => {
  const { name, img, age, message } = review;
  return (
    <div className="rounded-lg bg-base-200 mt-8 shadow-sm">
      <div className="flex items-center">
        <img className="p-5 w-25 h-25 rounded-full" src={img} alt="image" />
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Age: {age}</p>
        </div>
      </div>

      <div className="card-body">
        <p className="flex items-start">
          <img className="me-2" src={quote} alt="" /> {message}
        </p>
      </div>
    </div>
  );
};

export default Review;

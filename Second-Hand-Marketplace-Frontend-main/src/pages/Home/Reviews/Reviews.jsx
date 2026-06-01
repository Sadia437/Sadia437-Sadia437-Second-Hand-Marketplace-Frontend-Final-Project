import React from "react";
import testimonial from "../../../assets/images/customer testimonial.jpg";

// Single Review Card
const Review = ({ review }) => {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col items-center shadow-md">
      <img
        src={review.img}
        alt={review.name}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4"
      />
      <h3 className="font-semibold text-lg">{review.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{review.age} years old</p>
      <div className="bg-gray-100 p-3 rounded-lg text-gray-700 text-center">
        {review.message}
      </div>
    </div>
  );
};

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 42,
      img: testimonial,
      message:
        "After just three months with Relive's peptide therapy, I feel like I've turned back the clock by a decade. My energy levels are through the roof!",
    },
    {
      name: "Michael Thomas",
      age: 48,
      img: testimonial,
      message:
        "The hormone replacement therapy at Relive has completely transformed my quality of life. I sleep better, think clearer.",
    },
    {
      name: "Jennifer Lee",
      age: 45,
      img: testimonial,
      message:
        "After just three months with Relive's peptide therapy, I feel like I've turned back the clock by a decade. My energy levels are through the roof!",
    },
  ];

  return (
    <div className="p-5 md:mx-20 bg-secondary rounded-2xl">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-4xl font-semibold mt-5">
          What Our <span className="text-primary">Clients</span> Say
        </h1>
        <p className="mt-2">
          Explore our wide range of innovative anti-aging solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {testimonials.map((review, index) => (
          <Review key={review.name + index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

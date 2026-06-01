import React from "react";
import { Link } from "react-router-dom";

const secondHandCategoriesNames = [
  "Clothing",
  "Toys",
  "Shoes", 
  "Shirts",
  "Pants",
  "Fashion"
  
];

const CategoriesSection = ({ categories }) => {
 
  const filteredCategories = categories.filter(category => 
    secondHandCategoriesNames.includes(category.name)
  );

  return (
    <div className="py-16 px-5 md:px-10 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary font-inter mb-4">
            Second-Hand <span className="text-primary">Categories</span>
          </h1>
          <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
            Explore our wide range of second-hand product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category) => (
            <Link
              key={category._id}
              to={`/category/${category.name}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={`/images/${category.name}.jpg`}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = '/images/SecondHandBanner.jpg'; }}
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-text-primary mb-2">
                    {category.name}
                  </h2>
                  <p className="text-text-secondary">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;

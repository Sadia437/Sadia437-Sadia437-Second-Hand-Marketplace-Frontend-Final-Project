import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import { BASE_URL } from "../../../config";

const CategoriesOptions = () => {
  const { data: categories = [], isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/categories`);
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
  });

  if (isLoading) return <Loading />;

  if (error) return (
    <div className="p-5 md:p-30 md:pt-0">
      <div className="alert alert-error">
        <span>Error loading categories: {error.message}</span>
      </div>
    </div>
  );


  const uniqueCategoryNames = new Set();
  const mainCategories = categories.filter(cat => {
      const lowerName = cat.name.toLowerCase();
      if (uniqueCategoryNames.has(lowerName)) return false;
      uniqueCategoryNames.add(lowerName);
      return true;
  });

  return (
    <div className="p-5 md:p-30 md:pt-0">
     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCategories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <figure>
                  <img
                    src={`/images/${category.name}.jpg`}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => { e.currentTarget.src = '/images/SecondHandBanner.jpg'; }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{category.name}</h2>
                  <p>{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoriesOptions;

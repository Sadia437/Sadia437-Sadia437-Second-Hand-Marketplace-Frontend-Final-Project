import React from "react";
import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner/Banner";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import ExtraSection from "./ExtraSection/ExtraSection";
import OfficeTeam from "./OfficeTeam/OfficeTeam";
import { BASE_URL } from "../../config.js";

const Home = () => {
  const { data: categories = [],  error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/categories`);
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
  });

  return (
    <div>
      <Banner />

      {error && (
        <p className="text-center py-20 text-red-500">{error.message}</p>
      )}

      {categories.length > 0 ? (
        <CategoriesSection categories={categories} />
      ) : (
        <p className="text-center py-20 text-gray-500">No categories found.</p>
      )}

      <ExtraSection />
      <OfficeTeam />
    </div>
  );
};

export default Home;

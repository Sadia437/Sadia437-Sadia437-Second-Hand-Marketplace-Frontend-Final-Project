import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard/ProductCard.jsx';
import PurchaseModel from './PurchaseModal/PurchaseModal.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import { BASE_URL } from '../../config';

const Category = () => {
  const { id, subcategory } = useParams(); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['categoryProducts', id, subcategory],
    queryFn: async () => {
      let url = `${BASE_URL}/products?category=${id}`;
      if (subcategory) {
        url += `&subcategory=${encodeURIComponent(subcategory)}`;
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="p-5 md:p-10">
      <h2 className="text-2xl font-bold mb-5">{id}{subcategory ? ` - ${subcategory}` : ''} Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <PurchaseModel
          product={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default Category;

import React from 'react';
import { format } from 'date-fns';

const ProductCard = ({ product, setSelectedProduct }) => {
  const {
    name, location, price, originalPrice,
    yearOfPurchase, createdAt, sellerName,
    verified, condition, status
  } = product;

  const yearsOfUse = new Date().getFullYear() - yearOfPurchase;

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src="/item images.jpg"
          alt={name}
          className="w-full h-48 object-cover"
        />
        {verified && (
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-bold">
            ✓ Verified
          </div>
        )}
        {status === 'sold' && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-xl font-bold">SOLD</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">Condition: {condition || 'N/A'}</p>
        <p className="text-sm mb-3">{location}</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-bold text-primary">${price}</p>
            <p className="text-sm line-through text-gray-400">${originalPrice}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Used: {yearsOfUse} years</p>
            <p className="text-xs text-gray-500">Posted: {format(new Date(createdAt), 'PP')}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Seller: {sellerName}</p>
          <button
            onClick={() => setSelectedProduct(product)}
            disabled={status === 'sold'}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              status === 'sold'
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90 text-white'
            }`}
          >
            {status === 'sold' ? 'Sold' : 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

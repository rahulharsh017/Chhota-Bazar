'use client'

import React, { useState } from 'react';

function EmployeeCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-gray-800 font-semibold">${product.price}</p>
      <button
        className={`py-2 px-4 rounded mt-4 ${isAdded ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-700'} text-white font-bold`}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default EmployeeCard;
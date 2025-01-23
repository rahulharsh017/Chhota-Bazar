'use client'

import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeProductList({ products, onAddToCart }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product._id}>
            <EmployeeCard product={product} onAddToCart={onAddToCart} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeProductList;
'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/productSlice';
import { addProductToCart } from '@/redux/employeeSlice';
import EmployeeProductList from '@/components/EmployeeProductList';
import Link from 'next/link';

function Employee() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.employeeCart.cart);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };



  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <Link href="/employee/billing">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

        >
          Billing
        </button>
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <EmployeeProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default Employee;
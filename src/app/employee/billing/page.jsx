'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '@/components/Cart';

function Billing() {
  const cart = useSelector((state) => state.employeeCart.cart);

  const handlePaid = async () => {
    const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const billingDetails = {
      items: cart,
      totalAmount,
    };

    try {
      const response = await fetch('/api/billings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(billingDetails),
      });

      if (response.ok) {
        alert('Billing details saved successfully');
      } else {
        alert('Error saving billing details');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving billing details');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Billing Page</h1>
      <Cart cart={cart} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handlePaid}
      >
        Paid
      </button>
    </div>
  );
}

export default Billing;
'use client'
import React, { useState, useEffect } from 'react';
import SideMenu from '@/components/SideMenu';

function AdminBilling() {
  const [billings, setBillings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBillings = async () => {
      try {
        const response = await fetch('/api/billings');
        const data = await response.json();
        setBillings(data);
      } catch (error) {
        console.error('Error fetching billings:', error);
      }
    };

    fetchBillings();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBillings = billings.filter((billing) =>
    new Date(billing.date).toLocaleDateString().includes(searchTerm)
  );

  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Billings</h1>
        <input
          type="text"
          placeholder="Search by date (MM/DD/YYYY)..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <ul>
          {filteredBillings.map((billing) => (
            <li key={billing._id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Date: {new Date(billing.date).toLocaleString()}</h2>
              <ul>
                {billing.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.name} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <div className="mt-2 font-bold">Total Amount: ${billing.totalAmount.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminBilling;
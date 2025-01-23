'use client'
import Link from 'next/link';
import React from 'react';

function Card() {
  return (
    <div>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
      <p className="mb-6 text-center text-gray-600">Please login as:</p>
      <div className="flex justify-around gap-4">
        <Link href="/admin">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Admin
        </button>
        </Link>
        <Link href="/employee">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Employee
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Card;
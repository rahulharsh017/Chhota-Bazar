import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseProductQuantity, decreaseProductQuantity, removeProductFromCart } from '@/redux/employeeSlice';

function Cart({ cart }) {
  const dispatch = useDispatch();
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index} className="mb-4 flex items-center">
            <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4" />
            <div className="flex-1">
              <div className="font-bold">{product.name}</div>
              <div className="text-gray-600">{product.category}</div>
              <div className="text-gray-800 font-semibold">${product.price} x {product.quantity}</div>
            </div>
            <div className="flex items-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={() => dispatch(increaseProductQuantity(product._id))}
              >
                +
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={() => dispatch(decreaseProductQuantity(product._id))}
              >
                -
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => dispatch(removeProductFromCart(product._id))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
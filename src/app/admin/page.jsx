'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct, editProduct } from '@/redux/productSlice';
import SideMenu from '@/components/SideMenu';
import Modal from '@/components/Modal';
import ProductList from '@/components/ProductList';

export default function Admin() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', description: '', imageUrl: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editProduct({ ...newProduct, _id: currentProduct._id }));
      setIsEditing(false);
      setCurrentProduct(null);
    } else {
      dispatch(addProduct(newProduct));
    }
    setNewProduct({ name: '', category: '', price: '', description: '', imageUrl: '' });
    setIsModalOpen(false);
  };

  const handleEditProduct = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setNewProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setIsEditing(false);
              setNewProduct({ name: '', category: '', price: '', description: '', imageUrl: '' });
              setIsModalOpen(true);
            }}
          >
            Add Product
          </button>
        </div>
        <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Product' : 'Add Product'}</h2>
          <form onSubmit={handleAddProduct}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={newProduct.imageUrl}
              onChange={handleInputChange}
              className="mb-2 p-2 border border-gray-300 rounded w-full"
              required
            />
            <div className="flex justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {isEditing ? 'Update Product' : 'Add Product'}
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}
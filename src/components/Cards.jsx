/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

function Cards() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/product");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item._id === product._id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    // You can add a toast notification here to show success message
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="group bg-white rounded-lg overflow-hidden hover:shadow-sm transition-all duration-300 h-[400px] flex flex-col border border-neutral-200"
        >
          <div 
            className="relative h-64 w-full cursor-pointer overflow-hidden flex-shrink-0"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <img
              className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              src={`http://localhost:3001${product.image}`}
              alt={product.name}
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex justify-between items-start flex-grow">
              <div className="flex-1">
                <h3 className="font-medium text-neutral-900 text-lg mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                  {product.description}
                </p>
                <p className="font-semibold text-lg text-neutral-900">${product.price}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="ml-4 p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 flex-shrink-0"
                aria-label="Add to cart"
              >
                <FiShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

{/* <div className='flex flex-row space-x-2 p-2'>
          <button className='bg-gray-800 text-white rounded-lg w-full font-medium px-4 py-2 hover:bg-gray-900 duration-500'>Buy now</button>
          <div className='font-light text-4xl bg-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-pink-500  hover:text-white duration-150' >+</div>
        </div> */}
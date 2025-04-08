/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import BuyCart from './BuyCart'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Cards() {



  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://backend-practice-production-7f56.up.railway.app/api/v1/product/preview");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);




  return (
    <>
      {products.map((product) => (
        <div className='font-poppins border-[1px] h-min border-neutral-200 bg-neutral-50 rounded-sm  mb-6   duration-500  hover:shadow-lg '
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className=' h-64 w-56 '>
            <div className='p-2 h-[100%] w-[100%] object-cover '>
              <img className='rounded-[2px] h-[100%] w-[100%] object-cover ' src="https://images.pexels.com/photos/4272616/pexels-photo-4272616.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </div>


          </div>
          <div className="flex m-2 mt-0">
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <div className=' font-normal tracking-normal text-sm text-neutral-600 '>{product.name.length > 20 ? product.name.slice(0, 20) + "..." : product.name}</div>
                <div className='font-medium  text-md  text-neutral-900  tracking-tight'>RS.{product.price}</div>
              </div>
              <div className='flex bg-neutral-400 hover:bg-neutral-900 transition-all duration-300 justify-center rounded-sm  w-[44px] text-white text-center items-center h-[44px]'>+</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards

{/* <div className='flex flex-row space-x-2 p-2'>
          <button className='bg-gray-800 text-white rounded-lg w-full font-medium px-4 py-2 hover:bg-gray-900 duration-500'>Buy now</button>
          <div className='font-light text-4xl bg-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-pink-500  hover:text-white duration-150' >+</div>
        </div> */}
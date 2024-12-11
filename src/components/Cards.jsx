import React from 'react'

function Cards() {
  let cardTitle = 'Card Title';
  let cardSubtitle = 'Card Subtitle';
  let productPrice = 'Product Price';
  return (
    <div className='font-poppins p-8'>
      <div className='bg-slate-200 h-full w-64 rounded-xl   hover:shadow-xl duration-500'>
        <div className='p-2'>
          <img className='rounded-[6px] max-fit'src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800="/>
        </div>
        <div className='px-4 pt-2 font-medium text-xl'>card Title</div>
        <div className='px-4'>Price 1200</div>
        <div className='flex flex-row space-x-2 p-2'>
          <button className='bg-gray-800 text-white rounded-lg w-full font-medium px-4 py-2 hover:bg-gray-900 duration-500'>Buy now</button>
          <div className='font-light text-4xl bg-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-pink-500  hover:text-white duration-150' >+</div>
        </div>
      </div>
    </div>
  )
}

export default Cards


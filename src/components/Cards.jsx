import React from 'react'

function Cards(props) {
  
  return (
    <div className='font-poppins p-8'>
      <div className='bg-neutral-100 h-72 w-64 rounded-sm hover:bg-neutral-300/50   duration-500'>
        <div className='p-2 h-[100%] w-[100%] object-cover '>
          <img className='rounded-[2px] h-[100%] w-[100%] object-cover 'src="https://images.pexels.com/photos/4272616/pexels-photo-4272616.jpeg?auto=compress&cs=tinysrgb&w=800"/>
        </div>

        
      </div>
      <div className="ml-2">
      <div className=' pt-2 font-normal tracking-normal text-sm text-neutral-600'>{props.cardTitle}</div>
      <div className='font-medium  text-md tracking-widest text-neutral-900'>RS. {props.productPrice}</div>
      </div>
    </div>
  )
}

export default Cards

{/* <div className='flex flex-row space-x-2 p-2'>
          <button className='bg-gray-800 text-white rounded-lg w-full font-medium px-4 py-2 hover:bg-gray-900 duration-500'>Buy now</button>
          <div className='font-light text-4xl bg-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-pink-500  hover:text-white duration-150' >+</div>
        </div> */}
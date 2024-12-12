import React from 'react'

function BuyCart() {
  return (
    <div className='ml-36 flex flex-row w-3/4 bg-slate-200/50 h-[680px] rounded-2xl'>
      {/* left section */}
      <div className='flex-1 flex-col'>
        <div className='bg-black h-3/5 w-auto m-8 rounded-xl content-center '>
          <img className='object-cover' src='https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800='/>
        </div>
        <div className='flex w-auto h-auto m-8 justify-between'>
          <div className='bg-black  rounded-lg h-24 w-36 place-content-stretch'>
            <img className='object-fill h-24'src='https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=800'/>
          </div>
          <div className='bg-black  rounded-lg h-24 w-36'></div>
          <div className='bg-black  rounded-lg h-24 w-36'></div>
        </div>
      </div>
      {/* right section */}
      <div className='flex-1'></div>
    </div>
  )
}

export default BuyCart

import React from 'react'

function BuyCart() {
  return (
    <div className='ml-36 flex flex-row w-3/4 bg-slate-200/50 h-[680px] rounded-2xl'>
      {/* left section */}
      <div className='flex-1 flex-col'>
        <div className=' h-3/5 w-auto m-8 rounded-xl  '>
          <img className='h-[100%] w-[100%] object-cover rounded-xl' src='https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800='/>
        </div>
        <div className='flex w-auto h-auto m-8 justify-between opacity-75'>
          <div className='  rounded-lg h-24 w-36 place-content-stretch ring-2 ring-offset-2 ring-pink-400'>
            <img className='h-[100%] w-[100%] object-cover rounded-lg'src='https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=800'/>
          </div>
          <div className='  rounded-lg h-24 w-36'>
            <img className='h-[100%] w-[100%] object-cover rounded-lg'src='https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=800'/>
          </div>
          <div className='  rounded-lg h-24 w-36'>
            <img className='h-[100%] w-[100%] object-cover rounded-lg'src='https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=800'/>  
          </div>
        </div>
      </div>
      {/* right section */}
      <div className='flex-1 '></div>
    </div>
  )
}

export default BuyCart

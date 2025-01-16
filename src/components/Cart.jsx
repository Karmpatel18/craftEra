

function Cart() {
    let cartCount = 10;
  return (
    <div>
      <div className='relative w-12'>
        <img className=' h-8 w-8' src='/assets/cart.png'/>
        <div className='h-4 w-auto px-[4px] absolute top-4 left-4  rounded-full bg-neutral-800 text-center text-[10px] font-light text-neutral-50'>{cartCount}</div>
      </div>
    </div>
  )
}

export default Cart

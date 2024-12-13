

function BuyCart() {
  let productPrice = 1000;
  let gstPrice = 180;
  let logisticsPrice = 300;
  let productTotal = 0;

  function productTotalPrice(productPrice, gstPrice,logisticsPrice) {
     return productTotal = productPrice+gstPrice+logisticsPrice;
  }
  productTotalPrice();

  return (
    <div className='font-poppins ml-36 flex flex-row w-3/4 bg-slate-200/50 h-[560px] rounded-2xl'>
      {/* left section */}
      <div className='flex-1 flex-col'>
        <div className=' h-4/7 w-auto m-8 rounded-xl  '>
          <img className='h-[100%] w-[100%] object-cover rounded-xl' src='https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800='/>
        </div>
        <div className='flex w-auto h-auto m-8 justify-between opacity-75'>
          <div className='cursor-pointer  rounded-lg h-24 w-36 place-content-stretch ring-2 ring-offset-2 ring-pink-400'>
            <img className='h-[100%] w-[100%] object-cover rounded-lg'src='https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=800'/>
          </div>
          <div className='cursor-pointer  rounded-lg h-24 w-36'>
            <img className='h-[100%] w-[100%] object-cover rounded-lg'src='https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=800'/>
          </div>
          <div className='cursor-pointer  rounded-lg h-24 w-36'>
            <img className='h-[100%] w-[100%] object-cover rounded-lg'src='https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=800'/>  
          </div>
        </div>
      </div>
      {/* right section */}
      <div className='flex-1 '>
        <div className='flex flex-col font-semibold text-4xl m-8 '>
          Painting title
        </div>
        <div className="mx-8">
          this painting is an art master piece by leo nardo da vinchi he was a great fucking bastar amnd gneeiworuwr
        </div>
        <div className="border-b-2 border-slate-200 mx-8 my-4 rounded-lg"></div>
        <div className="flex flex-row mx-8 p-2 justify-between">
          <div className=" font-normal text-xl ">
            Price :
          </div>
          <div className="font-normal text-xl">
            {productPrice}
          </div>
          
        </div>

        <div className="flex flex-row mx-8 p-2 justify-between">
          <div className=" font-normal text-xl ">
            GST :
          </div>
          <div className="font-normal text-xl">
            {gstPrice}
          </div>
          
        </div>
        <div className="flex flex-row mx-8 p-2 justify-between">
          <div className=" font-normal text-xl ">
            Logistics :
          </div>
          <div className="font-normal text-xl">
            {logisticsPrice}
          </div>
          
        </div>

        <div className="border-b-2 border-slate-200 mx-8 my-4 rounded-lg"></div>
        <div className="flex flex-row mx-8 p-2 justify-between">
          <div className=" font-normal text-xl ">
            Logistics :
          </div>
          <div className="font-normal text-xl" >
            {productTotal}
          </div>
          
        </div>
        <div className="flex flex-row space-x-4 mx-8 mt-14">
          <button className="bg-gray-800 hover:bg-gray-900 duration-500 w-full p-2 rounded-lg text-white text-xl font-medium">Buy now</button>
          <div className='font-light text-4xl bg-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-pink-500  hover:text-white duration-150' >+</div>
        </div>
      </div>
    </div>
  )
}

export default BuyCart

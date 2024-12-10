

function Header() {
  return (
    <>
      <div className="pl-10 pr-10 mt-8 mb-8 flex justify-between items-center font-poppins">
        <div className="flex flex-row items-center">
          <div>
              <img className='h-10 w-10 items-center' src='/public/assets/pink.png'/>
          </div>
          <div className="font-bold text-3xl">
              <h2>craftEra</h2>
          </div>
        </div>
        
            <div className="flex flex-row text-md font-normal space-x-10 items-center align-middle">
                <a href="#" className="">Home</a>
                <a href="#" className=" ">About</a>
                <a href="#" className=" ">Contact</a>
                <div className="px-4 py-2 text-white rounded-full bg-gray-900">Signin</div>
                <div className="px-4 py-2 text-white rounded-full bg-gray-900">Sign up</div>
            </div>
       
      </div>
    </>
  )
}

export default Header

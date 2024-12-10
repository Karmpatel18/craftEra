import Header from './components/Header';


function App() {
  

  return (
    <>
      
      <Header />
      <div className='ml-6 mr-6 font-poppins  bg-green-200/50  h-[694px] flex   flex-col rounded-2xl'>
        <div className='flex mt-64 flex-row justify-center items-center space-x-6'>
        <div className='flex   text-center  font-bold text-6xl '>
          Unleash 

          </div>
            <div><img className='h-20 w-20 animate-spin-slow ' src='/public/assets/blue.png'/></div>
          <div className='flex   text-center  font-bold text-6xl '>  
            Creativity
          </div>
        </div>

        <div className="flex flex-row justify-center item-center">
          <div className='text-center mt-2 font-extralight text-3xl'> 
            Own Masterpieces Discover Art That Speaks to You
            
          </div>
          
          
          
        </div>

        {/* home page button */}
        <div className='flex justify-center'>
        <button className='px-8 py-4 mt-32 rounded-full bg-gray-900 ring-2 ring-pink-400 text-white font-medium'>Explore products</button>
        </div>
        <div className='flex justify-center mt-10'>
              <img className="w-8 h-8 animate-bounce text-white opacity-20"  src="/public/assets/down-arrow.svg"/>
        </div>
      </div>
      
      
    </>
  )
}

export default App

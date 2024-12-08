import Header from './components/Header';


function App() {
  

  return (
    <>
      
      <Header />
      <div className='ml-20 mr-20 bg-gradient-to-b from-sky-100 to-white  h-[694px] flex justify-center items-center flex-col rounded-2xl'>
        <h1 className='font-poppins  text-center  font-normal text-3xl '><span className='text-gray-900 text-pretty text-6xl font-bold '>Unleash Creativity</span>
        </h1>
        <p className='font-poppins mt-2 text-gray-400 text-center   font-light text-3xl tracking-wide'> Own Masterpieces – 
          <span className="underline decoration-gray-900">Discover Art That Speaks to You</span>
        </p>
      </div>
      
    </>
  )
}

export default App

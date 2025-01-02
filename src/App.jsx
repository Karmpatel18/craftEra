import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Cards from './components/Cards';

import ContactForm from './components/contact';
import MainFooter from './components/MainFooter';
import SignIn from './components/login';
import SignUpPage from './components/signup';
import AboutUs from './components/about';
import './style.css';









function App() {
  return (
    <><Router>
      <div className='fixed top-0 flex left-0 w-full  backdrop-blur-lg  z-50'>
      <Header />
      </div>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={<>
            <div className='ml-6 mt-28  mr-6 font-poppins bg-neutral-200/50 h-[694px] flex flex-col rounded-lg '>
              
              <div className='flex mt-64 flex-row justify-center items-center space-x-6 text-neutral-800'>
                <div className='flex text-center font-bold text-6xl'>Unleash</div>
                <div>
                  <img className='h-20 w-20 animate-spin-slow' src='/assets/blue.png' alt="spinning graphic" />
                </div>
                <div className='flex text-center font-bold text-6xl'>Creativity</div>
              </div>

              <div className="flex flex-row justify-center item-center">
                <div className='text-center mt-2 font-extralight text-3xl'>
                  Own Masterpieces Discover Art That Speaks to You
                </div>
              </div>

              {/* home page button */}
              <div className='flex justify-center'>
                <button className='px-8 py-4 mt-32 rounded-full bg-neutral-800 ring-2 ring-pink-400 text-white font-medium'>
                  Explore products
                </button>
              </div>
              <div className='flex justify-center mt-10'>
                <img className="w-8 h-8 animate-bounce text-white opacity-20" src="/assets/down-arrow.svg" alt="down arrow" />
              </div>
            </div>
{/* search bar and category section starts */}
            
            <div className="mt-8 border-y-[2px] border-neutral-200/50">
            <div className='font-poppins px-8 pt-10 text-3xl font-medium'>
             &#128075; Hey welcome back user1!!
            </div>


            

            

            <div className="font-poppins flex flex-row my-8 space-x-4">
              <div className="max-w-lg ml-8 flex-1">
                <div className='flex flex-row '>
                  <input type='type' placeholder='Enter product name ' className=' font-normal text-md placeholder:text-neutral-500 focus:outline-none  w-42 md:w-full bg-neutral-200/50 rounded-l-full px-4 py-[10px] '></input>
                  <div className="flex ">
                  <button className='px-4 bg-neutral-800 text-white border-2 border-neutral-400 rounded-r-full -translate-x-[2px]'>search</button>
                  </div>
                </div>
              </div>
              <div className='flex font-medium space-x-4'>
                <button className="bg-neutral-200/50 text-slate-800 rounded-full px-10 max-w-lg hover:ring-neutral-500 ring-inset ring-neutral-200/50 ring-2 duration-500">Art</button>
                <button className="bg-neutral-200/50 text-slate-800 rounded-full px-10 max-w-lg hover:ring-neutral-500 ring-inset ring-neutral-200/50 ring-2 duration-500">Handicraft</button>
                <button className="bg-neutral-200/50 text-slate-800 rounded-full px-10 max-w-lg hover:ring-neutral-500 ring-inset ring-neutral-200/50 ring-2 duration-500">Painting</button>
                <button className="bg-neutral-800 text-white rounded-full px-10 max-w-lg hover:ring-neutral-500 ring-inset ring-neutral-200/50 ring-2 duration-500">All</button>
              </div>
            </div>

            </div>
            {/* ends here */}

            <div className="w-fit h-[800px] overflow-y-auto border-2 rounded-lg border-neutral-200/50 m-8 overflow-scroll scroll-m-1">
            <div className='flex flex-wrap mx-8 my-8 justify-evenly '>
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              <Cards cardTitle="Art piece 1" productPrice="1289" />
              
            </div>
            </div>
              

           <MainFooter/>

          </>
          } />

        {/* Login Page */}
        <Route path="/login" element={<SignIn />} />
        <Route path='/about' element={<AboutUs />} />
        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUpPage />} />

        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </Router>
      {/* // App component add from here  */}
      


    </>
  );
}

export default App;
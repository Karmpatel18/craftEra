import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Header from './components/Header';
import Cards from './components/Cards';
import MainFooter from './components/MainFooter';
import SignIn from './components/auth/login';
import SignUpPage from './components/auth/signup';
import AboutUs from './components/about';
import './style.css';
import BuyCart from './components/BuyCart';
import HeroScroll from './components/HeroScroll';

import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import SearchBar from './components/searchSideBar/SearchBar';
import ProfilePage from './components/userProfile/ProfilePage';









function App() {
  function smoothScroll() {
    const target = document.getElementById("target-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
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
            <div className='ml-6 mt-24  mr-6 font-poppins bg-neutral-200/50 h-[694px] flex flex-col rounded-lg justify-evenly'>
              <HeroScroll />
              <div className="pt-6 text-neutral-800">
                <div className='flex  flex-row justify-center items-center space-x-6 text-neutral-800'>

                  <div className='flex  relative text-center font-semibold tracking-tighter text-6xl'>Craftera
                    <img className="absolute top-4" src="/assets/underline.png" />
                  </div>
                </div>

                <div className="flex flex-col  w-full justify-center items-center">
                  <div className=' mt-8 font-normal  text-lg tracking-tighter'>
                    Empowering Artists, Transforming Passions into Profits
                  </div>
                  <div className='  font-light text-md max-w-3xl text-center tracking-tight '>
                    A platform where creativity thrives, freedom reigns, and artistry earns its true value
                  </div>
                </div>

                {/* home page button */}
                <div className='flex justify-center'>
                  <button
                    onClick={smoothScroll}
                    className='px-8 py-4 mt-10 rounded-full bg-neutral-800 ring-[1px] tracking-tight ring-pink-400 text-white font-medium'>
                    Explore products
                  </button>
                </div>
                <div className='flex justify-center mt-10'>
                  <img className="w-8 h-8 animate-bounce text-white opacity-20" src="/assets/down-arrow.svg" alt="down arrow" />
                </div>
              </div>
            </div>
            {/* search bar and category section starts */}
            <div id="target-section">
            </div>


            <div className="flex flex-col mt-12 border-y-[1px] border-neutral-200 ">

              <div className='flex mx-28 my-2   '>
                <SearchBar />
              </div>
              <div className="flex mx-28 h-[800px] overflow-scroll    border-neutral-200   scroll-m-1">
                <div className='flex flex-wrap  justify-between border-[1px] border-neutral-200 rounded-sm p-6'>
                  <Cards />



                </div>
              </div>
            </div>

            <div className='px-24 mt-14 space-y-2 '>
              <div className='text-4xl  font-semibold text-neutral-800 '> Get started with Craftera
              </div>
              <div className='text-lg font-normal text-neutral-500'>Join our community of artists and start your creative journey today</div>
            </div>
            <div className='my-6'>
              <div className='flex w-full p-4 justify-evenly mb-14'>
                <div className='px-6 py-4 gap-2 flex-col max-w-sm min-h-[340px] bg-white  text-neutral-800 text-sm  justify-between items-center border-[1px] border-neutral-200 rounded-md hover:shadow-lg duration-300'>
                  <img className='w-20 h-20' src="/assets/idea.png" />
                  <div className="flex flex-col gap-1">
                    <div className='text-xl mt-2 font-semibold'>Turn your passion into reality</div>
                    <div className='text-sm mt-2   text-neutral-500'>Got a unique idea? Craftera empowers artists to bring their creative visions to life. Showcase your talent and let the world fall in love with your art.</div>
                    <div className='mt-8 flex gap-2 items-center font-medium text-neutral-800 cursor-pointer'>Learn more<HiOutlineArrowSmallRight /></div>
                  </div>
                </div>

                <div className='px-6 py-4 gap-2 flex-col max-w-sm min-h-[340px] bg-white  text-neutral-800 text-sm  justify-center items-center border-[1px] border-neutral-200 rounded-md hover:shadow-lg duration-300'>
                  <img className='w-20 h-20' src="/assets/ship.png" />
                  <div className="flex flex-col gap-1">
                    <div className='text-xl mt-2 font-semibold'>Set your art free</div>
                    <div className='text-sm mt-2   text-neutral-500'>Craftera gives you the freedom to price and sell your creations on your terms. It&apos;s your art, your rules—reach buyers who truly value your work.</div>
                    <div className='mt-8 flex gap-2 items-center font-medium text-neutral-800 cursor-pointer'>Learn more<HiOutlineArrowSmallRight /></div>
                  </div>
                </div>

                <div className='px-6 py-4 gap-2 flex-col max-w-sm min-h-[340px] bg-white  text-neutral-800 text-sm  justify-center items-center border-[1px] border-neutral-200 rounded-md hover:shadow-lg duration-300'>
                  <img className='w-20 h-20' src="/assets/earn.png" />
                  <div className="flex flex-col gap-1">
                    <div className='text-xl mt-2 font-semibold'>Turn passion into profit</div>
                    <div className='text-sm mt-2   text-neutral-500'>Earn what you deserve for your hard work. At Craftera, artists get the opportunity to monetize their talent and build a sustainable income.</div>
                    <div className='mt-8 flex gap-2 items-center font-medium text-neutral-800 cursor-pointer'>Learn more<HiOutlineArrowSmallRight /></div>
                  </div>
                </div>



              </div>
            </div>



          </>
          } />

        {/* routes  */}

        <Route path="/login" element={<SignIn />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path="/account" element={<Navigate to="/account/profile" replace />} />
        <Route path='/account/*' element={<ProfilePage />} />

        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:id" element={<BuyCart />} />

      </Routes>
    </Router>
      {/* // App component add from here  */}

      <MainFooter />


    </>
  );
}

export default App;
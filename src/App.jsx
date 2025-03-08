import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cards from './components/Cards';
import MainFooter from './components/MainFooter';
import SignIn from './components/auth/login';
import SignUpPage from './components/auth/signup';
import AboutUs from './components/about';
import './style.css';
import BuyCart from './components/BuyCart';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";



import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import SearchBar from './components/searchSideBar/SearchBar';
import ProfilePage from './components/userProfile/ProfilePage';
import Navbar from './components/nav/Navbar';
import HeroVideoDialog from './components/hero/HeroVideoDialog';







function App() {
  function smoothScroll() {
    const target = document.getElementById("target-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className='flex w-full justify-between flex-col h-full'><Router>
      <div className='  flex left-0 w-full  backdrop-blur-lg  z-50'>
        <Navbar />
      </div>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={<>
            <div className='flex px-8 font-poppins gap-14 bg-white h-[706px] rounded-md mx-22 py-20'>
              <div className='flex flex-col'>
                <div className='text-5xl flex text-nowrap  font-medium text-neutral-900 tracking-tighter my-4'>Put people first</div>
                <div className='flex max-w-lg text-neutral-670 text-md  mt-6 tracking-tight text-wrap'>Fast, user-friendly and engaging - turn HR into people and culture and streamline your daily operations with your own branded app</div>
                <div className=' mt-8 flex border-[1px] w-full justify-between p-1 rounded-lg border-neutral-300 items-center'>
                  <div className='px-3 tracking-tight'>Get started</div>
                  <div className='bg-neutral-800 text-neutral-50 px-6 py-2 rounded-md font-medium tracking-tight'>watch</div>
                </div>
                <div className='flex w-full gap-6 mt-10'>
                  <div className="flex flex-col">
                    <div className='flex text-3xl font-semibold'>75.2%</div>
                    <div className='flex text-sm font-normal tracking-tight pb-6'>Average daily activity</div>
                  </div>
                  <div className='h-full border-r-[1px] border-neutral-200'></div>
                  <div className="flex flex-col">
                    <div className='text-3xl font-semibold'>~20k</div>
                    <div className='text-sm font-normal tracking-tight pd-6'>Average daily users</div>
                  </div>

                </div>
                <div className='w-full border-b-[1px] border-neutral-200'></div>
                <div className="flex mt-3 gap-4 items-center">
                  <div className='flex gap-1.5'>
                    <FaStar size={22} />
                    <FaStar size={22} />
                    <FaStar size={22} />
                    <FaStar size={22} />
                    <FaStarHalfStroke size={22} />
                  </div>
                  <div className='text-md font-medium text-neutral-900'>4.5</div>
                  <div className='text-sm tracking-tighter font-normal text-neutral-500'>Average user rating</div>
                </div>

              </div>
              <div className='w-full h-auto bg-neutral-200  rounded-lg p-4'>
                <div className='w-full h-full bg-neutral-300 rounded-lg'>
                  <div className="relative">
                    <HeroVideoDialog
                      className="block dark:hidden"
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                      thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                      thumbnailAlt="Hero Video"
                    />
                    <HeroVideoDialog
                      className="hidden dark:block"
                      animationStyle="from-center"
                      videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                      thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                      thumbnailAlt="Hero Video"
                    />
                  </div>
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


    </div>
  );
}

export default App;
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Cart from './Cart';
import { HiOutlineArrowRight } from "react-icons/hi2";
import UserProfile from './nav/UserProfile';
import useAuth from '../hooks/useAuth';

function Header() {
  const isAuthenticated = useAuth();



  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <>
      <div className="w-full pl-32 pr-32 my-6 flex justify-between items-center font-poppins">
        <div className="flex flex-row items-center">

          <div className="font-bold text-3xl text-neutral-800 ">
            <img className="h-10" src='/assets/header1.png' alt='Craftera' loading='lazy' />
          </div>
        </div>

        <div className="flex  flex-row text-md font-medium gap-12 transition-all duration-200 items-center align-middle tracking-wide">
          <NavLink to="/"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900  duration-200  text-lg font-medium tracking-tight  transition-all "
                : "text-neutral-600 hover:text-neutral-800   text-base transition-all duration-200 tracking-tighter  "
            }
          >Home</NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive
              ? "text-neutral-900  duration-200  text-lg font-medium  tracking-tight transition-all "
              : "text-neutral-600 hover:text-neutral-800   text-base transition-all duration-200 tracking-tighter"
          }>About</NavLink>
          <NavLink to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900  duration-200  text-lg font-medium  tracking-tight transition-all "
                : "text-neutral-600 hover:text-neutral-800   text-base transition-all duration-200 tracking-tighter "}>
            Contact
          </NavLink>
          <Cart />


          <div>
            {isAuthenticated ? (<div className="flex">
              <Link to="/account" >
                <UserProfile />
              </Link>
            </div>) : (<Link to="/login">
              <div className='flex ring-[1px] ring-inset ring-neutral-700 rounded-md  gap-2 px-3 py-2 items-center text-center hover:bg-neutral-900 hover:text-neutral-50 transition-all duration-300 hover:scale-[110%] group'>
                <div className=" text-gray-800 group-hover:text-neutral-50 transition-all duration-300  text-ellipsis font-normal tracking-tighter">Get started</div>
                <div className="flex items-center justify-center h-6 w-6">
                  <HiOutlineArrowRight />
                </div>
              </div>
            </Link>)}



          </div>



        </div>
      </div>
    </>
  );
}

export default Header;

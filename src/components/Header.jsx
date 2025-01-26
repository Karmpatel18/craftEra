import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import Cart from './Cart';
import { HiOutlineArrowRight } from "react-icons/hi2";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onClick = () => {
    setIsLoggedIn(prev => !prev);
  }
  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <>
      <div className="w-full pl-16 pr-16 my-8 flex justify-between items-center font-poppins">
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

          {/* <div onClick={onClick} className="h-8 w-8 text-white rounded-full bg-gray-900"></div> */}
          {isLoggedIn ? (<div className="flex " onClick={onClick}>
            <Link to="/login">
              {isLoggedIn && <div className='flex ring-[1px] ring-inset ring-neutral-700 rounded-md  gap-2 px-3 py-2 items-center text-center'><div className=" text-gray-800   text-ellipsis font-normal tracking-tighter">Get started</div><div className="flex items-center justify-center h-6 w-6"><HiOutlineArrowRight /></div></div>}
            </Link>
            {/* <Link to="/signup">
                { isLoggedIn && <div className="px-4 py-2 text-white rounded-lg bg-gray-900">Sign up</div>}
              </Link> */}
          </div>) : (<div className="">
            <Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>user</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Selling</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Setting</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </Avatar>

          </div>

          )}
        </div>
      </div>
    </>
  );
}

export default Header;

import { Routes, Route, NavLink ,  } from 'react-router-dom';
import ProductSelling from './ProductSelling';
import RevenuePage from './RevenuePage';
import OrdersPage from './OrdersPage';
import SettingsPage from './SettingsPage';
import { CgProfile } from "react-icons/cg";
import { MdOutlineSell } from "react-icons/md";
import { PiDatabaseLight } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";


export default function ProfilePage() {
  return (
    <>
      <div className='mt-28 flex w-full border-t-[1px] border-neutral-200'></div>
      <div className=" flex mx-16 border-x-[1px] border-neutral-200">
        <div className="font-normal flex flex-col border-r-[1px] border-neutral-200 w-sm  ">
          <div className='font-semibold tracking-tighter text-2xl text-neutral-800 px-4 py-3 mb-6 m-1'>My profile</div>
          <NavLink to='/account/profile'
            className={({ isActive }) =>
              isActive
                ? "bg-neutral-100 rounded-sm m-1 duration-300 transition-all"
                : "bg-none rounded-sm m-1 duration-300 transition-all  "
            }>
            <div className='flex  tracking-tighter text-neutral-800   px-4 py-2 gap-2 items-center '><div className='text-neutral-800'><CgProfile size={18} /></div> Profile </div>
          </NavLink>

          <NavLink to='/account/sell'
            className={({ isActive }) =>
              isActive
                ? "bg-neutral-100 rounded-sm m-1 duration-300 transition-all"
                : "bg-none rounded-sm m-1 duration-300 transition-all  "
            }>
            <div className='flex gap-2 items-center  tracking-tighter text-neutral-900   px-4 py-2 '> <div className='text-neutral-800'><MdOutlineSell size={18} /></div>Selling </div>
          </NavLink>

          <NavLink to='/account/orders'
            className={({ isActive }) =>
              isActive
                ? "bg-neutral-100 rounded-sm m-1 duration-300 transition-all"
                : "bg-none rounded-sm m-1 duration-300 transition-all  "
            }>
            <div className='flex gap-2 items-center  tracking-tighter text-neutral-900   px-4 py-2 '><div className="text-neutral-800"><PiDatabaseLight size={18} /></div> Orders </div>
          </NavLink>

          <NavLink to='/account/settings'
            className={({ isActive }) =>
              isActive
                ? "bg-neutral-100 rounded-sm m-1 duration-300 transition-all"
                : "bg-none rounded-sm m-1 duration-300 transition-all  "
            }>
            <div className='flex gap-2 items-center  tracking-tighter text-neutral-900   px-4 py-2 '><div className='text-neutral-800'><VscSettings size={18} /></div> Setting </div>
          </NavLink>

        </div>

        <div className="flex w-full h-[100%] items-center justify-start  bg-neutral-100">
          <Routes>
          
            <Route path="/profile" element={<RevenuePage />} />
            <Route path="/sell" element={<ProductSelling />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}



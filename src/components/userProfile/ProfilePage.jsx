import {Link, Routes, Route} from 'react-router-dom';
import ProductSelling from './ProductSelling';
import RevenuePage from './RevenuePage';
import OrdersPage from './OrdersPage';
import SettingsPage from './SettingsPage';


export default function ProfilePage() {
  return (
    <div className="mt-28 flex mx-28 border-[1px] border-neutral-200 h-[664px]   rounded-md">
      <div className="font-normal flex flex-col border-r-[1px] border-neutral-200   ">
      <Link to = '/account'>
      <div className='  tracking-tighter text-neutral-900  w-56 px-4 py-2'> Profile </div>
      </Link>
      <div className='flex border-t-[1px] border-neutral-200'></div>
      <Link to = '/account/sell'>
      <div className='  tracking-tighter text-neutral-900  w-56 px-4 py-2'> Selling </div>
      </Link>
      <div className='flex border-t-[1px] border-neutral-200'></div>
      <Link to = '/account/orders'>
      <div className='  tracking-tighter text-neutral-900  w-56 px-4 py-2'> Orders </div>
      </Link>
      <div className='flex border-t-[1px] border-neutral-200'></div>
      <Link to = '/account/settings'>
      <div className='  tracking-tighter text-neutral-900  w-56 px-4 py-2'> Setting </div>
      </Link>
      <div className='flex border-t-[1px] border-neutral-200'></div>
      </div>

      <div className="flex w-full h-[100%] items-center justify-start ">
      <Routes>
        <Route path = '/'element={<RevenuePage/>}/>
        <Route path = '/sell'element={<ProductSelling/>}/>
        <Route path = '/orders'element={<OrdersPage/>}/>
        <Route path = '/settings'element={<SettingsPage/>}/>
      </Routes>
      </div>
    </div>
  )
}



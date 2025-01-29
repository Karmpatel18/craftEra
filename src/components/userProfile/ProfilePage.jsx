import {Link, Routes, Route} from 'react-router-dom';
import ProductSelling from './ProductSelling';

export default function ProfilePage() {
  return (
    <div className="mt-28 flex mx-28">
      <Link to = '/account/sell'>
      <div > navigate to product </div>
      </Link>

      <div className="flex">
      <Routes>
        <Route path = '/sell'element={<ProductSelling/>}/>
      </Routes>
      </div>
    </div>
  )
}



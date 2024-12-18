import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="pl-10 pr-10 mt-8 mb-8 flex justify-between items-center font-poppins">
        <div className="flex flex-row items-center">
          <div>
            <img className='h-10 w-10 items-center' src='/public/assets/pink.png' alt="Logo" />
          </div>
          <div className="font-bold text-3xl">
            <h2>craftEra</h2>
          </div>
        </div>

        <div className="flex flex-row text-md font-normal space-x-10 items-center align-middle">
          <Link to="/" className="">Home</Link>
          <Link to="/about" className="">About</Link>
          <Link to="/contact" className="">Contact</Link>
          <Link to="/login">
            <div className="px-4 py-2 text-white rounded-lg bg-gray-900">Signin</div>
          </Link>
          <Link to="/signup">
            <div className="px-4 py-2 text-white rounded-lg bg-gray-900">Sign up</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;

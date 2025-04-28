import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FiShoppingBag } from "react-icons/fi";
import useAuth from '../../hooks/useAuth';
import Cart from '../Cart';
import UserProfile from '../nav/UserProfile';

function Navbar() {
  const isAuthenticated = useAuth();

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                className="h-8 w-auto" 
                src='/assets/header1.png' 
                alt='Craftera' 
                loading='lazy' 
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`
              }
            >
              About
            </NavLink>

            <NavLink 
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`
              }
            >
              Contact
            </NavLink>

            {isAuthenticated && (
              <NavLink
                to="/sell"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`
                }
              >
                Sell Art
              </NavLink>
            )}

            <div className="relative">
              <Cart />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <UserProfile />
            ) : (
              <Link 
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-neutral-800 transition-colors duration-200"
              >
                Get Started
                <HiOutlineArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "text-neutral-900 bg-neutral-50"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "text-neutral-900 bg-neutral-50"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "text-neutral-900 bg-neutral-50"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
              }`
            }
          >
            Contact
          </NavLink>

          {isAuthenticated && (
            <NavLink
              to="/sell"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
            >
              Sell Art
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

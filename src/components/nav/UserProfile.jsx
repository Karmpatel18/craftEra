import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiLogOut, FiShoppingBag } from 'react-icons/fi';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      try {
        const userData = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        
        if (!userData || !token) {
          setUser(null);
          setIsLoading(false);
          return;
        }

        const parsedUser = JSON.parse(userData);
        if (parsedUser && typeof parsedUser === 'object' && parsedUser.id) {
          setUser(parsedUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
    // Add event listener for storage changes
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Clear all user data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    
    // Close the dropdown
    setIsOpen(false);
    
    // Navigate to home page
    navigate('/');
    
    // Reload the page to clear any cached data
    window.location.reload();
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-neutral-200 bg-neutral-100 flex items-center justify-center">
        <FiUser className="w-5 h-5 text-neutral-400" />
      </div>
    );
  }

  // Show nothing if not authenticated
  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-neutral-200">
          {user.profileImage ? (
            <img
              src={`http://localhost:3001${user.profileImage}`}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
              <FiUser className="w-5 h-5 text-neutral-400" />
            </div>
          )}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-neutral-200">
          <div className="px-4 py-2 border-b border-neutral-200">
            <p className="text-sm font-medium text-neutral-900">{user.name}</p>
            <p className="text-xs text-neutral-500">{user.email}</p>
          </div>

          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
            onClick={() => setIsOpen(false)}
          >
            <FiUser className="w-4 h-4 mr-2" />
            Profile
          </Link>

          <Link
            to="/sell"
            className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
            onClick={() => setIsOpen(false)}
          >
            <FiShoppingBag className="w-4 h-4 mr-2" />
            Sell Art
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-neutral-50"
          >
            <FiLogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

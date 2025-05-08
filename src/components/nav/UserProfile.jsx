import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiLogOut, FiShoppingBag } from 'react-icons/fi';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Default avatar as a data URL (a simple gray circle)
  const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E5E7EB'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
          setIsLoading(false);
          return;
        }
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setUser(userData);
      // Update localStorage with fresh data
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();

    // Listen for profile image updates
    const handleProfileImageUpdate = (event) => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        setUser({
          ...userData,
          profileImage: event.detail.profileImage
        });
      }
    };

    // Add event listeners
    window.addEventListener('profileImageUpdated', handleProfileImageUpdate);
    
    return () => {
      window.removeEventListener('profileImageUpdated', handleProfileImageUpdate);
    };
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

  // Show loading state with default avatar
  if (isLoading) {
    return (
      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-neutral-200">
        <img
          src={defaultAvatar}
          alt="Default Profile"
          className="w-full h-full object-cover"
        />
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
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultAvatar;
              }}
            />
          ) : (
            <img
              src={defaultAvatar}
              alt="Default Profile"
              className="w-full h-full object-cover"
            />
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

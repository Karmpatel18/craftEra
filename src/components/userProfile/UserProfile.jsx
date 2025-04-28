import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Settings, LogOut, DollarSign, Plus } from 'lucide-react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
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
            navigate('/login');
            return;
          }
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data);
        setProfileImage(data.profileImage);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profileImage', file);

      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/api/v1/user/upload-profile-image', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload image');
        }

        const data = await response.json();
        setProfileImage(data.imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
        setError('Failed to upload profile image');
      }
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3001/api/v1/user/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/api/v1/user/update-profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          bio: user.bio
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img
                  src={user.profileImage ? `http://localhost:3001${user.profileImage}` : '/assets/default-profile.png'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
                <label
                  htmlFor="profile-image-upload"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer shadow-lg"
                >
                  <Camera size={20} />
                  <input
                    id="profile-image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 pb-8 px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 hover:text-red-600"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-4 border-b mb-8">
              <button
                className={`pb-2 ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-black font-medium'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button
                className={`pb-2 ${
                  activeTab === 'products'
                    ? 'border-b-2 border-black font-medium'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('products')}
              >
                My Products
              </button>
              <button
                className={`pb-2 ${
                  activeTab === 'revenue'
                    ? 'border-b-2 border-black font-medium'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('revenue')}
              >
                Revenue
              </button>
              <button
                className={`pb-2 ${
                  activeTab === 'settings'
                    ? 'border-b-2 border-black font-medium'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {activeTab === 'profile' && (
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      value={user.bio || ''}
                      onChange={(e) => setUser({ ...user, bio: e.target.value })}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                  >
                    Save Changes
                  </button>
                </form>
              )}

              {activeTab === 'products' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">My Products</h2>
                    <button
                      onClick={() => navigate('/sell')}
                      className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                      <Plus size={20} />
                      Add New Product
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {user.products?.map((product) => (
                      <div
                        key={product._id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <img
                          src={`http://localhost:3001${product.image}`}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-gray-600">${product.price}</p>
                          <div className="mt-2 flex gap-2">
                            <button className="text-blue-500 hover:text-blue-600">
                              Edit
                            </button>
                            <button className="text-red-500 hover:text-red-600">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'revenue' && (
                <div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSign size={24} />
                      <h2 className="text-xl font-semibold">Revenue Overview</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-gray-600">Total Sales</p>
                        <p className="text-2xl font-bold">${user.totalSales || 0}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-gray-600">This Month</p>
                        <p className="text-2xl font-bold">${user.monthlySales || 0}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-gray-600">Total Products</p>
                        <p className="text-2xl font-bold">{user.products?.length || 0}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Account Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Change Password
                        </label>
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Notification Settings
                        </label>
                        <div className="mt-2 space-y-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="ml-2">Email notifications</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="ml-2">Order updates</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile; 
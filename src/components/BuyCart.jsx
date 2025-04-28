import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { HiMiniArrowLeft } from "react-icons/hi2";
import { FiShoppingBag, FiHeart, FiShare2, FiCheck, FiTruck, FiShield, FiClock, FiStar } from 'react-icons/fi';

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin"></div>
      <p className="text-neutral-600 font-medium">Loading product details...</p>
    </div>
  </div>
);

const BuyCart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/api/v1/product/${id}`);
        const data = await response.json();

        if (response.ok) {
          setProduct(data);
        } else {
          setError(data.message || 'Product not found');
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    setIsAddingToCart(true);
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find(item => item._id === product._id);
      
      if (existingItem) {
        setError('This artwork is already in your cart');
        return;
      }
      
      cart.push({ ...product });
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setError('Failed to add product to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  if (error) {
    return (
      <div className="w-full flex justify-center">
        <div className="flex flex-col max-w-sm w-full justify-center p-4 mt-28">
          <div className="text-neutral-400 text-sm">{error}</div>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-neutral-900 text-neutral-50 rounded hover:bg-neutral-800 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return <div className="p-4 mt-28">No product found</div>;
  }

  const totalPrice = product.price;
  const gstAmount = totalPrice * 0.18;
  const finalPrice = totalPrice + gstAmount;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Notification */}
        {showNotification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out font-medium">
            Artwork added to cart successfully!
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-md text-neutral-900 mb-8 hover:bg-neutral-50 transition-colors duration-200"
        >
          <HiMiniArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Gallery</span>
        </button>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Left Section - Image and Highlights */}
          <div className='space-y-8'>
            <div className='aspect-square w-full rounded-lg overflow-hidden border border-neutral-200'>
              <img 
                className='h-full w-full object-cover transform hover:scale-105 transition-transform duration-500' 
                src={`http://localhost:3001${product.image}`}
                loading="lazy"
                alt={product.name} 
              />
            </div>
            
            {/* Product Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <FiShield className="w-5 h-5 text-neutral-900" />
                <span className="text-sm font-medium text-neutral-900">Secure Payment</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <FiTruck className="w-5 h-5 text-neutral-900" />
                <span className="text-sm font-medium text-neutral-900">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <FiClock className="w-5 h-5 text-neutral-900" />
                <span className="text-sm font-medium text-neutral-900">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <FiStar className="w-5 h-5 text-neutral-900" />
                <span className="text-sm font-medium text-neutral-900">Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-3xl font-semibold text-neutral-900 mb-4'>{product.name}</h1>
              <p className="text-neutral-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Price:</span>
                <span className="text-xl font-semibold text-neutral-900">${product.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Category:</span>
                <span className="font-medium text-neutral-900">{product.category}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Artist:</span>
                <span className="font-medium text-neutral-900">{product.seller?.name || 'Unknown'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">GST (18%):</span>
                <span className="font-medium text-neutral-900">${gstAmount.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-neutral-900">Final Price:</span>
                  <span className="text-2xl font-bold text-neutral-900">${finalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex-1 bg-neutral-900 text-white py-4 rounded-lg hover:bg-neutral-800 transition-colors duration-200 font-medium"
                onClick={addToCart}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </button>
              <button 
                className="flex-1 border border-neutral-900 text-neutral-900 py-4 rounded-lg hover:bg-neutral-50 transition-colors duration-200 font-medium"
              >
                Buy Now
              </button>
            </div>

            <div className="flex items-center gap-6">
              <button 
                onClick={toggleWishlist}
                className={`flex items-center gap-2 ${isWishlist ? 'text-red-500' : 'text-neutral-600'} hover:text-red-500 transition-colors duration-200`}
              >
                <FiHeart size={20} />
                <span className="font-medium">Add to Wishlist</span>
              </button>
              <button className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
                <FiShare2 size={20} />
                <span className="font-medium">Share</span>
              </button>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">Product Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-600">Handcrafted with premium materials</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-600">Unique design and craftsmanship</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-600">Made by skilled artisans</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-600">Eco-friendly packaging</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">Shipping Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <FiTruck className="w-5 h-5 text-neutral-900 flex-shrink-0" />
                    <span className="text-neutral-600">Free shipping on orders above $50</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiClock className="w-5 h-5 text-neutral-900 flex-shrink-0" />
                    <span className="text-neutral-600">Delivery within 5-7 business days</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiShield className="w-5 h-5 text-neutral-900 flex-shrink-0" />
                    <span className="text-neutral-600">Secure packaging and handling</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">Return Policy</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-600">30-day return policy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-600">Free return shipping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-600">Full refund on damaged items</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCart;

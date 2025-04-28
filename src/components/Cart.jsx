import { useState, useEffect } from 'react';
import { FiShoppingBag } from "react-icons/fi";
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items from localStorage
    const loadCart = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    };

    // Initial load
    loadCart();

    // Add event listener for storage changes
    window.addEventListener('storage', loadCart);
    window.addEventListener('cartUpdated', loadCart);

    return () => {
      window.removeEventListener('storage', loadCart);
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Dispatch event to notify other components
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
      >
        <FiShoppingBag className="h-6 w-6" />
        {cartItems.length > 0 && (
          <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
            {cartItems.length}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Shopping Cart</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-neutral-500 text-center py-4">Your cart is empty</p>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center gap-4 py-2 border-b">
                    <img
                      src={`http://localhost:3001${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-neutral-600 text-sm">${item.price}</p>
                      <p className="text-xs text-neutral-500 mt-1">Unique Artwork</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    navigate('/checkout');
                    setIsOpen(false);
                  }}
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-neutral-800 transition-colors duration-200"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;

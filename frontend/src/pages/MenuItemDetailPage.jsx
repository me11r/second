import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { menuItems } from '../mock';

const MenuItemDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundItem = menuItems.find(i => i.id === parseInt(id));
    if (foundItem) {
      setItem(foundItem);
    } else {
      navigate('/menu');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({ ...item, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    navigate('/cart');
  };

  if (!item) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>;
  }

  return (
    <div className="min-h-screen bg-[#ECEC75]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => navigate('/menu')}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="relative h-96 bg-gray-200">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h1 className="font-serif text-4xl font-bold text-black mb-4">
              {item.name}
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              {item.description}
            </p>

            {/* Price & Weight */}
            <div className="flex items-baseline space-x-4 mb-6">
              <span className="text-3xl font-bold text-black">{item.price} ₸</span>
              <span className="text-gray-500">{item.weight}</span>
            </div>

            {/* Nutritional Info */}
            {item.calories && (
              <div className="grid grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">{item.calories}</div>
                  <div className="text-sm text-gray-600">ккал</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">{item.protein}</div>
                  <div className="text-sm text-gray-600">белки</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">{item.carbs}</div>
                  <div className="text-sm text-gray-600">углеводы</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">{item.fat}</div>
                  <div className="text-sm text-gray-600">жиры</div>
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">Количество:</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
              <span className="text-lg font-semibold">Итого:</span>
              <span className="text-3xl font-bold text-black">{item.price * quantity} ₸</span>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Добавить в корзину
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetailPage;

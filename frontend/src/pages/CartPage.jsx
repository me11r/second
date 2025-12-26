import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleShowWaiter = () => {
    // Просто отображаем финальный список (frontend-only)
    alert('Ваш заказ готов! Покажите этот экран официанту.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#ECEC75] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-black mb-4">Ваша корзина пуста</h2>
          <p className="text-gray-600 mb-8">Добавьте блюда из меню</p>
          <Link to="/menu">
            <Button className="bg-black text-white hover:bg-gray-800">
              Перейти к меню
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ECEC75]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black">
            Ваш заказ
          </h1>
          <Button
            onClick={clearCart}
            variant="outline"
            className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Очистить
          </Button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-6">
                {/* Image */}
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.weight}</p>
                  <div className="text-lg font-bold text-black">{item.price} ₸</div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-bold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Total */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-black">
                    {item.price * item.quantity} ₸
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Итого:</span>
              <span className="font-semibold">{getTotalPrice()} ₸</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-2xl font-bold">
                <span>Полная стоимость:</span>
                <span>{getTotalPrice()} ₸</span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleShowWaiter}
            size="lg"
            className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg"
          >
            Показать официанту
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const MenuItemCard = ({ item }) => {
  return (
    <Link to={`/menu/${item.id}`}>
      <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        {/* Image */}
        <div className="relative h-56 bg-gray-200 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-black mb-2 line-clamp-1">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
            {item.description}
          </p>

          {/* Price & Weight */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-black">{item.price} ₸</span>
            <span className="text-sm text-gray-500">{item.weight}</span>
          </div>

          {/* Nutritional Info */}
          {item.calories && (
            <div className="flex justify-between text-xs text-gray-500 mb-4 pb-4 border-b">
              <span>{item.calories} ккал</span>
              <span>{item.protein}г б</span>
              <span>{item.carbs}г у</span>
              <span>{item.fat}г ж</span>
            </div>
          )}

          {/* Button */}
          <Button className="w-full bg-black text-white hover:bg-gray-800">
            Подробнее
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default MenuItemCard;

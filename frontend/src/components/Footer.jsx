import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Instagram, MessageCircle, Facebook } from 'lucide-react';
import { cafeInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">[Л]</span>
              </div>
              <span className="text-xl font-bold">{cafeInfo.name}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {cafeInfo.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href={`tel:${cafeInfo.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {cafeInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href={`mailto:${cafeInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {cafeInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">{cafeInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <nav className="space-y-2 mb-6">
              <Link to="/menu" className="block text-gray-400 hover:text-white transition-colors">
                Меню
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                О нас
              </Link>
              <Link to="/reviews" className="block text-gray-400 hover:text-white transition-colors">
                Отзывы
              </Link>
              <Link to="/contacts" className="block text-gray-400 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>
            <div className="flex space-x-4">
              <a
                href={cafeInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={cafeInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href={cafeInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 {cafeInfo.name}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

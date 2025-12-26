import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { cafeInfo, menuCategories, cafeGallery } from '../mock';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#ECEC75] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-black mb-6">
              Добро пожаловать в<br />{cafeInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {cafeInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                  Посмотреть меню
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="border-2 border-black px-8 py-6 text-lg">
                  Контакты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Время работы</h3>
              <p className="text-gray-600">{cafeInfo.workingHours}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <a href={`tel:${cafeInfo.phone}`} className="text-gray-600 hover:text-black transition-colors">
                {cafeInfo.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">{cafeInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Preview */}
      <section className="py-16 bg-[#ECEC75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
              Наше меню
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Откройте для себя разнообразие вкусов нашей кухни
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {menuCategories.map((category) => (
              <Link
                key={category.id}
                to="/menu"
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-4 aspect-h-3 relative h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
                Смотреть полное меню
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
              Атмосфера нашего кафе
            </h2>
            <p className="text-xl text-gray-700">
              [Добавьте сюда реальные фотографии интерьера вашего кафе]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cafeGallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image}
                  alt={`Интерьер кафе ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Посетите нас сегодня!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Мы ждем вас каждый день с {cafeInfo.workingHours}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8">
                Посмотреть меню
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8">
                Как нас найти
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

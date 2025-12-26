import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Facebook, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { cafeInfo } from '../mock';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: just show alert
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#ECEC75] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-black mb-8">
                Контактная информация
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ECEC75] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-gray-600">{cafeInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ECEC75] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <a href={`tel:${cafeInfo.phone}`} className="text-gray-600 hover:text-black">
                      {cafeInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ECEC75] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href={`mailto:${cafeInfo.email}`} className="text-gray-600 hover:text-black">
                      {cafeInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ECEC75] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                    <p className="text-gray-600">Ежедневно: {cafeInfo.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <a
                    href={cafeInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#ECEC75] hover:bg-[#e6e67c] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-black" />
                  </a>
                  <a
                    href={cafeInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#ECEC75] hover:bg-[#e6e67c] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 text-black" />
                  </a>
                  <a
                    href={cafeInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#ECEC75] hover:bg-[#e6e67c] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-black" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-black mb-8">
                Напишите нам
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 h-12"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#ECEC75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-black mb-4">
              Как нас найти
            </h2>
            <p className="text-gray-700">
              [Здесь вставьте Google Maps iframe с вашим адресом]
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Чтобы добавить карту:
                </p>
                <ol className="text-left mt-4 space-y-2 text-gray-600 max-w-md mx-auto">
                  <li>1. Перейдите на Google Maps</li>
                  <li>2. Найдите ваш адрес</li>
                  <li>3. Нажмите "Поделиться" → "Встроить карту"</li>
                  <li>4. Скопируйте HTML код</li>
                  <li>5. Вставьте в ContactsPage.jsx</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;

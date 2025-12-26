import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../mock';

const ReviewsPage = () => {
  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#ECEC75]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-4">
            Отзывы наших гостей
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Мы ценим мнение каждого нашего гостя
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Add Review Placeholder */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Оставьте свой отзыв
            </h3>
            <p className="text-gray-600 mb-6">
              [Здесь можно добавить форму для отзывов или ссылку на стороннюю платформу отзывов]
            </p>
            <div className="text-gray-500">
              <p>Напишите нам на:</p>
              <p className="font-semibold">[ваш_email@example.com]</p>
              <p>или оставьте отзыв в наших социальных сетях</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;

// src/components/CoachSelection.jsx
import React from 'react';

const coaches = [
  {
    id: 1,
    name: 'Test name for coach 1',
    seats: 4,
    pricePerKm: 2.5,
    image: '/assets/images/4-seater.jpg'
  },
  {
    id: 2,
    name: 'Test name for coach 2',
    seats: 7,
    pricePerKm: 3.5,
    image: '/assets/images/7-seater.jpg'
  },
  {
    id: 3,
    name: 'Test very veryveryveryveryvery long name for coach 3',
    seats: 16,
    pricePerKm: 5.0,
    image: '/assets/images/16-seater.jpg'
  },
  {
    id: 4,
    name: 'Test name for coach 2',
    seats: 7,
    pricePerKm: 3.5,
    image: '/assets/images/7-seater.jpg'
  },
  {
    id: 5,
    name: 'Test name for coach 2',
    seats: 7,
    pricePerKm: 3.5,
    image: '/assets/images/7-seater.jpg'
  },
  {
    id: 6,
    name: 'Test name for coach 2',
    seats: 7,
    pricePerKm: 3.5,
    image: '/assets/images/7-seater.jpg'
  },
  {
    id: 7,
    name: 'Test name for coach 2',
    seats: 7,
    pricePerKm: 3.5,
    image: '/assets/images/7-seater.jpg'
  }
];

const CoachSelection = ({ formData, setFormData, onNext, onBack }) => {
  const calculatePrice = (pricePerKm) => {
    return (formData.distance * pricePerKm).toFixed(2);
  };

  const handleSelectCoach = (coach) => {
    setFormData({
      ...formData,
      selectedCoach: {
        ...coach,
        totalPrice: calculatePrice(coach.pricePerKm)
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Chọn xe đưa đón
      </h2>

      <div className="overflow-y-auto max-h-[calc(2*13rem+1rem)] pr-1">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          {coaches.map((coach) => {
            const price = calculatePrice(coach.pricePerKm);
            const isSelected = formData.selectedCoach?.id === coach.id;
            return (
              <div
                key={coach.id}
                className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}
                onClick={() => handleSelectCoach(coach)}
              >
                <div className="h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden relative group">
                  {/* Placeholder for coach image */}
                  <img src="" className="aspect-3/2 inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="line-clamp-2 font-semibold text-lg mb-3">{coach.name}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {coach.seats} Chỗ
                  </p>
                  {/* <p className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    £{coach.pricePerKm}/km
                  </p> */}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xl font-bold text-blue-600 flex items-center justify-between">
                    Tổng:
                    <span>£{price}</span>
                  </p>
                </div>
                {isSelected && (
                  <div className="absolute top-4 right-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between space-x-4 mt-8">
        <button
          onClick={onBack}
          className="flex-grow w-full justify-center px-6 py-3 rounded-lg bg-gray-600 text-white font-medium hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Quay lại
        </button>
        <button
          onClick={onNext}
          className={`flex-grow w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center ${!formData.selectedCoach ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'}`}
          disabled={!formData.selectedCoach}
        >
          Tiếp tục
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CoachSelection;
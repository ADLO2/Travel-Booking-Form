// src/components/BookingSummary.jsx
import React, { useState } from 'react';

const BookingSummary = ({ formData, onNext, onBack }) => {
  const [showNotification, setShowNotification] = useState(false);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi', options);
  };

  const handleConfirmBooking = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      onNext();
    }, 2000);
  };

  return (
    
    <div className="relative max-w-xl mx-auto p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {showNotification && (
        <div className="absolute top-4 right-4 left-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-between shadow-lg transition-all duration-300 animate-fade-in-down">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p>Đặt xe thành công, xin cảm ơn quý khách!</p>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Xác nhận thông tin
      </h2>
      <div className="space-y-8">
        <div className="border-b pb-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center text-gray-800">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Thông tin người đặt
          </h3>
          <div className="space-y-2 pl-7">
            <p className="text-gray-600 flex items-center">Tên: <span className="ml-2 text-gray-800 font-medium">{formData.name}</span></p>
            <p className="text-gray-600 flex items-center">Sđt: <span className="ml-2 text-gray-800 font-medium">{formData.phone}</span></p>
            {formData.address && (
              <p className="text-gray-600 flex items-center">Địa chỉ: <span className="ml-2 text-gray-800 font-medium">{formData.address}</span></p>
            )}
          </div>
        </div>

        <div className="border-b pb-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center text-gray-800">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Thông tin chuyến đi
          </h3>
          <div className="space-y-2 pl-7">
            <p className="text-gray-600 flex items-center">Từ: <span className="ml-2 text-gray-800 font-medium">{formData.pickup}</span></p>
            <p className="text-gray-600 flex items-center">Đến: <span className="ml-2 text-gray-800 font-medium">{formData.dropoff}</span></p>
            {/* <p className="text-gray-600 flex items-center">Distance: <span className="ml-2 text-gray-800 font-medium">{formData.distance} km</span></p> */}
            <p className="text-gray-600 flex items-center">Ngày đi: <span className="ml-2 text-gray-800 font-medium">{formatDate(formData.date)}</span></p>
          </div>
        </div>

        <div className="border-b pb-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center text-gray-800">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Xe đã chọn
          </h3>
          <div className="space-y-2 pl-7">
            <p className="text-gray-600 flex items-center">{formData.selectedCoach.name}</p>
            <p className="text-gray-600 flex items-center">{formData.selectedCoach.seats} Chỗ</p>
            {/* <p className="text-gray-600 flex items-center">Rate: £{formData.selectedCoach.pricePerKm}/km</p> */}
            <div className="mt-4 pt-4 border-t">
              <p className="text-xl font-bold text-blue-600 flex items-center justify-between">
                Thành tiền:
                <span>£{formData.selectedCoach.totalPrice}</span>
              </p>
            </div>
          </div>
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
          onClick={handleConfirmBooking}
          className="flex-grow w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center font-semibold text-lg"
        >
          Xác nhận thông tin
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
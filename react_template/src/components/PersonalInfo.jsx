// src/components/PersonalInfo.jsx
import React from 'react';

const PersonalInfo = ({ formData, setFormData, onNext, onBack }) => {
  const isFormValid = formData.name && formData.phone;

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Thông tin cá nhân
      </h2>
      <div className="space-y-6">
        <div className="relative">
          <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
            Họ và tên *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
            placeholder="Họ và tên người đặt"
            required
          />
          {formData.name && (
            <svg className="w-5 h-5 text-green-500 absolute right-3 top-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <div className="relative">
          <label className="block text-gray-700 mb-2 font-medium" htmlFor="address">
            Địa chỉ
          </label>
          <textarea
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
            rows="3"
            placeholder="Nhập địa chỉ liên lạc"
          />
          {formData.address && (
            <svg className="w-5 h-5 text-green-500 absolute right-3 top-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <div className="relative">
          <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
            Số điện thoại *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
            placeholder="(+84) "
            required
          />
          {formData.phone && (
            <svg className="w-5 h-5 text-green-500 absolute right-3 top-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <button
        onClick={onNext}
        className={`mt-8 w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center ${isFormValid ? 'bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl' : 'bg-gray-400 cursor-not-allowed'}`}
        disabled={!isFormValid}
      >
        Tiếp tục
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PersonalInfo;
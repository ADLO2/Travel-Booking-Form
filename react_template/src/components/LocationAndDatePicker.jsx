// src/components/LocationPicker.jsx
import React, { useState, useRef  } from 'react';
import { getDistanceBetweenLocations } from '../utils/getDistance.jsx';

const LocationAndDatePicker = ({ formData, setFormData, onNext, onBack }) => {
  const [calculatingDistance, setCalculatingDistance] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const inputRef = useRef(null);

  // Set pickup location to address from PersonalInfo if available and pickup is empty
  React.useEffect(() => {
    if (formData.address && !formData.pickup) {
      setFormData(prev => ({ ...prev, pickup: prev.address }));
    }
  }, [formData.address]);


  const calculateDistance = async () => {
    if (!formData.pickup || !formData.dropoff) return;
  
    setCalculatingDistance(true);
  
    try {
      const { distanceValue } = await getDistanceBetweenLocations(formData.pickup, formData.dropoff);
      const distanceInKm = Math.round(distanceValue / 1000); // convert meters to kilometers
  
      setFormData(prev => ({ ...prev, distance: distanceInKm }));
    } catch (error) {
      console.error('Using mock distance due to error:', error);
  
      const mockDistance = Math.floor(Math.random() * 50) + 10; // 10–60 km
      setFormData(prev => ({ ...prev, distance: mockDistance }));
    } finally {
      setCalculatingDistance(false);
    }
  };

  // const calculateDistance = () => {
  //   if (!formData.pickup || !formData.dropoff) return;
  //   // Mock distance calculation
  //   setCalculatingDistance(true);
  //   setTimeout(() => {
  //     const mockDistance = Math.floor(Math.random() * 50) + 10; // Random distance between 10-60 km
  //     // TODO call google api for distant calculation
  //     setFormData(prev => ({ ...prev, distance: mockDistance }));
  //     setCalculatingDistance(false);
  //   }, 1000);
  // };

  const handleLocationChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  React.useEffect(() => {
    calculateDistance();
  }, [formData.pickup, formData.dropoff]);

  const isFormValid = formData.pickup && formData.dropoff && formData.date;

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Thông tin chuyến đi
          </h2>
          <div className="space-y-6">
            <div className="Pick up field">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="pickup">
                Điểm đón
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="pickup"
                  value={formData.pickup}
                  onChange={(e) => handleLocationChange('pickup', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 group-hover:bg-white"
                  placeholder="Nhập địa chỉ đón khách"
                  required
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {formData.pickup && (
                  <svg className="w-5 h-5 text-green-500 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <div className="Drop-off field">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="dropoff">
                Điểm đến
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="dropoff"
                  value={formData.dropoff}
                  onChange={(e) => handleLocationChange('dropoff', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 group-hover:bg-white"
                  placeholder="Nhập địa chỉ muốn đi"
                  required
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {formData.dropoff && (
                  <svg className="w-5 h-5 text-green-500 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* {(formData.pickup && formData.dropoff) && (
          <div className="calculate distance block">
            {calculatingDistance ? (
              <div className="flex items-center text-blue-600 bg-blue-50 p-4 rounded-lg">
                <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Calculating route distance...
              </div>
            ) : formData.distance > 0 && (
              <div className="flex items-center bg-green-50 p-4 rounded-lg text-green-700">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Estimated distance: {formData.distance} km
              </div>
            )}
          </div>
        )} */}

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Ngày đi
          </h3>
          <div className="relative group">
            <div className="relative">
              <div className="relative w-full group">
                {/* Clickable calendar icon on the left */}
                <div
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer z-10"
                  onClick={() => inputRef.current?.showPicker?.() || inputRef.current?.focus()}
                >
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  min={today}
                  ref={inputRef}
                  className="w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 group-hover:bg-white appearance-none"
                  required
                />
              </div>
              
              {formData.date && (
                <svg className="w-5 h-5 text-green-500 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between space-x-4">
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
            className={`flex-grow w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center ${!isFormValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'}`}
            disabled={!isFormValid}
          >
            Tiếp tục
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationAndDatePicker;
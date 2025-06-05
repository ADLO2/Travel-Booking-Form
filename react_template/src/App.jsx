// src/App.jsx
import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import LocationAndDatePicker from './components/LocationAndDatePicker';
import CoachSelection from './components/CoachSelection';
import BookingSummary from './components/BookingSummary';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si'; // unofficial Zalo icon from react-icons

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    pickup: '',
    dropoff: '',
    distance: 0,
    date: '',
    selectedCoach: null
  });

  const steps = [
    { id: 1, title: 'Thông tin cá nhân', component: PersonalInfo },
    { id: 2, title: 'Thời gian và địa điểm du lịch', component: LocationAndDatePicker },
    { id: 3, title: 'Chọn xe', component: CoachSelection },
    { id: 4, title: 'Xác nhận', component: BookingSummary }
  ];

  const CurrentComponent = steps[step - 1].component;

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.phone;
      case 2:
        return formData.pickup && formData.dropoff && formData.distance && formData.date;
      case 3:
        return formData.selectedCoach;
      default:
        return true;
    }
  };

  const handleNext = (e) => {
    e && e.preventDefault();
    console.log('handleNext clicked');
    console.log('Current step:', step);
    console.log('Form data:', formData);
    console.log('Step validation:', isStepValid());
    
    if (step < steps.length && isStepValid()) {
      console.log('Moving to next step:', step + 1);
      setStep(prevStep => {
        console.log('Setting step to:', prevStep + 1);
        return prevStep + 1;
      });
    } else {
      console.log('Cannot proceed: validation failed or last step reached');
      handleSubmit()
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Here we'll implement the Google Sheets integration later
    console.log('Form submitted:', formData);
    alert('Xác nhận thông tin đặt xe! Cảm ơn quý khách đã sử dụng dịch vụ.');
    // Reset form
    setFormData({
      name: '',
      address: '',
      phone: '',
      pickup: '',
      dropoff: '',
      distance: 0,
      date: '',
      selectedCoach: null
    });
    // TODO add update to sheet (using google api?)
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-gray-900 shadow p-6 flex items-center justify-between">
        <div id="Logo" className="text-xl font-bold text-white">
          {/* Logo Placeholder */}
          <span>MyLogo</span>
        </div>
      </header>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 tracking-tight">
          Đặt xe du lịch
        </h1>

        {/* Progress bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between mb-4">
            {steps.map((s) => (
              <div
                key={s.id}
                className={`flex-1 flex flex-col items-center transition-all px-2 duration-300 ${step >= s.id ? 'text-blue-600 scale-105' : 'text-gray-400'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= s.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  {s.id}
                </div>
                <div className="text-xs md:text break-words leading-tight text-sm font-medium">{s.title}</div>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full shadow-inner">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500 shadow"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Form component with animation */}
        <div className="flex flex-col items-center animate-fadeIn">
          <div className="w-full transition-all duration-500 transform hover:scale-[1.01]">
            <CurrentComponent 
              formData={formData} 
              setFormData={setFormData} 
              onNext={handleNext}
              onBack={handleBack}
            />
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-300">
              We are a team passionate about delivering high-quality digital solutions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-300">Address: 123 Main Street, City, Country</p>
          </div>

          {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <SiZalo size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
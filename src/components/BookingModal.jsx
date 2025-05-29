import React, { useState, useEffect } from 'react';
import { Calendar, Users, Mail, Phone, User, MessageSquare, X, MapPin } from 'lucide-react';

// Move InputField outside of BookingModal
const InputField = ({ icon: Icon, type, name, placeholder, required, value, onChange, ...props }) => (
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
      <Icon className="h-5 w-5 text-gray-400" />
    </div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full pl-12 pr-4 py-3.5 border-2 rounded-lg transition-all duration-200 bg-white
          border-gray-200 hover:border-gray-300
          focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 focus:shadow-md
          placeholder-gray-400 text-gray-900 font-medium"
      value={value}
      onChange={onChange}
      required={required}
      {...props}
    />
  </div>
);

const BookingModal = ({ isOpen, onClose, selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    people: '',
    date: '',
    message: '',
  });

  useEffect(() => {
    console.log("BookingModal rendered");
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tour Booking Data:", formData);
    alert('Your booking request has been received. Our team will contact you shortly!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 relative">
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 
                      rounded-full p-2 transition-all duration-200"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Book Your Tour</h2>
            <p className="text-indigo-100 text-sm">Premium travel planning made simple</p>
          </div>
        </div>

        {/* Selected Package Badge */}
        {selectedPackage && (
          <div className="px-8 -mt-3 relative z-10">
            <div className="bg-white rounded-lg shadow-lg border-2 border-indigo-100 p-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-indigo-600" />
                <span className="text-sm text-gray-600">Enquiry for:</span>
                <span className="font-semibold text-indigo-600">{selectedPackage.name}</span>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <InputField
                icon={User}
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  icon={Phone}
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <InputField
                  icon={Users}
                  type="number"
                  name="people"
                  placeholder="Number of People"
                  min="1"
                  required
                  value={formData.people}
                  onChange={handleChange}
                />
              </div>

              <InputField
                icon={Mail}
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                icon={Calendar}
                type="date"
                name="date"
                placeholder="Preferred Date"
                required
                value={formData.date}
                onChange={handleChange}
              />

              <div className="relative group">
                <div className="absolute top-4 left-4 pointer-events-none z-10">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  placeholder="Any special request or message"
                  className="w-full pl-12 pr-4 py-3.5 border-2 rounded-lg transition-all duration-200 bg-white h-24 resize-none
                      border-gray-200 hover:border-gray-300
                      focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 focus:shadow-md
                      placeholder-gray-400 text-gray-900 font-medium"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform
                  bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                  hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl text-white"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

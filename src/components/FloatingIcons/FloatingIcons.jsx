// ContactWidget.jsx
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaComments,
  FaTimes,
  FaInstagram, // Cross icon
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconSize = 24; // Slightly smaller

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-end gap-4 mb-2"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="tel:+1234567890"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              title="Call Us"
            >
              <FaPhoneAlt size={iconSize} />
            </a>

            <a
              href="mailto:contact@example.com"
              className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              title="Email Us"
            >
              <HiOutlineMail size={iconSize} />
            </a>

            <a
              href="https://wa.me/1234567890"
              className="bg-gradient-to-r from-green-400 to-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={iconSize} />
            </a>

            <a
              href="https://instagram.com/in/your-profile"
              className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={iconSize} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
        whileTap={{ scale: 0.9 }}
        title="Contact Options"
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 600 }}
      >
        {isOpen ? <FaTimes size={26} /> : <FaComments size={26} />}
      </motion.button>
    </div>
  );
};

export default ContactWidget;

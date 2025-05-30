import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About / Logo */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-wide text-white">
            Mahakal<span className="text-indigo-500">Tours</span>
          </h3>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            Your trusted partner for spiritual journeys. Explore the divine with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-5 border-b border-indigo-500 pb-1 w-max text-white">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-indigo-500 transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#tour-packages" className="hover:text-indigo-500 transition duration-200">
                Tour Packages
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-500 transition duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-indigo-500 transition duration-200">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-indigo-500 transition duration-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold text-lg mb-5 border-b border-indigo-500 pb-1 w-max text-white">
            Contact Info
          </h4>
          <p className="mb-3 text-gray-400">
            123 Pilgrim Street, Ujjain, MP, India
          </p>
          <a href="mailto:contact@example.com" className="mb-2 flex text-gray-400">Email: contact@mahakaltours.com</a>
          <a href="tel:+919999999999" className="mb-2 text-gray-400">+91 98765 43210</a>

          <div className="flex space-x-6 mt-3">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-indigo-500 transition duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.32v21.359C0 23.408.597 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.505 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.404 24 24 23.408 24 22.679V1.32C24 .592 23.404 0 22.675 0z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-indigo-500 transition duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482A13.951 13.951 0 011.671 3.15a4.917 4.917 0 001.523 6.574 4.903 4.903 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.922 4.922 0 004.6 3.417A9.868 9.868 0 010 19.54a13.95 13.95 0 007.548 2.212c9.056 0 14.01-7.514 14.01-14.03 0-.214-.004-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-indigo-500 transition duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.976 1.256 2.243 1.318 3.609.058 1.265.069 1.645.069 4.848s-.011 3.584-.069 4.85c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.174 15.647 2.163 15.267 2.163 12s.011-3.584.069-4.85c.062-1.366.343-2.633 1.318-3.608C4.525 2.576 5.792 2.295 7.158 2.233 8.424 2.175 8.804 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.622.48 3.68 1.422 2.737 2.364 2.385 3.513 2.328 4.794.27 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.057 1.281.41 2.43 1.353 3.372.942.943 2.09 1.295 3.371 1.352C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.057 2.43-.41 3.372-1.352.943-.942 1.295-2.091 1.352-3.372C23.988 15.668 24 15.259 24 12c0-3.259-.012-3.668-.07-4.948-.057-1.281-.41-2.43-1.352-3.372-.942-.943-2.091-1.295-3.372-1.352C15.668.012 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mahakal Tours. All rights reserved.
      </div>
    </footer>
  );
}

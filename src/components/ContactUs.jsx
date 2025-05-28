import React, { useEffect, useState } from "react";

const contactDetails = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0v8a2 2 0 002 2h14a2 2 0 002-2v-8m-18 0l7.89-5.26a2 2 0 012.22 0L21 8"
        />
      </svg>
    ),
    title: "Email",
    content: "contact@mahakaltours.com",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10l1.5 2.5a9 9 0 006 3 9 9 0 006-3L21 10M12 21v-5m0 0a9 9 0 01-9-9m18 9a9 9 0 00-9-9"
        />
      </svg>
    ),
    title: "Phone",
    content: "+91 98765 43210",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a4 4 0 005.657-5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Address",
    content: "123 Pilgrim Street, Ujjain, Madhya Pradesh, India",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6l4 2" />
      </svg>
    ),
    title: "Office Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed",
  },
];

export default function ContactUs() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animate in content on mount
    const timeout = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="bg-gradient-to-br from-purple-50 to-orange-50"
      aria-label="Contact Information"
    >
      <h2
        className={`text-5xl font-bold text-center text-gray-800 mb-16 transition-transform duration-700 ease-out ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Contact{" "}
        <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Us
        </span>
      </h2>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto text-gray-700 transition-opacity duration-700 ease-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Contact details */}
        <div className="space-y-8">
          {contactDetails.map(({ icon, title, content }, i) => (
            <div
              key={i}
              className="flex items-center space-x-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div>{icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                {content.includes("\n") ? (
                  content.split("\n").map((line, idx) => (
                    <p key={idx} className="whitespace-pre-wrap text-gray-600 leading-relaxed">
                      {line}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600">{content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Images - tourism vibe */}
        <div className="grid grid-cols-2 gap-6 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Spiritual Temple"
            className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <img
            src="https://upstdc.co.in/TourImage/Capture_09Sep2024_0530_Main.png"
            alt="Pilgrimage Road"
            className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <img
            src="https://www.mptourism.com/web/image/catalog/Blog%20Image/Mahakal-ujjain1.webp"
            alt="Peaceful Nature"
            className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <img
            src="https://ramadalucknow.com/wp-content/uploads/2017/11/Exploring-Spiritual-Tourism-in-India-The-Uttar-Pradesh-Sojourn.jpg"
            alt="Spiritual Art"
            className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

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
  className="relative py-24 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/symphony.png')" }}
  aria-label="Contact Information"
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white/80 to-orange-100 backdrop-blur-sm"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <h2
      className={`text-5xl font-bold text-center text-gray-800 mb-20 transition-transform duration-700 ease-out ${
        showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      Contact{" "}
      <span className="bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
        Us
      </span>
    </h2>

    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-16 transition-opacity duration-700 ease-out ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Contact Details with frosted glass effect */}
      <div className="space-y-8">
        {contactDetails.map(({ icon, title, content }, i) => (
          <div
            key={i}
            className="flex items-start space-x-6 bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50"
          >
            <div className="text-3xl text-pink-600">{icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">{title}</h3>
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

      {/* Modern masonry-style image gallery */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {[
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
          "https://upstdc.co.in/TourImage/Capture_09Sep2024_0530_Main.png",
          "https://www.mptourism.com/web/image/catalog/Blog%20Image/Mahakal-ujjain1.webp",
          "https://ramadalucknow.com/wp-content/uploads/2017/11/Exploring-Spiritual-Tourism-in-India-The-Uttar-Pradesh-Sojourn.jpg"
        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery Image ${idx + 1}`}
            className="object-cover rounded-2xl w-full h-48 md:h-56 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-500"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </div>
</section>

  );
}

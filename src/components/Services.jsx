import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlane, FaHotel, FaRegCalendarCheck, FaMapMarkedAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaPlane className="w-10 h-10 text-orange-500 mb-4" />,
    title: "Customized Travel Plans",
    description:
      "Tailor-made itineraries designed to suit your spiritual and leisure needs.",
  },
  {
    icon: <FaHotel className="w-10 h-10 text-purple-600 mb-4" />,
    title: "Comfortable Accommodations",
    description:
      "Handpicked hotels and stay options to ensure a relaxing journey.",
  },
  {
    icon: <FaRegCalendarCheck className="w-10 h-10 text-blue-500 mb-4" />,
    title: "Easy Booking & Scheduling",
    description:
      "Seamless appointment and trip scheduling with hassle-free confirmations.",
  },
  {
    icon: <FaMapMarkedAlt className="w-10 h-10 text-green-500 mb-4" />,
    title: "Guided Tours & Local Support",
    description:
      "Experienced guides to help you explore destinations with authenticity and safety.",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".service-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-gray-50" aria-label="Services Section">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our <span className="text-gradient bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Discover the comprehensive range of services we offer to make your spiritual journey seamless, memorable, and fulfilling.
        </p>
      </div>
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6"
      >
        {services.map(({ icon, title, description }) => (
          <div
            key={title}
            className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
          >
            {icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

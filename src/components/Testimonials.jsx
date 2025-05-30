import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ravi Sharma",
    location: "Delhi, India",
    text: "Mahakal Tours made my Ujjain trip unforgettable. The spiritual vibes and well-planned itinerary were beyond expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad, India",
    text: "I felt safe and spiritually enriched. The guides were knowledgeable, and the experience was deeply personal.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Verma",
    location: "Lucknow, India",
    text: "The best pilgrimage journey I’ve ever had. The attention to detail and hospitality were top-notch.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Kavya Menon",
    location: "Kerala, India",
    text: "From the Ganga Aarti to the Jyotirlinga darshan, Mahakal Tours curated an incredible spiritual retreat.",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".testimonial-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Refresh ScrollTrigger after mounting and on resize
    ScrollTrigger.refresh();

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-br from-purple-50 to-orange-50"
      aria-label="Testimonials" id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          What Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
            Pilgrims Say
          </span>
        </h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-purple-500 px-2"
          tabIndex={0} // makes it keyboard-focusable for accessibility
          aria-label="Testimonials carousel"
        >
          {testimonials.map(({ name, location, text, image }, index) => (
            <article
              key={index}
              className="testimonial-card flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 focus-within:scale-105 outline-none mb-5"
              tabIndex={-1} // allow focus for keyboard users on individual cards if needed
            >
              <div className="flex items-center space-x-4 mb-5">
                <img
                  src={image}
                  alt={`${name}'s portrait`}
                  className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                  <span className="text-sm text-gray-500">{location}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

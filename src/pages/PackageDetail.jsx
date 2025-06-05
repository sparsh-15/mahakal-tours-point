import React from "react";
import { useParams } from "react-router-dom";
import { packages } from "../data/packagesData";
import Navbar from "../components/Header/Navbar/Navbar"
import Footer from "../components/Header/Footer/Footer"
import BookingModal from "../components/BookingModal/BookingModal";
import { useEffect, useRef, useState } from 'react';

export default function PackageDetails() {

  const { id } = useParams();
  const pkg = packages.find((p) => p.id === parseInt(id));

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const sectionsRef = useRef([]);
  const buttonRef = useRef(null);
  const reviewsRef = useRef([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenModal = (pkg) => {
  setSelectedPackage(pkg);
  setModalOpen(true);
};

  useEffect(() => {
    // Advanced GSAP-style animations with enhanced effects
    const initAnimations = () => {
      // Hero image with parallax and zoom effect
      if (heroRef.current) {
        heroRef.current.style.transform = 'scale(1.2) translateY(50px)';
        heroRef.current.style.opacity = '0';
        heroRef.current.style.filter = 'blur(10px)';

        const heroAnimation = heroRef.current.animate([
          {
            transform: 'scale(1.2) translateY(50px)',
            opacity: 0,
            filter: 'blur(10px)'
          },
          {
            transform: 'scale(1.05) translateY(10px)',
            opacity: 0.5,
            filter: 'blur(5px)'
          },
          {
            transform: 'scale(1) translateY(0px)',
            opacity: 1,
            filter: 'blur(0px)'
          }
        ], {
          duration: 1800,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fill: 'forwards'
        });
      }

      // Title with typewriter and glow effect
      if (titleRef.current) {
        titleRef.current.style.transform = 'translateY(50px) rotateX(90deg)';
        titleRef.current.style.opacity = '0';
        titleRef.current.style.textShadow = '0 0 0px rgba(255, 165, 0, 0)';

        setTimeout(() => {
          const titleAnimation = titleRef.current.animate([
            {
              transform: 'translateY(50px) rotateX(90deg)',
              opacity: 0,
              textShadow: '0 0 0px rgba(255, 165, 0, 0)'
            },
            {
              transform: 'translateY(10px) rotateX(45deg)',
              opacity: 0.7,
              textShadow: '0 0 10px rgba(255, 165, 0, 0.5)'
            },
            {
              transform: 'translateY(0) rotateX(0deg)',
              opacity: 1,
              textShadow: '0 0 20px rgba(255, 165, 0, 0.3)'
            }
          ], {
            duration: 1200,
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fill: 'forwards'
          });
        }, 300);
      }

      // Price with bounce and pulse effect
      if (priceRef.current) {
        priceRef.current.style.transform = 'scale(0) rotate(180deg)';
        priceRef.current.style.opacity = '0';

        setTimeout(() => {
          const priceAnimation = priceRef.current.animate([
            {
              transform: 'scale(0) rotate(180deg)',
              opacity: 0
            },
            {
              transform: 'scale(1.3) rotate(10deg)',
              opacity: 0.8
            },
            {
              transform: 'scale(0.9) rotate(-5deg)',
              opacity: 1
            },
            {
              transform: 'scale(1) rotate(0deg)',
              opacity: 1
            }
          ], {
            duration: 1000,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            fill: 'forwards'
          });
        }, 600);
      }

      // Sections with staggered slide and rotation
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const isEven = index % 2 === 0;
          section.style.transform = `translateX(${isEven ? '-100px' : '100px'}) translateY(60px) rotateY(${isEven ? '-15deg' : '15deg'})`;
          section.style.opacity = '0';
          section.style.filter = 'blur(8px)';

          setTimeout(() => {
            const sectionAnimation = section.animate([
              {
                transform: `translateX(${isEven ? '-100px' : '100px'}) translateY(60px) rotateY(${isEven ? '-15deg' : '15deg'})`,
                opacity: 0,
                filter: 'blur(8px)'
              },
              {
                transform: `translateX(${isEven ? '-20px' : '20px'}) translateY(20px) rotateY(${isEven ? '-5deg' : '5deg'})`,
                opacity: 0.6,
                filter: 'blur(3px)'
              },
              {
                transform: 'translateX(0) translateY(0) rotateY(0deg)',
                opacity: 1,
                filter: 'blur(0px)'
              }
            ], {
              duration: 900,
              easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
              fill: 'forwards'
            });
          }, 800 + (index * 150));
        }
      });

      // Reviews with wave-like entrance
      reviewsRef.current.forEach((review, index) => {
        if (review) {
          review.style.transform = 'translateY(100px) scale(0.8) rotateZ(-10deg)';
          review.style.opacity = '0';
          review.style.filter = 'blur(5px)';

          setTimeout(() => {
            const reviewAnimation = review.animate([
              {
                transform: 'translateY(100px) scale(0.8) rotateZ(-10deg)',
                opacity: 0,
                filter: 'blur(5px)'
              },
              {
                transform: 'translateY(-10px) scale(1.05) rotateZ(2deg)',
                opacity: 0.8,
                filter: 'blur(1px)'
              },
              {
                transform: 'translateY(0) scale(1) rotateZ(0deg)',
                opacity: 1,
                filter: 'blur(0px)'
              }
            ], {
              duration: 800,
              easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              fill: 'forwards'
            });
          }, 1400 + (index * 250));
        }
      });

      // Button with magnetic hover preparation and entrance

      if (buttonRef.current) {
        buttonRef.current.style.transform = 'scale(0) rotateY(180deg)';
        buttonRef.current.style.opacity = '0';
        buttonRef.current.style.boxShadow = '0 0 0px rgba(255, 165, 0, 0)';

        setTimeout(() => {
          const buttonAnimation = buttonRef.current.animate([
            {
              transform: 'scale(0) rotateY(180deg)',
              opacity: 0,
              boxShadow: '0 0 0px rgba(255, 165, 0, 0)'
            },
            {
              transform: 'scale(1.2) rotateY(90deg)',
              opacity: 0.7,
              boxShadow: '0 10px 25px rgba(255, 165, 0, 0.3)'
            },
            {
              transform: 'scale(1) rotateY(0deg)',
              opacity: 1,
              boxShadow: '0 15px 35px rgba(255, 165, 0, 0.4)'
            }
          ], {
            duration: 800,
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fill: 'forwards'
          });
        }, 1800);
      }
    };

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'floatIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        }
      });
    }, observerOptions);



    // Add floating animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatIn {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255, 165, 0, 0.3); }
        50% { box-shadow: 0 0 40px rgba(255, 165, 0, 0.6); }
      }
    `;
    document.head.appendChild(style);

    initAnimations();

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleButtonHover = (e) => {
    // Magnetic hover effect with multiple transformations
    e.target.animate([
      {
        transform: 'scale(1) rotateZ(0deg)',
        boxShadow: '0 15px 35px rgba(255, 165, 0, 0.4)'
      },
      {
        transform: 'scale(1.1) rotateZ(-2deg) translateY(-5px)',
        boxShadow: '0 25px 50px rgba(255, 165, 0, 0.6)'
      }
    ], {
      duration: 300,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'forwards'
    });

    // Add pulsing glow effect
    e.target.style.animation = 'glow 1.5s ease-in-out infinite';
  };

  const handleButtonLeave = (e) => {
    // Return to original state with smooth transition
    e.target.animate([
      {
        transform: 'scale(1.1) rotateZ(-2deg) translateY(-5px)',
        boxShadow: '0 25px 50px rgba(255, 165, 0, 0.6)'
      },
      {
        transform: 'scale(1) rotateZ(0deg) translateY(0px)',
        boxShadow: '0 15px 35px rgba(255, 165, 0, 0.4)'
      }
    ], {
      duration: 300,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'forwards'
    });

    // Remove pulsing effect
    e.target.style.animation = '';
  };

  if (!pkg) {
    return (
      <>
        <Navbar/>
        <div className="p-10 text-red-600 text-center text-xl">
          Package not found.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto p-6 mt-20">
        {/* Hero Section with Gradient Overlay */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <img
            ref={heroRef}
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="bg-orange-500/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🕉️ Spiritual Journey
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1
            ref={titleRef}
            className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
          >
            {pkg.name}
          </h1>
          <div
            ref={priceRef}
            className="flex justify-center items-center gap-8 text-xl cursor-default"
          >
            <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              {pkg.price}
            </div>
            <div className="text-gray-600 font-medium">
              {pkg.duration}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <section
          ref={el => sectionsRef.current[0] = el}
          className="mb-10 bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">🕉️ Spiritual Experience</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{pkg.description}</p>
        </section>

        {/* Itinerary Section */}
        <section
          ref={el => sectionsRef.current[1] = el}
          className="mb-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
            🗓️ Itinerary
          </h2>
          <div className="space-y-4">
            {pkg.itinerary.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section
          ref={el => sectionsRef.current[2] = el}
          className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-green-50 p-8 rounded-2xl shadow-lg border border-green-100">
            <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
              ✅ Inclusions
            </h2>
            <ul className="space-y-3">
              {pkg.inclusions.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl shadow-lg border border-red-100">
            <h2 className="text-2xl font-bold mb-4 text-red-800 flex items-center">
              ❌ Exclusions
            </h2>
            <ul className="space-y-3">
              {pkg.exclusions.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking Information */}
        <section
          ref={el => sectionsRef.current[3] = el}
          className="mb-10 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-yellow-200"
        >
          <h2 className="text-3xl font-bold mb-4 text-orange-800 flex items-center">
            📋 Booking Information
          </h2>
          <p className="text-orange-700 text-lg leading-relaxed">{pkg.bookingInfo}</p>
        </section>

        {/* Reviews Section */}
        {pkg.reviews && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              💬 What Our Travelers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pkg.reviews.map((review, idx) => (
                <div
                  key={idx}
                  ref={el => reviewsRef.current[idx] = el}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{review.user}</p>
                      <div className="text-yellow-500 text-lg">
                        {`${"⭐".repeat(review.rating)}`}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <button
            ref={buttonRef}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={() => handleOpenModal(pkg)}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform"
          >
            🕉️ Book Your Darshan Now
          </button>

          {/* Booking Modal */}
          <BookingModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            selectedPackage={selectedPackage}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}



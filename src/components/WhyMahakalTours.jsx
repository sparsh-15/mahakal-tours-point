import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Users,
  MapPin,
  Clock,
  Star,
  Heart,
  Award,
  Compass,
  CheckCircle,
  Phone,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyMahakalTours = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    customers: 0,
    years: 0,
    destinations: 0,
    rating: 0,
  });
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
    if (isVisible) {
      const targets = {
        customers: 5000,
        years: 15,
        destinations: 50,
        rating: 4.8,
      };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          customers: Math.floor(targets.customers * progress),
          years: Math.floor(targets.years * progress),
          destinations: Math.floor(targets.destinations * progress),
          rating: Math.round(targets.rating * progress * 10) / 10,
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const features = [
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description:
        "Your safety is our priority. All our vehicles are regularly serviced and drivers are experienced professionals.",
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "Expert Local Guides",
      description:
        "Our knowledgeable guides bring stories and history to life, ensuring you get the most authentic experience.",
      color: "text-blue-500",
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock assistance to ensure your journey is smooth and worry-free from start to finish.",
      color: "text-purple-500",
    },
    {
      icon: MapPin,
      title: "Customized Itineraries",
      description:
        "Tailor-made tours designed around your preferences, schedule, and budget for the perfect experience.",
      color: "text-orange-500",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description:
        "Recognized for excellence in tourism with multiple awards and certifications from travel authorities.",
      color: "text-yellow-500",
    },
    {
      icon: Heart,
      title: "Passionate About Travel",
      description:
        "We don't just organize trips - we create memories that last a lifetime with genuine care and attention.",
      color: "text-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Amazing experience! The Mahakaleshwar darshan was perfectly organized. Highly recommend Mahakal Tours.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Professional service and very knowledgeable guides. Made our Ujjain trip absolutely memorable.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      text: "Excellent arrangements and reasonable prices. Will definitely book again for our next pilgrimage.",
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-orange-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-blue-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Top Icon and Subtitle */}
          <div className="flex items-center justify-center mb-4 animate-fade-in-down delay-200">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-md">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-red-600 ml-3 tracking-wide">
              Why Choose Us
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in-up delay-300">
            Why{" "}
            <span className="bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
              Mahakal Tours
            </span>
            ?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up delay-500">
            We're not just a travel company — we're your trusted companions on a
            <span className="text-red-500 font-medium"> spiritual journey</span>
            , committed to creating unforgettable moments with heart, heritage,
            and hospitality.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              {stats.customers.toLocaleString()}+
            </div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
              {stats.years}+
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
              {stats.destinations}+
            </div>
            <div className="text-gray-600 font-medium">Destinations</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2 flex items-center justify-center">
              <Star className="w-8 h-8 mr-1 fill-current" />
              {stats.rating}
            </div>
            <div className="text-gray-600 font-medium">Customer Rating</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 ${feature.color} bg-opacity-10`}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-gray-600 text-lg">
              Real experiences from real travelers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
       <div           
  className={`bg-gradient-to-r from-red-100 via-pink-50 to-red-100 rounded-3xl p-8 md:p-12 text-center text-gray-700 transition-all duration-1000 delay-700 ${             
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"           
  }`}         
>           
  <h3 className="text-3xl md:text-4xl font-semibold mb-4">             
    Ready for Your Spiritual Journey?           
  </h3>           
  <p className="text-lg mb-8 opacity-80">             
    Join thousands of satisfied travelers who chose Mahakal Tours for             
    their unforgettable experiences           
  </p>           
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">             
    <a               
      href="tel:+919999999999"               
      className="flex items-center space-x-2 bg-white text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-sm"             
    >               
      <Phone className="w-5 h-5" />               
      <span>Call Now: +91 99999 99999</span>             
    </a>             
    <a               
      href="#contact"               
      className="flex items-center space-x-2 border-2 border-pink-300 text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-200 hover:text-red-700 transition-all duration-300 transform hover:scale-105"             
    >               
      <CheckCircle className="w-5 h-5" />               
      <span>Book Your Tour</span>             
    </a>           
  </div>         
</div>
      </div>
    </section>
  );
};

export default WhyMahakalTours;

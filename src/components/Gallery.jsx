import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const places = [
    {
        name: "Mahakaleshwar Jyotirlinga",
        image:
            "https://blog.yatradham.org/wp-content/uploads/2020/07/mahakaleshwar.jpg",
        description: "One of the twelve Jyotirlingas of Lord Shiva, a sacred spiritual site.",
    },
    {
        name: "Kal Bhairav Temple",
        image:
            "https://srm-cdn.a4b.io/content/temple/images/24bd408c-f231-4435-acad-ba6fca8f92b9.jpeg",
        description: "Famous temple dedicated to Lord Kal Bhairav, known for its unique rituals.",
    },
    {
        name: "Harsiddhi Temple",
        image:
            "https://www.mptourism.com/web/image/catalog/2024/Harsiddhi-Temple-Ujjain%20(1).jpg",
        description: "Ancient temple dedicated to Goddess Harsiddhi, important for pilgrims.",
    },
    {
        name: "Ram Ghat",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Ram_ghat%2C_Ujjain.jpg/2560px-Ram_ghat%2C_Ujjain.jpg",
        description: "Sacred ghat on the Shipra River where devotees perform rituals and take holy dips.",
    },
    {
        name: "Kumbh Mela Grounds",
        image:
            "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/03/06/2673501-simhasthaujjainkumbhmelamohanyadav5.jpg",
        description: "Venue of the massive Kumbh Mela festival held every 12 years in Ujjain.",
    },
    {
        name: "Vedh Shala (Observatory)",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/c/c8/Vedh_Shala%2C_Ujjain_01.jpg",
        description: "Ancient astronomical observatory built by Maharaja Jai Singh II.",
    },
];


export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".gallery-card");

    // Entrance animation
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.85, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

return (
  <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white" aria-label="Gallery Section" id="gallery">
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Explore{" "}
        <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Famous Places
        </span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
        Discover breathtaking spiritual destinations curated for your next journey.
      </p>
    </div>

    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6"
    >
      {places.map(({ name, image, description }) => (
        <div
          key={name}
          className="gallery-card group relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-64 sm:h-72 object-cover object-center transition-all duration-300 group-hover:brightness-75 group-hover:scale-105"
            loading="lazy"
          />

          {/* Description */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-20">
            <h3 className="text-2xl font-bold mb-1 drop-shadow-md">{name}</h3>
            <p className="text-sm sm:text-base leading-snug drop-shadow-sm">
              {description}
            </p>
          </div>

          {/* Border Glow Effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500 group-hover:shadow-[0_0_25px_rgba(192,132,252,0.6)] transition-all duration-300 z-10 pointer-events-none" />
        </div>
      ))}
    </div>
  </section>
);

}
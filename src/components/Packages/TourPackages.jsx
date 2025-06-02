import React from "react";
import { Mountain, CalendarCheck, IndianRupee, MapPinned } from "lucide-react";
import {packages} from "../../data/packagesData"
import { Link } from "react-router-dom";


const TourPackages = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-gradient-to-b from-white to-purple-50 " id="packages">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10">
        🕉️ Spiritual Tour Packages
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-purple-100"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-purple-900">{pkg.name}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CalendarCheck className="w-4 h-4" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <IndianRupee className="w-4 h-4" />
                <span>{pkg.price}</span>
              </div>
              <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to={`/packages/${pkg.id}`}>
                <button className="mt-4 w-full bg-purple-600 text-white font-medium py-2 rounded-xl hover:bg-purple-700 transition">
                  Explore Now!
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;

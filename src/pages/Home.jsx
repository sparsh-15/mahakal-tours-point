import React from 'react'
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import WhyMahakalTours from '../components/WhyMahakalTours';
import TourPackages from '../components/TourPackages';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';


function Home() {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <WhyMahakalTours />
            <TourPackages />
            <Services />
            <Gallery />
            <Testimonials />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home
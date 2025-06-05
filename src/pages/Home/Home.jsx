import React from 'react'
import Navbar from '../../components/Header/Navbar/Navbar';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import TourPackages from '../../components/Packages/TourPackages';
import Services from '../../components/Services/Services';
import Gallery from '../../components/Gallery/Gallery';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Header/Footer/Footer';
import FloatingIcons from '../../components/FloatingIcons/FloatingIcons';
import WhyMahakalTours from '../../components/WhyMahakalTours';


function Home() {
    return (
        <>
            <FloatingIcons/>
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
import React from 'react';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;
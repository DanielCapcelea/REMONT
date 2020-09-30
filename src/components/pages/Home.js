import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ServiceList from "../ServiceList";


function Home() {
    return (
        <>
            <HeroSection/>
            <ServiceList/>
            <Footer/>
        </>
    );
}

export default Home;
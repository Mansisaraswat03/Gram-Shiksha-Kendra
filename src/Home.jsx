import React from 'react'
import HeroSection from './components/HeroSection';
import Service from './Service';
import About from './components/About';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Service/>
    <About/>
    <Testimonial/>
     <ContactUs/>
    </>
  )
}

export default Home;

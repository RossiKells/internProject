import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Clients from '../components/Clients/Clients';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import Aboutus from '../components/Aboutus/Aboutus';



import React from 'react'

const Container = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Aboutus />
        <Services />
        <Clients />
        <Testimonials />
        <Footer />

    </div>
  )
}

export default Container
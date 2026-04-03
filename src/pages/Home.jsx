import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
    </main>
  );
};

export default Home;

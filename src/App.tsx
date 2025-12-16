import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FloorPlans } from './components/FloorPlans';
import { Decorated } from './components/Decorated';
import { Implantation } from './components/Implantation';
import { Amenities } from './components/Amenities';
import { Location } from './components/Location';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Amenities />
      <Decorated />
      <FloorPlans />
      <Implantation />
      <Location />
      <Events />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
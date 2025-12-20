import React, { Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

// Lazy load componentes secundários
const About = React.lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Amenities = React.lazy(() => import('./components/Amenities').then(m => ({ default: m.Amenities })));
const Decorated = React.lazy(() => import('./components/Decorated').then(m => ({ default: m.Decorated })));
const Floorplans = React.lazy(() => import('./components/Floorplans').then(m => ({ default: m.Floorplans })));
const Implantation = React.lazy(() => import('./components/Implantation').then(m => ({ default: m.Implantation })));
const Location = React.lazy(() => import('./components/Location').then(m => ({ default: m.Location })));
const Events = React.lazy(() => import('./components/Events').then(m => ({ default: m.Events })));
const Contact = React.lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton').then(m => ({ default: m.WhatsAppButton })));

// Fallback loading component
const LoadingFallback = () => <div className="h-96 bg-gray-100 animate-pulse" />;

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Amenities />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Decorated />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Floorplans />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Implantation />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Location />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Events />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}
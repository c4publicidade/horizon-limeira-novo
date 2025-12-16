import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import buildingPhoto from '../assets/banner-principal.avif';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={buildingPhoto}
          alt="Horizon Limeira"
          className="w-full h-[120vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white max-w-7xl">
        <div className="space-y-10">
          {/* Main Message */}
          <div className="space-y-6">
            <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight">
              Mais que um imóvel.
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-primary leading-tight">
              É mudar de vida.
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-xl">
            A vida que você sempre sonhou, em um endereço único
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <div className="flex flex-col items-center gap-2">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </button>
    </section>
  );
}
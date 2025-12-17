import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import bedroom from '../assets/decorado1.webp';
import living from '../assets/decorado2.webp';
import dining from '../assets/decorado3.webp';
import torre1 from '../assets/torre1.webp';
import torre2 from '../assets/torre2.webp';
import torre3 from '../assets/torre3.webp';

export function Decorated() {
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const decoratedPhotos = [bedroom, living, dining];

  const towers = [
    { id: 1, name: 'Torre 01', image: torre1 },
    { id: 2, name: 'Torre 02', image: torre2 },
    { id: 3, name: 'Torre 03', image: torre3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % decoratedPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [decoratedPhotos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % decoratedPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + decoratedPhotos.length) % decoratedPhotos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="decorated" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-wine mb-8 mx-auto" />
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-primary to-wine bg-clip-text text-transparent">
            Apartamento Decorado
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Conheça os acabamentos e ambientes pensados para o seu conforto
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-20 max-w-5xl mx-auto relative">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl relative">
            {decoratedPhotos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={photo}
                  alt={`Ambiente decorado ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="text-wine" size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="text-wine" size={24} />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
              {decoratedPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tower Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {towers.map((tower) => (
            <button
              key={tower.id}
              onClick={() => setSelectedTower(tower.image)}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-wine p-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              <div className="text-white text-center">
                <div className="text-3xl mb-2">{tower.name}</div>
                <div className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
                  Ver implantação
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-xl transition-all duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Tower Modal */}
      {selectedTower && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedTower(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setSelectedTower(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedTower}
              alt="Implantação da Torre"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

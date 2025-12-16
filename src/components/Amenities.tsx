import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import coworkingImg from '../assets/coworkingImg.avif';
import piscinaImg from '../assets/piscinaImg.avif';
import academiaImg from '../assets/academiaImg.webp';
import quiosqueImg from '../assets/quiosqueImg.avif';
import playgroundImg from '../assets/playgroundImg.avif';
import petPlaceImg from '../assets/petPlaceImg.webp';

export function Amenities() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const amenities = [
    { name: 'Fitness', category: 'Fitness' },
    { name: 'Fitness externo', category: 'Fitness' },
    { name: 'Quiosques gourmet com churrasqueiras', category: 'Gastronomia' },
    { name: 'Salão de festas', category: 'Convivência' },
    { name: 'Minimarket', category: 'Conveniência' },
    { name: 'Sala de jogos', category: 'Lazer' },
    { name: 'Piscina com deck molhado', category: 'Lazer' },
    { name: 'Piscina infantil', category: 'Infantil' },
    { name: 'Quadra poliesportiva', category: 'Esporte' },
    { name: 'Playground', category: 'Infantil' },
    { name: 'Brinquedoteca', category: 'Infantil' },
    { name: 'Pet Place', category: 'Pet' },
    { name: 'Coworking', category: 'Trabalho' },
    { name: 'Coworking externo', category: 'Trabalho' },
    { name: 'Espaço mídia social', category: 'Trabalho' },
    { name: 'Sala de reuniões', category: 'Trabalho' },
    { name: 'Bicicletário coberto', category: 'Mobilidade' },
    { name: 'Guarda-entregas', category: 'Segurança' },
    { name: 'Food Square', category: 'Gastronomia' },
  ];

  const images = [
    {
      src: coworkingImg,
      title: 'Coworking',
    },
    {
      src: piscinaImg,
      title: 'Piscina',
    },
    {
      src: academiaImg,
      title: 'Fitness',
    },
    {
      src: quiosqueImg,
      title: 'Quiosque Gourmet',
    },
    {
      src: playgroundImg,
      title: 'Playground',
    },
    {
      src: petPlaceImg,
      title: 'Pet Place',
    },
  ];

  return (
    <section id="amenities" className="py-32 bg-gradient-to-r from-primary to-wine text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="h-px w-16 bg-primary mb-8 mx-auto" />
          <h2 className="text-4xl md:text-6xl mb-6 text-white leading-tight">
            O lazer mais completo de Limeira
          </h2>
          <p className="text-2xl text-white font-light">
            Ideal para o dia a dia da sua família
          </p>
          {/* +15 Itens de Lazer */}
          <div className="mt-12">
            <div className="text-7xl md:text-8xl text-white mb-3">+15</div>
            <div className="text-lg md:text-xl text-white/95 uppercase tracking-[0.3em]">Itens de Lazer</div>
          </div>
        </div>

        {/* Images Carousel - Spotlight Style */}
        <div className="max-w-7xl mx-auto relative px-4 md:px-20">
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            {/* All Images */}
            {images.map((image, index) => {
              const offset = index - currentIndex;
              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 1;
              
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (isCenter) {
                      setSelectedImage(index);
                    } else {
                      goToSlide(index);
                    }
                  }}
                  className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    transform: `translateX(${offset * 100}%) scale(${isCenter ? 1 : 0.75})`,
                    zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                  }}
                >
                  <div className={`relative overflow-hidden rounded-lg shadow-2xl ${
                    isCenter ? 'w-[90vw] md:w-[700px]' : 'w-[70vw] md:w-[500px]'
                  } aspect-[4/3] bg-white/10`}>
                    <ImageWithFallback
                      src={image.src}
                      alt={image.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isCenter ? 'brightness-100' : 'brightness-50 blur-sm'
                      }`}
                    />
                    
                    {/* Overlay with title */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end transition-opacity duration-500 ${
                      isCenter ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="p-8 w-full">
                        <h3 className="text-2xl md:text-3xl text-white tracking-wider uppercase mb-2">
                          {image.title}
                        </h3>
                        <div className="h-1 w-20 bg-primary" />
                      </div>
                    </div>

                    {/* Border highlight for center image */}
                    {isCenter && (
                      <div className="absolute inset-0 border-4 border-primary/30 rounded-lg pointer-events-none" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-primary hover:bg-primary/80 text-white p-3 md:p-4 rounded-full transition-all shadow-lg hover:scale-110"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-primary hover:bg-primary/80 text-white p-3 md:p-4 rounded-full transition-all shadow-lg hover:scale-110"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-primary'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>



        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <ImageWithFallback
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
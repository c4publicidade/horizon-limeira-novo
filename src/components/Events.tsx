import React, { useState, useEffect } from 'react';
import { Play, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import event1 from '../assets/event1.webp';
import event2 from '../assets/event2.webp';
import event3 from '../assets/event3.webp';

export function Events() {
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos');
  const [currentSlide, setCurrentSlide] = useState(0);

  const eventPhotos = [
    {
      src: event1,
      title: 'Evento de Lançamento',
      date: '2024',
    },
    {
      src: event2,
      title: 'Apresentação do Empreendimento',
      date: '2024',
    },
    {
      src: event3,
      title: 'Confraternização com Clientes',
      date: '2024',
    },
  ];

  // Auto-play do carousel
  useEffect(() => {
    if (activeTab === 'fotos') {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % eventPhotos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeTab, eventPhotos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventPhotos.length) % eventPhotos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="events" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-wine mb-8 mx-auto" />
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-primary to-wine bg-clip-text text-transparent">
            Eventos
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Acompanhe os principais momentos do Horizon Limeira
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('fotos')}
            className={`px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'fotos'
                ? 'bg-wine text-white'
                : 'bg-white text-dark hover:bg-gray-100'
            }`}
          >
            Fotos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-wine text-white'
                : 'bg-white text-dark hover:bg-gray-100'
            }`}
          >
            Vídeos
          </button>
        </div>

        {/* Photos Tab - Carousel */}
        {activeTab === 'fotos' && (
          <div className="max-w-5xl mx-auto relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl relative">
              {eventPhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Info overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-2 mb-3 text-sm">
                        <Calendar size={18} />
                        <span>{photo.date}</span>
                      </div>
                      <div className="text-3xl font-light">{photo.title}</div>
                    </div>
                  </div>
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
                {eventPhotos.map((_, index) => (
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
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="max-w-6xl mx-auto">
            
            {/* Vídeo Principal */}
            <div className="mb-8">
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                <iframe
                  src="https://player.vimeo.com/video/1147938650?h=d73cc96cf7&badge=0&autopause=0"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Horizon Limeira - Vídeo Principal"
                />
              </div>
            </div>

            <div className="mb-8">
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                <iframe
                  src="https://player.vimeo.com/video/1147938631?h=29d7fe2f50&badge=0&autopause=0"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Horizon Limeira - Evento"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
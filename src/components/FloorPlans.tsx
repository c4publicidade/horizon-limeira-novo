import React, { useState } from 'react';
import { Home, ZoomIn, X } from 'lucide-react';
import plantaTipo1 from '../assets/tipo1.webp';
import plantaTipo2 from '../assets/tipo2.webp';
import plantaTipo3 from '../assets/tipo3.webp';
import plantaGarden from '../assets/gardena.webp';

export function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const plans = [
    {
      name: 'Tipo 01',
      title: '2 Dormitórios com Varanda',
      area: '47,42',
      bedrooms: 2,
      suites: 0,
      parking: 1,
      image: plantaTipo1,
      features: [
        'Ambientes integrados',
        'Espaços bem aproveitados',
        'Cozinha conceito aberto',
        'Ar-condicionado',
        'Persianas integradas',
      ],
      points: [
        { id: 1, name: 'Ambientes integrados', top: '35%', left: '30%' },
        { id: 2, name: 'Espaços bem aproveitados', top: '55%', left: '70%' },
        { id: 3, name: 'Cozinha conceito aberto', top: '48%', left: '25%' },
        { id: 4, name: 'Ar-condicionado', top: '25%', left: '50%' },
        { id: 5, name: 'Persianas integradas', top: '68%', left: '45%' },
      ],
    },
    {
      name: 'Tipo 02',
      title: '2 Dormitórios com Varanda',
      area: '48,05',
      bedrooms: 2,
      suites: 0,
      parking: 1,
      image: plantaTipo2,
      features: [
        'Ambientes integrados',
        'Cozinha conceito aberto',
        'Espaços bem aproveitados',
        'Persianas integradas',
        'Ar-condicionado',
      ],
      points: [
        { id: 1, name: 'Ambientes integrados', top: '20%', left: '50%' },
        { id: 2, name: 'Cozinha conceito aberto', top: '15%', left: '85%' },
        { id: 3, name: 'Espaços bem aproveitados', top: '30%', left: '30%' },
        { id: 4, name: 'Persianas integradas', top: '75%', left: '18%' },
        { id: 5, name: 'Ar-condicionado', top: '82%', left: '55%' },
      ],
    },
    {
      name: 'Tipo 03',
      title: '2 Dormitórios com Suíte e Varanda',
      area: '50,98',
      bedrooms: 2,
      suites: 1,
      parking: 1,
      image: plantaTipo3,
      features: [
        'Ambientes integrados',
        'Cozinha conceito aberto',
        'Espaços bem aproveitados',
        'Persianas integradas',
        'Ar-condicionado',
      ],
      points: [
        { id: 1, name: 'Ambientes integrados', top: '15%', left: '75%' },
        { id: 2, name: 'Cozinha conceito aberto', top: '45%', left: '92%' },
        { id: 3, name: 'Espaços bem aproveitados', top: '50%', left: '8%' },
        { id: 4, name: 'Persianas integradas', top: '85%', left: '35%' },
        { id: 5, name: 'Ar-condicionado', top: '88%', left: '60%' },
      ],
    },
    {
      name: 'Garden A',
      title: 'Garden A',
      area: '50,98',
      bedrooms: 2,
      suites: 1,
      parking: 1,
      image: plantaGarden,
      features: [
        'Ambientes integrados',
        'Cozinha conceito aberto',
        'Espaços bem aproveitados',
        'Persianas integradas',
        'Ar-condicionado',
        'Garden de 18,52m² a 21,19m²',
      ],
      points: [
        { id: 1, name: 'Garden de 18,52m² a 21,19m²', top: '80%', left: '50%' },
      ],
    },
  ];

  const currentPlan = plans[selectedPlan];

  return (
    <section id="plants" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-wine mb-8 mx-auto" />
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-primary to-wine bg-clip-text text-transparent">Plantas</h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            O melhor custo-benefício em Limeira
          </p>
        </div>

        {/* Plan Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`px-8 py-5 text-sm uppercase tracking-wider transition-all duration-300 ${
                selectedPlan === index
                  ? 'bg-wine text-white'
                  : 'bg-white text-dark hover:bg-gray-100'
              }`}
            >
              <div className="mb-1">{plan.name}</div>
              <div className="text-xs opacity-70">{plan.area}m²</div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Floor Plan Image */}
          <div className="relative">
            <div 
              className="flex items-center justify-center relative group cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img 
                src={currentPlan.image} 
                alt={currentPlan.name}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-wine text-white p-3 rounded-full shadow-lg">
                <ZoomIn size={24} />
              </div>

              {/* Interactive Points */}
              {currentPlan.points && currentPlan.points.map((point) => (
                <div
                  key={point.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={{ top: point.top, left: point.left }}
                  onMouseEnter={() => setHoveredPoint(point.id)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Point Circle */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs transition-all duration-300 ${
                    hoveredPoint === point.id ? 'bg-primary scale-125 shadow-lg' : 'bg-wine'
                  }`}>
                    {point.id}
                  </div>
                  
                  {/* Tooltip */}
                  {hoveredPoint === point.id && (
                    <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-dark text-white px-4 py-2 text-sm whitespace-nowrap shadow-xl z-20">
                      {point.name}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-dark"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Plan Info */}
          <div className="space-y-12">
            <div>
              <div className="text-sm text-wine mb-2 uppercase tracking-wider">{currentPlan.name}</div>
              <h3 className="text-4xl mb-6 text-dark">{currentPlan.title}</h3>
              <div className="text-6xl text-wine mb-8">{currentPlan.area}m²</div>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl text-dark mb-1">{currentPlan.bedrooms}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Dormitórios</div>
                </div>
                <div>
                  <div className="text-3xl text-dark mb-1">{currentPlan.suites}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Suítes</div>
                </div>
                <div>
                  <div className="text-3xl text-dark mb-1">{currentPlan.parking}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Vagas</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg text-dark mb-4 uppercase tracking-wider">Características</h4>
              {currentPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 font-light">
                  <div className="w-1 h-1 bg-wine" />
                  {feature}
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                const element = document.querySelector('#contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-wine text-white py-5 hover:bg-wine-dark transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              Entre em Contato
            </button>
          </div>
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={40} />
            </button>
            <div className="max-w-6xl w-full">
              <img 
                src={currentPlan.image} 
                alt={currentPlan.name}
                className="w-full h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center mt-6">
                <p className="text-white text-xl">{currentPlan.name} - {currentPlan.title}</p>
                <p className="text-gray-300 mt-2">{currentPlan.area}m²</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
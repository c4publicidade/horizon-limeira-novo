import { useState } from 'react';
import { Maximize2, X, Bed, Bath, Square } from 'lucide-react';

import torre1 from '../assets/tipo1.webp';
import torre2 from '../assets/tipo2.webp';
import torre3 from '../assets/tipo3.webp';

export function Floorplans() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const plans = [
    {
      name: 'Planta 2 Dormitórios',
      bedrooms: 2,
      bathrooms: 2,
      area: 65,
      description: 'Apartamento compacto e funcional, ideal para casais ou pequenas famílias.',
      image: torre1,
    },
    {
      name: 'Planta 3 Dormitórios',
      bedrooms: 3,
      bathrooms: 2,
      area: 85,
      description: 'Espaço amplo com suíte master e ambientes bem distribuídos.',
      image: torre2,
    },
    {
      name: 'Planta Cobertura',
      bedrooms: 3,
      bathrooms: 3,
      area: 120,
      description: 'Cobertura duplex com terraço exclusivo e vista panorâmica.',
      image: torre3,
    },
  ];

  return (
    <section id="plantas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Plantas do Empreendimento</h2>
          <p className="text-xl text-slate-600">
            Escolha a planta que melhor se adapta ao seu estilo de vida
          </p>
        </div>

        {/* Seleção de plantas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`p-6 text-left border-2 transition-all ${
                selectedPlan === index
                  ? 'border-slate-900 bg-slate-50'
                  : 'border-slate-200 hover:border-slate-400'
              }`}
            >
              <h3 className="text-xl mb-4">{plan.name}</h3>

              <div className="flex gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <Bed size={20} />
                  {plan.bedrooms} quartos
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={20} />
                  {plan.bathrooms} banhos
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-600 mt-2">
                <Square size={20} />
                {plan.area}m²
              </div>
            </button>
          ))}
        </div>

        {/* Detalhes */}
        <div className="bg-slate-100 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-4">{plans[selectedPlan].name}</h3>
              <p className="text-lg text-slate-600 mb-6">
                {plans[selectedPlan].description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 text-center">
                  <Bed className="mx-auto mb-2" />
                  <div className="text-2xl">{plans[selectedPlan].bedrooms}</div>
                  <div className="text-slate-600">Quartos</div>
                </div>
                <div className="bg-white p-4 text-center">
                  <Bath className="mx-auto mb-2" />
                  <div className="text-2xl">{plans[selectedPlan].bathrooms}</div>
                  <div className="text-slate-600">Banheiros</div>
                </div>
                <div className="bg-white p-4 text-center">
                  <Square className="mx-auto mb-2" />
                  <div className="text-2xl">{plans[selectedPlan].area}</div>
                  <div className="text-slate-600">m²</div>
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative group cursor-zoom-in">
              <img
                onClick={() => setExpandedImage(plans[selectedPlan].image)}
                src={plans[selectedPlan].image}
                alt={plans[selectedPlan].name}
                className="w-full h-auto border-2 border-white shadow-lg"
              />
              <button
                onClick={() => setExpandedImage(plans[selectedPlan].image)}
                className="absolute top-4 right-4 bg-white p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
              >
                <Maximize2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal expandido */}
      {expandedImage && (
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            className="absolute top-8 right-8 transition-colors z-10 hover:text-white"
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
            onClick={() => setExpandedImage(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={expandedImage}
              alt="Planta expandida"
              className="w-full h-auto rounded-xl"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Floorplans;

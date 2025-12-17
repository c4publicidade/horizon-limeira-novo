import { useState } from 'react';
import { Maximize2, Bed, Bath, Square } from 'lucide-react';

export function Floorplans() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const plans = [
    {
      name: 'Planta 2 Dormitórios',
      bedrooms: 2,
      bathrooms: 2,
      area: 65,
      description: 'Apartamento compacto e funcional, ideal para casais ou pequenas famílias.',
      // Substitua esta URL pela imagem real da planta
      image: 'https://via.placeholder.com/800x600/1e293b/ffffff?text=Planta+2+Dormitorios',
    },
    {
      name: 'Planta 3 Dormitórios',
      bedrooms: 3,
      bathrooms: 2,
      area: 85,
      description: 'Espaço amplo com suíte master e ambientes bem distribuídos.',
      // Substitua esta URL pela imagem real da planta
      image: 'https://via.placeholder.com/800x600/1e293b/ffffff?text=Planta+3+Dormitorios',
    },
    {
      name: 'Planta Cobertura',
      bedrooms: 3,
      bathrooms: 3,
      area: 120,
      description: 'Cobertura duplex com terraço exclusivo e vista panorâmica.',
      // Substitua esta URL pela imagem real da planta
      image: 'https://via.placeholder.com/800x600/1e293b/ffffff?text=Planta+Cobertura',
    },
  ];

  return (
    <section id="plantas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Plantas do Empreendimento</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Escolha a planta que melhor se adapta ao seu estilo de vida
          </p>
        </div>

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
                  <span>{plan.bedrooms} quartos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={20} />
                  <span>{plan.bathrooms} banhos</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-600 mt-2">
                <Square size={20} />
                <span>{plan.area}m²</span>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-slate-100 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-4">{plans[selectedPlan].name}</h3>
              <p className="text-lg text-slate-600 mb-6">{plans[selectedPlan].description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 text-center">
                  <Bed size={24} className="mx-auto mb-2 text-slate-700" />
                  <div className="text-2xl">{plans[selectedPlan].bedrooms}</div>
                  <div className="text-slate-600">Quartos</div>
                </div>
                <div className="bg-white p-4 text-center">
                  <Bath size={24} className="mx-auto mb-2 text-slate-700" />
                  <div className="text-2xl">{plans[selectedPlan].bathrooms}</div>
                  <div className="text-slate-600">Banheiros</div>
                </div>
                <div className="bg-white p-4 text-center">
                  <Square size={24} className="mx-auto mb-2 text-slate-700" />
                  <div className="text-2xl">{plans[selectedPlan].area}</div>
                  <div className="text-slate-600">m²</div>
                </div>
              </div>

              <p className="text-sm text-slate-500">
                * Substitua as imagens placeholder pelas plantas reais do empreendimento
              </p>
            </div>

            <div className="relative">
              <img
                src={plans[selectedPlan].image}
                alt={plans[selectedPlan].name}
                className="w-full h-auto border-2 border-white shadow-lg"
              />
              <button className="absolute top-4 right-4 bg-white p-2 shadow-lg hover:bg-slate-100 transition-colors">
                <Maximize2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

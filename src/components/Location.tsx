import React from 'react';
import { MapPin } from 'lucide-react';

export function Location() {
  const nearby = [
    { number: '01', text: 'Assaí Atacadista' },
    { number: '02', text: 'Próximo à Av. Costa e Silva (Avenida das Jóias - 1km)' },
    { number: '03', text: 'Posto de Gasolina' },
    { number: '04', text: 'Parque' },
    { number: '05', text: 'Quadra Society' },
    { number: '06', text: 'Próximo à entrada e saída da cidade de Limeira' },
  ];

  return (
    <section id="location" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-wine mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary via-primary to-wine bg-clip-text text-transparent leading-tight max-w-4xl mx-auto">
            A MELHOR LOCALIZAÇÃO DE LIMEIRA,
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-3xl mx-auto">
            PERTO DE TUDO O QUE VOCÊ PRECISA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Map Placeholder */}
          <div className="aspect-square bg-gray-200 flex items-center justify-center">
            <div className="text-center p-12">
              <MapPin size={80} className="mx-auto mb-6 text-gray-400" />
              <p className="text-gray-500 mb-2">Mapa de Localização</p>
              <p className="text-sm text-gray-400">
                Insira aqui o embed do Google Maps
              </p>
            </div>
          </div>

          {/* Nearby Places */}
          <div className="space-y-4">
            {nearby.map((place, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-primary shrink-0 mt-1">{place.number} -</div>
                <div className="text-gray-700 font-light">{place.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
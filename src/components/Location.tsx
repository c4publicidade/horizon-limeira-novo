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
          <div className="aspect-square w-full overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.657217916519!2d-47.38849292393447!3d-22.591920326695526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8813ec2127751%3A0x8d04511048c93b!2sR.%20Francisco%20Altimari%2C%20134%20-%20Jardim%20Colinas%20de%20S%C3%A3o%20Jo%C3%A3o%2C%20Limeira%20-%20SP%2C%2013481-174!5e0!3m2!1spt-BR!2sbr!4v1766019205167!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
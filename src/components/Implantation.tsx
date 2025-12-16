import React, { useState } from 'react';
import { Building2, Trees, LayoutGrid, Shield, Camera, Car, X, ZoomIn } from 'lucide-react';
import implantationImage from '../assets/implantacao.webp';

export function Implantation() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="implantation" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-wine mb-8 mx-auto" />
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-primary to-wine bg-clip-text text-transparent">
            Implantação
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Conheça a estrutura completa do empreendimento
          </p>
        </div>

        {/* Implantation Image */}
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-5xl w-full">
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setIsZoomed(true)}
            >
              <img 
                src={implantationImage} 
                alt="Implantação do Horizon Limeira" 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay com ícone de zoom */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-4">
                  <ZoomIn size={32} className="text-wine" />
                </div>
              </div>
              
              {/* Hint text */}
              <div className="absolute bottom-4 right-4 bg-wine/90 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Clique para ampliar
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Estrutura */}
          <div>
            <h3 className="text-3xl mb-8 text-wine">Estrutura</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building2 size={24} className="text-wine flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Duas torres estrategicamente posicionadas para garantir a melhor vista de Limeira
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Trees size={24} className="text-wine flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Ampla área verde com jardins e espaços de convivência
                </p>
              </div>

              <div className="flex items-start gap-4">
                <LayoutGrid size={24} className="text-wine flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Distribuição inteligente das áreas de lazer para otimizar a circulação
                </p>
              </div>
            </div>
          </div>

          {/* Segurança */}
          <div>
            <h3 className="text-3xl mb-8 text-wine">Segurança</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield size={24} className="text-wine flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Guarita com controle de acesso 24 horas
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Camera size={24} className="text-wine flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Sistema de câmeras e monitoramento
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Car size={24} className="text-wine flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Vagas de garagem cobertas e sinalizadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Zoom */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsZoomed(false)}
        >
          {/* Botão fechar */}
          <button
            className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors z-10 group"
            onClick={() => setIsZoomed(false)}
          >
            <div className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all">
              <X size={32} strokeWidth={1.5} />
            </div>
          </button>

          {/* Imagem ampliada */}
          <div 
            className="max-w-[95vw] max-h-[95vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={implantationImage}
              alt="Implantação ampliada"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>

          {/* Hint para fechar */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Clique fora da imagem para fechar
          </div>
        </div>
      )}
    </section>
  );
}
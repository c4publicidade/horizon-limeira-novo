import React from 'react';
import horizonLogo from 'figma:asset/a17b6b9eee35633d8dceaf31458e7b0d6d81d6f5.png';
import { BuildingIcon, ElevatorIcon, FloorPlanIcon, CarIcon, DeckIcon, HousesIcon } from './FeatureIcons';

export function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="h-px w-16 bg-wine mb-8" />
              <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-primary via-primary to-wine bg-clip-text text-transparent leading-tight">
                Um projeto que une <br />
                conforto e localização privilegiada
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Aproveite a melhor da vida ao lado da sua família, com a melhor vista de Limeira.
              </p>
              
              <p>
                Escolha o lugar ideal para criar uma nova moradia, com ambientes inteligentes projetados 
                para você e sua família viverem com todo conforto e bem-estar. Aqui, a convivência 
                flui entre o lazer e a segurança.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6 flex justify-center">
              <a 
                href="#contact" 
                className="bg-wine text-white px-8 py-4 uppercase tracking-wider text-sm hover:bg-wine/90 transition-colors inline-block"
              >
                Agende sua visita
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-12">
            <div className="space-y-6">
              {/* First Row */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-wine/5 to-wine/10 p-8 space-y-2 border-l-4 border-wine">
                  <div className="text-5xl text-wine">2</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Dormitórios</div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 space-y-2 border-l-4 border-primary">
                  <div className="text-5xl text-primary">1</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Vaga de Garagem</div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 space-y-2 border-l-4 border-primary">
                  <div className="text-4xl text-primary">47-54m²</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Área Privativa</div>
                </div>
                
                <div className="bg-gradient-to-br from-wine/5 to-wine/10 p-8 space-y-2 border-l-4 border-wine">
                  <div className="text-5xl text-wine">+15</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Itens de Lazer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features with Icons Section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3 Torres */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 border-2 border-wine rounded-2xl flex items-center justify-center bg-white">
                <BuildingIcon />
              </div>
              <p className="text-gray-700">3 torres</p>
            </div>

            {/* 2 Elevadores */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 border-2 border-wine rounded-2xl flex items-center justify-center bg-white">
                <ElevatorIcon />
              </div>
              <p className="text-gray-700">2 elevadores por torre</p>
            </div>

            {/* 3 Opções de Plantas */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 border-2 border-wine rounded-2xl flex items-center justify-center bg-white">
                <FloorPlanIcon />
              </div>
              <p className="text-gray-700">3 opções de plantas tipo<br />+ garden</p>
            </div>

            {/* Vaga de Garagem */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 border-2 border-wine rounded-2xl flex items-center justify-center bg-white">
                <CarIcon />
              </div>
              <p className="text-gray-700">1 vaga de garagem<br />coberta ou descoberta</p>
            </div>

            {/* Áreas Comuns */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 border-2 border-wine rounded-2xl flex items-center justify-center bg-white">
                <DeckIcon />
              </div>
              <p className="text-gray-700">Áreas comuns | entregues<br />equipadas e decoradas</p>
            </div>

            {/* Unidades Térreas */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 border-2 border-wine rounded-2xl flex items-center justify-center bg-white">
                <HousesIcon />
              </div>
              <p className="text-gray-700">Unidades térreas<br />com quintal privativo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
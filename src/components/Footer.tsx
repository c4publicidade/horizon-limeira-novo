import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary to-wine text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={logo} 
              alt="Horizon Limeira" 
              className="h-40 w-auto object-contain mb-6"
            />
            <p className="text-white/80 leading-relaxed">
              Viva em um novo horizonte de conforto e sofisticação
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Menu</h3>
            <div className="space-y-3">
              {['O Empreendimento', 'Plantas', 'Galeria', 'Implantação', 'Lazer', 'Localização', 'Eventos', 'Contato'].map((item) => (
                <div key={item}>
                  <button className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-white/20 hover:border-white flex items-center justify-center transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 border border-white/20 hover:border-white flex items-center justify-center transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 border border-white/20 hover:border-white flex items-center justify-center transition-colors">
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm text-center">
            © {currentYear} Horizon Limeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
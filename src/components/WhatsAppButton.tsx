import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão após rolar 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    // Substitua pelo número de telefone do empreendimento
    const phoneNumber = '5519998311427'; // Formato: código do país + DDD + número
    const message = 'Olá! Gostaria de mais informações sobre o Horizon Limeira.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-3xl group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="text-white" size={28} strokeWidth={2} />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco!
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </button>
  );
}

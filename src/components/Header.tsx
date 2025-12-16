import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'O Empreendimento', href: '#about' },
    { label: 'Plantas', href: '#plants' },
    { label: 'Decorado', href: '#decorated' },
    { label: 'Implantação', href: '#implantation' },
    { label: 'Lazer', href: '#amenities' },
    { label: 'Localização', href: '#location' },
    { label: 'Eventos', href: '#events' },
    { label: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-gradient-to-r from-primary to-wine backdrop-blur-xl py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="transition-all duration-500"
          >
            <img 
              src={logo} 
              alt="Horizon Limeira" 
              className={`h-32 md:h-44 w-auto object-contain transition-all duration-500 ${
                isScrolled ? 'h-24 md:h-32' : ''
              }`}
            />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-white transition-colors duration-300 font-light text-sm tracking-wider uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-gradient-to-r from-primary to-wine backdrop-blur-xl transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-white/80 hover:text-white transition-colors text-left font-light tracking-wider uppercase"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
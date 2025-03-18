import { useState } from 'react';
import { Link } from 'wouter';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { fontMontserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn("bg-primary text-white shadow-md", className)}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-2 border-b border-blue-800 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Av. Brasil, 1500 - Centro
            </span>
            <span className="hidden sm:flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Seg-Sáb: 8h-18h
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+5511999999999" className="flex items-center font-medium">
              <Phone className="w-4 h-4 mr-1" />
              (11) 99999-9999
            </a>
            <div className="hidden sm:flex items-center space-x-2">
              <a href="#" aria-label="Facebook" className="hover:text-[#FFD60A]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#FFD60A]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-[#FFD60A]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className={cn("text-2xl font-bold", fontMontserrat)}>
              Auto<span className="text-[#E94560]">Car</span><span className="text-[#FFD60A]">MR</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium hover:text-[#FFD60A] transition">Início</a>
            <a href="#services" className="font-medium hover:text-[#FFD60A] transition">Serviços</a>
            <a href="#parts" className="font-medium hover:text-[#FFD60A] transition">Peças</a>
            <a href="#brands" className="font-medium hover:text-[#FFD60A] transition">Marcas</a>
            <a href="#about" className="font-medium hover:text-[#FFD60A] transition">Quem Somos</a>
            <a href="#contact" className="font-medium hover:text-[#FFD60A] transition">Contato</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 border-t border-blue-800`}>
          <div className="flex flex-col space-y-3">
            <a href="#home" onClick={closeMenu} className="font-medium hover:text-[#FFD60A] transition py-2">Início</a>
            <a href="#services" onClick={closeMenu} className="font-medium hover:text-[#FFD60A] transition py-2">Serviços</a>
            <a href="#parts" onClick={closeMenu} className="font-medium hover:text-[#FFD60A] transition py-2">Peças</a>
            <a href="#brands" onClick={closeMenu} className="font-medium hover:text-[#FFD60A] transition py-2">Marcas</a>
            <a href="#about" onClick={closeMenu} className="font-medium hover:text-[#FFD60A] transition py-2">Quem Somos</a>
            <a href="#contact" onClick={closeMenu} className="font-medium hover:text-[#FFD60A] transition py-2">Contato</a>
          </div>
        </div>
      </div>
    </header>
  );
}

import { fontMontserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ChevronRight, Wrench, Headphones, Tag } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1597766358293-9441903c3e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Mecânica AutoCarMR" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6",
            fontMontserrat
          )}>
            Sua <span className="text-[#FFD60A]">solução completa</span> em mecânica automotiva
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Serviços de guincho 24h, borracharia, manutenção completa para veículos a gasolina, etanol e diesel. Trabalhamos com todas as marcas e modelos.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="bg-[#E94560] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center"
            >
              <Wrench className="mr-2 h-5 w-5" /> Nossos Serviços
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-md transition duration-300 flex items-center"
            >
              <Headphones className="mr-2 h-5 w-5" /> Fale Conosco
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-[#FFD60A] py-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg 
                viewBox="0 0 24 24" 
                className="h-8 w-8 mr-3 text-primary" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <path d="M9 17h6"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
              <div>
                <h3 className={cn("font-bold text-primary", fontMontserrat)}>Guincho 24h</h3>
                <p className="text-sm">Atendimento rápido onde você estiver</p>
              </div>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <Wrench className="h-8 w-8 mr-3 text-primary" />
              <div>
                <h3 className={cn("font-bold text-primary", fontMontserrat)}>Mecânica Completa</h3>
                <p className="text-sm">Profissionais certificados e experientes</p>
              </div>
            </div>
            <div className="flex items-center">
              <Tag className="h-8 w-8 mr-3 text-primary" />
              <div>
                <h3 className={cn("font-bold text-primary", fontMontserrat)}>Peças Originais</h3>
                <p className="text-sm">Garantia e qualidade assegurada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

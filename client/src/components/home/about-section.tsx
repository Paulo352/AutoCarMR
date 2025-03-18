import { fontMontserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { User, Shield } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              fontMontserrat
            )}>
              Sobre a AutoCarMR
            </h2>
            <p className="text-gray-700 mb-4">
              Com mais de 15 anos de experiência no mercado, a AutoCarMR se tornou referência em serviços automotivos completos. Nossa equipe é formada por profissionais altamente qualificados, prontos para oferecer a melhor solução para seu veículo.
            </p>
            <p className="text-gray-700 mb-4">
              Trabalhamos com tecnologia avançada para diagnóstico preciso e utilizamos peças de qualidade para garantir a durabilidade e segurança dos serviços prestados.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa missão é proporcionar tranquilidade aos nossos clientes, oferecendo serviços de excelência com transparência e honestidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <User className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className={cn(
                    "font-bold text-lg",
                    fontMontserrat
                  )}>
                    Equipe Qualificada
                  </h4>
                  <p className="text-sm text-gray-600">Profissionais certificados</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className={cn(
                    "font-bold text-lg",
                    fontMontserrat
                  )}>
                    Garantia de Serviço
                  </h4>
                  <p className="text-sm text-gray-600">Todos os serviços garantidos</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFD60A] rounded-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1613214013926-22e22a01980e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe AutoCarMR" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E94560] rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

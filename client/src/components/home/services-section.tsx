import { fontMontserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      id: "guincho",
      title: "Serviço de Guincho 24h",
      description: "Atendimento rápido e eficiente para reboque de veículos em qualquer situação, 24 horas por dia.",
      icon: (
        <svg className="text-5xl text-white" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/>
          <circle cx="7" cy="17" r="2"/>
          <path d="M9 17h6"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1617886322168-72b886573c5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "borracharia",
      title: "Borracharia",
      description: "Troca e reparo de pneus, balanceamento, alinhamento e serviços relacionados à segurança dos seus pneus.",
      icon: (
        <svg className="text-5xl text-white" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mecanica",
      title: "Mecânica Geral",
      description: "Serviços completos de manutenção e reparo para veículos a gasolina, etanol e diesel de todas as marcas.",
      icon: (
        <svg className="text-5xl text-white" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "eletrica",
      title: "Elétrica Automotiva",
      description: "Diagnóstico e reparo de problemas elétricos, instalação de acessórios e manutenção preventiva.",
      icon: (
        <svg className="text-5xl text-white" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
          <path d="m5 5 14 14" />
          <path d="m19 5-14 14" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "oleo",
      title: "Troca de Óleo e Filtros",
      description: "Serviço rápido e eficiente de troca de óleo, com produtos de alta qualidade para todos os tipos de motor.",
      icon: (
        <svg className="text-5xl text-white" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M8 2v4" />
          <path d="M12 2v4" />
          <path d="M16 2v4" />
          <path d="M9 12h6" />
          <path d="M9 16h6" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1632823471565-1ecadd218b63?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ar",
      title: "Ar Condicionado",
      description: "Manutenção, recarga e reparo de sistemas de ar condicionado para maior conforto em seu veículo.",
      icon: (
        <svg className="text-5xl text-white" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2 12 10 5.5L22 12" />
          <path d="M12 3v14" />
          <path d="m7 8.8 5 3" />
          <path d="m17 8.8-5 3" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1622168703140-4042ebda85f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  return (
    <section id="services" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            fontMontserrat
          )}>
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para manter seu veículo nas melhores condições
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="h-48 bg-primary relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-40 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className={cn(
                  "text-xl font-bold mb-3",
                  fontMontserrat
                )}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="text-[#E94560] font-semibold flex items-center hover:text-red-700 transition"
                >
                  Solicitar Serviço <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

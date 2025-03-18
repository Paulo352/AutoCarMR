import { fontMontserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface PartCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export function PartsSection() {
  const partCategories: PartCategory[] = [
    {
      id: "motor",
      name: "Peças de Motor",
      description: "Filtros, correias, velas e mais",
      icon: (
        <svg className="text-3xl text-primary" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3" />
          <path d="M3 12h3" />
          <path d="M12 21v-3" />
          <path d="M21 12h-3" />
        </svg>
      )
    },
    {
      id: "suspensao",
      name: "Suspensão",
      description: "Amortecedores, molas e componentes",
      icon: (
        <svg className="text-3xl text-primary" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
        </svg>
      )
    },
    {
      id: "baterias",
      name: "Baterias",
      description: "Diversas marcas e amperagens",
      icon: (
        <svg className="text-3xl text-primary" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <path d="M20 4h2" />
          <path d="M2 4h2" />
          <path d="M12 4v3" />
          <path d="M6 15v2" />
          <path d="M18 15v2" />
          <path d="M9 15v3" />
          <path d="M15 15v3" />
        </svg>
      )
    },
    {
      id: "lubrificantes",
      name: "Lubrificantes",
      description: "Óleos e fluidos especializados",
      icon: (
        <svg className="text-3xl text-primary" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M8 2v4" />
          <path d="M12 2v4" />
          <path d="M16 2v4" />
        </svg>
      )
    },
    {
      id: "pneus",
      name: "Pneus",
      description: "Todas as medidas e marcas",
      icon: (
        <svg className="text-3xl text-primary" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="m3 14 1.9-1.9" />
          <path d="m4.9 19.1 1.9-1.9" />
          <path d="m10 21.9 1.9-1.9" />
          <path d="m14 21.9 1.9-1.9" />
          <path d="m19.1 19.1 1.9-1.9" />
          <path d="m21 14 1.9-1.9" />
          <path d="m21 10-1.9-1.9" />
          <path d="m19.1 4.9-1.9-1.9" />
          <path d="m14 2.1-1.9-1.9" />
          <path d="m10 2.1-1.9-1.9" />
          <path d="m4.9 4.9-1.9-1.9" />
          <path d="m3 10-1.9-1.9" />
        </svg>
      )
    },
    {
      id: "freios",
      name: "Freios",
      description: "Pastilhas, discos e componentes",
      icon: (
        <svg className="text-3xl text-primary" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    },
    {
      id: "eletrica",
      name: "Elétrica",
      description: "Componentes e acessórios elétricos",
      icon: (
        <svg className="text-3xl text-primary" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m13 2-2 2.5h3L12 7" />
          <path d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5" />
          <path d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5" />
        </svg>
      )
    },
    {
      id: "acessorios",
      name: "Acessórios",
      description: "Itens para personalização e uso",
      icon: (
        <svg className="text-3xl text-primary" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="parts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            fontMontserrat
          )}>
            Peças Automotivas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com peças originais e homologadas para todas as marcas e modelos de veículos
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-md transition duration-300"
            >
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className={cn(
                "font-bold mb-2",
                fontMontserrat
              )}>
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-[#E94560] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}

import { fontMontserrat, fontRoboto } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface VehicleBrand {
  id: string;
  name: string;
}

export function BrandsSection() {
  const vehicleBrands: VehicleBrand[] = [
    { id: "volkswagen", name: "Volkswagen" },
    { id: "chevrolet", name: "Chevrolet" },
    { id: "fiat", name: "Fiat" },
    { id: "ford", name: "Ford" },
    { id: "toyota", name: "Toyota" },
    { id: "honda", name: "Honda" },
    { id: "hyundai", name: "Hyundai" },
    { id: "renault", name: "Renault" },
    { id: "nissan", name: "Nissan" },
    { id: "mercedes", name: "Mercedes" },
    { id: "bmw", name: "BMW" },
    { id: "outras", name: "Outras" }
  ];
  
  return (
    <section id="brands" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            fontMontserrat
          )}>
            Marcas Atendidas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com todas as marcas e modelos de veículos nacionais e importados
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {vehicleBrands.map((brand) => (
            <div 
              key={brand.id}
              className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition duration-300"
            >
              <span className={cn(
                "text-lg font-bold text-gray-700",
                fontRoboto
              )}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

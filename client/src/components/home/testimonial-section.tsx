import { fontMontserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Star, StarHalf } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  initials: string;
  text: string;
  rating: number;
}

export function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ana Carvalho",
      initials: "AC",
      text: "Excelente atendimento! Precisei do serviço de guincho e em menos de 30 minutos eles estavam no local. Super recomendo.",
      rating: 5
    },
    {
      id: "2",
      name: "Marcos Silva",
      initials: "MS",
      text: "Mecânicos muito competentes e preço justo. Sempre levo meu carro na AutoCarMR e nunca tive problemas.",
      rating: 5
    },
    {
      id: "3",
      name: "Paula Ribeiro",
      initials: "PR",
      text: "Atendimento rápido e eficiente na borracharia. Conseguiram salvar meu pneu quando outros lugares queriam que eu comprasse um novo.",
      rating: 4.5
    }
  ];
  
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-[#FFD60A] text-[#FFD60A]" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-[#FFD60A] text-[#FFD60A]" />);
    }
    
    return stars;
  };
  
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            fontMontserrat
          )}>
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg p-6 text-dark relative"
            >
              <div className="absolute -top-4 -right-4 bg-[#FFD60A] text-primary w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
              </div>
              <p className="mb-4 italic text-gray-600">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className={cn(
                    "font-bold",
                    fontMontserrat
                  )}>
                    {testimonial.name}
                  </h4>
                  <div className="flex text-[#FFD60A]">
                    {renderRating(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

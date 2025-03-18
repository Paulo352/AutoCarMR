import { fontMontserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ContactForm } from '@/components/contact/contact-form';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            fontMontserrat
          )}>
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender sua solicitação. Entre em contato ou visite nossa oficina.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className={cn(
                "text-2xl font-bold mb-6",
                fontMontserrat
              )}>
                Envie sua Mensagem
              </h3>
              
              <ContactForm />
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className={cn(
                "text-2xl font-bold mb-6",
                fontMontserrat
              )}>
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Endereço</h4>
                    <p className="text-gray-600">Av. Brasil, 1500 - Centro<br/>São Paulo - SP, 01000-000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Telefones</h4>
                    <p className="text-gray-600">
                      <span className="block">Guincho 24h: (11) 99999-9999</span>
                      <span className="block">Oficina: (11) 3333-3333</span>
                      <span className="block">WhatsApp: (11) 99888-8888</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      <span className="block">Segunda a Sexta: 8h às 18h</span>
                      <span className="block">Sábado: 8h às 14h</span>
                      <span className="block">Domingo: Fechado</span>
                      <span className="block font-bold text-[#E94560]">Guincho 24h todos os dias</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">contato@autocarmr.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-64">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-4xl text-primary mb-2 mx-auto" />
                  <p className="font-bold">Mapa de Localização</p>
                  <p className="text-sm text-gray-600">Google Maps seria integrado aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

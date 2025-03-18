import { Phone } from 'lucide-react';

export function EmergencyButton() {
  return (
    <a 
      href="tel:+5511999999999" 
      className="emergency-button fixed bottom-5 right-5 bg-[#E94560] text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center hover:bg-red-700 transition duration-300"
      style={{
        animation: 'pulse 2s infinite',
      }}
    >
      <svg 
        viewBox="0 0 24 24" 
        className="h-5 w-5 mr-2" 
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
      <span className="font-bold">GUINCHO 24H</span>
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(233, 69, 96, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(233, 69, 96, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(233, 69, 96, 0);
          }
        }
      `}</style>
    </a>
  );
}

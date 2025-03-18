import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { PartsSection } from "@/components/home/parts-section";
import { BrandsSection } from "@/components/home/brands-section";
import { AboutSection } from "@/components/home/about-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { ContactSection } from "@/components/home/contact-section";
import { EmergencyButton } from "@/components/home/emergency-button";
import { useEffect } from "react";

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        
        const targetId = anchor.hash;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
          
          // Update URL without full page reload
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen font-opensans text-dark">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <PartsSection />
        <BrandsSection />
        <AboutSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      
      <Footer />
      <EmergencyButton />
    </div>
  );
}

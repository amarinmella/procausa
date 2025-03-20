
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after component mounts for smooth entrance
    if (headingRef.current) {
      headingRef.current.classList.add('animate-fade-in');
    }
    if (subheadingRef.current) {
      subheadingRef.current.classList.add('animate-slide-up', 'animation-delay-200');
    }
    if (buttonRef.current) {
      buttonRef.current.classList.add('animate-slide-up', 'animation-delay-400');
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20 px-4"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-law-navy/90 to-law-navy/70"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="container-custom relative z-10 max-w-4xl mx-auto opacity-0" ref={headingRef}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
          <span className="text-law-gold">ProCausa</span> - Tu defensa es nuestra causa
        </h1>
        <p 
          ref={subheadingRef} 
          className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0"
        >
          Nuestro equipo de profesionales expertos en diversas áreas del derecho te brindará la asesoría legal que necesitas para resolver tus problemas legales.
        </p>
        <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <a 
            href="#contact" 
            className="bg-law-gold text-law-navy px-8 py-3 rounded font-medium text-lg hover:bg-white transition-all duration-300 w-full sm:w-auto"
          >
            Consulta Gratuita
          </a>
          <a 
            href="#services" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded font-medium text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;


import React, { useEffect, useRef } from 'react';
import { Shield, Scale, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-law-gold mb-4" />,
      title: "Integridad",
      description: "Actuamos con transparencia y ética en cada caso, honrando la confianza de nuestros clientes."
    },
    {
      icon: <Scale className="w-12 h-12 text-law-gold mb-4" />,
      title: "Excelencia",
      description: "Nos comprometemos a ofrecer servicios jurídicos de la más alta calidad y profesionalismo."
    },
    {
      icon: <Clock className="w-12 h-12 text-law-gold mb-4" />,
      title: "Dedicación",
      description: "Cada caso recibe atención personalizada y dedicación completa de nuestro equipo."
    },
    {
      icon: <Users className="w-12 h-12 text-law-gold mb-4" />,
      title: "Empatía",
      description: "Entendemos las necesidades y preocupaciones de nuestros clientes para ofrecer el mejor servicio."
    }
  ];

  return (
    <section id="about" className="section-padding bg-law-light-gray">
      <div 
        ref={sectionRef}
        className="container-custom opacity-0 transition-opacity duration-1000"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left column with text */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-law-gold/20 text-law-gold rounded-full text-sm font-medium mb-2">
              Sobre Nosotros
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-6">
              ProCausa - Somos tu equipo jurídico
            </h2>
            <p className="text-law-dark-gray/80 leading-relaxed mb-6">
              Fundado con la misión de proteger los derechos e intereses de nuestros clientes, ProCausa ha crecido hasta convertirse en una de las firmas más respetadas en el país. Contamos con un equipo de abogados altamente capacitados y con vasta experiencia en diversas áreas del derecho.
            </p>
            <p className="text-law-dark-gray/80 leading-relaxed mb-8">
              Nuestra misión es proporcionar asesoramiento jurídico de excelencia, defendiendo los intereses de nuestros clientes con integridad y profesionalismo. Nos distinguimos por nuestro enfoque personalizado, entendiendo que cada caso es único y requiere soluciones a medida.
            </p>
            <a 
              href="#team" 
              className="inline-flex items-center text-law-navy border-b-2 border-law-gold font-medium hover:text-law-gold transition-colors duration-300"
            >
              Conoce a nuestro equipo
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          </div>
          
          {/* Right column with values grid */}
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {value.icon}
                <h3 className="text-xl font-bold text-law-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-law-dark-gray/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

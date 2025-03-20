
import React, { useEffect, useRef } from 'react';
import { Briefcase, Home, Users, FileText, Handshake, Scale } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-law-gold" />,
      title: "Derecho Corporativo",
      description: "Asesoramiento integral para empresas en constitución, contratos, fusiones y adquisiciones, compliance y más.",
      delay: 0
    },
    {
      icon: <FileText className="w-12 h-12 text-law-gold" />,
      title: "Derecho Laboral",
      description: "Representación de empleadores y empleados en conflictos laborales, negociaciones y asesoramiento preventivo.",
      delay: 100
    },
    {
      icon: <Home className="w-12 h-12 text-law-gold" />,
      title: "Derecho Inmobiliario",
      description: "Asesoramiento en compraventa, arrendamientos, desarrollo inmobiliario y resolución de conflictos de propiedad.",
      delay: 200
    },
    {
      icon: <Users className="w-12 h-12 text-law-gold" />,
      title: "Derecho Familiar",
      description: "Asistencia en divorcios, custodia de hijos, pensiones alimenticias, sucesiones y herencias.",
      delay: 300
    },
    {
      icon: <Scale className="w-12 h-12 text-law-gold" />,
      title: "Litigación Civil",
      description: "Representación en todo tipo de conflictos civiles, con enfoque en resoluciones favorables y eficientes.",
      delay: 400
    },
    {
      icon: <Handshake className="w-12 h-12 text-law-gold" />,
      title: "Mediación y Arbitraje",
      description: "Resolución alternativa de conflictos a través de mediación y arbitraje con especialistas certificados.",
      delay: 500
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div 
        ref={sectionRef}
        className="container-custom opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-law-gold/20 text-law-gold rounded-full text-sm font-medium mb-2">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-6">
            Soluciones legales completas para todas tus necesidades
          </h2>
          <p className="text-law-dark-gray/80 leading-relaxed">
            Ofrecemos un amplio catálogo de servicios jurídicos con la experiencia y dedicación que tu caso merece. Nuestros abogados especializados están listos para brindarte la mejor asesoría legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => serviceRefs.current[index] = el}
              className="bg-law-light-gray p-8 rounded-lg hover:shadow-lg transition-all duration-300 opacity-0 transform translate-y-4 group"
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className="bg-white inline-flex p-4 rounded-full mb-6 group-hover:bg-law-navy transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-law-navy mb-3 group-hover:text-law-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-law-dark-gray/80 mb-6">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-law-navy font-medium group-hover:text-law-gold transition-colors duration-300"
              >
                Consultar
                <svg 
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

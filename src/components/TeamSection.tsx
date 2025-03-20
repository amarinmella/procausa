
import React, { useEffect, useRef } from 'react';

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const memberRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    memberRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      memberRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const team = [
    {
      name: "Alberto Pacheco",
      role: "Socio Fundador",
      specialty: "Abogado",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      delay: 0
    },
    {
      name: "Jaime Encina",
      role: "Socio Fundador",
      specialty: "Periodista y CEO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      delay: 100
    },
    {
      name: "Andrés Marín",
      role: "Socio Fundador",
      specialty: "CTO",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      delay: 200
    }
  ];

  return (
    <section id="team" className="section-padding bg-law-cream">
      <div 
        ref={sectionRef}
        className="container-custom opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-law-gold/20 text-law-gold rounded-full text-sm font-medium mb-2">
            Nuestro Equipo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-6">
            Conoce a nuestros socios fundadores
          </h2>
          <p className="text-law-dark-gray/80 leading-relaxed">
            Un equipo de profesionales comprometidos con brindarte el mejor servicio legal, liderado por tres socios fundadores con amplia experiencia en sus respectivas áreas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              ref={el => memberRefs.current[index] = el}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 opacity-0 transform translate-y-4 group"
              style={{ transitionDelay: `${member.delay}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-law-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-law-gold font-medium">
                      {member.role}
                    </p>
                    <p className="text-white/90 text-sm mt-2">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-law-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-law-gold font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-law-dark-gray/80 text-sm">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-law-navy text-white px-8 py-3 rounded font-medium hover:bg-law-navy/90 transition-all duration-300"
          >
            Agenda una Consulta
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
      </div>
    </section>
  );
};

export default TeamSection;

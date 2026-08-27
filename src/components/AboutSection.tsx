import React from 'react';
import { Shield, Scale, Clock, Users } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';

const values = [
  {
    icon: Shield,
    title: 'Integridad',
    description: 'Actuamos con transparencia y ética en cada caso, honrando la confianza de nuestros clientes.'
  },
  {
    icon: Scale,
    title: 'Excelencia',
    description: 'Nos comprometemos a ofrecer servicios jurídicos de la más alta calidad y profesionalismo.'
  },
  {
    icon: Clock,
    title: 'Dedicación',
    description: 'Cada caso recibe atención personalizada y seguimiento directo, sin intermediarios.'
  },
  {
    icon: Users,
    title: 'Claridad',
    description: 'Explicamos tu situación en palabras simples, para que decidas con toda la información.'
  }
];

const AboutSection = () => {
  const reveal = useReveal();

  return (
    <section id="about" className="section-padding bg-law-light-gray">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div ref={reveal} className="reveal lg:w-1/2">
            <SectionHeading
              align="left"
              eyebrow="Sobre nosotros"
              title="ProCausa, el servicio legal de Pacheco · Espinoza"
            />
            <div className="space-y-5 text-body text-law-dark-gray/85">
              <p>
                ProCausa es la vía directa para acceder a la asesoría de{' '}
                <strong className="text-law-navy font-semibold">
                  Pacheco · Espinoza &amp; Cía. Abogados
                </strong>
                . Nace de una idea simple: que consultar a un abogado no debería ser
                intimidante ni caro de partida.
              </p>
              <p>
                Trabajamos con personas y empresas en derecho corporativo, laboral,
                inmobiliario, familiar y litigación civil. Cada caso lo lleva un abogado
                con nombre y apellido, que responde directamente y explica en palabras
                simples qué opciones hay y qué esperar de cada una.
              </p>
            </div>

            <a
              href="#team"
              className="inline-flex items-center gap-2 mt-8 text-law-teal font-semibold border-b-2 border-law-gold pb-1 hover:text-law-teal-dark hover:border-law-teal transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-teal rounded-sm"
            >
              Conoce el estudio
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  ref={reveal}
                  className="reveal bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-law-teal/10 mb-4">
                    <Icon className="w-6 h-6 text-law-teal" aria-hidden="true" />
                  </div>
                  <h3 className="text-h3 font-serif font-bold text-law-navy mb-2">{value.title}</h3>
                  <p className="text-law-dark-gray/80">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

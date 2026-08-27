import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { whatsappUrl } from '@/lib/contact';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/lib/content';

const ServicesSection = () => {
  const reveal = useReveal();

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div ref={reveal} className="reveal mb-14">
          <SectionHeading
            eyebrow="Áreas de práctica"
            title="En qué te podemos ayudar"
            description="Seis áreas cubiertas por abogados con experiencia en cada una. Si tu caso cruza varias, lo vemos completo desde el principio."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                ref={reveal}
                className="reveal group flex flex-col bg-law-light-gray p-7 rounded-lg border border-transparent hover:border-law-teal/25 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white group-hover:bg-law-navy transition-colors duration-300 mb-5">
                  <Icon
                    className="w-7 h-7 text-law-teal group-hover:text-law-gold transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-h3 font-serif font-bold text-law-navy mb-3">{service.title}</h3>
                <p className="text-law-dark-gray/80 mb-6 flex-1">{service.description}</p>

                {/*
                  El mensaje de WhatsApp llega ya contextualizado con el area
                  desde la que se hizo clic: ahorra el primer ida y vuelta.
                */}
                <a
                  href={whatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-law-teal font-semibold hover:text-law-teal-dark transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-teal rounded-sm"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Consultar por {service.title.replace('Derecho ', '').toLowerCase()}
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

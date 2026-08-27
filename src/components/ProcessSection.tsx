import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { WHATSAPP_URL } from '@/lib/contact';
import SectionHeading from '@/components/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Nos cuentas tu caso',
    description:
      'Por WhatsApp o el formulario. No necesitas preparar nada ni tener los documentos a mano: basta con explicarlo en tus palabras.'
  },
  {
    number: '02',
    title: 'Evaluamos sin costo',
    description:
      'Un abogado revisa tu situación y te dice con franqueza si hay caso, qué alternativas existen y cuál conviene. Si no hay nada que hacer, también te lo decimos.'
  },
  {
    number: '03',
    title: 'Sabes cuánto y cuánto demora',
    description:
      'Antes de que decidas nada, te entregamos el costo y los plazos estimados por escrito. Sin sorpresas después.'
  },
  {
    number: '04',
    title: 'Tomamos el caso',
    description:
      'Si decides avanzar, el mismo abogado que te atendió lleva el caso y te mantiene al día en cada etapa.'
  }
];

const ProcessSection = () => {
  const reveal = useReveal();

  return (
    <section id="process" className="section-padding bg-law-cream">
      <div className="container-custom">
        <div ref={reveal} className="reveal mb-14">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Qué pasa después de que nos escribes"
            description="Contactar a un abogado suele dar más nervio del necesario. Estos son los cuatro pasos, para que sepas exactamente en qué te estás metiendo."
          />
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <li
              key={step.number}
              ref={reveal}
              className="reveal relative bg-white p-7 rounded-lg shadow-sm h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span
                className="block font-serif text-4xl font-bold text-law-teal/25 mb-3"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="text-h3 font-serif font-bold text-law-navy mb-2">{step.title}</h3>
              <p className="text-law-dark-gray/80">{step.description}</p>
            </li>
          ))}
        </ol>

        <div ref={reveal} className="reveal text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-law-navy text-white px-8 py-3.5 rounded font-semibold hover:bg-law-teal transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-teal focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Empezar por el paso 1
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

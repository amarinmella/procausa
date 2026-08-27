import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useReveal } from '@/hooks/useReveal';
import { WHATSAPP_URL } from '@/lib/contact';
import SectionHeading from '@/components/SectionHeading';
import { faqs } from '@/lib/content';

const FaqSection = () => {
  const reveal = useReveal();

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div ref={reveal} className="reveal mb-12">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Lo que la gente pregunta antes de escribirnos"
            description="Si tu duda no está acá, escríbenos y te respondemos sin compromiso."
          />
        </div>

        <div ref={reveal} className="reveal max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="border-law-navy/10">
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-law-navy hover:text-law-teal hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-law-dark-gray/85 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center bg-law-light-gray rounded-lg p-8">
            <p className="text-law-navy font-serif text-h3 font-bold mb-2">
              ¿Tu caso es distinto?
            </p>
            <p className="text-law-dark-gray/80 mb-6">
              Cuéntanoslo y te decimos en concreto si podemos ayudarte.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-law-navy text-white px-7 py-3 rounded font-semibold hover:bg-law-teal transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-teal focus-visible:ring-offset-2"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

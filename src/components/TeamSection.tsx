import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { WHATSAPP_URL } from '@/lib/contact';
import SectionHeading from '@/components/SectionHeading';

/*
  Sin foto: la que habia era de un desconocido sacado de Unsplash bajo el
  rotulo "Socio Fundador", que para un estudio juridico es un problema de
  credibilidad concreto. El monograma se ve deliberado y no finge ser una
  persona real. Reemplazar por el retrato real cuando lo entreguen.
*/
const partner = {
  name: 'Alberto Pacheco',
  role: 'Socio fundador',
  title: 'Abogado',
  initials: 'AP',
  bio: 'Lidera la práctica del estudio y atiende personalmente las consultas que llegan por ProCausa.'
};

const TeamSection = () => {
  const reveal = useReveal();

  return (
    <section id="team" className="section-padding bg-law-light-gray">
      <div className="container-custom">
        <div ref={reveal} className="reveal mb-14">
          <SectionHeading
            eyebrow="El estudio"
            title="Quién está detrás de ProCausa"
            description="ProCausa no es un intermediario ni un directorio de abogados. Es el canal directo del estudio Pacheco · Espinoza & Cía."
          />
        </div>

        <div ref={reveal} className="reveal max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-7 text-center sm:text-left">
            <div
              className="shrink-0 w-28 h-28 rounded-full bg-law-navy flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="font-serif text-3xl font-bold text-law-gold tracking-wide">
                {partner.initials}
              </span>
            </div>

            <div>
              <h3 className="text-h3 font-serif font-bold text-law-navy">{partner.name}</h3>
              <p className="text-law-teal font-semibold mt-1">{partner.role}</p>
              <p className="text-law-dark-gray/70 text-sm">{partner.title}</p>
              <p className="text-law-dark-gray/85 mt-4">{partner.bio}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <img
              src="/img/pacheco-espinoza-logo-horizontal.jpg"
              alt="Pacheco · Espinoza & Cía. Abogados"
              width={303}
              height={78}
              loading="lazy"
              decoding="async"
              className="h-14 w-auto"
            />
          </div>
        </div>

        <div ref={reveal} className="reveal text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-law-navy text-white px-8 py-3.5 rounded font-semibold hover:bg-law-teal transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-teal focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Agendar una consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

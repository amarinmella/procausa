import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { WHATSAPP_URL } from '@/lib/contact';
import SectionHeading from '@/components/SectionHeading';
import { partner } from '@/lib/content';

/*
  Retrato real del socio, entregado por el estudio. Reemplaza al monograma
  que servia de marcador mientras no habia foto (y antes de eso, a una imagen
  de stock de un desconocido, que en un sitio juridico es un problema de
  credibilidad, no un detalle estetico).

  El archivo se sirve en WebP a 512px: el original pesaba 2,6 MB y esta bajo
  el fold, asi que va con loading="lazy".
*/

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
          <article className="bg-white rounded-lg shadow-sm p-8 sm:p-10">
            <div className="flex flex-col items-center text-center">
              {/* El aro anterior era ring-white sobre tarjeta blanca: invisible.
                  Un ring navy al 10% si define el borde del retrato. */}
              <img
                src="/img/alberto-pacheco.webp"
                alt={`${partner.name}, ${partner.role} de Pacheco · Espinoza & Cía. Abogados`}
                width={512}
                height={512}
                loading="lazy"
                decoding="async"
                className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover shadow-lg ring-1 ring-law-navy/10"
              />

              <h3 className="text-h3 font-serif font-bold text-law-navy mt-7">{partner.name}</h3>
              <p className="text-law-teal font-semibold mt-1">{partner.role}</p>
              <p className="text-law-dark-gray/70 text-sm">{partner.title}</p>

              <div className="mt-5 space-y-3 text-law-dark-gray/85 max-w-xl">
                {partner.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-7 border-t border-law-navy/10">
              <h4 className="text-eyebrow uppercase text-law-teal font-semibold mb-4 text-center">
                Áreas de experiencia
              </h4>
              <ul className="flex flex-wrap justify-center gap-2">
                {partner.expertise.map((area) => (
                  <li
                    key={area}
                    className="bg-law-teal/10 text-law-teal text-sm font-medium px-3 py-1.5 rounded"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </article>

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

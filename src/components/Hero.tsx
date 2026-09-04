import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/contact';
import { useReveal } from '@/hooks/useReveal';

const Hero = () => {
  const reveal = useReveal();

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 min-h-[100svh]"
    >
      {/*
        Imagen de fondo como <img> y no como background-image de CSS: asi
        puede llevar fetchpriority y el navegador la descubre en el parseo
        inicial en vez de esperar al CSSOM. Es el LCP de la pagina.

        El atributo va por spread y en minusculas a proposito: React 18 no
        reconoce `fetchPriority` en camelCase, lo descarta con un warning y
        nunca llega al DOM, con lo que la prioridad de descarga no se aplica.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/img/hero.jpg"
          alt=""
          aria-hidden="true"
          width={2070}
          height={1380}
          {...({ fetchpriority: 'high' } as Record<string, string>)}
          decoding="async"
          className="w-full h-full img-cover"
        />
        {/*
          Dos capas: una base navy solida que garantiza fondo oscuro sea cual
          sea la foto, y encima el degradado que aporta el color de marca.
          Con una sola capa degradada, el extremo teal al 80% dejaba el texto
          en ~1.8:1 si la foto era clara.
        */}
        <div className="absolute inset-0 bg-law-navy/88" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-law-navy/70 via-law-navy/50 to-law-teal/45"
          aria-hidden="true"
        />
      </div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto">
        <p ref={reveal} className="reveal text-eyebrow uppercase text-white/85 mb-5">
          Pacheco · Espinoza &amp; Cía. Abogados
        </p>

        <h1
          ref={reveal}
          className="reveal text-display font-serif font-bold text-white mb-6"
          style={{ transitionDelay: '80ms' }}
        >
          Tu defensa es <span className="text-law-gold">nuestra causa</span>
        </h1>

        <p
          ref={reveal}
          className="reveal text-lead text-white/90 mb-9 max-w-2xl mx-auto"
          style={{ transitionDelay: '160ms' }}
        >
          Más de 30 años asesorando a empresas, empresarios y particulares en materias
          civiles, comerciales e inmobiliarias. Cuéntanos tu caso y te decimos con
          claridad dónde estás parado, sin compromiso.
        </p>

        <div
          ref={reveal}
          className="reveal flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ transitionDelay: '240ms' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-law-gold text-law-navy px-8 py-3.5 rounded font-semibold text-lg hover:bg-white transition-colors duration-300 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-law-navy"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Escríbenos por WhatsApp
          </a>
          <a
            href="#services"
            className="bg-white/10 border-2 border-white/70 text-white px-8 py-3.5 rounded font-semibold text-lg hover:bg-white/20 hover:border-white transition-colors duration-300 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Ver áreas de práctica
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors duration-300 animate-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Ir a la siguiente sección"
      >
        <ArrowDown className="w-6 h-6" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;

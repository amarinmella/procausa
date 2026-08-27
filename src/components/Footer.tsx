import React, { useEffect, useState } from 'react';
import { Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/lib/content';
import {
  ADDRESS_ONE_LINE,
  EMAIL,
  MAP_LINK_URL,
  PHONE_DISPLAY,
  PHONE_E164
} from '@/lib/contact';

const quickLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Cómo trabajamos', href: '#process' },
  { name: 'Preguntas frecuentes', href: '#faq' },
  { name: 'Contacto', href: '#contact' }
];

/*
  Redes sociales: quedan solo las que el estudio confirme. Antes habia cuatro
  iconos con href="#" que no llevaban a ninguna parte. Poner la URL real aqui
  y el enlace aparece solo.
*/
const socials: { name: string; href: string; icon: typeof Linkedin }[] = [
  // { name: 'LinkedIn', href: 'https://linkedin.com/company/...', icon: Linkedin },
  // { name: 'Instagram', href: 'https://instagram.com/...', icon: Instagram },
];

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Antes este boton era `fixed` y se mostraba desde el primer pixel,
  // flotando sobre el hero y sugiriendo scroll cuando no habia ninguno.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-law-gold text-law-navy',
        'flex items-center justify-center shadow-lg transition-all duration-300',
        'hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2',
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
      )}
      aria-label="Volver arriba"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
};

const Footer = () => (
  <footer className="bg-law-navy text-white">
    <div className="container-custom py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-2xl font-bold mb-1">
            Pro<span className="text-law-gold">Causa</span>
          </div>
          <p className="text-white/55 text-sm mb-5">por Pacheco · Espinoza &amp; Cía.</p>

          <p className="text-white/70 mb-6 max-w-xs">
            Asesoría legal en Santiago para personas y empresas. Primera consulta sin costo.
          </p>

          {/* El logo es un JPG con fondo blanco: sobre navy va en un panel
              claro para que no se vea como un recorte. */}
          <div className="inline-block bg-white rounded-md p-3">
            <img
              src="/img/pacheco-espinoza-logo-horizontal.jpg"
              alt="Pacheco · Espinoza & Cía. Abogados"
              width={303}
              height={78}
              loading="lazy"
              decoding="async"
              className="h-10 w-auto"
            />
          </div>

          {socials.length > 0 && (
            <div className="flex gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-law-gold hover:text-law-navy transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-serif font-bold mb-5 border-b border-white/10 pb-2">
            Enlaces
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-law-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif font-bold mb-5 border-b border-white/10 pb-2">
            Áreas de práctica
          </h3>
          <ul className="space-y-2.5">
            {services.map((service) => (
              <li key={service.title}>
                <a
                  href="#services"
                  className="text-white/70 hover:text-law-gold transition-colors duration-300"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif font-bold mb-5 border-b border-white/10 pb-2">
            Contacto
          </h3>
          <ul className="space-y-4 text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-law-gold shrink-0 mt-1" aria-hidden="true" />
              <a
                href={MAP_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-law-gold transition-colors"
              >
                {ADDRESS_ONE_LINE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-law-gold shrink-0 mt-1" aria-hidden="true" />
              <a href={'tel:+' + PHONE_E164} className="hover:text-law-gold transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-law-gold shrink-0 mt-1" aria-hidden="true" />
              <a href={'mailto:' + EMAIL} className="hover:text-law-gold transition-colors">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-white/10 my-9" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/60 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Pacheco · Espinoza &amp; Cía. Abogados. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-6">
          <a href="/terminos" className="text-white/60 hover:text-law-gold text-sm transition-colors">
            Términos y condiciones
          </a>
          <a href="/privacidad" className="text-white/60 hover:text-law-gold text-sm transition-colors">
            Política de privacidad
          </a>
        </div>
      </div>
    </div>

    <BackToTop />
  </footer>
);

export default Footer;

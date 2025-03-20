
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-law-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="lg:col-span-1">
            <div className="font-serif text-2xl font-bold mb-4">
              Pro<span className="text-law-gold">Causa</span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Somos tu equipo jurídico. Brindamos servicios legales de excelencia con un enfoque personalizado y comprometido con los intereses de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-law-gold hover:text-law-navy transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-law-gold hover:text-law-navy transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-law-gold hover:text-law-navy transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-law-gold hover:text-law-navy transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Servicios', 'Equipo', 'Testimonios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase() === 'inicio' ? 'home' : item.toLowerCase()}`}
                    className="text-white/70 hover:text-law-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                'Derecho Corporativo',
                'Derecho Laboral',
                'Derecho Inmobiliario',
                'Derecho Familiar',
                'Litigación Civil',
                'Mediación y Arbitraje'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-white/70 hover:text-law-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">
              Boletín Legal
            </h3>
            <p className="text-white/70 mb-4">
              Suscríbete para recibir noticias y actualizaciones legales.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-law-gold text-white placeholder:text-white/50"
              />
              <button 
                type="submit"
                className="bg-law-gold text-law-navy px-4 py-3 rounded font-medium w-full hover:bg-white transition-colors duration-300"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ProCausa. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-law-gold text-sm">Términos y Condiciones</a>
            <a href="#" className="text-white/70 hover:text-law-gold text-sm">Política de Privacidad</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-law-gold text-law-navy w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300 z-10"
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;

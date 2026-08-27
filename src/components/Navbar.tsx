import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL } from '@/lib/contact';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Cómo trabajamos', href: '#process' },
  { name: 'Preguntas', href: '#faq' },
  { name: 'Contacto', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquea el scroll del fondo mientras el menu movil esta abierto.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Sobre el hero (navy oscuro) el texto va blanco. Antes era text-law-navy
  // sobre fondo navy: el menu no se veia hasta hacer scroll.
  const onDark = !isScrolled && !mobileMenuOpen;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled || mobileMenuOpen ? 'glass-nav shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          {/* Marca: ProCausa principal, Pacheco Espinoza como respaldo */}
          <a href="#home" className="flex flex-col leading-none shrink-0">
            <span
              className={cn(
                'font-serif text-xl md:text-2xl font-bold transition-colors duration-300',
                onDark ? 'text-white' : 'text-law-navy'
              )}
            >
              Pro<span className={onDark ? 'text-law-gold' : 'text-law-teal'}>Causa</span>
            </span>
            <span
              className={cn(
                'text-[0.625rem] md:text-[0.6875rem] tracking-wide mt-0.5 transition-colors duration-300',
                onDark ? 'text-white/70' : 'text-law-dark-gray/70'
              )}
            >
              por Pacheco · Espinoza & Cía.
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  onDark ? 'text-white/90 hover:text-law-gold' : 'text-law-navy hover:text-law-teal'
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'px-5 py-2.5 rounded font-medium text-sm transition-all duration-300 inline-block',
                onDark
                  ? 'bg-law-gold text-law-navy hover:bg-white'
                  : 'bg-law-navy text-white hover:bg-law-teal'
              )}
            >
              Consulta gratuita
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={cn(
              'lg:hidden p-2 rounded transition-colors duration-300',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-teal',
              onDark ? 'text-white' : 'text-law-navy'
            )}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-[80vh] overflow-y-auto py-4' : 'max-h-0 overflow-hidden py-0'
        )}
      >
        <div className="container-custom flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-law-navy hover:text-law-teal py-3 border-b border-law-navy/5 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-law-navy text-white px-6 py-3 rounded text-center font-medium mt-4 hover:bg-law-teal transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Consulta gratuita por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

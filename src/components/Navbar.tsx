
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Equipo', href: '#team' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'glass-nav shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className="font-serif text-xl md:text-2xl font-bold text-law-navy">
                Estudio <span className="text-law-gold">Jurídico</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-law-navy hover:text-law-gold transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-law-navy text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all duration-300"
            >
              Consulta Gratuita
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-law-navy p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        )}
      >
        <div className="container-custom flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-law-navy hover:text-law-gold py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-law-navy text-white px-6 py-2 rounded text-center hover:bg-opacity-90 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Consulta Gratuita
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

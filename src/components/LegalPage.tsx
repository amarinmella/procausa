import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

interface LegalPageProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

/**
 * Layout compartido por /terminos y /privacidad.
 * Nota: los textos legales son un borrador de trabajo. Deben ser revisados y
 * aprobados por el estudio antes de publicar.
 */
const LegalPage = ({ title, updated, children }: LegalPageProps) => {
  useEffect(() => {
    document.title = `${title} | ProCausa`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-law-navy py-6">
        <div className="container-custom flex items-center justify-between gap-4">
          <a href="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold text-white">
              Pro<span className="text-law-gold">Causa</span>
            </span>
            <span className="text-[0.6875rem] text-white/70 mt-0.5">
              por Pacheco · Espinoza &amp; Cía.
            </span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-law-gold transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Volver al sitio
          </a>
        </div>
      </header>

      <main className="flex-1 section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h1 className="text-h2 font-serif font-bold text-law-navy mb-2">{title}</h1>
          <p className="text-law-dark-gray/60 text-sm mb-10">Última actualización: {updated}</p>

          <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-law-navy prose-a:text-law-teal">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;

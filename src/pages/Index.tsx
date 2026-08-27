import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import TeamSection from '@/components/TeamSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ADDRESS, EMAIL, PHONE_E164 } from '@/lib/contact';
import { services, faqs } from '@/lib/content';

const SITE_URL = 'https://procausa.cl';

/**
 * JSON-LD. Le da a Google la ficha del estudio (direccion, telefono, horario,
 * areas) y habilita rich results para las preguntas frecuentes.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'ProCausa',
      alternateName: 'Pacheco · Espinoza & Cía. Abogados',
      url: SITE_URL,
      email: EMAIL,
      telephone: `+${PHONE_E164}`,
      image: `${SITE_URL}/og-image.png`,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        addressCountry: ADDRESS.country
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '13:00'
        }
      ],
      areaServed: { '@type': 'Country', name: 'Chile' },
      knowsAbout: services.map((service) => service.title),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Áreas de práctica',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title, description: service.description }
        }))
      }
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer }
      }))
    }
  ]
};

const Index = () => {
  useEffect(() => {
    // El titulo y la descripcion ya vienen en index.html, asi que el
    // buscador y las previsualizaciones los ven sin esperar a React.
    // Aqui solo queda el salto a la seccion si la URL trae un hash.
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-4 focus:left-4 focus:bg-white focus:text-law-navy focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

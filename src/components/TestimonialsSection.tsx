
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "El equipo del Estudio Jurídico fue excepcional manejando mi caso de divorcio. Su enfoque comprensivo y profesional hizo que un proceso difícil fuera mucho más llevadero.",
      author: "Marcela Gómez",
      role: "Cliente de Derecho Familiar",
      rating: 5
    },
    {
      quote: "Como emprendedor, necesitaba asesoría legal para mi startup. El conocimiento en derecho corporativo y la atención personalizada que recibí superaron mis expectativas.",
      author: "Roberto Sánchez",
      role: "CEO de TechStart",
      rating: 5
    },
    {
      quote: "Después de mi accidente, estaba perdido sobre cómo proceder legalmente. Gracias a su experiencia en litigios, logramos un resultado justo y satisfactorio.",
      author: "Eduardo Martínez",
      role: "Cliente de Litigación Civil",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-law-navy text-white">
      <div 
        ref={sectionRef}
        className="container-custom opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-law-gold/30 text-law-gold rounded-full text-sm font-medium mb-2">
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-white/80 leading-relaxed">
            La confianza de nuestros clientes es nuestro mayor activo. Estos son algunos testimonios de personas y empresas que hemos representado.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-white/10">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-law-gold' : 'text-white/20'}`}
                          fill={i < testimonial.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl italic text-white/90 mb-6 font-serif">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-law-gold w-6' : 'bg-white/30'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

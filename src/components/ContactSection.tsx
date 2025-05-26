import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-law-gold" />,
      title: "Dirección",
      content: "Huerfanos 1294, Oficina 24, Santiago"
    },
    {
      icon: <Mail className="w-5 h-5 text-law-gold" />,
      title: "Email",
      content: "contacto@procausa.cl"
    },
    {
      icon: <Phone className="w-5 h-5 text-law-gold" />,
      title: "Teléfono",
      content: "+569 5309 5994"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div 
        ref={sectionRef}
        className="container-custom opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-law-gold/20 text-law-gold rounded-full text-sm font-medium mb-2">
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-6">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-law-dark-gray/80 leading-relaxed">
            ¿Tienes alguna consulta legal? Nuestro equipo de profesionales está listo para asistirte. Comunícate con nosotros y agenda tu consulta gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div 
            ref={formRef}
            className="bg-law-light-gray p-8 rounded-lg shadow-sm opacity-0 transition-opacity duration-1000"
          >
            <h3 className="text-2xl font-bold text-law-navy mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-law-dark-gray/80 mb-2 font-medium">
                    Nombre Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-law-navy/20 focus:border-law-navy"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-law-dark-gray/80 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-law-navy/20 focus:border-law-navy"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-law-dark-gray/80 mb-2 font-medium">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-law-navy/20 focus:border-law-navy"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-law-dark-gray/80 mb-2 font-medium">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-law-navy/20 focus:border-law-navy"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Consulta General">Consulta General</option>
                    <option value="Derecho Corporativo">Derecho Corporativo</option>
                    <option value="Derecho Laboral">Derecho Laboral</option>
                    <option value="Derecho Inmobiliario">Derecho Inmobiliario</option>
                    <option value="Derecho Familiar">Derecho Familiar</option>
                    <option value="Litigación Civil">Litigación Civil</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-law-dark-gray/80 mb-2 font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-law-navy/20 focus:border-law-navy"
                  placeholder="Describe brevemente tu consulta..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "bg-law-navy text-white px-6 py-3 rounded font-medium w-full flex items-center justify-center gap-2 transition-all duration-300",
                  isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:bg-law-navy/90"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact information and map */}
          <div 
            ref={mapRef}
            className="opacity-0 transition-opacity duration-1000"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-law-navy mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-law-navy">{item.title}</h4>
                      <p className="text-law-dark-gray/80">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-law-navy mb-4">Horario de Atención</h4>
                <div className="space-y-2 text-law-dark-gray/80">
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 1:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="rounded-lg h-[300px] overflow-hidden bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-law-dark-gray/60 flex flex-col items-center">
                  <MapPin className="w-12 h-12 mb-2" />
                  <span>Mapa de ubicación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

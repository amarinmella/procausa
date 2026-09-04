import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Mail, Phone, Send, AlertCircle, MessageCircle, Home, Video } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/lib/content';
import {
  COVERAGE_SHORT,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_URL
} from '@/lib/contact';

/**
 * Clave publica de Web3Forms. Es publica por diseno (viaja al cliente) y solo
 * sirve para enviar a la casilla configurada en la cuenta.
 * Se define en .env como VITE_WEB3FORMS_KEY.
 */
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const schema = z.object({
  name: z.string().trim().min(2, 'Escribe tu nombre completo').max(100),
  email: z.string().trim().email('Revisa el correo, no parece válido'),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\d\s-]{8,20}$/, 'Escribe un teléfono válido')
    .optional()
    .or(z.literal('')),
  subject: z.string().min(1, 'Elige el tema de tu consulta'),
  message: z.string().trim().min(20, 'Cuéntanos un poco más (mínimo 20 caracteres)').max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Necesitamos tu autorización para poder responderte' })
  })
});

type FormValues = z.infer<typeof schema>;

const ContactSection = () => {
  const reveal = useReveal();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', phone: '', subject: '', message: '' }
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);

    if (!WEB3FORMS_KEY) {
      // Antes esto era un setTimeout que mostraba exito sin enviar nada.
      // Fallar de forma visible es mejor que un falso exito.
      setSubmitError(
        'El formulario aún no está conectado. Escríbenos por WhatsApp y te respondemos de inmediato.'
      );
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'ProCausa · nueva consulta: ' + values.subject,
          from_name: 'Sitio ProCausa',
          name: values.name,
          email: values.email,
          phone: values.phone || 'No indicado',
          area: values.subject,
          message: values.message
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'No se pudo enviar');
      }

      toast.success('Mensaje enviado. Te respondemos dentro de un día hábil.');
      reset();
    } catch {
      setSubmitError(
        'No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo otra vez, o escríbenos por WhatsApp.'
      );
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full px-4 py-3 rounded border bg-white transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-law-teal/30 focus:border-law-teal',
      hasError ? 'border-red-500' : 'border-gray-300'
    );

  const contactInfo: {
    icon: typeof MapPin;
    title: string;
    content: string;
    href: string | null;
  }[] = [
    { icon: MapPin, title: 'Dónde atendemos', content: COVERAGE_SHORT, href: null },
    { icon: Mail, title: 'Email', content: EMAIL, href: 'mailto:' + EMAIL },
    { icon: Phone, title: 'Teléfono', content: PHONE_DISPLAY, href: 'tel:+' + PHONE_E164 }
  ];

  /* Reemplaza al mapa: sin oficina, lo util no es una ubicacion sino saber
     como se concreta la reunion. */
  const meetingModes = [
    {
      icon: Home,
      title: 'En tu casa u oficina',
      description: 'Vamos donde estés dentro de Santiago y la Región Metropolitana, el día y la hora que te acomoden.'
    },
    {
      icon: Video,
      title: 'Por videollamada',
      description: 'Si estás en regiones o prefieres resolverlo sin reunión presencial.'
    },
    {
      icon: MessageCircle,
      title: 'Por WhatsApp',
      description: 'Para la consulta inicial y para coordinar cuándo y dónde nos juntamos.'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div ref={reveal} className="reveal mb-14">
          <SectionHeading
            eyebrow="Contacto"
            title="Cuéntanos tu caso"
            description="Respondemos dentro de un día hábil. Si necesitas algo urgente, WhatsApp es más rápido."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div ref={reveal} className="reveal bg-law-light-gray p-7 sm:p-9 rounded-lg">
            <h3 className="text-h3 font-serif font-bold text-law-navy mb-6">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-law-dark-gray mb-2 font-medium">
                    Nombre completo <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputClass(!!errors.name)}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-600 text-sm mt-1.5">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-law-dark-gray mb-2 font-medium">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClass(!!errors.email)}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-600 text-sm mt-1.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-law-dark-gray mb-2 font-medium">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+56 9 1234 5678"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={inputClass(!!errors.phone)}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-600 text-sm mt-1.5">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-law-dark-gray mb-2 font-medium">
                    Tema <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="subject"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={inputClass(!!errors.subject)}
                    {...register('subject')}
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="Consulta general">Consulta general</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="text-red-600 text-sm mt-1.5">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-law-dark-gray mb-2 font-medium">
                  Mensaje <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Cuéntanos qué pasó, en tus palabras. No necesitas usar términos legales."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={inputClass(!!errors.message)}
                  {...register('message')}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-600 text-sm mt-1.5">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-1 w-4 h-4 shrink-0 accent-law-teal"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    {...register('consent')}
                  />
                  <span className="text-sm text-law-dark-gray/85">
                    Autorizo a ProCausa a usar mis datos para responder esta consulta, según la{' '}
                    <a href="/privacidad" className="text-law-teal underline hover:text-law-teal-dark">
                      Política de Privacidad
                    </a>
                    . <span className="text-red-600">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="text-red-600 text-sm mt-1.5">
                    {errors.consent.message}
                  </p>
                )}
              </div>

              {/* Estado de error real. Antes no existia: si algo fallaba, el
                  usuario veia un exito falso y nadie recibia el mensaje. */}
              {submitError && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded border border-red-300 bg-red-50 p-4"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-sm text-red-800">
                    <p>{submitError}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold underline mt-2"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      Ir a WhatsApp
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'bg-law-navy text-white px-6 py-3.5 rounded font-semibold w-full flex items-center justify-center gap-2 transition-colors duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-teal focus-visible:ring-offset-2',
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-law-teal'
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Enviando…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          <div ref={reveal} className="reveal">
            <div className="bg-white p-7 sm:p-9 rounded-lg shadow-sm border border-law-navy/10 mb-7">
              <h3 className="text-h3 font-serif font-bold text-law-navy mb-6">
                Información de contacto
              </h3>

              <ul className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const isExternal = item.href?.startsWith('http') ?? false;
                  return (
                    <li key={item.title} className="flex items-start gap-4">
                      <Icon className="w-5 h-5 text-law-teal shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h4 className="font-semibold text-law-navy">{item.title}</h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            className="text-law-dark-gray/85 hover:text-law-teal transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-law-dark-gray/85">{item.content}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 pt-7 border-t border-law-navy/10">
                <h4 className="font-semibold text-law-navy mb-3">Horario de atención</h4>
                <dl className="space-y-1.5 text-law-dark-gray/85">
                  {HOURS.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4">
                      <dt>{h.label}</dt>
                      <dd className="font-medium text-law-navy">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded border-2 border-law-teal px-6 py-3 font-semibold text-law-teal hover:bg-law-teal hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-teal focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Prefiero escribir por WhatsApp
              </a>
            </div>

            {/*
              Aqui habia un mapa de Google a una oficina que el estudio no
              tiene. Sin direccion, al visitante no le sirve una ubicacion:
              le sirve saber que el abogado se desplaza hasta el.
            */}
            <div className="bg-law-navy text-white rounded-lg p-7 sm:p-9">
              <h3 className="text-h3 font-serif font-bold mb-2">Vamos donde estés</h3>
              <p className="text-white/75 mb-7">
                No necesitas ir a ninguna oficina ni perder media mañana en el centro.
              </p>

              <ul className="space-y-5">
                {meetingModes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <li key={mode.title} className="flex items-start gap-4">
                      <Icon className="w-5 h-5 text-law-gold shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h4 className="font-semibold">{mode.title}</h4>
                        <p className="text-white/70 text-sm mt-0.5">{mode.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

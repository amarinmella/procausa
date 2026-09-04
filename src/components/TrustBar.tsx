import React from 'react';
import { Award, Car, MessageCircle, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { COVERAGE_SHORT } from '@/lib/contact';

const items = [
  { icon: Award, value: '+30 años', label: 'de ejercicio profesional' },
  { icon: MessageCircle, value: 'Sin compromiso', label: 'la primera conversación' },
  { icon: Car, value: 'Vamos donde estés', label: COVERAGE_SHORT },
  { icon: ShieldCheck, value: 'Atención directa', label: 'con el abogado a cargo' }
];

const TrustBar = () => {
  const reveal = useReveal();

  return (
    <section aria-label="Datos del estudio" className="bg-law-navy border-b border-white/10">
      <div className="container-custom py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                ref={reveal}
                className="reveal flex items-start gap-3"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Icon className="w-5 h-5 text-law-gold shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-white font-semibold leading-tight">{item.value}</p>
                  <p className="text-white/65 text-sm mt-0.5">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p ref={reveal} className="reveal text-center text-white/55 text-sm mt-9 pt-7 border-t border-white/10">
          Un servicio de{' '}
          <span className="text-law-teal-light font-medium">
            Pacheco · Espinoza &amp; Cía. Abogados
          </span>
        </p>
      </div>
    </section>
  );
};

export default TrustBar;

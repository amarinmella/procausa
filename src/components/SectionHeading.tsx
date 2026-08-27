import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Sobre fondo oscuro invierte los colores del bloque. */
  onDark?: boolean;
  align?: 'center' | 'left';
  className?: string;
}

/**
 * Encabezado de seccion.
 *
 * Antes cada seccion repetia el mismo bloque a mano, con la clase
 * `bg-law-gold/20 text-law-gold` en el badge: dorado sobre blanco da 2.37:1
 * cuando WCAG AA pide 4.5:1. Centralizarlo arregla las 6 instancias de una
 * vez y evita que el error vuelva a colarse.
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  onDark = false,
  align = 'center',
  className
}: SectionHeadingProps) => (
  <div
    className={cn(
      align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl',
      className
    )}
  >
    <p
      className={cn(
        'text-eyebrow uppercase mb-3',
        onDark ? 'text-law-gold' : 'text-law-teal'
      )}
    >
      {eyebrow}
    </p>
    <h2
      className={cn(
        'text-h2 font-serif font-bold mb-5',
        onDark ? 'text-white' : 'text-law-navy'
      )}
    >
      {title}
    </h2>
    {description && (
      <p className={cn('text-lead', onDark ? 'text-white/80' : 'text-law-dark-gray/85')}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;

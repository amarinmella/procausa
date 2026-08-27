import { Briefcase, Home, Users, FileText, Handshake, Scale, type LucideIcon } from 'lucide-react';

/**
 * Contenido de las secciones, separado de los componentes.
 *
 * Va aparte porque exportar datos desde un archivo de componente rompe el
 * Fast Refresh de Vite (obliga a recargar la pagina entera en cada edicion),
 * y ademas estos datos los consumen varios componentes a la vez
 * (ServicesSection, ContactSection, Footer, el JSON-LD de Index).
 */

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Briefcase,
    title: 'Derecho Corporativo',
    description:
      'Constitución de sociedades, contratos comerciales, fusiones y adquisiciones, y cumplimiento normativo.'
  },
  {
    icon: FileText,
    title: 'Derecho Laboral',
    description:
      'Despidos, negociación colectiva, finiquitos y asesoría preventiva para empleadores y trabajadores.'
  },
  {
    icon: Home,
    title: 'Derecho Inmobiliario',
    description:
      'Compraventa, arriendos, estudios de título y conflictos de propiedad o copropiedad.'
  },
  {
    icon: Users,
    title: 'Derecho Familiar',
    description:
      'Divorcios, cuidado personal, relación directa y regular, pensión de alimentos y herencias.'
  },
  {
    icon: Scale,
    title: 'Litigación Civil',
    description:
      'Representación en juicios civiles, cobro de deudas, indemnizaciones y responsabilidad contractual.'
  },
  {
    icon: Handshake,
    title: 'Mediación y Arbitraje',
    description:
      'Resolución de conflictos fuera de tribunales, más rápida y de menor costo que un juicio.'
  }
];

/*
  PENDIENTE DE CONFIRMACION DEL ESTUDIO antes de publicar: si la primera
  consulta es efectivamente sin costo y si atienden regiones.
*/
export const faqs = [
  {
    question: '¿La primera consulta tiene costo?',
    answer:
      'No. La primera conversación para evaluar tu caso es sin costo y sin compromiso. Recién si decides avanzar te entregamos un presupuesto por escrito.'
  },
  {
    question: '¿Cuánto cuesta llevar un caso?',
    answer:
      'Depende del área y la complejidad. Puede ser un honorario fijo, por etapas o mixto. Lo importante: sabes el monto y los plazos antes de comprometerte a nada, por escrito.'
  },
  {
    question: '¿Atienden fuera de Santiago?',
    answer:
      'Sí. La atención se coordina por videollamada y WhatsApp, y podemos representarte en tribunales de otras regiones. Nuestra oficina está en Huérfanos 1294, Santiago, si prefieres reunirte presencialmente.'
  },
  {
    question: '¿Cuánto demora un caso?',
    answer:
      'Varía mucho: una mediación puede resolverse en semanas y un juicio civil tomar más de un año. En la evaluación inicial te damos un rango realista para tu situación específica, no una promesa optimista.'
  },
  {
    question: '¿Necesito tener documentos ordenados para consultar?',
    answer:
      'No. Escríbenos con lo que tengas, aunque sea solo el relato de lo que pasó. Si hacen falta antecedentes específicos, te decimos cuáles buscar.'
  },
  {
    question: '¿Con quién voy a hablar?',
    answer:
      'Con un abogado del estudio, no con un ejecutivo comercial. Quien evalúa tu caso es quien lo lleva si decides avanzar.'
  }
];

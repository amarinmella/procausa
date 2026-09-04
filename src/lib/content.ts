import { Briefcase, Building2, FileText, Gavel, Home, Users, type LucideIcon } from 'lucide-react';

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

/*
  Areas del ESTUDIO, no del socio. Alberto Pacheco cubre las cinco primeras;
  familia la atienden otros abogados de Pacheco Espinoza. Esa distincion es
  la razon de que TeamSection liste aparte las especialidades de Alberto:
  aqui se ofrece la cobertura completa, alli su trayectoria personal.
*/
export const services: Service[] = [
  {
    icon: FileText,
    title: 'Derecho Civil y Comercial',
    description:
      'Contratos, obligaciones, responsabilidad civil y conflictos patrimoniales entre empresas y particulares.'
  },
  {
    icon: Gavel,
    title: 'Litigación y Resolución de Conflictos',
    description:
      'Representación en juicios civiles y comerciales, procedimientos ejecutivos y negociación de controversias antes de llegar a tribunales.'
  },
  {
    icon: Home,
    title: 'Derecho Inmobiliario',
    description:
      'Compraventas, estudios de títulos, regularización de inmuebles, subdivisiones y servidumbres.'
  },
  {
    icon: Building2,
    title: 'Desarrollo de Proyectos Inmobiliarios',
    description:
      'Acompañamiento jurídico desde la adquisición y unificación de terrenos hasta el desarrollo y la comercialización del proyecto.'
  },
  {
    icon: Briefcase,
    title: 'Asesoría Jurídica Empresarial',
    description:
      'Apoyo permanente a empresas y empresarios en materias contractuales, comerciales, laborales y administrativas.'
  },
  {
    icon: Users,
    title: 'Derecho Familiar',
    description:
      'Divorcios, cuidado personal, pensión de alimentos y herencias, con abogados del estudio dedicados al área.'
  }
];

/*
  Perfil del socio. Vive aqui y no dentro de TeamSection porque el JSON-LD de
  Index.tsx tambien lo consume: tener el nombre y las areas escritos en dos
  lugares es justo el tipo de duplicacion que ya nos costo caro con el telefono.

  Ojo con `expertise`: son las areas de Alberto y NO coinciden con `services`,
  que lista la cobertura del estudio (familia incluida). La diferencia es
  deliberada; no "corregir" una con la otra.
*/
export const partner = {
  name: 'Alberto Pacheco',
  role: 'Socio fundador',
  title: 'Abogado · Asesoría empresarial, litigación e inmobiliario',
  bio: [
    'Abogado con más de 30 años de ejercicio profesional, dedicado a la asesoría jurídica de empresas, empresarios, comerciantes y clientes particulares.',
    'Su práctica se concentra en la litigación civil y comercial —juicios contractuales, ejecutivos, inmobiliarios y patrimoniales— y en el acompañamiento de proyectos inmobiliarios desde la adquisición y unificación de terrenos hasta su desarrollo y comercialización.',
    'Trabaja con atención directa y personalizada, buscando comprender no solo el problema jurídico, sino también los intereses económicos, patrimoniales y comerciales que hay detrás de cada asunto.'
  ],
  expertise: [
    'Derecho Civil y Comercial',
    'Litigación y Resolución de Conflictos',
    'Derecho Inmobiliario',
    'Desarrollo de Proyectos Inmobiliarios',
    'Asesoría Jurídica Empresarial',
    'Negociación y Estrategia Legal'
  ]
} as const;

/*
  PENDIENTE DE CONFIRMACION DEL ESTUDIO antes de publicar: el alcance real
  del desplazamiento a domicilio y si hay recargo por traslado (hoy no se
  promete ninguno, pero tampoco se descarta).
*/
export const faqs = [
  {
    question: '¿Cómo funciona la primera consulta?',
    answer:
      'Nos cuentas tu caso por WhatsApp o por el formulario y te decimos con franqueza si hay algo que hacer y qué alternativas tienes. No hay compromiso de contratar: si decides avanzar, recién ahí acordamos honorarios por escrito.'
  },
  {
    question: '¿Tienen oficina a la que pueda ir?',
    answer:
      'No trabajamos con oficina abierta al público: preferimos ir nosotros donde estés. Dentro de Santiago y la Región Metropolitana nos reunimos en tu casa, tu oficina o el lugar que te acomode. Si prefieres no tener reunión presencial, lo vemos por videollamada.'
  },
  {
    question: '¿Cuánto cuesta llevar un caso?',
    answer:
      'Depende del área y la complejidad. Puede ser un honorario fijo, por etapas o mixto. Lo importante: sabes el monto y los plazos antes de comprometerte a nada, por escrito.'
  },
  {
    question: '¿Atienden fuera de Santiago?',
    answer:
      'Sí. En Santiago y la Región Metropolitana vamos a tu casa u oficina. Si estás en regiones, la atención se coordina por videollamada y WhatsApp, y podemos representarte en tribunales de otras regiones.'
  },
  {
    question: '¿Asesoran proyectos inmobiliarios desde el inicio?',
    answer:
      'Sí, es una de las áreas con más trayectoria del estudio. Participamos desde la adquisición y unificación de terrenos, el estudio de títulos y la estructuración jurídica del proyecto, hasta su desarrollo y posterior comercialización.'
  },
  {
    question: '¿Cuánto demora un caso?',
    answer:
      'Varía mucho. Un acuerdo negociado directamente entre las partes puede cerrarse en semanas; un juicio civil o ejecutivo puede tomar más de un año. En la evaluación inicial te damos un rango realista para tu situación específica, no una promesa optimista.'
  },
  {
    question: '¿Necesito tener documentos ordenados para consultar?',
    answer:
      'No. Escríbenos con lo que tengas, aunque sea solo el relato de lo que pasó. Si hacen falta antecedentes específicos, te decimos cuáles buscar.'
  },
  {
    question: '¿Con quién voy a hablar?',
    answer:
      'Con un abogado del estudio, no con un ejecutivo comercial. La atención es directa y personalizada: quien evalúa tu caso es quien lo lleva si decides avanzar.'
  }
];

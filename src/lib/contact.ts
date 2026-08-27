/**
 * Datos de contacto en un solo lugar.
 * Antes el telefono y la direccion estaban escritos a mano dentro de
 * ContactSection y Footer, con riesgo de quedar desincronizados.
 */

export const PHONE_DISPLAY = '+56 9 5309 5994';
export const PHONE_E164 = '56953095994';
export const EMAIL = 'contacto@procausa.cl';

export const ADDRESS = {
  street: 'Huérfanos 1294, Oficina 24',
  city: 'Santiago',
  region: 'Región Metropolitana',
  country: 'CL'
} as const;

export const ADDRESS_ONE_LINE = `${ADDRESS.street}, ${ADDRESS.city}`;

export const HOURS = [
  { label: 'Lunes a viernes', value: '9:00 – 18:00' },
  { label: 'Sábados', value: '9:00 – 13:00' },
  { label: 'Domingos', value: 'Cerrado' }
] as const;

/** Google Maps embed. `loading="lazy"` en el iframe que lo consume. */
export const MAP_EMBED_URL =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Huérfanos 1294, Santiago, Chile') +
  '&output=embed';

export const MAP_LINK_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Huérfanos 1294, Santiago, Chile');

const WHATSAPP_BASE = `https://wa.me/${PHONE_E164}`;

/**
 * Enlace de WhatsApp con mensaje pre-escrito.
 * Pasar el area de practica hace que el mensaje llegue ya contextualizado,
 * lo que ahorra el primer ida y vuelta.
 */
export function whatsappUrl(area?: string): string {
  const message = area
    ? `Hola, vengo del sitio de ProCausa. Necesito asesoría en ${area}.`
    : 'Hola, vengo del sitio de ProCausa. Me gustaría agendar una consulta.';

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();

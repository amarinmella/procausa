/**
 * Datos de contacto en un solo lugar.
 * Antes el telefono y la direccion estaban escritos a mano dentro de
 * ContactSection y Footer, con riesgo de quedar desincronizados.
 */

export const PHONE_DISPLAY = '+56 9 5309 5994';
export const PHONE_E164 = '56953095994';
export const EMAIL = 'contacto@procausa.cl';

/*
  ProCausa no tiene oficina: la atencion es a domicilio en Santiago y la
  Region Metropolitana, y por videollamada para el resto del pais.

  Por eso aqui NO hay `street` ni enlaces a Google Maps. Publicar una
  direccion inexistente no es solo un texto equivocado: en el JSON-LD le
  pide a Google que cree una ficha de negocio en un lugar donde no hay
  nadie, y eso es dificil de revertir despues.

  Si algun dia arriendan oficina, agregar `street` aqui y volver a poner el
  mapa en ContactSection.
*/
export const SERVICE_AREA = {
  city: 'Santiago',
  region: 'Región Metropolitana',
  country: 'CL'
} as const;

/** Version corta para tarjetas y listados. */
export const COVERAGE_SHORT = 'Santiago y Región Metropolitana';

/** Version larga para parrafos y respuestas. */
export const COVERAGE_LONG =
  'Nos reunimos en tu casa u oficina dentro de Santiago y la Región Metropolitana. Para el resto del país atendemos por videollamada.';

export const HOURS = [
  { label: 'Lunes a viernes', value: '9:00 – 18:00' },
  { label: 'Sábados', value: '9:00 – 13:00' },
  { label: 'Domingos', value: 'Cerrado' }
] as const;

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

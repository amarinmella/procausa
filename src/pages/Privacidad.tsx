import React from 'react';
import LegalPage from '@/components/LegalPage';
import { EMAIL } from '@/lib/contact';

/*
  BORRADOR. Debe ser revisado y aprobado por el estudio antes de publicar,
  en particular los plazos de conservacion y la referencia normativa.
*/
const Privacidad = () => (
  <LegalPage title="Política de Privacidad" updated="agosto de 2026">
    <p>
      Esta política explica qué datos personales recogemos a través del sitio de ProCausa, para
      qué los usamos y qué derechos tienes sobre ellos.
    </p>

    <h2>Quién trata tus datos</h2>
    <p>
      El responsable del tratamiento es <strong>Pacheco · Espinoza &amp; Cía. Abogados</strong>.
      La atención se presta a domicilio y de forma remota, sin oficina abierta al público, por lo
      que el canal de contacto para ejercer tus derechos es el correo{' '}
      <a href={'mailto:' + EMAIL}>{EMAIL}</a>.
    </p>

    <h2>Qué datos recogemos</h2>
    <p>
      Solo los que nos entregas voluntariamente en el formulario de contacto: nombre, correo
      electrónico, teléfono (opcional), el área de tu consulta y la descripción de tu caso.
    </p>
    <p>
      Si nos escribes por WhatsApp, el tratamiento de esos mensajes se rige además por las
      condiciones de esa plataforma, que es un servicio de terceros ajeno a nosotros.
    </p>

    <h2>Para qué los usamos</h2>
    <p>
      Únicamente para responder tu consulta y, si decides avanzar, para gestionar la relación
      profesional. No vendemos ni cedemos tus datos a terceros con fines comerciales, ni los
      usamos para publicidad.
    </p>

    <h2>Confidencialidad</h2>
    <p>
      La información que compartes sobre tu caso está protegida por el secreto profesional que
      rige el ejercicio de la abogacía, incluso si finalmente no llegamos a trabajar juntos.
    </p>

    <h2>Cuánto tiempo los conservamos</h2>
    <p>
      Las consultas que no derivan en un encargo profesional se eliminan una vez cerrada la
      conversación. Si se inicia una relación profesional, los antecedentes se conservan durante
      el plazo que exige la normativa aplicable al ejercicio de la profesión.
    </p>

    <h2>Tus derechos</h2>
    <p>
      Puedes solicitar en cualquier momento el acceso, rectificación, eliminación u oposición al
      tratamiento de tus datos escribiendo a <a href={'mailto:' + EMAIL}>{EMAIL}</a>. Responderemos
      dentro de los plazos que fija la ley.
    </p>

    <h2>Cookies</h2>
    <p>
      Este sitio no usa cookies de seguimiento ni de publicidad. El mapa de la sección de contacto
      es un servicio incrustado de Google Maps, que puede fijar sus propias cookies conforme a las
      políticas de ese proveedor.
    </p>

    <h2>Cambios</h2>
    <p>
      Si modificamos esta política, actualizaremos la fecha indicada al inicio de esta página.
    </p>
  </LegalPage>
);

export default Privacidad;

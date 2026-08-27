import React from 'react';
import LegalPage from '@/components/LegalPage';
import { EMAIL } from '@/lib/contact';

/*
  BORRADOR. Debe ser revisado y aprobado por el estudio antes de publicar.
*/
const Terminos = () => (
  <LegalPage title="Términos y Condiciones" updated="agosto de 2026">
    <p>
      Estos términos regulan el uso del sitio de ProCausa, el canal de contacto del estudio
      Pacheco · Espinoza &amp; Cía. Abogados.
    </p>

    <h2>El contenido no es asesoría legal</h2>
    <p>
      La información publicada en este sitio tiene carácter general e informativo. No constituye
      asesoría jurídica para un caso concreto y no debe usarse como base para tomar decisiones
      legales sin consultar antes con un abogado.
    </p>

    <h2>El contacto no crea una relación profesional</h2>
    <p>
      Escribirnos por el formulario o por WhatsApp no genera por sí solo una relación
      abogado-cliente. Esa relación se constituye únicamente cuando ambas partes acuerdan por
      escrito el encargo profesional y sus condiciones.
    </p>
    <p>
      Por lo mismo, te sugerimos no enviar información sensible o antecedentes reservados en el
      primer mensaje. Basta con describir tu situación en términos generales.
    </p>

    <h2>Primera consulta</h2>
    <p>
      La evaluación inicial de tu caso es sin costo y no obliga a ninguna de las partes a
      continuar. Cualquier servicio posterior se presupuesta y acuerda por escrito antes de
      comenzar.
    </p>

    <h2>Resultados</h2>
    <p>
      Ningún contenido de este sitio debe interpretarse como una garantía de resultado. Los plazos
      y escenarios que indicamos son estimaciones basadas en experiencia previa y pueden variar
      según las circunstancias de cada caso y las decisiones de los tribunales.
    </p>

    <h2>Propiedad intelectual</h2>
    <p>
      Los textos, marcas y elementos gráficos de este sitio pertenecen a sus titulares y no pueden
      reproducirse sin autorización previa.
    </p>

    <h2>Enlaces y servicios de terceros</h2>
    <p>
      El sitio incorpora servicios externos, como el mapa de Google y el enlace a WhatsApp. No
      controlamos ni respondemos por el funcionamiento ni por las políticas de esos proveedores.
    </p>

    <h2>Contacto</h2>
    <p>
      Ante cualquier duda sobre estos términos, escríbenos a{' '}
      <a href={'mailto:' + EMAIL}>{EMAIL}</a>.
    </p>
  </LegalPage>
);

export default Terminos;

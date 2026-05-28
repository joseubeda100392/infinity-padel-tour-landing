import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Infinity Padel Tour',
  description: 'Política de privacidad y tratamiento de datos de Infinity Padel Tour BY LÕK.',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#05080F] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl">

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-gray-600 transition-colors hover:text-brand-500"
        >
          ← Volver
        </Link>

        <h1 className="mb-2 font-display text-4xl uppercase tracking-wide text-white">
          Política de Privacidad
        </h1>
        <p className="mb-10 text-xs text-gray-600">Última actualización: mayo 2026</p>

        <div className="space-y-8 font-sans text-sm leading-relaxed text-gray-400">

          <section>
            <h2 className="mb-3 text-base font-bold uppercase tracking-widest text-white">
              1. Responsable del tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web es
              <strong className="text-white"> Infinity Padel Tour BY LÕK</strong>, con correo electrónico de
              contacto: <a href="mailto:joseubeda10@gmail.com" className="text-brand-500 hover:underline">joseubeda10@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-bold uppercase tracking-widest text-white">
              2. Datos que recogemos
            </h2>
            <p>A través del formulario de registro anticipado recogemos los siguientes datos:</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-500">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Club de pádel</li>
              <li>Número de teléfono</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-base font-bold uppercase tracking-widest text-white">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Los datos facilitados se utilizan exclusivamente para:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-500">
              <li>Informarte sobre la apertura del acceso oficial a Infinity Padel Tour.</li>
              <li>Gestionar el descuento del 10% en tu inscripción como usuario anticipado.</li>
              <li>Enviarte comunicaciones relacionadas con la liga (novedades, fechas, información relevante).</li>
            </ul>
            <p className="mt-3">No utilizaremos tus datos para ninguna otra finalidad ni los cederemos a terceros sin tu consentimiento.</p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-bold uppercase tracking-widest text-white">
              4. Base legal
            </h2>
            <p>
              La base legal para el tratamiento es el consentimiento expreso otorgado al enviar el formulario
              de registro (art. 6.1.a del RGPD).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-bold uppercase tracking-widest text-white">
              5. Conservación de los datos
            </h2>
            <p>
              Los datos se conservarán mientras seas usuario registrado y no solicites su eliminación, o
              hasta que se cancele el proyecto Infinity Padel Tour. En ningún caso se mantendrán más tiempo
              del estrictamente necesario.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-bold uppercase tracking-widest text-white">
              6. Tus derechos
            </h2>
            <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-gray-500">
              <li><strong className="text-gray-300">Acceso</strong>: conocer qué datos tenemos sobre ti.</li>
              <li><strong className="text-gray-300">Rectificación</strong>: corregir datos inexactos.</li>
              <li><strong className="text-gray-300">Supresión</strong>: eliminar tus datos.</li>
              <li><strong className="text-gray-300">Oposición</strong>: oponerte al tratamiento.</li>
              <li><strong className="text-gray-300">Portabilidad</strong>: recibir tus datos en formato estructurado.</li>
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, escríbenos a{' '}
              <a href="mailto:joseubeda10@gmail.com" className="text-brand-500 hover:underline">
                joseubeda10@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-bold uppercase tracking-widest text-white">
              7. Cookies
            </h2>
            <p>
              Este sitio web no utiliza cookies de seguimiento ni de publicidad. Únicamente se pueden usar
              cookies técnicas estrictamente necesarias para el funcionamiento de la página.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-bold uppercase tracking-widest text-white">
              8. Reclamaciones
            </h2>
            <p>
              Si consideras que el tratamiento de tus datos no es conforme a la normativa, puedes presentar
              una reclamación ante la{' '}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:underline"
              >
                Agencia Española de Protección de Datos (AEPD)
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

import { RevealOnScroll } from '@/components/shared/reveal-on-scroll'

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/6 blur-[150px]" />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6 text-center">
        <RevealOnScroll>
          <p className="mb-6 font-condensed text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
            El cambio empieza aquí
          </p>

          <h2 className="font-display uppercase leading-[0.9] tracking-wide text-white"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            <span className="block">No es una liga más.</span>
            <span className="block text-white/20">Es el comienzo</span>
            <span className="block text-white/20">de algo nuevo.</span>
          </h2>

          <div className="mx-auto mt-10 h-[3px] w-16 bg-brand-500" />

          <p className="mx-auto mt-8 max-w-md font-condensed text-sm uppercase tracking-[0.15em] text-gray-600">
            Hemos diseñado cada detalle para que la experiencia sea diferente desde el primer día.
            Muy pronto sabrás por qué.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

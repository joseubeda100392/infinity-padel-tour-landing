import { RevealOnScroll } from '@/components/shared/reveal-on-scroll'

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-[#05080F] py-28 md:py-36">
      {/* Subtle center glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center">
        <RevealOnScroll>
          {/* Eyebrow */}
          <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-500">
            El cambio empieza aquí
          </p>

          {/* Main statement */}
          <p className="text-[clamp(2.2rem,6vw,5rem)] font-black leading-[1.0] tracking-[-0.03em]">
            <span className="text-white">No es una liga más.</span>
          </p>
          <p className="mt-2 text-[clamp(2.2rem,6vw,5rem)] font-black leading-[1.0] tracking-[-0.03em] text-outline-white">
            Es el comienzo de algo nuevo.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

          {/* Supporting copy */}
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-gray-600">
            Hemos diseñado cada detalle para que la experiencia sea diferente desde el primer día.
            Muy pronto sabrás por qué.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

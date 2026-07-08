import { ArrowRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/shared/reveal-on-scroll'
import { corporate } from '@/content/corporate'

const TOUR_URL = process.env.NEXT_PUBLIC_TOUR_URL ?? '#'

export function TourHook() {
  const { tourHook } = corporate

  return (
    <section className="relative overflow-hidden bg-[#0D1117] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bandeja/20 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bandeja/[0.04] blur-[130px]" />

      <div className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <RevealOnScroll>
          <span className="mb-5 block font-label text-[11px] uppercase tracking-[0.3em] text-bandeja">
            {tourHook.eyebrow}
          </span>
          <h2
            className="mb-6 font-display uppercase text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 0.9 }}
          >
            {tourHook.headline}
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
            {tourHook.description}
          </p>
          <a
            href={TOUR_URL}
            className="group inline-flex items-center gap-2.5 border border-bandeja/40 bg-bandeja/[0.07] px-8 py-4 font-label text-[12px] uppercase tracking-[0.2em] text-bandeja transition-all duration-200 hover:border-bandeja/70 hover:bg-bandeja/[0.12]"
          >
            {tourHook.cta}
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  )
}

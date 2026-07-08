import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/shared/reveal-on-scroll'
import { corporate } from '@/content/corporate'

export function About() {
  const { about } = corporate

  return (
    <section className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-vibora/[0.04] blur-[160px]" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          <RevealOnScroll>
            <span className="mb-4 block font-label text-[11px] uppercase tracking-[0.3em] text-vibora">
              {about.eyebrow}
            </span>
            <h2
              className="mb-6 font-display text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1 }}
            >
              {about.headline}
            </h2>
            <p className="text-sm leading-relaxed text-white/55 sm:text-base">
              {about.description}
            </p>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-3 gap-6" staggerDelay={0.1}>
            {about.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div
                    className="font-display text-vibora"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-2 font-label text-[10px] uppercase tracking-[0.15em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  )
}

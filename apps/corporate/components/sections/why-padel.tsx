import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/shared/reveal-on-scroll'
import { corporate } from '@/content/corporate'

export function WhyPadel() {
  const { whyPadel } = corporate

  return (
    <section className="relative overflow-hidden bg-[#0D1117] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibora/15 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">

        <RevealOnScroll className="mb-14 max-w-3xl">
          <span className="mb-4 block font-label text-[11px] uppercase tracking-[0.3em] text-vibora">
            {whyPadel.eyebrow}
          </span>
          <h2
            className="mb-4 font-display text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700 }}
          >
            {whyPadel.headline}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
            {whyPadel.description}
          </p>
        </RevealOnScroll>

        <StaggerContainer
          className="grid grid-cols-2 gap-3 md:grid-cols-4"
          staggerDelay={0.08}
        >
          {whyPadel.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div
                className="group relative overflow-hidden"
                style={{ minHeight: '220px' }}
              >
                <img
                  src={stat.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#05080F]/65 transition-opacity duration-300 group-hover:bg-[#05080F]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/90 via-transparent to-transparent" />

                <div
                  className="relative z-10 flex h-full flex-col justify-end p-6"
                  style={{ minHeight: '220px' }}
                >
                  <div
                    className="font-display text-vibora"
                    style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-2 font-label text-[10px] uppercase tracking-[0.15em] text-white/50">
                    {stat.label}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

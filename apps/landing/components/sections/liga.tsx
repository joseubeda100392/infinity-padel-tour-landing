import { Trophy, Users, Star } from 'lucide-react'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/shared/reveal-on-scroll'
import { landing } from '@/content/landing'

const ICON_MAP = { Trophy, Users, Star } as const
type IconKey = keyof typeof ICON_MAP

export function Liga() {
  const { liga } = landing

  return (
    <section id="liga" className="relative overflow-hidden bg-[#0D1117] py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibora/30 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <RevealOnScroll className="mb-14 max-w-3xl">
          <span className="mb-4 block font-anek-label text-[11px] uppercase tracking-[0.3em] text-vibora">
            {liga.eyebrow}
          </span>
          <h2
            className="mb-6 font-display text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800 }}
          >
            {liga.headline}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
            {liga.description}
          </p>
        </RevealOnScroll>

        {/* Pillars — photo cards */}
        <StaggerContainer className="mb-20 grid grid-cols-1 gap-3 md:grid-cols-3" staggerDelay={0.1}>
          {liga.pillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.icon as IconKey] ?? Trophy
            return (
              <StaggerItem key={pillar.title}>
                <div
                  className="group relative overflow-hidden"
                  style={{ minHeight: '320px' }}
                >
                  {/* Photo */}
                  {pillar.image && (
                    <>
                      <img
                        src={pillar.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#0D1117]/65 transition-opacity duration-300 group-hover:bg-[#0D1117]/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/95 via-[#0D1117]/20 to-transparent" />
                    </>
                  )}

                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-vibora opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-7" style={{ minHeight: '320px' }}>
                    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center border border-vibora/40 bg-vibora/10">
                      <Icon size={18} className="text-vibora" />
                    </div>
                    <h3
                      className="mb-3 font-display text-white"
                      style={{ fontSize: '1.125rem', fontWeight: 700 }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/55">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Steps */}
        <RevealOnScroll>
          <div className="border-l border-vibora/20 pl-8">
            <span className="mb-8 block font-anek-label text-[11px] uppercase tracking-[0.3em] text-white/40">
              ¿Cómo funciona?
            </span>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {liga.steps.map((step, idx) => (
                <div key={step.number} className="relative">
                  <div className="absolute -left-[2.35rem] top-0 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-vibora/40 bg-[#0D1117]">
                    <div className="h-1.5 w-1.5 rounded-full bg-vibora" />
                  </div>
                  <div
                    className="mb-2 font-display text-vibora"
                    style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}
                  >
                    {step.number}
                  </div>
                  <h4
                    className="mb-1.5 font-display text-white"
                    style={{ fontSize: '1rem', fontWeight: 700 }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-white/40">
                    {step.description}
                  </p>
                  {idx < liga.steps.length - 1 && (
                    <div className="mt-4 hidden h-px w-full bg-white/[0.06] lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

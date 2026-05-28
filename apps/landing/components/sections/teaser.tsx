import { Trophy, Layers, Sparkles } from 'lucide-react'
import { StaggerContainer, StaggerItem, RevealOnScroll } from '@/components/shared/reveal-on-scroll'
import { DarkGlowCard } from '@/components/shared/dark-glow-card'
import { landing } from '@/content/landing'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Layers,
  Sparkles,
}

export function Teaser() {
  const { teaser } = landing

  return (
    <section className="relative overflow-hidden bg-[#0D1117] py-24 md:py-32">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />

      {/* Decorative top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <RevealOnScroll className="mb-16 text-center">
          <p className="mb-4 font-condensed text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
            {teaser.eyebrow}
          </p>
          <h2
            className="font-display uppercase leading-[0.9] tracking-wide text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            {teaser.headline}
          </h2>
          <p className="mt-5 font-condensed text-sm uppercase tracking-[0.1em] text-gray-600 sm:text-base">{teaser.subheadline}</p>
        </RevealOnScroll>

        {/* Pillars */}
        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {teaser.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <StaggerItem key={pillar.title}>
                <DarkGlowCard className="h-full rounded-2xl border border-white/6 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/25">
                  {/* Number */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/8 text-brand-400 ring-1 ring-brand-500/15 transition-all duration-300 group-hover:bg-brand-500/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-4xl font-black text-white/5">
                      0{teaser.pillars.indexOf(pillar) + 1}
                    </span>
                  </div>

                  <h3 className="mb-2.5 text-base font-bold text-white">{pillar.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">{pillar.description}</p>

                  {/* Mystery dots */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className="h-1 w-1 rounded-full bg-brand-500/50" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-700">
                      Muy pronto
                    </span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute inset-x-0 bottom-0 h-px rounded-b-2xl bg-gradient-to-r from-transparent via-brand-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </DarkGlowCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

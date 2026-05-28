import { Trophy, Layers, Sparkles } from 'lucide-react'
import { StaggerContainer, StaggerItem, RevealOnScroll } from '@/components/shared/reveal-on-scroll'
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
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-brand-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
            {teaser.eyebrow}
          </div>
          <h2 className="whitespace-pre-line text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {teaser.headline}
          </h2>
          <p className="mt-4 text-base text-gray-500 sm:text-lg">{teaser.subheadline}</p>
        </RevealOnScroll>

        {/* Three pillars */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {teaser.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <StaggerItem key={pillar.title}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/3 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-white/5">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/15 group-hover:text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{pillar.description}</p>

                  {/* Mystery dots */}
                  <div className="mt-5 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1 w-1 rounded-full bg-brand-500/40"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                    <span className="ml-1 text-xs text-gray-600">Muy pronto...</span>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

import { Building2, Trophy, Users } from 'lucide-react'
import { DarkGlowCard } from '@/components/shared/dark-glow-card'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/shared/reveal-on-scroll'
import { corporate } from '@/content/corporate'

const ICON_MAP = { Building2, Trophy, Users } as const
type IconKey = keyof typeof ICON_MAP

const ACCENT_TEXT: Record<string, string> = {
  vibora:   'text-vibora',
  bandeja:  'text-bandeja',
  chiquita: 'text-chiquita',
}
const ACCENT_BORDER: Record<string, string> = {
  vibora:   'border-vibora/20 hover:border-vibora/40',
  bandeja:  'border-bandeja/20 hover:border-bandeja/40',
  chiquita: 'border-chiquita/20 hover:border-chiquita/40',
}
const ACCENT_ICON: Record<string, string> = {
  vibora:   'border-vibora/30 bg-vibora/10 text-vibora',
  bandeja:  'border-bandeja/30 bg-bandeja/10 text-bandeja',
  chiquita: 'border-chiquita/30 bg-chiquita/10 text-chiquita',
}

export function Services() {
  const { services } = corporate

  return (
    <section className="relative overflow-hidden bg-[#0D1117] py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibora/20 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">

        <RevealOnScroll className="mb-16 max-w-3xl">
          <span className="mb-4 block font-label text-[11px] uppercase tracking-[0.3em] text-vibora">
            {services.eyebrow}
          </span>
          <h2
            className="font-display text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700 }}
          >
            {services.headline}
          </h2>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-3" staggerDelay={0.1}>
          {services.items.map((item) => {
            const Icon = ICON_MAP[item.icon as IconKey] ?? Trophy
            return (
              <StaggerItem key={item.title}>
                <DarkGlowCard className={`h-full border bg-white/[0.02] p-8 transition-colors ${ACCENT_BORDER[item.accent]}`}>
                  <div className={`mb-6 inline-flex h-11 w-11 items-center justify-center border ${ACCENT_ICON[item.accent]}`}>
                    <Icon size={20} />
                  </div>
                  <h3
                    className="mb-3 font-display text-white"
                    style={{ fontSize: '1.2rem', fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                </DarkGlowCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

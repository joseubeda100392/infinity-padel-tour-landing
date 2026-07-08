import { Clock, Trophy, Star, MapPin, Calendar } from 'lucide-react'
import { DarkGlowCard } from '@/components/shared/dark-glow-card'
import { LokLogo } from '@/components/shared/lok-logo'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/shared/reveal-on-scroll'
import { landing } from '@/content/landing'

const ICON_MAP = { Clock, Trophy, Star, MapPin, Calendar } as const
type IconKey = keyof typeof ICON_MAP

export function LokTour() {
  const { oneDay } = landing

  return (
    <section className="relative overflow-hidden bg-[#0D1117] py-24 md:py-32">

      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bandeja/30 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <RevealOnScroll className="mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-2.5">
            <LokLogo height={18} variant="white" />
            <div className="h-3 w-px bg-bandeja/30" />
            <span className="font-anek-label text-[11px] uppercase tracking-[0.3em] text-bandeja">
              {oneDay.eyebrow}
            </span>
          </div>
          <h2
            className="mb-6 font-display text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700 }}
          >
            {oneDay.headline}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
            {oneDay.description}
          </p>
        </RevealOnScroll>

        {/* Pillars */}
        <StaggerContainer className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-3" staggerDelay={0.1}>
          {oneDay.pillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.icon as IconKey] ?? Trophy
            return (
              <StaggerItem key={pillar.title}>
                <DarkGlowCard className="h-full border border-bandeja/20 bg-white/[0.02] p-7 transition-colors hover:border-bandeja/40">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center border border-bandeja/30 bg-bandeja/10">
                    <Icon size={18} className="text-bandeja" />
                  </div>
                  <h3
                    className="mb-3 font-display text-white"
                    style={{ fontSize: '1.125rem', fontWeight: 700 }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/45">{pillar.description}</p>
                </DarkGlowCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Tournament cards */}
        <RevealOnScroll>
          <span className="mb-8 block font-anek-label text-[11px] uppercase tracking-[0.3em] text-white/30">
            Próximas fechas
          </span>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {oneDay.items.map((item, idx) => (
              <div
                key={item.id}
                className="group relative overflow-hidden border border-bandeja/15 bg-white/[0.02] p-6 transition-all duration-200 hover:border-bandeja/40 hover:bg-white/[0.04]"
              >
                <div
                  className="absolute right-4 top-4 font-display text-white/[0.04]"
                  style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1 }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="border border-bandeja/30 px-2 py-0.5 font-anek-label text-[9px] uppercase tracking-[0.15em] text-bandeja">
                      {item.format}
                    </span>
                  </div>

                  <h3
                    className="mb-3 font-display leading-tight text-white"
                    style={{ fontSize: '1rem', fontWeight: 700 }}
                  >
                    {item.name}
                  </h3>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-white/40">
                      <MapPin size={11} />
                      <span className="font-anek-label text-[11px] uppercase tracking-[0.1em]">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40">
                      <Calendar size={11} />
                      <span className="font-anek-label text-[11px]">{item.dates}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40">
                      <Trophy size={11} />
                      <span className="font-anek-label text-[11px]">{item.pairs} parejas</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bandeja/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

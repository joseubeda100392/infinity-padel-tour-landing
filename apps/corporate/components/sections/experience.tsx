import { MapPin } from 'lucide-react'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/shared/reveal-on-scroll'
import { corporate } from '@/content/corporate'

const CATEGORY_COLOR: Record<string, string> = {
  Empresa: 'border-vibora/30 text-vibora',
  Premium: 'border-bandeja/30 text-bandeja',
  Social:  'border-white/20 text-white/50',
  Privado: 'border-chiquita/30 text-chiquita',
}

export function Experience() {
  const { experience } = corporate

  return (
    <section id="infinity-experience" className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibora/15 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">

        <RevealOnScroll className="mb-16 max-w-3xl">
          <span className="mb-4 block font-label text-[11px] uppercase tracking-[0.3em] text-vibora">
            {experience.eyebrow}
          </span>
          <h2
            className="mb-4 font-display text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700 }}
          >
            {experience.headline}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
            {experience.subheadline}
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" staggerDelay={0.07}>
          {experience.items.map((item) => (
            <StaggerItem key={item.id}>
              <div
                className={[
                  'group relative overflow-hidden p-6 transition-all duration-300',
                  item.status === 'upcoming'
                    ? 'event-card-upcoming hover:brightness-110'
                    : 'event-card-finished opacity-55',
                ].join(' ')}
              >
                {/* Status badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span className={[
                    'border px-2 py-0.5 font-label text-[9px] uppercase tracking-[0.15em]',
                    item.status === 'upcoming' ? 'border-vibora/40 text-vibora' : 'border-balance/30 text-balance',
                  ].join(' ')}>
                    {item.status === 'upcoming' ? 'PRÓXIMAMENTE' : 'REALIZADO'}
                  </span>
                  <span className={`border px-2 py-0.5 font-label text-[9px] uppercase tracking-[0.1em] ${CATEGORY_COLOR[item.category] ?? 'border-white/20 text-white/40'}`}>
                    {item.category}
                  </span>
                </div>

                <h3
                  className="mb-3 font-display leading-tight text-white"
                  style={{ fontSize: '0.95rem', fontWeight: 700 }}
                >
                  {item.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white/40">
                    <MapPin size={11} />
                    <span className="font-label text-[10px] uppercase tracking-[0.1em]">{item.location}</span>
                  </div>
                  <span className="font-label text-[10px] text-white/35">{item.spots} plazas</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

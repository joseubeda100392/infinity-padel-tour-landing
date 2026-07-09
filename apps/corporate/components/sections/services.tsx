import { Building2, Trophy, Users } from 'lucide-react'
import { RevealOnScroll } from '@/components/shared/reveal-on-scroll'
import { corporate } from '@/content/corporate'

const ICON_MAP = { Building2, Trophy, Users } as const
type IconKey = keyof typeof ICON_MAP

const ACCENT_LINE: Record<string, string> = {
  vibora:   'bg-vibora',
  bandeja:  'bg-bandeja',
  chiquita: 'bg-chiquita',
}
const ACCENT_ICON: Record<string, string> = {
  vibora:   'border-vibora/40 bg-vibora/10 text-vibora',
  bandeja:  'border-bandeja/40 bg-bandeja/10 text-bandeja',
  chiquita: 'border-chiquita/40 bg-chiquita/10 text-chiquita',
}

export function Services() {
  const { services } = corporate

  return (
    <section className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">

        <RevealOnScroll className="mb-14 max-w-3xl">
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

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {services.items.map((item) => {
            const Icon = ICON_MAP[item.icon as IconKey] ?? Trophy
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden"
                style={{ minHeight: '400px' }}
              >
                {/* Photo background */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#05080F]/65 transition-opacity duration-300 group-hover:bg-[#05080F]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/30 to-transparent" />

                {/* Top accent line */}
                <div className={`absolute inset-x-0 top-0 h-[2px] ${ACCENT_LINE[item.accent]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Content — pinned to bottom */}
                <div className="relative z-10 flex h-full flex-col justify-end p-8" style={{ minHeight: '400px' }}>
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center border ${ACCENT_ICON[item.accent]}`}>
                    <Icon size={20} />
                  </div>
                  <h3
                    className="mb-3 font-display text-white"
                    style={{ fontSize: '1.25rem', fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

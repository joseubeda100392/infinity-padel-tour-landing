import { MapPin } from 'lucide-react'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/shared/reveal-on-scroll'
import { corporate } from '@/content/corporate'

export function Experience() {
  const { experience } = corporate

  return (
    <section id="infinity-experience" className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibora/15 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">

        <RevealOnScroll className="mb-14 max-w-3xl">
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

        <StaggerContainer
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          staggerDelay={0.06}
        >
          {experience.items.map((item) => (
            <StaggerItem key={item.id}>
              <div
                className="group relative overflow-hidden"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className={[
                    'absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105',
                    item.status === 'finished' ? 'grayscale' : '',
                  ].join(' ')}
                  loading="lazy"
                />
                {/* Overlays */}
                <div className={[
                  'absolute inset-0 transition-opacity duration-300',
                  item.status === 'upcoming'
                    ? 'bg-[#05080F]/45 group-hover:bg-[#05080F]/30'
                    : 'bg-[#05080F]/65',
                ].join(' ')} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/10 to-transparent" />

                {/* Top badges */}
                <div className="absolute left-3 right-3 top-3 z-10 flex items-start justify-between gap-1">
                  <span className={[
                    'border px-2 py-0.5 font-label text-[9px] uppercase tracking-[0.12em]',
                    item.status === 'upcoming'
                      ? 'border-vibora/50 bg-vibora/10 text-vibora'
                      : 'border-white/20 bg-black/30 text-white/40',
                  ].join(' ')}>
                    {item.status === 'upcoming' ? 'PRÓXIMAMENTE' : 'REALIZADO'}
                  </span>
                  <span className="border border-white/20 bg-black/30 px-2 py-0.5 font-label text-[9px] uppercase tracking-[0.1em] text-white/40">
                    {item.category}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                  <h3
                    className="mb-2 font-display leading-tight text-white"
                    style={{ fontSize: '0.875rem', fontWeight: 700 }}
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-white/50">
                      <MapPin size={10} />
                      <span className="font-label text-[10px] uppercase tracking-[0.1em]">{item.location}</span>
                    </div>
                    <span className="font-label text-[10px] text-white/35">{item.spots} plazas</span>
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

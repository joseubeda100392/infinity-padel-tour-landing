import { MapPin } from 'lucide-react'
import { StaggerContainer, StaggerItem, RevealOnScroll } from '@/components/shared/reveal-on-scroll'
import { landing } from '@/content/landing'

export function Eventos() {
  const { eventos } = landing

  return (
    <section id="eventos" className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">

      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bandeja/30 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <RevealOnScroll className="mb-16">
          <span className="mb-4 block font-anek-label text-[11px] uppercase tracking-[0.3em] text-bandeja">
            {eventos.eyebrow}
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, fontStretch: '105%' }}
            >
              {eventos.headline}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-white/40 md:text-right">
              {eventos.subheadline}
            </p>
          </div>
        </RevealOnScroll>

        {/* Cards grid */}
        <StaggerContainer
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          staggerDelay={0.07}
        >
          {eventos.items.map((item) => {
            const isFinished = item.status === 'finished'
            return (
              <StaggerItem key={item.id}>
                <div
                  className={[
                    'group relative flex h-56 flex-col justify-end overflow-hidden',
                    isFinished ? 'opacity-50' : 'event-card-upcoming cursor-pointer',
                  ].join(' ')}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient}`} />

                  {/* Grid texture overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-[0.12]" />

                  {/* Subtle glow for upcoming */}
                  {!isFinished && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vibora/[0.08] to-transparent" />
                  )}

                  {/* Status pill */}
                  <div className="absolute right-3 top-3">
                    {isFinished ? (
                      <span className="font-anek-label text-[9px] uppercase tracking-[0.2em] text-balance/60">
                        Finalizado
                      </span>
                    ) : (
                      <span className="border border-vibora/40 bg-vibora/10 px-2 py-0.5 font-anek-label text-[9px] uppercase tracking-[0.2em] text-vibora">
                        Próximamente
                      </span>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="relative z-10 p-4">
                    {/* Category */}
                    <span className="mb-2 inline-block border border-chiquita/30 px-2 py-0.5 font-anek-label text-[9px] uppercase tracking-[0.15em] text-chiquita">
                      {item.category}
                    </span>

                    {/* Name */}
                    <h3
                      className="mb-2 font-display leading-tight text-white"
                      style={{ fontSize: '1rem', fontWeight: 700, fontStretch: '100%' }}
                    >
                      {item.name}
                    </h3>

                    {/* Location + spots */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-white/50">
                        <MapPin size={10} />
                        <span className="font-anek-label text-[10px] uppercase tracking-[0.1em]">{item.location}</span>
                      </div>
                      <span className="font-anek-label text-[10px] text-white/30">
                        {item.spots} plazas
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* CTA anchor below */}
        <RevealOnScroll className="mt-12 text-center">
          <a
            href="#evento-form"
            className="inline-flex items-center gap-2 border border-chiquita/40 px-8 py-4 font-anek-label text-[12px] uppercase tracking-[0.2em] text-chiquita transition-all duration-200 hover:bg-chiquita/10 active:scale-95"
          >
            Quiero apuntarme a un evento
          </a>
        </RevealOnScroll>
      </div>
    </section>
  )
}

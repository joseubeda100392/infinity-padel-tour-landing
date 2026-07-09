import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

type Accent = 'vibora' | 'bandeja'

const ACCENT: Record<Accent, { line: string; text: string; badge: string; cta: string }> = {
  vibora: {
    line:  'bg-vibora',
    text:  'text-vibora',
    badge: 'border-vibora/30 bg-vibora/10 text-vibora',
    cta:   'text-vibora',
  },
  bandeja: {
    line:  'bg-bandeja',
    text:  'text-bandeja',
    badge: 'border-bandeja/30 bg-bandeja/10 text-bandeja',
    cta:   'text-bandeja',
  },
}

export function Hub() {
  const { hub } = landing

  return (
    <section className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      {/* Brand stripe */}
      <div className="absolute inset-x-0 top-0 h-[3px] z-30"
        style={{ background: 'linear-gradient(90deg, #00FB9F 0%, #FFD48F 100%)' }} />

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1658723826297-fe4d1b1e6600?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[#05080F]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#05080F]/70 to-[#05080F]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <IptLogo height={32} variant="light" />
        <LokLogo height={18} variant="white" />
      </header>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8 pb-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2.5 border border-white/15 bg-white/[0.05] px-4 py-2">
          <span className="font-anek-label text-[11px] uppercase tracking-[0.3em] text-white/60">
            {hub.badge}
          </span>
        </div>
        <h1
          className="mb-4 font-display uppercase leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', fontWeight: 700 }}
        >
          <span className="block text-white">{hub.headline_line1}</span>
          <span className="block text-white/25">{hub.headline_line2}</span>
        </h1>
        <p className="mb-10 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
          {hub.description}
        </p>
      </div>

      {/* Product cards — full bleed photo */}
      <div className="relative z-10 flex-1 grid grid-cols-1 sm:grid-cols-2">
        {hub.services.map((service) => {
          const a = ACCENT[service.accent]
          const isOneDay = service.id === 'one-day'

          return (
            <Link
              key={service.id}
              href={service.href}
              className="group relative overflow-hidden"
              style={{ minHeight: '340px' }}
            >
              {/* Photo */}
              {service.image && (
                <>
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#05080F]/60 transition-opacity duration-300 group-hover:bg-[#05080F]/45" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/20 to-transparent" />
                </>
              )}

              {/* Top accent line */}
              <div className={`absolute inset-x-0 top-0 h-[2px] ${a.line} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Divider between cards (only on desktop) */}
              {!isOneDay && (
                <div className="absolute inset-y-0 right-0 w-px bg-white/10 hidden sm:block" />
              )}

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10" style={{ minHeight: '340px' }}>
                <span className={`mb-3 block font-anek-label text-[10px] uppercase tracking-[0.3em] ${a.text}`}>
                  {service.eyebrow}
                </span>

                {isOneDay ? (
                  <div className="mb-3">
                    <div className="mb-2 flex items-center gap-2">
                      <LokLogo height={14} variant="white" />
                    </div>
                    <h2 className="font-display text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700 }}>
                      {service.title}
                    </h2>
                  </div>
                ) : (
                  <div className="mb-3">
                    <h2 className="font-display text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700 }}>
                      {service.title}
                    </h2>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="font-anek-label text-[9px] uppercase tracking-[0.2em] text-white/40">by</span>
                      <LokLogo height={12} variant="white" />
                    </div>
                  </div>
                )}

                <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>

                <div className={`inline-flex items-center gap-2 font-anek-label text-[11px] uppercase tracking-[0.2em] ${a.cta}`}>
                  {service.cta}
                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="relative z-10 flex items-center justify-center gap-6 border-t border-white/8 py-4">
        <span className="font-anek-label text-[10px] uppercase tracking-[0.3em] text-white/30">Patrocinado por</span>
        <LokLogo height={14} variant="white" />
      </div>
    </section>
  )
}

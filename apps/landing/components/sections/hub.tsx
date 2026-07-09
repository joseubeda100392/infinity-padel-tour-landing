import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

type Accent = 'vibora' | 'bandeja'

const ACCENT: Record<Accent, { border: string; bg: string; hover: string; glow: string; text: string; line: string }> = {
  vibora: {
    border: 'border-vibora/25',
    bg:     'bg-vibora/[0.03]',
    hover:  'hover:border-vibora/55 hover:bg-vibora/[0.08]',
    glow:   'bg-vibora/[0.07]',
    text:   'text-vibora',
    line:   'via-vibora/50',
  },
  bandeja: {
    border: 'border-bandeja/25',
    bg:     'bg-bandeja/[0.03]',
    hover:  'hover:border-bandeja/55 hover:bg-bandeja/[0.08]',
    glow:   'bg-bandeja/[0.07]',
    text:   'text-bandeja',
    line:   'via-bandeja/50',
  },
}

export function Hub() {
  const { hub } = landing

  return (
    <section className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      {/* Dual brand stripe */}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#05080F]/60 to-[#05080F]" />

      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.3" />
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Dual glow */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-vibora/[0.05] blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/2 rounded-full bg-bandeja/[0.04] blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,#05080F_95%)]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <IptLogo height={32} variant="light" />
        <LokLogo height={18} variant="white" />
      </header>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-0 text-center">

        <div className="mb-8 inline-flex items-center gap-2.5 border border-white/15 bg-white/[0.05] px-4 py-2">
          <span className="font-anek-label text-[11px] uppercase tracking-[0.3em] text-white/60">
            {hub.badge}
          </span>
        </div>

        <h1
          className="mb-6 font-display uppercase leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', fontWeight: 700 }}
        >
          <span className="block text-white">{hub.headline_line1}</span>
          <span className="block text-white/25">{hub.headline_line2}</span>
        </h1>

        <p className="mb-16 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
          {hub.description}
        </p>

        {/* 2 service cards */}
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {hub.services.map((service) => {
            const a = ACCENT[service.accent]
            const isOneDay = service.id === 'one-day'

            return (
              <Link
                key={service.id}
                href={service.href}
                className={[
                  'group relative overflow-hidden border p-8 text-left transition-all duration-300',
                  a.border, a.bg, a.hover,
                ].join(' ')}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="relative z-10">
                  <span className={`mb-4 block font-anek-label text-[10px] uppercase tracking-[0.3em] ${a.text}`}>
                    {service.eyebrow}
                  </span>

                  {isOneDay ? (
                    <div className="mb-4">
                      <div className="mb-1.5 flex items-center gap-2">
                        <LokLogo height={16} variant="white" />
                      </div>
                      <h2
                        className="font-display text-white"
                        style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 700 }}
                      >
                        {service.title}
                      </h2>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <h2
                        className="font-display text-white"
                        style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 700 }}
                      >
                        {service.title}
                      </h2>
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="font-anek-label text-[9px] uppercase tracking-[0.2em] text-white/40">by</span>
                        <LokLogo height={12} variant="white" />
                      </div>
                    </div>
                  )}

                  <p className="mb-7 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>

                  <div className={`inline-flex items-center gap-2 font-anek-label text-[11px] uppercase tracking-[0.2em] ${a.text}`}>
                    {service.cta}
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                  </div>
                </div>

                <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${a.line} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              </Link>
            )
          })}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-6 border-t border-white/8 py-4">
        <span className="font-anek-label text-[10px] uppercase tracking-[0.3em] text-white/30">Patrocinado por</span>
        <LokLogo height={14} variant="white" />
      </div>
    </section>
  )
}

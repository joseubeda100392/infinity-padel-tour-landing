import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

type Accent = 'vibora' | 'bandeja' | 'chiquita'

const ACCENT: Record<Accent, { border: string; bg: string; hover: string; glow: string; text: string; line: string }> = {
  vibora: {
    border: 'border-vibora/20',
    bg:     'bg-vibora/[0.03]',
    hover:  'hover:border-vibora/50 hover:bg-vibora/[0.07]',
    glow:   'bg-vibora/[0.06]',
    text:   'text-vibora',
    line:   'via-vibora/40',
  },
  bandeja: {
    border: 'border-bandeja/20',
    bg:     'bg-bandeja/[0.03]',
    hover:  'hover:border-bandeja/50 hover:bg-bandeja/[0.07]',
    glow:   'bg-bandeja/[0.06]',
    text:   'text-bandeja',
    line:   'via-bandeja/40',
  },
  chiquita: {
    border: 'border-chiquita/20',
    bg:     'bg-chiquita/[0.03]',
    hover:  'hover:border-chiquita/50 hover:bg-chiquita/[0.07]',
    glow:   'bg-chiquita/[0.06]',
    text:   'text-chiquita',
    line:   'via-chiquita/40',
  },
}

export function Hub() {
  const { hub } = landing

  return (
    <section className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      <div className="absolute inset-x-0 top-0 h-[3px] z-30" style={{ background: 'linear-gradient(90deg, #00FB9F 0%, #FFD48F 50%, #FF7300 100%)' }} />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#05080F] to-[#05080F]" />

      {/* Court lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.3" />
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Triple glow */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-0 top-1/2 h-[500px] w-[400px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-vibora/[0.04] blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bandeja/[0.03] blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[400px] translate-x-1/4 -translate-y-1/2 rounded-full bg-chiquita/[0.04] blur-[120px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,#05080F_95%)]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <IptLogo height={32} variant="light" />
        <LokLogo height={18} variant="white" />
      </header>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-0 text-center">

        <div className="mb-8 inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.04] px-4 py-2">
          <span className="font-anek-label text-[11px] uppercase tracking-[0.3em] text-white/40">
            {hub.badge}
          </span>
        </div>

        <h1
          className="mb-6 font-display uppercase leading-[0.88] tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)', fontWeight: 800, fontStretch: '115%' }}
        >
          <span className="block text-white">{hub.headline_line1}</span>
          <span className="block text-white/20">{hub.headline_line2}</span>
        </h1>

        <p className="mb-16 max-w-md text-sm leading-relaxed text-white/40 sm:text-base">
          {hub.description}
        </p>

        {/* 3 service cards */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3">
          {hub.services.map((service) => {
            const a = ACCENT[service.accent]
            return (
              <Link
                key={service.id}
                href={service.href}
                className={[
                  'group relative overflow-hidden border p-7 text-left transition-all duration-300',
                  a.border, a.bg, a.hover,
                ].join(' ')}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="relative z-10">
                  <span className={`mb-4 block font-anek-label text-[10px] uppercase tracking-[0.3em] ${a.text}`}>
                    {service.eyebrow}
                  </span>
                  <h2
                    className="mb-3 font-display text-white"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 800, fontStretch: '105%' }}
                  >
                    {service.title}
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-white/40">
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

      <div className="relative z-10 flex items-center justify-center gap-8 border-t border-white/5 py-4">
        <LokLogo height={14} variant="white" />
        <div className="h-px w-8 bg-white/10" />
        <span className="font-anek-label text-[10px] uppercase tracking-[0.3em] text-white/20">Temporada 26/27</span>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

type Accent = 'vibora' | 'bandeja' | 'chiquita'

const ACCENT: Record<Accent, { line: string; text: string; cta: string }> = {
  vibora: {
    line: 'bg-vibora',
    text: 'text-vibora',
    cta:  'text-vibora',
  },
  bandeja: {
    line: 'bg-bandeja',
    text: 'text-bandeja',
    cta:  'text-bandeja',
  },
  chiquita: {
    line: 'bg-chiquita',
    text: 'text-chiquita',
    cta:  'text-chiquita',
  },
}

export function Hub() {
  const { hub } = landing

  return (
    <section className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      {/* Brand stripe */}
      <div className="absolute inset-x-0 top-0 h-[3px] z-30"
        style={{ background: 'linear-gradient(90deg, #00FB9F 0%, #FFD48F 50%, #FF7300 100%)' }} />

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
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-white/60">
            {hub.badge}
          </span>
        </div>
        <h1
          className="mb-4 font-sans uppercase leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', fontWeight: 700 }}
        >
          <span className="block text-white">{hub.headline_line1}</span>
          <span className="block text-white/25">{hub.headline_line2}</span>
        </h1>
        <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
          {hub.description}
        </p>
      </div>

      {/* Product cards — 3 columns */}
      <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-3">
        {hub.services.map((service, idx) => {
          const a = ACCENT[service.accent]
          const isLast = idx === hub.services.length - 1

          return (
            <Link
              key={service.id}
              href={service.href}
              className="group relative overflow-hidden"
              style={{ minHeight: '320px' }}
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
                  <div className="absolute inset-0 bg-[#05080F]/62 transition-opacity duration-300 group-hover:bg-[#05080F]/45" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/95 via-[#05080F]/20 to-transparent" />
                </>
              )}

              {/* Top accent line */}
              <div className={`absolute inset-x-0 top-0 h-[2px] ${a.line} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Divider between cards */}
              {!isLast && (
                <div className="absolute inset-y-0 right-0 w-px bg-white/10 hidden md:block" />
              )}

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-8" style={{ minHeight: '320px' }}>
                <span className={`mb-3 block font-sans text-[10px] uppercase tracking-[0.3em] ${a.text}`}>
                  {service.eyebrow}
                </span>

                <div className="mb-3">
                  <h2 className="font-sans text-white" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700 }}>
                    {service.title}
                  </h2>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">by</span>
                    <LokLogo height={11} variant="white" />
                  </div>
                </div>

                <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>

                <div className={`inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] ${a.cta}`}>
                  {service.cta}
                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="relative z-10 flex items-center justify-center gap-6 border-t border-white/8 py-4">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/30">Patrocinado por</span>
        <LokLogo height={14} variant="white" />
      </div>
    </section>
  )
}

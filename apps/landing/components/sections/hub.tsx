import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

export function Hub() {
  const { hub } = landing

  return (
    <section className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      {/* Brand stripe */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-vibora z-30" />

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#05080F] to-[#05080F]" />

      {/* Court lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.3" />
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Dual glow — Víbora left, Chiquita right */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-vibora/[0.04] blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/2 rounded-full bg-chiquita/[0.04] blur-[120px]" />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,#05080F_95%)]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <IptLogo height={32} variant="light" />
        <LokLogo height={18} variant="white" />
      </header>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-0 text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.04] px-4 py-2">
          <span className="font-anek-label text-[11px] uppercase tracking-[0.3em] text-white/40">
            {hub.badge}
          </span>
        </div>

        {/* Headline */}
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

        {/* Service cards */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Liga card — Víbora */}
          <Link
            href={hub.services[0].href}
            className="group relative overflow-hidden border border-vibora/20 bg-vibora/[0.03] p-8 text-left transition-all duration-300 hover:border-vibora/50 hover:bg-vibora/[0.07]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-vibora/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <span className="mb-4 block font-anek-label text-[10px] uppercase tracking-[0.3em] text-vibora">
                {hub.services[0].eyebrow}
              </span>
              <h2
                className="mb-3 font-display text-white"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, fontStretch: '105%' }}
              >
                {hub.services[0].title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-white/40">
                {hub.services[0].description}
              </p>
              <div className="inline-flex items-center gap-2 font-anek-label text-[11px] uppercase tracking-[0.2em] text-vibora transition-gap duration-200">
                {hub.services[0].cta}
                <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
            </div>
            {/* Bottom accent */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vibora/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* IPT Experience card — Chiquita */}
          <Link
            href={hub.services[1].href}
            className="group relative overflow-hidden border border-chiquita/20 bg-chiquita/[0.03] p-8 text-left transition-all duration-300 hover:border-chiquita/50 hover:bg-chiquita/[0.07]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-chiquita/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <span className="mb-4 block font-anek-label text-[10px] uppercase tracking-[0.3em] text-chiquita">
                {hub.services[1].eyebrow}
              </span>
              <h2
                className="mb-3 font-display text-white"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, fontStretch: '105%' }}
              >
                {hub.services[1].title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-white/40">
                {hub.services[1].description}
              </p>
              <div className="inline-flex items-center gap-2 font-anek-label text-[11px] uppercase tracking-[0.2em] text-chiquita">
                {hub.services[1].cta}
                <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-chiquita/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex items-center justify-center gap-8 border-t border-white/5 py-4">
        <LokLogo height={14} variant="white" />
        <div className="h-px w-8 bg-white/10" />
        <span className="font-anek-label text-[10px] uppercase tracking-[0.3em] text-white/20">Temporada 26/27</span>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

export function Hero() {
  const { hero } = landing

  return (
    <section id="hero" className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a]">

      {/* Brand stripe top */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-500 z-30" />

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#05080F]" />

      {/* Court grid — subtle padel court lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.3" />
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="white" strokeWidth="0.2" />
          <rect x="30" y="10" width="40" height="80" fill="none" stroke="white" strokeWidth="0.15" />
          <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.1" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>

      {/* Warm parallax blobs */}
      <div id="hero-blob-1" className="absolute left-1/3 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[200px]" />
      <div id="hero-blob-2" className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-orange-700/10 blur-[150px]" />

      {/* Vignette edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)]" />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <IptLogo height={32} variant="light" />
        <LokLogo height={18} variant="orange" />
      </header>

      {/* ── Hero content ── */}
      <div
        id="hero-content"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-20 pt-0 text-center"
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-[11px] font-condensed font-semibold uppercase tracking-[0.3em] text-brand-300 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
          </span>
          {hero.badge}
        </div>

        {/* H1 — Bebas Neue, Premier Padel style */}
        <h1 className="mb-0 max-w-6xl font-display uppercase leading-[0.88] tracking-wide text-white"
          style={{ fontSize: 'clamp(4.5rem, 14vw, 13rem)' }}
        >
          <span className="block">{hero.headline_line1}</span>
          <span className="block text-brand-500">{hero.headline_line2}</span>
        </h1>

        {/* Separator */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px w-16 bg-white/20" />
          <p className="max-w-lg font-condensed text-sm font-medium uppercase tracking-[0.15em] text-gray-400 sm:text-base">
            {hero.subheadline}
          </p>
          <div className="h-px w-16 bg-white/20" />
        </div>

        {/* CTA */}
        <Link
          href="#registro"
          className="group relative inline-flex items-center gap-3 overflow-hidden bg-brand-500 px-10 py-4 font-condensed text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-brand-400 active:scale-95"
        >
          <span className="relative z-10">{hero.cta}</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </Link>
      </div>

      {/* Bottom brand bar */}
      <div className="relative z-10 flex items-center justify-center gap-8 border-t border-white/5 py-4">
        <span className="font-condensed text-[10px] uppercase tracking-[0.3em] text-gray-700">Patrocinador oficial</span>
        <LokLogo height={14} variant="orange" showLabel={false} />
        <div className="h-px w-8 bg-white/10" />
        <span className="font-condensed text-[10px] uppercase tracking-[0.3em] text-gray-700">Temporada 26/27</span>
      </div>
    </section>
  )
}

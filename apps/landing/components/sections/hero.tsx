import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

export function Hero() {
  const hero = {
    badge: landing.hub.badge,
    headline_line1: landing.hub.headline_line1,
    headline_line2: landing.hub.headline_line2,
    description: landing.hub.description,
    cta_primary: 'ÚNETE A LA LIGA',
    cta_secondary: 'IPT EXPERIENCE',
    stats: [
      { value: '3', label: 'SERVICIOS' },
      { value: 'T26/27', label: 'TEMPORADA' },
      { value: 'LÕK', label: 'PARTNER OFICIAL' },
    ],
  }

  return (
    <section id="hero" className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      {/* Brand stripe */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-vibora z-30" />

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#05080F] to-[#05080F]" />

      {/* Court lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.3" />
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="white" strokeWidth="0.2" />
          <rect x="30" y="10" width="40" height="80" fill="none" stroke="white" strokeWidth="0.15" />
        </svg>
      </div>

      {/* Víbora glow ellipse */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] flex justify-center">
        <svg width="1000" height="350" viewBox="0 0 1000 350" fill="none">
          <defs>
            <filter id="vibora-glow">
              <feGaussianBlur stdDeviation="40" />
            </filter>
          </defs>
          <ellipse cx="500" cy="130" rx="380" ry="80" fill="#00FB9F" fillOpacity="0.06" filter="url(#vibora-glow)" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,#05080F_90%)]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <IptLogo height={32} variant="light" />
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#liga"    className="font-anek-label text-[12px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-200 hover:text-vibora">Liga</a>
          <a href="#eventos" className="font-anek-label text-[12px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-200 hover:text-vibora">Eventos</a>
        </nav>
        <LokLogo height={18} variant="white" />
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-0 text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 border border-vibora/25 bg-vibora/[0.07] px-4 py-2">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vibora opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-vibora" />
          </span>
          <span className="font-anek-label text-[11px] uppercase tracking-[0.3em] text-vibora">
            {hero.badge}
          </span>
        </div>

        {/* H1 */}
        <h1
          className="mb-6 font-display uppercase leading-[0.88] tracking-tight text-white"
          style={{ fontSize: 'clamp(4rem, 13vw, 12rem)', fontWeight: 800, fontStretch: '115%' }}
        >
          <span className="block">{hero.headline_line1}</span>
          <span className="block text-vibora">{hero.headline_line2}</span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#liga"
            className="group inline-flex items-center gap-2.5 bg-vibora px-8 py-4 font-anek-label text-[12px] uppercase tracking-[0.2em] text-[#05080F] transition-all duration-200 hover:bg-brand-400 active:scale-95"
          >
            {hero.cta_primary}
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="#eventos"
            className="inline-flex items-center gap-2.5 border border-chiquita/50 px-8 py-4 font-anek-label text-[12px] uppercase tracking-[0.2em] text-chiquita transition-all duration-200 hover:bg-chiquita/10 active:scale-95"
          >
            {hero.cta_secondary}
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center divide-x divide-white/10">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="px-8 text-center first:pl-0 last:pr-0">
              <div
                className="font-display text-white"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800 }}
              >
                {stat.value}
              </div>
              <div className="mt-1 font-anek-label text-[10px] uppercase tracking-[0.2em] text-white/30">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex items-center justify-center gap-8 border-t border-white/5 py-4">
        <span className="font-anek-label text-[10px] uppercase tracking-[0.3em] text-gray-700">Patrocinador oficial</span>
        <LokLogo height={14} variant="white" />
        <div className="h-px w-8 bg-white/10" />
        <span className="font-anek-label text-[10px] uppercase tracking-[0.3em] text-gray-700">Temporada 26/27</span>
      </div>
    </section>
  )
}

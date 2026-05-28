import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

export function Hero() {
  const { hero } = landing

  return (
    <section id="hero" className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      {/* Brand stripe top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500 to-transparent z-20" />

      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0200] via-[#05080F] to-[#05080F]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.10]" />

      {/* Large ghost number in background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
      >
        <span className="text-[28vw] font-black leading-none tracking-tighter text-white/[0.025]">
          ∞
        </span>
      </div>

      {/* Parallax blobs — warm orange tones */}
      <div id="hero-blob-1" className="absolute left-1/4 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/12 blur-[180px]" />
      <div id="hero-blob-2" className="absolute right-1/5 top-2/3 h-[450px] w-[450px] rounded-full bg-orange-600/8 blur-[140px]" />
      <div id="hero-blob-3" className="absolute left-2/3 top-1/4 h-[350px] w-[350px] rounded-full bg-brand-400/6 blur-[120px]" />

      {/* Diagonal line accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute -right-20 top-0 h-full w-1/2" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <line x1="380" y1="0" x2="20" y2="800" stroke="url(#lineGrad)" strokeWidth="0.5" />
          <line x1="340" y1="0" x2="0" y2="700" stroke="url(#lineGrad)" strokeWidth="0.3" />
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#F5501E" stopOpacity="0" />
              <stop offset="40%" stopColor="#F5501E" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F5501E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <IptLogo height={36} variant="light" />
        <LokLogo height={20} variant="orange" />
      </header>

      {/* Hero content */}
      <div
        id="hero-content"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-28 pt-4 text-center sm:px-8"
      >
        {/* Badge */}
        <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-brand-500/25 bg-brand-950/60 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-300 backdrop-blur-sm shadow-lg shadow-brand-500/10">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
          </span>
          {hero.badge}
        </div>

        {/* H1 — line 1 filled white, line 2 outline brand */}
        <h1 className="mb-8 max-w-5xl text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
          <span className="block">{hero.headline_line1}</span>
          <span className="block text-outline-brand">{hero.headline_line2}</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-12 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
          {hero.subheadline}
        </p>

        {/* CTA — animated gradient border */}
        <div className="btn-gradient-border rounded-xl">
          <Link
            href="#registro"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-[#05080F] px-9 py-4 text-sm font-black uppercase tracking-[0.15em] text-white transition-all duration-200 hover:bg-brand-500 active:scale-95"
          >
            <span className="relative z-10">{hero.cta}</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gray-700">
          <span>Descubre más</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce opacity-50" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#05080F] to-transparent z-10" />
    </section>
  )
}

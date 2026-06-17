'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

const NAV_LINKS = [
  { label: 'Torneos', href: '#' },
  { label: 'Clubes', href: '#' },
  { label: 'Nosotros', href: '#' },
]

export function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { hero } = landing

  return (
    <section id="hero" className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      {/* Brand stripe top */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-500 z-30" />

      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#05080F] to-[#05080F]" />
      <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#05080F] to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#05080F] to-transparent z-[1]" />

      {/* Vertical grid lines — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden md:block z-[1]">
        <div className="absolute top-0 bottom-0 w-px bg-white/10" style={{ left: '25%' }} />
        <div className="absolute top-0 bottom-0 w-px bg-white/10" style={{ left: '50%' }} />
        <div className="absolute top-0 bottom-0 w-px bg-white/10" style={{ left: '75%' }} />
      </div>

      {/* Central glow ellipse */}
      <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none z-[1]">
        <svg width="1000" height="320" viewBox="0 0 1000 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ellipse-blur">
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>
          <ellipse cx="500" cy="120" rx="420" ry="90" fill="#a7fd7e" fillOpacity="0.05" filter="url(#ellipse-blur)" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#05080F_100%)] z-[1]" />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <IptLogo height={32} variant="light" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-condensed text-[13px] uppercase tracking-widest text-white/60 hover:text-brand-500 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LokLogo height={18} variant="white" />
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#05080F]/96 backdrop-blur-lg flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <IptLogo height={32} variant="light" />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-5xl uppercase text-white/80 hover:text-brand-500 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <Link
              href="#registro"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 font-condensed text-sm font-bold uppercase tracking-[0.15em] text-[#05080F] hover:bg-brand-400 transition-colors"
            >
              {hero.cta} <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-20 pt-8 text-center">

        {/* Liquid glass card */}
        <div className="glass-card mb-8 flex flex-col justify-between p-5 w-[200px] h-[200px] text-left">
          <div className="font-condensed text-[11px] uppercase tracking-[0.2em] text-brand-500/70">
            [ TEMP 26/27 ]
          </div>
          <div>
            <div className="font-condensed text-[15px] font-bold text-white leading-snug mb-2">
              Organizado por<br />
              <em className="not-italic text-brand-500">Profesionales</em>
            </div>
            <div className="font-condensed text-[10px] text-white/45 leading-relaxed">
              El torneo de pádel más exclusivo de la temporada.
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-[11px] font-condensed font-semibold uppercase tracking-[0.3em] text-brand-400 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
          </span>
          {hero.badge}
        </div>

        {/* H1 */}
        <h1
          className="mb-0 max-w-6xl font-display uppercase leading-[0.88] tracking-wide text-white"
          style={{ fontSize: 'clamp(4.5rem, 14vw, 13rem)' }}
        >
          <span className="block">{hero.headline_line1}</span>
          <span className="block text-brand-500">{hero.headline_line2}</span>
        </h1>

        {/* Separator + description */}
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
          className="group inline-flex items-center gap-3 rounded-full bg-brand-500 px-10 py-4 font-condensed text-sm font-bold uppercase tracking-[0.2em] text-[#05080F] transition-all duration-200 hover:bg-brand-400 active:scale-95"
        >
          {hero.cta}
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Bottom brand bar */}
      <div className="relative z-10 flex items-center justify-center gap-8 border-t border-white/5 py-4">
        <span className="font-condensed text-[10px] uppercase tracking-[0.3em] text-gray-700">Patrocinador oficial</span>
        <LokLogo height={14} variant="white" />
        <div className="h-px w-8 bg-white/10" />
        <span className="font-condensed text-[10px] uppercase tracking-[0.3em] text-gray-700">Temporada 26/27</span>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { corporate } from '@/content/corporate'

export function Hero() {
  const { hero } = corporate

  return (
    <section className="noise-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">

      <div className="absolute inset-x-0 top-0 h-[3px] bg-vibora z-30" />

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1658723826297-fe4d1b1e6600?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[#05080F]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#05080F]/60 to-[#05080F]" />

      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.3" />
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 z-[1] -translate-x-1/2">
        <div className="h-[400px] w-[700px] rounded-full bg-vibora/[0.05] blur-[130px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,#05080F_95%)]" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <div className="flex flex-col">
          <span className="font-display text-[15px] font-bold uppercase tracking-tight text-white leading-none">INFINITY</span>
          <span className="font-display text-[9px] font-medium uppercase tracking-[0.45em] text-vibora leading-none mt-0.5">PADEL</span>
        </div>
        <Link
          href="#contacto"
          className="font-label text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white/80"
        >
          Contacto
        </Link>
      </header>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-0 text-center">

        <div className="mb-8 inline-flex items-center gap-2.5 border border-vibora/25 bg-vibora/[0.07] px-4 py-2">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vibora opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-vibora" />
          </span>
          <span className="font-label text-[11px] uppercase tracking-[0.3em] text-vibora">
            {hero.badge}
          </span>
        </div>

        <h1
          className="mb-6 font-display uppercase leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', fontWeight: 700 }}
        >
          <span className="block text-white">{hero.headline_line1}</span>
          <span className="block text-vibora">{hero.headline_line2}</span>
        </h1>

        <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
          {hero.description}
        </p>

        <Link
          href="#contacto"
          className="group inline-flex items-center gap-2.5 bg-vibora px-8 py-4 font-label text-[12px] font-bold uppercase tracking-[0.2em] text-[#05080F] transition-all duration-200 hover:brightness-110 active:scale-95"
        >
          {hero.cta}
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}

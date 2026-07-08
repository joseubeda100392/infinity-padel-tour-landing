import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

export function LokTourHero() {
  const { oneDayHero } = landing

  return (
    <section className="noise-overlay relative flex min-h-[75vh] flex-col overflow-hidden bg-[#05080F]">

      <div className="absolute inset-x-0 top-0 h-[3px] bg-bandeja z-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#05080F] to-[#05080F]" />

      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.3" />
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 z-[1] -translate-x-1/2">
        <div className="h-[300px] w-[700px] rounded-full bg-bandeja/[0.05] blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,#05080F_90%)]" />

      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-anek-label text-[11px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/70">
            <ArrowLeft size={12} />
            Volver
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <IptLogo height={28} variant="light" />
        </div>
        <LokLogo height={18} variant="white" />
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-0 text-center">

        <div className="mb-8 inline-flex items-center gap-3 border border-bandeja/30 bg-bandeja/[0.07] px-4 py-2.5">
          <LokLogo height={16} variant="white" />
          <div className="h-3 w-px bg-bandeja/30" />
          <span className="font-anek-label text-[11px] uppercase tracking-[0.3em] text-bandeja">
            {oneDayHero.eyebrow}
          </span>
        </div>

        <h1
          className="mb-6 font-display uppercase leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', fontWeight: 700 }}
        >
          <span className="block text-white">{oneDayHero.headline_line1}</span>
          <span className="block text-bandeja">{oneDayHero.headline_line2}</span>
        </h1>

        <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
          {oneDayHero.description}
        </p>

        <Link
          href="#lok-tour-form"
          className="group inline-flex items-center gap-2.5 bg-bandeja px-8 py-4 font-anek-label text-[12px] font-bold uppercase tracking-[0.2em] text-[#05080F] transition-all duration-200 hover:brightness-110 active:scale-95"
        >
          {oneDayHero.cta}
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}

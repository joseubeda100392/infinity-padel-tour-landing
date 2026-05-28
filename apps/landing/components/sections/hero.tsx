import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

export function Hero() {
  const { hero } = landing

  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden bg-[#05080F]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/30 via-transparent to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-[0.12]" />

      {/* Parallax blobs */}
      <div
        id="hero-blob-1"
        className="absolute left-1/3 top-1/4 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[160px]"
      />
      <div
        id="hero-blob-2"
        className="absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-brand-600/8 blur-[130px]"
      />
      <div
        id="hero-blob-3"
        className="absolute left-2/3 top-1/2 h-[300px] w-[300px] rounded-full bg-orange-400/6 blur-[100px]"
      />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Navbar bar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <IptLogo height={38} variant="light" />
        <LokLogo height={22} variant="orange" />
      </header>

      {/* Hero content */}
      <div
        id="hero-content"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-8 text-center sm:px-8"
      >
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-900/40 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-brand-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
          </span>
          {hero.badge}
        </div>

        {/* H1 */}
        <h1 className="mb-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tighter text-white sm:text-7xl xl:text-8xl">
          <span className="block">{hero.headline_line1}</span>
          <span className="block text-gradient-brand">{hero.headline_line2}</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-12 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg lg:text-xl">
          {hero.subheadline}
        </p>

        {/* CTA */}
        <Link
          href="#registro"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-brand-500 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-brand-500/30 transition-all duration-200 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-400/40 active:scale-95"
        >
          <span className="relative z-10">{hero.cta}</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </Link>

        {/* Scroll arrow */}
        <div className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-gray-600">
          <span>Descubre más</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#05080F] to-transparent" />
    </section>
  )
}

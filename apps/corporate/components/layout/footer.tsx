import Link from 'next/link'
import { corporate } from '@/content/corporate'

export function Footer() {
  const { footer } = corporate

  return (
    <footer className="relative bg-[#05080F] py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">

          <div className="flex flex-col items-center gap-1">
            <span className="font-display text-xl font-bold uppercase tracking-tight text-white">INFINITY</span>
            <span className="font-display text-[10px] font-medium uppercase tracking-[0.4em] text-vibora">PADEL</span>
          </div>

          <p className="font-label text-[11px] uppercase tracking-[0.2em] text-white/30">{footer.tagline}</p>

          <nav className="flex items-center gap-6 text-sm text-white/45">
            {footer.links.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-white/70">
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-white/30">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

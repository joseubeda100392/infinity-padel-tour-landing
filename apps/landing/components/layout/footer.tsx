import Link from 'next/link'
import { IptLogo } from '@/components/shared/ipt-logo'
import { LokLogo } from '@/components/shared/lok-logo'
import { landing } from '@/content/landing'

export function Footer() {
  const { footer } = landing

  return (
    <footer className="relative bg-[#05080F] py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logos */}
          <div className="flex flex-col items-center gap-3">
            <IptLogo height={36} variant="light" />
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <span>Patrocinado por</span>
              <LokLogo height={16} variant="orange" showLabel={false} />
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-brand-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-700">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

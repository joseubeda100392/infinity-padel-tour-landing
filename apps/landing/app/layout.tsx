import type { Metadata } from 'next'
import { Ubuntu, Ubuntu_Condensed, Bebas_Neue } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { landing } from '@/content/landing'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const ubuntuCondensed = Ubuntu_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ubuntu-condensed',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: landing.meta.title,
  description: landing.meta.description,
  openGraph: {
    title: landing.meta.title,
    description: landing.meta.description,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: landing.meta.title,
    description: landing.meta.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${ubuntu.variable} ${ubuntuCondensed.variable} ${bebasNeue.variable}`}>
      <body>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#0D1117',
              border: '1px solid #a7fd7e40',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}

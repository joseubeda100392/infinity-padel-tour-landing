import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { landing } from '@/content/landing'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
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
    <html lang="es" className={ubuntu.variable}>
      <body>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#0D1117',
              border: '1px solid rgba(0,251,159,0.25)',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}

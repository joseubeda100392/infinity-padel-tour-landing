import { ScrollFX } from '@/components/shared/scroll-fx'
import { LokTourHero } from '@/components/sections/lok-tour-hero'
import { LokTour } from '@/components/sections/lok-tour'
import { LokTourForm } from '@/components/sections/lok-tour-form'
import { Footer } from '@/components/layout/footer'

export const metadata = {
  title: 'LOK Pádel Tour — El circuito que recorre España',
  description: 'Torneos de 1-2 días en las mejores instalaciones del país. Formato Open para todos los niveles. Seis ciudades, una temporada.',
}

export default function LokPadelTourPage() {
  return (
    <>
      <ScrollFX />
      <main>
        <LokTourHero />
        <LokTour />
        <LokTourForm />
      </main>
      <Footer />
    </>
  )
}

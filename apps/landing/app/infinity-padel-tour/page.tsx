import { ScrollFX } from '@/components/shared/scroll-fx'
import { LokTourHero } from '@/components/sections/lok-tour-hero'
import { LokTour } from '@/components/sections/lok-tour'
import { LokTourForm } from '@/components/sections/lok-tour-form'
import { Footer } from '@/components/layout/footer'

export const metadata = {
  title: 'Infinity Padel Tour — One Day Experience',
  description: 'Torneos premium de un día en instalaciones de élite. Gastronomía, cuadros por nivel y una experiencia única.',
}

export default function InfinityPadelTourPage() {
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

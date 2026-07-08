import { ScrollFX } from '@/components/shared/scroll-fx'
import { EventosHero } from '@/components/sections/eventos-hero'
import { Eventos } from '@/components/sections/eventos'
import { EventoForm } from '@/components/sections/evento-form'
import { Footer } from '@/components/layout/footer'

export const metadata = {
  title: 'IPT Experience — Pádel premium',
  description: 'Torneos y experiencias exclusivas en instalaciones de élite. Gastronomía, formato único y un circuito diseñado para disfrutar.',
}

export default function IptExperiencePage() {
  return (
    <>
      <ScrollFX />
      <main>
        <EventosHero />
        <Eventos />
        <EventoForm />
      </main>
      <Footer />
    </>
  )
}

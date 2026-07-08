import { ScrollFX } from '@/components/shared/scroll-fx'
import { EventosHero } from '@/components/sections/eventos-hero'
import { Eventos } from '@/components/sections/eventos'
import { EventoForm } from '@/components/sections/evento-form'
import { Footer } from '@/components/layout/footer'

export const metadata = {
  title: 'Infinity Experience — Eventos de pádel exclusivos',
  description: 'Diseñamos experiencias únicas de pádel para grupos, empresas y ocasiones especiales. Cada evento es completamente personalizado.',
}

export default function InfinityExperiencePage() {
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

import { ScrollFX } from '@/components/shared/scroll-fx'
import { Marquee } from '@/components/shared/marquee'
import { Hero } from '@/components/sections/hero'
import { Liga } from '@/components/sections/liga'
import { LigaForm } from '@/components/sections/liga-form'
import { Eventos } from '@/components/sections/eventos'
import { EventoForm } from '@/components/sections/evento-form'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <>
      <ScrollFX />
      <main>
        <Hero />
        <Marquee />
        <Liga />
        <LigaForm />
        <Eventos />
        <EventoForm />
      </main>
      <Footer />
    </>
  )
}

import { ScrollFX } from '@/components/shared/scroll-fx'
import { LigaHero } from '@/components/sections/liga-hero'
import { Liga } from '@/components/sections/liga'
import { LigaForm } from '@/components/sections/liga-form'
import { Footer } from '@/components/layout/footer'

export const metadata = {
  title: 'Liga Infinity Padel Tour — Compite cada semana',
  description: 'Inscríbete en la liga de pádel más innovadora. Grupos por nivel, jornadas semanales y estadísticas en tiempo real.',
}

export default function LigaPage() {
  return (
    <>
      <ScrollFX />
      <main>
        <LigaHero />
        <Liga />
        <div id="liga-form">
          <LigaForm />
        </div>
      </main>
      <Footer />
    </>
  )
}

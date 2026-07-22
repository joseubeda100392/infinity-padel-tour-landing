import { ScrollFX } from '@/components/shared/scroll-fx'
import { LigaEmpresasHero } from '@/components/sections/liga-empresas-hero'
import { LigaEmpresas } from '@/components/sections/liga-empresas'
import { LigaEmpresasForm } from '@/components/sections/liga-empresas-form'
import { Footer } from '@/components/layout/footer'

export const metadata = {
  title: 'Liga de Empresas — Infinity Padel by LOK',
  description: 'Una liga de pádel organizada para equipos de empresa. Jornadas semanales, grupos por nivel y gestión total incluida.',
}

export default function LigaEmpresasPage() {
  return (
    <>
      <ScrollFX />
      <main>
        <LigaEmpresasHero />
        <LigaEmpresas />
        <LigaEmpresasForm />
      </main>
      <Footer />
    </>
  )
}

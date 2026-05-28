import { ScrollFX } from '@/components/shared/scroll-fx'
import { Marquee } from '@/components/shared/marquee'
import { Hero } from '@/components/sections/hero'
import { Statement } from '@/components/sections/statement'
import { Teaser } from '@/components/sections/teaser'
import { RegisterForm } from '@/components/sections/register-form'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <>
      <ScrollFX />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Teaser />
        <RegisterForm />
      </main>
      <Footer />
    </>
  )
}

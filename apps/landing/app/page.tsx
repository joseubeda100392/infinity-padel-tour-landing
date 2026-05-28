import { ScrollFX } from '@/components/shared/scroll-fx'
import { Hero } from '@/components/sections/hero'
import { Teaser } from '@/components/sections/teaser'
import { RegisterForm } from '@/components/sections/register-form'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <>
      <ScrollFX />
      <main>
        <Hero />
        <Teaser />
        <RegisterForm />
      </main>
      <Footer />
    </>
  )
}

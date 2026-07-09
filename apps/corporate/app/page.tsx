import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { WhyPadel } from '@/components/sections/why-padel'
import { Experience } from '@/components/sections/experience'
import { TourHook } from '@/components/sections/tour-hook'
import { ContactForm } from '@/components/sections/contact-form'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyPadel />
      <Experience />
      <TourHook />
      <ContactForm />
      <Footer />
    </main>
  )
}

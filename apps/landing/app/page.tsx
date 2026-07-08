import { ScrollFX } from '@/components/shared/scroll-fx'
import { Marquee } from '@/components/shared/marquee'
import { Hub } from '@/components/sections/hub'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <>
      <ScrollFX />
      <main>
        <Hub />
        <Marquee />
      </main>
      <Footer />
    </>
  )
}

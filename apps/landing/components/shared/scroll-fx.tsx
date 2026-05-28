'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function ScrollFX() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>('#hero')
      if (!hero) return

      ;[
        { id: '#hero-blob-1', y: '-40%' },
        { id: '#hero-blob-2', y: '-22%' },
        { id: '#hero-blob-3', y: '-32%' },
      ].forEach(({ id, y }) => {
        const el = hero.querySelector(id)
        if (el) {
          gsap.to(el, {
            y,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
          })
        }
      })

      const heroContent = hero.querySelector('#hero-content')
      if (heroContent) {
        gsap.to(heroContent, {
          y: '-10%',
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 2 },
        })
      }

      const heroMockup = hero.querySelector('#hero-mockup')
      if (heroMockup) {
        gsap.to(heroMockup, {
          y: '-18%',
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.5 },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return null
}

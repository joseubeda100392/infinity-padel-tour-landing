'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function DarkGlowCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--glow-x', '-999px')
    el.style.setProperty('--glow-y', '-999px')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('dark-glow-card cursor-pointer', className)}
    >
      {children}
    </div>
  )
}

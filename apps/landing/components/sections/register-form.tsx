'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Loader2, CheckCircle2, Lock, BellRing, BadgePercent } from 'lucide-react'
import { LokBadge } from '@/components/shared/lok-logo'
import { RevealOnScroll } from '@/components/shared/reveal-on-scroll'
import { landing } from '@/content/landing'
import { cn } from '@/lib/utils'

const schema = z.object({
  name:    z.string().min(2, 'Introduce tu nombre completo'),
  email:   z.string().email('Email no válido'),
  club:    z.string().min(2, 'Introduce el nombre de tu club'),
  phone:   z.string().min(9, 'Teléfono no válido'),
  honeypot: z.string().max(0),
})

type FormData = z.infer<typeof schema>

const TRUST_ITEMS = [
  { icon: BadgePercent, label: '10% descuento garantizado' },
  { icon: BellRing,    label: 'Primero en recibir novedades' },
  { icon: Lock,        label: 'Sin spam. Sin compromisos.' },
]

export function RegisterForm() {
  const { register: reg } = landing
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { honeypot: '' } })

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, club: data.club, phone: data.phone }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      toast.success(reg.success_title, { description: reg.success_message })
    } catch {
      toast.error('Algo ha fallado. Inténtalo de nuevo.')
    }
  }

  return (
    <section id="registro" className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
      {/* Central glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/7 blur-[180px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-2xl px-4 sm:px-6">

        {/* Header */}
        <RevealOnScroll className="mb-10 text-center">
          <LokBadge className="mb-6" />
          <h2
            className="font-display uppercase leading-[0.9] tracking-wide text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {reg.headline}
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base [&_strong]:font-bold [&_strong]:text-brand-400"
            dangerouslySetInnerHTML={{ __html: reg.subheadline }}
          />

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-gray-600">
                <Icon className="h-3.5 w-3.5 flex-shrink-0 text-brand-500/70" />
                {label}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {submitted ? (
          <RevealOnScroll>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/6 p-12 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15 ring-1 ring-brand-500/30">
                <CheckCircle2 className="h-8 w-8 text-brand-400" />
              </div>
              <h3 className="mb-2 text-2xl font-black text-white">{reg.success_title}</h3>
              <p className="text-gray-500">{reg.success_message}</p>
            </div>
          </RevealOnScroll>
        ) : (
          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-white/7 bg-white/[0.025] p-8 backdrop-blur-sm"
            >
              <input {...register('honeypot')} type="text" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Name */}
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500">
                  {reg.fields.name}
                </label>
                <input
                  {...register('name')}
                  placeholder="Pedro Sánchez"
                  className={cn(
                    'w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition-all focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-500/20',
                    errors.name ? 'border-red-500/50' : 'border-white/8'
                  )}
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500">
                  {reg.fields.email}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="pedro@ejemplo.com"
                  className={cn(
                    'w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition-all focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-500/20',
                    errors.email ? 'border-red-500/50' : 'border-white/8'
                  )}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
              </div>

              {/* Club + Phone */}
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {reg.fields.club}
                  </label>
                  <input
                    {...register('club')}
                    placeholder="Club Pádel Madrid"
                    className={cn(
                      'w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition-all focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-500/20',
                      errors.club ? 'border-red-500/50' : 'border-white/8'
                    )}
                  />
                  {errors.club && <p className="mt-1 text-xs text-red-400">{errors.club.message}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {reg.fields.phone}
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+34 600 000 000"
                    className={cn(
                      'w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition-all focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-brand-500/20',
                      errors.phone ? 'border-red-500/50' : 'border-white/8'
                    )}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-xl bg-brand-500 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-400/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    <span className="relative z-10">{reg.cta}</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-gray-700">{reg.legal}</p>
            </form>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

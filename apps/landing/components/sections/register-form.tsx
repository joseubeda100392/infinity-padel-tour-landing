'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { LokBadge } from '@/components/shared/lok-logo'
import { RevealOnScroll } from '@/components/shared/reveal-on-scroll'
import { landing } from '@/content/landing'
import { cn } from '@/lib/utils'

const schema = z.object({
  name:  z.string().min(2, 'Introduce tu nombre completo'),
  email: z.string().email('Email no válido'),
  club:  z.string().min(2, 'Introduce el nombre de tu club'),
  phone: z.string().min(9, 'Teléfono no válido'),
  honeypot: z.string().max(0),
})

type FormData = z.infer<typeof schema>

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
        body: JSON.stringify({
          name:  data.name,
          email: data.email,
          club:  data.club,
          phone: data.phone,
        }),
      })

      if (!res.ok) throw new Error('Error al registrar')

      setSubmitted(true)
      toast.success(reg.success_title, { description: reg.success_message })
    } catch {
      toast.error('Algo ha fallado. Inténtalo de nuevo.')
    }
  }

  return (
    <section id="registro" className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
      {/* Glow radial naranja detrás del form */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/8 blur-[160px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-2xl px-4 sm:px-6">
        <RevealOnScroll className="mb-10 text-center">
          <LokBadge className="mb-5" />
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {reg.headline}
          </h2>
          <p
            className="mt-4 text-base text-gray-400 sm:text-lg"
            dangerouslySetInnerHTML={{ __html: reg.subheadline }}
          />
        </RevealOnScroll>

        {submitted ? (
          <RevealOnScroll>
            <div className="rounded-2xl border border-brand-500/30 bg-brand-500/8 p-10 text-center">
              <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-brand-400" />
              <h3 className="mb-2 text-2xl font-black text-white">{reg.success_title}</h3>
              <p className="text-gray-400">{reg.success_message}</p>
            </div>
          </RevealOnScroll>
        ) : (
          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 rounded-2xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm"
            >
              {/* Honeypot */}
              <input {...register('honeypot')} type="text" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Name */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-300">
                  {reg.fields.name}
                </label>
                <input
                  {...register('name')}
                  placeholder="Pedro Sánchez"
                  className={cn(
                    'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30',
                    errors.name ? 'border-red-500/60' : 'border-white/10'
                  )}
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-300">
                  {reg.fields.email}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="pedro@ejemplo.com"
                  className={cn(
                    'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30',
                    errors.email ? 'border-red-500/60' : 'border-white/10'
                  )}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
              </div>

              {/* Club + Phone row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-300">
                    {reg.fields.club}
                  </label>
                  <input
                    {...register('club')}
                    placeholder="Club Pádel Madrid"
                    className={cn(
                      'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30',
                      errors.club ? 'border-red-500/60' : 'border-white/10'
                    )}
                  />
                  {errors.club && <p className="mt-1 text-xs text-red-400">{errors.club.message}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-300">
                    {reg.fields.phone}
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+34 600 000 000"
                    className={cn(
                      'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30',
                      errors.phone ? 'border-red-500/60' : 'border-white/10'
                    )}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative mt-2 w-full overflow-hidden rounded-xl bg-brand-500 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-400/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    <span className="relative z-10">{reg.cta}</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-relaxed text-gray-600">{reg.legal}</p>
            </form>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

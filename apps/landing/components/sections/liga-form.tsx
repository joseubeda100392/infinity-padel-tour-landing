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
  nombre:    z.string().min(2, 'Introduce tu nombre completo'),
  email:     z.string().email('Email no válido'),
  telefono:  z.string().min(9, 'Teléfono no válido'),
  club:      z.string().min(2, 'Introduce el nombre de tu club'),
  nivel:     z.string().min(1, 'Selecciona tu nivel'),
  categoria: z.string().min(1, 'Selecciona una categoría'),
  honeypot:  z.string().max(0),
})

type FormData = z.infer<typeof schema>

const INPUT_CLASS = 'w-full border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all focus:bg-white/[0.06] focus:ring-1'
const INPUT_OK    = 'border-white/10 focus:border-vibora/50 focus:ring-vibora/20'
const INPUT_ERR   = 'border-red-500/50'
const LABEL_CLASS = 'mb-1.5 block font-anek-label text-[10px] uppercase tracking-[0.25em] text-white/40'

export function LigaForm() {
  const { ligaForm } = landing
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { honeypot: '' },
  })

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre:    data.nombre,
          email:     data.email,
          telefono:  data.telefono,
          club:      data.club,
          nivel:     data.nivel,
          categoria: data.categoria,
          type:      'liga',
        }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      toast.success(ligaForm.success_title, { description: ligaForm.success_message })
    } catch {
      toast.error('Algo ha fallado. Inténtalo de nuevo.')
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
      {/* Vibora glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-vibora/[0.04] blur-[160px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibora/20 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-2xl px-4 sm:px-6">

        <RevealOnScroll className="mb-10 text-center">
          <span className="mb-4 block font-anek-label text-[11px] uppercase tracking-[0.3em] text-vibora">
            {ligaForm.eyebrow}
          </span>
          <h2
            className="mb-4 font-display text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, fontStretch: '105%' }}
          >
            {ligaForm.headline}
          </h2>
          <p className="text-sm leading-relaxed text-white/40">
            {ligaForm.subheadline}
          </p>
          <div className="mt-6 flex justify-center">
            <LokBadge />
          </div>
        </RevealOnScroll>

        {submitted ? (
          <RevealOnScroll>
            <div className="border border-vibora/20 bg-vibora/[0.05] p-12 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center border border-vibora/30 bg-vibora/10">
                <CheckCircle2 className="h-8 w-8 text-vibora" />
              </div>
              <h3
                className="mb-2 font-display text-white"
                style={{ fontSize: '1.5rem', fontWeight: 800 }}
              >
                {ligaForm.success_title}
              </h3>
              <p className="text-sm text-white/40">{ligaForm.success_message}</p>
            </div>
          </RevealOnScroll>
        ) : (
          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-white/[0.07] bg-white/[0.02] p-8"
            >
              <input {...register('honeypot')} type="text" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Nombre */}
              <div className="mb-4">
                <label className={LABEL_CLASS}>{ligaForm.fields.nombre}</label>
                <input
                  {...register('nombre')}
                  placeholder="Pedro García"
                  className={cn(INPUT_CLASS, errors.nombre ? INPUT_ERR : INPUT_OK)}
                />
                {errors.nombre && <p className="mt-1 text-xs text-red-400">{errors.nombre.message}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className={LABEL_CLASS}>{ligaForm.fields.email}</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="pedro@ejemplo.com"
                  className={cn(INPUT_CLASS, errors.email ? INPUT_ERR : INPUT_OK)}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
              </div>

              {/* Teléfono + Club */}
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={LABEL_CLASS}>{ligaForm.fields.telefono}</label>
                  <input
                    {...register('telefono')}
                    type="tel"
                    placeholder="+34 600 000 000"
                    className={cn(INPUT_CLASS, errors.telefono ? INPUT_ERR : INPUT_OK)}
                  />
                  {errors.telefono && <p className="mt-1 text-xs text-red-400">{errors.telefono.message}</p>}
                </div>
                <div>
                  <label className={LABEL_CLASS}>{ligaForm.fields.club}</label>
                  <input
                    {...register('club')}
                    placeholder="Club Pádel Madrid"
                    className={cn(INPUT_CLASS, errors.club ? INPUT_ERR : INPUT_OK)}
                  />
                  {errors.club && <p className="mt-1 text-xs text-red-400">{errors.club.message}</p>}
                </div>
              </div>

              {/* Nivel + Categoría */}
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={LABEL_CLASS}>{ligaForm.fields.nivel}</label>
                  <select
                    {...register('nivel')}
                    className={cn(INPUT_CLASS, 'cursor-pointer appearance-none', errors.nivel ? INPUT_ERR : INPUT_OK)}
                  >
                    <option value="" className="bg-[#0D1117]">Selecciona nivel</option>
                    {ligaForm.nivelOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0D1117]">{opt}</option>
                    ))}
                  </select>
                  {errors.nivel && <p className="mt-1 text-xs text-red-400">{errors.nivel.message}</p>}
                </div>
                <div>
                  <label className={LABEL_CLASS}>{ligaForm.fields.categoria}</label>
                  <select
                    {...register('categoria')}
                    className={cn(INPUT_CLASS, 'cursor-pointer appearance-none', errors.categoria ? INPUT_ERR : INPUT_OK)}
                  >
                    <option value="" className="bg-[#0D1117]">Selecciona categoría</option>
                    {ligaForm.categoriaOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0D1117]">{opt}</option>
                    ))}
                  </select>
                  {errors.categoria && <p className="mt-1 text-xs text-red-400">{errors.categoria.message}</p>}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden bg-vibora py-4 font-anek-label text-[12px] uppercase tracking-[0.2em] text-[#05080F] shadow-lg shadow-vibora/20 transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    <span className="relative z-10 font-bold">{ligaForm.cta}</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-white/20">{ligaForm.legal}</p>
            </form>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle } from 'lucide-react'
import { corporate } from '@/content/corporate'

const schema = z.object({
  nombre: z.string().min(2, 'Mínimo 2 caracteres'),
  empresa: z.string().min(2, 'Mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(9, 'Teléfono inválido'),
  servicio: z.string().min(1, 'Selecciona un servicio'),
  mensaje: z.string().optional(),
  _honey: z.string().max(0),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const { contact } = corporate
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { _honey: '' },
  })

  async function onSubmit(data: FormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'empresa' }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="contacto" className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibora/15 to-transparent" />
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <CheckCircle className="mx-auto mb-6 text-vibora" size={48} />
          <h2 className="mb-3 font-display text-2xl font-bold uppercase text-white">
            Mensaje enviado
          </h2>
          <p className="text-white/55">En breve nos ponemos en contacto contigo.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-[#05080F] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vibora/15 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-vibora/[0.04] blur-[150px]" />

      <div className="relative z-10 container mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="mb-4 block font-label text-[11px] uppercase tracking-[0.3em] text-vibora">
            {contact.eyebrow}
          </span>
          <h2
            className="font-display text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700 }}
          >
            {contact.headline}
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <input type="text" {...register('_honey')} className="hidden" tabIndex={-1} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nombre" error={errors.nombre?.message}>
              <input
                {...register('nombre')}
                placeholder={contact.fields.nombre}
                className={inputClass(!!errors.nombre)}
              />
            </Field>
            <Field label="Empresa" error={errors.empresa?.message}>
              <input
                {...register('empresa')}
                placeholder={contact.fields.empresa}
                className={inputClass(!!errors.empresa)}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Email" error={errors.email?.message}>
              <input
                {...register('email')}
                type="email"
                placeholder={contact.fields.email}
                className={inputClass(!!errors.email)}
              />
            </Field>
            <Field label="Teléfono" error={errors.telefono?.message}>
              <input
                {...register('telefono')}
                type="tel"
                placeholder={contact.fields.telefono}
                className={inputClass(!!errors.telefono)}
              />
            </Field>
          </div>

          <Field label="Servicio de interés" error={errors.servicio?.message}>
            <select {...register('servicio')} className={inputClass(!!errors.servicio)}>
              <option value="">— Selecciona un servicio —</option>
              {contact.servicioOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </Field>

          <Field label="Mensaje (opcional)" error={undefined}>
            <textarea
              {...register('mensaje')}
              placeholder={contact.fields.mensaje}
              rows={4}
              className={`${inputClass(false)} resize-none`}
            />
          </Field>

          {status === 'error' && (
            <p className="font-label text-[11px] uppercase tracking-[0.15em] text-red-400">
              Error al enviar. Inténtalo de nuevo.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-2 flex w-full items-center justify-center gap-2.5 bg-vibora py-4 font-label text-[12px] font-bold uppercase tracking-[0.2em] text-[#05080F] transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-50"
          >
            {status === 'loading' ? (
              <><Loader2 size={14} className="animate-spin" /> Enviando...</>
            ) : contact.cta}
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-label text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</label>
      {children}
      {error && <p className="font-label text-[10px] text-red-400/80">{error}</p>}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return [
    'w-full bg-white/[0.04] px-4 py-3 font-body text-sm text-white placeholder-white/25',
    'border transition-colors duration-150 outline-none',
    'focus:border-vibora/60 focus:bg-white/[0.06]',
    hasError ? 'border-red-400/40' : 'border-white/10',
  ].join(' ')
}

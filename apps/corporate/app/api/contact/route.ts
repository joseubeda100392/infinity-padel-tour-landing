import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  nombre: z.string().min(2),
  empresa: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(9),
  servicio: z.string().min(1),
  mensaje: z.string().optional(),
  type: z.literal('empresa'),
  _honey: z.string().max(0),
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }

  const data = result.data

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: data.type,
        nombre: data.nombre,
        empresa: data.empresa,
        email: data.email,
        telefono: data.telefono,
        servicio: data.servicio,
        mensaje: data.mensaje ?? '',
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {})
  }

  return NextResponse.json({ ok: true })
}

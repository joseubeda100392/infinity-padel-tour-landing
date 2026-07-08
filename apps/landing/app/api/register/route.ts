import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  nombre:     z.string().min(2),
  email:      z.string().email(),
  telefono:   z.string().min(9),
  club:       z.string().min(2).optional(),
  nivel:      z.string().min(2).optional(),
  categoria:  z.string().min(2).optional(),
  ciudad:     z.string().min(2).optional(),
  comentario: z.string().optional(),
  type:       z.enum(['liga', 'evento', 'tour']).default('liga'),
})

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL!

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    if (!WEBHOOK_URL) {
      console.error('Missing GOOGLE_SHEETS_WEBHOOK_URL')
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: err.errors }, { status: 422 })
    }
    console.error('Register error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

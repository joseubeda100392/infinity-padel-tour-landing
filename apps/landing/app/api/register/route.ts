import { NextResponse } from 'next/server'
import { z } from 'zod'
import { google } from 'googleapis'

const schema = z.object({
  name:  z.string().min(2),
  email: z.string().email(),
  club:  z.string().min(2),
  phone: z.string().min(9),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const sheetId    = process.env.GOOGLE_SHEETS_ID
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey  = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

    if (!sheetId || !clientEmail || !privateKey) {
      console.error('Missing Google Sheets env vars')
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Leads!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          data.name,
          data.email,
          data.club,
          data.phone,
          'infinity-padel-tour-landing',
        ]],
      },
    })

    // Optional email notification
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'Infinity Padel Tour <noreply@infinitypadeltourbylok.com>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `Nuevo lead: ${data.name}`,
          html: `<p><b>Nombre:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Club:</b> ${data.club}</p><p><b>Teléfono:</b> ${data.phone}</p>`,
        })
      } catch (e) {
        console.error('Resend error (non-fatal):', e)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: err.errors }, { status: 422 })
    }
    console.error('Register error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

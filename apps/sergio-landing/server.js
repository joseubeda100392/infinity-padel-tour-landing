const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL

app.use(express.json())
app.use(express.static(__dirname, { extensions: ['html'] }))

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

app.post('/api/lead', async (req, res) => {
  const { nombre, email, telefono, nivel, utm_source, utm_medium, utm_campaign, utm_content } = req.body || {}

  if (!nombre || !email || !telefono || nivel === undefined || nivel === '') {
    return res.status(400).json({ success: false, error: 'Faltan campos obligatorios.' })
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: 'El email no es válido.' })
  }

  if (!SHEETS_WEBHOOK_URL) {
    console.error('SHEETS_WEBHOOK_URL no configurada; lead recibido pero no guardado en Sheets:', { nombre, email })
    return res.json({ success: true })
  }

  // Reenvío a Google Sheets vía Apps Script Web App. Fire-and-forget: un fallo
  // aquí no debe impedir que el lead vea la confirmación (se registra el error
  // para revisión manual, igual que en el resto de landings del estudio).
  //
  // redirect:'manual' es obligatorio aquí: Apps Script responde con un 302 a
  // una URL de script.googleusercontent.com para entregar el resultado, y el
  // comportamiento estándar de fetch ante un 302 es reintentar como GET sin
  // cuerpo — perdiendo el payload. El doPost ya se ejecutó (y ya escribió la
  // fila) al recibir la petición original, así que un 302 aquí ES el éxito.
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)
    const response = await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, telefono, nivel, utm_source, utm_medium, utm_campaign, utm_content }),
      redirect: 'manual',
      signal: controller.signal
    })
    clearTimeout(timeout)
    if (response.status !== 302 && !response.ok) {
      console.error('Google Sheets webhook respondió con error HTTP', response.status)
    }
  } catch (err) {
    console.error('Error guardando lead en Google Sheets:', err.message)
  }

  res.json({ success: true })
})

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`sergio-landing on port ${PORT}`)
})

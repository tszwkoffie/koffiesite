import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// The static site is hosted on www.tszw.nl (GitHub Pages) and posts here
// cross-origin, so we need permissive CORS headers.
const ALLOWED_ORIGINS = ["https://www.tszw.nl", "https://tszw.nl", "http://localhost:3000"]

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin")),
  })
}

export async function POST(request: Request) {
  const headers = corsHeaders(request.headers.get("origin"))

  try {
    const { name, email, model, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: "Naam, e-mailadres en omschrijving zijn verplicht." },
        { status: 400, headers },
      )
    }

    const subject = `Reparatieaanvraag Jura${model ? ` - ${model}` : ""}`

    const { error } = await resend.emails.send({
      from: "Website TSZW <noreply@tszw.nl>",
      to: ["info@tszw.nl"],
      replyTo: email,
      subject,
      text: [
        `Naam: ${name}`,
        `E-mail: ${email}`,
        `Type Jura machine: ${model || "-"}`,
        "",
        "Omschrijving van de klacht:",
        message,
      ].join("\n"),
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return Response.json(
        { error: "Versturen mislukt. Probeer het later opnieuw." },
        { status: 502, headers },
      )
    }

    return Response.json({ success: true }, { headers })
  } catch (err) {
    console.log("[v0] Contact route error:", err)
    return Response.json({ error: "Er ging iets mis." }, { status: 500, headers })
  }
}

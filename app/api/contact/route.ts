import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, mensaje } = await req.json();

    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json({ error: "Completa todos los campos." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!, // no-reply@amazingnailshn.com
      to: [process.env.CONTACT_TO_EMAIL!],   // tu correo destino
      replyTo: email,
      subject: `Nuevo contacto - ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde AmazingNailsHN</h2>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${telefono}</p>
        <p><b>Mensaje:</b><br/>${String(mensaje).replaceAll("\n", "<br/>")}</p>
      `,
    });

    if (error) return NextResponse.json({ error: "Resend no pudo enviar el correo." }, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }
}

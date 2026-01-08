import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, mensaje } = await req.json();

    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json({ error: "Completa todos los campos." }, { status: 400 });
    }
// Helper para evitar inyección HTML en correos
      function escapeHtml(str = "") {
        return String(str)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");
      }
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!, // no-reply@amazingnailshn.com
      to: [process.env.CONTACT_TO_EMAIL!],   // tu correo destino
      replyTo: email,
      subject: `Nuevo contacto - ${nombre}`,
      html: `
      <div style="margin:0;padding:0;background:#f6f7fb;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f7fb;padding:24px 0;">
      <tr>
        <td align="center" style="padding:0 12px;">
          
          <!-- Container -->
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ececf3;">
            
            <!-- Header -->
            <tr>
              <td style="padding:20px 22px;background:#111827;color:#ffffff;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:800;letter-spacing:.2px;">
                  Amazing Nails HN
                </div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;opacity:.85;margin-top:4px;">
                  Nuevo mensaje desde el formulario web
                </div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:22px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;line-height:1.55;">
                  <h2 style="margin:0 0 14px;font-size:18px;line-height:1.2;">
                    📩 Nuevo mensaje recibido
                  </h2>

                  <!-- Summary chips -->
                  <div style="margin:0 0 16px;">
                    <span style="display:inline-block;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:999px;padding:6px 10px;font-size:12px;color:#374151;margin-right:8px;">
                      Sitio: AmazingNailsHN
                    </span>
                    <span style="display:inline-block;background:#fff1f2;border:1px solid #fecdd3;border-radius:999px;padding:6px 10px;font-size:12px;color:#9f1239;">
                      Contacto
                    </span>
                  </div>

                  <!-- Info grid -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;">
                    <tr>
                      <td style="width:140px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                        Nombre
                      </td>
                      <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;font-weight:700;">
                        ${escapeHtml(nombre)}
                      </td>
                    </tr>

                    <tr>
                      <td style="width:140px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                        Email
                      </td>
                      <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;">
                        <a href="mailto:${encodeURIComponent(email)}" style="color:#2563eb;text-decoration:none;font-weight:700;">
                          ${escapeHtml(email)}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td style="width:140px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                        Teléfono
                      </td>
                      <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;">
                        <a href="tel:${escapeHtml(telefono)}" style="color:#111827;text-decoration:none;font-weight:700;">
                          ${escapeHtml(telefono)}
                        </a>
                      </td>
                    </tr>
                  </table>

                  <!-- Message box -->
                  <div style="margin-top:16px;border:1px solid #e5e7eb;border-radius:14px;background:#fafafa;">
                    <div style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                      Mensaje
                    </div>
                    <div style="padding:14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;line-height:1.6;white-space:normal;">
                      ${escapeHtml(String(mensaje)).replaceAll("\n", "<br/>")}
                    </div>
                  </div>

                  <!-- CTA -->
                  <div style="margin-top:18px;padding:14px;border-radius:14px;background:#ecfeff;border:1px solid #a5f3fc;">
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#0e7490;">
                      Sugerencia rápida: responde este correo o escribe por WhatsApp al número del cliente.
                    </div>
                  </div>

                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 22px;background:#f9fafb;border-top:1px solid #ececf3;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#6b7280;line-height:1.5;">
                  Este mensaje fue enviado desde el formulario de contacto de <b>Amazing Nails HN</b>.<br/>
                  © ${new Date().getFullYear()} Amazing Nails HN
                </div>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
      `,
    });

    if (error) return NextResponse.json({ error: "Resend no pudo enviar el correo." }, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }
}

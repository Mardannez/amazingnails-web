"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { MapEmbed } from "@/components/MapEmbed";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          telefono: formData.phone,
          mensaje: formData.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({
          type: "error",
          message: data?.error || "No se pudo enviar. Intenta de nuevo.",
        });
        return;
      }

      setStatus({ type: "success", message: "¡Mensaje enviado! Te contactaremos pronto ✅" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus({ type: "error", message: "Error de red. Revisa tu conexión e intenta de nuevo." });
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Contacto
          </p>
          <h2
            className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Haz cualquier consulta
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos aquí para atenderte. Contáctanos y agenda tu próxima visita.
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn direction="right" className="space-y-6">
            <Card className="border-border bg-white">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+ (504) 9785-3565"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="¿Qué información necesitas?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {status.type === "success" && (
                    <p className="text-sm font-medium text-green-700">{status.message}</p>
                  )}
                  {status.type === "error" && (
                    <p className="text-sm font-medium text-red-600">{status.message}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {status.type === "loading" ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Tu lado derecho lo dejo igual */}
          <FadeIn direction="left" delay={200} className="space-y-6">
            <Card className="border-border bg-white">
              <CardContent className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-sm text-muted-foreground">
                      Barrio el Centro, calle Vicente Williams, Plaza Isabelle
                      <br />
                      Choluteca, Choluteca
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">+504 9774-3957</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">info@amazingnailshn.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horario</h3>
                    <p className="text-sm text-muted-foreground">
                      Lunes - Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábado: 9:00 AM - 2:00 PM
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
              <MapEmbed />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

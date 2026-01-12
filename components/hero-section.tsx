'use client';
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import Link from "next/link";
export function HeroSection() {
 const goToServicios = () => {
    const el = document.getElementById("servicios");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn direction="right">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-medium">Belleza y Elegancia</span>
                </div>
                <h1
                  className="font-serif text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Manicura Profesional, transforma tus uñas en obras de arte
                </h1>
                <p className="text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
                  Experimenta el lujo y la profesionalidad en cada servicio. Nuestro salón ofrece manicura y pedicura de
                  alta calidad con productos premium.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
               <Button
                  asChild
                  variant="outline"
                  className="
                    w-full
                    h-10
                    rounded-xl
                    text-base
                    justify-center
                    bg-transparent
                    border
                    hover:bg-primary/10
                    bg-primary text-primary-foreground hover:bg-primary/10
                  "
                >
                  <Link
                    href="https://agendamientocitas.amazingnailshn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    Reservar Cita
                  </Link>
                </Button>
              
                <Button size="lg" variant="outline" onClick={goToServicios} >
                  Ver Servicios
                </Button>
                
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-secondary">
                <img
                  src="/elegant-nail-salon-manicure-hands-with-beautiful-n.jpg"
                  alt="Manicura profesional"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-6 shadow-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="h-10 w-10 rounded-full bg-accent border-2 border-card" />
                    <div className="h-10 w-10 rounded-full bg-primary border-2 border-card" />
                    <div className="h-10 w-10 rounded-full bg-secondary border-2 border-card" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">100+ Clientas</p>
                    <p className="text-xs text-muted-foreground">Satisfechas</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

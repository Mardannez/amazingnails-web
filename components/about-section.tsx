import { Heart, Award, Users } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn direction="right" className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary">
              <img
                src="/professional-nail-technician-working-in-elegant-sa.jpg"
                alt="Nuestro salón"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200} className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Quiénes Somos</p>
              <h2
                className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Pasión por la belleza y el cuidado de tus uñas
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Amazing Nails, nos dedicamos a ofrecer servicios de manicura y pedicura de la más alta calidad. Con
                más de 10 años de experiencia, nuestro equipo de profesionales certificados se especializa en crear
                diseños únicos y cuidar la salud de tus uñas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Utilizamos productos premium y técnicas innovadoras para garantizar resultados excepcionales que duran.
                Tu satisfacción y bienestar son nuestra prioridad.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">10+ Años</h3>
                <p className="text-sm text-muted-foreground">De experiencia</p>
              </div>

              <div className="space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">500+</h3>
                <p className="text-sm text-muted-foreground">Clientas felices</p>
              </div>

              <div className="space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">100%</h3>
                <p className="text-sm text-muted-foreground">Dedicación</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

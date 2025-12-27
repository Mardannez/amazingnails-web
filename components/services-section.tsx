import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Palette, Scissors, Star } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const services = [
  {
    icon: Sparkles,
    title: "Manicura Clásica",
    description: "Cuidado completo de tus manos con limado, cutícula, masaje hidratante y esmaltado perfecto.",
    price: "Desde L. 350",
    image: "/classic-manicure-hands-with-elegant-nail-polish.jpg",
  },
  {
    icon: Palette,
    title: "Manicura en Gel",
    description: "Uñas perfectas por más tiempo con esmalte en gel de larga duración y acabado brillante.",
    price: "Desde L. 450",
    image: "/gel-manicure-with-glossy-finish.jpg",
  },
  {
    icon: Star,
    title: "Diseño de Uñas",
    description: "Diseños personalizados y nail art creativo para expresar tu estilo único.",
    price: "Desde L. 50 cada diseño",
    image: "/creative-nail-art-design-colorful.jpg",
  },
  {
    icon: Scissors,
    title: "Pedicura Spa",
    description: "Tratamiento completo para tus pies con exfoliación, masaje relajante y esmaltado.",
    price: "Desde L. 400",
    image: "/spa-pedicure-relaxing-foot-treatment.jpg",
  },
  {
    icon: Sparkles,
    title: "Uñas Acrílicas",
    description: "Extensiones de uñas con acrílico de alta calidad para un look elegante y duradero.",
    price: "Desde L. 550",
    image: "/acrylic-nail-extensions-elegant-long-nails.jpg",
  },
  {
    icon: Star,
    title: "Tratamiento de Parafina",
    description: "Hidratación profunda para manos y pies con baño de parafina terapéutica.",
    price: "Desde L. 450",
    image: "/paraffin-wax-treatment-hands-spa.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Nuestros Servicios</p>
          <h2
            className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Servicios diseñados para ti
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofrecemos una amplia gama de servicios profesionales para el cuidado y embellecimiento de tus uñas.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <Card className="border-border hover:shadow-lg transition-shadow bg-white h-full">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-lg font-semibold text-primary">{service.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

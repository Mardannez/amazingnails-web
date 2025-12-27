import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const testimonials = [
  {
    name: "María González",
    role: "Clienta Regular",
    content:
      "¡Increíble servicio! Las chicas son super profesionales y siempre salgo encantada con mis uñas. El ambiente es relajante y acogedor.",
    rating: 5,
    image: "/woman-smiling-professional-portrait.jpg",
  },
  {
    name: "Ana Martínez",
    role: "Clienta VIP",
    content:
      "Llevo años viniendo a Amazing Nails y nunca me han decepcionado. Los diseños son hermosos y duran muchísimo tiempo. Totalmente recomendado.",
    rating: 5,
    image: "/woman-happy-professional-portrait.jpg",
  },
  {
    name: "Lizeth Bonilla",
    role: "Clienta Frecuente",
    content:
      "El mejor salón de uñas de la ciudad. La atención es excepcional y los precios son muy justos para la calidad que ofrecen.",
    rating: 5,
    image: "/woman-elegant-professional-portrait.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Testimonios</p>
          <h2
            className="font-serif text-4xl font-bold tracking-tight text-balance md:text-5xl mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La satisfacción de nuestras clientas es nuestro mayor logro.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <Card className="border-border bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

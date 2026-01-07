import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import logoimg from '@/img/LogoTransparente.png';
export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-">
              <Sparkles className="h-6 w-6 text-primary" />
                <Image
                src={logoimg}
                alt="Amazing Nails"
                width={30}
                height={30}
                className="h-25 w-33 rounded-md object-contain"
                priority
              />
           
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu destino para uñas hermosas y cuidado profesional. Transformamos tus manos en obras de arte.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/amazingnailshn?igsh=cG9mazRpNTk3bXV2" target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Manicura Clásica</li>
              <li className="text-muted-foreground">Manicura en Gel</li>
              <li className="text-muted-foreground">Diseño de Uñas</li>
              <li className="text-muted-foreground">Pedicura Spa</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Barrio el Centro, Plaza Isabelle</li>
              <li>Choluteca, Choluteca</li>
              <li>9774-3957</li>
              {/* Updated email with new salon name */}
              <li>amazingnailshn@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 Amazing Nails. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logoimg from "@/img/LogoTransparente.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
        <Image
          src={logoimg}
          alt="Amazing Nails"
          width={220}
          height={80}
          className="h-12 w-auto object-contain drop-shadow-sm md:h-14"
          priority
        />
        </Link>


        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#inicio" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="#nosotros" className="text-sm font-medium transition-colors hover:text-primary">
            Nosotros
          </Link>
          <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="#testimonios" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonios
          </Link>
          <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>

          <Link href="#contacto">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Reservar Cita
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

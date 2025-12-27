"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logoimg from "@/img/LogoTransparente.png";
import { useEffect, useState } from "react";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "testimonios", label: "Testimonios" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((sec): sec is HTMLElement => sec !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Marca como activa la sección que esté intersectando
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        // Ajusta si tu header tapa mucho: baja el rootMargin
        root: null,
        threshold: 0.35,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const linkBase =
    "text-sm font-medium transition-all px-3 py-2 rounded-full";
  const linkInactive =
    "text-foreground hover:text-primary hover:bg-primary/10";
  const linkActive =
    "text-primary bg-primary/15 shadow-sm ring-1 ring-primary/20";

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

        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`${linkBase} ${
                activeSection === item.id ? linkActive : linkInactive
              }`}
            >
              {item.label}
            </Link>
          ))}

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

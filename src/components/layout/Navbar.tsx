"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, User, Rocket, Mail, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Projects", href: "/#projects", icon: Rocket },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/#skills", icon: Code },
  { name: "Contact", href: "/#contact", icon: Mail },
  { name: "AI Assistant", href: "/ai-assistant", icon: Sparkles },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground transform group-hover:rotate-12 transition-transform duration-300">
              <Code size={24} strokeWidth={2.5} />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-primary">MyFolio</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                <link.icon size={16} />
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Resume
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
              >
                <link.icon size={20} />
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

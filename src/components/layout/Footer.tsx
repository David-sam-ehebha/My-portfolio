
"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="font-headline font-bold text-xl text-primary">DevFolio</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
            Building digital experiences with modern technology and thoughtful design.
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {year || "2024"} DevFolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

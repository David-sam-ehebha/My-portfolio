
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl w-full text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/5 text-primary border border-primary/20 mb-6">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-[1.1]">
          Crafting Digital <span className="text-primary italic">Excellence</span> Through Code.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto font-body leading-relaxed">
          I am a passionate Full-Stack Software Developer focused on building modern, responsive, and user-friendly web applications. I specialize in JavaScript technologies, particularly React, Node.js, Express, and MongoDB, with experience creating secure authentication systems, responsive dashboards, profile management systems, and scalable backend integrations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 w-full sm:w-auto" asChild>
            <Link href="/#projects">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 hover:bg-primary/5 w-full sm:w-auto" asChild>
            <Link href="/#contact">Let's Talk</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-muted-foreground/30 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

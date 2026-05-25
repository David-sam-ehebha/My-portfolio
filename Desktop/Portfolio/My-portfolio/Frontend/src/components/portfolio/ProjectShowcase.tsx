
"use client";

import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "1",
    title: "EcoSphere E-commerce",
    description: "A sustainable product marketplace built with Next.js and Stripe integration, featuring real-time inventory management.",
    image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || "",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "2",
    title: "Blog Website",
    description: "A personal blog website showcasing articles and tutorials built with modern web technologies.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || "",
    tags: ["Node.js", "react", "javascript"],
    demoUrl: "https://blogger-pink-eight.vercel.app/",
    repoUrl: "https://github.com/David-sam-ehebha/Blog-post.git",
  },
  {
    id: "3",
    title: "Syncro Social",
    description: "A collaborative social network designed for developer teams to share snippets and real-time project updates.",
    image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || "",
    tags: ["Node.js", "Socket.io", "PostgreSQL", "React"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of my recent work exploring various technologies and design patterns. Each project reflects a commitment to quality and usability.
            </p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 font-bold" asChild>
            <a href="#">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-none shadow-xl bg-white flex flex-col hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint="project showcase"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg" asChild>
                    <a href={project.repoUrl} aria-label="GitHub Repo"><Github size={20} /></a>
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg" asChild>
                    <a href={project.demoUrl} aria-label="Live Demo"><ExternalLink size={20} /></a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider font-bold border-muted-foreground/20 text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 border-t mt-auto">
                <Button variant="link" className="p-0 h-auto text-primary font-bold group-hover:translate-x-1 transition-transform" asChild>
                  <a href="#">Case Study</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

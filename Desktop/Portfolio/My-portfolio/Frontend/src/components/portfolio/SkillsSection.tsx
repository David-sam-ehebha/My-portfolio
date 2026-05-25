
"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Layers, Monitor, Server, Palette } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend & DevOps",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Firebase", level: 92 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: [
      { name: "Figma", level: 80 },
      { name: "UI Architecture", level: 90 },
      { name: "User Research", level: 70 },
      { name: "Responsive Design", level: 98 },
    ],
  },
];

const softSkills = ["Agile Methodologies", "Communication", "Problem Solving", "Leadership", "Creative Thinking", "Time Management"];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Technical Prowess</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to bring complex ideas to life across the full stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <group.icon size={24} />
                </div>
                <h3 className="text-xl font-headline font-bold">{group.title}</h3>
              </div>
              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-12">
          <h3 className="text-lg font-headline font-bold mb-6 text-center uppercase tracking-widest text-muted-foreground">Professional Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm bg-accent/10 hover:bg-accent/20 text-foreground border-transparent transition-all">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

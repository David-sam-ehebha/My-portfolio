
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Trophy, Coffee, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-pic')?.imageUrl || "";

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 space-y-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={profileImage}
                  alt="Alex Developer"
                  fill
                  className="object-cover"
                  data-ai-hint="developer portrait"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/50 backdrop-blur border-none shadow-sm">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Trophy className="text-primary mb-2" size={24} />
                    <span className="text-2xl font-bold">5+</span>
                    <span className="text-xs text-muted-foreground">Years Experience</span>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 backdrop-blur border-none shadow-sm">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Globe className="text-primary mb-2" size={24} />
                    <span className="text-2xl font-bold">120+</span>
                    <span className="text-xs text-muted-foreground">Projects Done</span>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-7 space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent/20 text-accent-foreground border-transparent">About Me</Badge>
                <h1 className="text-4xl md:text-5xl font-headline font-bold">I build things for the <span className="text-primary">web.</span></h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in tech began when I disassembled my first computer at age 12. Since then, I've evolved into a passionate full-stack engineer focused on creating elegant solutions to complex problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe that great software is built at the intersection of powerful technology and human-centric design. My unique value proposition lies in my ability to bridge the gap between technical requirements and business outcomes, ensuring that every line of code serves a purpose.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t">
                <h2 className="text-2xl font-headline font-bold">Core Philosophies</h2>
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Coffee size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">Iterative Excellence</h3>
                      <p className="text-muted-foreground">Continuous improvement and agile adaptation lead to superior long-term results.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">Empathy Driven Design</h3>
                      <p className="text-muted-foreground">Putting the user's needs and accessibility at the forefront of every development decision.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Have a project in mind or just want to chat? Send me a message and I'll respond as soon as I can.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email me at</h4>
                  <p className="text-muted-foreground">hello@devfolio.me</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6 animate-in zoom-in duration-500">
                <div className="flex justify-center">
                  <CheckCircle2 size={64} className="text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-headline font-bold">Thank You!</h3>
                  <p className="text-muted-foreground">Your message has been received.</p>
                </div>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-muted/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Inquiry" required className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can I help you?" required className="min-h-[150px] bg-muted/30" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

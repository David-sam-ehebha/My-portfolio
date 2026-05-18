
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Copy, RefreshCw, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { aiProjectDescriptionAssistant } from "@/ai/flows/ai-project-description-assistant-flow";
import { useToast } from "@/hooks/use-toast";

export function AiProjectAssistant() {
  const [formData, setFormData] = useState({
    projectName: "",
    technologiesUsed: "",
    keyFeatures: "",
    targetAudience: "",
  });
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectName || !formData.technologiesUsed || !formData.keyFeatures) {
      toast({
        title: "Missing fields",
        description: "Please fill in the project name, technologies, and features.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await aiProjectDescriptionAssistant(formData);
      setGeneratedDesc(result.generatedDescription);
      toast({ title: "Description Generated!", description: "Your AI-powered description is ready." });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDesc);
    toast({ title: "Copied!", description: "Description copied to clipboard." });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <Card className="border shadow-2xl overflow-hidden bg-white">
        <CardHeader className="bg-primary text-primary-foreground p-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Sparkles size={20} className="text-white" />
            </div>
            <CardTitle className="text-3xl font-headline">AI Description Assistant</CardTitle>
          </div>
          <CardDescription className="text-primary-foreground/80 text-lg">
            Generate compelling, professional descriptions for your portfolio projects in seconds.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name</Label>
                <Input 
                  id="projectName" 
                  value={formData.projectName}
                  onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                  placeholder="e.g. EcoSphere"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tech">Technologies Used</Label>
                <Input 
                  id="tech" 
                  value={formData.technologiesUsed}
                  onChange={(e) => setFormData({...formData, technologiesUsed: e.target.value})}
                  placeholder="e.g. React, Next.js, Stripe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Input 
                  id="audience" 
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                  placeholder="e.g. Recruiters, Tech Leads"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="features">Key Features</Label>
                <Textarea 
                  id="features" 
                  value={formData.keyFeatures}
                  onChange={(e) => setFormData({...formData, keyFeatures: e.target.value})}
                  placeholder="e.g. real-time chat, dark mode, responsive design"
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6" disabled={isLoading}>
                {isLoading ? <RefreshCw className="animate-spin mr-2" /> : <Wand2 className="mr-2" />}
                {isLoading ? "Generating..." : "Generate Magic Description"}
              </Button>
            </form>

            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <Label>AI Generated Result</Label>
                {generatedDesc && (
                  <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-primary hover:bg-primary/5">
                    <Copy size={14} className="mr-2" /> Copy
                  </Button>
                )}
              </div>
              <div className={cn(
                "w-full h-full min-h-[300px] p-6 rounded-xl border bg-muted/20 flex items-center justify-center text-center",
                generatedDesc ? "items-start text-left bg-white" : "text-muted-foreground italic"
              )}>
                {generatedDesc || "Your compelling description will appear here after generation..."}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

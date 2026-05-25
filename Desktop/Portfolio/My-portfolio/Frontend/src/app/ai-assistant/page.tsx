
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AiProjectAssistant } from "@/components/portfolio/AiProjectAssistant";

export default function AiAssistantPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-[90vh]">
        <AiProjectAssistant />
      </main>
      <Footer />
    </>
  );
}

import HeroSection from "@app/components/HeroSection";
import React from "react";
import Navbar from "@app/components/Navbar";
import AboutSection from "@app/components/AboutSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
          <main className="flex min-h-screen flex-col bg-[#121212]">
              <Navbar />
              <div className="container mx-auto mt-24 px-12 py-4">
                  <HeroSection />
                  <AboutSection />
              </div>
          </main>
      </main>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import VIPSection from './components/VIPSection';
import Lineup from './components/Lineup';
import Access from './components/Access';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
          <Navbar />
          <Hero />
          <Manifesto />
          <Gallery />
          <VIPSection />
          <Lineup />
          <Access />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

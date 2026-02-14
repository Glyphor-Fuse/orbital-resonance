import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TiltCard } from "@/components/ui/custom-tilt-card";
import { Info } from "lucide-react";

const VIPSection = () => {
  const [activeTab, setActiveTab] = useState("floor");

  return (
    <section id="vip" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
              SELECT YOUR <span className="text-primary">ORBIT</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Interactive holographic table reservation. Tilt to explore the layout. 
              Real-time availability for tonight's sequence.
            </p>

            <Tabs defaultValue="floor" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-background/5 border border-border/10 mb-8 h-14">
                <TabsTrigger value="floor" className="data-[state=active]:bg-primary data-[state=active]:text-foreground">Main Floor</TabsTrigger>
                <TabsTrigger value="lounge" className="data-[state=active]:bg-primary data-[state=active]:text-foreground">Nebula Lounge</TabsTrigger>
                <TabsTrigger value="terrace" className="data-[state=active]:bg-primary data-[state=active]:text-foreground">Void Deck</TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-background/5 border border-border/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <Info size={18} className="text-primary" />
                    {activeTab === "floor" && "Main Sector Status: ACTIVE"}
                    {activeTab === "lounge" && "Nebula Sector Status: LIMITED"}
                    {activeTab === "terrace" && "Void Sector Status: RESERVED"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {activeTab === "floor" && "High intensity zone. Direct view of the DJ booth. Bottle service required for booths 1-4."}
                    {activeTab === "lounge" && "Secluded area with private bar access. Sound-dampened for conversation."}
                    {activeTab === "terrace" && "Open air experience. Panoramic city views. Smoking permitted area."}
                  </p>
                  <div className="flex gap-4 text-sm font-mono text-accent">
                    <span>Avail: 4 Tables</span>
                    <span>Min Spend: $2k</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </motion.div>

          {/* Interactive Tilt Card (Signature Feature) */}
          <div className="relative flex justify-center">
            <TiltCard 
              containerClassName="w-full max-w-md aspect-[3/4]" 
              className="w-full h-full bg-background border border-border/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <img 
                src={activeTab === 'floor' ? '/images/floor-plan-main.png' : activeTab === 'lounge' ? '/images/floor-plan-lounge.png' : '/images/floor-plan-main.png'} 
                alt="Floor Plan" 
                className="w-full h-full object-cover p-4"
              />
              
              {/* Holographic Overlay Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-8 text-[10px] font-mono text-primary/80 border border-primary/30 px-4 py-4 bg-background/50 backdrop-blur">
                  DATA_STREAM: LIVE
                </div>
                <div className="absolute bottom-8 right-8 text-[10px] font-mono text-accent/80 border border-accent/30 px-4 py-4 bg-background/50 backdrop-blur">
                  SYNC_RATE: 100%
                </div>
                
                {/* Floating "Table" Indicators */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-primary rounded-full animate-ping" />
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VIPSection;

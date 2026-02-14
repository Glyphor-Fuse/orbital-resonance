import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const zones = [
  {
    id: 1,
    title: "Main Floor",
    desc: "Immersive audio-visual core.",
    img: "/images/gallery-main.png",
    tag: "High Energy",
  },
  {
    id: 2,
    title: "Nebula Lounge",
    desc: "Intimate VIP sonic sanctuary.",
    img: "/images/gallery-lounge.png",
    tag: "Exclusive",
  },
  {
    id: 3,
    title: "Event Horizon",
    desc: "Experimental sound lab.",
    img: "/images/gallery-deck.png",
    tag: "Avant-Garde",
  },
  {
    id: 4,
    title: "The Void Deck",
    desc: "Open air rooftop terrace.",
    img: "/images/dj-deck.png",
    tag: "Open Air",
  },
];

const Gallery = () => {
  return (
    <section id="experience" className="py-32 bg-background border-t border-border/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground">THE ZONES</h2>
          <p className="text-muted-foreground text-lg">Four distinct atmospheres. One resonance.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm h-[400px] relative rounded-xl">
                <div className="absolute inset-0 z-0">
                   <img 
                    src={zone.img} 
                    alt={zone.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                </div>
                
                <CardContent className="relative z-10 h-full flex flex-col justify-end p-8">
                  <Badge className="w-fit mb-4 bg-primary/20 text-primary hover:bg-primary/30 border-primary/20 backdrop-blur-md">
                    {zone.tag}
                  </Badge>
                  <h3 className="font-display font-bold text-3xl text-foreground mb-2">{zone.title}</h3>
                  <p className="text-foreground/70 text-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {zone.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

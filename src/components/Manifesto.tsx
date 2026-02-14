import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/custom-background-beams";

const Manifesto = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <BackgroundBeams className="opacity-40" />
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-tight text-foreground mb-8">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                REALITY
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              Orbital Resonance is not just a club. It is a curvature in spacetime. 
              Designed for the auditory elite, we combine immersive projection mapping, 
              haptic floors, and a sound system that resonates with your biological frequency.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lose yourself in the void. Find yourself in the music. Welcome to the future of nightlife.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

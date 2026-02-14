import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Access = () => {
  return (
    <footer id="access" className="py-32 bg-background border-t border-border/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-5xl md:text-8xl text-foreground mb-8 tracking-tighter">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SEQUENCE</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the inner circle. Early access to tickets, secret location drops, and VIP status.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-16" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS" 
              className="bg-background/5 border-border/10 text-foreground h-12 rounded-lg focus-visible:ring-primary"
            />
            <Button size="lg" className="h-12 bg-primary hover:bg-primary/90 text-foreground font-bold px-8">
              SUBSCRIBE
            </Button>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground font-mono border-t border-border/5 pt-12">
            <div>
              <h4 className="text-foreground font-bold mb-4">LOCATION</h4>
              <p>2049 Void Avenue</p>
              <p>Sector 7, Neo-Tokyo</p>
            </div>
            <div>
              <h4 className="text-foreground font-bold mb-4">CONTACT</h4>
              <p>signal@orbital.com</p>
              <p>+1 (555) 019-2834</p>
            </div>
            <div>
              <h4 className="text-foreground font-bold mb-4">SOCIAL</h4>
              <p className="hover:text-primary cursor-pointer">Instagram</p>
              <p className="hover:text-primary cursor-pointer">Twitter</p>
            </div>
             <div>
              <h4 className="text-foreground font-bold mb-4">LEGAL</h4>
              <p className="hover:text-primary cursor-pointer">Privacy Policy</p>
              <p className="hover:text-primary cursor-pointer">Terms of Service</p>
            </div>
          </div>
          
          <div className="mt-16 text-xs text-foreground/20">
            © 2024 ORBITAL RESONANCE. ALL RIGHTS RESERVED. SYSTEM OPTIMIZED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Access;

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const lineup = [
  { date: "FRI OCT 14", artist: "SOLAR FIELDS", genre: "Ambient / Psy", status: "SELLING FAST" },
  { date: "SAT OCT 15", artist: "CARBON BASED LIFEFORMS", genre: "Downtempo", status: "SOLD OUT" },
  { date: "FRI OCT 21", artist: "DANIEL AVERY", genre: "Techno", status: "AVAILABLE" },
  { date: "SAT OCT 22", artist: "JON HOPKINS (LIVE)", genre: "Electronica", status: "AVAILABLE" },
];

const Lineup = () => {
  return (
    <section id="lineup" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display font-bold text-4xl mb-12 text-foreground">UPCOMING <span className="text-primary">TRANSMISSIONS</span></h2>

        <div className="bg-card/30 border border-border/5 rounded-2xl overflow-hidden backdrop-blur-sm">
          <Table>
            <TableHeader className="bg-background/5">
              <TableRow className="border-border/5 hover:bg-transparent">
                <TableHead className="text-foreground/50 w-[150px]">DATE</TableHead>
                <TableHead className="text-foreground/50">ARTIST</TableHead>
                <TableHead className="text-foreground/50 hidden md:table-cell">GENRE</TableHead>
                <TableHead className="text-foreground/50 text-right">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lineup.map((event, i) => (
                <TableRow key={i} className="border-border/5 hover:bg-background/5 group transition-colors">
                  <TableCell className="font-mono text-accent font-medium">{event.date}</TableCell>
                  <TableCell className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {event.artist}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden md:table-cell">{event.genre}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant={event.status === "SOLD OUT" ? "ghost" : "default"} 
                      size="sm"
                      disabled={event.status === "SOLD OUT"}
                      className={event.status === "SOLD OUT" ? "text-muted-foreground" : "bg-primary hover:bg-primary/90 text-foreground"}
                    >
                      {event.status === "SOLD OUT" ? "FULL CAPACITY" : "TICKETS"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Lineup;

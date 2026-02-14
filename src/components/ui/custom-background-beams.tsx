import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;
    const canvas = beamsRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = 40;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient lines
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(124, 58, 237, 0)"); // Primary transparent
      gradient.addColorStop(0.5, "rgba(124, 58, 237, 0.05)"); // Primary faint
      gradient.addColorStop(1, "rgba(6, 182, 212, 0)"); // Accent transparent
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles (stars/dust)
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Move particles
        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
      });

      // Draw subtle beams
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width * (0.2 * i), canvas.height);
        ctx.lineTo(canvas.width * (0.2 * i + 0.1), 0);
        ctx.strokeStyle = `rgba(124, 58, 237, 0.03)`;
        ctx.lineWidth = 50;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none opacity-50", className)}>
      <canvas ref={beamsRef} className="w-full h-full" />
    </div>
  );
};

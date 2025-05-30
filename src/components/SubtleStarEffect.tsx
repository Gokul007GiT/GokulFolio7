
import React, { useEffect, useRef, useState } from 'react';

interface StarParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  opacity: number;
}

const SubtleStarEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<StarParticle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = ['#8B5CF6', '#3B82F6', '#06B6D4', '#FFFFFF', '#C084FC', '#60A5FA'];

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .social-icon, [onclick]') ||
                           target.hasAttribute('onclick') ||
                           (target as HTMLElement).style.cursor === 'pointer' ||
                           getComputedStyle(target).cursor === 'pointer';
      
      if (!isInteractive) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create 3-5 tiny star particles
        const particleCount = Math.random() * 3 + 3;
        
        for (let i = 0; i < particleCount; i++) {
          const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.8;
          const speed = Math.random() * 1.5 + 0.5;
          const life = Math.random() * 15 + 25; // Very short life
          
          const newParticle: StarParticle = {
            id: particleIdRef.current++,
            x: x + (Math.random() - 0.5) * 10,
            y: y + (Math.random() - 0.5) * 10,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: life,
            maxLife: life,
            size: Math.random() * 1.5 + 0.5, // Very small size
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.6 + 0.4
          };
          
          setParticles(prev => [...prev.slice(-20), newParticle]);
        }
      }
    };

    document.addEventListener('click', handleClick);

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        life: particle.life - 1,
        vx: particle.vx * 0.98,
        vy: particle.vy * 0.98
      })).filter(particle => particle.life > 0));

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Render particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    particles.forEach(particle => {
      const alpha = (particle.life / particle.maxLife) * particle.opacity;
      
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(particle.x, particle.y);
      
      // Create subtle glow
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 3);
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, particle.color + '00');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw star core
      ctx.fillStyle = particle.color;
      ctx.shadowBlur = 3;
      ctx.shadowColor = particle.color;
      
      // Simple star shape
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const x = Math.cos(angle) * particle.size;
        const y = Math.sin(angle) * particle.size;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
    });
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default SubtleStarEffect;

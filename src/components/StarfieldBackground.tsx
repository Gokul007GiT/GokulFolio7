import React, { useEffect, useRef, useState } from 'react';

interface FloatingShape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: 'cube' | 'sphere' | 'line' | 'square' | 'triangle';
  color: string;
  opacity: number;
  glowIntensity: number;
}

interface TwinklingStars {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
  phase: number;
}

interface ClickParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  initialX: number;
  initialY: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  glowSize: number;
  isStarShaped: boolean;
  rotationSpeed: number;
  rotation: number;
}

interface SparkleEffect {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
}

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [clickParticles, setClickParticles] = useState<ClickParticle[]>([]);
  const [sparkles, setSparkles] = useState<SparkleEffect[]>([]);
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

    const colors = ['#8B5CF6', '#3B82F6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#FFFFFF'];
    const particleColors = ['#FFFFFF', '#8B5CF6', '#3B82F6', '#06B6D4', '#C084FC', '#60A5FA', '#22D3EE'];

    // Create scattered twinkling stars
    const twinklingStars: TwinklingStars[] = [];
    for (let i = 0; i < 150; i++) {
      twinklingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2
      });
    }

    // Create floating geometric shapes
    const floatingShapes: FloatingShape[] = [];
    for (let i = 0; i < 20; i++) {
      floatingShapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 25 + 8,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
        type: ['cube', 'sphere', 'line', 'square', 'triangle'][Math.floor(Math.random() * 5)] as any,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.12 + 0.03,
        glowIntensity: Math.random() * 0.25 + 0.08
      });
    }

    let time = 0;

    // Enhanced click interaction for particle burst
    const handleClickBurst = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if click is on an interactive element
      const target = e.target as Element;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .social-icon, [onclick]') ||
                           target.hasAttribute('onclick') ||
                           (target as HTMLElement).style.cursor === 'pointer' ||
                           getComputedStyle(target).cursor === 'pointer';
      
      if (!isInteractive) {
        // Create particle burst effect
        const particleCount = Math.random() * 8 + 12; // 12-20 particles
        
        for (let i = 0; i < particleCount; i++) {
          const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
          const speed = Math.random() * 4 + 2;
          const life = Math.random() * 20 + 50; // 50-70 frames (~0.8-1.2 seconds)
          
          const newParticle: ClickParticle = {
            id: particleIdRef.current++,
            x: x,
            y: y,
            vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 1.5,
            vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 1.5,
            initialX: x,
            initialY: y,
            life: life,
            maxLife: life,
            size: Math.random() * 2.5 + 1,
            color: particleColors[Math.floor(Math.random() * particleColors.length)],
            glowSize: Math.random() * 8 + 6,
            isStarShaped: Math.random() > 0.4,
            rotationSpeed: (Math.random() - 0.5) * 0.15,
            rotation: Math.random() * Math.PI * 2
          };
          
          setClickParticles(prev => [...prev.slice(-30), newParticle]);
        }
      }
    };

    // Enhanced sparkle effect for social media icons
    const handleSparkleEffect = (e: MouseEvent) => {
      const target = e.target as Element;
      const socialIcon = target.closest('.social-icon');
      
      if (socialIcon && e.type === 'click') {
        const rect = socialIcon.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 - canvasRect.left;
        const centerY = rect.top + rect.height / 2 - canvasRect.top;
        
        // Create detailed sparkle effects
        for (let i = 0; i < 25; i++) {
          const angle = (i / 25) * Math.PI * 2;
          const speed = Math.random() * 5 + 3;
          const newSparkle: SparkleEffect = {
            x: centerX,
            y: centerY,
            life: 90,
            maxLife: 90,
            color: particleColors[Math.floor(Math.random() * particleColors.length)],
            size: Math.random() * 3 + 1.5,
            vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
            vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 2,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.2
          };
          setSparkles(prev => [...prev.slice(-35), newSparkle]);
        }

        // Add burst effect
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 7 + 5;
          const burstSparkle: SparkleEffect = {
            x: centerX,
            y: centerY,
            life: 70,
            maxLife: 70,
            color: '#FFFFFF',
            size: Math.random() * 2.5 + 3,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            rotation: 0,
            rotationSpeed: 0
          };
          setSparkles(prev => [...prev, burstSparkle]);
        }
      }
    };

    canvas.addEventListener('click', handleClickBurst);
    document.addEventListener('click', handleSparkleEffect);

    let animationFrame: number;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars
      twinklingStars.forEach(star => {
        star.phase += star.twinkleSpeed;
        const twinkle = Math.sin(star.phase) * 0.5 + 0.5;
        const currentOpacity = star.opacity * twinkle;
        
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        
        // Create star glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(0.5, star.color + '40');
        gradient.addColorStop(1, star.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw star core
        ctx.globalAlpha = currentOpacity * 1.2;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        // Update position for subtle drift
        star.x += Math.sin(time * 0.3 + star.phase) * 0.08;
        star.y += Math.cos(time * 0.2 + star.phase) * 0.08;
        
        // Wrap around screen
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
        if (star.y > canvas.height) star.y = 0;
        if (star.y < 0) star.y = canvas.height;
      });

      // Draw floating geometric shapes
      floatingShapes.forEach(shape => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Wrap around screen
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;

        ctx.save();
        ctx.globalAlpha = shape.opacity;
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);

        // Create glow effect
        const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size * 1.8);
        glowGradient.addColorStop(0, shape.color + '30');
        glowGradient.addColorStop(1, shape.color + '00');
        
        ctx.fillStyle = glowGradient;
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 0.8;

        switch (shape.type) {
          case 'cube':
            ctx.beginPath();
            ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            ctx.fill();
            ctx.stroke();
            break;
          case 'sphere':
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
          case 'line':
            ctx.beginPath();
            ctx.moveTo(-shape.size / 2, 0);
            ctx.lineTo(shape.size / 2, 0);
            ctx.stroke();
            break;
          case 'square':
            ctx.beginPath();
            ctx.rect(-shape.size / 3, -shape.size / 3, shape.size / 1.5, shape.size / 1.5);
            ctx.fill();
            ctx.stroke();
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -shape.size / 2);
            ctx.lineTo(-shape.size / 2, shape.size / 2);
            ctx.lineTo(shape.size / 2, shape.size / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        }
        ctx.restore();
      });

      // Update click particles
      setClickParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        life: particle.life - 1,
        vx: particle.vx * 0.985,
        vy: particle.vy * 0.985,
        rotation: particle.rotation + particle.rotationSpeed
      })).filter(particle => particle.life > 0));

      // Update sparkles
      setSparkles(prev => prev.map(sparkle => ({
        ...sparkle,
        x: sparkle.x + sparkle.vx,
        y: sparkle.y + sparkle.vy,
        life: sparkle.life - 1,
        vx: sparkle.vx * 0.98,
        vy: sparkle.vy * 0.98 + 0.08,
        rotation: sparkle.rotation + sparkle.rotationSpeed
      })).filter(sparkle => sparkle.life > 0));

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClickBurst);
      document.removeEventListener('click', handleSparkleEffect);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Render click particles and sparkles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Render click particles with advanced effects
    clickParticles.forEach(particle => {
      const alpha = particle.life / particle.maxLife;
      const fadeAlpha = alpha > 0.7 ? 1 : alpha / 0.7;
      
      ctx.save();
      ctx.globalAlpha = fadeAlpha;
      
      // Create particle glow
      const glowGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.glowSize
      );
      glowGradient.addColorStop(0, particle.color);
      glowGradient.addColorStop(0.4, particle.color + '60');
      glowGradient.addColorStop(1, particle.color + '00');
      
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw particle core
      ctx.globalAlpha = fadeAlpha * 1.5;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      if (particle.isStarShaped) {
        // Draw star shape
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * 2 * Math.PI) / 5;
          const x = Math.cos(angle) * particle.size;
          const y = Math.sin(angle) * particle.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          
          const innerAngle = ((i + 0.5) * 2 * Math.PI) / 5;
          const innerX = Math.cos(innerAngle) * (particle.size * 0.4);
          const innerY = Math.sin(innerAngle) * (particle.size * 0.4);
          ctx.lineTo(innerX, innerY);
        }
        ctx.closePath();
        ctx.fill();
      } else {
        // Draw circular particle
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    });

    // Render enhanced sparkles
    sparkles.forEach(sparkle => {
      const alpha = sparkle.life / sparkle.maxLife;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(sparkle.x, sparkle.y);
      ctx.rotate(sparkle.rotation);
      
      // Create sparkle glow
      const sparkleGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, sparkle.size * 3);
      sparkleGradient.addColorStop(0, sparkle.color);
      sparkleGradient.addColorStop(0.5, sparkle.color + '80');
      sparkleGradient.addColorStop(1, sparkle.color + '00');
      
      ctx.fillStyle = sparkleGradient;
      ctx.beginPath();
      ctx.arc(0, 0, sparkle.size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw sparkle core
      ctx.fillStyle = sparkle.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = sparkle.color;
      ctx.beginPath();
      ctx.moveTo(0, -sparkle.size);
      ctx.lineTo(sparkle.size * 0.3, 0);
      ctx.lineTo(sparkle.size, 0);
      ctx.lineTo(sparkle.size * 0.3, 0);
      ctx.lineTo(0, sparkle.size);
      ctx.lineTo(-sparkle.size * 0.3, 0);
      ctx.lineTo(-sparkle.size, 0);
      ctx.lineTo(-sparkle.size * 0.3, 0);
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
    });
  }, [clickParticles, sparkles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-auto z-0"
      style={{
        background: '#000000'
      }}
    />
  );
};

export default StarfieldBackground;

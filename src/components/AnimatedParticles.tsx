
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  shape: 'circle' | 'square' | 'triangle' | 'star';
  rotation: number;
  rotationSpeed: number;
}

interface AnimatedParticlesProps {
  className?: string;
  count?: number;
  color?: string;
  maxSize?: number;
  maxSpeed?: number;
  interactive?: boolean;
}

const AnimatedParticles: React.FC<AnimatedParticlesProps> = ({
  className = '',
  count = 50,
  color = '#646cff',
  maxSize = 5,
  maxSpeed = 0.5,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const animationRef = useRef<number | null>(null);
  const scrollRef = useRef(0);
  const [mode, setMode] = useState<'sticks' | 'squares' | 'triangles' | 'stars'>('sticks');

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      
      // Change shape based on scroll position
      const windowHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / windowHeight;
      
      if (scrollPercentage < 0.25) {
        setMode('sticks');
      } else if (scrollPercentage < 0.5) {
        setMode('squares');
      } else if (scrollPercentage < 0.75) {
        setMode('triangles');
      } else {
        setMode('stars');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        const shape = Math.random() > 0.5 ? 'circle' : 'square';
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * maxSize + 1,
          speedX: (Math.random() - 0.5) * maxSpeed,
          speedY: (Math.random() - 0.5) * maxSpeed,
          color,
          opacity: Math.random() * 0.5 + 0.1,
          shape,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2
        });
      }
    };

    // Draw a particle based on its shape
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      
      const fillColor = color.replace(')', `, ${particle.opacity})`).replace('rgb', 'rgba');
      ctx.fillStyle = fillColor;

      // Shape drawing logic based on current mode
      if (mode === 'sticks') {
        // Draw lines
        ctx.beginPath();
        ctx.rect(-particle.size * 3, -particle.size / 3, particle.size * 6, particle.size / 1.5);
        ctx.fill();
      } else if (mode === 'squares') {
        // Draw squares
        ctx.beginPath();
        ctx.rect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        ctx.fill();
      } else if (mode === 'triangles') {
        // Draw triangles
        ctx.beginPath();
        ctx.moveTo(0, -particle.size);
        ctx.lineTo(particle.size, particle.size);
        ctx.lineTo(-particle.size, particle.size);
        ctx.closePath();
        ctx.fill();
      } else if (mode === 'stars') {
        // Draw stars
        const spikes = 5;
        const outerRadius = particle.size;
        const innerRadius = particle.size / 2;
        
        ctx.beginPath();
        let rot = (Math.PI / 2) * 3;
        const step = Math.PI / spikes;
        
        for (let i = 0; i < spikes; i++) {
          ctx.lineTo(
            Math.cos(rot) * outerRadius + 0,
            Math.sin(rot) * outerRadius + 0
          );
          rot += step;
          
          ctx.lineTo(
            Math.cos(rot) * innerRadius + 0,
            Math.sin(rot) * innerRadius + 0
          );
          rot += step;
        }
        
        ctx.lineTo(0, -outerRadius);
        ctx.closePath();
        ctx.fill();
      }
      
      ctx.restore();
    };

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        // Wrap particles at screen edges
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Interactive effect with mouse
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            
            particle.x -= Math.cos(angle) * force * 2;
            particle.y -= Math.sin(angle) * force * 2;
          }
        }
        
        // Draw particle with the current shape
        drawParticle(ctx, particle);
      });
      
      // Connect particles with lines
      connectParticles(ctx);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Draw lines between nearby particles
    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 100;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = color.replace(')', `, ${opacity * 0.2})`).replace('rgb', 'rgba');
            ctx.lineWidth = 1;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count, color, maxSize, maxSpeed, interactive, mode]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
    />
  );
};

export default AnimatedParticles;


import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  shape: 'circle' | 'square' | 'triangle' | 'star' | 'hexagon' | 'spiral' | 'custom';
  rotation: number;
  rotationSpeed: number;
  hue: number;
  saturation: number;
  lightness: number;
  pulseSpeed: number;
  pulseDirection: boolean;
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
  const [mode, setMode] = useState<'sticks' | 'nebula'>('sticks');
  const [hueRotation, setHueRotation] = useState(0);
  const [animationIntensity, setAnimationIntensity] = useState(1);

  // Track scroll position with reduced effect
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      
      // Get scroll percentage with much more subtle effect
      const windowHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / windowHeight;
      
      // Update animation intensity with reduced range (only slight change)
      setAnimationIntensity(0.8 + scrollPercentage * 0.4); // Much less variation
      
      // Update color hue based on scroll, but more subtle
      setHueRotation(scrollPercentage * 120); // Reduced from 360 to 120
      
      // Only switch between two modes for less distraction
      if (scrollPercentage > 0.5) {
        setMode('nebula');
      } else {
        setMode('sticks');
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
          speedX: (Math.random() - 0.5) * maxSpeed * 0.7, // Reduced speed
          speedY: (Math.random() - 0.5) * maxSpeed * 0.7, // Reduced speed
          color,
          opacity: Math.random() * 0.3 + 0.1, // Reduced opacity
          shape,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 1, // Reduced rotation
          hue: Math.random() * 40 - 20, // Reduced color variation
          saturation: 70 + Math.random() * 20,
          lightness: 50 + Math.random() * 20,
          pulseSpeed: 0.01 + Math.random() * 0.02, // Slower pulse
          pulseDirection: Math.random() > 0.5
        });
      }
    };

    // Draw a particle based on its shape and the current mode
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      
      // Apply hue rotation based on scroll position (subtler)
      const adjustedHue = (parseInt(color.slice(1, 3), 16) * 1.4 + hueRotation + particle.hue) % 360;
      const fillColor = `hsla(${adjustedHue}, ${particle.saturation}%, ${particle.lightness}%, ${particle.opacity * 0.7})`; // Reduced opacity
      ctx.fillStyle = fillColor;
      
      // Less intense pulse
      const pulseFactor = mode === 'nebula' ? 
        1 + Math.sin(Date.now() * particle.pulseSpeed * 0.0005) * 0.3 : // Reduced pulse
        1;
      const size = particle.size * pulseFactor * animationIntensity;

      // Shape drawing logic with simplified options
      if (mode === 'sticks') {
        // Draw simpler sticks
        const length = size * 4;
        ctx.beginPath();
        ctx.rect(-length / 2, -size / 4, length, size / 2);
        ctx.fill();
      } else if (mode === 'nebula') {
        // Create a subtler nebula-like effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2.5);
        gradient.addColorStop(0, `hsla(${adjustedHue}, ${particle.saturation}%, ${particle.lightness + 10}%, ${particle.opacity * 1.2})`);
        gradient.addColorStop(1, `hsla(${adjustedHue}, ${particle.saturation - 20}%, ${particle.lightness - 10}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, size * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    };

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Move particles with very gentle speed variation based on mode
        const speedMultiplier = mode === 'nebula' ? 0.7 : 1;
                                
        particle.x += particle.speedX * animationIntensity * speedMultiplier * 0.8; // Reduced overall speed
        particle.y += particle.speedY * animationIntensity * speedMultiplier * 0.8; // Reduced overall speed
        particle.rotation += particle.rotationSpeed * animationIntensity * 0.5; // Reduced rotation
        
        // Pulse the opacity for nebula mode (gentler)
        if (mode === 'nebula') {
          particle.opacity = Math.max(0.05, Math.min(0.5, particle.opacity + (particle.pulseDirection ? 0.001 : -0.001)));
          if (particle.opacity >= 0.5 || particle.opacity <= 0.05) {
            particle.pulseDirection = !particle.pulseDirection;
          }
        }
        
        // Wrap particles at screen edges
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Interactive effect with mouse (preserving this since you liked it)
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            
            if (mode === 'nebula') {
              // For nebula, particles are attracted to mouse
              particle.x += Math.cos(angle) * force * 2;
              particle.y += Math.sin(angle) * force * 2;
            } else {
              // For other modes, particles are repelled from mouse
              particle.x -= Math.cos(angle) * force * 2;
              particle.y -= Math.sin(angle) * force * 2;
            }
          }
        }
        
        // Draw particle with the current shape
        drawParticle(ctx, particle);
      });
      
      // Connect particles with lines (thinner, more subtle)
      if (mode === 'sticks') {
        connectParticles(ctx);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Draw lines between nearby particles (more subtle)
    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 100; // Reduced distance
                          
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - (distance / maxDistance)) * 0.15; // Reduced opacity
            // Apply hue rotation to connections too (subtler)
            const adjustedHue = (parseInt(color.slice(1, 3), 16) * 1.4 + hueRotation) % 360;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${adjustedHue}, 70%, 60%, ${opacity})`; // More subtle connections
            ctx.lineWidth = 0.5; // Thinner lines
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
  }, [count, color, maxSize, maxSpeed, interactive, mode, hueRotation, animationIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
    />
  );
};

export default AnimatedParticles;

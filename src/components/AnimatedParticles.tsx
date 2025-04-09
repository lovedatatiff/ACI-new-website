
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
  const [mode, setMode] = useState<'sticks' | 'squares' | 'triangles' | 'stars' | 'hexagons' | 'spirals' | 'nebula'>('sticks');
  const [hueRotation, setHueRotation] = useState(0);
  const [animationIntensity, setAnimationIntensity] = useState(1);

  // Track scroll position and update particle mode
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      
      // Change shape based on scroll position with smoother transitions
      const windowHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / windowHeight;
      
      // Update animation intensity based on scroll
      setAnimationIntensity(1 + scrollPercentage * 2);
      
      // Update color hue based on scroll
      setHueRotation(scrollPercentage * 360);
      
      // Update shape mode based on scroll position
      if (scrollPercentage < 0.14) {
        setMode('sticks');
      } else if (scrollPercentage < 0.28) {
        setMode('squares');
      } else if (scrollPercentage < 0.42) {
        setMode('triangles');
      } else if (scrollPercentage < 0.56) {
        setMode('stars');
      } else if (scrollPercentage < 0.7) {
        setMode('hexagons');
      } else if (scrollPercentage < 0.85) {
        setMode('spirals');
      } else {
        setMode('nebula');
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
          rotationSpeed: (Math.random() - 0.5) * 2,
          hue: Math.random() * 60 - 30, // For color variation
          saturation: 70 + Math.random() * 30,
          lightness: 50 + Math.random() * 20,
          pulseSpeed: 0.02 + Math.random() * 0.04,
          pulseDirection: Math.random() > 0.5
        });
      }
    };

    // Draw a particle based on its shape and the current mode
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      
      // Apply hue rotation based on scroll position
      const adjustedHue = (parseInt(color.slice(1, 3), 16) * 1.4 + hueRotation + particle.hue) % 360;
      const fillColor = `hsla(${adjustedHue}, ${particle.saturation}%, ${particle.lightness}%, ${particle.opacity})`;
      ctx.fillStyle = fillColor;
      
      // Pulse size based on time
      const pulseFactor = mode === 'nebula' ? 
        1 + Math.sin(Date.now() * particle.pulseSpeed * 0.001) * 0.5 : 
        1;
      const size = particle.size * pulseFactor * animationIntensity;

      // Shape drawing logic based on current mode
      if (mode === 'sticks') {
        // Draw animated sticks
        const length = size * 5 * (1 + Math.sin(Date.now() * 0.001) * 0.2);
        ctx.beginPath();
        ctx.rect(-length / 2, -size / 3, length, size / 1.5);
        ctx.fill();
      } else if (mode === 'squares') {
        // Draw squares with inner detail
        ctx.beginPath();
        ctx.rect(-size, -size, size * 2, size * 2);
        ctx.fill();
        
        // Inner detail
        ctx.strokeStyle = `hsla(${(adjustedHue + 180) % 360}, ${particle.saturation}%, ${particle.lightness + 20}%, ${particle.opacity * 0.7})`;
        ctx.lineWidth = size * 0.3;
        ctx.strokeRect(-size * 0.6, -size * 0.6, size * 1.2, size * 1.2);
      } else if (mode === 'triangles') {
        // Draw triangles with glow
        ctx.beginPath();
        ctx.moveTo(0, -size * 1.3);
        ctx.lineTo(size * 1.3, size * 1.3);
        ctx.lineTo(-size * 1.3, size * 1.3);
        ctx.closePath();
        ctx.shadowColor = fillColor;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (mode === 'stars') {
        // Draw detailed stars
        const spikes = 5;
        const outerRadius = size * 1.5;
        const innerRadius = size * 0.6;
        
        ctx.beginPath();
        let rot = (Math.PI / 2) * 3;
        const step = Math.PI / spikes;
        
        for (let i = 0; i < spikes; i++) {
          ctx.lineTo(
            Math.cos(rot) * outerRadius,
            Math.sin(rot) * outerRadius
          );
          rot += step;
          
          ctx.lineTo(
            Math.cos(rot) * innerRadius,
            Math.sin(rot) * innerRadius
          );
          rot += step;
        }
        
        ctx.closePath();
        ctx.shadowColor = fillColor;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (mode === 'hexagons') {
        // Draw hexagons
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const x = Math.cos(angle) * size * 1.2;
          const y = Math.sin(angle) * size * 1.2;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        
        // Inner hexagon
        ctx.beginPath();
        ctx.fillStyle = `hsla(${(adjustedHue + 60) % 360}, ${particle.saturation}%, ${particle.lightness + 15}%, ${particle.opacity * 0.7})`;
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + (Date.now() * 0.001) % (Math.PI * 2);
          const x = Math.cos(angle) * size * 0.6;
          const y = Math.sin(angle) * size * 0.6;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      } else if (mode === 'spirals') {
        // Draw spiral pattern
        const arms = 3;
        const turns = 2;
        const maxRadius = size * 2;
        
        for (let arm = 0; arm < arms; arm++) {
          ctx.beginPath();
          ctx.strokeStyle = `hsla(${(adjustedHue + arm * 30) % 360}, ${particle.saturation}%, ${particle.lightness}%, ${particle.opacity})`;
          ctx.lineWidth = size * 0.4;
          
          const armOffset = (Math.PI * 2 / arms) * arm;
          
          for (let i = 0; i < 100; i++) {
            const progress = i / 100;
            const angle = armOffset + progress * Math.PI * 2 * turns + (Date.now() * 0.0005) % (Math.PI * 2);
            const radius = progress * maxRadius;
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          
          ctx.stroke();
        }
      } else if (mode === 'nebula') {
        // Create a nebula-like effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3);
        gradient.addColorStop(0, `hsla(${adjustedHue}, ${particle.saturation}%, ${particle.lightness + 20}%, ${particle.opacity * 1.5})`);
        gradient.addColorStop(0.5, `hsla(${(adjustedHue + 30) % 360}, ${particle.saturation - 10}%, ${particle.lightness}%, ${particle.opacity * 0.8})`);
        gradient.addColorStop(1, `hsla(${(adjustedHue + 60) % 360}, ${particle.saturation - 20}%, ${particle.lightness - 10}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw some "stars" within the nebula
        for (let i = 0; i < 3; i++) {
          const starX = (Math.random() - 0.5) * size * 2;
          const starY = (Math.random() - 0.5) * size * 2;
          const starSize = Math.random() * size * 0.4 + size * 0.1;
          
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`;
          ctx.beginPath();
          ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      ctx.restore();
    };

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Move particles with varying speed based on mode
        const speedMultiplier = mode === 'nebula' ? 0.5 : 
                                mode === 'spirals' ? 0.7 : 
                                mode === 'sticks' ? 1.5 : 1;
                                
        particle.x += particle.speedX * animationIntensity * speedMultiplier;
        particle.y += particle.speedY * animationIntensity * speedMultiplier;
        particle.rotation += particle.rotationSpeed * animationIntensity;
        
        // Pulse the opacity for nebula mode
        if (mode === 'nebula' || mode === 'spirals') {
          particle.opacity = Math.max(0.05, Math.min(0.8, particle.opacity + (particle.pulseDirection ? 0.003 : -0.003)));
          if (particle.opacity >= 0.8 || particle.opacity <= 0.05) {
            particle.pulseDirection = !particle.pulseDirection;
          }
        }
        
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
      
      // Connect particles with lines for certain modes
      if (['sticks', 'squares', 'triangles'].includes(mode)) {
        connectParticles(ctx);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Draw lines between nearby particles
    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = mode === 'sticks' ? 150 : 
                          mode === 'squares' ? 120 : 
                          mode === 'triangles' ? 100 : 80;
                          
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            // Apply hue rotation to connections too
            const adjustedHue = (parseInt(color.slice(1, 3), 16) * 1.4 + hueRotation) % 360;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${adjustedHue}, 80%, 60%, ${opacity * 0.2})`;
            ctx.lineWidth = mode === 'sticks' ? 1 : 2;
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

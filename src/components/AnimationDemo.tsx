
import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import { Button } from '@/components/ui/button';
import { PlayCircle, PauseCircle, RefreshCw } from 'lucide-react';

interface DemoItem {
  id: number;
  color: string;
  delay: number;
  initialPosition: { x: number; y: number };
  size: number;
}

const AnimationDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [items, setItems] = useState<DemoItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  const generateItems = () => {
    if (!containerRef.current) return;
    
    const newItems: DemoItem[] = [];
    const colors = ['#FF5733', '#33A8FF', '#FF33A8', '#A833FF', '#33FFA8'];
    
    for (let i = 0; i < 12; i++) {
      newItems.push({
        id: i,
        color: colors[i % colors.length],
        delay: i * 100,
        initialPosition: { 
          x: Math.random() * (containerRef.current.offsetWidth - 50), 
          y: Math.random() * (containerRef.current.offsetHeight - 50) 
        },
        size: Math.random() * 30 + 20
      });
    }
    
    setItems(newItems);
  };
  
  const startAnimation = () => {
    setIsPlaying(true);
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.demo-item');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.transition = `transform 2s ease-in-out, background-color 0.5s ease`;
      htmlEl.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
      htmlEl.style.backgroundColor = items[i].color;
    });
  };
  
  const pauseAnimation = () => {
    setIsPlaying(false);
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.demo-item');
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const computedStyle = window.getComputedStyle(htmlEl);
      const matrix = new WebKitCSSMatrix(computedStyle.transform);
      
      htmlEl.style.transition = 'none';
      htmlEl.style.transform = `translate(${matrix.m41}px, ${matrix.m42}px) rotate(${Math.atan2(matrix.m21, matrix.m11)}rad) scale(${matrix.m11})`;
    });
  };
  
  const resetAnimation = () => {
    setIsPlaying(false);
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.demo-item');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.transition = 'transform 0.5s ease-out';
      htmlEl.style.transform = `translate(${items[i].initialPosition.x}px, ${items[i].initialPosition.y}px) rotate(0deg) scale(1)`;
    });
  };
  
  useEffect(() => {
    generateItems();
    
    const handleResize = () => {
      if (containerRef.current) {
        resetAnimation();
        generateItems();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="section-container">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Fluid Animation Examples
        </h2>
      </ScrollReveal>
      
      <ScrollReveal delay={200}>
        <div className="mt-8 bg-secondary/50 rounded-lg p-6 mb-8">
          <div 
            ref={containerRef}
            className="w-full h-[400px] relative bg-background/50 rounded-lg overflow-hidden border border-border mb-4"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="demo-item absolute rounded-full shadow-md"
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  backgroundColor: item.color,
                  left: 0,
                  top: 0,
                  transform: `translate(${item.initialPosition.x}px, ${item.initialPosition.y}px)`,
                  transition: 'transform 0.5s ease-out',
                  zIndex: 10
                }}
              />
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-4">
            {!isPlaying ? (
              <Button onClick={startAnimation} className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Play
              </Button>
            ) : (
              <Button onClick={pauseAnimation} className="flex items-center gap-2">
                <PauseCircle className="h-5 w-5" />
                Pause
              </Button>
            )}
            <Button variant="outline" onClick={resetAnimation} className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Reset
            </Button>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={400}>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          This interactive demo showcases how elements can be animated with dynamic properties.
          Control the animation with the buttons above.
        </p>
      </ScrollReveal>
    </section>
  );
};

export default AnimationDemo;

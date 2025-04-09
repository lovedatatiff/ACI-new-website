
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale' | 'rotate' | 'flip';
  duration?: number;
  once?: boolean;
  distance?: number;
  scale?: number;
  rotate?: number;
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  duration = 800,
  once = true,
  distance = 30,
  scale = 0.95,
  rotate = 15,
  easing = 'ease-out',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getInitialStyles = () => {
    switch (direction) {
      case 'up':
        return `opacity-0 translate-y-[${distance}px]`;
      case 'down':
        return `opacity-0 -translate-y-[${distance}px]`;
      case 'left':
        return `opacity-0 translate-x-[${distance}px]`;
      case 'right':
        return `opacity-0 -translate-x-[${distance}px]`;
      case 'scale':
        return `opacity-0 scale-[${scale}]`;
      case 'rotate':
        return `opacity-0 rotate-[${rotate}deg]`;
      case 'flip':
        return `opacity-0 rotateX-[90deg]`;
      case 'none':
        return 'opacity-0';
      default:
        return `opacity-0 translate-y-[${distance}px]`;
    }
  };

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (once && currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, once]);

  const getTransformStyles = () => {
    if (direction === 'scale') {
      return isVisible ? 'scale-100' : `scale-[${scale}]`;
    } else if (direction === 'rotate') {
      return isVisible ? 'rotate-0' : `rotate-[${rotate}deg]`;
    } else if (direction === 'flip') {
      return isVisible ? 'rotateX-0' : 'rotateX-[90deg]';
    } else if (direction === 'up' || direction === 'down') {
      return isVisible ? 'translate-y-0' : direction === 'up' ? `translate-y-[${distance}px]` : `-translate-y-[${distance}px]`;
    } else if (direction === 'left' || direction === 'right') {
      return isVisible ? 'translate-x-0' : direction === 'left' ? `translate-x-[${distance}px]` : `-translate-x-[${distance}px]`;
    } else {
      return '';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && 'opacity-100',
        `transition-all duration-${duration}`,
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`, 
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
        transform: isVisible 
          ? 'translate3d(0, 0, 0) scale(1) rotate(0) rotateX(0)' 
          : getInitialTransform()
      }}
    >
      {children}
    </div>
  );

  function getInitialTransform() {
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'scale':
        return `scale(${scale})`;
      case 'rotate':
        return `rotate(${rotate}deg)`;
      case 'flip':
        return `rotateX(90deg)`;
      case 'none':
        return 'none';
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  }
};

export default ScrollReveal;

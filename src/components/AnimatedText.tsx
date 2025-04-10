
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  animated?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  delay?: number;
  staggerDelay?: number;
  animationType?: 'characters' | 'words' | 'lines' | 'typewriter' | 'gradient' | 'wave' | 'bounce';
  gradient?: string;
  highlightColor?: string;
  duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  textClassName,
  animated = true,
  tag: Tag = 'h2',
  delay = 0,
  staggerDelay = 50,
  animationType = 'words',
  gradient = 'from-primary to-blue-500',
  highlightColor = 'text-primary',
  duration = 600,
}) => {
  // Fix: Use a more specific ref type that matches the HTML element that could be rendered
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (animationType === 'wave' && containerRef.current) {
      const spans = containerRef.current.querySelectorAll('.wave-letter');
      spans.forEach((span, i) => {
        (span as HTMLElement).style.animationDelay = `${delay + i * staggerDelay}ms`;
      });
    }
  }, [animationType, delay, staggerDelay]);

  const renderAnimatedText = () => {
    if (!animated) return text;

    switch (animationType) {
      case 'characters':
        return text.split('').map((char, i) => (
          <span
            key={i}
            className={cn(
              "inline-block animate-fade-in opacity-0",
              textClassName
            )}
            style={{
              animationDelay: `${delay + i * staggerDelay}ms`,
              animationFillMode: 'forwards',
              animationDuration: `${duration}ms`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ));
      
      case 'words':
        return text.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-1">
            <span
              className={cn(
                "inline-block animate-fade-in opacity-0",
                textClassName
              )}
              style={{
                animationDelay: `${delay + i * staggerDelay}ms`,
                animationFillMode: 'forwards',
                animationDuration: `${duration}ms`
              }}
            >
              {word}
            </span>
          </span>
        ));
        
      case 'lines':
        return (
          <span
            className={cn(
              "inline-block animate-fade-in opacity-0",
              textClassName
            )}
            style={{
              animationDelay: `${delay}ms`,
              animationFillMode: 'forwards',
              animationDuration: `${duration}ms`
            }}
          >
            {text}
          </span>
        );
        
      case 'typewriter':
        return (
          <span
            className={cn(
              "inline-block opacity-1", // Changed from opacity-0 to opacity-1
              textClassName
            )}
            style={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: 0,
                height: '100%',
                width: '100%',
                background: 'var(--background)',
                animation: `typewriter ${duration * 2}ms steps(${text.length}) ${delay}ms forwards`
              }
            }}
          >
            {text}
          </span>
        );

      case 'gradient':
        return (
          <span
            className={cn(
              `inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-0 animate-fade-in`,
              textClassName
            )}
            style={{
              animationDelay: `${delay}ms`,
              animationFillMode: 'forwards',
              animationDuration: `${duration}ms`
            }}
          >
            {text}
          </span>
        );

      case 'wave':
        return (
          <>
            {text.split('').map((char, i) => (
              <span
                key={i}
                className={cn(
                  "inline-block wave-letter animate-float",
                  textClassName
                )}
                style={{ animationDelay: `${i * staggerDelay}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </>
        );

      case 'bounce':
        return text.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-1">
            <span
              className={cn(
                "inline-block opacity-0 animate-scale-in",
                textClassName
              )}
              style={{
                animationDelay: `${delay + i * staggerDelay}ms`,
                animationFillMode: 'forwards',
                animationDuration: `${duration}ms`
              }}
            >
              {word}
            </span>
          </span>
        ));
        
      default:
        return <span>{text}</span>;
    }
  };

  // Fix: Create a wrapper div with the ref instead of applying it directly to the dynamic tag
  return (
    <div ref={containerRef} className={cn("", className)}>
      <Tag className="contents">
        {renderAnimatedText()}
      </Tag>
    </div>
  );
};

export default AnimatedText;

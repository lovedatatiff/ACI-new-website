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
              "inline-block relative",
              textClassName
            )}
          >
            <span>{text}</span>
            <span
              className="absolute inset-0 bg-background animate-text-reveal"
              style={{
                animationDelay: `${delay}ms`,
                animationDuration: `${duration}ms`,
                animationFillMode: 'forwards'
              }}
            ></span>
            <span
              className="absolute right-0 top-0 h-full w-0.5 bg-primary animate-pulse"
              style={{
                animationDelay: `${delay + duration}ms`,
                animationDuration: '0.75s'
              }}
            ></span>
          </span>
        );

      case 'gradient':
        return (
          <span
            className={cn(
              `inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-0 animate-fade-in",
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

  return (
    <div ref={containerRef} className={cn("", className)}>
      <Tag className="contents">
        {renderAnimatedText()}
      </Tag>
    </div>
  );
};

export default AnimatedText;

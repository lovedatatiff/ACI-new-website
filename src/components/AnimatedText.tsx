
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  animated?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  delay?: number;
  staggerDelay?: number;
  animationType?: 'characters' | 'words' | 'lines';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  textClassName,
  animated = true,
  tag: Tag = 'h2',
  delay = 0,
  staggerDelay = 50,
  animationType = 'words'
}) => {
  const renderAnimatedText = () => {
    if (!animated) return text;

    let elements: React.ReactNode[] = [];
    
    switch (animationType) {
      case 'characters':
        elements = text.split('').map((char, i) => (
          <span
            key={i}
            className={cn(
              "inline-block animate-fade-in opacity-0",
              textClassName
            )}
            style={{
              animationDelay: `${delay + i * staggerDelay}ms`,
              animationFillMode: 'forwards'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ));
        break;
      
      case 'words':
        elements = text.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-1">
            <span
              className={cn(
                "inline-block animate-fade-in opacity-0",
                textClassName
              )}
              style={{
                animationDelay: `${delay + i * staggerDelay}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {word}
            </span>
          </span>
        ));
        break;
        
      case 'lines':
        elements = [
          <span
            key="line"
            className={cn(
              "inline-block animate-fade-in opacity-0",
              textClassName
            )}
            style={{
              animationDelay: `${delay}ms`,
              animationFillMode: 'forwards'
            }}
          >
            {text}
          </span>
        ];
        break;
        
      default:
        elements = [<span key="default">{text}</span>];
    }
    
    return elements;
  };

  return (
    <Tag className={cn("", className)}>
      {renderAnimatedText()}
    </Tag>
  );
};

export default AnimatedText;

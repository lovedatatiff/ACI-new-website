
import React, { ReactNode } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

interface SolutionCardProps {
  icon: ReactNode;
  title?: string;
  children: ReactNode;
  gradient?: string;
  delay?: number;
  className?: string;
  iconClassName?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  children,
  gradient = "from-primary/5 via-secondary/5 to-transparent",
  delay = 0,
  className,
  iconClassName,
}) => {
  return (
    <ScrollReveal delay={delay} direction="scale">
      <div 
        className={cn(
          "p-6 rounded-xl overflow-hidden transition-all duration-300",
          "hover:shadow-md hover:-translate-y-1 relative group",
          `bg-gradient-to-br ${gradient}`,
          className
        )}
      >
        <div className={cn(
          "inline-flex items-center justify-center p-3 mb-4",
          "rounded-full bg-primary/10 text-primary transform transition-transform duration-300",
          "group-hover:scale-110",
          iconClassName
        )}>
          {icon}
        </div>
        
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        
        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SolutionCard;

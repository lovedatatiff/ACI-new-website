
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface SolutionCardProps {
  icon?: React.ReactNode;
  title?: string;
  gradient?: string;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const SolutionCard = ({ 
  icon, 
  title, 
  gradient = "from-primary/10 to-transparent", 
  delay = 0, 
  children,
  className 
}: SolutionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.001 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        y: -5
      }}
      className={cn(
        `p-6 rounded-xl bg-gradient-to-br ${gradient} border border-border/40 relative overflow-hidden group`,
        className
      )}
    >
      {icon && (
        <motion.div 
          className="mb-4 text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {icon}
        </motion.div>
      )}
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      <div className="text-muted-foreground">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default SolutionCard;

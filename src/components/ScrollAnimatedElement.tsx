
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimatedElement: React.FC<ScrollAnimatedElementProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    delay,
    triggerOnce,
  });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out will-change-transform`;
    const durationClass = `duration-${duration}`;
    
    switch (animation) {
      case 'fadeIn':
        return cn(
          baseClasses,
          durationClass,
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        );
      case 'slideUp':
        return cn(
          baseClasses,
          durationClass,
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        );
      case 'slideLeft':
        return cn(
          baseClasses,
          durationClass,
          isVisible 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform translate-x-8'
        );
      case 'slideRight':
        return cn(
          baseClasses,
          durationClass,
          isVisible 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform -translate-x-8'
        );
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedElement;

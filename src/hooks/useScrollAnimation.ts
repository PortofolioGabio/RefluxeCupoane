
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);
  // Scroll animations disabled - always return visible state
  const [isVisible] = useState(true);

  return { ref, isVisible };
};

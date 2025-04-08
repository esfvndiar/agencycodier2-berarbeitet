import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip' | 'slide-up';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: AnimationType;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  delay = 0,
  animation = 'fade-up',
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (once && ref.current) {
            observer.unobserve(ref.current);
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, delay, once]);

  const getAnimationClass = (): string => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    const visibilityClasses = isVisible 
      ? 'opacity-100 translate-y-0 translate-x-0 scale-100 rotate-y-0' 
      : 'opacity-0';

    const animationClasses = !isVisible ? {
      'fade-up': 'translate-y-10',
      'fade-left': '-translate-x-10',
      'fade-right': 'translate-x-10',
      'zoom-in': 'scale-95',
      'flip': 'rotate-y-90',
      'slide-up': 'translate-y-20'
    }[animation] : '';

    return cn(baseClasses, visibilityClasses, animationClasses);
  };

  return (
    <div 
      ref={ref}
      className={cn(className, getAnimationClass())}
      style={{ transitionDelay: `${isVisible ? delay : 0}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

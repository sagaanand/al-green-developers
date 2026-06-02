import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function ScrollRevealLeft({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal-left ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function ScrollRevealRight({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal-right ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function ScrollRevealScale({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal-scale ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={elementRef}
      className={`text-reveal-line ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span>{children}</span>
    </div>
  );
}

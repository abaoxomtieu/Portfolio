import { useEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  duration?: number;
  ease?: string;
  scrollTrigger?: {
    trigger: HTMLElement;
    start?: string;
    toggleActions?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export function useScrollReveal(ref: RefObject<HTMLElement>, options?: ScrollRevealOptions) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            ...options?.scrollTrigger,
          },
          ...options,
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [ref, options]);
} 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options
    }
  );
};

export const fadeIn = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      ...options
    }
  );
};

export const slideInLeft = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options
    }
  );
};

export const slideInRight = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options
    }
  );
};

export const scrollTriggerFade = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
        ...options
      }
    }
  );
};

export const staggerFadeIn = (elements: string, options = {}) => {
  return gsap.fromTo(
    elements,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      ...options
    }
  );
};

export const createTimeline = (options = {}) => {
  return gsap.timeline(options);
};

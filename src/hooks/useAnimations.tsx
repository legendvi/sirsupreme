// hooks/useAnimations.ts
import { useEffect, useRef } from 'react';

// Types for different animations
type AnimationType = 'stagger' | 'fade' | 'slide' | 'scale' | 'custom';
type Direction = 'up' | 'down' | 'left' | 'right';

interface BaseAnimationConfig {
  threshold?: number;
  rootMargin?: string;
  duration?: number;
  easing?: string;
  delay?: number;
}

interface StaggerConfig extends BaseAnimationConfig {
  type: 'stagger';
  baseDelay?: number;
  direction?: Direction;
}

interface FadeConfig extends BaseAnimationConfig {
  type: 'fade';
  from?: number;
  to?: number;
}

interface SlideConfig extends BaseAnimationConfig {
  type: 'slide';
  direction?: Direction;
  distance?: string;
}

interface ScaleConfig extends BaseAnimationConfig {
  type: 'scale';
  from?: number;
  to?: number;
}

interface CustomConfig extends BaseAnimationConfig {
  type: 'custom';
  keyframes: Keyframe[];
}

type AnimationConfig =
  | StaggerConfig
  | FadeConfig
  | SlideConfig
  | ScaleConfig
  | CustomConfig;

export const useAnimations = (
  itemsCount: number = 1,
  config: AnimationConfig
) => {
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  const getDefaultConfig = (type: AnimationType): BaseAnimationConfig => ({
    threshold: 0.2,
    rootMargin: '0px',
    duration: 0.6,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: 0,
  });

  useEffect(() => {
    const observers = itemsRef.current.map((item, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLDivElement;
            if (!entry.isIntersecting) {
              element.classList.remove('animate-in');
              element.style.visibility = 'hidden';
            } else {
              element.style.visibility = 'visible';
              element.classList.add('animate-in');
            }
          });
        },
        {
          threshold:
            config.threshold || getDefaultConfig(config.type).threshold,
          rootMargin:
            config.rootMargin || getDefaultConfig(config.type).rootMargin,
        }
      );

      if (item) {
        observer.observe(item);
      }

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [config]);

  const handleAnimation = (element: HTMLElement, index: number) => {
    switch (config.type) {
      case 'stagger':
        applyStaggerAnimation(element, index, config);
        break;
      case 'fade':
        applyFadeAnimation(element, config);
        break;
      case 'slide':
        applySlideAnimation(element, config);
        break;
      case 'scale':
        applyScaleAnimation(element, config);
        break;
      case 'custom':
        applyCustomAnimation(element, config);
        break;
    }
  };

  const getAnimationStyles = () => {
    let styles = '';

    switch (config.type) {
      case 'stagger':
        styles = getStaggerStyles(itemsCount, config);
        break;
      case 'fade':
        styles = getFadeStyles(config);
        break;
      case 'slide':
        styles = getSlideStyles(config);
        break;
      case 'scale':
        styles = getScaleStyles(config);
        break;
      case 'custom':
        styles = getCustomStyles(config);
        break;
    }

    return styles;
  };

  return {
    itemsRef,
    getAnimationStyles,
    setItemRef: (el: HTMLElement | null, index: number) => {
      itemsRef.current[index] = el;
    },
    handleAnimation,
  };
};

// Animation application functions
const applyStaggerAnimation = (
  element: HTMLElement,
  index: number,
  config: StaggerConfig
) => {
  element.style.animationDelay = `${(config.baseDelay || 0.15) * index}s`;
  element.classList.add('animate-in');
};

const applyFadeAnimation = (element: HTMLElement, config: FadeConfig) => {
  element.classList.add('animate-in');
};

const applySlideAnimation = (element: HTMLElement, config: SlideConfig) => {
  element.classList.add('animate-in');
};

const applyScaleAnimation = (element: HTMLElement, config: ScaleConfig) => {
  element.classList.add('animate-in');
};

const applyCustomAnimation = (element: HTMLElement, config: CustomConfig) => {
  element.animate(config.keyframes, {
    duration: (config.duration || 0.6) * 1000,
    easing: config.easing || 'cubic-bezier(0.4, 0, 0.2, 1)',
    fill: 'forwards',
  });
};

// Style generation functions
const getStaggerStyles = (itemsCount: number, config: StaggerConfig) => `
  .animate-in {
    animation: staggerIn ${config.duration || 0.6}s ${
  config.easing || 'cubic-bezier(0.4, 0, 0.2, 1)'
} forwards;
    visibility: visible;
  }

  @keyframes staggerIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${Array.from(
    { length: itemsCount },
    (_, i) => `
    .stagger-item:nth-child(${i + 1}).animate-in {
      animation-delay: ${i * (config.baseDelay || 0.15)}s;
    }
  `
  ).join('\n')}
`;

// Add other style generation functions as needed
const getFadeStyles = (config: FadeConfig) => `...`;
const getSlideStyles = (config: SlideConfig) => `...`;
const getScaleStyles = (config: ScaleConfig) => `...`;
const getCustomStyles = (config: CustomConfig) => `...`;

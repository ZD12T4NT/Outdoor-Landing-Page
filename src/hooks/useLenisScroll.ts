'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useMotionValue } from 'framer-motion';

export default function useLenisScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      orientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    const onScroll = () => {
      const scroll = lenis.scroll;
      const limit = lenis.limit;
      progress.set(scroll / limit);
    };

    lenis.on('scroll', onScroll);

    let animationFrame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      lenis.off('scroll', onScroll);
      lenis.destroy();
      cancelAnimationFrame(animationFrame);
    };
  }, [progress]);

  return { lenis: lenisRef.current, progress };
}

import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let lastTime = Date.now();

    const raf = (time) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);
};

export default useLenisScroll;

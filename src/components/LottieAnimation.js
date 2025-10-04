"use client";
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieAnimation({ animationPath, loop = true, autoplay = true, style }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      path: animationPath,
    });

    return () => anim.destroy();
  }, [animationPath, loop, autoplay]);

  return <div ref={containerRef} style={style} />;
}

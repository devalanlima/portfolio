import { useState, useEffect } from 'react';
import Breakpoints from '../types/breakpoints';

function useBreakpoints() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const breakpoints: Breakpoints = {
    sm: windowSize.width >= 640,
    md: windowSize.width >= 768,
    lg: windowSize.width >= 1024,
    xl: windowSize.width >= 1280,
    '2xl': windowSize.width >= 1536,
  };

  return breakpoints;
}

export default useBreakpoints;

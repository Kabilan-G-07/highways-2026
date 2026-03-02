import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number, x: number, y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev.slice(-5), newRipple]); // Keep only last 5 ripples

      // Auto remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds loading

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 5000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className={`loading-wrapper ${!isLoading ? 'fade-out' : ''}`}
    >
      <div className="interactive-bg">
        <div
          className="cursor-glow"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }}
        />

        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y
            }}
          />
        ))}
      </div>

      <div className="loading-content">
        <div className="loader-ring">
          <div className="ring-inner"></div>
          <div className="ring-outer"></div>
        </div>

        <h1 className="loader-logo">HIGHWAYS</h1>
        <div className="loader-line">
          <div className="loader-progress"></div>
        </div>
        <p className="loader-status">INITIALIZING EXPERIENCE</p>
        <div className="loader-hint">CLICK TO RIPPLE • MOVE TO GLOW</div>
      </div>

      <div className="grain-overlay"></div>
    </div>
  );
};

export default LoadingScreen;
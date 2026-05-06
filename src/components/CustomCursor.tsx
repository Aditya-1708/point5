import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../motion/useReducedMotion';

export const CustomCursor = () => {
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (reducedMotion) {
      setEnabled(false);
      return;
    }

    const coarse = window.matchMedia?.('(pointer: coarse)')?.matches;
    if (coarse) {
      setEnabled(false);
      return;
    }

    let trailId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const computed = window.getComputedStyle(target);
      setIsPointer(
        computed.cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );

      // Add trail dot
      trailId++;
      const newDot = { x: e.clientX, y: e.clientY, id: trailId };
      setTrail(prev => [...prev.slice(-6), newDot]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  // Clean old trail dots
  useEffect(() => {
    if (!enabled) return;
    const timer = setInterval(() => {
      setTrail(prev => prev.slice(-4));
    }, 100);
    return () => clearInterval(timer);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Trail dots */}
      {trail.map((dot) => (
        <motion.div
          key={dot.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            x: dot.x - 3,
            y: dot.y - 3,
            width: 6,
            height: 6,
            backgroundColor: 'rgba(196, 239, 23, 0.3)',
          }}
        />
      ))}

      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 border-2 border-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          width: isPointer ? 64 : 32,
          height: isPointer ? 64 : 32,
          backgroundColor: isPointer ? 'rgba(196, 239, 23, 0.15)' : 'rgba(196, 239, 23, 0)',
          borderColor: isPointer ? 'rgba(196, 239, 23, 0.6)' : 'rgba(196, 239, 23, 1)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 bg-accent rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 2.5,
          y: position.y - 2.5,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.1 }}
        style={{ width: 5, height: 5 }}
      />
    </>
  );
};

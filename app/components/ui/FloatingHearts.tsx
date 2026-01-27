'use client';

import Heart from './Heart';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

// Static heart positions to avoid impure function calls during render
const hearts: FloatingHeart[] = [
  { id: 0, left: 10, delay: 0, duration: 10, size: 25 },
  { id: 1, left: 25, delay: 1.2, duration: 11, size: 30 },
  { id: 2, left: 40, delay: 2.5, duration: 9, size: 22 },
  { id: 3, left: 55, delay: 0.8, duration: 12, size: 35 },
  { id: 4, left: 70, delay: 3, duration: 10.5, size: 28 },
  { id: 5, left: 85, delay: 1.5, duration: 11.5, size: 26 },
  { id: 6, left: 15, delay: 4, duration: 9.5, size: 32 },
  { id: 7, left: 32, delay: 2, duration: 10.2, size: 24 },
  { id: 8, left: 48, delay: 0.5, duration: 11.8, size: 29 },
  { id: 9, left: 62, delay: 3.5, duration: 9.8, size: 27 },
  { id: 10, left: 78, delay: 1.8, duration: 10.8, size: 31 },
  { id: 11, left: 92, delay: 4.5, duration: 11.2, size: 23 },
  { id: 12, left: 5, delay: 2.8, duration: 10.5, size: 33 },
  { id: 13, left: 50, delay: 1, duration: 9.2, size: 26 },
  { id: 14, left: 95, delay: 3.2, duration: 11.5, size: 30 },
];

export default function FloatingHearts() {

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-20"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart size={heart.size} className="text-pink-500" />
        </div>
      ))}
    </div>
  );
}

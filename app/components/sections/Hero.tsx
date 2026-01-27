'use client';

import Heart from '../ui/Heart';

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="animate-fade-in">
        <Heart size={80} className="text-red-500 mb-8 mx-auto" animate />
      </div>
      
      <h1 
        className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in"
        style={{ 
          animationDelay: '0.2s',
          background: 'linear-gradient(135deg, #e91e63, #f44336, #ff69b4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        For You, Shaikah
      </h1>
      
      <p 
        className="text-2xl md:text-3xl text-pink-800 mb-8 max-w-2xl animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        You are my everything. This Valentine&apos;s Day, I wanted to create something special just for you, because you deserve the world and so much more.
      </p>
      
      <div 
        className="flex flex-wrap gap-4 justify-center animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <div className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold text-lg shadow-lg flex items-center gap-2">
          <Heart size={20} />
          I Love You
        </div>
      </div>
    </section>
  );
}

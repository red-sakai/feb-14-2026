'use client';

import Heart from '../ui/Heart';

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart size={24} className="text-pink-500" />
          <span className="text-2xl font-bold text-pink-900">
            Forever Yours, Shaikah
          </span>
          <Heart size={24} className="text-pink-500" />
        </div>
        
        <p className="text-pink-700 mb-2">
          Thank you for being the love of my life
        </p>
        
        <p className="text-sm text-pink-600">
          Made with <Heart size={16} className="inline text-red-500" /> exclusively for Shaikah • Valentine&apos;s Day 2026
        </p>
      </div>
    </footer>
  );
}

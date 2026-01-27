'use client';

import { useState } from 'react';
import Heart from './Heart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart size={28} className="text-pink-500" animate />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              For Shaikah
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-pink-800 hover:text-pink-600 font-semibold transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('countdown')}
              className="text-pink-800 hover:text-pink-600 font-semibold transition-colors"
            >
              Countdown
            </button>
            <button
              onClick={() => scrollToSection('photos')}
              className="text-pink-800 hover:text-pink-600 font-semibold transition-colors"
            >
              Our Photos
            </button>
            <button
              onClick={() => scrollToSection('memories')}
              className="text-pink-800 hover:text-pink-600 font-semibold transition-colors"
            >
              Memory Capsule
            </button>
            <button
              onClick={() => scrollToSection('messages')}
              className="text-pink-800 hover:text-pink-600 font-semibold transition-colors"
            >
              Messages
            </button>
            <button
              onClick={() => scrollToSection('gifts')}
              className="text-pink-800 hover:text-pink-600 font-semibold transition-colors"
            >
              Gifts
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-pink-800 p-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-pink-800 hover:text-pink-600 font-semibold text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('countdown')}
                className="text-pink-800 hover:text-pink-600 font-semibold text-left py-2"
              >
                Countdown
              </button>
              <button
                onClick={() => scrollToSection('photos')}
                className="text-pink-800 hover:text-pink-600 font-semibold text-left py-2"
              >
                Our Photos
              </button>
              <button
                onClick={() => scrollToSection('memories')}
                className="text-pink-800 hover:text-pink-600 font-semibold text-left py-2"
              >
                Memory Capsule
              </button>
              <button
                onClick={() => scrollToSection('messages')}
                className="text-pink-800 hover:text-pink-600 font-semibold text-left py-2"
              >
                Messages
              </button>
              <button
                onClick={() => scrollToSection('gifts')}
                className="text-pink-800 hover:text-pink-600 font-semibold text-left py-2"
              >
                Gifts
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

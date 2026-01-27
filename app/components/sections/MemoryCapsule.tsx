'use client';

import { useState } from 'react';
import Heart from '../ui/Heart';

const memories = [
  {
    id: 1,
    date: "The Day We Met",
    icon: "✨",
    memory: "The moment I saw you, I knew my life was about to change forever. Your smile captured my heart instantly.",
    color: "from-pink-400 to-rose-400"
  },
  {
    id: 2,
    date: "Our First 'I Love You'",
    icon: "💗",
    memory: "Words can't describe how my heart felt when we first said those three special words to each other.",
    color: "from-red-400 to-pink-400"
  },
  {
    id: 3,
    date: "That Perfect Weekend",
    icon: "🌈",
    memory: "Every moment spent with you is perfect, but that weekend was pure magic. Just us, no worries, pure happiness.",
    color: "from-purple-400 to-pink-400"
  },
  {
    id: 4,
    date: "When You Made Me Laugh",
    icon: "😄",
    memory: "You have this incredible ability to make me smile even on my darkest days. Your laughter is my favorite sound.",
    color: "from-orange-400 to-pink-400"
  },
  {
    id: 5,
    date: "Our Inside Jokes",
    icon: "🤭",
    memory: "All those silly moments, the jokes only we understand, the looks we exchange - they're my favorite treasures.",
    color: "from-yellow-400 to-pink-400"
  },
  {
    id: 6,
    date: "Looking to the Future",
    icon: "🌟",
    memory: "I can't wait to create a million more memories with you. Every day with you is a gift I'll cherish forever.",
    color: "from-indigo-400 to-pink-400"
  }
];

export default function MemoryCapsule() {
  const [openMemory, setOpenMemory] = useState<number | null>(null);

  return (
    <section id="memories" className="relative z-10 py-20 px-4 bg-gradient-to-b from-pink-50/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-900">
            Our Memory Capsule
          </h2>
          <p className="text-lg text-pink-700">
            Special moments locked in my heart forever
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenMemory(openMemory === memory.id ? null : memory.id)}
                className="w-full text-left"
              >
                <div className={`bg-gradient-to-br ${memory.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden`}>
                  {/* Decorative hearts */}
                  <div className="absolute top-2 right-2 opacity-20">
                    <Heart size={40} className="text-white" />
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{memory.icon}</div>

                  {/* Date/Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {memory.date}
                  </h3>

                  {/* Memory Text */}
                  <div className={`transition-all duration-300 ${
                    openMemory === memory.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className="text-white/95 text-sm leading-relaxed">
                      {memory.memory}
                    </p>
                  </div>

                  {/* Toggle indicator */}
                  {openMemory !== memory.id && (
                    <div className="flex items-center gap-2 text-white/80 text-sm mt-2">
                      <span>Click to unlock memory</span>
                      <Heart size={16} />
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Add Memory Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
          <div className="text-center">
            <Heart size={48} className="text-pink-500 mx-auto mb-4" animate />
            <h3 className="text-2xl font-bold text-pink-900 mb-4">
              Let&apos;s Keep Adding More
            </h3>
            <p className="text-pink-700 mb-6">
              Every day with you, Shaikah, is another beautiful memory waiting to be made. 
              Here&apos;s to countless more moments, adventures, and memories together.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-2xl">
              <span>💕</span>
              <span>🌹</span>
              <span>✨</span>
              <span>💑</span>
              <span>🎀</span>
              <span>💝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

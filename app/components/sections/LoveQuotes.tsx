'use client';

import Heart from '../ui/Heart';

const quotes = [
  {
    text: "Every moment with you is a treasure. You make my world brighter and my heart fuller.",
    author: "My Heart to Yours"
  },
  {
    text: "Shaikah, you are the reason I believe in love. Thank you for being you.",
    author: "Always and Forever"
  },
  {
    text: "In a world full of temporary things, you are my forever. I love you more each day.",
    author: "With All My Love"
  }
];

export default function LoveQuotes() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-pink-900">
          Messages for You
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Heart size={32} className="text-pink-500 mb-4" />
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                &quot;{quote.text}&quot;
              </blockquote>
              <cite className="text-sm text-pink-600 font-semibold not-italic">
                — {quote.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

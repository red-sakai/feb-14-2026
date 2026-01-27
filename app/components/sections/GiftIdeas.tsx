'use client';

const giftIdeas = [
  {
    emoji: "💐",
    title: "Flowers",
    description: "Classic and timeless, flowers never fail to express love"
  },
  {
    emoji: "🍫",
    title: "Chocolates",
    description: "Sweet treats for your sweetheart"
  },
  {
    emoji: "💍",
    title: "Jewelry",
    description: "A sparkling reminder of your affection"
  },
  {
    emoji: "💌",
    title: "Love Letter",
    description: "Heartfelt words that last forever"
  },
  {
    emoji: "🎁",
    title: "Surprise Gift",
    description: "Something special they've been wanting"
  },
  {
    emoji: "🍽️",
    title: "Dinner Date",
    description: "Share a romantic meal together"
  }
];

export default function GiftIdeas() {
  return (
    <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent to-pink-100/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-pink-900">
          All the Things I Want to Give You
        </h2>
        <p className="text-center text-pink-700 mb-16 text-lg">
          Because you deserve everything beautiful in this world
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftIdeas.map((idea, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{idea.emoji}</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">
                {idea.title}
              </h3>
              <p className="text-gray-600">
                {idea.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

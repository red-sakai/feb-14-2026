'use client';

import Heart from '../ui/Heart';

const photos = [
  {
    id: 1,
    title: "Our First Date",
    description: "The moment everything started",
    placeholder: "📸"
  },
  {
    id: 2,
    title: "That Beautiful Smile",
    description: "When you light up my world",
    placeholder: "😊"
  },
  {
    id: 3,
    title: "Adventures Together",
    description: "Making memories everywhere",
    placeholder: "🌟"
  },
  {
    id: 4,
    title: "Silly Moments",
    description: "Being goofy together",
    placeholder: "😂"
  },
  {
    id: 5,
    title: "Perfect Days",
    description: "Just you and me",
    placeholder: "💑"
  },
  {
    id: 6,
    title: "Forever Memories",
    description: "Creating our story",
    placeholder: "💕"
  }
];

export default function PhotoGallery() {
  return (
    <section id="photos" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-900">
            Our Beautiful Moments
          </h2>
          <p className="text-lg text-pink-700">
            Every picture tells our story, Shaikah
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-30 group-hover:opacity-40 transition-opacity">
                {photo.placeholder}
              </div>
              
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent flex flex-col justify-end p-6">
                <Heart size={24} className="text-white mb-2" />
                <h3 className="text-xl font-bold text-white mb-1">
                  {photo.title}
                </h3>
                <p className="text-pink-100 text-sm">
                  {photo.description}
                </p>
              </div>

              {/* Add Photo Hint */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-pink-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-pink-700 italic">
            💡 Tip: Replace these placeholders with your favorite photos together
          </p>
        </div>
      </div>
    </section>
  );
}

import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import Countdown from './components/sections/Countdown';
import PhotoGallery from './components/sections/PhotoGallery';
import MemoryCapsule from './components/sections/MemoryCapsule';
import LoveQuotes from './components/sections/LoveQuotes';
import GiftIdeas from './components/sections/GiftIdeas';
import Footer from './components/sections/Footer';
import FloatingHearts from './components/ui/FloatingHearts';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <FloatingHearts />
      
      <main className="relative z-10 pt-16">
        <div id="home">
          <Hero />
        </div>
        <div id="countdown">
          <Countdown />
        </div>
        <PhotoGallery />
        <MemoryCapsule />
        <div id="messages">
          <LoveQuotes />
        </div>
        <div id="gifts">
          <GiftIdeas />
        </div>
        <Footer />
      </main>
    </div>
  );
}

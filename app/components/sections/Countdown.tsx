'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isValentinesDay, setIsValentinesDay] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Valentine's Day is February 14
      let valentinesDay = new Date(currentYear, 1, 14); // Month is 0-indexed
      
      // If Valentine's Day has passed this year, show next year's
      if (now > valentinesDay) {
        valentinesDay = new Date(currentYear + 1, 1, 14);
      }
      
      const difference = valentinesDay.getTime() - now.getTime();
      
      if (difference <= 0) {
        setIsValentinesDay(true);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isValentinesDay) {
    return (
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-5xl font-bold text-white mb-4">
            It&apos;s Valentine&apos;s Day! 💕
          </h2>
          <p className="text-2xl text-white/90">
            Spread love and joy today!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-900">
          Counting Down to Our Special Day
        </h2>
        
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-4 md:p-8 shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-6xl font-bold text-pink-600 mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-lg text-gray-600 font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

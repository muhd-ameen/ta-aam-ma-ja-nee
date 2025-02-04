import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const RamadanTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Example Ramadan 2024 end date
    const ramadanEnd = new Date('2024-04-09T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = ramadanEnd - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <Clock className="w-8 h-8" />
      <div className="flex space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-sm uppercase">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RamadanTimer;
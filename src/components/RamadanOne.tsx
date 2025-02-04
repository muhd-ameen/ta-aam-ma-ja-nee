import React from 'react';
import { Moon } from 'lucide-react';

const RamadanOne = () => {
  return (
    <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <Moon className="w-8 h-8" />
      <div className="text-center">
        <div className="text-3xl font-bold font-arabic">رمضان ١</div>
        <div className="text-lg mt-2">March 1, 2025</div>
      </div>
    </div>
  );
};

export default RamadanOne;
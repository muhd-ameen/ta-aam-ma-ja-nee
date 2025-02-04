import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  'Kozhikode',
  'Malappuram',
  'Thiruvananthapuram',
  'Kochi',
  'Thrissur',
  'Kannur',
  'Palakkad'
];

interface LocationSelectorProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ selectedLocation, onLocationChange }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 mb-2">
        <MapPin className="text-emerald-500" />
        <label htmlFor="location" className="text-lg font-semibold">
          Select Your Location
        </label>
      </div>
      <select
        id="location"
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="">Select a location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
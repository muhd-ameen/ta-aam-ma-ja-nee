import React from 'react';
import { Clock, MapPin, Utensils, Navigation, ThermometerSun } from 'lucide-react';
import { masjidData } from '../data';

interface MasjidListProps {
  location: string;
  darkMode: boolean;
}

const MasjidList: React.FC<MasjidListProps> = ({ location, darkMode }) => {
  const filteredMasjids = location
    ? masjidData.filter((masjid) => masjid.area === location)
    : masjidData;

  const handleLocationClick = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const getBiriyaniMoodColor = (rating: number) => {
    if (rating >= 9) return 'text-red-500';
    if (rating >= 8) return 'text-orange-500';
    return 'text-yellow-500';
  };

  return (
    <div className="space-y-6">
      {filteredMasjids.map((masjid) => (
        <div
          key={masjid.id}
          className={`p-6 rounded-lg shadow-md transition-transform hover:scale-[1.02] ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold">{masjid.name}</h3>
            <button
              onClick={() => handleLocationClick(masjid.address)}
              className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-emerald-600 dark:text-emerald-100 transition-colors"
              title="Open in Google Maps"
            >
              <Navigation size={18} />
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="text-emerald-500" size={18} />
              <p>{masjid.address}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-emerald-500" size={18} />
              <p>{masjid.timing}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Utensils className="text-emerald-500" size={18} />
              <p>{masjid.foodType}</p>
            </div>
            {masjid.biriyaniMood && (
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <ThermometerSun className={getBiriyaniMoodColor(masjid.biriyaniMood.rating)} size={18} />
                  <span className="font-semibold">Biriyani Mood:</span>
                  <span className={`${getBiriyaniMoodColor(masjid.biriyaniMood.rating)} font-bold`}>
                    {masjid.biriyaniMood.rating}/10
                  </span>
                </div>
                <p className="text-sm italic">{masjid.biriyaniMood.comment}</p>
              </div>
            )}
          </div>
        </div>
      ))}
      {filteredMasjids.length === 0 && (
        <div className="text-center py-8">
          <p className="text-lg">No masjids found in this location.</p>
        </div>
      )}
    </div>
  );
};

export default MasjidList;
import React, { useState } from 'react';
import { Moon, Sun, Clock, MapPin, Utensils, Instagram, Facebook, Twitter } from 'lucide-react';
import { masjidData } from './data';
import RamadanOne from './components/RamadanOne';
import MasjidList from './components/MasjidList';
import LocationSelector from './components/LocationSelector';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="bg-emerald-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-arabic">Chorrullapalli</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-emerald-700 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 text-center bg-gradient-to-b from-emerald-600 to-emerald-500 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop")'
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find nearest നോമ്പ് തുറ പള്ളി
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connecting you with local masjids offering food services during the blessed month of Ramadan
          </p>
          <RamadanOne />
        </div>
      </header>

      {/* Main Content */}
      <main className={`container mx-auto px-4 py-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        <div className="max-w-4xl mx-auto">
          <LocationSelector 
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />
          <MasjidList 
            location={selectedLocation}
            darkMode={darkMode}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'} py-8`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Helping our community connect with local masjids during the blessed month of Ramadan.
              </p>
            </div>
         
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
  <p>
    &copy; {new Date().getFullYear()} Chorrullapalli . Developed with ☕ by {" "}
    <a href="https://linktr.ee/emeenx" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      emeenx
    </a>
  </p>
</div>

        </div>
      </footer>
    </div>
  );
}

export default App;
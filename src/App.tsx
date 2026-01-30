import { useEffect, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import FounderMessage from './sections/FounderMessage';
import Values from './sections/Values';
import Expertise from './sections/Expertise';
import Investment from './sections/Investment';
import AssetManagement from './sections/AssetManagement';
import Teams from './sections/Teams';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-navy text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <FounderMessage />
        <Values />
        <Expertise />
        <Investment />
        <AssetManagement />
        <Teams />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import Navigation from './sections/NavigationEn';
import Hero from './sections/HeroEn';
import About from './sections/AboutEn';
import FounderMessage from './sections/FounderMessageEn';
import Values from './sections/ValuesEn';
import Expertise from './sections/ExpertiseEn';
import Investment from './sections/InvestmentEn';
import AssetManagement from './sections/AssetManagementEn';
import Teams from './sections/TeamsEn';
import Contact from './sections/ContactEn';
import Footer from './sections/FooterEn';

function AppEn() {
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

export default AppEn;

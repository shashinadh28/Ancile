import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureCards from './components/FeatureCards.jsx';
import FindTalents from './components/FindTalents.jsx';
import Industries from './components/Industries.jsx';
import SuccessStories from './components/SuccessStories.jsx';
import TalentSpecialties from './components/TalentSpecialties.jsx';
import Insights from './components/Insights.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import TalentSolutionsPage from './pages/TalentSolutionsPage.jsx';
import TechnologyServicesPage from './pages/TechnologyServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function HomePage() {
  const location = useLocation();

  // When navigating from another page with a scrollTo state, scroll to the section
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to let the page render fully
      const timer = setTimeout(() => {
        const el = document.querySelector(location.state.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 350);
      return () => clearTimeout(timer);
    }
    // If there's a hash in the URL, also scroll to it
    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-white overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <FindTalents />
        <Industries />
        <SuccessStories />
        <TalentSpecialties />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/talent-solutions" element={<TalentSolutionsPage />} />
      <Route path="/technology-services" element={<TechnologyServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

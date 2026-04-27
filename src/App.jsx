import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureCards from './components/FeatureCards.jsx';
import FindTalents from './components/FindTalents.jsx';
import Insights from './components/Insights.jsx';
import Foundation from './components/Foundation.jsx';
import StudyAbroadCTA from './components/StudyAbroadCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <FindTalents />
        <Insights />
        <Foundation />
        <StudyAbroadCTA />
      </main>
      <Footer />
    </div>
  );
}

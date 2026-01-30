import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkillsNew from './components/skillsnew';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { SmoothCursor } from "./components/ui/smooth-cursor";

function App() {
  useScrollAnimation();

  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
      {/* 1. Custom Cursor */}
      <SmoothCursor />

      {/* 2. Background Layer 
          - fixed: stays in place while scrolling
          - inset-0: fills the screen
          - -z-10: pushes it behind all other content
      */}

      {/* 3. Content Layer 
          - relative z-10: ensures content stays above the background
      */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <SkillsNew />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
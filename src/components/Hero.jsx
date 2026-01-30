import React from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import GradientText from './ui/GradientText';
import ThreeDCore from './ui/ThreeDCore';
import ParticlesBackground from './lightswind/particles-background'

const Hero = () => {
  const roles = [
    "AI/ML Engineering Student",
    "Full Stack Developer",
    "Neural Network Enthusiast",
    "Open Source Contributor"
  ];

  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* <ParticlesBackground /> */}
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      <div className="hero-container !max-w-7xl px-4 sm:px-6">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          <div className="hero-text text-center lg:text-left space-y-4 sm:space-y-6">
            <span className="hero-label">Hi, I'm</span>

            <h1 className="hero-name">
              <GradientText
                colors={["#4079ff", "#40ffaa", "#4079ff"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >ADITYA LINGAM
              </GradientText>
            </h1>

            <div className="hero-subtitle relative h-[40px] sm:h-[50px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="hero-typed absolute left-0 text-gradient font-bold text-lg sm:text-xl"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="hero-intro text-sm sm:text-base">
              A driven first-year AI/ML engineering student passionate about turning ambitious ideas into
              intelligent, real-world solutions. I thrive on building innovative projects, exploring
              cutting-edge technologies, and transforming creativity into code that makes an impact.

            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-image flex items-center justify-center order-first lg:order-last">
            <ThreeDCore />
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="hero-scroll-indicator"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="hero-scroll-arrow" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

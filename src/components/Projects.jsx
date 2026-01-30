import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
  Github, ExternalLink, ChevronLeft, ChevronRight,
  X, Maximize2, Layers, Cpu, Globe, ArrowUpRight
} from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index, totalCards, direction, onDragEnd, onClick, isActive }) => {
  // Calculate stack positioning
  // isActive is index 0 in the current view
  const offset = index * 40;
  const scale = 1 - index * 0.05;
  const opacity = 1 - index * 0.2;
  const zIndex = totalCards - index;

  return (
    <motion.div
      layout
      custom={direction}
      initial={{
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8
      }}
      animate={{
        x: 0,
        y: offset,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        filter: isActive ? 'blur(0px)' : 'blur(2px)'
      }}
      exit={{
        x: direction > 0 ? -300 : 300,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.4 }
      }}
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={onDragEnd}
      whileTap={isActive ? { scale: 0.98 } : {}}
      className="absolute top-0 left-0 w-full h-full cursor-grab active:cursor-grabbing"
    >
      <div className="relative w-full h-full bg-[#0f172a] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
        </div>

        {/* Content Overlay (Small Info) */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                {project.category}
              </span>
              <div className="flex gap-1">
                {project.tech.slice(0, 2).map(t => (
                  <span key={t} className="px-2 py-0.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[8px] text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
              {project.title}
            </h3>

            <p className="text-text-muted text-sm line-clamp-2 max-w-md">
              {project.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onClick(project)}
              className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn"
            >
              <span className="relative">
                Check Details
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-background transition-colors">
                <Maximize2 size={14} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Decorative corner icon */}
        <div className="absolute top-6 right-6 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
          {project.category === 'AI/ML' ? <Cpu size={40} /> : <Globe size={40} />}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  const nextProject = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const startTimer = useCallback((delay = 3000) => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextProject();
    }, delay);
  }, [nextProject]);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isInteracting) {
          startTimer(3000);
        } else {
          stopTimer();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      stopTimer();
      observer.disconnect();
    };
  }, [isInteracting, startTimer]);

  const handleDragEnd = (event, info) => {
    setIsInteracting(true);
    stopTimer();
    const threshold = 100;
    if (info.offset.x < -threshold) {
      nextProject();
    } else if (info.offset.x > threshold) {
      prevProject();
    }
  };

  const handleManualAction = (action) => {
    setIsInteracting(true);
    stopTimer();
    action();
  };

  // Get current and next 2 projects for the stack
  const visibleProjects = [
    projects[index],
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden bg-[#050816]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Layers size={14} className="text-secondary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted">
                Portfolio Showcase
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Featured <br />
              <span className="text-gradient">Innovations</span>
            </h2>

            <p className="text-text-muted text-xl leading-relaxed max-w-lg font-light">
              Explore a curated selection of my most impactful projects, ranging from deep neural architectures to
              immersive web experiences.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-4">
                {projects.slice(0, 4).map((p, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050816] overflow-hidden bg-[#0f172a]">
                    <img src={p.image} className="w-full h-full object-cover" alt="" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold">{projects.length}+ Projects</p>
                <p className="text-text-muted text-xs uppercase tracking-widest">Successfully Deployed</p>
              </div>
            </div>

          </motion.div>

          {/* Cards Stack Area */}
          <div className="relative h-[600px] w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto group/stack-section">

            {/* Floating Navigation Buttons */}
            <div className="absolute top-1/2 -left-12 -right-12 -translate-y-1/2 z-40 flex justify-between pointer-events-none opacity-0 group-hover/stack-section:opacity-100 transition-opacity hidden md:flex">
              <button
                onClick={() => handleManualAction(prevProject)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all pointer-events-auto -translate-x-4 group-hover/stack-section:translate-x-0"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleManualAction(nextProject)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all pointer-events-auto translate-x-4 group-hover/stack-section:translate-x-0"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="relative w-full h-[500px] perspect-1000">
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                {visibleProjects.slice(0, 3).map((project, i) => (
                  <ProjectCard
                    key={`${project.id}-${index + i}`}
                    project={project}
                    index={i}
                    totalCards={3}
                    direction={direction}
                    onDragEnd={handleDragEnd}
                    onClick={setSelectedProject}
                    isActive={i === 0}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Mobile Navigation controls */}
            <div className="flex md:hidden justify-center gap-6 mt-12">
              <button
                onClick={() => handleManualAction(prevProject)}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white active:bg-primary transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleManualAction(nextProject)}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white active:bg-primary transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Instruction text */}
            <div className="flex justify-center mt-8 md:mt-12">
              <p className="text-text-muted text-xs font-medium animate-pulse flex items-center gap-2 tracking-widest uppercase">
                <ArrowUpRight size={14} /> Drag to cycle through
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Expanded Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0f172a] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all"
              >
                <X size={24} />
              </button>

              {/* Media Section */}
              <div className="lg:w-3/5 h-[40vh] lg:h-auto overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Section */}
              <div className="lg:w-2/5 p-10 md:p-16 overflow-y-auto bg-[#0f172a]">
                <div className="space-y-10">
                  <div className="space-y-4">
                    <span className="px-4 py-1.5 bg-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" /> Project Insight
                    </h4>
                    <p className="text-text-muted text-lg leading-relaxed font-light">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>

                    {selectedProject.features && (
                      <div className="grid grid-cols-1 gap-3 pt-4">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-white/80 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted">Stack Architecture</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex flex-wrap gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white text-background rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary transition-all"
                    >
                      <Github size={20} /> Source Code
                    </a>
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
                      >
                        <ExternalLink size={20} /> Live Experience
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;


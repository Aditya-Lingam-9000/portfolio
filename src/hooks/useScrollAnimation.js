import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            // Remove animation class when element leaves viewport
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.section, .project-card, .timeline-item, .skills-tool-card, .skill-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

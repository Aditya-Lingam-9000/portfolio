import { Code2, Brain, Globe } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { useState, useEffect, useRef } from 'react';

const iconComponents = {
  Code2,
  Brain,
  Globe
};

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleBars(new Set(
                skillCategories.flatMap(cat => cat.skills.map(skill => skill.name))
              ));
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const IconComponent = iconComponents[category.icon];
            return (
              <div key={category.id} className="skill-card">
                <div className="skill-card-header">
                  <IconComponent className="skill-card-icon" size={28} />
                  <h3 className="skill-card-title">{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: visibleBars.has(skill.name) ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

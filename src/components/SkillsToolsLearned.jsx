import { Component, Layout, Sparkles } from 'lucide-react';
import { skillsToolsLearned } from '../data/skillsToolsLearned';

const iconComponents = {
  Component,
  Layout,
  Sparkles
};

const SkillsToolsLearned = () => {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Learning Journey</span>
          <h2 className="section-title">Skills & Tools Learned</h2>
          <p className="section-subtitle">How this portfolio reflects my learning journey</p>
        </div>

        <div className="skills-tools-grid">
          {skillsToolsLearned.map((item, index) => {
            const IconComponent = iconComponents[item.icon];
            return (
              <div
                key={item.id}
                className="skills-tool-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="skills-tool-header">
                  <IconComponent className="skills-tool-icon" size={32} />
                  <h3 className="skills-tool-title">{item.title}</h3>
                </div>

                <p className="skills-tool-description">{item.description}</p>

                <div className="skills-tool-points">
                  <h4 className="skills-tool-points-title">Key Learnings:</h4>
                  <ul className="skills-tool-list">
                    {item.keyPoints.map((point, idx) => (
                      <li key={idx} className="skills-tool-list-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="skills-tool-footer">
                  <span className="skills-tool-level">Level: {item.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsToolsLearned;

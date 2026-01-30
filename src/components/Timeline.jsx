import { GraduationCap, Award, Briefcase } from 'lucide-react';
import { timelineItems } from '../data/timeline';

const Timeline = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap size={20} />;
      case 'certification':
        return <Award size={20} />;
      case 'achievement':
        return <Briefcase size={20} />;
      default:
        return <GraduationCap size={20} />;
    }
  };

  return (
    <section id="timeline" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Timeline</h2>
          <p className="section-subtitle">Education and achievements</p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {getIcon(item.type)}
                </div>
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-organization">{item.organization}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
              <div className="timeline-node"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

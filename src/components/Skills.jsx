import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { allTechSkills } from '../data/skills';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const techCardsRef = useRef([]);

  useEffect(() => {
    // Animate section title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    }

    // Animate tech cards with stagger
    if (techCardsRef.current.length > 0) {
      techCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 20 },
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true,
              },
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.05 + (index % 4) * 0.05,
              ease: 'power3.out',
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="skills">
      <div className="container">
        <h2 ref={titleRef} className="skills-title">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="skills-subtitle">
          Tech stack I leverage to develop modern solutions
        </p>

        {/* Tech Cards Grid */}
        <div className="tech-cards-grid">
          {allTechSkills.map((tech, index) => (
            <div
              key={tech.name}
              ref={(el) => (techCardsRef.current[index] = el)}
              className="tech-card"
              data-category={tech.category}
            >
              <div className="tech-icon">
                <i className={tech.icon}></i>
              </div>
              <h3 className="tech-name">{tech.name}</h3>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="skills-stats">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-content">
                <p className="stat-number">{allTechSkills.length}</p>
                <h4 className="stat-label">Total Skills</h4>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="stat-content">
                <p className="stat-number">2</p>
                <h4 className="stat-label">Expertise Areas</h4>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="stat-content">
                <p className="stat-number">2+</p>
                <h4 className="stat-label">Years Experience</h4>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="stat-content">
                <p className="stat-number">10+</p>
                <h4 className="stat-label">Projects Completed</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

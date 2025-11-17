import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projects';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    // Animate title on scroll into view
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

    // Stagger animate projects
    if (projectsRef.current.length > 0) {
      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(
            project,
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
              delay: 0.05 + index * 0.05,
              ease: 'power3.out',
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="projects">
      <div className="container">
        <h2 ref={titleRef} className="projects-title">
          Recent <span className="gradient-text">Work</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className={`card project-card ${project.featured ? 'featured' : ''}`}
            >
              {/* Hover Overlay with Icons */}
              <div className="project-hover-overlay">
                <div className="project-links-overlay">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="project-icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      className="project-icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fa-solid fa-external-link-alt"></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

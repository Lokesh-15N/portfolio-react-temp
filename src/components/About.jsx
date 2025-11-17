import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);


  useEffect(() => {
    // Animate title
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

    // Animate content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -30 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="about">
      <div className="container">
        <h2 ref={titleRef} className="about-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="about-content">
          <div className="about-photo-section">
            <div className="photo-placeholder">
              <img src="https://media.istockphoto.com/id/1328852036/vector/letter-r-and-leaf-vector-stock-illustration-design-template.jpg?s=612x612&w=0&k=20&c=vf_g_H_BPOoqV-fG_J7gdgxFAJ9x1TH2Mp0jUULQLbA=" alt="Profile" className="photo-gradient" />
            </div>
          </div>
          
          <div ref={contentRef} className="about-text">
            <p>
              I'm a committed software engineer specializing in building powerful web solutions. Proficient in contemporary JavaScript libraries and server-side frameworks, I bring concepts to life through code. My methodology merges structured programming with intuitive design principles, and I'm passionate about ongoing growth and keeping pace with current development standards and technologies. Outside of development, I engage with open-source communities and investigate new tools to expand my technical abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

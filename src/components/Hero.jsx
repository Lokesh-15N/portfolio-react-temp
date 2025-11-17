import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const glowRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);

  const stats = [
      { value: '10+', label: 'Completed Works' },
      { value: '5+', label: 'Tech Skills' },
      { value: '10+', label: 'Hackathon Achievements' }
  ];

  const roles = ['Full Stack Dev', 'Problem Solver', 'Tech Innovator', 'Java Developer'];
  // Role cycling - disabled
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);
  */

  // Load animations & parallax
  useEffect(() => {
    // Set initial states to visible (fix for appear on scroll)
    gsap.set(contentRef.current, { opacity: 1, y: 0 });
    gsap.set(titleRef.current, { opacity: 1, y: 0 });
    gsap.set('.hero-stat', { opacity: 1, scale: 1 });
    gsap.set('.hero-btn', { opacity: 1, y: 0 });
    gsap.set('.hero-badge', { opacity: 1, y: 0 });
    gsap.set('.hero-subtitle', { opacity: 1, y: 0 });

    const tl = gsap.timeline({ delay: 0.2 });

    // Glow animation
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.5,
        scale: 1.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Content entrance - now animates from invisible to visible
    tl.fromTo(contentRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.hero-badge',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.7'
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo('.hero-stat',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out' },
      '-=0.5'
    )
    .fromTo('.hero-btn',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );
  }, []);

return (
    <section ref={heroRef} className="hero">
        <div className="hero-background">
            <div ref={glowRef} className="hero-glow"></div>
            <div className="hero-grid"></div>
            <div className="hero-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>
        </div>

        <div className="hero-container">
            <div ref={contentRef} className="hero-content">

                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    Open to new projects
                </div>

                <h1 ref={titleRef} className="hero-title">
                    This is <span className="name-highlight">Lokesh</span>
                    <br />
                    - <span className="role-text">Web Developer</span>
                </h1>

                <p className="hero-subtitle">
                  Crafting cutting-edge web applications using the latest tech stack. Dedicated to delivering smooth user interfaces and robust, scalable systems.
                </p>

                <div className="hero-stats">
                    {stats.map((stat, i) => (
                        <div key={i} className="hero-stat">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="hero-actions">
                    <button className="hero-btn btn-primary" onClick={() => {
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        See My Work
                        <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>

                    <button className="hero-btn btn-secondary" onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Get In Touch
                        <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        <div className="scroll-indicator" onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}>
            <div className="scroll-line"></div>
            <div className="scroll-text">Scroll</div>
        </div>
    </section>
);
};

export default Hero;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactItemsRef = useRef([]);

  const contactMethods = [
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: 'lokeshnighotln@gmail.com',
      link: 'mailto:lokeshnighotln@gmail.com',
    },
    {
      icon: 'fa-brands fa-linkedin',
      label: 'LinkedIn',
      value: '@lokesh-nighot-ln',
      link: 'https://linkedin.com/in/lokesh-nighot-ln',
    },
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      value: '@Lokesh-15N',
      link: 'https://github.com/Lokesh-15N',
    },
    {
      icon: 'fa-brands fa-instagram',
      label: 'Instagram',
      value: '@lokeshnighot_15',
      link: 'https://instagram.com/lokeshnighot_15',
    },
    {
      icon: 'fa-brands fa-x-twitter',
      label: 'X',
      value: '@LokeshN06',
      link: 'https://x.com/LokeshN06',
    }
  ];

  useEffect(() => {
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

    if (contactItemsRef.current.length > 0) {
      contactItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
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
              delay: 0.05 + index * 0.1,
              ease: 'power3.out',
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="contact">
      <div className="container">
        <h2 ref={titleRef} className="contact-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <p className="contact-subtitle">
          Interested in working together or discussing ideas? I'm all ears.
        </p>

        <div className="contact-logos">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              ref={(el) => (contactItemsRef.current[index] = el)}
              className="contact-logo-item"
              target="_blank"
              rel="noopener noreferrer"
              title={method.label}
            >
              <i className={method.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

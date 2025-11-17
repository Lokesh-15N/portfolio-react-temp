import Navbar from './components/Navbar';
import ThreeDBackground from './components/ThreeDBackground';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import useLenisScroll from './hooks/useLenisScroll';
import './App.css';

function App() {
  useLenisScroll();

  return (
    <>
      <Navbar />
      <ThreeDBackground />
      <div className="scroll-container">
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;

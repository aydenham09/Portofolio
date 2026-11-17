import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;

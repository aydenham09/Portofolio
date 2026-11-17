import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Systems from './components/Systems';
import Process from './components/Process';
import Wins from './components/Wins';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div id="top" className="relative min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Systems />
        <Process />
        <Wins />
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;

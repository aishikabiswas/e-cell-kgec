import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { ScrollProgress } from './components/ui/scroll-progress';
import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import PastEvents from './sections/PastEvents';
import Sponsors from './sections/Sponsors';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Apply saved theme on load, defaulting to light
    const saved = localStorage.getItem('theme') ?? 'light';
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <PastEvents />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

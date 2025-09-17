import dynamic from 'next/dynamic';
import Navbar from './_components/Navbar/Navbar';
import About from './_sections/About/About';
import Projects from './_sections/Projects/Projects';
import Education from './_sections/Education/Education';
import Contact from './_sections/Contact/Contact';

// Dynamically import client-side components with SSR disabled
const ThemeToggle = dynamic(() => import('./_components/ThemeToggle/ThemeToggle'), {
  ssr: false,
  loading: () => <div style={{ width: 60, height: 60 }} /> // Placeholder
});

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <ThemeToggle />
    </div>
  );
}

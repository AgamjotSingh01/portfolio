import Navbar from './_components/Navbar/Navbar';
import About from './_sections/About/About';
import Projects from './_sections/Projects/Projects';
import Education from './_sections/Education/Education';
import Contact from './_sections/Contact/Contact';
import ThemeToggle from './_components/ThemeToggle/ThemeToggle';

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

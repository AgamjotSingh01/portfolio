'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Navbar.module.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navLinks.map(link => link.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={styles.navbar}
    >
      <nav className={styles.container}>
        <div className={styles.logo}>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={styles.logoLink}
          >
            Agamjot Singh
          </ScrollLink>
        </div>
        
        <ul className={styles.navList}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <ScrollLink
                to={id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

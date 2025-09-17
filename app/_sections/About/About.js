'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { skills } from '../../_data/education';
import styles from './About.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const handleDownloadCV = () => {
    // Create a temporary link to download the CV
    const link = document.createElement('a');
    link.href = '/Agamjot_Singh_Resume.pdf'; // You'll need to add this file to public folder
    link.download = 'Agamjot_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className={styles.content}
        >
          <div className={styles.imageSection}>
            <motion.div variants={fadeInUp} className={styles.imageContainer}>
              <Image
                src="/passport.jpg"
                alt="Agamjot Singh"
                width={400}
                height={400}
                className={styles.avatar}
                priority
              />
              <div className={styles.imageOverlay}></div>
            </motion.div>
          </div>
          
          <div className={styles.infoSection}>
            <motion.div variants={fadeInUp} className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span>Hello, I'm</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className={styles.name}>
              Agamjot Singh
            </motion.h1>
            
            <motion.div variants={fadeInUp} className={styles.title}>
              <span className={styles.highlight}>Full-Stack Developer</span> & 
              <span className={styles.highlight}> AI Enthusiast</span>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.location}>
              <FaMapMarkerAlt />
              <span>Chandigarh, India</span>
              <FaGraduationCap />
              <span>B.Tech at NMIMS</span>
            </motion.div>
            
            <motion.p variants={fadeInUp} className={styles.description}>
              Passionate full-stack developer pursuing B.Tech in Computer Science at NMIMS Chandigarh. 
              I specialize in building scalable web applications and AI-driven solutions with expertise 
              in React, Next.js, Flask, and Machine Learning. With hands-on experience in enterprise 
              applications and a strong foundation in data science, I love turning complex problems 
              into elegant, user-friendly solutions.
            </motion.p>

            <motion.div variants={fadeInUp} className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3+</span>
                <span className={styles.statLabel}>Major Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>DSA Question Solved</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Hackathons</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.skillsContainer}>
              <h3 className={styles.skillsTitle}>Technical Expertise</h3>
              
              <div className={styles.skillCategory}>
                <h4>Languages</h4>
                <div className={styles.skillTags}>
                  {skills.languages.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={styles.skillTag}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h4>Frameworks & Libraries</h4>
                <div className={styles.skillTags}>
                  {skills.frameworks.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={styles.skillTag}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h4>Data Science & ML</h4>
                <div className={styles.skillTags}>
                  {skills.dataScience.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={styles.skillTag}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.actions}>
              <button onClick={handleDownloadCV} className={styles.downloadBtn}>
                <FaDownload />
                <span>Download CV</span>
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className={styles.contactBtn}
              >
                Get In Touch
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

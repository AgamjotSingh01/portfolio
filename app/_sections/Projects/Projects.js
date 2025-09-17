'use client';
import { motion } from 'framer-motion';
import ProjectCard from '../../_components/ProjectCard/ProjectCard';
import { projects } from '../../_data/projects';
import styles from './Projects.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Featured Projects
          </motion.h2>
          
          <motion.p variants={fadeInUp} className={styles.subtitle}>
            A showcase of my latest work in full-stack development, AI/ML, and innovative solutions
          </motion.p>

          <motion.div variants={stagger} className={styles.projectGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                custom={index}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

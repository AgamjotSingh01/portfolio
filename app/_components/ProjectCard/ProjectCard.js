'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaClock, FaCode } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.card}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={project.image || '/project-placeholder.jpg'}
          alt={project.title}
          width={400}
          height={250}
          className={styles.image}
        />
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.links}>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                <span>Source Code</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.meta}>
            <span className={styles.duration}>
              <FaClock />
              {project.duration}
            </span>
          </div>
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.technologies}>
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className={styles.techMore}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {project.features && (
          <div className={styles.features}>
            <h4 className={styles.featuresTitle}>
              <FaCode />
              Key Features
            </h4>
            <ul className={styles.featuresList}>
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className={styles.feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

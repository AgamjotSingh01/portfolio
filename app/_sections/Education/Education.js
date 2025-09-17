'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaCertificate } from 'react-icons/fa';
import { education, certifications } from '../../_data/education';
import styles from './Education.module.css';

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

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Education & Achievements
          </motion.h2>

          <div className={styles.content}>
            {/* Education Timeline */}
            <motion.div variants={fadeInUp} className={styles.educationSection}>
              <h3 className={styles.sectionTitle}>
                <FaGraduationCap />
                Academic Journey
              </h3>
              
              <div className={styles.timeline}>
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={fadeInUp}
                    className={styles.timelineItem}
                  >
                    <div className={styles.timelineMarker}>
                      <div className={styles.timelineDot}></div>
                      {index < education.length - 1 && <div className={styles.timelineLine}></div>}
                    </div>
                    
                    <div className={styles.educationCard}>
                      <div className={styles.cardHeader}>
                        <h4 className={styles.degree}>{edu.degree}</h4>
                        <span className={styles.year}>
                          <FaCalendarAlt />
                          {edu.year}
                        </span>
                      </div>
                      
                      <div className={styles.institution}>
                        <FaMapMarkerAlt />
                        <span>{edu.institution}, {edu.location}</span>
                      </div>
                      
                      {edu.university && (
                        <div className={styles.university}>
                          University: {edu.university}
                        </div>
                      )}
                      
                      {edu.board && (
                        <div className={styles.board}>
                          Board: {edu.board}
                        </div>
                      )}
                      
                      <div className={styles.score}>
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                      </div>
                      
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className={styles.coursework}>
                          <h5>Relevant Coursework:</h5>
                          <div className={styles.courseworkTags}>
                            {edu.coursework.map((course, idx) => (
                              <span key={idx} className={styles.courseTag}>
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className={styles.achievements}>
                          <h5>
                            <FaTrophy />
                            Achievements:
                          </h5>
                          <ul className={styles.achievementsList}>
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className={styles.achievement}>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeInUp} className={styles.certificationsSection}>
              <h3 className={styles.sectionTitle}>
                <FaCertificate />
                Certifications
              </h3>
              
              <div className={styles.certificationsGrid}>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    variants={fadeInUp}
                    className={styles.certCard}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.certIcon}>
                      <FaCertificate />
                    </div>
                    <h4 className={styles.certTitle}>{cert.title}</h4>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                    <div className={styles.certMeta}>
                      <span className={styles.certYear}>{cert.year}</span>
                      <span className={styles.certType}>{cert.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

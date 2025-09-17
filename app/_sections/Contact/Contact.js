'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane, FaCode } from 'react-icons/fa';
import styles from './Contact.module.css';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'agamjot424@gmail.com',
      link: 'mailto:agamjot424@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 99927-57777',
      link: 'tel:+919992757777'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Chandigarh, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/AgamjotSingh01',
      color: '#333'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/agamjot-singh-monga-377957269/',
      color: '#0077b5'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/agamjot.singh._/',
      color: '#e4405f'
    },
    {
      icon: FaCode,
      label: 'LeetCode',
      url: 'https://leetcode.com/u/Agamjot_Monga/',
      color: '#ebca0fff'
    }
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Get In Touch
          </motion.h2>
          
          <motion.p variants={fadeInUp} className={styles.subtitle}>
            Let's discuss your next project or collaboration opportunity
          </motion.p>

          <div className={styles.content}>
            <motion.div variants={fadeInUp} className={styles.contactInfo}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              
              <div className={styles.infoList}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={styles.infoItem}
                  >
                    <div className={styles.infoIcon}>
                      <info.icon />
                    </div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className={styles.infoValue}>
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.infoValue}>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon />
                      <span>{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.contactForm}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Tell me about your project or just say hello..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className={styles.spinner}></div>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.successMessage}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            © 2025 Agamjot Singh. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </footer>
    </section>
  );
}

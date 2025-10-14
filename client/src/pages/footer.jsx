import React from 'react';
import { Facebook, Youtube, Instagram } from 'lucide-react';
import styles from '../styles/Footer.module.css';
import logo from '../assets/worknAI logo.jpeg'; // ✅ imported logo

const Footer = () => {
  return (
    <>
      {/* Demo Section */}
      <div className={styles.demoSection}>
        <video 
          className={styles.videoBackground}
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={require('../assets/home.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className={styles.overlay}></div>
        
        <div className={styles.demoContent}>
          <h2 className={styles.demoTitle}>Get A Free Demo Session</h2>
          <p className={styles.demoDescription}>
            Discover what it's like to be part of Newgen–real experiences from those who've been there.
          </p>
          <button className={styles.demoButton}>Get Access Now</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerGradient}></div>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                {/* 🔹 Imported logo */}
                <img
                  src={logo}
                  alt="WorknAI Logo"
                  className={styles.companyLogo}
                />
                {/* Optional text fallback */}
                <div className={styles.logoText}>
                  <span className={styles.logoworknai}>WORKNAI</span>
                  <span className={styles.logoSoftech}>SOFTECH_</span>
                </div>
              </div>
            </div>

            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>Contact Us at:</h3>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                +91 9096989493
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>✉</span>
                info@worknai.in
              </p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>IMPORTANT LINKS</h3>
            <div className={styles.sectionDivider}></div>
            <ul className={styles.footerLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">All Courses</a></li>
              <li><a href="#development">Development</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>OUR COMPANY</h3>
            <div className={styles.sectionDivider}></div>
            <ul className={styles.footerLinks}>
              <li><a href="#support">Technical Support</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className={`${styles.footerSection} ${styles.socialSection}`}>
            <div className={styles.socialIcons}>
              <a href="#facebook" className={`${styles.socialIcon} ${styles.facebook}`}>
                <Facebook size={24} />
              </a>
              <a href="#twitter" className={`${styles.socialIcon} ${styles.twitter}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#youtube" className={`${styles.socialIcon} ${styles.youtube}`}>
                <Youtube size={24} />
              </a>
              <a href="#instagram" className={`${styles.socialIcon} ${styles.instagram}`}>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

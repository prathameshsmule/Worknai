import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../assets/worknAI logo.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showOthersDropdown, setShowOthersDropdown] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container topbar-flex">
          <div className="top-left">
            <a href="mailto:enquiry@newgensoftech.com" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@worknai.com
            </a>
            <a href="tel:+918888848588" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 
            </a>
            <a href="tel:020-29993974" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              020-29993974
            </a>
          </div>

          <div className="top-right">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://x.com" className="social-icon" aria-label="X" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/home" className="logo" onClick={closeMobile}>
              <div className="logo-img-wrap">
                <img src={logo} alt="NEWGEN SOFTECH" className="logo-img" />
              </div>
              <div className="logo-text">
                <div className="logo-title">WorknAi</div>
                <div className="logo-subtitle">SOFTECH</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-links">
              <li><Link to="/home">Home</Link></li>

              <li
                className="dropdown"
                onMouseEnter={() => setShowCoursesDropdown(true)}
                onMouseLeave={() => setShowCoursesDropdown(false)}
              >
                <button
                  className="dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded={showCoursesDropdown}
                  type="button"
                >
                  All Courses
                </button>

                {showCoursesDropdown && (
                  <div className="dropdown-menu mega-menu">
                    <div className="mega-menu-grid">
                      {/* DEVELOPMENT COURSES */}
                      <div className="mega-menu-column">
                        <h3 className="mega-menu-title">DEVELOPMENT COURSES</h3>

                        <Link to="/DotNetPage" className="course-link">
                          <span>.NET Full Stack Developer</span>
                        </Link>

                        <Link to="/JavaPage" className="course-link">
                          <span>JAVA Full Stack Developer</span>
                          <span className="badge-trending">Trending</span>
                        </Link>

                        <Link to="/Python" className="course-link">
                          <span>Python Full Stack Developer</span>
                          <span className="badge-trending">Trending</span>
                        </Link>

                        <Link to="/MernPage" className="course-link">
                          <span>MERN Full Stack Developer</span>
                          <span className="badge-trending">Trending</span>
                        </Link>
                      </div>

                      {/* DATABASE COURSES */}
                      <div className="mega-menu-column">
                        <h3 className="mega-menu-title">DATABASE COURSES</h3>
                        <Link to="/SqlPage" className="course-link">
                          <span>PL/SQL Developer</span>
                        </Link>
                        <Link to="/DataAnalyst" className="course-link">
                          <span>DATA Analyst</span>
                          <span className="badge-trending">Trending</span>
                        </Link>
                        <Link to="/DataEng" className="course-link">
                          <span>DATA Engineering</span>
                        </Link>
                        <Link to="/DataScience" className="course-link">
                          <span>DATA Science</span>
                          <span className="badge-trending">Trending</span>
                        </Link>
                        <Link to="/AiPage" className="course-link">
                          <span>AI Developer</span>
                          <span className="badge-trending">Trending</span>
                        </Link>
                      </div>

                      {/* CLOUD + TESTING */}
                      <div className="mega-menu-column">
                        <h3 className="mega-menu-title">CLOUD COMPUTING COURSES</h3>
                        <Link to="/AwsPage" className="course-link">
                          <span>AWS DEVOPS</span>
                          <span className="badge-trending">Trending</span>
                        </Link>
                        <Link to="/AzurePage" className="course-link">
                          <span>AZURE</span>
                        </Link>
                        <Link to="/Devops" className="course-link">
                          <span>DEVOPS</span>
                          <span className="badge-trending">Trending</span>
                        </Link>

                        <h3 className="mega-menu-title" style={{ marginTop: 24 }}>SOFTWARE TESTING COURSES</h3>
                        <Link to="/ManualT" className="course-link">
                          <span>Manual Testing</span>
                        </Link>
                        <Link to="/Automation" className="course-link">
                          <span>Automation Testing</span>
                        </Link>
                      </div>

                      {/* SAP COURSES */}
                      <div className="mega-menu-column">
                        <h3 className="mega-menu-title">SAP COURSES</h3>
                        <Link to="/SapMM" className="course-link">
                          <span>SAP MM</span>
                        </Link>
                        <Link to="/SapFico" className="course-link">
                          <span>SAP FICO</span>
                        </Link>
                        <Link to="/SapPP" className="course-link">
                          <span>SAP PP</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li><a href="#batches">Upcoming Batches</a></li>
              <li><Link to="/CompanyPage">Development</Link></li>
              <li><Link to="/TechnicalPage">Technical Support</Link></li>
              <li><Link to="/AboutUs">About Us</Link></li>
              <li><Link to="/ContactPage">Contact Us</Link></li>

              <li
                className="dropdown"
                onMouseEnter={() => setShowOthersDropdown(true)}
                onMouseLeave={() => setShowOthersDropdown(false)}
              >
                <button
                  className="dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded={showOthersDropdown}
                  type="button"
                >
                  Others
                </button>

                {showOthersDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/blog">Blog</Link>
                    <Link to="/JobPage">Job Openings</Link>
                  
                  </div>
                )}
              </li>
            </ul>

            {/* Right Actions */}
            <div className="nav-actions">
              <button className="search-btn" aria-label="Search" type="button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <a className="enroll-btn" href="#enroll">Enroll Now</a>
              <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                type="button"
              >
                {isMobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <Link to="/home" onClick={closeMobile}>Home</Link>

              <details className="mobile-accordion">
                <summary>All Courses</summary>
                <div className="mobile-accordion-panel">
                  <div className="mobile-course-section">
                    <div className="mobile-section-title">DEVELOPMENT COURSES</div>
                    <Link to="/DotNetPage" onClick={closeMobile}>.NET Full Stack Developer</Link>
                    <Link to="/JavaPage" onClick={closeMobile}>JAVA Full Stack Developer</Link>
                    <Link to="/Python" onClick={closeMobile}>Python Full Stack Developer</Link>
                    <Link to="/MernPage" onClick={closeMobile}>MERN Full Stack Developer</Link>
                  </div>

                  <div className="mobile-course-section">
                    <div className="mobile-section-title">DATABASE COURSES</div>
                    <Link to="/SqlPage" onClick={closeMobile}>PL/SQL Developer</Link>
                    <Link to="/DataAnalyst" onClick={closeMobile}>DATA Analyst</Link>
                    <Link to="/DataEng" onClick={closeMobile}>DATA Engineering</Link>
                    <Link to="/DataScience" onClick={closeMobile}>DATA Science</Link>
                    <Link to="/AiPage" onClick={closeMobile}>AI Developer</Link>
                  </div>

                  <div className="mobile-course-section">
                    <div className="mobile-section-title">CLOUD COMPUTING COURSES</div>
                    <Link to="/AwsPage" onClick={closeMobile}>AWS DEVOPS</Link>
                    <Link to="/AzurePage" onClick={closeMobile}>AZURE</Link>
                    <Link to="/Devops" onClick={closeMobile}>DEVOPS</Link>
                  </div>

                  <div className="mobile-course-section">
                    <div className="mobile-section-title">SOFTWARE TESTING COURSES</div>
                    <Link to="/ManualT" onClick={closeMobile}>Manual Testing</Link>
                    <Link to="/Automation" onClick={closeMobile}>Automation Testing</Link>
                  </div>

                  <div className="mobile-course-section">
                    <div className="mobile-section-title">SAP COURSES</div>
                    <Link to="/sap-mm" onClick={closeMobile}>SAP MM</Link>
                    <Link to="/SapFico" onClick={closeMobile}>SAP FICO</Link>
                    <Link to="/SapPP" onClick={closeMobile}>SAP PP</Link>
                  </div>
                </div>
              </details>

              <a href="#batches" onClick={closeMobile}>Upcoming Batches</a>
              <Link to="/CompanyPage" onClick={closeMobile}>Development</Link>
              <Link to="/TechnicalPage" onClick={closeMobile}>Technical Support</Link>
              <Link to="/AboutUs" onClick={closeMobile}>About Us</Link>
              <Link to="/ContactPage" onClick={closeMobile}>Contact Us</Link>

              <details className="mobile-accordion">
                <summary>Others</summary>
                <div className="mobile-accordion-panel">
                  <Link to="/blog" onClick={closeMobile}>Blog</Link>
                  <Link to="/JobPage" onClick={closeMobile}>Job Openings</Link>
                  
                </div>
              </details>

              <a className="enroll-btn-mobile" href="#enroll" onClick={closeMobile}>Enroll Now</a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

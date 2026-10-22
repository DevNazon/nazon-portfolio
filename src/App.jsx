
import { useEffect, useState } from "react";
import "./App.css";

import devnazLogo from "./assets/devnaz-logo.png";
import heroBackground from "./assets/Background.png";

import househuntImage from "./assets/projects/nazon_portfolio_project_previews/househunt.png";
import hostelImage from "./assets/projects/nazon_portfolio_project_previews/hostel.png";
import schoolImage from "./assets/projects/nazon_portfolio_project_previews/school.png";
import posImage from "./assets/projects/nazon_portfolio_project_previews/pos.png";
import profileImage from "./assets/projects/nazon_portfolio_project_previews/nazon_profile.jpeg";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        d="M7 17L17 7M8 7h9v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        d="M6 9v9M6 6.2v.1M10 18v-5.2c0-2 1.1-3.1 2.7-3.1 1.6 0 2.3 1.1 2.3 3.1V18M10 9.7c.8-1.2 1.8-1.8 3.2-1.8 2.6 0 4.8 1.7 4.8 5.3V18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        d="M9 19c-4 .9-4-2-5-2m10 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.3-3.3.1-.3.6-1.6-.1-3.2 0 0-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C5.5 5.6 4.4 5.9 4.4 5.9c-.7 1.6-.2 2.9-.1 3.2A4.7 4.7 0 0 0 3 12.4c0 4.7 2.7 5.8 5.5 6.1-.6.5-.6 1.2-.5 2V21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 7l8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SkillMeter({ name, level }) {
  return (
    <div className="skill-meter">
      <div className="skill-meter-top">
        <span>{name}</span>
        <strong>{level}%</strong>
      </div>

      <div
        className="skill-meter-track"
        role="progressbar"
        aria-label={`${name} self-assessed proficiency`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={level}
      >
        <span
          className="skill-meter-fill"
          style={{ "--skill-level": `${level}%` }}
        />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const phrase = "Nazon Abuga";
    let index = 0;

    const timer = setInterval(() => {
      setTypedText(phrase.slice(0, index + 1));
      index += 1;

      if (index === phrase.length) {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a
          href="#home"
          className="nav-logo devnaz-logo"
          onClick={closeMenu}
          aria-label="DevNaz Home"
        >
          <img
            src={devnazLogo}
            alt="DevNaz logo"
            className="devnaz-logo-image"
          />
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Explore My Work</a>
          <a href="#househunt-case-study">Case Studies</a>
          <a href="#skills">Technologies</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Explore My Work</a>
          <a href="#househunt-case-study" onClick={closeMenu}>Case Studies</a>
          <a href="#skills" onClick={closeMenu}>Technologies</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <main
        id="home"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 12, 25, 0.88) 0%, rgba(5, 12, 25, 0.72) 55%, rgba(5, 12, 25, 0.55) 100%), url("${heroBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content hero-enhanced-content">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-small">HELLO, I'M</p>

            <h1 className="hero-title">
              <span className="hero-name-type">
                {typedText}
                <span className="typing-cursor" aria-hidden="true"></span>
              </span>
              <br />
              <span className="hero-role">FULL-STACK DEVELOPER</span>
            </h1>

            <p className="hero-description">
              Information Technology student focused on building modern web
              applications, practical software systems and data-driven solutions.
            </p>

            
         <div className="hero-buttons">
  <a href="#work" className="primary-button">
    View My Work
    <ArrowRightIcon />
  </a>

  <a href="/Nazon_Abuga_CV.pdf" className="secondary-button" download>
    Download CV
    <ArrowUpRightIcon />
  </a>

  <a href="#contact" className="secondary-button">
    Let's Connect
    <ArrowUpRightIcon />
  </a>
         </div>

          </div>

          <div className="hero-profile" aria-label="Nazon Abuga profile image">
            <div className="hero-profile-frame">
              <div className="hero-profile-image-wrap">
                <img
                  src={profileImage}
                  alt="Nazon Abuga"
                  className="hero-profile-image"
                />
              </div>

              <div className="hero-profile-tag">DEVELOPER / IT STUDENT</div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-tech">
            <span>PYTHON</span>
            <span>DJANGO</span>
            <span>REACT</span>
            <span>JAVASCRIPT</span>
            <span>POSTGRESQL</span>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>

            <a href="mailto:abuganazon@gmail.com" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </main>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">
        <div className="about-header">
          <p className="section-label">01 — ABOUT</p>
          <h2>I BUILD WITH PURPOSE.</h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">
              I'm a Full-Stack Developer and Information Technology student
              who enjoys turning ideas and real-world problems into practical
              digital solutions.
            </p>

            <p className="section-text">
              My main focus is web development using Python, Django,
              JavaScript and modern frontend technologies. I also work with
              relational databases and have a growing interest in data analysis
              and data-driven applications.
            </p>

            <p className="section-text">
              I learn by building. From property platforms and hostel
              management systems to school applications and point-of-sale
              software, my projects give me an opportunity to understand how
              software works from the interface to the database.
            </p>

            <a href="#work" className="about-link">
              Explore My Work
              <ArrowRightIcon />
            </a>
          </div>

          <div className="about-side">
            <div className="about-stat">
              <strong>04</strong>
              <span>Major Projects</span>
            </div>

            <div className="about-stat">
              <strong>03+</strong>
              <span>Years of IT Education</span>
            </div>

            <div className="about-stat">
              <strong>08+</strong>
              <span>Core Technologies</span>
            </div>
          </div>
        </div>

        <div className="about-principles">
          <div className="principle">
            <span>01</span>
            <div>
              <h3>BUILD</h3>
              <p>
                I learn through practical projects and real implementation.
              </p>
            </div>
          </div>

          <div className="principle">
            <span>02</span>
            <div>
              <h3>LEARN</h3>
              <p>
                I continuously improve my skills by exploring new technologies
                and approaches.
              </p>
            </div>
          </div>

          <div className="principle">
            <span>03</span>
            <div>
              <h3>SOLVE</h3>
              <p>
                I focus on understanding the problem before building the
                solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK ================= */}

      <section id="work" className="section work-section">
        <p className="section-label">02 — SELECTED WORK</p>
        <h2>PROJECTS THAT SOLVE PROBLEMS.</h2>

        <div className="project-nav">
          <a href="#househunt-case-study">01 HouseHunt</a>
          <a href="#hostel-case-study">02 Hostel</a>
          <a href="#school-case-study">03 School</a>
          <a href="#pos-case-study">04 POS</a>
        </div>
        
<div className="projects">
  {/* PROJECT 01 — HOUSEHUNT */}
  <article className="project-card project-featured">
    <div className="project-number">01</div>

    <div className="project-preview project-image-preview">
      <img
        src={househuntImage}
        alt="HouseHunt property search platform"
        className="project-image"
        loading="lazy"
      />
      <span className="project-overlay-label">
        PROPERTY DISCOVERY
      </span>
    </div>

    <div className="project-content">
      <div>
        <p className="project-category">
          FULL-STACK WEB APPLICATION
        </p>

        <h3>HouseHunt</h3>

        <p>
          A property discovery platform built to make house hunting
          more organized. Users can explore available rentals, filter
          listings and view property information in one place.
        </p>
      </div>

      <div className="project-bottom">
        <div className="project-tech">
          <span>Python</span>
          <span>Django</span>
          <span>JavaScript</span>
          <span>PostgreSQL</span>
        </div>

        <a
          href="#househunt-case-study"
          className="project-case-link"
        >
          Explore Project
          <ArrowUpRightIcon />
        </a>
      </div>
    </div>
  </article>

  {/* PROJECT 02 — HOSTEL MANAGEMENT */}
  <article className="project-card project-featured">
    <div className="project-number">02</div>

    <div className="project-preview project-image-preview">
      <img
        src={hostelImage}
        alt="University Hostel Management System"
        className="project-image"
        loading="lazy"
      />
      <span className="project-overlay-label">
        ACCOMMODATION
      </span>
    </div>

    <div className="project-content">
      <div>
        <p className="project-category">
          MANAGEMENT SYSTEM
        </p>

        <h3>Hostel Management</h3>

        <p>
          A centralized university accommodation system for organizing
          hostels, rooms, beds and student housing workflows through
          a structured web application.
        </p>
      </div>

      <div className="project-bottom">
        <div className="project-tech">
          <span>Python</span>
          <span>Django</span>
          <span>PostgreSQL</span>
        </div>

        <a
          href="#hostel-case-study"
          className="project-case-link"
        >
          Explore Project
          <ArrowUpRightIcon />
        </a>
      </div>
    </div>
  </article>

  {/* PROJECT 03 — SCHOOL MANAGEMENT */}
  <article className="project-card project-featured">
    <div className="project-number">03</div>

    <div className="project-preview project-image-preview">
      <img
        src={schoolImage}
        alt="School Management System"
        className="project-image"
        loading="lazy"
      />
      <span className="project-overlay-label">
        EDUCATION TECHNOLOGY
      </span>
    </div>

    <div className="project-content">
      <div>
        <p className="project-category">
          SCHOOL MANAGEMENT SYSTEM
        </p>

        <h3>School Management</h3>

        <p>
          A web application designed to bring student records,
          teacher information, classes and administrative workflows
          together in a more organized environment.
        </p>
      </div>

      <div className="project-bottom">
        <div className="project-tech">
          <span>Python</span>
          <span>Django</span>
          <span>SQL</span>
        </div>

        <a
          href="#school-case-study"
          className="project-case-link"
        >
          Explore Project
          <ArrowUpRightIcon />
        </a>
      </div>
    </div>
  </article>

  {/* PROJECT 04 — POINT OF SALE */}
  <article className="project-card project-featured">
    <div className="project-number">04</div>

    <div className="project-preview project-image-preview">
      <img
        src={posImage}
        alt="Point of Sale business application"
        className="project-image"
        loading="lazy"
      />
      <span className="project-overlay-label">
        BUSINESS OPERATIONS
      </span>
    </div>

    <div className="project-content">
      <div>
        <p className="project-category">
          BUSINESS APPLICATION
        </p>

        <h3>Point of Sale System</h3>

        <p>
          A business application focused on organizing product
          information, recording sales and supporting database-driven
          retail operations.
        </p>
      </div>

      <div className="project-bottom">
        <div className="project-tech">
          <span>Python</span>
          <span>Django</span>
          <span>Database</span>
        </div>

        <a
          href="#pos-case-study"
          className="project-case-link"
        >
          Explore Project
          <ArrowUpRightIcon />
        </a>
      </div>
    </div>
  </article>
</div>


        {/* ================= HOUSEHUNT CASE STUDY ================= */}

        <div id="househunt-case-study" className="case-study">
          <div className="case-study-visual">
            <div className="case-study-visual-content">
              <span>HOUSEHUNT</span>

              <strong>
                PROPERTY
                <br />
                SEARCH PLATFORM
              </strong>

              <small>DJANGO · PYTHON · JAVASCRIPT · POSTGRESQL</small>
            </div>
          </div>

          <div className="case-study-header">
            <p className="section-label">HOUSEHUNT — CASE STUDY</p>
            <h3>
              Turning house hunting into a simpler digital experience.
            </h3>
          </div>

          <div className="case-study-grid">
            <div className="case-study-block">
              <span className="case-study-label">OVERVIEW</span>
              <p>
                HouseHunt is a web application developed with Django to provide
                a structured platform for discovering and managing rental
                properties.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">PROBLEM</span>
              <p>
                Finding suitable rental properties can involve searching
                through scattered information and comparing properties manually.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">SOLUTION</span>
              <p>
                HouseHunt organizes property information in one system,
                allowing properties to be displayed consistently and searched
                using relevant filters.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">TECHNOLOGIES</span>
              <div className="case-study-tech">
                <span>Python</span>
                <span>Django</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="case-study-details">
            <div>
              <span>ROLE</span>
              <strong>Full-Stack Development</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>Web Application</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Property Management</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>Django + Python</strong>
            </div>
          </div>

          <div className="case-study-footer">
            <span>PROJECT 01 / HOUSEHUNT</span>
            <a href="#contact">
              Discuss a Project
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        {/* ================= HOSTEL CASE STUDY ================= */}

        <div id="hostel-case-study" className="case-study">
          <div className="case-study-visual">
            <div className="case-study-visual-content">
              <span>HOSTEL MANAGEMENT</span>

              <strong>
                HOSTEL
                <br />
                MANAGEMENT PLATFORM
              </strong>

              <small>DJANGO · PYTHON · POSTGRESQL</small>
            </div>
          </div>

          <div className="case-study-header">
            <p className="section-label">HOSTEL MANAGEMENT — CASE STUDY</p>
            <h3>
              Organizing university accommodation through one centralized
              system.
            </h3>
          </div>

          <div className="case-study-grid">
            <div className="case-study-block">
              <span className="case-study-label">OVERVIEW</span>
              <p>
                A Django-based university hostel management system developed
                to organize hostel facilities, rooms, beds and
                accommodation-related workflows.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">PROBLEM</span>
              <p>
                Managing hostel spaces and student accommodation can become
                difficult when information about hostels, rooms and available
                beds is handled manually.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">SOLUTION</span>
              <p>
                The system provides a centralized platform for managing hostel
                information, room structures and bed allocation workflows.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">TECHNOLOGIES</span>
              <div className="case-study-tech">
                <span>Python</span>
                <span>Django</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="case-study-details">
            <div>
              <span>ROLE</span>
              <strong>Full-Stack Development</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>University Management System</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Hostel &amp; Accommodation</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>Django + Python</strong>
            </div>
          </div>

          <div className="case-study-footer">
            <span>PROJECT 02 / HOSTEL MANAGEMENT</span>
            <a href="#contact">
              Discuss a Project
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        {/* ================= SCHOOL CASE STUDY ================= */}

        <div id="school-case-study" className="case-study">
          <div className="case-study-visual">
            <div className="case-study-visual-content">
              <span>SCHOOL MANAGEMENT</span>

              <strong>
                SCHOOL
                <br />
                MANAGEMENT SYSTEM
              </strong>

              <small>DJANGO · PYTHON · SQL</small>
            </div>
          </div>

          <div className="case-study-header">
            <p className="section-label">SCHOOL MANAGEMENT — CASE STUDY</p>
            <h3>
              Bringing essential school records and workflows into one
              organized system.
            </h3>
          </div>

          <div className="case-study-grid">
            <div className="case-study-block">
              <span className="case-study-label">OVERVIEW</span>
              <p>
                A web-based school management application developed with
                Django and Python to organize school records and support
                administrative workflows.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">PROBLEM</span>
              <p>
                Managing student, teacher and class information across separate
                records can make school administration more difficult and
                time-consuming.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">SOLUTION</span>
              <p>
                The system brings important school information into a
                centralized application where records and workflows can be
                managed more efficiently.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">TECHNOLOGIES</span>
              <div className="case-study-tech">
                <span>Python</span>
                <span>Django</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>SQL</span>
              </div>
            </div>
          </div>

          <div className="case-study-details">
            <div>
              <span>ROLE</span>
              <strong>Full-Stack Development</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>School Management System</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>School Records &amp; Administration</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>Django + Python</strong>
            </div>
          </div>

          <div className="case-study-footer">
            <span>PROJECT 03 / SCHOOL MANAGEMENT</span>
            <a href="#contact">
              Discuss a Project
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        {/* ================= POS CASE STUDY ================= */}

        <div id="pos-case-study" className="case-study">
          <div className="case-study-visual">
            <div className="case-study-visual-content">
              <span>POINT OF SALE</span>

              <strong>
                BUSINESS
                <br />
                SALES PLATFORM
              </strong>

              <small>DJANGO · PYTHON · DATABASES</small>
            </div>
          </div>

          <div className="case-study-header">
            <p className="section-label">POS SYSTEM — CASE STUDY</p>
            <h3>
              Connecting products, sales and business operations through a
              simple digital system.
            </h3>
          </div>

          <div className="case-study-grid">
            <div className="case-study-block">
              <span className="case-study-label">OVERVIEW</span>
              <p>
                A web-based point-of-sale system developed with Django and
                Python to support product management, sales records and
                database-driven business operations.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">PROBLEM</span>
              <p>
                Manual product and sales records can make it difficult to
                maintain accurate information and track business transactions
                efficiently.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">SOLUTION</span>
              <p>
                The system provides a centralized digital environment for
                managing products and recording sales while keeping important
                business information in a database.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-label">TECHNOLOGIES</span>
              <div className="case-study-tech">
                <span>Python</span>
                <span>Django</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Database</span>
              </div>
            </div>
          </div>

          <div className="case-study-details">
            <div>
              <span>ROLE</span>
              <strong>Full-Stack Development</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>Business Web Application</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Products &amp; Sales</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>Django + Python</strong>
            </div>
          </div>

          <div className="case-study-footer">
            <span>PROJECT 04 / POINT OF SALE</span>
            <a href="#contact">
              Discuss a Project
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section id="skills" className="section skills-section">
        <p className="section-label">03 — TECHNOLOGIES</p>
        <h2>WHAT I WORK WITH.</h2>

        <div className="skills-intro">
          <p>
            A practical technology stack built around web development,
            databases and data-driven problem solving.
          </p>
        </div>

        <div className="technology-list">
          <div className="technology-group">
            <div className="technology-heading">
              <span>01</span>
              <div>
                <h3>Backend &amp; Development</h3>
                <p>Building functional applications and backend systems.</p>
              </div>
            </div>

            <div className="technology-items">
              <span>Python</span>
              <span>Django</span>
              <span>JavaScript</span>
            </div>

            <div
              className="skill-meter-list"
              aria-label="Self-assessed backend skills"
            >
              <SkillMeter name="Python" level={82} />
              <SkillMeter name="Django" level={78} />
              <SkillMeter name="JavaScript" level={72} />
            </div>
          </div>

          <div className="technology-group">
            <div className="technology-heading">
              <span>02</span>
              <div>
                <h3>Frontend</h3>
                <p>Creating responsive and user-focused interfaces.</p>
              </div>
            </div>

            <div className="technology-items">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Responsive Design</span>
            </div>

            <div
              className="skill-meter-list"
              aria-label="Self-assessed frontend skills"
            >
              <SkillMeter name="React" level={68} />
              <SkillMeter name="HTML & CSS" level={84} />
              <SkillMeter name="Bootstrap" level={76} />
            </div>
          </div>

          <div className="technology-group">
            <div className="technology-heading">
              <span>03</span>
              <div>
                <h3>Data &amp; Databases</h3>
                <p>Working with structured data and relational databases.</p>
              </div>
            </div>

            <div className="technology-items">
              <span>SQL</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>Data Analysis</span>
            </div>

            <div
              className="skill-meter-list"
              aria-label="Self-assessed data skills"
            >
              <SkillMeter name="SQL" level={74} />
              <SkillMeter name="PostgreSQL" level={72} />
              <SkillMeter name="Data Analysis" level={65} />
            </div>
          </div>

          <div className="technology-group">
            <div className="technology-heading">
              <span>04</span>
              <div>
                <h3>Tools &amp; Workflow</h3>
                <p>Tools that support development and digital work.</p>
              </div>
            </div>

            <div className="technology-items">
              <span>Git</span>
              <span>GitHub</span>
              <span>Microsoft Office</span>
              <span>Data Entry</span>
            </div>

            <div
              className="skill-meter-list"
              aria-label="Self-assessed tools and workflow skills"
            >
              <SkillMeter name="Git & GitHub" level={66} />
              <SkillMeter name="Microsoft Office" level={82} />
              <SkillMeter name="Data Entry" level={85} />
            </div>
          </div>
        </div>

        <p className="skills-note">
          Percentages are self-assessed estimates of my current confidence and
          experience, not formal test scores.
        </p>

        <div className="skills-footer">
          <span>CURRENT STACK</span>
          <p>Python · Django · React · JavaScript · SQL</p>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}

      <section id="journey" className="section journey-section">
        <div className="journey-header">
          <p className="section-label">04 — JOURNEY</p>
          <h2>LEARNING. BUILDING. GROWING.</h2>

          <p className="journey-intro">
            My development journey is shaped by continuous learning, practical
            projects and experiences that have helped me grow from an IT
            student into a developing full-stack professional.
          </p>
        </div>

        <div className="journey-timeline">
          <div className="journey-item">
            <div className="journey-marker">
              <span>01</span>
            </div>

            <div className="journey-year">2028</div>

            <div className="journey-content">
              <span className="journey-type">EDUCATION</span>
              <h3>Bachelor of Science in Information Technology</h3>
              <p>Kisii University</p>

              <small>
                Building a strong foundation in software development,
                databases, information systems and technology.
              </small>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-marker">
              <span>02</span>
            </div>

            <div className="journey-year">2026</div>

            <div className="journey-content">
              <span className="journey-type">CERTIFICATION</span>
              <h3>Web Development</h3>
              <p>ICT Authority</p>

              <small>
                Strengthening practical skills in web development and building
                functional digital applications.
              </small>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-marker">
              <span>03</span>
            </div>

            <div className="journey-year">2026</div>

            <div className="journey-content">
              <span className="journey-type">CERTIFICATION</span>
              <h3>Data Analytics</h3>
              <p>ICT Authority</p>

              <small>
                Developing practical experience in working with data, analysis
                and data-driven problem solving.
              </small>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-marker">
              <span>04</span>
            </div>

            <div className="journey-year">2026</div>

            <div className="journey-content">
              <span className="journey-type">EXPERIENCE</span>
              <h3>Hackathon Experience</h3>
              <p>Collaborative Technology Experience</p>

              <small>
                Participating in a hackathon and applying technical knowledge
                to practical problem solving.
              </small>
            </div>
          </div>

          <div className="journey-item journey-current">
            <div className="journey-marker">
              <span>05</span>
            </div>

            <div className="journey-year">NOW</div>

            <div className="journey-content">
              <span className="journey-type">INDEPENDENT DEVELOPMENT</span>
              <h3>Building Real-World Projects</h3>
              <p>Full-Stack Development</p>

              <small>
                Continuing to build practical systems using Python, Django,
                React, JavaScript, databases and modern development workflows.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">
        <div className="contact-top">
          <p className="section-label">05 — CONTACT</p>
          <span className="contact-status">AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <div className="contact-main">
          <div className="contact-heading">
            <h2>
              HAVE AN IDEA?
              <br />
              <span>LET'S BUILD IT.</span>
            </h2>

            <p>
              I'm open to internships, freelance opportunities, collaborations
              and projects where I can contribute technical skills and continue
              learning.
            </p>
          </div>

          <a href="mailto:abuganazon@gmail.com" className="contact-email">
            <span>abuganazon@gmail.com</span>
            <ArrowUpRightIcon />
          </a>
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <span>LOCATION</span>
            <strong>Kisii, Kenya</strong>
          </div>

          <div className="contact-detail">
            <span>PHONE</span>
            <a href="tel:0790604104">0790604104</a>
          </div>

          <div className="contact-detail">
            <span>FOCUS</span>
            <strong>Full-Stack Development</strong>
          </div>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRightIcon />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRightIcon />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              NAZON
            </a>

            <p>
              Full-Stack Developer
              <br />
              &amp; Information Technology Student
            </p>
          </div>

          <div className="footer-navigation">
            <span>NAVIGATION</span>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-connect">
            <span>CONNECT</span>

            <a href="mailto:abuganazon@gmail.com">
              Email
              <ArrowUpRightIcon />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRightIcon />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Nazon Abuga. All rights reserved.</span>

          <span>FULL-STACK DEVELOPMENT · DATA · TECHNOLOGY</span>

          <a href="#home" className="back-to-top">
            Back to Top
            <ArrowUpRightIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

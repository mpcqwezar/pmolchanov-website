import React, { useState } from "react";

import linkedinIcon from './assets/in.png'
import githubIcon from './assets/gh.png'
import mobileIcon from './assets/mobile.png'
import locationIcon from './assets/loc.png'
import profileImage from './assets/profile.jpg'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <header className="main-header">
        <nav className="nav-bar">
          <div className="nav-title" onClick={() => {scrollToTop(); setMenuOpen(false);}}>Pavel Molchanov</div>
          
          <div className="nav-buttons desktop-only">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("work")}>Work</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("learning")}>Learning</button>
          </div>
          
          <div 
            className="mobile-only burger" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            role="button"
            tabIndex={0}
          >
            ☰
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => {scrollToSection("about"); setMenuOpen(false);}}>About Me</button>
          <button onClick={() => {scrollToSection("work"); setMenuOpen(false);}}>Work Experience</button>
          <button onClick={() => {scrollToSection("skills"); setMenuOpen(false);}}>Skills</button>
          <button onClick={() => {scrollToSection("learning"); setMenuOpen(false);}}>Learning Path</button>
        </div>
      )}

      <section className="contact-links">
        <ul>
          <li onClick={()=> window.open("https://linkedin.com/in/molchanov-pavel", "_blank")} style={{cursor:'pointer'}}>
            <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
          </li>
          <li onClick={()=> window.open("https://github.com/mpcqwezar", "_blank")} style={{cursor:'pointer'}}>
            <img src={githubIcon} alt="GitHub" /> GitHub
          </li>
          <li onClick={()=> window.open("tel:+447415376543")} style={{cursor:'pointer'}}>
            <img src={mobileIcon} alt="Phone" /> +44 7415 376543
          </li>
          <li onClick={()=> window.open("https://maps.google.co.uk/?q=%2C+London%2C+%2C+uk")} style={{cursor:'pointer'}}> 
            <img src={locationIcon} alt="Location" /> London, UK
          </li>
        </ul>
      </section>

      <section className="hero" id="hero">
        <div className="hero-top">Hi, I'm Pavel</div>
        <div className="hero-img-wrapper">
          <img src={profileImage} alt="Pavel Molchanov" className="hero-img" />
        </div>
        <div className="hero-bottom">Senior QA Automation Engineer</div>
      </section>

      <div className="skills-grid">
        <div className="skill-box">C#</div>
        <div className="skill-box">Python</div>
        <div className="skill-box">SQL</div>
      </div>

      <main className="content">
        <section id="about" className="content-section light">
          <div className="section-inner">
            <h2>About Me</h2>
            <div className="divider"></div>
            <p>Currently, as a QA Engineer at Broadridge, I work with a team of software developers and testers to deliver high-quality products and services for the financial industry. I use C#, Python, Linux, and NUnit to design, implement, and execute automated tests, as well as to perform manual testing and debugging when needed.</p>
            <p>I have over seven years of experience in QA automation and software development, having previously worked as a Software Engineer at Morion. I am passionate about learning new technologies and improving my skills, and I strive to provide reliable and efficient solutions for complex and challenging problems.</p>
          </div>
        </section>

        <section id="work" className="content-section dark">
          <div className="section-inner">
            <h2>Work Experience</h2>
            <div className="divider"></div>
            <div>
              <h3>Senior QA Automation Engineer</h3>
              <p><b>Broadridge, BTCS department</b> (Jun 2021 – Present)</p>
              <p><b>Stack: </b>C#, NUnit, Python, C++, SQL, Bash, Linux, GoogleTest, Appium</p>
              <p>As a Automation QA Engineer I participate in test cycle planning, develop a framework for automated testing of our main product - Tbricks. Tbricks is B2B product which is one of the most popular trading platforms.</p>
              <ul>
                <li>Initiated the development of automated tests for our product from scratch, utilizing C#, NUnit, and Python.</li>
                <li>Implemented a custom API using UI Automation providers to enable seamless interaction between NUnit tests and UI elements.</li>
                <li>Developed Python-based tools for project build automation, log analysis, and database interaction to generate performance reports (using Tableau), enhancing project efficiency and diagnostic capabilities.</li>
                <li>Migrated and fixed legacy C++ unit tests based on raw C++ exceptions to GoogleTest usage and developed new unit tests which helped to improve test development velocity.</li>
                <li>Developed and maintained automated UI tests for a one of our projects using C# and Appium, including fixing legacy tests.</li>
                <li>Optimized and reworked 100% of test suites which helped to increase visibility in QA release reports, worked closely with development team in order to deliver a capability to test brand new features as fast as possible.</li>
              </ul>
            </div>
            <div className="mini-divider"></div>
            <div>
              <h3>Software Engineer</h3>
              <p><b>Morion</b> (Jun 2018 – Jun 2021)</p>
              <p><b>Stack: </b>Python, C#, SQL, Linux, ERP systems</p>
              <p>As a software engineer, I participated in creating and improving a product to perform an effective delivery of pharmaceutical products.</p>
              <ul>
                <li>Developed and integrated logistics tracking system for pharma deliveries, integrated it with national drug movement monitoring infrastructure.</li>
                <li>Improved and created new submodules for ERP software development platform.</li>
                <li>Designed and implemented a custom automation test framework for ERP software from scratch</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section light">
          <div className="section-inner">
            <h2>Technical Skills</h2>
            <div className="divider"></div>
            <p><b>Languages: </b>C#, Python, C++, SQL, Bash, JavaScript, HTML, CSS</p>
            <p><b>Frameworks/Libraries: </b>.NET Framework, NUnit, GoogleTest, Appium, PyTest, React</p>
            <p><b>Developer tools: </b>Git, Rider, VS Code, Visual Studio, PyCharm, Bamboo, GitHub</p>
            <p><b>Operation systems: </b>Windows, Linux</p>
            <p><b>Agile tools: </b>Jira, Confluence</p>
          </div>
        </section>

        <section id="learning" className="content-section dark">
          <div className="section-inner">
            <h2>Learning Path</h2>
            <div className="divider"></div>
            <div>
              <h3>B.Sc. in Computer Science</h3>
              <p className="text-sm">ITMO University, 2012–2016</p>
              <p>Thesis: Statistical analysis support for database resource demand.</p>
            </div>
            <div>
              <h3>Meta Front-End Developer Certificate</h3>
              <p className="text-sm">Meta (Facebook)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
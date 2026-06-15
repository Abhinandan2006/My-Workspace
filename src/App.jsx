import { useEffect, useState } from 'react';

const skills = [
  'Java',
  'Python',
  'Data Structures & Algorithms',
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'MLOps',
  'Cloud Computing',
  'Git & GitHub',
];

const projects = [
  {
    name: 'IoT Based Automatic Vehicle Accident Detection and Rescue System',
    description:
      'An intelligent safety solution that detects accidents through connected sensors and supports faster emergency response workflows.',
    tag: 'IoT + Safety Automation',
  },
  {
    name: 'Water Quality Monitoring System',
    description:
      'A monitoring platform designed to track water quality parameters and surface actionable insights through reliable telemetry.',
    tag: 'Sensors + Monitoring',
  },
  {
    name: 'Home Automation Dashboard',
    description:
      'A centralized interface for controlling and observing smart-home devices with a clean, responsive user experience.',
    tag: 'Smart Home UI',
  },
];

const education = [
  {
    title: 'Computer Science Student',
    detail: 'Focused on building strong foundations in programming, systems, and problem solving.',
  },
  {
    title: 'Specialization Interests',
    detail: 'Cloud platforms, AI/ML engineering, and production-ready MLOps workflows.',
  },
];

const connectLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Abhinandan2006',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abhinandan-dwivedi/',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Abhinandan2006/',
  },
];

const contactEmail = 'dwivediabhinandan2006@gmail.com';
const contactLocation = 'Kanpur, Uttar Pradesh';

function getConnectIcon(label) {
  switch (label) {
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" className="connect-button-icon connect-button-icon-github" aria-hidden="true" fill="none">
          <path d="M8.5 20.5v-2.2c-2.71.6-3.28-1.15-3.28-1.15-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61.99.07 1.51 1.01 1.51 1.01.88 1.53 2.31 1.09 2.87.83.09-.66.35-1.09.63-1.34-2.21-.25-4.53-1.11-4.53-4.93 0-1.09.39-1.99 1.03-2.69-.11-.25-.45-1.27.1-2.64 0 0 .84-.27 2.76 1.06a9.46 9.46 0 0 1 5.04 0c1.92-1.33 2.76-1.06 2.76-1.06.55 1.37.21 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.83-2.33 4.68-4.55 4.92.35.3.67.92.67 1.87v2.77" />
          <path d="M9.3 18.4a2.85 2.85 0 0 1 5.4 0" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg viewBox="0 0 24 24" className="connect-button-icon connect-button-icon-linkedin" aria-hidden="true" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="3.5" />
          <path d="M8.1 9.4V18" />
          <path d="M8.1 6.4v.1" />
          <path d="M11.7 18v-4.6c0-1.8 1-2.9 2.6-2.9 1.5 0 2.2 1 2.2 2.9V18" />
          <path d="M11.7 9.4V18" />
        </svg>
      );
    case 'LeetCode':
      return (
        <svg viewBox="0 0 24 24" className="connect-button-icon connect-button-icon-leetcode" aria-hidden="true" fill="none">
          <path d="M12 4.2 5.3 11 12 17.8" />
          <path d="M12 4.2 17.2 9.4" />
          <path d="M12 17.8 17.2 12.6" />
          <path d="M9.7 12h7.9" />
        </svg>
      );
    default:
      return null;
  }
}

const roleTitles = [
  'AI/ML Enthusiast and MLOps engineer.',
  'Learning relentlessly. Building intelligently. Deploying confidently.',
  'Machine learning builder.',
];

const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roleTitles.length);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: '-15% 0px -35% 0px',
      },
    );

    sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio contact from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="page-shell">
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />
      <header className="topbar glass-panel">
        <div>
          <a className="brand" href="#hero">
            Abhinandan Dwivedi
          </a>
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          <a className={activeSection === 'about' ? 'nav-link active' : 'nav-link'} href="#about">
            About
          </a>
          <a className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'} href="#skills">
            Skills
          </a>
          <a
            className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={activeSection === 'education' ? 'nav-link active' : 'nav-link'}
            href="#education"
          >
            Education
          </a>
          <a
            className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow reveal role-badge" key={roleIndex}>
              {roleTitles[roleIndex]}
            </p>
            <h1 className="hero-title reveal-delay-1">Abhinandan Dwivedi</h1>
            <p className="hero-text reveal-delay-2">
              I build thoughtful digital experiences and technology solutions that combine
              cloud-native thinking, clean engineering, and a strong interest in machine
              learning. As a Computer Science student, I focus on creating practical systems
              with measurable impact.
            </p>
            <div className="hero-actions reveal-delay-3">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-card glass-panel reveal-delay-2">
            <p className="card-label">Profile Snapshot</p>
            <h2>Building in cloud, AI, and intelligent automation.</h2>
            <p>
              A focused developer profile combining Java, Python, DSA, ML, deep learning,
              NLP, MLOps, and cloud computing to solve real-world problems.
            </p>
            <div className="hero-stats">
              <div>
                <span>09</span>
                <p>Core skills</p>
              </div>
              <div>
                <span>03</span>
                <p>Featured projects</p>
              </div>
              <div>
                <span>01</span>
                <p>Clear mission</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Computer Science student with a builder mindset.</h2>
          </div>
          <div className="glass-panel about-panel">
            <p>
              I am a Computer Science student with a strong foundation in Java, Python, and
              Data Structures & Algorithms. My interests extend toward Cloud Computing,
              Artificial Intelligence, Machine Learning, and MLOps, where I enjoy turning
              ideas into reliable and scalable solutions.
            </p>
            <p>
              I value clean architecture, efficient execution, and practical outcomes. My
              work style centers on continuous learning, disciplined problem solving, and
              building technology that feels both modern and useful.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and technologies I use to ship ideas.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article
                key={skill}
                className="glass-panel skill-card"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="skill-index">0{index + 1}</span>
                <h3>{skill}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work with practical problem-solving focus.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="glass-panel project-card">
                <p className="card-label">{project.tag}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href="#contact" className="project-link">
                  Discuss this project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Academic grounding with a future-facing focus.</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.title} className="glass-panel education-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading contact-heading contact-heading-center">
            <p className="eyebrow eyebrow-pill">Get in touch</p>
            <h2>Let's Work Together!</h2>
            <p className="contact-heading-text">
              Open to opportunities, collaborations, and meaningful conversations - lets connect.
            </p>
          </div>

          <div className="glass-panel contact-panel">
            <div className="contact-stack">
              <a
                className="contact-info-card contact-info-card-link"
                href={`mailto:${contactEmail}`}
                aria-label={`Email ${contactEmail}`}
              >
                <span className="contact-icon-shell contact-icon-shell-email" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="contact-card-icon" fill="none">
                    <rect x="4" y="6" width="16" height="12" rx="2.5" />
                    <path d="M5.5 8.5 12 13l6.5-4.5" />
                  </svg>
                </span>
                <span className="contact-info-copy">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">{contactEmail}</span>
                </span>
              </a>

              <article className="contact-info-card">
                <span className="contact-icon-shell contact-icon-shell-location" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="contact-card-icon" fill="none">
                    <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                </span>
                <span className="contact-info-copy">
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">{contactLocation}</span>
                </span>
              </article>

              <div className="contact-connect-block">
                <p className="contact-connect-label">Connect with me!</p>
                <div className="connect-icon-row">
                  {connectLinks.map((link) => (
                    <a
                      key={link.label}
                      className="connect-icon-button"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                    >
                      {getConnectIcon(link.label)}
                    </a>
                  ))}
                </div>
                <p className="contact-connect-note">
                  GitHub for code, LinkedIn for networking, and LeetCode for problem solving.
                </p>
              </div>

            </div>

            <form className="contact-form contact-form-panel" onSubmit={handleContactSubmit}>
              <label className="field-group" htmlFor="name">
                <span>Name</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label className="field-group" htmlFor="email">
                <span>Email ID</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label className="field-group field-group-message" htmlFor="message">
                <span>Message</span>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <button className="button button-primary send-button" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>

    </div>
  );
}

export default App;
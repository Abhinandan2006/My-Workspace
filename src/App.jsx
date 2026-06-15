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

const contactLinks = [
  {
    label: 'Email Me',
    href: 'mailto:dwivediabhinandan2006@gmail.com',
    primary: true,
  },
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

const roleTitles = [
  'AI/ML Enthusiast and MLOps engineer.',
  'Learning relentlessly. Building intelligently. Deploying confidently.',
  'Machine learning builder.',
];

const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

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
          <div className="glass-panel contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something useful together.</h2>
              <p>
                Open to opportunities in cloud development, AI/ML, and software engineering.
                Reach out for collaborations, internships, or project discussions.
              </p>
            </div>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  className={link.primary ? 'button button-primary' : 'button button-secondary'}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
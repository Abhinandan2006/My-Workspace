import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import NetworkBackground from './components/NetworkBackground';
import { FaJava, FaPython, FaProjectDiagram, FaRobot, FaBrain, FaComments, FaCogs, FaCloud, FaGithub, FaDatabase, FaMagic, FaJs, FaLaptopCode, FaNetworkWired, FaReact, FaNodeJs, FaCube, FaFlask, FaBolt } from 'react-icons/fa';

const skillsData = [
  {
    category: "Languages & Core",
    items: [
      { name: "C/C++", icon: <FaLaptopCode /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Data Structures & Algorithms", icon: <FaProjectDiagram /> }
    ]
  },
  {
    category: "Libraries & Frameworks",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Flask", icon: <FaFlask /> },
      { name: "FastAPI", icon: <FaBolt /> },
      { name: "TensorFlow / PyTorch", icon: <FaCube /> },
      { name: "Pandas / Scikit-Learn", icon: <FaDatabase /> }
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", icon: <FaRobot /> },
      { name: "Deep Learning", icon: <FaBrain /> },
      { name: "NLP", icon: <FaComments /> },
      { name: "Generative AI", icon: <FaMagic /> },
      { name: "Agentic AI", icon: <FaNetworkWired /> }
    ]
  },
  {
    category: "Cloud & Tools",
    items: [
      { name: "MLOps", icon: <FaCogs /> },
      { name: "Cloud Computing", icon: <FaCloud /> },
      { name: "Git & GitHub", icon: <FaGithub /> },
      { name: "MySQL", icon: <FaDatabase /> }
    ]
  }
];

const projects = [
  {
    name: 'YouTube Sentiment Analysis Plugin',
    description: 'A browser plugin that analyzes sentiments from YouTube comments and provides insights into audience reactions in real time.',
    github: 'https://lnkd.in/gy_ujyzP',
    features: [
      'Extracts comments directly from YouTube videos',
      'Performs sentiment analysis using Machine Learning and NLP',
      'Classifies comments into Positive, Negative, or Neutral categories',
      'Provides an overall sentiment summary for the video',
      'Integrates ML models seamlessly into a browser extension'
    ],
    tag: 'Machine Learning + NLP',
  },
  {
    name: 'Neural Network From Scratch for MNIST Digit Recognition',
    description: 'Built a neural network from the ground up to recognize handwritten digits without relying on high-level deep learning frameworks.',
    github: 'https://github.com/Abhinandan2006/Neural-network-form-scratch-',
    features: [
      'Implemented forward and backward propagation algorithms manually using NumPy',
      'Engineered custom activation functions (ReLU, Softmax) and loss calculations',
      'Optimized matrix multiplications to drastically reduce training time',
      'Achieved over 95% accuracy on the test set',
      'Deepened core understanding of gradient descent and backpropagation mathematics'
    ],
    tag: 'Deep Learning + Mathematics',
  },
  {
    name: 'Chess Bot Engine',
    description: 'Developed an intelligent chess bot with move prediction and strategic evaluation algorithms capable of competitive gameplay.',
    github: 'https://github.com/Abhinandan2006/My-chess-bot',
    features: [
      'Designed a custom board representation and legal move generator',
      'Implemented Minimax algorithm with Alpha-Beta pruning for efficient game tree search',
      'Created custom heuristic evaluation functions for piece positioning and game phases',
      'Optimized search depth and performance to ensure fast move responses',
      'Built a clean user interface to play directly against the engine'
    ],
    tag: 'Algorithms + AI',
  },
  {
    name: 'Gurgaon Real Estate Insights',
    description: 'A smart property analytics and prediction application that uses machine learning to forecast real estate prices and provide valuable market insights.',
    github: 'https://github.com/Abhinandan2006/Captone_project',
    features: [
      'Scraped and preprocessed thousands of real estate listings',
      'Performed extensive Exploratory Data Analysis (EDA) to find pricing trends',
      'Engineered features like location tiers, square footage, and amenities',
      'Trained Random Forest and XGBoost regression models for price prediction',
      'Deployed an interactive web dashboard for users to estimate property values'
    ],
    tag: 'Machine Learning + Data Science',
  },
  {
    name: 'Olympics Data Analysis & Medal Prediction App',
    description: 'An interactive web app that analyzes historical Olympics data to identify trends and uses predictive modeling to forecast future medal tallies.',
    features: [
      'Cleans & preprocesses 270,000+ Olympic athlete records',
      'Handles missing values using Iterative Imputer & Simple Imputer',
      'Removes outliers using Z-Score + IQR and balances dataset using SMOTE',
      'Encodes categorical features using OneHot, Ordinal & Target Encoding',
      'Trains a custom LightGBM model to predict which medal an athlete may win',
      'Includes a fully interactive Streamlit dashboard with Country-wise insights'
    ],
    github: 'https://github.com/Abhinandan2006/Olympics_Analysis_-_prediction_model',
    tag: 'Python, Machine Learning',
  },
  {
    name: 'Twitter Sentiment Analysis Application',
    description: 'A robust NLP application designed to process and analyze tweets, classifying public sentiment to surface actionable insights.',
    github: 'https://github.com/Abhinandan2006/Twitter-sentiment-analysis-project',
    features: [
      'Ingested and processed large volumes of text data from the Twitter API',
      'Applied advanced NLP techniques for text cleaning, tokenization, and stemming',
      'Utilized TF-IDF and word embeddings for feature extraction',
      'Built and tuned classification models to detect positive, negative, and neutral sentiment',
      'Visualized sentiment distributions and trending keywords in an analytics dashboard'
    ],
    tag: 'NLP + Sentiment Analysis',
  },
];

const education = [
  {
    title: 'B.Tech in Computer Science',
    years: '2023 - 2027',
    college: 'Pranveer Singh Institute of Technology',
    gpa: '7.57 CGPA',
    tags: ['DSA', 'OOPs', 'DBMS', 'OS', 'CN', 'Web Dev']
  },
  {
    title: 'Intermediate (12th Grade)',
    years: '2022 - 2023',
    college: 'Pm shri Kendriya Vidyalaya No. 1, Armapur',
    gpa: '69.8%',
    tags: ['Science Stream', 'CBSE']
  },
  {
    title: 'High School (10th Grade)',
    years: '2020 - 2021',
    college: 'Pm shri Kendriya Vidyalaya No. 1, Armapur',
    gpa: '83.4%',
    tags: ['Science Stream', 'CBSE']
  }
];

const certificates = [
  {
    name: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    link: '/certificates/Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.png',
    verifyLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=88DD7C1AD707D80E77ECC165CBBC5C933345463364FC85905AB588C7DCA67037',
  },
  {
    name: 'Anthropic AI Fluency',
    issuer: 'Anthropic',
    date: '2026',
    link: '/certificates/Anthropic AI fluency.png',
    verifyLink: 'https://verify.skilljar.com/c/bcbyh3a6tfid',
  },
  {
    name: 'Anthropic Claude 101',
    issuer: 'Anthropic',
    date: '2026',
    link: '/certificates/Anthropic Claude 101.png',
    verifyLink: 'https://verify.skilljar.com/c/76apw9gyr44s',
  },
  {
    name: 'McKinsey & Company Forward Program',
    issuer: 'McKinsey & Company',
    date: '2026',
    link: '/certificates/Mckinsey & company forward program.png',
  },
  {
    name: 'Python (Basic) Certificate',
    issuer: 'HackerRank',
    date: '2025',
    link: '/certificates/Hackerrank python.png',
    verifyLink: 'https://www.hackerrank.com/certificates/cc9f83b2977f',
  },
  {
    name: 'Java (Basic) Certificate',
    issuer: 'HackerRank',
    date: '2025',
    link: '/certificates/Hackerrank Java.png',
    verifyLink: 'https://www.hackerrank.com/certificates/iframe/bf6d36368d96',
  },
  {
    name: 'Java Course Completion',
    issuer: 'Apna College',
    date: '2025',
    link: '/certificates/Apna college Java.png',
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
        <svg
          viewBox="0 0 24 24"
          className="connect-button-icon connect-button-icon-leetcode"
          aria-hidden="true"
          fill="none"
        >
          <path d="M13.7 4.9 5.6 13l8.1 8.1" />
          <path d="M13.7 4.9 19 10.2" />
          <path d="M13.7 21.1 19 15.8" />
          <path d="M10.5 13h8.4" />
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

const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealObserver = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [showAllProjects]);

  useEffect(() => {
    const currentRole = roleTitles[roleIndex];
    let typingSpeed = isDeleting ? 60 : 130;

    if (!isDeleting && displayText === currentRole) {
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roleTitles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('loading');

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "a9acc008-e5a4-4388-9c5d-beff61bdde04");

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        console.error("Web3Forms Error:", result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="page-shell">
      <NetworkBackground />
      <div className="cursor-spotlight" />
      <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`}>
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
            className={activeSection === 'certificates' ? 'nav-link active' : 'nav-link'}
            href="#certificates"
          >
            Certificates
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
              {displayText}
              <span className="cursor-blink">|</span>
            </p>
            <h1 className="hero-title reveal-delay-1">Abhinandan Dwivedi</h1>
            <p className="hero-text reveal-delay-2">
              I build end-to-end machine learning solutions that transform data into
              intelligent applications. From data preprocessing and model development
              to deployment and monitoring, I enjoy creating scalable systems that
              solve real-world problems.
            </p>
            <div className="hero-actions reveal-delay-3">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
              <a
                className="button button-secondary"
                href="https://drive.google.com/file/d/1MHkvhCWHKj6oF-dkRCAu7Ib653ZG5NFz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="hero-stats reveal-delay-3">
              <div>
                <span>700+</span>
                <p>LeetCode Problems Solved</p>
              </div>
              <div>
                <span>1770</span>
                <p>LeetCode Rating</p>
              </div>
              <div>
                <span>10+</span>
                <p>Projects Built</p>
              </div>
            </div>
          </div>

          <aside className="hero-image-container reveal-delay-2">
            <img src="/profile.jpeg" alt="Abhinandan Dwivedi profile" className="hero-profile-image glass-panel" />
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading scroll-reveal">
            <p className="eyebrow">About Me</p>
            <h2>Hello! I'm Abhinandan Dwivedi.</h2>
          </div>

          <div className="about-bento-grid">
            <div className="glass-panel about-panel scroll-reveal">
              <p>
                I'm a Computer Science and IoT student passionate about Machine Learning, MLOps, and Cloud Technologies. I enjoy building intelligent, data-driven solutions and tackling complex problems through technology.
              </p>
              <p>
                My journey began with programming and problem-solving, which led me to explore Data Structures & Algorithms, Machine Learning, and software development. Over time, I developed a strong interest in MLOps and the process of deploying and managing machine learning systems in production environments.
              </p>
              <p>
                I have worked on end-to-end machine learning projects, including athlete performance prediction, apartment price prediction, and sentiment analysis, gaining hands-on experience in data preprocessing, feature engineering, model development, visualization, and deployment.
              </p>
              <p>
                Alongside machine learning, I continuously strengthen my foundation in Computer Science through Operating Systems, DBMS, System Design, Cloud Computing, and algorithmic problem-solving.
              </p>
            </div>

            <div className="about-split-panel">
              <div className="glass-panel scroll-reveal reveal-delay-1 about-what-i-do">
                <h3>What I Do</h3>
                <div className="what-i-do-grid">
                  <div className="what-i-do-card">
                    <div className="card-icon">🧠</div>
                    <span>Build Machine Learning & Data Science projects</span>
                  </div>
                  <div className="what-i-do-card">
                    <div className="card-icon">⚙️</div>
                    <span>Develop end-to-end ML pipelines</span>
                  </div>
                  <div className="what-i-do-card">
                    <div className="card-icon">☁️</div>
                    <span>Explore MLOps and Cloud technologies</span>
                  </div>
                  <div className="what-i-do-card">
                    <div className="card-icon">💻</div>
                    <span>Practice Data Structures & Algorithms</span>
                  </div>
                  <div className="what-i-do-card">
                    <div className="card-icon">📊</div>
                    <span>Create data visualizations & dashboards</span>
                  </div>
                  <div className="what-i-do-card">
                    <div className="card-icon">🏗️</div>
                    <span>Learn scalable system design principles</span>
                  </div>
                </div>
              </div>

              <div className="about-goals-panel">
                <div className="glass-panel scroll-reveal reveal-delay-2 about-side-card">
                  <h3>My Goals</h3>
                  <p>
                    My goal is to become a skilled <strong>MLOps Engineer</strong> capable of building scalable, reliable, and production-ready AI systems. I am constantly learning new technologies and best practices to bridge the gap between machine learning development and deployment.
                  </p>
                </div>

                <div className="glass-panel scroll-reveal reveal-delay-3 about-side-card">
                  <h3>Beyond Technology</h3>
                  <p>
                    Beyond technology, I enjoy playing chess, watching movies, cooking, and listening to music. These hobbies help me stay creative, focused, and maintain a healthy balance between learning and personal growth.
                  </p>
                </div>
              </div>
            </div>

            <blockquote className="about-blockquote scroll-reveal reveal-delay-2">
              "I believe that continuous learning, consistency, and curiosity are the keys to building impactful technology."
            </blockquote>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading scroll-reveal">
            <p className="eyebrow">Skills</p>
            <h2>Tools and technologies I use to ship ideas.</h2>
          </div>
          <div className="skills-category-grid">
            {skillsData.map((categoryGroup, index) => (
              <div
                key={categoryGroup.category}
                className="glass-panel skill-category-card scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3>{categoryGroup.category}</h3>
                <div className="skill-pills-container">
                  {categoryGroup.items.map(skill => (
                    <div key={skill.name} className="skill-pill">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading scroll-reveal">
            <p className="eyebrow">Projects</p>
            <h2>Selected work with practical problem-solving focus.</h2>
          </div>
          <div className="projects-grid">
            {projects.slice(0, showAllProjects ? projects.length : 3).map((project, index) => (
              <article key={project.name} className="glass-panel project-card scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <p className="card-label">{project.tag}</p>
                <h3>{project.name}</h3>
                <div className="project-desc" style={{ marginBottom: '20px', color: 'var(--muted)' }}>
                  <p style={{ marginBottom: '14px' }}>{project.description}</p>
                  {project.features && (
                    <ul className="project-features-list">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="project-links-container">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{ fontSize: '1.1rem' }} /> Source Code
                    </a>
                  )}
                  <a href="#contact" className="project-link">
                    Discuss this project
                  </a>
                </div>
              </article>
            ))}
          </div>
          {projects.length > 3 && (
            <div style={{ textAlign: 'center', marginTop: '40px' }} className="scroll-reveal">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="button button-secondary"
              >
                {showAllProjects ? 'Show Less' : 'Show More Projects'}
              </button>
            </div>
          )}
        </section>

        <section className="section" id="education">
          <div className="section-heading scroll-reveal">
            <p className="eyebrow">Education</p>
            <h2>Academic grounding with a future-facing focus.</h2>
          </div>
          <div className="education-stack">
            {education.map((item, index) => (
              <article key={item.title} className="glass-panel education-list-card scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="education-header">
                  <h3>{item.title}</h3>
                  <span className="education-years">{item.years}</span>
                </div>
                <p className="education-college">{item.college}</p>
                <div className="education-footer">
                  <div className="education-tags">
                    {item.tags?.map(tag => (
                      <span key={tag} className="education-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="education-gpa">
                    {item.gpa}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certificates">
          <div className="section-heading scroll-reveal">
            <p className="eyebrow">Certificates</p>
            <h2>Verified credentials and continuous learning.</h2>
          </div>

          <div className="certificates-interactive-container scroll-reveal">
            <div className="certificates-list">
              {certificates.slice(0, showAllCertificates ? certificates.length : 5).map((cert, index) => (
                <div
                  key={cert.name}
                  className={`certificate-list-item ${activeCertificate === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCertificate(index)}
                  onClick={() => setActiveCertificate(index)}
                >
                  <h3 className="certificate-list-name">{cert.name}</h3>
                  <div className="certificate-list-meta">
                    <span className="dot"></span>
                    {cert.issuer} &middot; {cert.date}
                  </div>
                </div>
              ))}

              {certificates.length > 5 && (
                <div style={{ marginTop: '10px' }}>
                  <button
                    onClick={() => {
                      setShowAllCertificates(!showAllCertificates);
                      if (showAllCertificates && activeCertificate >= 5) {
                        setActiveCertificate(0);
                      }
                    }}
                    className="button button-secondary"
                    style={{ minHeight: '40px', fontSize: '0.9rem', width: '100%', borderRadius: '12px' }}
                  >
                    {showAllCertificates ? 'Show Less' : 'Show More Certificates'}
                  </button>
                </div>
              )}
            </div>

            <div className="certificate-display">
              <div className="certificate-display-inner glass-panel">
                <img
                  key={certificates[activeCertificate].name}
                  src={certificates[activeCertificate].link}
                  alt={certificates[activeCertificate].name}
                  className="certificate-display-image fade-in"
                  loading="lazy"
                />
                {certificates[activeCertificate].verifyLink && (
                  <div className="certificate-display-action">
                    <a href={certificates[activeCertificate].verifyLink} target="_blank" rel="noopener noreferrer" className="button button-primary" style={{ minHeight: '40px', fontSize: '0.9rem' }}>
                      Verify Credential
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading contact-heading contact-heading-center scroll-reveal">
            <p className="eyebrow eyebrow-pill">Get in touch</p>
            <h2>Let's Build Together!</h2>
            <p className="contact-heading-text">
              Open to opportunities, collaborations, and meaningful conversations - lets connect.
            </p>
          </div>

          <div className="glass-panel contact-panel scroll-reveal">
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

              <button className="button button-primary send-button" type="submit" disabled={formStatus === 'loading'}>
                {formStatus === 'loading' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {formStatus === 'error' && (
                <p style={{ color: '#ef4444', marginTop: '12px', fontSize: '0.95rem' }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="site-footer-line" />
        <div className="site-footer-content">
          <p className="site-footer-quote">
            "Great things are built one thoughtful line at a time."
          </p>
          <p className="site-footer-copy">© 2026 Abhinandan Dwivedi. ❄️ Crafted with care and curiosity.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
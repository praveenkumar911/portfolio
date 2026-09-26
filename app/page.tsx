'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  Menu,
  Network,
  Sparkles,
  X,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Mental Health Assessment',
    subtitle: 'Computer Vision × Explainable AI',
    description:
      'An AI-assisted psychological assessment system that combines YOLOv8 visual analysis with LLM-generated, structured reports for psychologist decision support.',
    tags: ['YOLOv8', 'Computer Vision', 'LLMs', 'Python'],
    accent: 'coral',
    href: '#contact',
  },
  {
    number: '02',
    title: 'Ask Agastya IVR',
    subtitle: 'Voice-first education in Telugu',
    description:
      'An AI-powered IVR pipeline that lets students ask academic questions over the phone, then returns grounded, context-aware answers in Telugu.',
    tags: ['RAG', 'KooKoo IVR', 'LangChain', 'FastAPI'],
    accent: 'lime',
    href: '#contact',
  },
  {
    number: '03',
    title: 'Environmental Research MAS',
    subtitle: 'Agents that think together',
    description:
      'A distributed multi-agent research system with orchestrated retrieval, synthesis, critic guardrails, MCP tools, and iterative query refinement.',
    tags: ['Multi-Agent', 'FAISS', 'MCP', 'Hybrid Search'],
    accent: 'violet',
    href: '#contact',
  },
]

const skills = ['Python', 'LLMs', 'RAG', 'LangChain', 'FastAPI', 'Computer Vision', 'MCP', 'Docker', 'AWS', 'Vector Search']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Praveen Kumar home">
          <span className="brand-mark">P<span>.</span></span>
          <span className="brand-name">PRAVEEN KUMAR</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight /></a>
        </nav>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" /> AI engineer / builder / researcher</p>
          <h1>Making<br /><em>intelligence</em><br />useful.</h1>
          <p className="hero-intro">I design production AI systems that turn complex questions into clear, grounded action.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a>
            <a className="text-link" href="mailto:praveenkumarpalaboyina@gmail.com">Get in touch <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="hero-core"><Sparkles /></div>
          <span className="art-label label-top">RAG / 01</span>
          <span className="art-label label-right">CONTEXT →</span>
          <span className="art-label label-bottom">SYSTEMS THAT CARE</span>
        </div>
        <div className="hero-meta"><span>Based in Hyderabad, India</span><span>Available for meaningful problems</span></div>
      </section>

      <section className="marquee" aria-label="Areas of expertise">
        <div className="marquee-track">LANGUAGE MODELS <span>✳</span> RETRIEVAL SYSTEMS <span>✳</span> AGENTIC WORKFLOWS <span>✳</span> COMPUTER VISION <span>✳</span> LANGUAGE MODELS <span>✳</span> RETRIEVAL SYSTEMS <span>✳</span></div>
      </section>

      <section className="section-pad about-section" id="about">
        <div className="section-kicker"><span>01</span><span>About / approach</span></div>
        <div className="about-grid">
          <h2>Good AI is not<br /><em>just intelligent.</em></h2>
          <div className="about-body"><p>It is useful, explainable, and built around people. For the last 3+ years, I&apos;ve been working at the intersection of language, vision, and systems — creating AI that earns trust by being grounded in the real world.</p><p>Currently at <strong>RCTS-IIITH</strong>, I build research-backed products from the first feasibility study to the last API endpoint.</p><a className="text-link" href="#journey">More about my journey <span>↘</span></a></div>
        </div>
        <div className="stat-row"><div><strong>3+</strong><span>years building<br />AI systems</span></div><div><strong>∞</strong><span>questions worth<br />exploring</span></div><div><strong>01</strong><span>principle: stay<br />grounded</span></div></div>
      </section>

      <section className="section-pad work-section" id="work">
        <div className="section-kicker"><span>02</span><span>Selected work</span><span className="kicker-note">Scroll to explore <span>→</span></span></div>
        <div className="work-layout">
          <div className="project-list" role="tablist" aria-label="Selected projects">
            {projects.map((project, index) => <button key={project.number} className={`project-tab ${activeProject === index ? 'active' : ''}`} onClick={() => setActiveProject(index)} role="tab" aria-selected={activeProject === index}><span>{project.number}</span><span>{project.title}</span><ArrowUpRight /></button>)}
          </div>
          <article className={`project-feature accent-${projects[activeProject].accent}`}>
            <div className="project-visual"><div className="visual-grid" /><div className="visual-symbol">{activeProject === 0 ? <Sparkles /> : activeProject === 1 ? <Network /> : <Code2 />}</div><span className="visual-caption">{projects[activeProject].subtitle}</span></div>
            <div className="project-details"><div><span className="project-number">{projects[activeProject].number} / 03</span><h3>{projects[activeProject].title}</h3></div><p>{projects[activeProject].description}</p><div className="tag-list">{projects[activeProject].tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={projects[activeProject].href}>Discuss this project <ArrowUpRight /></a></div>
          </article>
        </div>
      </section>

      <section className="section-pad journey-section" id="journey">
        <div className="section-kicker"><span>03</span><span>The journey</span></div>
        <div className="journey-grid"><h2>From curiosity<br />to <em>capability.</em></h2><div className="timeline"><div className="timeline-item"><span>2025 — now</span><div><h3>Senior Software Development Engineer (AI/ML)</h3><p>RCTS-IIITH · Building explainable AI for mental health assessment and multi-agent research systems.</p></div></div><div className="timeline-item"><span>2023 — 2024</span><div><h3>Software Development Engineer (AI Applications)</h3><p>RCTS-IIITH · Built Ask Agastya, a voice-first RAG pipeline helping students learn in Telugu.</p></div></div><div className="timeline-item"><span>2019 — 2023</span><div><h3>B.Tech, Electronics &amp; Communication Engineering</h3><p>Kakinada Institute of Engineering and Technology · Where the hardware curiosity began.</p></div></div></div></div>
      </section>

      <section className="section-pad skills-section"><div className="skills-copy"><p className="eyebrow">The toolkit</p><h2>Curious by default.<br /><em>Practical by design.</em></h2></div><div className="skill-cloud">{skills.map((skill, index) => <span key={skill} className={index % 3 === 0 ? 'skill-highlight' : ''}>{skill}</span>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-inner"><p className="eyebrow">Have a hard problem?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><a className="contact-email" href="mailto:praveenkumarpalaboyina@gmail.com">praveenkumarpalaboyina@gmail.com <ArrowUpRight /></a><div className="social-links"><a href="https://www.linkedin.com/in/praveenkumarpalaboyina" target="_blank" rel="noreferrer"><Network /> LinkedIn</a><a href="https://github.com/praveenkumar911" target="_blank" rel="noreferrer"><Code2 /> GitHub</a></div></div></section>
      <footer><span>© 2025 Praveen Kumar Palaboyina</span><span>Built with intention <span className="footer-dot">●</span></span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

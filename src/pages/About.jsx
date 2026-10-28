// src/pages/About.jsx
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { skillGroups, experience } from '../data/site';
import { aboutLd } from '../data/seo';

export default function About() {
  return (
    <>
      <Seo
        title="About Abdul Qudoos | Full Stack Developer"
        description="About Abdul Qudoos, a Computer Science graduate and Full Stack Developer from QUEST Nawabshah."
        path="/about"
        jsonLd={aboutLd}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Profile &amp; experience</span>
          <h1>About Abdul Qudoos</h1>
          <p>
            Computer Science graduate and Full Stack Developer from QUEST Nawabshah, Sindh,
            Pakistan, focused on practical software and reliable digital systems.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="kicker">A practical builder</span>
            <h2>From idea to dependable product.</h2>
            <p className="lead">
              My experience spans full stack web development, SaaS applications, business management
              systems, database-driven applications, REST APIs, AI integration and enterprise IT
              exposure.
            </p>
            <p>
              I enjoy working across the stack: shaping clear interfaces, designing data models,
              building APIs, and integrating useful AI capabilities where they create real value.
            </p>
          </Reveal>

          <Reveal className="about-panel" delay={70}>
            <span className="kicker" style={{ color: '#7fa6ff' }}>
              Education
            </span>
            <h2>BS Computer Science</h2>
            <p>
              Quaid-e-Awam University of Engineering, Science &amp; Technology (QUEST), Nawabshah
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="kicker">Capabilities</span>
          <h2>Skills &amp; tools</h2>
          <div className="skill-grid">
            {skillGroups.map((group, i) => (
              <Reveal className="skill-card" key={group.title} delay={i * 45}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Career path</span>
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal as="article" className="timeline-item" key={job.role} delay={i * 45}>
                <h3>
                  {job.role}
                  {job.current && <span className="current">Current</span>}
                </h3>
                <div className="meta">{job.meta}</div>
                <p>{job.text}</p>
                <div className="tags">
                  {job.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
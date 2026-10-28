// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import LazyImage from '../components/LazyImage';
import { site, stats, technologies, projects } from '../data/site';
import { homeLd } from '../data/seo';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Seo
        title="Abdul Qudoos | Full Stack Developer"
        description="Portfolio of Abdul Qudoos, a Full Stack Developer building web applications, SaaS platforms, business systems and AI-powered solutions."
        path="/"
        jsonLd={homeLd}
      />

      <section className="hero">
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow">Open for Remote Opportunities</span>
            <h1>
              Hi, I'm Abdul Qudoos.
              <br />
              <span>Full Stack Developer.</span>
            </h1>
            <p className="lead">
              I build scalable web applications, SaaS platforms, business management systems, and
              AI-powered solutions using modern web technologies.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/projects">
                View My Projects <span>↗</span>
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Let's Work Together
              </Link>
            </div>
            <div className="availability">
              <i /> Available for Remote Work Worldwide
            </div>
          </Reveal>

          <Reveal className="hero-photo" delay={90}>
            <div className="photo-frame">
              <LazyImage
                src={site.image}
                alt="Abdul Qudoos, Full Stack Developer"
                width={410}
                height={512}
                eager
              />
            </div>
            <div className="photo-note">
              Building practical software
              <br />
              <span style={{ color: 'var(--blue)' }}>that moves businesses forward.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Toolkit</span>
              <h2>Technology I Work With</h2>
            </div>
            <p>
              Reliable tools for shipping thoughtful, maintainable products from database to
              interface.
            </p>
          </div>
          <Reveal className="tech-strip">
            {technologies.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Selected work</span>
              <h2>Featured Work</h2>
            </div>
            <Link className="link-arrow" to="/projects">
              View All Projects →
            </Link>
          </div>

          <div className="cards">
            {featured.map((p, i) => (
              <Reveal as="article" className="card" key={p.slug} delay={i * 45}>
                <div className="project-image">
                  <LazyImage src={p.image} alt={p.title} />
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <Reveal className="about-panel">
            <span className="kicker" style={{ color: '#7fa6ff' }}>
              The short version
            </span>
            <h2>Building Practical Software That Solves Real Problems</h2>
            <p>
              I'm a Computer Science graduate and Full Stack Developer focused on building reliable
              web applications, SaaS platforms, business systems, and AI-powered solutions.
            </p>
            <Link className="btn btn-primary" to="/about">
              More About Me →
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <span className="kicker">What I do</span>
            <h2>Clear solutions, carefully built.</h2>
            <p className="lead">
              From backend architecture and databases to responsive interfaces and AI integrations,
              I turn operational needs into dependable digital products.
            </p>
            <div className="actions">
              <Link className="btn btn-ghost" to="/services">
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta">
            <div>
              <span className="kicker" style={{ color: '#7fa6ff' }}>
                Let's connect
              </span>
              <h2>Have a Project in Mind?</h2>
              <p>Let's build a reliable web application, SaaS platform, or AI-powered solution together.</p>
            </div>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Start a Conversation
              </Link>
              <Link className="btn btn-ghost" to="/projects">
                View My Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
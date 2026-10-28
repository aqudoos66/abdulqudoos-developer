// src/pages/Projects.jsx
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import LazyImage from '../components/LazyImage';
import { projects } from '../data/site';
import { projectsLd } from '../data/seo';

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects | Abdul Qudoos"
        description="Selected projects by Abdul Qudoos, including SaaS, inventory, AI and management systems."
        path="/projects"
        jsonLd={projectsLd}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Selected work</span>
          <h1>Projects with a purpose.</h1>
          <p>
            A concise look at web applications, business systems and AI-powered products built
            across the stack.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-grid">
            {projects.map((project, i) => (
              <Reveal as="article" className="card" key={project.slug} delay={(i % 2) * 50}>
                <div className="project-image">
                  <LazyImage src={project.image} alt={project.title} />
                </div>
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.results && (
                    <p style={{ marginTop: 14 }}>
                      <strong>Results:</strong> {project.results}
                    </p>
                  )}
                  {project.link && (
                    <a
                      className="link-arrow"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkLabel} →
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
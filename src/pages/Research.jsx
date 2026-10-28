// src/pages/Research.jsx
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { research } from '../data/site';
import { researchLd } from '../data/seo';

export default function Research() {
  return (
    <>
      <Seo
        title="Research & Publication | Abdul Qudoos"
        description="Research and publication by Abdul Qudoos on the Smart Conference Management System."
        path="/research"
        jsonLd={researchLd}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Research &amp; publication</span>
          <h1>Turning applied work into shared knowledge.</h1>
          <p>
            A peer-reviewed publication documenting the design and outcomes of a practical
            conference management platform.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="article" className="publication">
            <span className="journal">{research.journal}</span>
            <h2 style={{ marginTop: 16 }}>{research.title}</h2>
            <p className="lead">{research.lead}</p>
            <p>
              <strong>Authors:</strong> {research.authors}
            </p>
            <p className="meta">{research.meta}</p>

            <div className="metrics">
              {research.metrics.map((m) => (
                <div className="metric" key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>

            <h3>Research highlights</h3>
            <ul className="highlight-list">
              {research.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="actions">
              <a
                className="btn btn-primary"
                href={research.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the publication ↗
              </a>
              <span className="tag" style={{ alignSelf: 'center' }}>
                {research.presentedAt}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
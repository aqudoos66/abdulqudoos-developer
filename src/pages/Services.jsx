// src/pages/Services.jsx
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { services } from '../data/site';
import { servicesLd } from '../data/seo';

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Abdul Qudoos"
        description="Full stack development, SaaS, business systems, API, AI integration and database services by Abdul Qudoos."
        path="/services"
        jsonLd={servicesLd}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Ways I can help</span>
          <h1>Services built around outcomes.</h1>
          <p>
            Focused development services for teams that need reliable products, clearer workflows
            and useful automation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((service, i) => (
              <Reveal className="service-card" key={service.title} delay={i * 40}>
                <div className="icon">{service.no}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tags">
                  {service.tags.map((tag) => (
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta">
            <div>
              <span className="kicker" style={{ color: '#7fa6ff' }}>
                Have a brief?
              </span>
              <h2>Let's make it tangible.</h2>
              <p>Tell me what you are building, and we can map the next useful step.</p>
            </div>
            <Link className="btn btn-primary" to="/contact">
              Start a Conversation ↗
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
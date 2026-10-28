// src/pages/Contact.jsx
import { useState } from 'react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { site } from '../data/site';
import { contactLd } from '../data/seo';

export default function Contact() {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please complete every field with a valid email address.');
      return;
    }

    setError('');
    const text = `Hello Abdul,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <Seo
        title="Contact Abdul Qudoos | Full Stack Developer"
        description="Contact Abdul Qudoos about a project, job opportunity or collaboration."
        path="/contact"
        jsonLd={contactLd}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Start a conversation</span>
          <h1>Let's Work Together</h1>
          <p>Have a project, job opportunity, or collaboration in mind? Get in touch.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <div className="contact-item">
              <div className="icon">@</div>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">↗</div>
              <div>
                <strong>WhatsApp</strong>
                <a href={`https://wa.me/${site.whatsapp}`}>{site.whatsappDisplay}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">GH</div>
              <div>
                <strong>GitHub</strong>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  github.com/aqudoos66
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">in</div>
              <div>
                <strong>LinkedIn</strong>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/abdulqudoos-dev
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">◎</div>
              <div>
                <strong>Location</strong>
                <span>{site.location}</span>
                <span style={{ color: 'var(--teal)', fontWeight: 700, marginTop: 3 }}>
                  Open for Remote Work Worldwide
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="form-card" delay={70}>
            <span className="kicker">WhatsApp contact form</span>
            <h2>Tell me about it.</h2>
            <form id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="field full">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" required />
                </div>
                <div className="field full">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required />
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Send Message on WhatsApp ↗
              </button>
              {error ? (
                <p className="form-note" style={{ color: '#c2414b' }} role="alert">
                  {error}
                </p>
              ) : (
                <p className="form-note">
                  Your message will open in WhatsApp with the exact details you entered.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
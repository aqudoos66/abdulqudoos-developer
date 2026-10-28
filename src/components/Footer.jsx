// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              <span className="brand-mark">AQ</span>
              <span className="brand-copy">
                <strong style={{ color: '#fff' }}>AQ Abdul Qudoos</strong>
                <small>Full Stack Developer</small>
              </span>
            </Link>
            <p>
              Building web applications, SaaS platforms, business systems and AI-powered solutions.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/research">Research</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3>Contact</h3>
            <div className="footer-links">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`https://wa.me/${site.whatsapp}`}>{site.whatsappDisplay}</a>
              <span>Open for Remote Work Worldwide</span>
            </div>
          </div>
        </div>

        <div className="copyright">
          <small>© {new Date().getFullYear()} Abdul Qudoos. All rights reserved.</small>
          <small>{site.location}</small>
        </div>
      </div>
    </footer>
  );
}
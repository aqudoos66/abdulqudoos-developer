// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Abdul Qudoos"
        description="The page you are looking for does not exist."
        path="/404"
        noindex
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">404</span>
          <h1>This page took a different route.</h1>
          <p>The page you are looking for does not exist or has been moved.</p>
          <div className="actions">
            <Link className="btn btn-primary" to="/">
              Back to Home ↗
            </Link>
            <Link className="btn btn-ghost" to="/projects">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
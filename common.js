/**
 * Abdul Qudoos - Portfolio Core JavaScript
 * Shared Navigation, Theme Engine, Footer & Intersection Animations
 */

(function () {
  "use strict";

  // 1. Initial Theme Setup (Prevents Theme Flash)
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "dark"); // Default dark for sleek engineering aesthetic
  document.documentElement.setAttribute("data-theme", initialTheme);

  document.addEventListener("DOMContentLoaded", () => {
    // 2. Render Global Navigation Header
    const headerElement = document.getElementById("main-header");
    if (headerElement) {
      headerElement.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <nav class="navbar" aria-label="Main Navigation">
          <div class="nav-container">
            <a href="index.html" class="brand-logo" aria-label="Abdul Qudoos Homepage">
              <span class="logo-badge">AQ</span>
              <span class="brand-name">
                <span class="name">Abdul Qudoos</span>
                <span class="role">Backend & AI Dev</span>
              </span>
            </a>

            <ul class="nav-links" id="nav-links" role="menubar">
              <li role="none"><a href="index.html" role="menuitem">Home</a></li>
              <li role="none"><a href="about.html" role="menuitem">About</a></li>
              <li role="none"><a href="services.html" role="menuitem">Services</a></li>
              <li role="none"><a href="projects.html" role="menuitem">Projects</a></li>
              <li role="none"><a href="research.html" role="menuitem">Research</a></li>
              <li role="none"><a href="publications.html" role="menuitem">Publications</a></li>
              <li role="none"><a href="gallery.html" role="menuitem">Gallery</a></li>
              <li role="none"><a href="contact.html" role="menuitem">Contact</a></li>
            </ul>

            <div class="nav-actions">
              <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle Color Theme" title="Toggle Theme">
                <i class="fas fa-${initialTheme === "light" ? "sun" : "moon"}" aria-hidden="true"></i>
              </button>
              <button class="menu-toggle" id="mobile-menu" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="nav-links">
                <i class="fas fa-bars" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </nav>
      `;

      // Active Nav Link Highlighting
      const currentPath = window.location.pathname.toLowerCase();
      const navLinks = document.querySelectorAll(".nav-links a");
      
      navLinks.forEach((link) => {
        const href = link.getAttribute("href").toLowerCase();
        const isHome = currentPath.endsWith("/") || currentPath.endsWith("/index.html") || currentPath.endsWith("\\index.html");
        
        if (href === "index.html" && isHome) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        } else if (href !== "index.html" && currentPath.includes(href)) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });

      // Mobile Menu Toggle
      const menuBtn = document.getElementById("mobile-menu");
      const navMenu = document.getElementById("nav-links");
      if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const isOpen = navMenu.classList.toggle("show");
          menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
          menuBtn.querySelector("i").className = isOpen ? "fas fa-times" : "fas fa-bars";
        });

        // Close on outside click
        document.addEventListener("click", (event) => {
          if (!menuBtn.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("show");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.querySelector("i").className = "fas fa-bars";
          }
        });

        // Close on link click
        navMenu.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.querySelector("i").className = "fas fa-bars";
          });
        });
      }

      // Navbar Glass Blur on Scroll
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        }, { passive: true });
      }

      // Theme Toggle Button Handler
      const themeBtn = document.getElementById("theme-toggle");
      if (themeBtn) {
        themeBtn.addEventListener("click", () => {
          const currentTheme = document.documentElement.getAttribute("data-theme");
          const nextTheme = currentTheme === "light" ? "dark" : "light";
          
          document.documentElement.setAttribute("data-theme", nextTheme);
          localStorage.setItem("theme", nextTheme);
          
          const icon = themeBtn.querySelector("i");
          if (icon) {
            icon.className = nextTheme === "light" ? "fas fa-sun" : "fas fa-moon";
          }
        });
      }
    }

    // 3. Render Global Footer
    const footerElement = document.getElementById("main-footer");
    if (footerElement) {
      const year = new Date().getFullYear();
      footerElement.innerHTML = `
        <footer class="site-footer" role="contentinfo">
          <div class="container">
            <div class="footer-top">
              <div class="footer-brand">
                <a href="index.html" class="brand-logo">
                  <span class="logo-badge">AQ</span>
                  <span class="brand-name">
                    <span class="name">Abdul Qudoos</span>
                    <span class="role">Backend & AI Engineer</span>
                  </span>
                </a>
                <p>
                  Specialized in architecting high-performance Laravel backends, RESTful APIs, MySQL databases, and Generative AI integrations.
                </p>
                <div class="social-links" style="margin-top: 1.2rem;">
                  <a href="https://github.com/aqudoos66" target="_blank" rel="noopener noreferrer" class="social-link-btn" aria-label="GitHub Profile">
                    <i class="fab fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/abdul-qudoos-896a3527b/" target="_blank" rel="noopener noreferrer" class="social-link-btn" aria-label="LinkedIn Profile">
                    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                  <a href="mailto:abdulqudoosdeveloper@gmail.com" class="social-link-btn" aria-label="Email Abdul Qudoos">
                    <i class="fas fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <div class="footer-col">
                <h4>Navigation</h4>
                <ul class="footer-links">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About & Credentials</a></li>
                  <li><a href="projects.html">Featured Projects</a></li>
                  <li><a href="services.html">Services & Solutions</a></li>
                  <li><a href="gallery.html">Project Gallery</a></li>
                </ul>
              </div>

              <div class="footer-col">
                <h4>Research & Contact</h4>
                <ul class="footer-links">
                  <li><a href="research.html">Research Overview</a></li>
                  <li><a href="publications.html">IJIST Publication (SCMS)</a></li>
                  <li><a href="contact.html">Get in Touch</a></li>
                  <li><a href="mailto:abdulqudoosdeveloper@gmail.com">abdulqudoosdeveloper@gmail.com</a></li>
                  <li><span style="color: var(--text-subtle); font-size: 0.85rem;">QUEST Nawabshah, PK</span></li>
                </ul>
              </div>
            </div>

            <div class="footer-bottom">
              <p>&copy; ${year} Abdul Qudoos. Built with semantic HTML5, clean modern CSS & Vanilla JS.</p>
              <div style="display: flex; gap: 1.5rem;">
                <a href="sitemap.xml" style="color: var(--text-subtle); font-size: 0.85rem;">Sitemap</a>
                <a href="contact.html" style="color: var(--text-subtle); font-size: 0.85rem;">Available for Remote Work</a>
              </div>
            </div>
          </div>
        </footer>
      `;
    }

    // 4. Scroll Reveal Intersection Observer
    const initScrollAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".fade-in-up:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    initScrollAnimations();

    // 5. Global Image Fallback Handler
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", function () {
        if (!this.getAttribute("data-fallback-handled")) {
          this.setAttribute("data-fallback-handled", "true");
          // If project image fails, show elegant gradient placeholder
          this.style.background = "linear-gradient(135deg, #1e293b, #0f172a)";
          this.alt = (this.alt || "Project preview") + " (Preview not available)";
        }
      });
    });
  });
})();

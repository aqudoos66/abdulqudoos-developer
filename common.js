document.addEventListener("DOMContentLoaded", () => {
  // ========== HEADER ==========
  const headerPlace = document.getElementById("main-header");
  if (headerPlace) {
    headerPlace.innerHTML = `
      <nav class="navbar">
        <div class="container nav-container">
          <div class="logo"><a href="index.html">DevArchitect</a></div>
          <div class="menu-toggle" id="mobile-menu"><i class="fas fa-bars"></i></div>
          <div class="nav-actions">
            <ul class="nav-links" id="nav-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li><a href="research.html">Research</a></li>
              <li><a href="publications.html">Publications</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle Theme"><i class="fas fa-moon"></i></button>
          </div>
        </div>
      </nav>
    `;

    // Mobile menu toggle
    const toggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");
    if (toggle && navLinks) {
      // Toggle menu on button click
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("show");
      });

      // Close menu when clicking outside
      document.addEventListener("click", (event) => {
        if (
          !toggle.contains(event.target) &&
          !navLinks.contains(event.target)
        ) {
          navLinks.classList.remove("show");
        }
      });

      // Close menu when a link is clicked (for better mobile UX)
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
        });
      });
    }

    // Active link highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-links a").forEach((link) => {
      const href = link.getAttribute("href");
      const isIndex =
        currentPath.endsWith("index.html") ||
        currentPath.endsWith("/") ||
        currentPath.endsWith("\\");
      if (href.includes("index.html") && isIndex) {
        link.classList.add("active");
      } else if (!href.includes("index.html") && currentPath.includes(href)) {
        link.classList.add("active");
      }
    });

    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    // Theme Toggle Logic
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      const icon = themeBtn.querySelector("i");

      const applyTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        if (theme === "light") {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
        } else {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
        }
      };

      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        applyTheme(savedTheme);
      } else {
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(prefersDark ? "dark" : "light");
      }

      themeBtn.addEventListener("click", () => {
        const currentTheme =
          document.documentElement.getAttribute("data-theme");
        applyTheme(currentTheme === "light" ? "dark" : "light");
      });
    }
  }

  // ========== FOOTER ==========
  const footerPlace = document.getElementById("main-footer");
  if (footerPlace) {
    footerPlace.innerHTML = `
      <footer class="footer">
        <div class="container">
          <p>© 2026 DevArchitect | <a href="#" id="footerCvLink">Download CV</a></p>
          <div style="margin-top: 1rem;">
             <a href="#"><i class="fab fa-github"></i></a> 
             <a href="#"><i class="fab fa-linkedin"></i></a> 
             <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    `;
    document.getElementById("footerCvLink")?.addEventListener("click", (e) => {
      e.preventDefault();
      alert("📄 CV placeholder. Replace with actual PDF link.");
    });
  }

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ========== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ==========
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in-up").forEach((el) => {
    observer.observe(el);
  });
});

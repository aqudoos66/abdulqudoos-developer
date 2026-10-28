// src/components/Seo.jsx
import { useEffect } from 'react';
import { site } from '../data/site';

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  jsonLd,
  noindex = false,
}) {
  useEffect(() => {
    const url = `${site.url}${path}`;
    const img = image || site.imageAbsolute;
    const robots = noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'author', site.name);
    setMeta('name', 'robots', robots);
    setMeta('name', 'googlebot', robots);

    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', site.name);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);
    setMeta('property', 'og:image:alt', `${site.name} - ${site.role}`);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', img);
    setMeta('name', 'twitter:image:alt', `${site.name} - ${site.role}`);

    setLink('canonical', url);

    let script = document.getElementById('page-jsonld');
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-jsonld';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, image, type, jsonLd, noindex]);

  return null;
}
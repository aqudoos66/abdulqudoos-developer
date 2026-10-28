import { site } from './site';

const person = {
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  jobTitle: site.role,
  url: `${site.url}/`,
  image: site.imageAbsolute,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nawabshah',
    addressRegion: 'Sindh',
    addressCountry: 'PK',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Quaid-e-Awam University of Engineering, Science & Technology',
  },
};

const website = {
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: `${site.url}/`,
  name: `${site.name} | ${site.role}`,
  publisher: { '@id': `${site.url}/#person` },
};

const webPage = (path, name, description, type = 'WebPage') => ({
  '@type': type,
  '@id': `${site.url}${path}#webpage`,
  url: `${site.url}${path}`,
  name,
  description,
  about: { '@id': `${site.url}/#person` },
  isPartOf: { '@id': `${site.url}/#website` },
});

const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': nodes });

export const homeLd = graph(
  person,
  website,
  webPage(
    '/',
    'Abdul Qudoos | Full Stack Developer',
    'Portfolio of Abdul Qudoos, a Full Stack Developer building web applications, SaaS platforms, business systems and AI-powered solutions.'
  )
);

export const aboutLd = graph(
  person,
  webPage(
    '/about',
    'About Abdul Qudoos | Full Stack Developer',
    'About Abdul Qudoos, a Computer Science graduate and Full Stack Developer from QUEST Nawabshah.',
    'AboutPage'
  )
);

export const servicesLd = graph(
  person,
  webPage(
    '/services',
    'Services | Abdul Qudoos',
    'Full stack development, SaaS, business systems, API, AI integration and database services by Abdul Qudoos.'
  ),
  {
    '@type': 'ItemList',
    '@id': `${site.url}/services#services`,
    name: 'Development Services by Abdul Qudoos',
    itemListElement: [
      'Full Stack Web Development',
      'SaaS Development',
      'Business Management Systems',
      'API Development',
      'AI Integration',
      'Database Solutions',
    ].map((name, i) => ({ '@type': 'ListItem', position: i + 1, name })),
  }
);

export const projectsLd = graph(
  person,
  webPage(
    '/projects',
    'Projects | Abdul Qudoos',
    'Selected projects by Abdul Qudoos, including SaaS, inventory, AI and management systems.',
    'CollectionPage'
  ),
  {
    '@type': 'ItemList',
    '@id': `${site.url}/projects#projects`,
    name: 'Projects by Abdul Qudoos',
    itemListElement: [
      'Smart Conference Management System (SCMS)',
      'Enterprise Inventory & Stock System',
      'EchoMind AI',
      'AI Content & Copywriting Generator',
      'School Management & Administration Portal',
      'E-Portal Management System',
      'Digital Certificate Verification System',
    ].map((name, i) => ({ '@type': 'ListItem', position: i + 1, name })),
  }
);

export const researchLd = graph(
  person,
  webPage(
    '/research',
    'Research & Publication | Abdul Qudoos',
    'Research and publication by Abdul Qudoos on the Smart Conference Management System.'
  ),
  {
    '@type': 'ScholarlyArticle',
    '@id': `${site.url}/research#scms-publication`,
    headline: 'Smart Conference Management System (SCMS)',
    author: [
      'Abdul Qudoos',
      'Abdul Khaliq',
      'Dr. Aijaz Ahmed Arain',
      'Muhammad Furqan',
      'Shahzad Ali',
    ].map((name) => ({ '@type': 'Person', name })),
    datePublished: '2025-11',
    isPartOf: {
      '@type': 'Periodical',
      name: 'International Journal of Innovative Science and Technology',
    },
    url: 'https://journal.50sea.com/index.php/IJIST/article/view/1700',
  }
);

export const contactLd = graph(
  person,
  webPage(
    '/contact',
    'Contact Abdul Qudoos | Full Stack Developer',
    'Contact Abdul Qudoos about a project, job opportunity or collaboration.',
    'ContactPage'
  )
);
export const site = {
  name: 'Abdul Qudoos',
  role: 'Full Stack Developer',
  url: 'https://abdulqudoos-developer.vercel.app',
  email: 'abdulqudoosdeveloper@gmail.com',
  whatsapp: '923173502955',
  whatsappDisplay: '+92 317 3502955',
  github: 'https://github.com/aqudoos66',
  linkedin: 'https://www.linkedin.com/in/abdulqudoos-dev/',
  location: 'Nawabshah, Sindh, Pakistan',
  image: '/assets/img/abdul qudoos php developer.jpeg',
  imageAbsolute:
    'https://abdulqudoos-developer.vercel.app/assets/img/abdul%20qudoos%20php%20developer.jpeg',
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
];

export const stats = [
  { value: '7+', label: 'Projects' },
  { value: '4+', label: 'Professional Experiences' },
  { value: '8+', label: 'Certifications' },
  { value: '1', label: 'Published Research Paper' },
];

export const technologies = [
  'Laravel', 'PHP', 'Python', 'C# / ASP.NET', 'MySQL', 'JavaScript',
  'HTML5', 'CSS3', 'REST APIs', 'Git & GitHub', 'OpenRouter', 'AI Integration',
];

export const skillGroups = [
  { title: 'Backend & Frameworks', tags: ['PHP', 'Laravel', 'Python', 'C#', 'ASP.NET'] },
  { title: 'Frontend', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { title: 'Database', tags: ['MySQL', 'SQL', 'Database Design'] },
  { title: 'APIs & Tools', tags: ['REST APIs', 'Postman', 'Git', 'GitHub', 'phpMyAdmin'] },
  {
    title: 'AI',
    tags: ['OpenRouter', 'Mistral 7B', 'Whisper ASR', 'Hugging Face', 'gTTS', 'AI Integration'],
  },
];

export const experience = [
  {
    role: 'Full Stack Engineer',
    current: true,
    meta: 'KQ Software Solutions · Freelance · Jun 2025 – Present · Remote',
    text: 'Developing full stack web applications, business management systems, SaaS solutions and AI-powered applications using modern web technologies.',
    tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'AI Integration'],
  },
  {
    role: 'Information Technology',
    meta: 'Fauji Fertilizer Corporation (FFC) · Internship · Jul 2026 – Aug 2026 · Karachi, Sindh, Pakistan · On-site',
    text: 'Completed an IT internship with practical exposure to enterprise IT operations, business systems and technology workflows.',
    tags: ['Enterprise Systems', 'IT Operations', 'SAP Exposure', 'Procurement Workflow'],
  },
  {
    role: 'Back End Developer',
    meta: 'Sindh Tech Solutions · Part-time · Jan 2025 – Jun 2025 · Nawabshah, Sindh, Pakistan · On-site',
    text: 'Developed database-driven web applications, business management modules and REST APIs while working with PHP, MySQL and modern web development practices.',
    tags: ['PHP', 'MySQL', 'REST APIs'],
  },
  {
    role: 'Frontend Web Developer',
    meta: 'Code Alpha · Internship · Jun 2024 – Jul 2024 · Lucknow, Uttar Pradesh, India · Remote',
    text: 'Developed responsive web interfaces using HTML, CSS and JavaScript with a focus on usability, responsive design and frontend development.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
];

export const services = [
  {
    no: '01',
    title: 'Full Stack Web Development',
    text: 'Responsive, database-driven web applications designed for real users and real workflows.',
    tags: ['Laravel', 'JavaScript'],
  },
  {
    no: '02',
    title: 'SaaS Development',
    text: 'Subscription-based and multi-user web platforms with thoughtful architecture.',
    tags: ['PHP', 'MySQL'],
  },
  {
    no: '03',
    title: 'Business Management Systems',
    text: 'Inventory, POS, school management and administration systems that reduce manual work.',
    tags: ['Systems', 'Workflows'],
  },
  {
    no: '04',
    title: 'API Development',
    text: 'RESTful APIs and third-party API integrations that connect products cleanly.',
    tags: ['REST', 'Postman'],
  },
  {
    no: '05',
    title: 'AI Integration',
    text: 'AI-powered features using modern AI APIs and open-source models where they make sense.',
    tags: ['OpenRouter', 'Whisper'],
  },
  {
    no: '06',
    title: 'Database Solutions',
    text: 'MySQL database design, optimization and management for dependable applications.',
    tags: ['MySQL', 'SQL'],
  },
];

export const projects = [
  {
    slug: 'scms',
    title: 'Smart Conference Management System (SCMS)',
    shortTitle: 'Smart Conference Management System',
    description:
      'A SaaS platform for conference websites, paper submission, peer review and communication workflows.',
    tags: ['Laravel', 'MySQL', 'OpenRouter API', 'WhatsApp API'],
    image: '/assets/img/projects/smart conference management system abdul qudoos php developer.png',
    results: '98% setup time reduction · 98% notification delivery · 4.7/5 satisfaction',
    link: 'https://journal.50sea.com/index.php/IJIST/article/view/1700',
    linkLabel: 'Read publication',
  },
  {
    slug: 'inventory',
    title: 'Enterprise Inventory & Stock System',
    description:
      'A database-driven system for products, stock, business operations and API-based workflows.',
    tags: ['Laravel', 'PHP OOP', 'MySQL', 'REST API'],
    image: '/assets/img/projects/inventory-solutions abdul qudoos php developer.png',
  },
  {
    slug: 'echomind',
    title: 'EchoMind AI',
    description:
      'An AI voice interaction application combining speech recognition, AI responses and text-to-speech.',
    tags: ['Python', 'Whisper ASR', 'Gradio', 'gTTS'],
    image: '/assets/img/projects/echomind-ai abdul qudoos ai developer.png',
    link: 'https://huggingface.co/spaces/abdulqudoosmastoi66/EchoMind-AI',
    linkLabel: 'Open live project',
  },
  {
    slug: 'ai-content',
    title: 'AI Content & Copywriting Generator',
    description: 'A web application for assisted content creation using modern AI APIs.',
    tags: ['Laravel', 'OpenRouter API', 'Mistral 7B'],
    image: '/assets/img/projects/ai-content-generator abdul qudoos php developer.png',
  },
  {
    slug: 'school-management',
    title: 'School Management & Administration Portal',
    description: 'A web portal supporting school administration and daily management workflows.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    image: '/assets/img/projects/school-management abdul qudoos php developer.png',
    link: 'https://indusssn.com/',
    linkLabel: 'Visit live project',
  },
  {
    slug: 'e-portal',
    title: 'E-Portal Management System',
    description: 'A Laravel-based portal with database-backed workflows and REST API integrations.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    image: '/assets/img/projects/e-portal abdul qudoos php developer.png',
  },
  {
    slug: 'certificate-verification',
    title: 'Digital Certificate Verification System',
    description: 'A lightweight application for database-backed certificate verification.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    image: '/assets/img/projects/certificate-verification abdul qudoos php developer.png',
  },
];

export const research = {
  journal: 'International Journal of Innovative Science and Technology · Vol. 7, Issue 10',
  title: 'Smart Conference Management System (SCMS)',
  lead:
    'A multi-tenant platform for automated conference website generation, paper submission, peer review and communication workflows.',
  authors: 'Abdul Qudoos, Abdul Khaliq, Dr. Aijaz Ahmed Arain, Muhammad Furqan, Shahzad Ali',
  meta: 'Pages 10–22 · Published November 2025',
  metrics: [
    { value: '98%', label: 'Reduction in setup latency' },
    { value: '98%', label: 'Notification delivery' },
    { value: '4.7/5', label: 'User satisfaction' },
  ],
  highlights: [
    'AI-assisted peer review',
    'Multi-tenant web application architecture',
    'Relational database optimization',
    'Automated conference website generation',
    'Automated communication workflows',
  ],
  url: 'https://journal.50sea.com/index.php/IJIST/article/view/1700',
  presentedAt: "Presented at CSET'26",
};
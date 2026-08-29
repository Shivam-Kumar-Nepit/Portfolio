// All content below is extracted directly from Shivam Kumar Nepit's CV.
// No experience, projects, links, or numbers have been invented.
// Update this file if the CV changes — every component reads from here.

export const profile = {
  name: 'Shivam Kumar Nepit',
  title: 'ReactJS Developer',
  tagline: '1 Year Experience',
  location: 'New Delhi, India',
  email: 'shivamkumarnepit@gmail.com',
  phone: '+91 8384039157',
  summary:
    "Results-driven Frontend Developer with 1 year of hands-on experience in React.js development across product-based and IT service environments. Proven track record of building and maintaining real-time, production-grade web applications, integrating complex RESTful APIs, and designing responsive UI modules. Currently pursuing an MCA from IGNOU while delivering high-performance, scalable code in an active product ecosystem.",
  // No GitHub / LinkedIn / portfolio link was present in the CV, so none are set.
  // If you add them later, fill these in and the Navbar/Hero/Contact/Footer
  // will automatically show the corresponding icons and links.
  github: '',
  linkedin: '',
  portfolio: '',
  photoHero: './Portfolio/profile-photo-hero.png',  
  photoAbout: './Portfolio/profile-photo-about.png',  
  resumeFile: './Portfolio/Shivam_Kumar_Nepit_Resume.pdf',
}

export const primaryStack = [
  'React.js',
  'Redux',
  'JavaScript (ES6+)',
  'Tailwind CSS',
  'REST APIs',
]

export const skills = [
  {
    category: 'Frontend Development',
    icon: 'frontend',
    items: ['React.js', 'Redux', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend & Database',
    icon: 'backend',
    items: ['Python', 'Node.js / Express (MERN Fundamentals)', 'MySQL'],
  },
  {
    category: 'Tools & Workflow',
    icon: 'tools',
    items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Visual Studio Code', 'PyCharm', 'REST API Integration'],
  },
]

export const competencies = [
  'Real-Time Product Engineering',
  'Agile Workflow',
  'Problem Solving',
  'Team Collaboration',
]

export const languagesSpoken = ['English', 'Hindi']

// Ordered most-recent first for the timeline.
export const experience = [
  {
    id: 'dams',
    role: 'ReactJS Developer',
    company: 'Delhi Academy of Medical Sciences',
    companyType: 'Product-Based Company · Leading EdTech Product Platform',
    location: 'New Delhi, India',
    duration: 'May 2025 – Present',
    current: true,
    summary:
      'Developing and optimizing real-time production features for a live web platform used by medical aspirants nationwide.',
    responsibilities: [
      'Actively develop and optimize real-time production features for web applications used by medical aspirants nationwide.',
      'Engineer dynamic, highly responsive UI components and seamless RESTful API integrations for core product modules.',
      'Utilize Jira for bug tracking, agile ticket resolution, and performance enhancements across live platforms.',
      'Collaborate with product managers and backend engineering teams to deliver robust end-to-end frontend solutions.',
    ],
    tech: ['React.js', 'Redux', 'REST APIs', 'Jira'],
  },
  {
    id: 'so-infotech',
    role: 'Web Development Intern (ReactJS)',
    company: 'SO INFOTECH (Pulsating Technologies)',
    companyType: 'IT Outsourcing & Software Solutions',
    location: 'New Delhi, India',
    duration: 'Nov 2024 – Jan 2025',
    current: false,
    summary:
      'Worked alongside senior engineering leads on real-time web application deliverables and client-facing features.',
    responsibilities: [
      'Worked closely with senior engineering leads on real-time web application deliverables and client-facing features.',
      'Analyzed frontend state management and data flow architecture to streamline seamless client-server API communication.',
      'Implemented custom CSS frameworks and modern JavaScript techniques to ensure responsive, cross-browser UI design.',
    ],
    tech: ['React.js', 'JavaScript', 'CSS'],
  },
]

export const projects = [
  {
    id: 'auth-onboarding',
    name: 'Real-Time User Authentication & Onboarding System',
    year: '2024',
    description:
      'Production-ready registration and login workflows built with interactive, real-time client-side validation feedback.',
    features: [
      'Real-time, interactive client-side validation feedback during registration and login.',
      'react-skeleton-loading UI states integrated to elevate visual UX during asynchronous data fetching and server requests.',
    ],
    role: 'Built the end-to-end onboarding flow, including validation logic and loading states.',
    tech: ['React.js', 'JavaScript (ES6+)', 'react-skeleton-loading'],
    github: '', // not provided in CV
    demo: '', // not provided in CV
  },
  {
    id: 'medical-learning-portal',
    name: 'Interactive Medical Learning Portal UI Module',
    year: '2025',
    description:
      'Modular, high-performance web components for live course navigation, exam preparation modules, and content display.',
    features: [
      'Modular components for live course navigation, exam preparation modules, and content display.',
      'Optimized page load speed and UI responsiveness across mobile and desktop viewports.',
    ],
    role: 'Developed and optimized UI modules as part of the DAMS product platform.',
    tech: ['React.js', 'Redux', 'REST APIs'],
    github: '',
    demo: '',
  },
]

export const education = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'IGNOU',
    duration: 'Pursuing',
    note: '',
  },
  {
    id: 'python-fullstack',
    degree: 'Python Full Stack Developer Certification',
    institution: 'DUCAT IT Training Academy',
    duration: 'Mar 2024 – Oct 2024',
    note: '',
  },
  {
    id: 'ba-hons',
    degree: 'Bachelor of Arts (BA Hons)',
    institution: 'SOL, Delhi University',
    duration: '2021 – 2024',
    note: '',
  },
  {
    id: 'school',
    degree: 'Senior Secondary (12th) & Matriculation (10th)',
    institution: 'Govt. Senior Secondary School',
    duration: '2019 – 2021',
    note: '',
  },
]

// Nav items are filtered in Navbar based on which sections actually have data —
// all of them do for this CV, but this keeps the site correct if a section is ever removed.
export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

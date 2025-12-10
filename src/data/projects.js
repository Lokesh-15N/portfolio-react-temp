// Projects Data - All project information in one place
export const projectsData = [

  {
    id: 1,
    title: 'Financika - Personal Finance Tracker',
    description: 'Modern web app for tracking income, expenses, budgets, and receipts. Features analytics, mobile-first design, and secure API integration.',
    longDescription: 'Financika is a full-stack finance management platform that helps users track transactions, scan receipts with AI, and visualize spending. Includes JWT authentication, responsive UI, and cloud deployment.',
    image: 'linear-gradient(135deg, #4F8A8B 0%, #CDE7B0 100%)',
    tags: ['React', 'Express', 'MongoDB', 'Google Gemini AI', 'Render'],
    featured: true,
    link: '#',
    github: 'https://github.com/Lokesh-15N/paisable-master.git',
    liveLink: 'https://financika.onrender.com',
    technologies: {
      frontend: ['React', 'Vite', 'TailwindCSS', 'Chart.js'],
      backend: ['Node.js', 'Express', 'MongoDB'],
      tools: ['Google Gemini AI', 'Render', 'MongoDB Atlas']
    },
    stats: {
      components: '40+',
      lighthouse: '99.9%',
      coverage: '95%'
    }
  },
  {
  id: 2,
  title: 'NOTEGENI - AI Study Notes Generator',
  description: 'Full-featured AI platform that transforms YouTube videos into comprehensive study materials with AI-powered content generation, user authentication, and PDF export capabilities.',
  longDescription: 'An intelligent study companion that analyzes YouTube video transcripts and generates structured study materials including notes, flashcards, keywords in multiple languages, practice questions, and key summaries powered by Google Gemini AI.',
  image: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  tags: ['React', 'Node.js', 'MongoDB', 'Google Gemini AI', 'YouTube API', 'Vite', 'Tailwind'],
  featured: true,
  link: 'https://notegeni.onrender.com',
  github: 'https://github.com/Lokesh-15N/notegeni',
  liveLink: 'https://notegeni.onrender.com',
  technologies: {
    frontend: ['React 18', 'Vite', 'React Router', 'Axios', 'Three.js'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'bcryptjs'],
    tools: ['Google Gemini AI', 'YouTube Data API v3', 'PDFKit', 'Render Deployment']
  },
  stats: {
    features: '6+ Study Materials',
    users: 'Unlimited',
    notes: 'Unlimited Save',
    audited: true
  }
  },
    {
    id: 3,
    title: 'PixelSwap - AI Background Remover & Scene Generator',
    description: 'Modern web app for removing backgrounds and swapping them with AI-generated scenes. Features a green theme, 3D effects, and privacy-first API handling.',
    longDescription: 'PixelSwap is a full-stack image editing platform that lets users remove backgrounds and place subjects into AI-generated scenes. Includes secure API integration, responsive design, and instant downloads.',
    image: 'linear-gradient(135deg, #A3C9A8 0%, #C7E8C5 100%)',
    tags: ['Next.js', 'React', 'Three.js', 'Remove.bg', 'Pollinations.ai'],
    featured: true,
    link: '#',
    github: 'https://github.com/Lokesh-15N/background-removal-app.git',
    liveLink: 'https://background-removal-app-sable-sigma.vercel.app/',
    technologies: {
      frontend: ['React', 'Next.js', 'TailwindCSS', 'Three.js'],
      backend: ['Node.js', 'Next.js API routes'],
      tools: ['Remove.bg API', 'Pollinations.ai', 'Vercel']
    },
    stats: {
      performance: '98%',
      users: '10K+',
      uptime: '99.9%'
    }
  },
  
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with post scheduling, engagement metrics, competitor analysis, and automated reporting.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['React', 'Chart.js', 'Node.js', 'MySQL', 'Redis'],
    featured: false,
    link: '#',
    github: 'https://github.com',
    liveLink: 'https://demo.com',
    technologies: {
      frontend: ['React', 'Chart.js', 'Redux'],
      backend: ['Node.js', 'Express', 'MySQL'],
      tools: ['Twitter API', 'Facebook Graph', 'Docker']
    },
    stats: {
      conversions: '+50%',
      products: '500+',
      revenue: '$1M+'
    }
  },
  {
    id: 5,
    title: 'Video Streaming Platform',
    description: 'Netflix-style streaming platform with adaptive bitrate streaming, user recommendations, content management, and subscription billing.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['React', 'AWS', 'Node.js', 'FFmpeg', 'MongoDB'],
    featured: false,
    link: '#',
    github: 'https://github.com',
    liveLink: 'https://demo.com',
    technologies: {
      frontend: ['React', 'Video.js', 'Redux'],
      backend: ['Node.js', 'AWS MediaConvert', 'MongoDB'],
      tools: ['FFmpeg', 'CloudFront', 'S3']
    },
    stats: {
      languages: '50+',
      users: '5K+',
      uptime: '99.9%'
    }
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness application with workout tracking, nutrition planning, progress analytics, and social community features.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['React Native', 'Firebase', 'Node.js', 'Chart.js', 'Redux'],
    featured: false,
    link: '#',
    github: 'https://github.com',
    liveLink: 'https://demo.com',
    technologies: {
      core: ['React Native', 'Expo', 'Firebase'],
      physics: ['Chart.js', 'Redux Toolkit'],
      tools: ['Fastlane', 'Jest', 'Detox']
    },
    stats: {
      elements: '10K+',
      fps: '60',
      bundleSize: '42KB'
    }
  }
];

// Project categories for filtering
export const projectCategories = [
  'All',
  'Web Development',
  'Blockchain',
  'Data Visualization',
  '3D Graphics',
  'Tools'
];

// Get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured).slice(0, 3);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project =>
    project.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
  );
};

// Get single project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

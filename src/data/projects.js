// Projects Data - All project information in one place
export const projectsData = [
  {
    id: 1,
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
    id: 2,
    title: 'SaaS Project Management Tool',
    description: 'Modern project management platform with kanban boards, time tracking, team collaboration, and automated reporting features.',
    longDescription: 'A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.IO'],
    featured: true,
    link: '#',
    github: 'https://github.com',
    liveLink: 'https://demo.com',
    technologies: {
      frontend: ['React', 'TypeScript', 'Redux'],
      styling: ['Material-UI', 'SCSS', 'Framer Motion'],
      tools: ['Jest', 'Cypress', 'GitHub Actions']
    },
    stats: {
      components: '40+',
      lighthouse: '99.9%',
      coverage: '95%'
    }
  },
  {
    id: 3,
    title: 'E-Commerce Marketplace',
    description: 'Full-featured online marketplace with vendor management, payment processing, inventory tracking, and customer review system.',
    longDescription: 'A real-time weather application with location-based forecasts, weather alerts, and beautiful visualizations.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Node.js', 'Tailwind'],
    featured: false,
    link: '#',
    github: 'https://github.com',
    liveLink: 'https://demo.com',
    technologies: {
      frontend: ['Next.js', 'React', 'Tailwind CSS'],
      blockchain: ['Stripe API', 'PayPal SDK', 'MongoDB'],
      tools: ['AWS S3', 'CloudFront', 'Docker']
    },
    stats: {
      tvl: '$2M+',
      contracts: '5',
      audited: true
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

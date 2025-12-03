// All skills flattened for grid display
export const allTechSkills = [
  {
    name: 'Python',
    icon: 'fab fa-python',
    category: 'backend'
  },
  {
    name: 'Three.js',
    icon: 'fas fa-cube',
    category: 'frontend'
  },
  {
    name: 'C',
    icon: 'fas fa-code',
    category: 'backend'
  },
  {
    name: 'Git',
    icon: 'fab fa-git-alt',
    category: 'tools'
  },
  {
    name: 'JavaScript',
    icon: 'fab fa-js',
    category: 'frontend'
  },
  {
    name: 'MongoDB',
    icon: 'fas fa-database',
    category: 'backend'
  },
  {
    name: 'HTML5',
    icon: 'fab fa-html5',
    category: 'frontend'
  },
  {
    name: 'C++',
    icon: 'fas fa-laptop-code',
    category: 'backend'
  },
  {
    name: 'Node.js',
    icon: 'fab fa-node',
    category: 'backend'
  },
  {
    name: 'Tailwind CSS',
    icon: 'fa fa-file-code',
    category: 'frontend'
  },
  {
    name: 'React',
    icon: 'fab fa-react',
    category: 'frontend'
  },
  {
    name: 'Express.js',
    icon: 'fas fa-server',
    category: 'backend'
  },
  {
    name: 'CSS3',
    icon: 'fab fa-css3-alt',
    category: 'frontend'
  },
  {
    name: 'Java',
    icon: 'fab fa-java',
    category: 'backend'
  }
//   {
//     name: 'Docker',
//     icon: 'fab fa-docker',
//     description: 'Containerization',
//     category: 'tools'
//   },
//   {
//     name: 'AWS',
//     icon: 'fab fa-aws',
//     description: 'Cloud Services',
//     category: 'tools'
//   },
//   {
//     name: 'Figma',
//     icon: 'fab fa-figma',
//     description: 'Design Tool',
//     category: 'tools'
//   },
//   {
//     name: 'Webpack',
//     icon: 'fas fa-cube',
//     description: 'Module Bundler',
//     category: 'tools'
//   },
//   {
//     name: 'GraphQL',
//     icon: 'fas fa-project-diagram',
//     description: 'Query Language',
//     category: 'backend'
//   }
];

// Get skills by category
export const getSkillsByCategory = (category) => {
  return skillsData[category]?.skills || [];
};

// Get all skills flattened
export const getAllSkills = () => {
  return Object.values(skillsData).reduce((acc, cat) => [...acc, ...cat.skills], []);
};

// Get top skills (by proficiency)
export const getTopSkills = (limit = 6) => {
  return getAllSkills()
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};



export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Cryp2Sale',
    description: 'A global e-commerce platform focused on cryptocurrency products, trusted by over 100+ daily international users for secure and seamless transactions, offering an intuitive and user-friendly shopping experience.',
    image: '/projects/cryp2sale.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Cryptocurrency', 'E-commerce'],
    liveUrl: 'https://cryp2sale.vercel.app',
    githubUrl: 'https://github.com/yourusername/cryp2sale',
    featured: true,
  },
  {
    title: 'Frontend Code Editor',
    description: 'An interactive frontend code editor that enables real-time HTML, CSS, and JavaScript preview. The tool has received positive feedback from over 100 users, supporting their coding practice sessions.',
    image: '/projects/code-editor.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveUrl: 'https://code-editor-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/code-editor',
    featured: true,
  },
  {
    title: 'Jeevandan',
    description: 'An intuitive online platform for BIT Mesra students, providing 50+ users easy access to a vast collection of study materials across different branches and academic years. Completed in just three weeks.',
    image: '/projects/jeevandan.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Education'],
    liveUrl: 'https://jeevandan.vercel.app',
    githubUrl: 'https://github.com/yourusername/jeevandan',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A fully responsive personal website to showcase web development projects, using HTML, CSS, JavaScript, and Bootstrap. Optimized for performance and user experience.',
    image: '/projects/portfolio.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://portfolio.vercel.app',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: false,
  }
]

export const getFeaturedProjects = () => projects.filter(project => project.featured) 
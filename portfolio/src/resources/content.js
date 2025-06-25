import React from 'react';

export const person = {
  firstName: 'Guilherme',
  lastName: 'Grancho',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Full-Stack Developer',
  avatar: '/images/avatar.jpg',
  location: 'Europe/Lisbon',
  languages: ['English', 'Portuguese', 'Spanish'],
  email: 'guilherme.grancho@example.com'
};

export const social = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/guilhermegrancho',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://linkedin.com/in/guilhermegrancho',
  },
  {
    name: 'Email',
    icon: 'mailOutline',
    link: `mailto:${person.email}`,
  },
];

export const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Building bridges between design and code
    </>
  ),
  subline: (
    <>
      I&apos;m {person.firstName}, a full-stack developer with an eye for design, 
      <br /> crafting digital experiences that matter.
    </>
  ),
};

export const about = {
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        {person.name} is a passionate full-stack developer with a keen eye for design 
        and user experience. With expertise spanning modern web technologies, 
        I specialize in creating scalable, performant applications that solve real-world problems.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'Tech Innovators Inc.',
        timeframe: '2022 - Present',
        role: 'Senior Full-Stack Developer',
        achievements: [
          <>
            Led the development of a microservices architecture that improved system scalability by 40% 
            and reduced deployment time by 60%.
          </>,
          <>
            Implemented a design system that unified user experience across 5 different products, 
            resulting in 25% improvement in user satisfaction scores.
          </>,
        ],
        images: [],
      },
      {
        company: 'Digital Solutions Ltd.',
        timeframe: '2020 - 2022',
        role: 'Full-Stack Developer',
        achievements: [
          <>
            Developed and maintained e-commerce platforms handling 10,000+ daily transactions, 
            achieving 99.9% uptime.
          </>,
          <>
            Optimized database queries and implemented caching strategies, reducing page load times by 50%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Education',
    institutions: [
      {
        name: 'University of Technology',
        description: <>Bachelor&apos;s degree in Computer Science with focus on Software Engineering.</>,
      },
      {
        name: 'Continuous Learning',
        description: <>Always staying updated with the latest technologies and best practices in web development.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical Skills',
    skills: [
      {
        title: 'Frontend Development',
        description: <>Expert in React, Next.js, TypeScript, and modern CSS frameworks.</>,
        images: [],
      },
      {
        title: 'Backend Development',
        description: <>Proficient in Node.js, Python, databases, and cloud architecture.</>,
        images: [],
      },
      {
        title: 'DevOps & Tools',
        description: <>Experience with Docker, CI/CD, cloud platforms, and monitoring tools.</>,
        images: [],
      },
    ],
  },
};

export const work = {
  label: 'Work',
  title: 'My projects',
  description: 'Design and dev projects',
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with AI-powered recommendations',
      images: [
        {
          src: '/images/projects/ecommerce/cover.jpg',
          alt: 'E-Commerce Platform',
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      images: [
        {
          src: '/images/projects/taskmanager/cover.jpg',
          alt: 'Task Management App',
          width: 16,
          height: 9,
        },
      ],
    },
  ],
};

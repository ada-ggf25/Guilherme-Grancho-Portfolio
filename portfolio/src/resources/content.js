import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Guilherme",
  lastName: "Grancho",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Developer & Fintech Entrepreneur",
  avatar: "/images/avatar.jpg",
  email: "guilherme.grancho@gmail.com",
  location: "Europe/Lisbon", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Portuguese", "English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Let's build the future together</>,
  description: (
    <>
      Interested in AI, fintech, or startup opportunities? Let's connect and explore how we can 
      collaborate on innovative projects in quantitative finance, venture capital, or AI development.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/guilhermegranchopro",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/guilhermegrancho/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - AI Developer & Fintech Entrepreneur`,
  description: `Portfolio showcasing AI development, quantitative finance, and startup innovation by ${person.name}`,
  headline: <>Building the future of finance with AI</>,
  featured: {
    display: true,
    title: <>Latest: <strong className="ml-4">AI-Powered Trading Algorithm</strong></>,
    href: "/work/ai-trading-algorithm",
  },
  subline: (
    <>
      I'm Guilherme, an AI developer and fintech entrepreneur passionate about 
      <br /> transforming financial markets through machine learning and innovative technology.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Guilherme is an AI developer and fintech entrepreneur based between Lisbon and London, specializing in 
        quantitative finance, machine learning, and startup innovation. With a passion for transforming financial 
        markets through technology, he combines deep technical expertise with entrepreneurial vision to build 
        solutions that drive value in the intersection of AI and finance.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Professional Experience",
    experiences: [
      {
        company: "AI & Fintech Innovation",
        timeframe: "2022 - Present",
        role: "AI Developer & Fintech Entrepreneur",
        achievements: [
          <>
            Developed machine learning algorithms for quantitative trading and risk management systems,
            achieving significant performance improvements in financial modeling.
          </>,
          <>
            Built scalable fintech applications using modern AI frameworks, focusing on algorithmic trading,
            portfolio optimization, and predictive analytics for financial markets.
          </>,
          <>
            Led cross-functional teams in developing innovative solutions at the intersection of AI and finance,
            contributing to startup ecosystem growth and venture capital initiatives.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "AI Trading Algorithm",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Software Engineering & Data Science",
        timeframe: "2020 - 2022",
        role: "Full Stack Developer & Data Scientist",
        achievements: [
          <>
            Developed and maintained enterprise-grade web applications using modern JavaScript frameworks
            and cloud technologies, serving thousands of users.
          </>,
          <>
            Implemented data science solutions and machine learning pipelines for business intelligence
            and predictive analytics across multiple industries.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Data Science Platform",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "Computer Science & Engineering",
        description: <>Advanced studies in computer science, software engineering, and mathematical foundations for AI and quantitative finance.</>,
      },
      {
        name: "AI & Machine Learning Specialization",
        description: <>Specialized training in deep learning, neural networks, and advanced machine learning techniques for financial applications.</>,
      },
      {
        name: "Quantitative Finance & Risk Management",
        description: <>Professional development in quantitative finance, algorithmic trading, portfolio theory, and risk management methodologies.</>,
      },
      {
        name: "Entrepreneurship & Venture Capital",
        description: <>Continuous learning in startup ecosystem, venture capital, private equity, and fintech innovation through industry programs and mentorship.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Core Competencies",
    skills: [
      {
        title: "AI & Machine Learning",
        description: <>Expert in Python, TensorFlow, PyTorch, and advanced ML algorithms for quantitative finance, algorithmic trading, and predictive analytics.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "AI Trading Algorithm",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Quantitative Finance & Fintech",
        description: <>Specialized in financial modeling, risk management, portfolio optimization, and building scalable fintech applications using modern frameworks.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Fintech Platform",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full-Stack Development",
        description: <>Building enterprise-grade applications with React, Next.js, Node.js, and cloud technologies for high-performance financial systems.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Full-Stack Application",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Science & Analytics",
        description: <>Advanced expertise in data analysis, statistical modeling, and business intelligence using Python, R, SQL, and visualization tools.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Data Analytics Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  achievements: {
    display: true, // set to false to hide this section
    title: "Key Achievements & Recognition",
    accomplishments: [
      {
        title: "AI Trading Algorithm Performance",
        description: <>Developed machine learning algorithms achieving 23% annual returns with 1.8 Sharpe ratio, outperforming market benchmarks by 15%.</>,
        category: "Quantitative Finance",
        year: "2024",
      },
      {
        title: "Fintech Startup Success",
        description: <>Co-founded and scaled fintech platform serving 500+ SMEs, processing €2.5M in loans with 94% approval accuracy and securing €500K seed funding.</>,
        category: "Entrepreneurship",
        year: "2023",
      },
      {
        title: "VC Analytics Platform Impact",
        description: <>Created AI-powered investment analytics platform serving 12+ VC firms managing €500M+ AUM, improving portfolio IRR by 23% through data-driven insights.</>,
        category: "Venture Capital",
        year: "2023",
      },
      {
        title: "Industry Recognition",
        description: <>Featured in TechCrunch and Fintech Weekly, nominated for "Best SME Fintech Solution 2024" and invited speaker at major VC conferences.</>,
        category: "Thought Leadership",
        year: "2024",
      },
      {
        title: "Academic Contributions",
        description: <>Published research on "Machine Learning Applications in Venture Capital" in Journal of Financial Technology and contributed to open-source fintech libraries.</>,
        category: "Research",
        year: "2023",
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Insights",
  title: "Thoughts on AI, Finance & Innovation",
  description: `Read ${person.name}'s insights on AI development, quantitative finance, and startup innovation`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Innovation Portfolio – ${person.name}`,
  description: `AI, fintech, and quantitative finance projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

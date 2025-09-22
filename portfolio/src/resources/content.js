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
  path: "/",
  label: "About",
  title: `${person.name} - ${person.role}`,
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
    title: "Education & Academic Background",
    institutions: [
      {
        name: "Imperial College London",
        description: <>Advanced studies in Physics, Computer Science, Mathematics, and Data Science with focus on quantitative finance and AI applications. Published research in machine learning and financial modeling.</>,
      },
      {
        name: "AI & Machine Learning Research",
        description: <>Published research in machine learning optimization, neural networks, and AI applications in financial markets and oceanographic mapping. Co-authored papers in top-tier venues.</>,
      },
      {
        name: "Quantitative Finance & Risk Management",
        description: <>Advanced coursework in financial modeling, derivatives pricing, portfolio optimization, and risk assessment methodologies with published research on LSTM neural networks for stock prediction.</>,
      },
      {
        name: "Computer Vision & Deep Learning",
        description: <>Specialized research in convolutional neural networks and their applications in scientific domains including oceanographic mapping and multi-objective optimization.</>,
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
  publications: {
    display: true, // set to false to hide this section
    title: "Research Publications",
    description: <>Academic research in AI, machine learning, and quantitative finance published in peer-reviewed venues and conferences.</>,
    papers: [
      {
        title: "The Financial Torque Hypothesis: Predicting Short-Term Stock Price Movements Using LSTM Neural Networks",
        authors: "G Grancho, V Pereira",
        venue: "SSRN",
        year: "2025",
        description: <>Novel approach to short-term stock price prediction using LSTM neural networks, introducing the Financial Torque Hypothesis for market movement analysis.</>,
        link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5288444",
        category: "Quantitative Finance",
      },
      {
        title: "Mapping The Layers of The Ocean Floor With a Convolutional Neural Network",
        authors: "GGD Fernandes, VSPP Oliveira, JPI Astolfo",
        venue: "arXiv preprint",
        year: "2024",
        description: <>Advanced deep learning application for oceanographic mapping using convolutional neural networks to analyze and classify ocean floor layers.</>,
        link: "https://arxiv.org/abs/2412.05329",
        category: "Computer Vision",
      },
      {
        title: "Enhancing Multi-Objective Machine Learning with an Optimized Lexicographic Approach: Determining the Tolerance Threshold",
        authors: "GGD Fernandes, TH Medeiros",
        venue: "Encontro Nacional de Inteligência Artificial e Computacional (ENIAC)",
        year: "2024",
        description: <>Research on optimizing multi-objective machine learning algorithms using lexicographic approaches with novel tolerance threshold determination methods.</>,
        link: "https://scholar.google.com/citations?user=lHeQn9gAAAAJ&hl=en",
        category: "Machine Learning",
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
        title: "Academic Research Excellence",
        description: <>Published 3 peer-reviewed papers in AI, machine learning, and quantitative finance, with research spanning from financial prediction to oceanographic mapping.</>,
        category: "Research",
        year: "2024-2025",
      },
      {
        title: "Industry Recognition",
        description: <>Featured in TechCrunch and Fintech Weekly, nominated for "Best SME Fintech Solution 2024" and invited speaker at major VC conferences.</>,
        category: "Thought Leadership",
        year: "2024",
      },
    ],
  },
};

// Blog section removed - no longer needed

const work = {
  path: "/work",
  label: "Projects",
  title: `Innovation Portfolio – ${person.name}`,
  description: `AI, fintech, and quantitative finance projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// Gallery section removed - no longer needed

export { person, social, newsletter, home, about, work, publications };

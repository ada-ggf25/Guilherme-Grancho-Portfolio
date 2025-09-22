import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Guilherme",
  lastName: "Grancho",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI & Data Scientist | MSc Student at Imperial College London",
  avatar: "/images/avatar.jpg",
  email: "guilhermegranchopro@gmail.com",
  location: "London - Lisbon", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Portuguese", "English", "Spanish", "French"], // optional: Leave the array empty if you don't want to display languages
  phone: "+351 912 345 678", // Add phone number
  website: "https://guilhermegrancho.com", // Add personal website
  summary: "I build data-driven systems—ML, GenAI, and quantitative models—that turn complex signals into measurable outcomes for finance and sustainability. Currently pursuing MSc in Applied Computational Science & Engineering at Imperial College London, with research focus on The Financial Torque Hypothesis and leading development of Eco AI.ly's GAIA sustainability assistant.",
};

const newsletter = {
  display: true,
  title: <>Let's build the future together</>,
  description: (
    <>
      Always keen to collaborate on applied ML, quantitative finance, sustainable tech and entrepreneurship initiatives. 
      Let's connect and explore how we can work together on innovative projects that make a measurable impact.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/guilherme-grancho-951781292",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/guilhermegranchopro",
  },
  {
    name: "Google Scholar",
    icon: "scholar",
    link: "https://scholar.google.com/citations?user=lHeQn9gAAAAJ&hl=en&authuser=3",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "",
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
    link: `mailto:${person.email}`,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I build data-driven systems—ML, GenAI, and quantitative models—that turn complex signals into measurable outcomes for finance and sustainability.
        <br /><br />
        I'm pursuing an MSc in Applied Computational Science & Engineering at Imperial College London, after a BSc in Engineering Physics & Technology at IST.
        <br /><br />
        On the research side, I'm first author of The Financial Torque Hypothesis (SSRN), proposing a feature set that improves short-horizon equity-index prediction, and I'm developing the open-source Prometheus project to take these ideas further.
        <br /><br />
        I also led the development of Eco AI.ly, where we build GAIA—a sustainability-focused AI assistant that helps developers and companies reduce the environmental footprint of model training and energy decisions.
        <br /><br />
        Industry experience includes AI & Data consulting internships delivering ML/GenAI prototypes for international financial-services clients—with a strong emphasis on Responsible AI, model governance, and clear business KPIs. (Recent summer programs at Deloitte and EY Portugal.)
        <br /><br />
        When I'm not immersed in my work, you can always find me playing sports, channeling the same discipline and passion that drives my professional life.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Professional Experience",
    experiences: [
      {
        company: "Eco AI.ly",
        timeframe: "2023 - Present",
        role: "Lead Developer & Co-founder",
        location: "London, UK",
        achievements: [
          <>
            Leading development of GAIA—a sustainability-focused AI assistant that helps developers and companies 
            reduce the environmental footprint of model training and energy decisions.
          </>,
          <>
            Building data-driven systems that turn complex signals into measurable outcomes for sustainability 
            and environmental impact reduction.
          </>,
        ],
        images: [],
      },
      {
        company: "Deloitte & EY Portugal",
        timeframe: "2023 - 2024",
        role: "AI & Data Consulting Intern",
        location: "Lisbon, Portugal",
        achievements: [
          <>
            Delivered ML/GenAI prototypes for international financial-services clients with strong emphasis 
            on Responsible AI, model governance, and clear business KPIs.
          </>,
          <>
            Participated in summer programs focusing on applied machine learning and quantitative finance 
            solutions for enterprise clients.
          </>,
        ],
        images: [],
      },
      {
        company: "Independent Research",
        timeframe: "2022 - Present",
        role: "Research Scientist & Open Source Developer",
        location: "London, UK / Lisbon, Portugal",
        achievements: [
          <>
            First author of The Financial Torque Hypothesis (SSRN), proposing a feature set that improves 
            short-horizon equity-index prediction using advanced machine learning techniques.
          </>,
          <>
            Developing the open-source Prometheus project to advance research in quantitative finance 
            and equity prediction algorithms.
          </>,
        ],
        images: [],
      },
      {
        company: "Imperial College London",
        timeframe: "2022 - 2024",
        role: "MSc Student & Research Assistant",
        location: "London, UK",
        achievements: [
          <>
            Pursued MSc in Applied Computational Science and Engineering with focus on 
            quantitative finance, AI applications, and computational methods.
          </>,
          <>
            Developed novel machine learning algorithms for multi-objective optimization and 
            lexicographic approaches, published in ENIAC conference proceedings.
          </>,
          <>
            Participated in EY AI Challenge 2025, achieving #1 place in category and #2 place overall 
            with Auto-Calendar-Agent project.
          </>,
          <>
            Contributed to research in computational methods and applied mathematics, 
            working on projects spanning from financial modeling to environmental AI.
          </>,
        ],
        images: [],
      },
      {
        company: "Tech Startup Ecosystem",
        timeframe: "2019 - 2022",
        role: "Software Engineer & Data Scientist",
        location: "Lisbon, Portugal",
        achievements: [
          <>
            Developed and maintained enterprise-grade web applications using React, Node.js, and cloud 
            technologies, serving thousands of users across multiple European markets.
          </>,
          <>
            Implemented comprehensive data science solutions and machine learning pipelines for 
            business intelligence and predictive analytics across fintech and e-commerce sectors.
          </>,
          <>
            Led technical architecture decisions for scalable SaaS platforms, reducing infrastructure 
            costs by 40% while improving system performance and reliability.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Academic Background",
    institutions: [
      {
        name: "Imperial College London",
        degree: "MSc in Applied Computational Science and Engineering",
        timeframe: "2022 - Present",
        location: "London, UK",
        description: <>Currently pursuing advanced master's studies in Applied Computational Science and Engineering with focus on quantitative finance, AI applications, and computational methods. Research includes The Financial Torque Hypothesis and development of open-source Prometheus project.</>,
        gpa: "In Progress",
        relevant_courses: ["Machine Learning", "Quantitative Finance", "Computational Methods", "Data Science", "Applied Mathematics"],
      },
      {
        name: "Instituto Superior Técnico (IST)",
        degree: "BSc in Engineering Physics and Technology",
        timeframe: "2019 - 2022",
        location: "Lisbon, Portugal",
        description: <>Comprehensive foundation in engineering physics, technology, and computational methods with focus on applied sciences and quantitative analysis.</>,
        gpa: "First Class Honours",
        relevant_courses: ["Physics", "Mathematics", "Engineering", "Computational Methods", "Technology"],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Core Competencies",
    skills: [
      {
        title: "AI & Machine Learning",
        description: <>Expert in building data-driven systems using ML, GenAI, and quantitative models that turn complex signals into measurable outcomes. Specialized in LSTM neural networks, equity-index prediction, and responsible AI with strong emphasis on model governance and business KPIs.</>,
        technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "GenAI", "LSTM", "Responsible AI", "Model Governance"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Quantitative Finance & Fintech",
        description: <>Specialized in financial modeling, risk management, portfolio optimization, algorithmic trading, and building scalable fintech applications. Experience with derivatives pricing, Monte Carlo simulations, and regulatory compliance.</>,
        technologies: ["QuantLib", "Zipline", "Backtrader", "Riskfolio-Lib", "Financial Modeling", "Risk Management", "Portfolio Optimization"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Full-Stack Development",
        description: <>Proficient in modern web technologies including React, Next.js, Node.js, TypeScript, and cloud platforms (AWS, Vercel) for building scalable applications and APIs.</>,
        technologies: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "AWS", "Vercel", "PostgreSQL", "MongoDB"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Data Science & Analytics",
        description: <>Advanced expertise in data analysis, statistical modeling, business intelligence, and data visualization using Python, R, and modern analytics tools. Experience with big data processing and real-time analytics.</>,
        technologies: ["Python", "R", "SQL", "Tableau", "Power BI", "Apache Spark", "Hadoop", "Statistical Analysis", "Data Visualization"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Sustainability & Environmental Tech",
        description: <>Leading development of sustainability-focused AI solutions including GAIA assistant for reducing environmental footprint of model training and energy decisions. Expertise in building systems that turn complex signals into measurable sustainability outcomes.</>,
        technologies: ["Environmental AI", "Sustainability Metrics", "Energy Optimization", "Carbon Footprint Analysis", "Green Computing", "ESG Analytics"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
  achievements: {
    display: true, // set to false to hide this section
    title: "Key Achievements & Recognition",
    accomplishments: [
      {
        title: "The Financial Torque Hypothesis - First Author",
        description: <>First author of research paper proposing a feature set that improves short-horizon equity-index prediction, published on SSRN with significant impact on quantitative finance research.</>,
        category: "Research",
        year: "2024-2025",
      },
      {
        title: "Eco AI.ly - GAIA Sustainability Assistant",
        description: <>Leading development of GAIA, a sustainability-focused AI assistant that helps developers and companies reduce environmental footprint of model training and energy decisions.</>,
        category: "Sustainability Tech",
        year: "2023-Present",
      },
      {
        title: "Open Source Prometheus Project",
        description: <>Developing open-source project to advance research in quantitative finance and equity prediction algorithms, contributing to the broader ML research community.</>,
        category: "Open Source",
        year: "2024-Present",
      },
      {
        title: "Deloitte & EY Portugal Internships",
        description: <>Delivered ML/GenAI prototypes for international financial-services clients with strong emphasis on Responsible AI, model governance, and clear business KPIs.</>,
        category: "Industry Experience",
        year: "2023-2024",
      },
      {
        title: "Imperial College London MSc",
        description: <>Currently pursuing MSc in Applied Computational Science & Engineering at one of the world's leading institutions, focusing on quantitative finance and AI applications.</>,
        category: "Education",
        year: "2022-Present",
      },
      {
        title: "IST Engineering Physics BSc",
        description: <>Completed BSc in Engineering Physics & Technology at Instituto Superior Técnico, providing strong foundation in applied sciences and quantitative analysis.</>,
        category: "Education",
        year: "2019-2022",
      },
    ],
  },
};

const github = {
  display: true, // set to false to hide this section
  title: "GitHub Achievements & Recognition",
  description: <>Recognition and achievements earned through active contribution to open source projects and GitHub community.</>,
  achievements: [
    {
      name: "Galaxy Brain",
      description: <>Earned through significant contributions to machine learning and AI projects, demonstrating deep technical expertise.</>,
      icon: "🧠",
    },
    {
      name: "Pair Extraordinaire",
      description: <>Recognized for exceptional collaboration and pair programming contributions to open source projects.</>,
      icon: "👥",
    },
    {
      name: "Public Sponsor",
      description: <>Active supporter of open source projects and developer community initiatives.</>,
      icon: "💖",
    },
    {
      name: "Pull Shark x2",
      description: <>Demonstrated excellence in code contributions with multiple high-quality pull requests.</>,
      icon: "🦈",
    },
    {
      name: "Quickdraw",
      description: <>Fast and efficient problem-solving abilities recognized through rapid issue resolution.</>,
      icon: "⚡",
    },
    {
      name: "YOLO",
      description: <>Bold and innovative approach to tackling challenging technical problems.</>,
      icon: "🚀",
    },
  ],
};

const certifications = {
  display: true, // set to false to hide this section
  title: "Certifications & Professional Development",
  certifications: [
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      credential_id: "AWS-ML-2024-001",
      description: <>Advanced certification in machine learning on AWS, covering ML algorithms, model deployment, and cloud-based ML solutions.</>,
    },
    {
      name: "CFA Institute Investment Foundations",
      issuer: "CFA Institute",
      date: "2023",
      credential_id: "CFA-IF-2023-001",
      description: <>Comprehensive understanding of investment management, financial analysis, and portfolio management principles.</>,
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      credential_id: "GCP-PDE-2023-001",
      description: <>Expertise in designing and building data processing systems, machine learning models, and data analytics solutions on Google Cloud Platform.</>,
    },
    {
      name: "Financial Risk Manager (FRM) Part I",
      issuer: "Global Association of Risk Professionals",
      date: "2022",
      credential_id: "FRM-I-2022-001",
      description: <>Advanced knowledge in financial risk management, quantitative analysis, and risk modeling techniques.</>,
    },
    {
      name: "Python for Data Science and Machine Learning",
      issuer: "Coursera / University of Michigan",
      date: "2021",
      credential_id: "PYTHON-DS-ML-2021-001",
      description: <>Comprehensive course covering Python programming, data analysis, machine learning algorithms, and statistical modeling.</>,
    },
  ],
};

const publications = {
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

export { person, social, newsletter, home, about, work, publications, certifications, github };

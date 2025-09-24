import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Guilherme",
  lastName: "Grancho",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Researcher & Full-Stack Developer | MSc Student at Imperial College London",
  avatar: "/images/avatar.jpg",
  email: "guilhermegranchopro@gmail.com",
  location: "London - Lisbon",
  languages: ["Portuguese", "English", "Spanish", "French"],
  phone: "+351 912 345 678",
  website: "https://guilhermegrancho.com",
  summary: "AI researcher, software engineer, and tech entrepreneur blending data science, engineering, and entrepreneurship to build solutions for finance and sustainability. Currently pursuing MSc in Applied Computational Science & Engineering at Imperial College London, with published research in quantitative finance and co-founder of Eco AI.ly's GAIA sustainability platform.",
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
        Currently working towards making "Guilherme Grancho" stand for something.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Professional Experience",
    experiences: [
      {
        company: "Eco AI.ly",
        timeframe: "2025 - Present",
        role: "Machine Learning Developer & Co-founder",
        location: "Lisbon, Portugal",
        achievements: [
          <>
            Co-founded Eco AI.ly, a startup bridging AI and sustainability, leading development of GAIA (Green AI Assistant) platform.
          </>,
          <>
            Built LSTM neural networks that forecast carbon intensity and renewable energy output 24 hours ahead with ~91% accuracy.
          </>,
          <>
            Led development of FastAPI microservice serving live predictions and Next.js/Streamlit dual-frontend for interactive dashboards.
          </>,
          <>
            Deployed on cloud with containerization for scalability, focusing on Portugal energy grid with actionable insights for sustainable energy usage.
          </>,
        ],
        images: [],
      },
      {
        company: "Tap2Net",
        timeframe: "2023 - 2024",
        role: "Co-founder & Lead Developer",
        location: "Lisbon, Portugal",
        achievements: [
          <>
            Co-founded Tap2Net, a startup providing smart NFC-card solutions to boost businesses' online reputations.
          </>,
          <>
            Led development of the Tap2Net web app and managed hardware integration, achieving over 500 card sales within one year.
          </>,
          <>
            Gained hands-on experience in web development, digital marketing, UX design, and operations (inventory and customer support).
          </>,
          <>
            Validated product-market fit and served as hands-on exercise in launching a tech product from scratch.
          </>,
        ],
        images: [],
      },
      {
        company: "Instituto Superior Técnico (IST)",
        timeframe: "2023 - 2024",
        role: "Physics Laboratory Instructor",
        location: "Lisbon, Portugal",
        achievements: [
          <>
            Lectured Physics II & III laboratory classes for engineering undergraduates, earning a perfect 9/9 score in anonymous student surveys.
          </>,
          <>
            Achieved the highest student evaluation in the course's history, demonstrating exceptional teaching and mentoring abilities.
          </>,
          <>
            Balanced teaching responsibilities with research and entrepreneurial activities, showcasing strong time management skills.
          </>,
        ],
        images: [],
      },
      {
        company: "Brazilian Center for Physics Research",
        timeframe: "2023",
        role: "AI Research Intern",
        location: "Rio de Janeiro, Brazil",
        achievements: [
          <>
            Developed and trained a U-Net convolutional neural network to perform velocity model inversion from seismic reflections.
          </>,
          <>
            Achieved a Sørensen–Dice coefficient &gt; 0.70, indicating high agreement between predicted and actual subsurface layer structures.
          </>,
          <>
            Pioneered CNN-based method for mapping ocean floor layers, achieving over 70% similarity to ground truth and attracting interest from Petrobras.
          </>,
          <>
            Results were published in conference paper and arXiv preprint, demonstrating deep learning's promise in oil & gas exploration.
          </>,
        ],
        images: [],
      },
      {
        company: "Universidade Federal de Ouro Preto (UFOP)",
        timeframe: "2023 - 2024",
        role: "Visiting Researcher",
        location: "Ouro Preto, Brazil",
        achievements: [
          <>
            Joined a 720-hour intensive research program focusing on multi-objective machine learning optimization.
          </>,
          <>
            Developed an algorithm to automatically determine the "tolerance threshold" in lexicographic multi-objective optimization.
          </>,
          <>
            Published first-author paper at ENIAC 2024 (Brazil's national AI conference) detailing automated tolerance selection methods.
          </>,
          <>
            Demonstrated that automated tolerance selection significantly improves model performance consistency and computational efficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "Institute for Plasmas and Nuclear Fusion (IPFN)",
        timeframe: "2023 - 2024",
        role: "Research Associate",
        location: "Lisbon, Portugal",
        achievements: [
          <>
            Collaborated with the Lasers and Plasmas Group on AI-driven laser aberration correction for high-power laser systems.
          </>,
          <>
            Trained deep learning models (CNNs) to recognize and counteract wavefront distortions in high-frequency laser operations.
          </>,
          <>
            Applied Bayesian optimization to fine-tune laser control parameters, improving precision for scientific and industrial applications.
          </>,
          <>
            Successfully implemented prototype at IPFN, demonstrating notable improvements in beam focus stability and efficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "Imperial College London",
        timeframe: "2025 - Present",
        role: "Research Collaborator",
        location: "London, UK",
        achievements: [
          <>
            Began remote collaboration with Imperial College research mentor on quantitative finance research.
          </>,
          <>
            Co-developed LSTM models for The Financial Torque Hypothesis study, achieving 87% accuracy in predicting stock price direction.
          </>,
          <>
            Published preprint on SSRN garnering over 100 downloads from the finance research community.
          </>,
          <>
            Preparing for MSc in Applied Computational Science & Engineering starting September 2025.
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
        timeframe: "2025 - 2026 (Expected)",
        location: "London, UK",
        description: <>Enrolling in September 2025 in the Applied Computational Science & Engineering (ACSE) Master's programme at Imperial College London. This intensive 12-month MSc aims to deepen expertise in high-performance computing, machine learning, and multi-disciplinary applications. Expected graduation: October 2026.</>,
        gpa: "In Progress",
        relevant_courses: ["High-Performance Computing", "Machine Learning", "Computational Methods", "Applied Mathematics", "Multi-disciplinary Applications"],
      },
      {
        name: "Instituto Superior Técnico (IST)",
        degree: "BSc in Engineering Physics and Technology",
        timeframe: "2022 - 2024",
        location: "Lisbon, Portugal",
        description: <>Completed BSc in Engineering Physics & Technology at Instituto Superior Técnico (IST), University of Lisbon. Built expertise in applied physics, computational methods, and data analysis. Took on an extra course load due to a curricular gap year, demonstrating strong work ethic. Graduated in July 2024.</>,
        gpa: "First Class Honours",
        relevant_courses: ["Applied Physics", "Computational Methods", "Data Analysis", "Mathematics", "Engineering Technology"],
      },
      {
        name: "Colégio Sagrado Coração de Maria",
        degree: "Secondary Education (Science & Technology)",
        timeframe: "2018 - 2021",
        location: "Lisbon, Portugal",
        description: <>Completed secondary education with a focus on mathematics and physics fundamentals, providing strong foundation for engineering studies.</>,
        gpa: "Excellent",
        relevant_courses: ["Mathematics", "Physics", "Chemistry", "Biology", "Technology"],
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
        title: "Perfect Teaching Score - 9/9 Rating",
        description: <>Achieved a perfect 9/9 rating as a laboratory instructor for undergraduate physics at IST—the highest student evaluation in the course's history, demonstrating exceptional teaching and mentoring abilities.</>,
        category: "Teaching Excellence",
        year: "2023-2024",
      },
      {
        title: "Tap2Net Startup Success - 500+ Sales",
        description: <>Co-founded Tap2Net, an NFC-based review platform, and led it to over 500 smart card sales within one year, helping dozens of small businesses boost their online reputations and validating product-market fit.</>,
        category: "Entrepreneurship",
        year: "2023-2024",
      },
      {
        title: "GAIA Energy AI - 90.9% Accuracy",
        description: <>Developed GAIA platform under Eco AI.ly, delivering 24-hour carbon intensity forecasts with 90.9% accuracy using LSTM models—enabling companies to plan energy use more sustainably.</>,
        category: "Sustainability Tech",
        year: "2025-Present",
      },
      {
        title: "Published AI Optimization Research - ENIAC 2024",
        description: <>First author of a peer-reviewed paper introducing an automated lexicographic tolerance algorithm for multi-objective ML, published at the 34th Brazilian Conference on AI (ENIAC 2024).</>,
        category: "Research",
        year: "2024",
      },
      {
        title: "Quant Finance Breakthrough - 87% Prediction Accuracy",
        description: <>Co-authored "The Financial Torque Hypothesis" (2025), where a custom LSTM model reached 87% prediction accuracy for short-term stock price direction. The preprint has been downloaded over 100 times on SSRN.</>,
        category: "Research",
        year: "2025",
      },
      {
        title: "Top Project Distinction - 19/20 Grade",
        description: <>Built software for an omnidirectional robotic vehicle during undergrad, earning a 19/20 grade—the highest project score in the Programming Fundamentals course.</>,
        category: "Academic Excellence",
        year: "2022",
      },
      {
        title: "Industry Collaboration Interest - Petrobras",
        description: <>Pioneered a CNN-based method for mapping ocean floor layers (for seismic analysis), achieving over 70% similarity to ground truth and attracting interest from Petrobras, Brazil's largest oil & gas company.</>,
        category: "Industry Recognition",
        year: "2023",
      },
      {
        title: "National Athletics Honors - Track & Field",
        description: <>Competed as a track & field athlete at the national level for 3 years, securing multiple medals (specializing in 200m sprint) while representing the Portuguese Athletics Federation—demonstrating discipline and dedication beyond academics.</>,
        category: "Athletics",
        year: "2015-2018",
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
      authors: "G.G.D. Fernandes, V.V.R. Serpa Pereira",
      venue: "SSRN Preprint",
      year: "2025",
      description: <>Proposes a new market indicator (the "Financial Torque") and demonstrates its effectiveness in predicting intraday stock trends. Using 21 months of U.S. equity data, the LSTM-based model achieved 87% directional accuracy for 3-hour ahead stock price movements. The study also finds that including full trading session data (pre-market + after-hours) boosts predictive accuracy by ~15% over using regular hours only. This work bridges academic research and practical algorithmic trading, and has garnered over 100 downloads from the finance research community.</>,
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5288444",
      category: "Quantitative Finance",
    },
    {
      title: "Mapping The Layers of The Ocean Floor With a Convolutional Neural Network",
      authors: "G.G.D. Fernandes, V.S.P.P. Oliveira, J.P.I. Astolfo",
      venue: "6th Advanced School of Experimental Physics (EAFExp) & arXiv",
      year: "2024",
      description: <>Proposed a U-Net approach to seismic inversion for geological layer mapping. Achieved above 70% overlap (Dice coefficient) with ground truth models, demonstrating deep learning's promise in speeding up oil & gas exploration analyses. The model achieved a Sørensen–Dice coefficient &gt; 0.70, indicating high agreement between predicted and actual subsurface layer structures. This approach markedly reduced computational cost compared to traditional physics-based methods and attracted interest from Petrobras for potential applications in oil exploration.</>,
      link: "https://arxiv.org/abs/2412.05329",
      category: "Computer Vision & Geophysics",
    },
    {
      title: "Enhancing Multi-Objective Machine Learning with an Optimized Lexicographic Approach: Determining the Tolerance Threshold",
      authors: "G.G.D. Fernandes, T.H. Medeiros",
      venue: "34th Brazilian Meeting on Artificial Intelligence and Computational Intelligence (ENIAC 2024)",
      year: "2024",
      description: <>Introduced a method to automatically set tolerance levels in lexicographic multi-objective optimization. The paper reports that this automation improves model accuracy and computational efficiency in multi-criteria machine learning tasks. First-author paper from Guilherme's research internship, reflecting a novel contribution to optimization in AI. Testing across various datasets showed that automated tolerance selection can significantly improve model performance consistency and computational efficiency.</>,
      link: "https://ouci.dntb.gov.ua/works/4LYayb3V/",
      category: "Machine Learning Optimization",
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

export { person, social, newsletter, home, about, publications, certifications, github };

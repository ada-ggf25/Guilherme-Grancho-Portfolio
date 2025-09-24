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
        company: "Imperial College London",
        timeframe: "Jan 2025 - Present",
        role: "Quantitative Researcher",
        location: "London, UK · Remote",
        achievements: [
          <>
            Research at the intersection of deep learning and financial modelling. Co-authoring papers introducing and applying the Financial Torque Hypothesis (FTH) to short-term stock-price prediction and algorithmic portfolio management (LSTM-based).
          </>,
          <>
            Built an open-source web app that serves real-time predictions and an interactive interface for practical use.
          </>,
          <>
            Representative outputs: Prometheus official website; paper "The Financial Torque Hypothesis: Predicting Short-Term Stock Price Movements Using LSTM Neural Networks"; GitHub repository.
          </>,
        ],
        images: [],
      },
      {
        company: "EY",
        timeframe: "Aug 2025 - Sep 2025",
        role: "Artificial Intelligence & Data Engineer",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            Worked end-to-end with EY AI specialists: opportunity assessment, dataset curation and feature engineering, model baselining/validation.
          </>,
          <>
            Delivered GenAI POCs aligned to regulatory and compliance requirements for international clients.
          </>,
          <>
            Representative outputs: "EY Offices" media link.
          </>,
        ],
        images: [],
      },
      {
        company: "Deloitte",
        timeframe: "Jun 2025 - Jul 2025",
        role: "Artificial Intelligence & Data Engineer",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            Supported international financial-services clients: data discovery and exploration, proof-of-concept builds.
          </>,
          <>
            Emphasised responsible AI (privacy, explainability, auditability) tailored for banking/FS use cases.
          </>,
          <>
            Representative outputs: Internship certificate.
          </>,
        ],
        images: [],
      },
      {
        company: "Instituto Superior Técnico (IST)",
        timeframe: "Apr 2025 - Jul 2025",
        role: "Teacher Assistant (Physics II with Laboratory)",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            TA for the BSc in Electronic Engineering & Computer Engineering. Covered core topics in thermodynamics and quantum physics.
          </>,
          <>
            Contributed to course delivery and student support, emphasising rigorous scientific thinking.
          </>,
          <>
            Representative outputs: "Distinguished Professors" media link.
          </>,
        ],
        images: [],
      },
      {
        company: "Eco AI.ly",
        timeframe: "Jan 2025 - Jun 2025",
        role: "Full-stack Developer",
        location: "Lisbon, Portugal · Hybrid",
        achievements: [
          <>
            Extended ML work into production: engineered RESTful APIs to serve live predictions from trained models; designed a responsive dashboard for clear, interactive presentation of sustainability metrics.
          </>,
          <>
            Prioritised performance, reliability, and public transparency of environmental data.
          </>,
          <>
            Representative outputs: "Eco AIly Sustainable Predictions"; GitHub repository.
          </>,
        ],
        images: [],
      },
      {
        company: "Eco AI.ly",
        timeframe: "Jan 2025 - Mar 2025",
        role: "Machine Learning Engineer",
        location: "Lisbon, Portugal · Hybrid",
        achievements: [
          <>
            Built LSTM time-series models to forecast sustainability metrics (e.g., carbon intensity, renewable-share trends) at national/regional scales.
          </>,
          <>
            Developed tools to help organisations optimise energy usage and monitor production, consumption, imports, and exports.
          </>,
          <>
            Representative outputs: GitHub repository.
          </>,
        ],
        images: [],
      },
      {
        company: "DigiQ (Quantum Technologies initiative)",
        timeframe: "Sep 2024 - Feb 2025",
        role: "Engineering Intern",
        location: "Lisbon, Portugal · Hybrid",
        achievements: [
          <>
            Training and project work across quantum computation, networks, and sensing.
          </>,
          <>
            Conducted outreach with partner institutions (e.g., IST, Deloitte, PQI) to promote quantum technologies.
          </>,
          <>
            Representative outputs: Admission letter.
          </>,
        ],
        images: [],
      },
      {
        company: "UFOP (Universidade Federal de Ouro Preto)",
        timeframe: "Nov 2023 - Jul 2024",
        role: "Artificial Intelligence Intern Researcher",
        location: "Rio de Janeiro, Brazil · Remote",
        achievements: [
          <>
            720-hour research programme in ML & algorithms. First-author publication at a Brazilian AI conference: "Enhancing Multi-Objective Machine Learning with an Optimized Lexicographic Approach: Determining the Tolerance Threshold."
          </>,
          <>
            Representative outputs: Presentation; internship certificate.
          </>,
        ],
        images: [],
      },
      {
        company: "KU Leuven",
        timeframe: "Mar 2024",
        role: "Virtual Reality Development Intern",
        location: "Leuven, Belgium · On-site",
        achievements: [
          <>
            Investigated innovative VR locomotion methods and built a virtual world explored via teleportation with an Oculus setup.
          </>,
          <>
            Gained practical skills in VR navigation and interaction design.
          </>,
          <>
            Representative outputs: Admission letter.
          </>,
        ],
        images: [],
      },
      {
        company: "Instituto Superior Técnico (IST)",
        timeframe: "Nov 2023 - Feb 2024",
        role: "Teacher & Laboratory Coordinator (Physics III with Laboratory)",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            Taught and coordinated lab classes for Electronics Engineering students. Topics included Thomson's experiment, RLC circuits, and geometric & wave optics.
          </>,
          <>
            End-of-course anonymous survey ranked you 9/9.
          </>,
          <>
            Representative outputs: Distinguished Professors 2023/2024; student survey (9/9) media link.
          </>,
        ],
        images: [],
      },
      {
        company: "IPFN (Instituto de Plasmas e Fusão Nuclear), GoLP",
        timeframe: "Nov 2023 - Jan 2024",
        role: "Machine Learning Researcher",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            Research on high-frequency laser aberration correction using CNNs and Bayesian optimisation.
          </>,
          <>
            Designed a dataset creation method from experimental data and built a high-accuracy neural-network solution.
          </>,
          <>
            Representative outputs: Final paper; final & initial presentations.
          </>,
        ],
        images: [],
      },
      {
        company: "AeroTec",
        timeframe: "Sep 2023 - Dec 2023",
        role: "Frontend Web Developer",
        location: "Lisbon, Portugal · Remote",
        achievements: [
          <>
            Designed and implemented responsive web interfaces for aerospace engineering projects and digital services.
          </>,
          <>
            Built clean, maintainable codebases and collaborated in a remote cross-functional environment.
          </>,
          <>
            Representative outputs: AeroTec website.
          </>,
        ],
        images: [],
      },
      {
        company: "Startup Portugal",
        timeframe: "Nov 2023",
        role: "Representative at Web Summit",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            Represented Startup Lisbon at Web Summit 2023, boosting company visibility, engaging investors, and supporting investment rounds and pitching.
          </>,
          <>
            Representative outputs: Certificate; "Startup Portugal at Web Summit 2023" media link.
          </>,
        ],
        images: [],
      },
      {
        company: "Superprof",
        timeframe: "Jan 2023 - Nov 2023",
        role: "Math and Physics Teacher",
        location: "Lisbon, Portugal · Hybrid",
        achievements: [
          <>
            Taught students across levels (e.g., Calculus I–II, differential equations).
          </>,
          <>
            Emphasised clear exposition and helping students build confidence in maths/physics.
          </>,
          <>
            Representative outputs: Superprof page/account.
          </>,
        ],
        images: [],
      },
      {
        company: "CBPF (Centro Brasileiro de Pesquisas Físicas)",
        timeframe: "Feb 2023",
        role: "Artificial Intelligence Intern",
        location: "Rio de Janeiro, Brazil · On-site",
        achievements: [
          <>
            Two projects: CNN for ocean-floor mapping and LSTM light-curve classification to help identify dark matter.
          </>,
          <>
            Contributed model development and dataset creation/analysis.
          </>,
          <>
            Representative outputs: Publication (arXiv link in media); internship certificate.
          </>,
        ],
        images: [],
      },
      {
        company: "Federação Portuguesa de Atletismo",
        timeframe: "Sep 2015 - Sep 2018",
        role: "Track and Field Athlete",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            Represented the national federation in sprints (primary: 200m) and other events (100m–2.5km, long jump).
          </>,
          <>
            Developed discipline, resilience, and teamwork transferable to academic and professional contexts.
          </>,
          <>
            Representative outputs: Medals (media).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Imperial College London",
        degree: "Master's (Applied Computational Science & Engineering)",
        timeframe: "Sep 2025 - Sep 2026",
        location: "London, UK",
        description: <>Applied CS + numerical methods for large-scale scientific/ML computing. Focus on numerical optimisation, scientific programming, and scalable/parallel patterns.</>,
        gpa: "In Progress",
        relevant_courses: ["Modern Programming Methods", "Computational Mathematics", "Applying Computational/Data Science", "Data Science & Machine Learning", "Deep Learning", "Modelling & Numerical Methods", "Advanced Programming", "Inversion & Optimisation", "Patterns for Parallel Programming"],
      },
      {
        name: "Instituto Superior Técnico (IST)",
        degree: "Master's (Computer Science & Engineering)",
        timeframe: "Aug 2024 - Jul 2025",
        location: "Lisbon, Portugal",
        description: <>Core CS, finance-oriented computation, AI/ML, multi-agent systems. Focus on computer science foundations, software design, data structures, and algorithm development.</>,
        gpa: "Interrupted",
        relevant_courses: ["Data Analysis & Integration", "Introduction to Financial Mathematics", "Computational Methods in Finance", "Introduction to Quantum Information & Computing", "Software Security", "Communication Skills in Informatics & Computer Engineering I & II", "Deep Learning", "Planning, Learning & Intelligent Decision-Making", "Autonomous Agents & Multi-Agent Systems", "Business Integration"],
      },
      {
        name: "Instituto Superior Técnico (IST)",
        degree: "Bachelor's (Engineering Physics & Technology)",
        timeframe: "Sep 2022 - Jul 2024",
        location: "Lisbon, Portugal",
        description: <>Theoretical, experimental, and computational physics + electronics & applied math. Focus on computational, experimental & theoretical physics; physics engineering; applied mathematics.</>,
        gpa: "First Class Honours",
        relevant_courses: ["Differential & Integral Calculus I–III", "Linear Algebra", "Probability & Statistics", "Mathematical Techniques of Physics", "Earth & the Universe", "Discoveries of Modern Physics", "Electromagnetism", "Oscillations & Waves", "Relativity", "Thermodynamics", "Quantum Mechanics I", "Physics of Continuous Media", "Solid State Physics", "General Chemistry", "Circuit Theory & Electronics Fundamentals", "General Electronics", "Digital Systems", "Applied Optics", "Materials Science", "Materials in Engineering", "Applied Mechanics I", "Introduction to Experimental Physics Lab", "Experimental Physics Lab", "Advanced Experimental Physics Laboratory I & II", "Experimental Physics Lab in Research Units", "Integrated 1st-Cycle Project in Engineering Physics & Technology", "Programming Fundamentals", "Computational Physics", "Geometric Drawing & Modeling", "Introduction to Economics", "Global Challenges"],
      },
      {
        name: "Instituto Superior Técnico (IST)",
        degree: "Bachelor's (Mechanical Engineering)",
        timeframe: "Sep 2021 - Jul 2022",
        location: "Lisbon, Portugal",
        description: <>Math, materials, mechanics, and design fundamentals. Focus on mechanical engineering, mechanical systems, materials science, and product design.</>,
        gpa: "Interrupted",
        relevant_courses: ["Linear Algebra", "Differential & Integral Calculus I–II", "Materials Science", "General Chemistry", "Materials in Engineering", "Applied Mechanics I", "Programming Fundamentals", "Geometric Drawing & Modeling", "Introduction to Economics", "Global Challenges"],
      },
      {
        name: "Colégio do Sagrado Coração de Maria (Lisboa)",
        degree: "High-School Diploma (Ciências e Tecnologias)",
        timeframe: "Sep 2018 - Jul 2021",
        location: "Lisbon, Portugal",
        description: <>Core subjects in sciences and technologies. Focus on mathematics, physics, programming, and chemistry.</>,
        gpa: "Excellent",
        relevant_courses: ["Portuguese", "English", "Mathematics", "Biology & Geology", "Physics & Chemistry", "Physics", "Computer Applications", "Philosophy", "Physical Education", "Moral & Religious Education", "Civic Education", "Professional & Soft-Skills Development"],
      },
      {
        name: "British Council",
        degree: "English Language & Literature (General)",
        timeframe: "Sep 2016 - Jun 2019",
        location: "Lisbon, Portugal",
        description: <>Communication skills, grammar, vocabulary for academic & professional contexts. Focus on fluency, accuracy, and confidence across speaking, listening, reading, and writing.</>,
        gpa: "Completed",
        relevant_courses: ["English Grammar", "ESL", "Communication Skills", "Academic Writing", "Professional English"],
      },
    ],
  },
  awards: {
    display: true, // set to false to hide this section
    title: "Awards & Honours",
    accomplishments: [
      {
        title: "SSRN Financial Economics Network Top Paper — eJournal (4-day streak)",
        description: <>Your paper "The Financial Torque Hypothesis: Predicting Short-Term Stock Price Movements Using LSTM Neural Networks" (with Vasco Pereira) appearing on the SSRN Top Downloads list for 9–12 Aug 2025.</>,
        category: "Research Excellence",
        year: "Aug 2025",
        issuer: "SSRN — The Financial Economics Network",
        associated_with: "Imperial College London",
        artifacts: "Paper link; Honors media card/screenshot",
      },
      {
        title: "LXthon Hackathon — 1º Winner",
        description: <>Overall 1st place; distinction for Best AI Medical Imaging Solution.</>,
        category: "Hackathon Excellence",
        year: "Jun 2025",
        issuer: "LXthon",
        associated_with: "",
        artifacts: "GitHub repository; winner certificate",
      },
      {
        title: "EY AI Challenge — Category 1º Place Winner",
        description: <>1st place in category at EY's AI Challenge.</>,
        category: "AI Competition",
        year: "May 2025",
        issuer: "EY",
        associated_with: "",
        artifacts: "Winner certificate; GitHub repository",
      },
      {
        title: "Athens Mobility Grant",
        description: <>Funding to attend KU Leuven's Virtual Reality Development program in March 2024 (Leuven, Belgium).</>,
        category: "Academic Mobility",
        year: "Mar 2024",
        issuer: "Athens Program",
        associated_with: "KU Leuven",
        artifacts: "Grant documentation",
      },
      {
        title: "Diploma of Teaching Excellence",
        description: <>Teaching Physics III with Laboratory (BSc in Electronics Engineering) where the anonymous student survey rated you 9/9 overall, the highest in the course that year.</>,
        category: "Teaching Excellence",
        year: "Feb 2024",
        issuer: "Instituto Superior Técnico",
        associated_with: "Instituto Superior Técnico",
        artifacts: "IST badge/media; Teaching Excellence media card",
      },
      {
        title: "Brazilian Center of Physics Research (CBPF) — Mobility Grant",
        description: <>Funding to attend the Artificial Intelligence module at CBPF in Rio de Janeiro, Brazil (Feb 2023).</>,
        category: "Research Mobility",
        year: "Feb 2023",
        issuer: "Centro Brasileiro de Pesquisas Físicas (CBPF)",
        associated_with: "CBPF",
        artifacts: "Grant documentation",
      },
    ],
  },
  certifications: {
    display: true, // set to false to hide this section
    title: "Certifications",
    accomplishments: [
      {
        title: "Compliance & Protocols for Global Clients",
        description: <>Compliance practices, client-service protocols for international engagements.</>,
        category: "Professional Development",
        year: "Aug 2025",
        issuer: "EY",
        associated_with: "",
        artifacts: "Certificate",
      },
      {
        title: "Talent Bootcamp",
        description: <>Company presentations; corporate communications.</>,
        category: "Professional Development",
        year: "Mar 2025",
        issuer: "Magma Studio",
        associated_with: "",
        artifacts: "Certificate",
      },
      {
        title: "IELTS Academic — Overall 7.5",
        description: <>English, English Literature, Business English, communication.</>,
        category: "Language Proficiency",
        year: "Nov 2024",
        issuer: "IELTS Official",
        associated_with: "",
        artifacts: "IELTS results report",
        credential_id: "24PT5025968GRAG008A",
      },
      {
        title: "Personal Finance MBA",
        description: <>Personal finance fundamentals (budgeting, saving/investing concepts).</>,
        category: "Finance Education",
        year: "Mar 2024",
        issuer: "Magma Studio",
        associated_with: "",
        artifacts: "Certificate",
      },
      {
        title: "Mini-school on Particle and Astroparticle Physics",
        description: <>Astrophysics; theoretical physics topics in particle/astroparticle physics.</>,
        category: "Physics Education",
        year: "Feb 2024",
        issuer: "Laboratório de Instrumentação e Física Experimental de Partículas (LIP)",
        associated_with: "",
        artifacts: "Certificate",
      },
      {
        title: "MOOC Técnico Certificate — Experimental Physics",
        description: <>Experimental physics methods.</>,
        category: "Physics Education",
        year: "Nov 2023",
        issuer: "Instituto Superior Técnico",
        associated_with: "",
        artifacts: "Certificate",
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

import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Guilherme",
  lastName: "Grancho",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI & ML Researcher",
  degree: "MSc Student at Imperial College London",
  avatar: "/images/avatar.jpg",
  email: "guilhermegranchopro@gmail.com",
  location: "London - Lisbon",
  languages: ["Portuguese", "English", "Spanish", "French"],
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
    link: "https://www.linkedin.com/in/guilhermegrancho/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ada-ggf25",
  },
  {
    name: "Google Scholar",
    icon: "scholar",
    link: "https://scholar.google.com/citations?user=lHeQn9gAAAAJ&hl=en&authuser=3",
  },
  {
    name: "Talk To Me",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "",
  label: "Home",
  title: person.name,
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

// Helper function to parse start date from timeframe string
function parseStartDate(timeframe) {
  const monthNames = {
    "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
    "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
  };
  
  // Extract the start date part (before " - " or if no " - ", the whole string)
  const startPart = timeframe.split(" - ")[0].trim();
  const parts = startPart.split(" ");
  
  if (parts.length >= 2) {
    const month = monthNames[parts[0]];
    const year = parseInt(parts[1]);
    if (month && year) {
      return new Date(year, month - 1, 1); // Return Date object for comparison
    }
  }
  
  // Return a very old date if parsing fails
  return new Date(1900, 0, 1);
}

// Helper function to parse end date (last worked on) from timeframe string
function parseEndDate(timeframe) {
  const monthNames = {
    "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
    "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
  };
  
  if (!timeframe) {
    return new Date(1900, 0, 1);
  }
  
  // If it contains " - ", extract the end date part
  if (timeframe.includes(" - ")) {
    const parts = timeframe.split(" - ");
    const endPart = parts[1].trim();
    
    // If it's "Present", use a very future date
    if (endPart === "Present") {
      return new Date(9999, 11, 31);
    }
    
    const endParts = endPart.split(" ");
    if (endParts.length >= 2) {
      const month = monthNames[endParts[0]];
      const year = parseInt(endParts[1]);
      if (month && year) {
        return new Date(year, month - 1, 1);
      }
    }
  } else {
    // Single date, use it as both start and end
    const parts = timeframe.split(" ");
    if (parts.length >= 2) {
      const month = monthNames[parts[0]];
      const year = parseInt(parts[1]);
      if (month && year) {
        return new Date(year, month - 1, 1);
      }
    }
  }
  
  // Return a very old date if parsing fails
  return new Date(1900, 0, 1);
}

const about = {
  path: "/",
  label: "About",
  title: person.name,
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
        Hi! Welcome to my journey! I'm half Brazilian and half Portuguese, born and raised in Portugal, where I developed a passion for physics and maths. When I'm not working, you'll usually find me playing sports. I'm pursuing a career in machine learning and AI, exploring how these tools can be most useful across financial markets, quantitative research, academia, and entrepreneurship. I'm always keen to connect with like-minded people who want to build great things. Feel free to reach out!
      </>
    ),
    finalStatement: (
      <>
        Currently focus on working towards making "Guilherme Grancho" stand for something.
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
        company: "Ernst & Young",
        timeframe: "Aug 2025 - Sep 2025",
        role: "Artificial Intelligence & Data Engineer",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            Designed and deployed RAG and GraphRAG pipelines powering agentic AI workflows for international clients.
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
            Engineered RAG pipelines for agentic AI products, exposed as MCP-compliant services consumed by multi-agent orchestrators, for international financial-services clients.
          </>,
        ],
        images: [],
      },
      {
        company: "Instituto Superior Técnico",
        timeframe: "Apr 2025 - Jul 2025",
        role: "Teacher Assistant",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            TA for the BSc in Electronic Engineering & Computer Engineering, teaching the module Physics II. Covered core topics in thermodynamics and quantum physics.
          </>,
        ],
        images: [],
      },
      {
        company: "Eco AI.ly",
        timeframe: "Jan 2025 - Jun 2025",
        role: "Machine Learning Engineer",
        location: "Lisbon, Portugal · Hybrid",
        achievements: [
          <>
            Built LSTM time-series models to forecast sustainability metrics (e.g., carbon intensity, renewable-share trends) at national/regional scales, with the goal of reducing the energy/carbon footprint when training large AI models.
          </>,
          <>
            Developed tools to help organisations optimise energy usage and monitor production, consumption, imports, and exports.
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
            Worked across quantum computation, networks, and sensing.
          </>,
          <>
            Conducted outreach with partner institutions (e.g., IST, Deloitte, PQI) to promote quantum technologies.
          </>,
        ],
        images: [],
      },
      {
        company: "Universidade Federal de Ouro Preto",
        timeframe: "Nov 2023 - Jul 2024",
        role: "Machine Learning Researcher",
        location: "Minas Gerais, Brazil · Remote",
        achievements: [
          <>
            720-hour research programme in ML & algorithms. First-author publication at a Brazilian AI conference: "Enhancing Multi-Objective Machine Learning with an Optimized Lexicographic Approach: Determining the Tolerance Threshold."
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
            Investigated innovative VR locomotion methods and built a virtual world explored via teleportation with an Oculus setup. Gained practical skills in VR navigation and interaction design.
          </>,
        ],
        images: [],
      },
      {
        company: "Instituto Superior Técnico",
        timeframe: "Nov 2023 - Feb 2024",
        role: "Teacher Assistant & Lab Coordinator",
        location: "Lisbon, Portugal · On-site",
        achievements: [
          <>
            Taught and coordinated lab classes for Electronics Engineering students. Topics included Thomson's experiment, RLC circuits, and geometric & wave optics.
          </>,
          <>
            End-of-course anonymous survey ranked me 9/9.
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
        ],
        images: [],
      },
      {
        company: "AeroTec",
        timeframe: "Sep 2023 - Dec 2023",
        role: "Frontend Web Developer",
        location: "Lisbon, Portugal · Hybrid",
        achievements: [
          <>
            Designed and implemented responsive web interfaces for aerospace engineering projects and digital services.
          </>,
          <>
            Built clean, maintainable codebases and collaborated in a remote cross-functional environment.
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
        ],
        images: [],
      },
      {
        company: "CBPF (Centro Brasileiro de Pesquisas Físicas)",
        timeframe: "Feb 2023",
        role: "Artificial Intelligence Researcher",
        location: "Rio de Janeiro, Brazil · On-site",
        achievements: [
          <>
            Two projects: CNN for ocean-floor mapping and LSTM light-curve classification to help identify dark matter.
          </>,
          <>
            Contributed model development and dataset creation/analysis.
          </>,
        ],
        images: [],
      },
    ].sort((a, b) => {
      // Sort by start date in descending order (most recent first)
      const dateA = parseStartDate(a.timeframe);
      const dateB = parseStartDate(b.timeframe);
      return dateB - dateA; // Descending order
    }),
  },
  keyProjects: {
    display: true, // set to false to hide this section
    title: "Key Projects",
    projects: [
      {
        title: "Prometheus",
        link: "https://prometheus-quant.streamlit.app/",
        technologies: "Python, TensorFlow, LSTM, Streamlit, Alpaca Markets API",
        timeframe: "Jan 2025 - Present",
        category: "Quantitative Finance",
        location: "Independent Research",
        description: <>Quantitative finance research platform implementing the Financial Torque Hypothesis (FTH) for short-term stock price prediction using LSTM neural networks. Features an interactive Streamlit dashboard for portfolio monitoring, strategy visualisation, and risk management. Includes comprehensive market data integration, trading strategy research modules (Simons, Sun Tzu), and live trading capabilities. The research achieved ~87% directional accuracy on a 3-hour horizon and demonstrated a 15% improvement in full-session consistency over regular-hours baselines.</>,
        github: "https://github.com/ada-ggf25/Prometheus",
      },
      {
        title: "GAIA",
        link: "https://eco-aily.streamlit.app/",
        technologies: "Python, LSTM, Time-Series Forecasting, REST API",
        timeframe: "Jan 2025 - Jun 2025",
        category: "Sustainability & AI",
        location: "Eco AI.ly",
        description: <>Sustainability platform featuring GAIA, an AI-powered system for forecasting sustainability metrics at national and regional scales. Built LSTM time-series models to predict carbon intensity and renewable-share trends, with the goal of reducing energy and carbon footprint when training large AI models. Developed tools to help organisations optimise energy usage and monitor production, consumption, imports, and exports.</>,
        github: "https://github.com/ada-ggf25/Eco-AI.ly",
      },
      {
        title: "LXthon",
        technologies: "AI, Medical Imaging, Computer Vision",
        timeframe: "Jun 2025",
        category: "Healthcare AI",
        location: "LXthon",
        description: <>Winning solution for the LXthon Hackathon, achieving 1st place overall and distinction for Best AI Medical Imaging Solution. Developed an AI-powered medical imaging system that demonstrates innovative applications of computer vision and machine learning in healthcare diagnostics.</>,
        github: "https://github.com/ada-ggf25/LXthon",
      },
      {
        title: "GraphRAG Workflow for AI Agents",
        technologies: "Python, GraphRAG, RAG, Agentic AI, MCP",
        timeframe: "Aug 2025 - Sep 2025",
        category: "AI & ML Engineering",
        location: "Ernst & Young",
        description: <>Advanced agentic AI workflow system implementing GraphRAG (Graph-based Retrieval-Augmented Generation) pipelines. Designed for enterprise applications with MCP-compliant services consumed by multi-agent orchestrators. Features sophisticated knowledge graph integration for enhanced context retrieval and improved response accuracy in complex query scenarios.</>,
        github: "https://github.com/ada-ggf25/AI-Agentic-Workflow-GraphRAG",
      },
      {
        title: "Ernst & Young AI Hackathon",
        technologies: "Python, LangChain, FastAPI, OpenAI, Natural Language Processing",
        timeframe: "May 2025",
        category: "AI Automation",
        location: "Ernst & Young",
        description: <>AI-powered calendar management agent developed for the EY AI Challenge 2025, securing 1st place in the AI for finance category. Automates calendar management tasks through natural language interactions, featuring automated scheduling, conflict resolution, and seamless integration with calendar services. Includes deadline management, reminder notifications, and intelligent time optimisation.</>,
        github: "https://github.com/ada-ggf25/Auto-Calendar-Agent",
      },
      {
        title: "The Atomic Nucleus - Discoveries of Modern Physics",
        link: "https://drive.google.com/file/d/1K4T-WWVHK1bp9sFzsJJQpI90CtKN77cQ/view?usp=drive_link",
        technologies: "Physics, Research, Academic Writing",
        timeframe: "Sep 2022 - Nov 2022",
        category: "Academic Research",
        location: "Superior Técnico",
        description: <>I completed this paper in the Discoveries of Modern Physics course. I am proud to share that I finished the course with a 20/20 grade, thanks to my paper on the discovery of the atomic nucleus and my poster presentation at the Congress Center of Instituto Superior Técnico.</>,
      },
      {
        title: "Hippocrates' Feather",
        technologies: "Python, Data Science, Machine Learning",
        timeframe: "Oct 2025",
        category: "Healthcare AI",
        location: "IBM",
        description: <>Project developed for the IBMZ Datathon, showcasing data analysis and machine learning capabilities on IBM Z platform datasets.</>,
        github: "https://github.com/peter-avg/IBMZ-Datathon",
      },
    ].sort((a, b) => {
      // Sort by end date (last worked on) in descending order (most recent first)
      const dateA = parseEndDate(a.timeframe);
      const dateB = parseEndDate(b.timeframe);
      return dateB - dateA; // Descending order
    }),
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "MSc, Applied Computational Science & Engineering",
        degree: "Imperial College London",
        timeframe: "Sep 2025 - Sep 2026",
        location: "London, UK",
        description: <>Applied computational science focused on numerical methods for large scale scientific and machine learning computing, with emphasis on numerical optimisation, scientific programming, and scalable, parallel computing.</>,
        gpa: "Distinction Expected",
        relevant_courses: ["Modern Programming Methods", "Computational Mathematics", "Applying Computational/Data Science", "Data Science & Machine Learning", "Deep Learning", "Modelling & Numerical Methods", "Advanced Programming", "Inversion & Optimisation", "Patterns for Parallel Programming"],
      },
      {
        name: "MSc, Computer Science & Engineering",
        degree: "Instituto Superior Técnico",
        timeframe: "Aug 2024 - Jul 2025",
        location: "Lisbon, Portugal",
        description: <>I studied core computer science, finance-oriented computing and mathematics, AI/ML, and multi-agent systems, with a focus on CS foundations, software design, data structures, and algorithm development. I then had the opportunity to pursue an MSc at Imperial College London, focused on ML and AI.</>,
        gpa: "Interrupted",
        relevant_courses: ["Data Analysis & Integration", "Introduction to Financial Mathematics", "Computational Methods in Finance", "Introduction to Quantum Information & Computing", "Software Security", "Communication Skills in Informatics & Computer Engineering I & II", "Deep Learning", "Planning, Learning & Intelligent Decision-Making", "Autonomous Agents & Multi-Agent Systems", "Business Integration"],
      },
      {
        name: "BSc, Engineering Physics & Technology",
        degree: "Instituto Superior Técnico",
        timeframe: "Sep 2022 - Jul 2024",
        location: "Lisbon, Portugal",
        description: <>Learned a lot about theoretical, experimental, and computational physics, and deepened my understanding of advanced theoretical and applied mathematics. Also developed new skills in engineering and electronics.</>,
        gpa: "Completed",
        relevant_courses: ["Differential & Integral Calculus I–III", "Linear Algebra", "Probability & Statistics", "Mathematical Techniques of Physics", "Earth & the Universe", "Discoveries of Modern Physics", "Electromagnetism", "Oscillations & Waves", "Relativity", "Thermodynamics", "Quantum Mechanics I", "Physics of Continuous Media", "Solid State Physics", "General Chemistry", "Circuit Theory & Electronics Fundamentals", "General Electronics", "Digital Systems", "Applied Optics", "Materials Science", "Materials in Engineering", "Applied Mechanics I", "Introduction to Experimental Physics Lab", "Experimental Physics Lab", "Advanced Experimental Physics Laboratory I & II", "Experimental Physics Lab in Research Units", "Integrated 1st-Cycle Project in Engineering Physics & Technology", "Programming Fundamentals", "Computational Physics", "Geometric Drawing & Modeling", "Introduction to Economics", "Global Challenges"],
      },
      {
        name: "BSc, Mechanical Engineering",
        degree: "Instituto Superior Técnico",
        timeframe: "Sep 2021 - Jul 2022",
        location: "Lisbon, Portugal",
        description: <>I developed skills in mathematics, materials engineering, and computational mechanics, focusing on mechanical systems and product design, before switching to Engineering Physics and Technology to pursue my core interests.</>,
        gpa: "Interrupted",
        relevant_courses: ["Linear Algebra", "Differential & Integral Calculus I–II", "Materials Science", "General Chemistry", "Materials in Engineering", "Applied Mechanics I", "Programming Fundamentals", "Geometric Drawing & Modeling", "Introduction to Economics", "Global Challenges"],
      },
      {
        name: "High-School Diploma, Sciences and Technologies",
        degree: "Colégio do Sagrado Coração de Maria",
        timeframe: "Sep 2018 - Jul 2021",
        location: "Lisbon, Portugal",
        description: <>I studied core science and technology subjects, focusing on maths, physics, programming and chemistry, to prepare for a career in engineering science.</>,
        gpa: "Completed",
        relevant_courses: ["Portuguese", "English", "Mathematics", "Biology & Geology", "Physics & Chemistry", "Physics", "Computer Applications", "Philosophy", "Physical Education", "Moral & Religious Education", "Civic Education", "Professional & Soft-Skills Development"],
      },
      {
        name: "English Language & Literature",
        degree: "British Council",
        timeframe: "Sep 2016 - Jun 2019",
        location: "Lisbon, Portugal",
        description: <>Developed English communication, grammar, and vocabulary skills for academic and professional contexts.</>,
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
        title: "SSRN Financial Economics Network e Journal Top Paper - 4-day Streak",
        description: <>My paper <em>The Financial Torque Hypothesis: Predicting Short-Term Stock Price Movements Using LSTM Neural Networks</em>, with Vasco Pereira, appeared on the SSRN Top Downloads list for 9–12 Aug 2025.</>,
        category: "",
        year: "Aug 2025",
        issuer: "SSRN — The Financial Economics Network",
        associated_with: "",
        artifacts: "Paper link; Honors media card/screenshot",
      },
      {
        title: "LXthon Hackathon — 1º Winner",
        description: <>Overall 1st place winner, distinction for Best AI Medical Imaging Solution.</>,
        category: "",
        year: "Jun 2025",
        issuer: "LXthon",
        associated_with: "",
        artifacts: "GitHub repository; winner certificate",
      },
      {
        title: "EY AI Challenge — Category 1º Place Winner",
        description: <>1st place winner in the category of AI for finance at EY's AI Challenge.</>,
        category: "",
        year: "May 2025",
        issuer: "Ernst & Young",
        associated_with: "",
        artifacts: "Winner certificate; GitHub repository",
      },
      {
        title: "Athens Mobility Grant",
        description: <>Funding to attend KU Leuven's Virtual Reality Development program.</>,
        category: "",
        year: "Mar 2024",
        issuer: "KU Leuven",
        associated_with: "",
        artifacts: "Grant documentation",
      },
      {
        title: "Diploma of Teaching Excellence",
        description: <>Teaching Physics III for the BSc in Electronics Engineering the anonymous student surveys rated me 9/9 overall teacher, the highest in the module that year.</>,
        category: "",
        year: "Feb 2024",
        issuer: "Instituto Superior Técnico",
        associated_with: "",
        artifacts: "IST badge/media; Teaching Excellence media card",
      },
      {
        title: "Brazilian Center of Physics Research — Mobility Grant",
        description: <>Funding to attend the Artificial Intelligence research module at the Brazilian Center of Physics Research.</>,
        category: "",
        year: "Feb 2023",
        issuer: "Brazilian Center of Physics Research",
        associated_with: "",
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
        issuer: "Ernst & Young",
        associated_with: "",
        artifacts: "Certificate",
      },
      {
        title: "Talent Bootcamp",
        description: <>Company presentations, corporate communications.</>,
        category: "Professional Development",
        year: "Mar 2025",
        issuer: "Magma Studio",
        associated_with: "",
        artifacts: "Certificate",
      },
      {
        title: "IELTS Academic — Overall 7.5",
        description: <>English communication, English Literature, Business English, academic English.</>,
        category: "Language Proficiency",
        year: "Nov 2024",
        issuer: "IELTS Official",
        associated_with: "",
        artifacts: "IELTS results report",
        credential_id: "",
      },
      {
        title: "Personal Finance MBA",
        description: <>Personal finance fundamentals.</>,
        category: "Finance Education",
        year: "Mar 2024",
        issuer: "Magma Studio",
        associated_with: "",
        artifacts: "Certificate",
      },
      {
        title: "Mini-school on Particle and Astroparticle Physics",
        description: <>Theoretical physics topics in particle and astroparticle physics.</>,
        category: "Physics Education",
        year: "Feb 2024",
        issuer: "Laboratory of Instrumentation and Experimental Particle Physics",
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
    title: "Key Achievements",
    accomplishments: [
      {
        title: "Multiple papers published in Machine Learning and AI",
        description: <>Examples include SSRN (Financial Torque Hypothesis, 2025), ENIAC conference (lexicographic multi-objective ML, 2024), and CBPF/arXiv (ocean-floor CNN, 2023).</>,
        category: "Research",
        year: "2023-2025",
      },
      {
        title: "Full-Stack Developer",
        description: <>Built production REST APIs and a responsive analytics/dashboard front-end (e.g., Eco AI.ly) to serve ML predictions and visualise sustainability metrics.</>,
        category: "Software Development",
        year: "2025",
      },
      {
        title: "Machine Learning Developer & Researcher",
        description: <>Worked across LSTM time-series forecasting, CNNs for imaging, lexicographic optimisation, and quantitative finance research.</>,
        category: "AI/ML",
        year: "2023-2025",
      },
      {
        title: "Achieved maximum teaching rating in anonymous student surveys",
        description: <>Physics III with Laboratory at Instituto Superior Técnico; ranked 9/9 overall (2024).</>,
        category: "",
        year: "2024",
      },
      {
        title: "MSc at Imperial College London",
        description: <>Enrolled for postgraduate studies (Imperial College London).</>,
        category: "Education",
        year: "2025-2026",
      },
      {
        title: "Co-founded a startup",
        description: <>Tap2Net (NFC product & creator platform).</>,
        category: "Entrepreneurship",
        year: "2023-2024",
      },
      {
        title: "BSc in Engineering Physics & Technology",
        description: <>Instituto Superior Técnico.</>,
        category: "Education",
        year: "2022-2024",
      },
      {
        title: "National award-winning athlete",
        description: <>Competed with the Portuguese Track & Field Federation (primary event: 200 m), with national-level recognition.</>,
        category: "Athletics",
        year: "2015-2018",
      },
      {
        title: "MSc in Applied Computational Science & Engineering",
        description: <>MSc in Applied Computational Science & Engineering from Imperial College London, focusing on numerical methods, scientific computing, and machine learning applications.</>,
        category: "Education",
        year: "2025-2026",
      },
      {
        title: "Papers published on Quantitative Research",
        description: <>Quant finance work (e.g., Financial Torque Hypothesis) with SSRN recognition.</>,
        category: "Research",
        year: "2025",
      },
    ],
  },
  hobbies: {
    display: true, // set to false to hide this section
    title: "Hobbies & Passions",
    description: <>My passions apart from work include entrepreneurship, chess, poker, martial arts, running, surfing, cinematography, literature, museums, travelling and cooking.</>,
    categories: []
  },
  values: {
    display: true, // set to false to hide this section
    title: "Values & Principles",
    description: <>Core values and principles that guide my work, relationships, and decision-making process in both professional and personal contexts. These include respect, inclusion, collaboration, integrity, excellence, environmental responsibility, and innovation.</>
  },
  publications: {
    display: true, // set to false to hide this section
    title: "Publications",
    papers: [
      {
        title: "The Financial Torque Hypothesis: Predicting Short-Term Stock Price Movements Using LSTM Neural Networks",
        authors: "Guilherme Grancho, Vasco Pereira",
        venue: "SSRN - The Financial Economics Network",
        date: "Jun 20, 2025",
        type: "Working Paper / Preprint",
        description: <>Introduces the Financial Torque Hypothesis that proposes that VWAP and trade count encapsulate short-term "market torque" useful for direction prediction. LSTM over intraday features, full-session vs. regular-hours comparisons, 4 feature-integration schemes (Standard, MinMax, Robust and non-normalized). ~87% directional accuracy on a 3-hour horizon using 21 months of unseen data, 15% improvement in full-session consistency over regular-hours baselines, demonstrates value of extended-hours data and microstructure indicators for robust strategies.</>,
        link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5288444",
        category: "Quantitative Finance",
        artifacts: "SSRN paper + Show publication link",
      },
      {
        title: "Enhancing Multi-Objective Machine Learning with an Optimized Lexicographic Approach: Determining the Tolerance Threshold",
        authors: "Guilherme Grancho, Talles Medeiros",
        venue: "ENIAC — 34th National Meeting on Artificial and Computational Intelligence",
        date: "Nov 21, 2024",
        type: "Peer-reviewed conference paper",
        description: <>ML-integrated lexicographic strategy, analysis of tolerance–outcome relations, cross-dataset validation. Automated tolerance selection improves computational efficiency and accuracy, emphasizes the importance of tolerance in lexicographic MOO.</>,
        link: "https://ouci.dntb.gov.ua/works/4LYayb3V/",
        category: "Machine Learning Optimization",
        artifacts: "Conference Show publication link",
      },
      {
        title: "Mapping the Layers of the Ocean Floor with a Convolutional Neural Network",
        authors: "Guilherme Grancho, Vitor Oliveira, João Astolfo",
        venue: "6th EAFExp — Brazilian Center for Research in Physics / arXiv",
        date: "Feb 28, 2023",
        type: "Research paper / Preprint",
        description: <>Apply CNNs to bathymetric imagery to classify/segment seabed layers. Supervised CNN pipeline, dataset curation and analysis, evaluation on geoscience targets and regions. Demonstrates CNN feasibility for ocean-floor mapping and yields actionable geophysical insights.</>,
        link: "https://arxiv.org/abs/2412.05329",
        category: "Deep Learning",
        artifacts: "arXiv + Show publication link",
      },
    ],
  },
  extracurricular: {
    display: true, // set to false to hide this section
    title: "Extracurricular Activities",
    activities: [
      {
        title: "Track and Field Athlete",
        organisation: "Portuguese Track and Field Federation",
        location: "Lisbon, Portugal · On-site",
        timeframe: "Sep 2015 - Sep 2018",
        description: <>Represented the Portuguese national federation of track and field in sprints (primary 200m) and other events (100m–2.5km, long jump). Developed discipline, resilience, and teamwork transferable to academic and professional contexts.</>,
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

export { person, social, newsletter, home, about };

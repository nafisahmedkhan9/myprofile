export const resumeData = {
  personal: {
    name: "Nafis Ahmed Khan",
    title: "Software Engineer",
    location: "Mumbai, Maharashtra 400043",
    phone: "+919769574878",
    email: "nafisahmedkhan9@gmail.com",
    linkedin: "https://www.linkedin.com/in/nafisahmedkhan9993",
    github: "https://github.com/nafisahmedkhan9"
  },
  
  summary: "Experienced with integrating complex systems and creating custom solutions tailored to client requirements. Utilizes collaborative approach to solve technical challenges and enhance project outcomes. Knowledge of client relationship management and technical troubleshooting.",
  
  skills: [
    "Conversational AI",
    "Chat bots", 
    "AI Agents",
    "NodeJS",
    "ReactJs",
    "Python",
    "Django",
    "FastAPI",
    "Full Stack Development",
    "Software Development",
    "API Development",
    "Web Development",
    "Requirements Gathering",
    "SQL/NoSQL Databases",
    "Bootstrap",
    "Material UI",
    "JavaScript",
    "Business Process Improvement"
  ],
  
  experience: [
    {
      id: 1,
      title: "Software Solutions Engineer-2",
      company: "Gupshup Technologies",
      location: "Mumbai",
      duration: "Nov 2021 - Current",
      responsibilities: [
        "Developed effective solutions through close collaboration with cross-functional teams",
        "Continuously expanded technical knowledge base through ongoing professional development opportunities",
        "Devised innovative strategies for problem-solving, resulting in faster resolution times",
        "Coordinated with customers and resolved all technical issues and prepared documents"
      ]
    },
    {
      id: 2,
      title: "Fullstack Developer",
      company: "Artdex and Cognoscis Technologies",
      location: "Mumbai",
      duration: "Dec 2017 - Nov 2021",
      responsibilities: [
        "Reduced page load times by optimizing front-end assets such as JavaScript files, stylesheets, and images",
        "Worked with back-end developers to design APIs",
        "Integrated third-party APIs to enhance functionality and improve overall user experience on web platforms",
        "Used NodeJS, ORM and SQL/No-SQL to develop and manage databases"
      ]
    },
    {
      id: 3,
      title: "Bot Developer",
      company: "Gupshup Technologies",
      location: "Mumbai", 
      duration: "Jul 2016 - Dec 2017",
      responsibilities: [
        "Reduced development time by creating reusable code libraries for future projects",
        "Created proofs of concept for innovative new solutions",
        "Estimated work hours and tracked progress using Scrum methodology"
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "Master of Science: Computer Applications",
      institution: "Indira Gandhi National Open University (IGNOU)",
      location: "Mumbai",
      duration: "Jan 2016 - Jun 2025",
      grade: "60%"
    },
    {
      id: 2,
      degree: "Bachelor of Science: Information Technology", 
      institution: "Sree Narayana Guru College",
      location: "Mumbai",
      duration: "Jul 2013 - Apr 2016",
      grade: "64%"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Smart Receipt Processor (Python - OCR + AI)",
      description: "A FastAPI-based application that uses OCR (Optical Character Recognition) and AI to extract structured data from receipt PDFs. The application combines Tesseract OCR with Ollama3 (Llama3) to intelligently parse receipt information including merchant names, total amounts, and purchase dates.",
      technologies: ["Python", "FastAPI", "Tesseract OCR", "Ollama3", "SQLite", "AI/ML"],
      features: [
        "PDF Upload & Validation",
        "OCR Text Extraction using Tesseract", 
        "AI-Powered Parsing using Ollama3 (Llama3)",
        "Structured Data Extraction",
        "Database Storage with SQLite",
        "RESTful API with FastAPI",
        "Robust Error Handling"
      ],
      github: "https://github.com/nafisahmedkhan9/smart-receipt-processor-OCR-AI"
    },
    {
      id: 2,
      title: "Chatbots Development (Node.js)",
      description: "Created multiple chatbots for various clients across channels like WhatsApp, Facebook Messenger, and web widgets using Gupshup platform and Node.js programming.",
      technologies: ["Node.js", "Gupshup Platform", "WhatsApp API", "Facebook Messenger"],
      clients: [
        "National Consumer Helpline (Indian Government)",
        "Kotak", "Swiggy", "Policybazaar", "Pristyn Care",
        "Welspun", "Zeiss", "Orchid Fertility (UAE)",
        "Kilimanjaro Restaurants (Nigeria)", "Brand Buddies",
        "Dell", "Akash Education", "Haier India",
        "Petromin (SAUDI)", "RIVA (SAUDI, UAE, KUWAIT)"
      ]
    },
    {
      id: 3,
      title: "Chatbots Support — Application Management (React.js + Node.js)",
      description: "Designed and implemented a web application to display all servers and their respective applications used by the team with advanced filtering options.",
      technologies: ["React.js", "Node.js", "Bootstrap"],
      features: [
        "Date range filter",
        "Server-based filter", 
        "Global filter for multiple fields",
        "Enhanced usability and flexibility",
        "Streamlined server and application monitoring"
      ]
    },
    {
      id: 4,
      title: "Master Data Management - Navi GI (React.js + Python Django)",
      description: "MDM acts as Master Data Provider for various other services with API interface to Agent portal and customer portal.",
      technologies: ["React.js", "Python", "Django", "PostgreSQL"],
      features: [
        "Maker-Checker workflow",
        "Individual and Bulk upload features",
        "Dynamic mapping of CSV files",
        "Synchronization with Intermediary via API and SFTP",
        "Centralized RBAC authorization service"
      ]
    }
  ]
};

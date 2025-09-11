export const resumeData = {
  personal: {
    name: "Nafis Ahmed Khan",
    title: "Software Engineer",
    location: "Mumbai, Maharashtra 400043",
    email: "nafisahmedkhan9@gmail.com",
    linkedin: "https://www.linkedin.com/in/nafisahmedkhan9993",
    github: "https://github.com/nafisahmedkhan9"
  },
  
  summary: "Experienced with integrating complex systems and creating custom solutions tailored to client requirements. Utilizes collaborative approach to solve technical challenges and enhance project outcomes. Knowledge of client relationship management and technical troubleshooting.",
  
  skills: [
    "🤖 Conversational AI",
    "💬 Chat bots", 
    "🧠 AI Agents",
    "🟢 NodeJS",
    "⚛️ ReactJs",
    "🐍 Python",
    "🎸 Django",
    "⚡ FastAPI",
    "🔗 Full Stack Development",
    "💻 Software Development",
    "🔌 API Development",
    "🌐 Web Development",
    "📋 Requirements Gathering",
    "🗄️ SQL/NoSQL Databases",
    "🅱️ Bootstrap",
    "🎨 Material UI",
    "🟨 JavaScript",
    "📈 Business Process Improvement"
  ],
  
  experience: [
    {
      id: 1,
      title: "💼 Software Solutions Engineer-2",
      company: "🏢 Gupshup Technologies",
      location: "📍 Mumbai",
      duration: "📅 Nov 2021 - Current",
      responsibilities: [
        "Developed effective solutions through close collaboration with cross-functional teams",
        "Continuously expanded technical knowledge base through ongoing professional development opportunities",
        "Devised innovative strategies for problem-solving, resulting in faster resolution times",
        "Coordinated with customers and resolved all technical issues and prepared documents"
      ]
    },
    {
      id: 2,
      title: "🔨 Fullstack Developer",
      company: "🏢 Artdex and Cognoscis Technologies",
      location: "📍 Mumbai",
      duration: "📅 Dec 2017 - Nov 2021",
      responsibilities: [
        "Reduced page load times by optimizing front-end assets such as JavaScript files, stylesheets, and images",
        "Worked with back-end developers to design APIs",
        "Integrated third-party APIs to enhance functionality and improve overall user experience on web platforms",
        "Used NodeJS, ORM and SQL/No-SQL to develop and manage databases"
      ]
    },
    {
      id: 3,
      title: "🤖 Bot Developer",
      company: "🏢 Gupshup Technologies",
      location: "📍 Mumbai", 
      duration: "📅 Jul 2016 - Dec 2017",
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
      degree: "🎓 Master of Science: Computer Applications",
      institution: "🏛️ Indira Gandhi National Open University (IGNOU)",
      location: "📍 Mumbai",
      duration: "📅 Jan 2016 - Jun 2025",
      grade: "📊 60%"
    },
    {
      id: 2,
      degree: "🎓 Bachelor of Science: Information Technology", 
      institution: "🏛️ Sree Narayana Guru College",
      location: "📍 Mumbai",
      duration: "📅 Jul 2013 - Apr 2016",
      grade: "📊 64%"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "🧾 Smart Receipt Processor (Python - OCR + AI)",
      description: "A FastAPI-based application that uses OCR (Optical Character Recognition) and AI to extract structured data from receipt PDFs. The application combines Tesseract OCR with Ollama3 (Llama3) to intelligently parse receipt information including merchant names, total amounts, and purchase dates.",
      technologies: ["Python", "FastAPI", "Tesseract OCR", "Ollama3", "SQLite"],
      features: [
        "PDF Upload & Validation: Upload receipt PDFs with comprehensive validation",
        "OCR Text Extraction: Extract text from PDF images using Tesseract",
        "AI-Powered Parsing: Use Ollama3 (Llama3) to intelligently extract receipt data",
        "Structured Data Extraction: Automatically extract Merchant/Store name, Total amount, Purchase date and time",
        "Database Storage: SQLite database for storing receipt data",
        "RESTful API: Complete REST API with FastAPI",
        "Error Handling: Robust error handling with fallback parsing",
        "Validation System: Multi-step validation for receipt quality"
      ],
      github: "https://github.com/nafisahmedkhan9/smart-receipt-processor-OCR-AI"
    },
    {
      id: 2,
      title: "🤖 Chatbots (Nodejs)",
      description: "Have created many chat bots for many clients for channels like whatsapp, facebook messenger, web widget using gupshup platform and nodejs programming.",
      technologies: ["Node.js", "Gupshup Platform", "WhatsApp", "Facebook Messenger"],
      clients: [
        "National Consumer Helpline (Indian Government)", "Kotak", "Swiggy", 
        "Policybazaar", "Pristyn care", "Welspun", "Zeiss", "Orchid Fertility (UAE)",
        "Kilimanjaro Restaurants (Nigeria)", "Brand Buddies", "Dell", "Akash Education",
        "Haier India", "Petromin (SAUDI)", "RIVA (SAUDI, UAE, KUWAIT)"
      ]
    },
    {
      id: 3,
      title: "📊 Chatbots Support — Application Management (Reactjs + Nodejs)",
      description: "Designed and implemented a web application to display all servers and their respective applications used by the team.",
      technologies: ["React.js", "Node.js"],
      features: [
        "Date range filter",
        "Server-based filter",
        "Global filter for multiple fields to enhance usability and flexibility",
        "Streamlined server and application monitoring for the team",
        "Improving efficiency and accessibility"
      ]
    },
    {
      id: 4,
      title: "📈 Chatbots Support Products",
      description: "In chatbots many clients ask for the analytics like how many times a flow is triggered, how many users are active etc. So i have created a analytics dashboard for clients and a common solution which can be used for many bots",
      technologies: ["Analytics", "Dashboard", "Multi-Bot Solution"],
      features: [
        "Flow trigger analytics",
        "Active user tracking",
        "Common solution for many bots",
        "Client-specific analytics dashboards"
      ]
    },
    {
      id: 5,
      title: "🔗 Link Tracking (Nodejs)",
      description: "This is an application where we are tracking clicks of links for any bots. We have created a webhook route to get the link click event. After getting event we are saving data to the database (MongoDB), Google Sheet",
      technologies: ["Node.js", "MongoDB", "Google Sheets", "Webhooks"],
      features: [
        "Link click tracking for bots",
        "Webhook route for click events",
        "Data storage in MongoDB",
        "Google Sheets integration"
      ]
    },
    {
      id: 6,
      title: "📊 Kotak Analytics Dashboard (Nodejs + Reactjs)",
      description: "This is used to show the analytics of kotak bots with many filters. Analytics like no. of users, how many users are in a particular state of conversation etc.",
      technologies: ["Node.js", "React.js", "Analytics"],
      features: [
        "User count analytics",
        "Conversation state tracking",
        "Multiple filter options",
        "Bot-specific analytics for Kotak"
      ]
    },
    {
      id: 7,
      title: "Common Analytics Dashboard (Nodejs + html)",
      description: "This is a common solution for many bots. This is used to show the data of bots in a table with many filters",
      technologies: ["Node.js", "HTML"],
      features: [
        "Common solution for many bots",
        "Tabular data display",
        "Multiple filtering options",
        "Reusable dashboard component"
      ]
    },
    {
      id: 8,
      title: "Sheet Data Uploader (Nodejs + html)",
      description: "This is a common solution for many bots. In this application user can upload bulk data using csv or xlsx file to the mysql database which can be used in chatbots to verify user",
      technologies: ["Node.js", "HTML", "MySQL", "CSV/XLSX"],
      features: [
        "Bulk data upload via CSV/XLSX files",
        "MySQL database integration",
        "User verification for chatbots",
        "Common solution for multiple bots"
      ]
    },
    {
      id: 9,
      title: "👁️ Zeiss (Nodejs + Reactjs)",
      description: "This is a web portal which is used to generate the eyecare prescription and that prescription send to the user's whatsapp number using the api request",
      technologies: ["Node.js", "React.js", "WhatsApp API"],
      features: [
        "Eyecare prescription generation",
        "WhatsApp API integration",
        "Automated prescription delivery",
        "Web portal interface"
      ]
    },
    {
      id: 10,
      title: "🏆 Sportzxchange - Fantasy Application like Dream11 (ReactJs + Python Django)",
      description: "My role is to provide admin panel in which whole application process is handled like creating match, contest, prize distribution etc. Have done some backend work like creating api which is required in admin panel",
      technologies: ["React.js", "Python", "Django", "Admin Panel"],
      features: [
        "Match creation and management",
        "Contest management system",
        "Prize distribution handling",
        "Complete admin panel functionality",
        "Backend API development for admin panel"
      ]
    },
    {
      id: 11,
      title: "Master Data Management - Navi GI (Reactjs + Python Django)",
      description: "MDM which is an ongoing project for the digital layer of Navi GI. In this engagement 4 resources were involved.",
      technologies: ["React.js", "Python", "Django", "API", "SFTP"],
      features: [
        "MDM to act as Master Data Provider for various other services via API interface to Agent portal, customer portal",
        "Maker-Checker workflow",
        "Individual and Bulk upload features for the master data",
        "Dynamic mapping of csv file to bulk upload the data, eliminates hardcoding of csv columns",
        "Synchronization of Master data with Intermediary via API and sftp",
        "A centralized RBAC authorization service"
      ]
    },
    {
      id: 12,
      title: "📜 Constitution of India (Python Django)",
      description: "A simple android application that renders the full constitution. As well as app is an aggregator of the polity and constitutional related articles taken from web, editorials of newspaper, magazines etc. The backend is developed in Python with django Framework and elastic search integration to conduct full text search.",
      technologies: ["Python", "Django", "Elasticsearch", "Android Backend"],
      features: [
        "Complete Constitution rendering",
        "Article aggregation from web sources",
        "Editorial content from newspapers and magazines",
        "Elasticsearch integration for full text search",
        "Android application backend development"
      ],
      responsibility: "Developed backend using Python/Django/Elasticsearch",
      link: "https://play.google.com/store/apps/details?id=com.cognoscis.constitution"
    },
    {
      id: 13,
      title: "💼 Sales ERP App (ReactJS + Python Django)",
      description: "A custom Sales ERP developed to digitize the sales process of the client's organization. The Frontend is developed in Reactjs and Bootstrap and Backend is developed in Python with Django Framework. Postgres is used as a Datastore.",
      technologies: ["React.js", "Bootstrap", "Python", "Django", "PostgreSQL"],
      responsibilities: [
        "Complete Backend and Frontend Development using Python/Django and ReactJS",
        "Role based access authorization",
        "Workflow implementation",
        "Reporting",
        "Development Order Management Flow"
      ]
    },
    {
      id: 14,
      title: "🏥 Theraputix (ReactJs + Python Django)",
      description: "A web application which facilitates the interaction between patients and dietitians. Patient/User can book appointments with the dieticians. An actual consultation takes place over a video call or messaging.",
      technologies: ["React.js", "Bootstrap", "Python", "Django", "Twilio", "HIPAA"],
      techStack: {
        frontend: "Reactjs and bootstrap",
        backend: "Python with Django Framework",
        thirdParty: "Twilio, HIPAA compliant Database service"
      },
      features: [
        "Patient-dietitian interaction platform",
        "Appointment booking system",
        "Video call consultations",
        "Messaging functionality"
      ]
    },
    {
      id: 15,
      title: "📺 Cloudwalker (ReactJS)",
      description: "A rich tv content management utility & android based dashboard interface for Tvs. Developed for one of our clients. Using this backend content manager at Cloudwalker services can create schedules for TV Programs/Movies to be shown on TV Dashboard. This app also includes a recommendation engine.",
      technologies: ["React.js", "SailsJs", "Node.js", "MongoDB", "MySQL"],
      techStack: {
        frontend: "ReactJS",
        backend: "SailsJs (a node js based framework), Nodejs",
        databases: "MongoDb and Mysql"
      },
      responsibilities: [
        "Backend part of the project",
        "Content Scheduling and Management Interface",
        "Development of Web Endpoint for Android TV client"
      ]
    },
    {
      id: 16,
      title: "🌪️ Ensemble Energy (ReactJs)",
      description: "As a part of the team I was involved in frontend development of an advanced, cloud based data analytics platform. The platform uses proprietary machine learning algorithms developed to predict possible failure in wind turbines and suggests corrective measures to be taken. The backend is built in python/django and uses PostgreSQL database. The front end is written in ReactJS using charting libraries",
      technologies: ["React.js", "Python", "Django", "PostgreSQL", "Machine Learning", "Chart Libraries"],
      features: [
        "Cloud based data analytics platform",
        "Proprietary machine learning algorithms",
        "Wind turbine failure prediction",
        "Corrective measures suggestions",
        "Advanced charting and visualization"
      ],
      link: "http://ensemble.energy"
    },
    {
      id: 17,
      title: "Learnosys (ReactJs)",
      description: "An online content reading and publishing market place. Implemented microservices architecture. Microservices are developed using python/django, nodejs.",
      technologies: ["React.js", "Python", "Django", "Node.js", "Microservices"],
      responsibility: "I was involved in developing the frontend ReactJS component for various microservices.",
      features: [
        "Content reading and publishing marketplace",
        "Microservices architecture implementation",
        "Frontend ReactJS components for various microservices"
      ]
    },
    {
      id: 18,
      title: "BrandFactory (Python Django)",
      description: "This is the Android application which is based on a brand factory to show all the offers and recent activities in the Stores. Quiz playing for getting more offers.",
      technologies: ["Python", "Django", "Android Backend"],
      responsibilities: [
        "Developed Backend requirements using python & Django",
        "Data Modelling",
        "Product catalog with various filters based on location, type of product, store"
      ]
    },
    {
      id: 19,
      title: "🎲 Housie (Nodejs + html)",
      description: "This is an online multiplayer game in which many players can play the housie by creating and joining the same group. For Frontend html is used and For server side Nodejs was used.",
      technologies: ["Node.js", "HTML"],
      features: [
        "Online multiplayer game functionality",
        "Group creation and joining system",
        "Real-time multiplayer synchronization",
        "Multiple player support"
      ]
    }
  ]
};

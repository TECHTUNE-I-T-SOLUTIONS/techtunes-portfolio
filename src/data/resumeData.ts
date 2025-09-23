// Resume data configuration - Update this file to modify resume content
export interface ResumeData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    website: string
    location: string
    linkedin?: string
    github?: string
  }
  summary: string
  experience: Array<{
    title: string
    company: string
    location: string
    period: string
    achievements: string[]
    technologies?: string[]
  }>
  skills: {
    technical: string[]
    frameworks: string[]
    databases: string[]
    tools: string[]
    cloud: string[]
    methodologies: string[]
  }
  services: Array<{
    title: string
    description: string
    technologies: string[]
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    url?: string
    highlights: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    location: string
    period: string
    details?: string[]
  }>
  certifications: Array<{
    name: string
    issuer: string
    date: string
    credentialId?: string
  }>
  achievements: Array<{
    title: string
    description: string
    date: string
  }>
}

// Main resume data - Edit this to update your resume
export const resumeData: ResumeData = {
  personalInfo: {
    name: "TECHTUNE I. T. SOLUTIONS",
    title: "Professional IT Solutions & Software Development",
    email: "techtune.it.solutions@gmail.com",
    phone: "+1 (555) 123-4567",
    website: "https://techtune-portfolio.vercel.app",
    location: "Remote & On-site Services Worldwide",
    linkedin: "https://www.linkedin.com/in/techtune-i-t-solutions/",
    github: "https://github.com/TECHTUNE-I-T-SOLUTIONS"
  },
  
  summary: "Dynamic IT solutions company with 5+ years of experience delivering innovative technology solutions. Specialized in custom software development, web applications, mobile solutions, and comprehensive IT consulting services. Committed to excellence, innovation, and client satisfaction with a proven track record of 100+ successful projects across various industries.",
  
  experience: [
    {
      title: "Founder & Lead IT Solutions Provider",
      company: "TECHTUNE I. T. SOLUTIONS",
      location: "Remote & Global",
      period: "2019 - Present",
      achievements: [
        "Successfully delivered 100+ projects across various industries including healthcare, e-commerce, finance, and education",
        "Maintained 98% client satisfaction rate with consistent on-time delivery and exceeding expectations",
        "Built and led a team of skilled developers and IT consultants specializing in modern technologies",
        "Developed comprehensive IT strategies that resulted in 40% average efficiency improvement for clients",
        "Implemented cloud migration solutions that reduced operational costs by 35% for enterprise clients",
        "Created scalable web applications serving 10,000+ active users with 99.9% uptime",
        "Established partnerships with major cloud providers and technology vendors"
      ],
      technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      title: "Senior Full-Stack Developer",
      company: "Previous Technology Ventures",
      location: "Various Locations",
      period: "2017 - 2019",
      achievements: [
        "Led development of enterprise-level applications using modern JavaScript frameworks",
        "Architected and implemented microservices solutions for high-traffic applications",
        "Mentored junior developers and established coding standards and best practices",
        "Optimized application performance resulting in 50% faster load times",
        "Collaborated with cross-functional teams to deliver complex projects on schedule"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "PostgreSQL", "Redis", "Git"]
    }
  ],
  
  skills: {
    technical: [
      "JavaScript/TypeScript", "Python", "Java", "C#", "PHP", "Go", "Rust",
      "HTML5", "CSS3", "SASS/SCSS", "Tailwind CSS", "Bootstrap"
    ],
    frameworks: [
      "React.js", "Next.js", "Vue.js", "Angular", "Node.js", "Express.js",
      "Django", "Flask", "FastAPI", "Spring Boot", ".NET Core", "Laravel"
    ],
    databases: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch",
      "DynamoDB", "Firebase", "Supabase", "PlanetScale"
    ],
    tools: [
      "Git", "Docker", "Kubernetes", "Jenkins", "GitHub Actions",
      "Webpack", "Vite", "ESLint", "Prettier", "Jest", "Cypress"
    ],
    cloud: [
      "AWS (EC2, S3, Lambda, RDS, CloudFront)", "Azure", "Google Cloud Platform",
      "Vercel", "Netlify", "Digital Ocean", "Heroku"
    ],
    methodologies: [
      "Agile/Scrum", "DevOps", "CI/CD", "Test-Driven Development",
      "Microservices Architecture", "RESTful APIs", "GraphQL"
    ]
  },
  
  services: [
    {
      title: "Custom Software Development",
      description: "End-to-end development of tailored software solutions using cutting-edge technologies",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS"]
    },
    {
      title: "Web Application Development",
      description: "Responsive, scalable web applications with modern UI/UX and optimal performance",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Supabase"]
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android with native performance",
      technologies: ["React Native", "Expo", "TypeScript", "Firebase", "App Store deployment"]
    },
    {
      title: "Cloud Solutions & Migration",
      description: "Cloud infrastructure setup, migration strategies, and optimization for scalability",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CloudFormation"]
    },
    {
      title: "IT Consulting & Strategy",
      description: "Technology assessment, digital transformation roadmaps, and strategic IT planning",
      technologies: ["Architecture Design", "Technology Stack Selection", "Performance Optimization"]
    }
  ],
  
  projects: [
    {
      name: "Enterprise E-commerce Platform",
      description: "Full-featured e-commerce solution with advanced inventory management and analytics",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS"],
      highlights: [
        "Handled 10,000+ concurrent users",
        "Integrated with multiple payment gateways",
        "Advanced analytics dashboard",
        "Mobile-responsive design"
      ]
    },
    {
      name: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with telemedicine capabilities",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Docker"],
      highlights: [
        "HIPAA compliance implementation",
        "Real-time video consultations",
        "Electronic health records",
        "Appointment scheduling system"
      ]
    },
    {
      name: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and reporting platform",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      highlights: [
        "Real-time data processing",
        "Interactive data visualizations",
        "Automated report generation",
        "Multi-tenant architecture"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Technology University",
      location: "Tech City, State",
      period: "2015 - 2019",
      details: [
        "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
        "Specialized in Software Engineering and Database Systems",
        "Senior Project: AI-powered recommendation system"
      ]
    },
    {
      degree: "Associate Degree in Information Technology",
      institution: "Community Tech College",
      location: "Local City, State",
      period: "2013 - 2015",
      details: [
        "Dean's List for 4 consecutive semesters",
        "Focus on Network Administration and Web Development"
      ]
    }
  ],
  
  certifications: [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAP-2023-001"
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "MS-AZ-304-2023"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PCA-2022-456"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-789"
    },
    {
      name: "PMI Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      date: "2021",
      credentialId: "PMP-2021-012"
    }
  ],
  
  achievements: [
    {
      title: "Technology Innovation Award",
      description: "Recognized for developing innovative cloud-based solutions that improved client efficiency by 40%",
      date: "2023"
    },
    {
      title: "Client Excellence Award",
      description: "Achieved 98% client satisfaction rate across 100+ completed projects",
      date: "2023"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to popular open-source projects with 500+ GitHub stars",
      date: "2020-Present"
    },
    {
      title: "Industry Speaker",
      description: "Featured speaker at tech conferences on modern web development and cloud architecture",
      date: "2022-Present"
    }
  ]
}

// Helper function to format phone numbers
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\+\d{1})(\d{3})(\d{3})(\d{4})/, '$1 ($2) $3-$4')
}

// Helper function to get years of experience
export const getYearsOfExperience = (): number => {
  const startYear = 2019
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}

// Export type for use in other files
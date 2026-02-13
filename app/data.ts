type Project = {
  name: string
  description: string
  link: string
  id: string
  tags?: string[]
  github?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Achievement = {
  title: string
  description: string
  date: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type TechStackCategory = {
  category: string
  technologies: string[]
}

export const PROJECTS: Project[] = [
  {
    name: 'Arcturus',
    description:
      'Built a Python network probing & client-discovery tool that detects Wi-Fi (including hidden SSIDs) and wired networks, identifies active clients via passive/active scanning, and visualizes network topology with graph-based mapping; summarizes device activity via DNS, HTTP host headers, and TLS SNI metadata. Added host stealth mode and network access-control features for security testing.',
    link: 'https://github.com/vaishcodescape/Arcturus',
    github: 'https://github.com/vaishcodescape/Arcturus',
    id: 'project1',
    tags: ['Python', 'Scapy', 'PyShark', 'python-nmap'],
  },
  {
    name: 'Zane',
    description:
      'Built a Go-based codebase analysis and optimization tool that scans large repositories to identify performance bottlenecks, redundant code paths, and structural inefficiencies. Designed a modular CLI with YAML-driven configuration and a gRPC-based service architecture for scalable analysis pipelines. Leveraged concurrency with goroutines and worker pools to process repositories in parallel, improving analysis speed and enabling actionable optimization insights for developers.',
    link: 'https://github.com/vaishcodescape/Zane',
    github: 'https://github.com/vaishcodescape/Zane',
    id: 'project2',
    tags: ['Go', 'gRPC', 'CLI', 'YAML'],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {

    company:'Datacurve.ai YC W24',
    title:'OSS Code Eval Team',
    start:'Jan 2026',
    end:'Present',
    link:'https://datacurve.ai',
    id:'work1',
  },
  {
    company: 'Superr.AI',
    title: 'Product Engineer Intern',
    start: 'Aug 2025',
    end: 'Oct 2025',
    link: 'https://superr.ai',
    id: 'work2',
  },
  {
    company: 'Kwezy HQ',
    title: 'Product Engineer Intern',
    start: 'Aug 2025',
    end: 'Oct 2025',
    link: 'https://kwezy.com',
    id: 'work3',
  },
  {
    company: 'Google Developer Group (GDG) On Campus, DAU',
    title: 'Core Team Member',
    start: 'Jul 2025',
    end: 'Present',
    link: 'https://gdg.community.dev',
    id: 'work4',
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'IIM Ahmedabad IMRC 2025 Conference Presentation',
    description:
      'Presented a research Machine Learning model on Perishable Agricultural Commodities focusing on AI-based optimization and sustainability',
    date: '2025',
    uid: 'achievement-1',
  },
  {
    title: 'IIM Ahmedabad CTDP 2025 Conference Presentation',
    description:
      'Presented "Dyslexia Detector App" at Conference on Technology for Disabled Persons, demonstrating assistive technology solutions',
    date: '2025',
    uid: 'achievement-2',
  },
  {
    title: 'Open Source Contributor & Mentor',
    description:
      'Led workshops and mentored 100+ students at GDG on Git, GitHub, DevOps, and MERN stack development, Contributed to Open Source competitions like Hacktoberfest and Google Summer of Code',
    date: '2025',
    uid: 'achievement-3',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/vaishcodescape',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/aditya-vaish-370494243',
  },
  {
    label: 'Phone',
    link: 'tel:+91 7248463142',
  },
]

export const TECH_STACK: TechStackCategory[] = [
  {
    category: 'Languages',
    technologies: ['C', 'C++', 'Python', 'Go', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'Django'],
  },
  {
    category: 'DevOps & Cloud',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'Git', 'GitHub', 'GitLab'],
  },
  {
    category:'A.I/M.L',
    technologies: ['Hugging Face Transformers','LangGraph','Langchain','LlamaIndex'],
  },
  {
    category: 'Databases',
    technologies: ['SQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    category: 'Core Concepts',
    technologies: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'System Design', 'Computer Networks'],
  },
]

export const EMAIL = 'adityavaish846@gmail.com'

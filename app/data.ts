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
    company: 'Google Developer Group (GDG) On Campus, DAU',
    title: 'Team Lead',
    start: 'Jul 2025',
    end: 'Present',
    link: 'https://gdg.community.dev',
    id: 'work2',
  },
  {
    company: 'Superr.AI',
    title: 'Product Engineer Intern',
    start: 'Apr 2025',
    end: 'Aug 2025',
    link: 'https://superr.ai',
    id: 'work3',
  },
  {
    company: 'Kwezy HQ',
    title: 'Product Engineer Intern',
    start: 'Aug 2025',
    end: 'Oct 2025',
    link: 'https://kwezy.com',
    id: 'work4',
  }
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Team Lead at GDG On Campus, DAU',
    description:
      'Led workshops and technical sessions for 100+ students at GDG On Campus, DAU',
    date: '2026',
    uid: 'achievement-1',
  },
  {
    title: 'IIM Ahmedabad IMRC 2025 Conference Presentation',
    description:
      'Presented a research Machine Learning model on Perishable Agricultural Commodities focusing on AI-based optimization and sustainability',
    date: '2025',
    uid: 'achievement-2',
  },
  {
    title: 'IIM Ahmedabad CTDP 2025 Conference Presentation',
    description:
      'Presented "Dyslexia Detector App" at Conference on Technology for Disabled Persons, demonstrating assistive technology solutions',
    date: '2025',
    uid: 'achievement-3',
  },
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
    link: 'tel:+91 9259022895',
  },
]

export const TECH_STACK: TechStackCategory[] = [
  {
    category: 'Languages',
    technologies: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
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
    technologies: ['Hugging Face Transformers','LangGraph','Langchain','LlamaIndex','Vector Embeddings', 'Vector Databases'],
  }
]

export const EMAIL = 'adityavaish846@gmail.com'

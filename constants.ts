import { 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Cpu, 
  Award, 
  FileText 
} from 'lucide-react';

export const PERSONAL_DETAILS = {
  name: "Deepu Kumar Sharma",
  role: "Mechanical Engineer",
  email: "deepuharma9216@gmail.com",
  phone: "+91-9918329423",
  location: "Lucknow UP. INDIA",
  linkedin: "https://www.linkedin.com/in/deepu-kr-sharma-37aa29251",
  dob: "05-Aug-1999",
  summary: "Detail-oriented professional with hands-on experience in Pre-Engineered Building (PEB) structure design as an Assistant Engineer. Experienced Business Development Executive with a focus on market research and strategic growth. Strong technical foundation combined with analytical and client engagement skills.",
  objective: "A highly motivated and detail-oriented Mechanical Engineering graduate seeking a challenging position in a dynamic organization where I can apply my technical skills, problem-solving abilities, and innovative thinking to contribute to engineering solutions and continuous improvement."
};

export const EXPERIENCE = [
  {
    company: "JAGDEV ENGINEERING WORKS Pvt. Ltd.",
    location: "Lucknow",
    role: "Design and Drafting Engineer",
    period: "July-2024 – Till Now",
    responsibilities: [
      "Design structural components of PEBs (columns, rafters, purlins, etc.) using relevant codes and standards.",
      "Prepare General Arrangement (GA) drawings, fabrication/shop drawings, and erection drawings.",
      "Optimize structural designs to minimize material cost without compromising strength.",
      "Develop Bill of Quantities (BOQ) and cutting lists based on approved designs.",
      "Coordinate with project managers and production teams for design implementation.",
      "Maintain proper documentation of design files, revisions, and approval records.",
      "Coordinate with procurement for material specifications and fabrication feasibility."
    ]
  },
  {
    company: "TUSCO Ltd.",
    location: "Lucknow",
    role: "Assistant Engineer",
    period: "Jan-2024 – June-2024",
    responsibilities: [
      "Assist senior engineers in planning and executing solar power generation projects.",
      "Help in drafting project plans, timelines, and resource allocation specific to solar installations.",
      "Monitor solar installation sites to ensure work aligns with project specifications and standards.",
      "Prepare, review, and manage technical documentation such as site layouts and performance reports (DPR).",
      "Analysis data related to solar energy performance for optimization.",
      "Stay updated on the latest solar technologies and government policies."
    ]
  },
  {
    company: "Golden Touch Investments",
    location: "Gurgaon",
    role: "Business Development Executive",
    period: "Aug-2023 – Nov-2023",
    responsibilities: [
      "Identify and research potential clients, markets, and business opportunities.",
      "Develop and maintain relationships with existing and prospective clients.",
      "Conduct market research to understand industry trends and customer needs.",
      "Prepare and deliver compelling presentations, proposals, and pitches.",
      "Negotiate contracts and agreements to secure profitable deals.",
      "Monitor and analysis sales data and revenue trends."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    specialization: "Mechanical Engineering",
    institute: "Goel Institute of Technology and Management, LKO",
    board: "Abdul Kalam Technical University, LKO",
    year: "2023",
    percentage: "75.9%"
  },
  {
    degree: "Intermediate",
    institute: "National Inter College, LKO",
    board: "UP Board",
    year: "2019",
    percentage: "58.2%"
  },
  {
    degree: "High School",
    institute: "Our Land HHS Ismail Ganj, LKO",
    board: "UP Board",
    year: "2017",
    percentage: "73%"
  }
];

export const PROJECTS = [
  {
    title: "3D Printer",
    description: "An advanced technology project creating 3D-dimensional objects. Used in aerospace, automotive, healthcare etc. The technology offers significant advantages including design flexibility, reduced material waste, and faster production times."
  },
  {
    title: "Auto Irrigation",
    description: "Automated method of managing water distribution for agricultural and landscaping purposes. Uses sensors to deliver the right amount of water to plants, improving efficiency."
  }
];

export const SKILLS = [
  "Auto CAD",
  "TEKLA Structure",
  "CATIA",
  "MS Word",
  "MS Excel",
  "MS PowerPoint",
  "Team Work",
  "Problem Solving",
  "Technical Communication"
];

export const CERTIFICATIONS = [
  {
    title: "CAD Software (AutoCad, CATIA)",
    org: "CAD DESK, LKO.",
    year: "2022",
    desc: "2D drafting and 3D modelling."
  },
  {
    title: "Plastics Processing",
    org: "CIPET, LKO.",
    year: "2022",
    desc: "Including injection molding, extrusion."
  },
  {
    title: "Aircraft Drone",
    org: "Predulive Labs, LKO.",
    year: "2021",
    desc: "Hand-on Experience of drone making and flying."
  }
];

export const SECTIONS = [
  { id: 'about', label: 'About', icon: FileText },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Cpu },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
];
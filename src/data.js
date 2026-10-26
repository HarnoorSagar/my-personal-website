// All site content lives here, so updating the site means editing this file only.
import kashio from './assets/kashio.jpg'
import catan from './assets/catan_board.jpg'
import bizzybee from './assets/bizzybee.jpg'
import shelfswap from './assets/shelfswap.jpg'

export const links = {
  email: 'harnoor.sagar@gmail.com',
  github: 'https://github.com/HarnoorSagar',
  linkedin: 'https://www.linkedin.com/in/harnoor-sagar/',
  resume: `${import.meta.env.BASE_URL}Harnoor_Sagar_Resume.pdf`,
}

export const typedWords = [
  'AI agents.',
  'full-stack apps.',
  'user-friendly UI/UX designs.',
  'tools that save teams time.',
  'hackathon projects.',
]

export const current = [
  { org: 'Geotab', role: 'Product Safety Analytics Intern' },
  { org: 'McMaster Formula Electric', role: 'Website Developer' },
  { org: 'McMaster University', role: 'B.Eng. Software Engineering (Co-op)' },
]

export const experience = [
  {
    dates: 'May 2026 – Present',
    role: 'Product Safety Analytics Intern',
    org: 'Geotab',
    place: 'Oakville, ON',
    tint: 'blue',
    summary: 'Analyzing fleet data to find the root cause of device issues, and building AI agents that automate work for internal teams.',
    points: [
      'Built a RAG pipeline that checks product docs against ISO/SAE standards and safety policy, catching 80%+ of compliance gaps with 90%+ citation accuracy and cutting report time 50%+.',
      'Started an internal portal that scaled fleet outreach to thousands of customer databases, replacing months of manual coordination.',
      "Co-built an agentic incident-response tool that cut data analysts' failed-pipeline investigations from 120 to 30 minutes.",
    ],
    stack: ['Python', 'Flask', 'LLM APIs', 'RAG', 'SQL', 'BigQuery', 'Apps Script', 'Airflow'],
  },
  {
    dates: 'June 2025 – Present',
    role: 'Community & Code Team Lead',
    org: 'Google Developer Groups McMaster',
    place: 'Hamilton, ON',
    tint: 'sage',
    summary: "Leading the team behind McMaster's student developer events, from technical workshops to career panels.",
    points: [
      'Led a 10+ member team to host 10+ technical workshops and professional development events for 500+ students.',
      'Engaged industry professionals as panelists for resume roasts and system design challenges.',
      "Co-designed event programming with fellow leads to build students' technical skills and career readiness.",
    ],
    stack: ['Leadership', 'Event Planning', 'Industry Outreach'],
  },
  {
    dates: 'Feb 2025 – Present',
    role: 'Website Developer',
    org: 'McMaster Formula Electric',
    place: 'Hamilton, ON',
    tint: 'rose',
    summary: "Building and maintaining the public website for McMaster's electric racing team.",
    points: [
      'Redesigned the website in React, HTML, and CSS, reducing page load times by 80% and improving responsiveness.',
      'Set up CI/CD on Netlify so every update builds and deploys automatically.',
      'Partnered with the graphics team to align UI/UX with branding, project showcases, and sponsor outreach.',
    ],
    stack: ['React', 'HTML', 'CSS', 'Netlify', 'CI/CD', 'UI/UX'],
  },
  {
    dates: 'May – Aug 2025',
    role: 'Engineering Instructor Intern',
    org: 'McMaster Engineering Venture Academy',
    place: 'Hamilton, ON',
    tint: 'lavender',
    summary: 'Guided 150+ students from first idea to working prototype, turning sensors, LEDs, and motors into their first real engineering builds.',
    points: [
      'Mentored 150+ students through the full engineering design cycle and core STEM principles.',
      'Built and demonstrated interactive systems with sensors, LEDs, and motor controls.',
      'Ran a cost-benefit analysis on project materials, cutting expenses by ~15% without lowering quality.',
    ],
    stack: ['Embedded Systems', 'Sensors', 'Teaching', 'Cost Analysis'],
  },
]

export const projects = [
  {
    name: 'Kashio',
    meta: 'ElleHacks 2026 · Wealthsimple category',
    text: 'A financial literacy game for kids, narrated in 6 languages with ElevenLabs so anyone can play.',
    stack: 'TypeScript · React · Node.js · ElevenLabs',
    href: 'https://devpost.com/software/kashio',
    img: kashio,
    alt: 'Three Kashio screens: avatar picker, title screen, and business shop',
  },
  {
    name: 'Catan Simulator',
    meta: 'Software Design · 2026',
    text: 'A Java game engine with AI agents, undo/redo, and CI quality gates through GitHub Actions and SonarQube.',
    stack: 'Java · JUnit · GitHub Actions · SonarQube',
    href: 'https://github.com/erjona505/2AA4-Assignment-1',
    img: catan,
    alt: 'Illustration of a hexagonal Catan-style game board',
  },
  {
    name: 'BizzyBee',
    meta: 'ElleHacks 2025',
    text: 'Swipe-to-connect for student small businesses, designed from UX research, with a Gemini AI chatbot.',
    stack: 'React · Python · Gemini · Figma',
    href: 'https://dorahacks.io/buidl/22869',
    img: bizzybee,
    alt: 'BizzyBee swipe screen with a business profile card and the Gemini AI chat',
  },
  {
    name: 'ShelfSwap',
    meta: 'DeltaHacks XI',
    text: 'A community book exchange with ISBN lookup through the Google Books API.',
    stack: 'Python · SQLite · JavaScript · Figma',
    href: 'https://devpost.com/software/shelfswap',
    img: shelfswap,
    alt: 'ShelfSwap landing screen on a phone with a stack of books',
  },
]

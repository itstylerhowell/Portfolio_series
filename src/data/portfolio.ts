/**
 * Central portfolio data — generated from Tyler Howell's LinkedIn profile.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the profile.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Tyler Howell',
  displayName: 'Tyler Howell',
  firstName: 'TYLER',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A HOWELL ORIGINAL',
  role: 'Entrepreneur',
  tagline: ['Entrepreneur', "Assistant Manager @ Culver's", 'AI Builder'],
  /** Small rating-style badge shown next to the hero meta line. */
  badge: 'NEW',
  intro:
    'An entrepreneur who believes in challenging the status quo — through curiosity, independent thinking and new ideas across business, technology and innovation, built for the greater common good.',
  location: 'Anoka, Minnesota',
  country: 'United States',
  email: 'itstylerhowell@gmail.com',
  phone: '(763) 501-7276',
  phoneHref: 'tel:+17635017276',
  resumePdf: '/assets/Tyler_Howell_Resume.pdf',
  resumeFileName: 'Tyler_Howell_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Tyler Howell',
  },
  interests: ['Entrepreneurship', 'Business & Innovation', 'Technology & AI', 'Bitcoin', 'Hospitality & Entertainment'],
};

export const education = [
  {
    school: 'Anoka High School',
    place: 'Anoka, MN',
    degree: 'High School Diploma',
    period: 'September 2020 – June 2024',
    score: 'Graduated early',
  },
];

export const experience = [
  {
    company: "Culver's Restaurants",
    role: '3rd Assistant Manager',
    place: 'Anoka, MN · On-site',
    period: 'September 2026 – Present',
    points: [
      "Promoted into restaurant management after nearly four years with Culver's, covering fast-food management, labor & sales tracking and team leadership.",
    ],
  },
  {
    company: "Culver's Restaurants",
    role: 'Team Trainer',
    place: 'Anoka, MN · On-site',
    period: 'June 2026 – September 2026',
    points: [
      'Trained employees across multiple positions through hands-on coaching and guided instruction.',
      'Ensured every trainee completed the required BBU training videos before starting each position.',
      'Administered certification assessments during scheduled shifts to verify each trainee was ready to work a position independently.',
    ],
  },
  {
    company: "Culver's Restaurants",
    role: 'Crew Member',
    place: 'Anoka, MN · On-site',
    period: 'January 2023 – June 2026',
    points: [
      'Ran full front-of-house operations — register, order running and guest engagement — with a consistent focus on customer satisfaction.',
      'Handled full back-of-house operations including food preparation, cooking and food-safety and temperature standards.',
      'Kept composure, speed and quality through high-pressure, high-volume rushes.',
      'Led morning prep and completed closing duties so the restaurant met cleanliness and safety standards.',
      'Cross-trained and certified in every back-of-house and front-of-house position.',
    ],
  },
];

export const volunteering = [
  {
    org: 'Special Olympics Minnesota',
    role: 'Member · College Board of Directors',
    period: 'September 2025 – May 2026',
    points: [],
  },
  {
    org: 'Special Olympics Minnesota',
    role: 'Event Volunteer',
    period: 'March 2025 – April 2026',
    points: [
      'Worked 1:1 with athletes with physical and/or cognitive disabilities.',
      'Coordinated with volunteers, staff and parents so every athlete and event ran smoothly.',
    ],
  },
  {
    org: 'Young Life',
    role: 'Adult Volunteer',
    period: 'March 2025 – April 2026',
    points: [
      'Provided 1:1 care and support for individuals with disabilities over multi-day programs.',
      'Supervised and supported high school and new volunteers in the program.',
    ],
  },
  {
    org: 'Freshwater Church',
    role: 'Special Needs Ministry Volunteer',
    period: 'March 2025 – April 2026',
    points: ['Provided 1:1 support for children with a disability during weekly services and handled safe drop-off and pick-up with parents.'],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Live site, when there is one. */
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'mail';
};

export const projects: Project[] = [
  {
    id: 'satoshi-mail',
    title: 'Satoshi Mail',
    year: '2026',
    genre: 'AI • Bitcoin • Interactive Archive',
    logline: 'An interactive archive of the public records, documents and digital trail of Satoshi Nakamoto, the pseudonymous creator of Bitcoin.',
    stack: ['Claude Code', 'Anthropic Claude', 'AI', 'Cloudflare Pages'],
    build: [
      "Inspired by Riley Walz and Luke Igel's Jmail — forked their open-source database as the foundation, then used Claude AI to build an interactive archive around Satoshi Nakamoto.",
      'Explores public records, historical documents and source materials, making the history and mystery of Bitcoin’s creator fun and engaging for Bitcoiners — and helping drive Bitcoin adoption.',
    ],
    features: [
      'Gmail-style inbox of Satoshi’s writings',
      'Satoshipedia — a built-in encyclopedia',
      'Public records & historical source materials',
      'Built with Claude Code',
      'Live in beta',
    ],
    metrics: [
      { value: 'Oct 2026', label: 'launched' },
      { value: 'Beta', label: 'in active development' },
      { value: '2', label: 'apps — inbox + Satoshipedia' },
      { value: '₿', label: 'built for Bitcoiners' },
    ],
    // The repository is private for now, so no GitHub button is shown.
    live: 'https://satoshimail.pages.dev',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'mail',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'career-climb',
    title: 'Crew to Manager',
    org: "Culver's Restaurants",
    detail: 'Crew Member → Team Trainer → 3rd Assistant Manager in under four years.',
    laurel: 'Promoted Twice',
  },
  {
    id: 'every-position',
    title: 'Every Position',
    org: "Culver's Restaurants",
    detail: 'Cross-trained and certified in every back-of-house and front-of-house position.',
    laurel: 'All-Rounder',
  },
  {
    id: 'board',
    title: 'Board of Directors',
    org: 'Special Olympics Minnesota',
    detail: 'Member of the College Board of Directors, September 2025 – May 2026.',
    laurel: 'Leadership',
  },
  {
    id: 'servsafe',
    title: 'ServSafe Manager',
    org: 'ServSafe',
    detail: 'Food Protection Manager Certification with a score of 86 — valid through 2031.',
    laurel: 'Certified',
  },
  {
    id: 'graduated-early',
    title: 'Graduated Early',
    org: 'Anoka High School',
    detail: 'Completed every academic requirement ahead of schedule.',
    laurel: 'Head Start',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'ServSafe', name: 'ServSafe Food Protection Manager Certification' },
  { issuer: 'StateFoodSafety', name: 'Food Allergens Essentials Course' },
  {
    issuer: 'LinkedIn',
    name: 'Foundations of Raising Capital',
    link: 'https://www.linkedin.com/learning/certificates/b305380ca6315464f8fdddbc953a3eac6631a169810dcc136edb62405892dd31/',
  },
  {
    issuer: 'LinkedIn',
    name: 'Entrepreneurship Foundations',
    link: 'https://www.linkedin.com/learning/certificates/bf893faf2208bd38cc2de0eca38a680ed3bb068c7f00a993d5f4ea0b0e371c91/',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'leadership',
    title: 'Leadership',
    subtitle: 'Running the shift',
    skills: [
      { name: 'Fast Food Management', mono: 'Fm', note: 'Now' },
      { name: 'Employee Training', mono: 'Et' },
      { name: 'New Hire Training', mono: 'Nh' },
      { name: 'Staff Training', mono: 'St' },
      { name: 'Labor & Sales Tracking', mono: 'Ls' },
      { name: 'Interpersonal Skills', mono: 'Ip' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Building',
    subtitle: 'How Satoshi Mail got made',
    skills: [
      { name: 'Claude Code', mono: 'Cc' },
      { name: 'Anthropic Claude', mono: 'Ac' },
      { name: 'Artificial Intelligence (AI)', mono: 'Ai' },
    ],
  },
  {
    id: 'business',
    title: 'Business',
    subtitle: 'The entrepreneur track',
    skills: [
      { name: 'Entrepreneurship', mono: 'En' },
      { name: 'Capital Raising', mono: 'Cr' },
    ],
  },
  {
    id: 'operations',
    title: 'Restaurant Ops',
    subtitle: 'Front & back of house',
    skills: [
      { name: 'Fast Food Operational Skills', mono: 'Fo' },
      { name: 'Food and Beverage Operations', mono: 'Fb' },
      { name: 'Food Preparation', mono: 'Fp' },
      { name: 'Food Service', mono: 'Fs' },
      { name: 'Customer Service', mono: 'Cs' },
      { name: 'Cash Handling', mono: 'Ch' },
    ],
  },
  {
    id: 'food-safety',
    title: 'Food Safety',
    subtitle: 'ServSafe certified',
    skills: [
      { name: 'Food Safety', mono: 'Sf' },
      { name: 'HACCP Regulations', mono: 'Hc' },
      { name: 'Cross-Contamination Prevention', mono: 'Cx' },
      { name: 'Safe Food Preparation', mono: 'Sp' },
      { name: 'Food Allergies', mono: 'Fa' },
      { name: 'Cleaning and Sanitizing', mono: 'Cl' },
      { name: 'Receiving and Storing Food', mono: 'Rs' },
      { name: 'Thawing, Cooking, Cooling & Reheating', mono: 'Tc' },
      { name: 'Good Personal Hygiene', mono: 'Gh' },
    ],
  },
  {
    id: 'community',
    title: 'Community',
    subtitle: 'From volunteering',
    skills: [
      { name: 'Disability Awareness', mono: 'Da' },
      { name: 'Childcare', mono: 'Cd' },
      { name: 'Sports Management', mono: 'Sm' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the roles, projects, certifications or volunteering on the profile.
 */
const servsafe = 'ServSafe Food Protection Manager';
export const skillEvidence: Record<string, string[]> = {
  'Fast Food Management': ['3rd Assistant Manager'],
  'Employee Training': ['Team Trainer'],
  'New Hire Training': ['Team Trainer'],
  'Staff Training': ['Team Trainer'],
  'Labor & Sales Tracking': ['3rd Assistant Manager'],
  'Interpersonal Skills': ["3 roles at Culver's", 'Anoka High School', 'Special Olympics'],
  'Claude Code': ['Satoshi Mail'],
  'Anthropic Claude': ['Satoshi Mail'],
  'Artificial Intelligence (AI)': ['Satoshi Mail'],
  Entrepreneurship: ['LinkedIn · Entrepreneurship Foundations'],
  'Capital Raising': ['LinkedIn · Foundations of Raising Capital'],
  'Fast Food Operational Skills': ['Crew Member'],
  'Food and Beverage Operations': ['Crew Member'],
  'Food Preparation': ['Crew Member'],
  'Food Service': ['Crew Member'],
  'Customer Service': ['Crew Member'],
  'Cash Handling': ['Crew Member'],
  'Food Safety': ['Crew Member', servsafe, 'Food Allergens Essentials'],
  'HACCP Regulations': [servsafe],
  'Cross-Contamination Prevention': [servsafe],
  'Safe Food Preparation': [servsafe],
  'Food Allergies': ['Food Allergens Essentials'],
  'Cleaning and Sanitizing': [servsafe],
  'Receiving and Storing Food': [servsafe],
  'Thawing, Cooking, Cooling & Reheating': [servsafe],
  'Good Personal Hygiene': [servsafe],
  'Disability Awareness': ['Special Olympics Minnesota', 'Freshwater Church', 'Young Life'],
  Childcare: ['Freshwater Church', 'Young Life'],
  'Sports Management': ['Special Olympics Minnesota'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2020 – 2024',
    synopsis: 'High school years at Anoka High School in Anoka, Minnesota.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description: 'Four years at Anoka High School, building the interpersonal skills that carry through every season since.',
        tags: ['Anoka High School', 'Interpersonal Skills'],
        runtime: 'Sep 2020 – Jun 2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Head Start',
        description: 'Graduated early by completing every academic requirement ahead of schedule.',
        tags: ['High School Diploma', 'Graduated Early'],
        runtime: 'Class of 2024',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'First Shift',
    period: '2023 – 2026',
    synopsis: "Three and a half years as a Crew Member at Culver's in Anoka — front of house, back of house and everything in between.",
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Crew Member',
        description: 'Register, order running and guest engagement out front; prep, cooking and food-safety standards in the back.',
        tags: ['Customer Service', 'Food Service', 'Cash Handling'],
        runtime: 'Jan 2023 – Jun 2026',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Rush',
        description: 'High-pressure, high-volume rushes handled with composure, speed and quality — plus morning prep and closing duties.',
        tags: ['Operations', 'Teamwork'],
        runtime: 'Every lunch rush',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'The All-Rounder',
        description: 'Cross-trained and certified in every back-of-house and front-of-house position.',
        tags: ['Every Position', 'Certified'],
        runtime: "Culver's",
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Giving Back',
    period: '2025 – 2026',
    synopsis: 'Volunteering with Special Olympics Minnesota, Young Life and Freshwater Church — working 1:1 with people with disabilities.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Volunteer',
        description: 'Event Volunteer with Special Olympics Minnesota, supporting athletes 1:1 and keeping events running smoothly.',
        tags: ['Special Olympics', 'Disability Awareness'],
        runtime: 'Mar 2025 – Apr 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Mentor',
        description: 'Adult Volunteer with Young Life and Special Needs Ministry Volunteer at Freshwater Church.',
        tags: ['Young Life', 'Freshwater Church', 'Childcare'],
        runtime: 'Mar 2025 – Apr 2026',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Board Member',
        description: 'Member of the Special Olympics Minnesota College Board of Directors.',
        tags: ['Leadership', 'Special Olympics'],
        runtime: 'Sep 2025 – May 2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Leveling Up',
    period: '2025 – 2026',
    synopsis: "Business foundations, food-safety credentials and two promotions at Culver's.",
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Founder Track',
        description: 'Completed Entrepreneurship Foundations and Foundations of Raising Capital on LinkedIn Learning.',
        tags: ['Entrepreneurship', 'Capital Raising'],
        runtime: 'Oct 2025',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The Trainer',
        description: 'Promoted to Team Trainer — coaching new hires across positions and running certification assessments.',
        tags: ['Employee Training', 'New Hire Training'],
        runtime: 'Jun – Sep 2026',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'The Certified',
        description: 'ServSafe Food Protection Manager (score 86) and StateFoodSafety Food Allergens Essentials.',
        tags: ['ServSafe', 'Food Safety'],
        runtime: 'Aug 2026',
        palette: jade,
      },
      {
        code: 'S04 E04',
        title: 'The Manager',
        description: "Promoted to 3rd Assistant Manager at Culver's Restaurants in Anoka.",
        tags: ['Fast Food Management', 'Labor & Sales Tracking'],
        runtime: 'Sep 2026 – Present',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'The Builder',
    period: '2026 – Now streaming',
    synopsis: 'From an idea to a live product — and the first business on the way.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Satoshi Mail',
        description: 'Built an interactive archive of Satoshi Nakamoto’s public records and writings with Claude Code.',
        tags: ['Claude Code', 'AI', 'Bitcoin'],
        runtime: 'Oct 2026',
        palette: amber,
      },
      {
        code: 'S05 E02',
        title: 'The Next Venture',
        description: 'Building a first business in the hospitality and entertainment space — and looking to connect with investors and entrepreneurs.',
        tags: ['Entrepreneurship', 'Hospitality', 'Entertainment'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: '3rd Assistant Manager', detail: "Culver's Restaurants • Anoka", palette: crimson },
  { label: 'The Original', title: 'Satoshi Mail', detail: 'A Satoshi Nakamoto archive built with Claude', palette: amber },
  { label: 'Career climb', title: 'Crew → Manager', detail: 'Two promotions in under four years', palette: ocean },
  { label: 'Built with', title: 'Claude Code', detail: 'Anthropic Claude • AI', palette: violet },
  { label: 'Board seat', title: 'Special Olympics MN', detail: 'College Board of Directors', palette: jade },
  { label: 'Food safety', title: 'ServSafe Manager', detail: 'Score 86 • valid through 2031', palette: amber },
  { label: 'Founder track', title: 'Entrepreneurship', detail: 'LinkedIn Learning certified', palette: crimson },
  { label: 'Giving back', title: '4 Volunteer Roles', detail: 'Special Olympics • Young Life • Freshwater', palette: ocean },
  { label: 'Head start', title: 'Graduated Early', detail: 'Anoka High School', palette: violet },
  { label: 'Up next', title: 'First Venture', detail: 'Hospitality & entertainment', palette: jade },
];

/** Hero section: the meta line and the floating chips next to the portrait. */
export const heroMeta = ['2023 – Present', "Culver's → Founder", `${projects.length} Original`, `${certifications.length} Certifications`];
export const heroChips = [
  { text: 'Crew → Manager', sub: "Culver's Restaurants" },
  { text: 'Satoshi Mail', sub: 'Live in beta' },
  { text: 'Claude Code · AI', sub: 'Builder stack' },
];

/** About section facts grid. */
export const aboutFacts = [
  { k: 'Now', v: '3rd Assistant Manager', s: "Culver's Restaurants · since Sep 2026" },
  { k: 'Building', v: 'Satoshi Mail', s: 'Satoshi Nakamoto archive · 2026' },
  { k: 'Education', v: education[0].school, s: `${education[0].degree} · ${education[0].score}` },
  { k: 'Based in', v: profile.location, s: profile.country },
];

/** Stat tiles beside the resume preview. */
export const resumeStats = [
  { v: String(experience.length), k: 'Roles' },
  { v: String(projects.length), k: projects.length === 1 ? 'Original' : 'Originals' },
  { v: String(certifications.length), k: 'Certs' },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The mindset',
    title: 'Challenge the status quo.',
    lines: ['Curiosity · independent thinking · new ideas', 'Across business, technology and innovation'],
  },
  {
    kicker: 'Career',
    title: 'Crew → Manager',
    lines: ["Culver's Restaurants · Anoka, Minnesota", 'Crew Member · Team Trainer · 3rd Assistant Manager'],
    chips: ['Leadership', 'Training', 'Operations'],
  },
  {
    kicker: 'The Original',
    title: 'Satoshi Mail',
    lines: ['An interactive archive of Satoshi Nakamoto', 'Built with Claude Code · live in beta'],
    chips: ['Claude Code', 'AI', 'Bitcoin'],
  },
  {
    kicker: 'Giving back',
    title: 'Four volunteer roles',
    lines: ['Special Olympics Minnesota · Young Life · Freshwater Church', 'College Board of Directors · Special Olympics MN'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: ['ServSafe Manager · Food Allergens Essentials', 'Entrepreneurship · Raising Capital'],
  },
  {
    kicker: 'Current mission',
    title: 'The first venture',
    lines: ['Building a business in hospitality & entertainment'],
  },
];

export type ProfileId = 'tyler' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'tyler',
    name: 'Tyler',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Investor',
    blurb: 'Projects & ventures first',
    color: '#46e3a8',
    order: ['originals', 'about', 'journey', 'skills', 'moments', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Who I am', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} ${projects.length === 1 ? 'Original' : 'Originals'} • ${projects[0].year}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the profile', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

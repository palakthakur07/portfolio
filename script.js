/* =====================
   DATA
===================== */
const EXP_ICONS = {
  education: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3.333 1.667 8.667 1.667 12 0v-5"/></svg>`,
  code: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  terminal: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`
};

const EXP = [
  {
    year: '2024 – Present',
    title: 'B.Tech EEE',
    icon: EXP_ICONS.education,
    org: 'Bhagwan Parshuram Institute of Technology, Delhi',
    desc: 'Pursuing Electrical & Electronics Engineering while developing a strong foundation in programming and software development.',
    tags: ['EEE', 'BPIT', '2024–2028']
  },
  {
    year: '2025 – Present',
    title: 'Software Development',
    icon: EXP_ICONS.code,
    org: 'Self Learning & Personal Projects',
    desc: 'Learning modern software development through hands-on projects, exploring web technologies, programming fundamentals, and application development.',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    year: '2025 – Present',
    title: 'Competitive Programming',
    icon: EXP_ICONS.terminal,
    org: 'LeetCode · CodeChef',
    desc: 'Solving Data Structures and Algorithms problems to strengthen problem-solving, analytical thinking, and coding skills.',
    tags: ['DSA', 'LeetCode', 'Problem Solving']
  },
  {
    year: '2026 – Present',
    title: 'Open Source & Projects',
    icon: EXP_ICONS.folder,
    org: 'Personal Portfolio & GitHub',
    desc: 'Building projects, maintaining code on GitHub, and continuously improving development practices through practical experience.',
    tags: ['Git', 'GitHub', 'Open Source']
  }
];

/*
  HOW LIVE PREVIEWS WORK
  -----------------------
  Add a "live" property with the deployed URL to any project below
  to replace its screenshot box with a real, interactive mini
  version of the website (loaded in an iframe).

  - If "live" is set        -> shows the working mini-site preview.
  - If "live" is left empty -> falls back to the click-to-upload
                                screenshot box, exactly as before.

  Example:
    live: 'https://yourusername.github.io/roadsos/'
*/
const PROJ = [
  {
    num: '01.',
    title: 'RoadSOS',
    desc: 'A road assistance platform helping users during emergencies with quick access to support services through a simple, responsive interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    gh: 'https://github.com/palakthakur07/RoadSOS',
    live: 'https://road-sos-taupe.vercel.app/'
  },
  {
    num: '02.',
    title: 'Deepfake Detection Platform',
    desc: 'A hackathon project focused on deepfake detection. Uses AI-based analysis to help identify potentially manipulated media with an accessible upload interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    gh: 'https://github.com/palakthakur07/CodeHer',
    live: 'https://deep-shieldx.vercel.app/'
  }
];

const SKILLS = [
  {
    label: 'Languages',
    chips: ['Python', 'JavaScript', 'C', 'C++', 'HTML', 'CSS']
  },
  {
    label: 'Frameworks & Libraries',
    chips: ['React', 'TensorFlow', 'Node.js', 'NumPy', 'Pandas', 'Scikit-learn']
  },
  {
    label: 'Tools & Platforms',
    chips: ['Git', 'GitHub', 'VS Code', 'Linux', 'Jupyter Notebook', 'Google Colab']
  },
  {
    label: 'Data & Databases',
    chips: ['MySQL', 'MongoDB', 'Firebase']
  },
  {
    label: 'Concepts',
    chips: ['Data Structures & Algorithms', 'OOP', 'REST APIs', 'Responsive Design', 'Problem Solving']
  }
];

const ACH = [
  {
    num: '01.',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.7 5.4L20 8.2l-4 4.1.9 5.7L12 15.8 7.1 18l.9-5.7-4-4.1 5.3-.8L12 2z"/></svg>`,
    title: 'Hackathon Participation',
    desc: 'Built and presented AI-focused projects in collaborative hackathon environments.'
  },
  {
    num: '02.',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: 'DSA & Coding Growth',
    desc: 'Strengthened problem-solving through consistent practice on competitive platforms.'
  },
  {
    num: '03.',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    title: 'Portfolio & Web Builds',
    desc: 'Created responsive, modern web projects showcasing technical skills and design thinking.'
  },
  {
    num: '04.',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2a9 9 0 1 0 7.5 14.5L21 19"/><path d="M11 6a5 5 0 1 1 0 10"/></svg>`,
    title: 'Most Innovative Project — Elite Her',
    desc: 'Won Most Innovative Project at the Elite Her Hackathon for building a Deepfake Detection Platform using the Sightengine API for AI-based analysis, with an accessible upload interface.'
  },
  {
    num: '05.',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>`,
    title: '3rd Position — BIZMARK',
    desc: 'Placed 3rd in BIZMARK, a marketing case-competition by DTU Consulting Group, applying structured, data-driven problem-solving under a tight time constraint.'
  }
];

const TECHS = [
  {
    name: 'Python',
    svg: `<svg width="22" height="22" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg"><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="#fff" fill-opacity=".9"/><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="#fff" fill-opacity=".6"/></svg>`
  },
  {
    name: 'JavaScript',
    svg: `<svg width="22" height="22" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="8" fill="none"/><path d="M212 28H44a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h168a16 16 0 0 0 16-16V44a16 16 0 0 0-16-16zm-60 144c0 23-13.6 33.7-33.5 33.7-17.8 0-28.2-9.2-33.5-20.3l18.2-11c3.5 6.2 6.6 11.5 14.2 11.5 7.2 0 11.8-2.8 11.8-13.9V112h22.8zm52-3.3c0 24-14.1 34.9-34.6 34.9-18.5 0-29.2-9.5-34.7-21l18.2-10.6c3.8 6.6 8.8 11.5 17.5 11.5 7.4 0 12-3.7 12-11 0-7.7-4.8-10.4-13-14.3l-4.5-1.9c-12.9-5.5-21.5-12.4-21.5-27 0-13.4 10.2-23.6 26.2-23.6 11.4 0 19.6 4 25.4 14.4L178 132c-3.1-5.5-6.4-7.7-11.6-7.7-5.3 0-8.6 3.3-8.6 7.7 0 5.4 3.3 7.6 11 11.1l4.5 1.9c15.2 6.5 23.8 13.2 23.8 28.7z" fill="#fff" fill-opacity=".85"/></svg>`
  },
  {
    name: 'React',
    svg: `<svg width="22" height="22" viewBox="0 0 256 228" xmlns="http://www.w3.org/2000/svg"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.596.54-3.233 1.057-4.902 1.557a179.7 179.7 0 0 0-12.053-26.348c4.12-6.283 7.638-12.658 10.525-18.935 14.655 5.83 24.646 14.305 24.646 22.324 0 8.73-11.38 18.081-28.216 21.402zM128 90.808c3.051 3.622 6.07 7.469 9.032 11.527-3.01-.14-6.05-.21-9.032-.21-2.98 0-5.947.07-8.89.21A163.924 163.924 0 0 1 128 90.808zm-21.02 67.882c-3.032.14-6.07.21-9.09.21-3.042 0-6.108-.07-9.172-.21a160.768 160.768 0 0 1-9.032-11.527A160.43 160.43 0 0 1 88.72 135.5c3.008.14 6.028.21 9.04.21 2.982 0 5.974-.07 8.938-.21a160.526 160.526 0 0 1 9.034 11.535 163.71 163.71 0 0 1-8.752 11.655zm-23.197-37.97c-3.907-5.9-7.397-11.876-10.4-17.836 3.023-5.96 6.535-11.936 10.42-17.836 3.022-.14 6.073-.21 9.173-.21 3.042 0 6.083.07 9.083.21a160.636 160.636 0 0 0-9.041 11.527 163.24 163.24 0 0 0-9.235 24.145zm13.074 27.75a163.5 163.5 0 0 0 9.083 11.527c-3 .14-6.041.21-9.083.21-3.1 0-6.15-.07-9.173-.21a160.596 160.596 0 0 1-10.42-17.836c3.003 5.96 6.513 11.936 10.4 17.836 3.022.14 6.072.21 9.193.21zM128 163.44c-2.963-3.622-5.98-7.469-9.032-11.527 3.01.14 6.05.21 9.032.21 2.982 0 5.947-.07 8.89-.21A163.924 163.924 0 0 1 128 163.44z" fill="#fff" fill-opacity=".85"/></svg>`
  },
  {
    name: 'TensorFlow',
    svg: `<svg width="22" height="22" viewBox="0 0 256 279" xmlns="http://www.w3.org/2000/svg"><path d="M256 209.216V69.248L128 0 0 69.248v139.968l128 69.76 128-69.76zM128 18.944l108.032 58.88v117.76L128 254.464 19.968 195.584V77.824L128 18.944z" fill="#fff" fill-opacity=".85"/><path d="M128 54.784L54.784 95.232v81.024L128 217.6l73.216-41.344V95.232L128 54.784zm0 18.944l54.272 30.656v61.12L128 196.16l-54.272-30.656v-61.12L128 73.728z" fill="#fff" fill-opacity=".5"/></svg>`
  },
  {
    name: 'Node.js',
    svg: `<svg width="22" height="22" viewBox="0 0 256 289" xmlns="http://www.w3.org/2000/svg"><path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.155.795-.53 1.855-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.086c1.06-.53 1.59-1.59 1.59-2.915V82.617c0-1.325-.53-2.385-1.59-2.915L128.795 18.88c-1.06-.53-2.385-.53-3.18 0L19.874 79.702c-1.06.53-1.59 1.855-1.59 2.915v122.172c0 1.06.53 2.385 1.59 2.915l28.887 16.696c15.635 7.95 25.44-1.325 25.44-10.6V94.012c0-1.59 1.325-3.18 3.18-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v119.793c0 20.936-11.395 33.126-31.272 33.126-6.096 0-10.865 0-24.38-6.626l-27.827-15.9C4.24 220.694 0 213.274 0 205.324V83.152c0-7.95 4.24-15.37 11.13-19.345L116.87 3.72c6.625-3.975 15.635-3.975 22.26 0L244.87 63.807C251.76 67.782 256 75.202 256 83.152v122.172c0 7.95-4.24 15.37-11.13 19.345l-105.74 61.086c-3.445 1.59-7.155 2.65-11.13 2.65v.06z" fill="#fff" fill-opacity=".85"/><path d="M161.183 203.47c-46.286 0-55.83-21.2-55.83-39.02 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.915 1.06 2.915 2.65 2.12 14.045 8.215 20.936 35.955 20.936 22.26 0 31.537-5.035 31.537-16.96 0-6.89-2.65-11.925-37.28-15.37-29.152-2.915-47.082-9.275-47.082-32.596 0-21.466 18.08-34.186 48.407-34.186 34.09 0 50.786 11.66 52.906 37.015.265 1.855-.795 3.445-2.65 3.445h-13.78c-1.325 0-2.65-1.06-2.915-2.385-3.18-14.575-11.395-19.345-34.09-19.345-25.175 0-28.09 8.745-28.09 15.37 0 7.95 3.445 10.335 36.22 14.84 32.51 4.505 48.14 10.865 48.14 33.126-.265 23.32-19.345 36.57-51.327 36.57v-.93z" fill="#fff" fill-opacity=".5"/></svg>`
  },
  {
    name: 'Git',
    svg: `<svg width="22" height="22" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M251.17 116.5L139.5 4.83a16.49 16.49 0 0 0-23.32 0l-23.21 23.2 29.44 29.44a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.6 19.6 0 1 1-11.75 11.06L137.3 95.3v69.63a19.61 19.61 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.64-25.72L81.19 39.16 4.83 115.5a16.49 16.49 0 0 0 0 23.33l111.67 111.67a16.49 16.49 0 0 0 23.32 0l111.35-111.35a16.49 16.49 0 0 0 0-23.65z" fill="#fff" fill-opacity=".85"/></svg>`
  },
  {
    name: 'C++',
    svg: `<svg width="22" height="22" viewBox="0 0 256 288" xmlns="http://www.w3.org/2000/svg"><path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.585 14.842 32.673 54.202 10.37 67.036 3.39 71.22.005 77.476 0 85.91c-.023 39.369 0 78.738 0 118.107 0 4.94 1.076 9.28 3.237 12.979 2.207 3.768 5.501 6.845 9.991 9.31 22.303 12.834 90.216 52.194 103.271 59.765 9.055 5.299 17.936 5.107 26.962-.243 34.002-19.605 68.009-39.178 102.014-58.814 4.49-2.465 7.784-5.543 9.991-9.31 2.159-3.698 3.237-8.04 3.237-12.979 0 0 0-78.738-.134-118.105z" fill="#fff" fill-opacity=".1"/><path d="M128.182 143.509L4.932 214.877c2.207 3.768 5.501 6.845 9.991 9.31 22.303 12.834 90.216 52.194 103.271 59.765 9.055 5.299 17.936 5.107 26.962-.243 34.002-19.605 68.009-39.178 102.014-58.814 4.49-2.465 7.784-5.543 9.991-9.31L128.182 143.509z" fill="#fff" fill-opacity=".1"/><path d="M91.101 164.5c9.76 16.894 27.888 28.275 48.682 28.275 20.796 0 38.925-11.381 48.685-28.275H91.101zm97.367-41c-9.76-16.894-27.889-28.275-48.685-28.275-20.794 0-38.922 11.381-48.682 28.275h97.367z" fill="#fff" fill-opacity=".85"/><path d="M192.5 143.5h8v-8h6v8h8v6h-8v8h-6v-8h-8v-6zm-24 0h8v-8h6v8h8v6h-8v8h-6v-8h-8v-6z" fill="#fff" fill-opacity=".85"/></svg>`
  },
  {
    name: 'HTML5',
    svg: `<svg width="22" height="22" viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg"><path d="M255.555 70.766L226.795 388.666L127.752 416L29.16 388.691L.444 70.766H255.555Z" fill="#fff" fill-opacity=".15"/><path d="M128 394.467L209.167 371.24L233.978 100.256H128V394.467Z" fill="#fff" fill-opacity=".4"/><path d="M128 220.123H91.419L88.761 191.421H128V163.413H57.7L58.343 170.605L65.151 247.836H128V220.123Z" fill="#fff" fill-opacity=".85"/><path d="M128 304.105L127.843 304.15L94.89 295.246L92.76 271.154H64.647L68.853 318.489L127.831 334.932L128 334.884V304.105Z" fill="#fff" fill-opacity=".85"/><path d="M128 220.123V247.836H161.814L158.811 279.165L128 287.89V317.045L187.129 300.526L187.57 295.688L193.861 227.171L194.501 220.123H128Z" fill="#fff" fill-opacity=".6"/><path d="M128 163.413V191.421H196.049L198.278 167.029L198.921 163.413H128Z" fill="#fff" fill-opacity=".6"/></svg>`
  },
  {
    name: 'MySQL',
    svg: `<svg width="22" height="22" viewBox="0 0 256 259" xmlns="http://www.w3.org/2000/svg"><path d="M235.772 194.017c-19.89-.477-35.241 1.354-48.199 6.964-3.697 1.572-9.608 1.613-10.204 6.246.993 1.077 1.15 2.67 1.99 3.985 1.511 2.51 4.101 5.893 6.532 7.68 2.671 1.99 5.421 4.102 8.252 5.813 5.023 3.072 10.644 4.86 15.508 7.93 2.87 1.79 5.7 4.062 8.531 5.972 1.392.954 2.31 2.51 4.1 3.15v-.318c-.956-1.194-1.193-2.908-2.15-4.222-1.351-1.352-2.67-2.547-4.022-3.9-3.896-5.222-8.651-9.847-13.831-13.67-4.18-2.99-13.47-6.886-15.22-11.746l-.279-.278c2.987-.318 6.45-1.432 9.247-2.19 4.54-1.233 8.69-1.035 13.35-2.268 2.108-.597 4.26-1.194 6.372-1.87v-1.194c-2.39-2.43-4.1-5.699-6.651-7.93-6.768-5.778-14.15-11.518-21.833-16.34-4.18-2.63-9.568-4.34-13.99-6.611-.72-.398-1.432-1.313-1.63-2.03-.878-2.628-1.073-5.42-1.83-8.094-1.633-5.778-2.386-12.108-4.38-17.729-1.035-2.87-2.709-5.7-4.46-8.094-.996-1.353-2.629-1.99-3.704-3.15-.636.517-1.432.878-1.83 1.552-.957 1.752-1.83 3.663-2.467 5.575-.995 2.87-1.03 5.82-1.75 8.769-.477 1.83-.278 4.1-.477 6.09-.398 4.062-.875 8.163-1.55 12.147-.675 3.98-1.79 7.96-2.948 11.82-.636 1.99-2.028 3.98-3.068 5.81-.597.956-1.75 1.75-2.028 2.748v.24c2.07.596 4.22 1.35 6.25 2.03 3.264 1.03 6.292 1.035 9.47 2.23 5.62 2.11 11.278 5.062 16.3 8.375 2.548 1.672 5.099 3.463 7.45 5.412 1.313 1.075 3.384 1.672 4.14 3.145-4.617 0-9.847-.756-14.31-2.27-2.87-.995-5.739-2.07-8.69-2.825-1.312-.358-2.67-.716-4.022-.836v.438c.756.835 1.632 1.512 2.19 2.468.716 1.11 1.115 2.468 1.83 3.781 1.073 2.15 2.59 4.065 4.022 5.972 1.27 1.83 2.71 3.662 4.34 5.142 3.424 3.264 7.644 5.18 11.18 7.96l4.937 3.344c.836.636 1.91.756 2.388 1.75-2.15 2.39-3.025 5.34-4.699 7.96-3.504 5.7-7.167 11.042-10.99 15.987-1.153 1.47-5.06 2.27-5.06 4.34-.083 1.79 1.83 2.188 2.948 3.145.238.198.477.198.676.358.238.24.477.28.676.517.957.676 1.99 1.59 3.025 2.227 3.105 1.913 6.01 3.9 9.25 5.14 1.99.795 4.06.994 5.97 1.79 1.55.636 3.025 1.83 4.58 2.389h1.153c.756-1.075.517-2.508.316-3.742-.158-1.194-.676-2.23-.914-3.424-1.154-4.38-1.154-8.81-2.389-13.15-.597-2.07-1.99-4.062-3.064-5.97 1.99-.437 3.93-1.272 5.818-1.83 3.424-1.075 6.768-1.273 10.05-2.389l9.23-3.34c1.432-.517 3.464-.836 4.378-1.99-2.19-2.786-5.576-4.259-7.958-6.572zm-114.14-108.297c-2.39-.08-4.3.038-6.253.636-1.551.478-3.144 1.03-4.617 1.672-.836.398-2.11.597-2.827 1.153.677 1.153 1.353 2.268 2.07 3.543.557.956 1.194 1.83 1.832 2.547.597.676 1.553 1.113 2.07 1.87.836.676 2.15.716 3.146 1.113v.24c.517.955 1.23 1.39 1.75 2.348.716 1.35 1.472 2.627 2.23 3.98 1.035 1.87 1.93 4.302 3.304 5.814.398.517 1.115 1.033 1.87 1.033.636 0 1.35-.477 1.869-1.07.796-.912 1.672-2.388 2.07-3.622.638-1.75.438-3.343.957-5.22.357-1.312.596-2.625.915-3.898v-.478c-1.115-.12-1.831-.836-2.388-1.672-.677-.915-1.551-1.631-2.31-2.388-.398-.438-.756-.915-1.115-1.313-.397-.437-.556-.875-.915-1.312-.636-.715-1.35-.596-2.07-.717zm35.637-37.306c-3.463.596-6.77 1.512-9.45 3.264-.278.199-.517.398-.796.438-.278.04-.636.04-.836.238-.994 1.153-1.47 2.309-2.07 3.543-.595 1.273-1.312 2.508-1.83 3.74-.278.637-.356 1.552-.556 2.27-.676 2.07-1.59 4.26-2.07 6.37-.597 2.626-.676 5.177-.956 7.922-.08.596 0 1.79.278 2.15.438.52.994.798 1.512.997.796.318 1.75.477 2.588.477.798 0 1.791-.12 2.55-.477.715-.318 1.55-.76 2.069-1.358.398-.517.676-1.032.995-1.55l1.352-4.417c.556-2.15 1.312-4.14 2.07-6.25.796-2.149.716-4.617 2.07-6.13l.238.24c-.238 2.15-.477 4.3-.755 6.53-.477 3.184-1.075 6.17-1.471 9.39-.24 1.83-.677 3.622-.956 5.42-.12.557-.438 1.43.12 1.83.516.358 1.31.04 1.75-.277l.994-.757c1.033-.875 2.31-1.75 3.104-2.903.557-.716 1.114-1.512 1.512-2.308.716-1.63 1.035-3.264 1.592-4.895.876-2.428 1.91-4.696 2.787-7.166.477-1.35.835-2.787 1.232-4.18.596-2.149.875-4.417 1.152-6.648.597-4.815.477-9.63.437-14.588 0-.437-.597-1.432-1.35-1.83-.835-.44-1.352-.24-2.068-.2z" fill="#fff" fill-opacity=".85"/></svg>`
  },
  {
    name: 'GitHub',
    svg: `<svg width="22" height="22" viewBox="0 0 256 250" xmlns="http://www.w3.org/2000/svg"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.779 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.03-43.124-15.03-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.852.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0z" fill="#fff" fill-opacity=".85"/></svg>`
  },
  {
    name: 'VSCode',
    svg: `<svg width="22" height="22" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M180.988 0l-90.74 83.206L36.01 43.24 0 64.027l67.116 64L0 192.01l36.01 20.773 54.238-39.955L180.988 256 256 219.886V36.114L180.988 0zm.012 72.918v110.164l-55.43-55.082 55.43-55.082z" fill="#fff" fill-opacity=".85"/></svg>`
  }
];

/* =====================
   MARQUEE
===================== */
function buildMarquee() {
  const track = document.getElementById('marquee');
  if (!track) return;
  const doubled = [...TECHS, ...TECHS];
  doubled.forEach(t => {
    const el = document.createElement('div');
    el.className = 'marquee-item';
    el.innerHTML = `${t.svg}<span class="marquee-name">${t.name}</span>`;
    track.appendChild(el);
  });
}

/* =====================
   EXPERIENCE
===================== */
function buildExperience() {
  const nav = document.getElementById('expNav');
  const cards = document.getElementById('expCards');
  if (!nav || !cards) return;

  EXP.forEach((e, i) => {
    // Nav item
    const ni = document.createElement('div');
    ni.className = 'nav-item' + (i === 0 ? ' active' : '');
    ni.innerHTML = `
      <div class="nav-dot"></div>
      <div>
        <div class="nav-year">${e.year}</div>
        <div class="nav-title">${e.title}</div>
      </div>`;
    ni.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.exp-card').forEach(x => x.classList.remove('active'));
      ni.classList.add('active');
      const card = document.querySelectorAll('.exp-card')[i];
      card.classList.add('active');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    nav.appendChild(ni);

    // Card
    const card = document.createElement('div');
    card.className = 'exp-card reveal-up' + (i === 0 ? ' active' : '');
    card.style.setProperty('--d', `${i * 0.08}s`);
    card.innerHTML = `
      <div class="date-pill">${e.year}</div>
      <div class="card-title-row">
        <span class="card-icon">${e.icon}</span>
        <span class="card-title">${e.title}</span>
      </div>
      <div class="card-org">${e.org}</div>
      <div class="card-desc">${e.desc}</div>
      <div class="card-tags">${e.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>`;
    cards.appendChild(card);
  });
}

/* =====================
   PROJECTS
===================== */
function buildProjects() {
  const list = document.getElementById('projList');
  if (!list) return;

  PROJ.forEach((p, i) => {
    const hasLive = !!(p.live && p.live.trim());
    const card = document.createElement('div');
    card.className = 'proj-card reveal-up';
    card.style.setProperty('--d', `${i * 0.1}s`);

    const previewHTML = hasLive
      ? `
        <div class="proj-live-wrap" id="livewrap${i}">
          <div class="mini-browser">
            <div class="mini-browser-bar">
              <span class="mini-dot mini-dot-r"></span>
              <span class="mini-dot mini-dot-y"></span>
              <span class="mini-dot mini-dot-g"></span>
              <span class="mini-browser-url">${formatUrl(p.live)}</span>
            </div>
            <div class="mini-browser-screen">
              <iframe
                src="${p.live}"
                loading="lazy"
                title="${p.title} live preview"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                referrerpolicy="no-referrer">
              </iframe>
              <div class="mini-live-overlay" id="liveoverlay${i}">
                <span class="mini-live-pill">
                  <span class="mini-live-dot"></span> Live preview — click to interact
                </span>
              </div>
            </div>
          </div>
        </div>`
      : `
        <div class="proj-img-wrap" id="imgwrap${i}">
          <input type="file" accept="image/*" id="imgfile${i}" style="display:none">
          <img id="imgprev${i}" alt="${p.title} screenshot">
          <div class="proj-img-placeholder" id="imgph${i}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            <span id="imgtext${i}">Click to add<br>project screenshot</span>
          </div>
          <button class="proj-upload-btn" id="projbtn${i}" type="button">+</button>
        </div>`;

    card.innerHTML = `
      ${previewHTML}
      <div class="proj-content">
        <div class="proj-num">${p.num}</div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
        <div class="proj-footer">
          <a href="${p.gh}" target="_blank" class="proj-gh">↗ View on GitHub</a>
          <span class="proj-arrow">↗</span>
        </div>
      </div>`;
    list.appendChild(card);

    if (hasLive) {
      // Click the overlay once to "unlock" scroll/click inside the iframe.
      const overlay = document.getElementById(`liveoverlay${i}`);
      const wrap = document.getElementById(`livewrap${i}`);
      overlay?.addEventListener('click', () => {
        wrap.classList.add('is-active');
        overlay.style.display = 'none';
      });
      // Re-lock when the mouse leaves, so normal page scrolling
      // isn't accidentally captured by the embedded site.
      wrap?.addEventListener('mouseleave', () => {
        wrap.classList.remove('is-active');
        if (overlay) overlay.style.display = 'flex';
      });
      return;
    }

    const input = document.getElementById(`imgfile${i}`);
    const button = document.getElementById(`projbtn${i}`);
    const img = document.getElementById(`imgprev${i}`);
    const placeholder = document.getElementById(`imgph${i}`);
    const text = document.getElementById(`imgtext${i}`);

    const saveKey = `portfolio-project-image-${i}`;
    const saved = localStorage.getItem(saveKey);
    if (saved) {
      img.src = saved;
      img.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
      if (text) text.textContent = 'Project image fixed';
      if (button) button.style.display = 'none';
      input.disabled = true;
    }

    button?.addEventListener('click', () => {
      if (input.disabled) return;
      input.click();
    });

    input?.addEventListener('change', e => {
      const f = e.target.files?.[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = ev => {
        const dataUrl = ev.target.result;
        if (typeof dataUrl === 'string') {
          localStorage.setItem(saveKey, dataUrl);
          img.src = dataUrl;
          img.style.display = 'block';
          if (placeholder) placeholder.style.display = 'none';
          if (text) text.textContent = 'Project image fixed';
          if (button) button.style.display = 'none';
          input.disabled = true;
        }
      };
      r.readAsDataURL(f);
    });
  });
}

function formatUrl(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '') + (u.pathname !== '/' ? u.pathname : '');
  } catch {
    return url;
  }
}

/* =====================
   SKILLS
===================== */
function buildSkills() {
  const container = document.getElementById('skillsCats');
  if (!container) return;

  SKILLS.forEach(cat => {
    const div = document.createElement('div');
    const chipsHTML = cat.chips
      .map((c, idx) => `<span class="chip" style="--i:${idx}">${c}</span>`)
      .join('');
    div.innerHTML = `
      <div class="cat-label">${cat.label}</div>
      <div class="chips">${chipsHTML}</div>`;
    container.appendChild(div);
  });
}

/* =====================
   ACHIEVEMENTS
===================== */
function buildAchievements() {
  const grid = document.getElementById('achGrid');
  if (!grid) return;

  ACH.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'ach-card reveal-up';
    card.style.setProperty('--d', `${i * 0.1}s`);
    card.innerHTML = `
      <div class="ach-num">${a.num}</div>
      <div class="ach-icon-wrap">${a.icon}</div>
      <div class="ach-title">${a.title}</div>
      <div class="ach-desc">${a.desc}</div>`;
    grid.appendChild(card);
  });
}

/* =====================
   ABOUT PHOTO UPLOAD
===================== */
function initAboutUpload() {
  const input = document.getElementById('aboutInput');
  const frame = document.getElementById('aboutFrame');
  const img = document.getElementById('aboutImg');
  const ph = document.getElementById('aboutPlaceholder');
  const text = document.getElementById('aboutUploadText');
  if (!input || !frame || !img) return;

  const STORAGE_KEY = 'portfolio-about-photo';

  const showImage = (dataUrl) => {
    img.src = dataUrl;
    img.style.display = 'block';
    if (ph) ph.style.display = 'none';
    if (text) text.textContent = 'Photo fixed';
    frame.title = 'Uploaded photo';
    frame.style.cursor = 'default';
    input.disabled = true;
  };

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    showImage(saved);
  }

  frame.addEventListener('click', e => {
    if (!input.disabled) {
      input.click();
    } else {
      e.preventDefault();
    }
  });

  input.addEventListener('change', e => {
    const f = e.target.files?.[0];
    if (!f) return;

    const r = new FileReader();
    r.onload = ev => {
      const dataUrl = ev.target.result;
      if (typeof dataUrl === 'string') {
        localStorage.setItem(STORAGE_KEY, dataUrl);
        showImage(dataUrl);
      }
    };
    r.readAsDataURL(f);
  });
}

/* =====================
   RESUME BUTTON
===================== */
function initResumeButton() {
  const btn = document.getElementById('resumeBtn');
  const input = document.getElementById('resumeInput');
  if (!btn || !input) return;

  let resumeUrl = '';

  btn.addEventListener('click', () => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    input.click();
  });

  input.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (resumeUrl) URL.revokeObjectURL(resumeUrl);
    resumeUrl = URL.createObjectURL(file);
    btn.setAttribute('data-resume-url', resumeUrl);
    btn.title = 'Open uploaded resume';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  });
}

/* =====================
   NAV ACTIVE + MOBILE
===================== */
function initNav() {
  const ham = document.getElementById('ham');
  const menu = document.getElementById('navmenu');
  const pill = document.getElementById('navPill');

  if (ham && menu) {
    ham.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('open'));
    });
  }

  function movePillTo(link) {
    if (!pill || !link) return;
    const menuRect = menu.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    pill.style.left = `${linkRect.left - menuRect.left}px`;
    pill.style.width = `${linkRect.width}px`;
    pill.classList.add('is-visible');
  }

  const sections = document.querySelectorAll('section[id]');
  function updateActiveLink() {
    let cur = '';
    sections.forEach(s => { if (scrollY >= s.offsetTop - 80) cur = s.id; });
    const links = document.querySelectorAll('.nav-links a');
    let activeLink = null;
    links.forEach(a => {
      const isActive = a.getAttribute('href') === '#' + cur;
      a.classList.toggle('active', isActive);
      if (isActive) activeLink = a;
    });
    if (activeLink) movePillTo(activeLink);
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  window.addEventListener('resize', updateActiveLink, { passive: true });
  updateActiveLink();
}

/* =====================
   LOADING INTRO
===================== */
function initLoader() {
  const overlay = document.getElementById('loaderOverlay');
  if (!overlay) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    overlay.classList.add('loaded');
    return;
  }

  window.addEventListener('load', () => {
    setTimeout(() => overlay.classList.add('loaded'), 550);
  });

  // Fallback in case 'load' fires very late (slow assets) — never block the UI for long.
  setTimeout(() => overlay.classList.add('loaded'), 2500);
}

/* =====================
   CONTACT FORM
===================== */
function initForm() {
  const btn = document.getElementById('fsub');
  if (!btn) return;

  btn.addEventListener('click', function () {
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const msg = document.getElementById('fmsg').value.trim();

    if (!name || !email || !msg) {
      btn.textContent = 'Please fill all fields';
      setTimeout(() => btn.textContent = 'Send Message →', 2000);
      return;
    }

    btn.textContent = 'Message sent ✓';
    btn.style.background = '#12a05c';

    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      document.getElementById('fname').value = '';
      document.getElementById('femail').value = '';
      document.getElementById('fmsg').value = '';
    }, 3000);
  });
}

/* =====================
   SCROLL REVEAL (IntersectionObserver)
===================== */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(t => io.observe(t));
}

/* =====================
   SKILL CHIPS POP-IN ON VIEW
===================== */
function initChipReveal() {
  const cats = document.getElementById('skillsCats');
  if (!cats || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.chip').forEach(c => c.classList.add('pop-in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.chip').forEach(c => c.classList.add('pop-in'));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skills-cats > div').forEach(group => io.observe(group));
}

/* =====================
   MAGNETIC BUTTONS
===================== */
function initMagneticButtons() {
  if (window.matchMedia('(hover:none)').matches) return;

  const maxPull = 7; // px — kept small and subtle
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      const x = relX * maxPull * 2;
      const y = relY * maxPull * 2 - 2; // slight lift baked in
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

/* =====================
   SECTION PARALLAX
===================== */
function initSectionParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(max-width: 900px)').matches) return; // skip on mobile, keep it crisp/simple there

  const targets = document.querySelectorAll('.sec .sec-inner');
  if (!targets.length) return;

  let raf = null;
  function update() {
    const vh = window.innerHeight;
    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      const centerOffset = (rect.top + rect.height / 2) - vh / 2;
      const shift = Math.max(-18, Math.min(18, centerOffset * -0.025));
      el.style.transform = `translateY(${shift}px)`;
    });
    raf = null;
  }

  window.addEventListener('scroll', () => {
    if (raf) return;
    raf = requestAnimationFrame(update);
  }, { passive: true });

  update();
}

/* =====================
   EXPERIENCE TIMELINE LINE
===================== */
function initTimelineLine() {
  const nav = document.getElementById('expNav');
  if (!nav) return;

  nav.style.setProperty('--line-h', '100%');

  if (!('IntersectionObserver' in window)) {
    nav.classList.add('in-view');
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nav.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  io.observe(nav);
}

/* =====================
   ACHIEVEMENT STAT COUNTERS
===================== */
function initAchCounters() {
  const nums = document.querySelectorAll('.ach-stat');
  if (!nums.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1100;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    nums.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;
      el.textContent = target + (el.getAttribute('data-suffix') || '');
    });
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  nums.forEach(n => io.observe(n));
}

/* =====================
   INIT
===================== */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  buildMarquee();
  buildExperience();
  buildProjects();
  buildSkills();
  buildAchievements();
  initAboutUpload();
  initResumeButton();
  initNav();
  initForm();
  initScrollReveal();
  initChipReveal();
  initAchCounters();
  initTimelineLine();
  initMagneticButtons();
  initSectionParallax();
});
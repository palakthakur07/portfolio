/* =====================
   DATA
===================== */
const EXP = [
  {
    year: '2024 – Present',
    title: 'B.Tech EEE',
    icon: '🎓',
    org: 'Bhagwan Parshuram Institute of Technology, Delhi',
    desc: 'Pursuing Electrical & Electronics Engineering while developing a strong foundation in programming and software development.',
    tags: ['EEE', 'BPIT', '2024–2028']
  },
  {
    year: '2025 – Present',
    title: 'Software Development',
    icon: '💻',
    org: 'Self Learning & Personal Projects',
    desc: 'Learning modern software development through hands-on projects, exploring web technologies, programming fundamentals, and application development.',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    year: '2025 – Present',
    title: 'Competitive Programming',
    icon: '⚡',
    org: 'LeetCode · CodeChef',
    desc: 'Solving Data Structures and Algorithms problems to strengthen problem-solving, analytical thinking, and coding skills.',
    tags: ['DSA', 'LeetCode', 'Problem Solving']
  },
  {
    year: '2026 – Present',
    title: 'Open Source & Projects',
    icon: '🗂️',
    org: 'Personal Portfolio & GitHub',
    desc: 'Building projects, maintaining code on GitHub, and continuously improving development practices through practical experience.',
    tags: ['Git', 'GitHub', 'Open Source']
  }
];

const PROJ = [
  {
    num: '01.',
    title: 'RoadSOS',
    desc: 'A road assistance platform helping users during emergencies with quick access to support services through a simple, responsive interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    gh: 'https://github.com/palakthakur07'
  },
  {
    num: '02.',
    title: 'CodeHer Elite',
    desc: 'A hackathon project focused on deepfake detection. Uses AI-based analysis to help identify potentially manipulated media with an accessible upload interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    gh: 'https://github.com/palakthakur07'
  },
  {
    num: '03.',
    title: 'Personal Portfolio',
    desc: 'A responsive portfolio website showcasing projects, technical skills, and my learning journey as an EEE student interested in software development.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    gh: 'https://github.com/palakthakur07'
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
    label: 'AI / ML',
    chips: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Deepfake Detection', 'NLP']
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
    icon: '🏆',
    title: 'Hackathon Participation',
    desc: 'Built and presented AI-focused projects in collaborative hackathon environments.'
  },
  {
    num: '02.',
    icon: '💻',
    title: 'DSA & Coding Growth',
    desc: 'Strengthened problem-solving through consistent practice on competitive platforms.'
  },
  {
    num: '03.',
    icon: '🧠',
    title: 'AI / ML Exploration',
    desc: 'Deep interest in machine learning, deepfake detection, and intelligent systems.'
  },
  {
    num: '04.',
    icon: '🌐',
    title: 'Portfolio & Web Builds',
    desc: 'Created responsive, modern web projects showcasing technical skills and design thinking.'
  }
];

const TECHS = ['Python', 'JavaScript', 'React', 'C++', 'Machine Learning', 'TensorFlow', 'Node.js', 'Git', 'Deep Learning', 'HTML / CSS', 'DSA', 'NumPy'];

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
    el.innerHTML = `<span class="mdot"></span>${t}`;
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
    card.className = 'exp-card' + (i === 0 ? ' active' : '');
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
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.innerHTML = `
      <div class="proj-img-wrap" id="imgwrap${i}">
        <input type="file" accept="image/*" id="imgfile${i}" style="display:none">
        <img id="imgprev${i}" alt="${p.title} screenshot">
        <div class="proj-img-placeholder" id="imgph${i}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
          <span>click + to add<br>project screenshot</span>
        </div>
        <button class="proj-upload-btn" onclick="document.getElementById('imgfile${i}').click()">+</button>
      </div>
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

    document.getElementById(`imgfile${i}`).addEventListener('change', e => {
      const f = e.target.files?.[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = ev => {
        const img = document.getElementById(`imgprev${i}`);
        img.src = ev.target.result;
        img.style.display = 'block';
        document.getElementById(`imgph${i}`).style.display = 'none';
      };
      r.readAsDataURL(f);
    });
  });
}

/* =====================
   SKILLS
===================== */
function buildSkills() {
  const container = document.getElementById('skillsCats');
  if (!container) return;

  SKILLS.forEach(cat => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="cat-label">${cat.label}</div>
      <div class="chips">${cat.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>`;
    container.appendChild(div);
  });
}

/* =====================
   ACHIEVEMENTS
===================== */
function buildAchievements() {
  const grid = document.getElementById('achGrid');
  if (!grid) return;

  ACH.forEach(a => {
    const card = document.createElement('div');
    card.className = 'ach-card';
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
  if (!input) return;
  input.addEventListener('change', e => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = ev => {
      const img = document.getElementById('aboutImg');
      img.src = ev.target.result;
      img.style.display = 'block';
      const ph = document.getElementById('aboutPlaceholder');
      if (ph) ph.style.display = 'none';
    };
    r.readAsDataURL(f);
  });
}

/* =====================
   NAV ACTIVE + MOBILE
===================== */
function initNav() {
  const ham = document.getElementById('ham');
  const menu = document.getElementById('navmenu');
  if (ham && menu) {
    ham.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('open'));
    });
  }

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (scrollY >= s.offsetTop - 80) cur = s.id; });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });
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
   INIT
===================== */
document.addEventListener('DOMContentLoaded', () => {
  buildMarquee();
  buildExperience();
  buildProjects();
  buildSkills();
  buildAchievements();
  initAboutUpload();
  initNav();
  initForm();
});
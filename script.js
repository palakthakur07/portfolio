// DATA
const EXP=[
  {
    year:"2024 – Present",
    title:"B.Tech EEE",
    org:"Bhagwan Parshuram Institute of Technology, Delhi",
    desc:"Pursuing Electrical & Electronics Engineering while developing a strong foundation in programming and software development.",
    tags:["EEE","BPIT","2024–2028"],
    icon:"fas fa-graduation-cap"
  },

  {
    year:"2025 – Present",
    title:"Software Development",
    org:"Self Learning & Personal Projects",
    desc:"Learning modern software development through hands-on projects, exploring web technologies, programming fundamentals, and application development.",
    tags:["HTML","CSS","JavaScript"],
    icon:"fas fa-laptop-code"
  },

  {
    year:"2025 – Present",
    title:"Competitive Programming",
    org:"LeetCode · CodeChef",
    desc:"Solving Data Structures and Algorithms problems to strengthen problem-solving, analytical thinking, and coding skills.",
    tags:["DSA","LeetCode","Problem Solving"],
    icon:"fas fa-code"
  },

  {
    year:"2026 – Present",
    title:"Open Source & Projects",
    org:"Personal Portfolio & Development Projects",
    desc:"Building projects, maintaining code on GitHub, and continuously improving development practices through practical experience.",
    tags:["Git","GitHub","Projects"],
    icon:"fas fa-folder-open"
  }
];

const PROJ=[
  {
    icon:"fas fa-car-crash",
    title:"RoadSOS",
    desc:"A road assistance platform designed to help users during emergencies by providing quick access to support services and essential information through a simple and responsive interface.",
    stack:["HTML","CSS","JavaScript"],
    gh:"https://github.com/palakthakur07"
  },

  {
    icon:"fas fa-shield-alt",
    title:"CodeHer Elite",
    desc:"A hackathon project focused on deepfake detection. The platform helps users identify potentially manipulated media using AI-based analysis and provides an accessible interface for uploading and evaluating content.",
    stack:["HTML","CSS","JavaScript","AI"],
    gh:"https://github.com/palakthakur07"
  },

  {
    icon:"fas fa-user",
    title:"Personal Portfolio",
    desc:"A responsive portfolio website showcasing my projects, technical skills, achievements, and learning journey as an Electrical & Electronics Engineering student interested in software development.",
    stack:["HTML","CSS","JavaScript"],
    gh:"https://github.com/palakthakur07"
  }
];

// Render experience
const expNav=document.getElementById('expNav');
const expCards=document.getElementById('expCards');
EXP.forEach((e,i)=>{
  const ni=document.createElement('div');
  ni.className='exp-nav-item'+(i===0?' active':'');
  ni.innerHTML=`<div class="exp-nav-dot"></div><div><div class="exp-nav-year">${e.year}</div><div class="exp-nav-title">${e.title}</div></div>`;
  ni.addEventListener('click',()=>{
    document.querySelectorAll('.exp-nav-item').forEach(x=>x.classList.remove('active'));
    ni.classList.add('active');
    document.querySelectorAll('.exp-card').forEach((c,j)=>{
      c.classList.toggle('highlight',j===i);
      if(j===i) c.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
  });
  expNav.appendChild(ni);

  const card=document.createElement('div');
  card.className='exp-card rv'+(i===0?' highlight':'');
  card.innerHTML=`
    <div class="exp-card-top">
      <div><div class="exp-date">${e.year}</div></div>
    </div>
    <h3><i class="${e.icon}" style="color:var(--pink);margin-right:.5rem;font-size:.9rem"></i>${e.title}</h3>
    <div class="exp-org">${e.org}</div>
    <p>${e.desc}</p>
    <div class="exp-tags">${e.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
  expCards.appendChild(card);
});

// Render projects
const projGrid=document.getElementById('projGrid');
PROJ.forEach(p=>{
  const c=document.createElement('div');
  c.className='proj-card rv';
  c.innerHTML=`
    <div class="proj-icon"><i class="${p.icon}"></i></div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="proj-bottom">
      <div class="proj-stack">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
      <a href="${p.gh}" target="_blank" class="proj-link"><i class="fab fa-github"></i> Code</a>
    </div>`;
  projGrid.appendChild(c);
});

// GALLERY UPLOAD
const GALLERY_ITEMS=[
  {caption:"My Photos",bg:"#FFF0F5",icon:"fas fa-camera-retro",span:true},
  {caption:"Campus Life",bg:"#FDE8F2",icon:"fas fa-university"},
  {caption:"Coding Sessions",bg:"#F9E5F0",icon:"fas fa-code"},
  {caption:"Achievements",bg:"#F5E8F7",icon:"fas fa-trophy"},
  {caption:"Academic Journey",bg:"#FFF0F5",icon:"fas fa-graduation-cap"},
  {caption:"Hackathons",bg:"#FDE0EE",icon:"fas fa-bolt"},
  {caption:"Projects",bg:"#F9ECF5",icon:"fas fa-brain"},
];
// Crop modal
const cropModal=document.createElement('div');
cropModal.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:99999;display:none;align-items:center;justify-content:center;flex-direction:column;gap:1rem';
cropModal.innerHTML=`
  <div style="background:var(--surface);border-radius:16px;padding:1.5rem;max-width:420px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.4)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
      <span style="font-weight:600;color:var(--text);font-size:.95rem">Crop your photo</span>
      <button id="cropClose" style="background:none;border:none;color:var(--text-3);font-size:1.2rem;cursor:pointer">✕</button>
    </div>
    <div style="position:relative;width:100%;aspect-ratio:1/1;background:#111;border-radius:10px;overflow:hidden;touch-action:none" id="cropArea">
      <img id="cropImg" style="position:absolute;transform-origin:top left;user-select:none;-webkit-user-select:none;max-width:none" draggable="false">
    </div>
    <div style="margin-top:1rem">
      <label style="font-size:.75rem;color:var(--text-3);display:block;margin-bottom:.3rem">Zoom</label>
      <input type="range" id="cropZoom" min="1" max="4" step="0.01" value="1" style="width:100%;accent-color:var(--pink)">
    </div>
    <div style="display:flex;gap:.6rem;margin-top:1rem">
      <button id="cropConfirm" style="flex:1;background:var(--pink);color:#fff;border:none;border-radius:999px;padding:.6rem;font-size:.85rem;font-weight:500;cursor:pointer">Apply Crop ✓</button>
      <button id="cropCancel" style="flex:1;background:var(--surface-2);color:var(--text);border:1px solid var(--border);border-radius:999px;padding:.6rem;font-size:.85rem;cursor:pointer">Cancel</button>
    </div>
  </div>`;
document.body.appendChild(cropModal);

let cropCallback=null, cropImgNatW=0, cropImgNatH=0, cropX=0, cropY=0, cropScale=1, cropDragging=false, cropStartX=0, cropStartY=0, cropStartTX=0, cropStartTY=0;
const cropImg=cropModal.querySelector('#cropImg');
const cropArea=cropModal.querySelector('#cropArea');
const cropZoom=cropModal.querySelector('#cropZoom');

function openCrop(src,cb){
  cropCallback=cb; cropX=0; cropY=0; cropScale=1; cropZoom.value=1;
  cropImg.src=src;
  cropImg.onload=()=>{
    cropImgNatW=cropImg.naturalWidth; cropImgNatH=cropImg.naturalHeight;
    const areaW=cropArea.clientWidth;
    const initScale=areaW/cropImgNatW;
    cropScale=initScale; cropZoom.min=initScale; cropZoom.value=initScale;
    applyCropTransform();
  };
  cropModal.style.display='flex';
}

function applyCropTransform(){
  const areaW=cropArea.clientWidth, areaH=cropArea.clientHeight;
  const imgW=cropImgNatW*cropScale, imgH=cropImgNatH*cropScale;
  cropX=Math.min(0,Math.max(cropX,areaW-imgW));
  cropY=Math.min(0,Math.max(cropY,areaH-imgH));
  cropImg.style.transform=`translate(${cropX}px,${cropY}px) scale(${cropScale})`;
  cropImg.style.width=cropImgNatW+'px';
  cropImg.style.height=cropImgNatH+'px';
}

cropZoom.addEventListener('input',()=>{
  const oldScale=cropScale; cropScale=parseFloat(cropZoom.value);
  const ratio=cropScale/oldScale;
  const areaW=cropArea.clientWidth, areaH=cropArea.clientHeight;
  cropX=(cropX-areaW/2)*ratio+areaW/2;
  cropY=(cropY-areaH/2)*ratio+areaH/2;
  applyCropTransform();
});

cropArea.addEventListener('mousedown',e=>{cropDragging=true;cropStartX=e.clientX;cropStartY=e.clientY;cropStartTX=cropX;cropStartTY=cropY;e.preventDefault()});
window.addEventListener('mousemove',e=>{if(!cropDragging)return;cropX=cropStartTX+(e.clientX-cropStartX);cropY=cropStartTY+(e.clientY-cropStartY);applyCropTransform()});
window.addEventListener('mouseup',()=>cropDragging=false);
cropArea.addEventListener('touchstart',e=>{const t=e.touches[0];cropDragging=true;cropStartX=t.clientX;cropStartY=t.clientY;cropStartTX=cropX;cropStartTY=cropY},{passive:true});
cropArea.addEventListener('touchmove',e=>{if(!cropDragging)return;const t=e.touches[0];cropX=cropStartTX+(t.clientX-cropStartX);cropY=cropStartTY+(t.clientY-cropStartY);applyCropTransform();e.preventDefault()},{passive:false});
cropArea.addEventListener('touchend',()=>cropDragging=false);

cropModal.querySelector('#cropClose').addEventListener('click',()=>cropModal.style.display='none');
cropModal.querySelector('#cropCancel').addEventListener('click',()=>cropModal.style.display='none');
cropModal.querySelector('#cropConfirm').addEventListener('click',()=>{
  const areaW=cropArea.clientWidth, areaH=cropArea.clientHeight;
  const canvas=document.createElement('canvas');
  canvas.width=areaW*2; canvas.height=areaH*2;
  const ctx=canvas.getContext('2d');
  ctx.scale(2,2);
  ctx.drawImage(cropImg,(cropX)/cropScale*1,(cropY)/cropScale*1,areaW/cropScale,areaH/cropScale,0,0,areaW,areaH);
  const result=canvas.toDataURL('image/jpeg',.92);
  cropModal.style.display='none';
  if(cropCallback) cropCallback(result);
});

// Build gallery tiles
const galleryRow=document.getElementById('galleryRow');
GALLERY_ITEMS.forEach((item,i)=>{
  const tilePhotos=[];
  let currentIdx=0;

  const div=document.createElement('div');
  div.className='g-item';
  div.style.cssText=(item.span?'grid-column:span 2;grid-row:span 2;':'')+'position:relative;overflow:hidden;cursor:default;border-radius:var(--radius)';

  div.innerHTML=`
    <input type="file" accept="image/*" multiple style="display:none" id="gfile${i}">
    <div class="g-display-${i}" style="width:100%;height:100%;min-height:${item.span?'320px':'160px'};background:${item.bg};display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden">
     <i class="g-emoji-${i} ${item.icon}" style="font-size:${item.span?'3rem':'1.8rem'};color:var(--pink);opacity:.4"></i>
      <!-- slides -->
      <div class="g-slides-${i}" style="display:none;width:100%;height:100%;position:relative"></div>
      <!-- nav arrows -->
      <button class="g-prev-${i}" style="display:none;position:absolute;left:.4rem;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.5);color:#fff;border:none;border-radius:50%;width:26px;height:26px;font-size:.8rem;cursor:pointer;z-index:5;align-items:center;justify-content:center">‹</button>
      <button class="g-next-${i}" style="display:none;position:absolute;right:.4rem;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.5);color:#fff;border:none;border-radius:50%;width:26px;height:26px;font-size:.8rem;cursor:pointer;z-index:5;align-items:center;justify-content:center">›</button>
      <!-- dots -->
      <div class="g-dots-${i}" style="display:none;position:absolute;bottom:.4rem;left:50%;transform:translateX(-50%);display:flex;gap:.3rem;z-index:5"></div>
      <!-- delete btn -->
      <button class="g-del-${i}" style="display:none;position:absolute;top:.4rem;right:.4rem;background:rgba(0,0,0,.6);color:#fff;border:none;border-radius:50%;width:24px;height:24px;font-size:.7rem;cursor:pointer;z-index:6;align-items:center;justify-content:center" title="Delete photo">🗑</button>
    </div>
    <div class="g-overlay"><div class="g-caption">${item.caption}</div></div>
    <label for="gfile${i}" style="position:absolute;bottom:.5rem;right:.5rem;width:28px;height:28px;border-radius:50%;background:var(--pink);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.2s;border:2px solid #fff;z-index:10" title="Add photo">
      <i class="fas fa-plus" style="color:#fff;font-size:.65rem;pointer-events:none"></i>
    </label>`;

  const display=div.querySelector(`.g-display-${i}`);
  const slides=div.querySelector(`.g-slides-${i}`);
  const dotsEl=div.querySelector(`.g-dots-${i}`);
  const prevBtn=div.querySelector(`.g-prev-${i}`);
  const nextBtn=div.querySelector(`.g-next-${i}`);
  const delBtn=div.querySelector(`.g-del-${i}`);
  const emojiEl=div.querySelector(`.g-emoji-${i}`);

  function renderSlides(){
    slides.innerHTML='';
    dotsEl.innerHTML='';
    if(tilePhotos.length===0){
      emojiEl.style.display=''; slides.style.display='none';
      [prevBtn,nextBtn,delBtn].forEach(b=>b.style.display='none');
      dotsEl.style.display='none'; return;
    }
    emojiEl.style.display='none'; slides.style.display='block';
    tilePhotos.forEach((src,j)=>{
      const img=document.createElement('img');
      img.src=src; img.style.cssText='width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0;transition:opacity .35s';
      if(j===currentIdx) img.style.opacity='1';
      slides.appendChild(img);
      const dot=document.createElement('span');
      dot.style.cssText=`width:6px;height:6px;border-radius:50%;background:${j===currentIdx?'#fff':'rgba(255,255,255,.4)'};transition:.2s;cursor:pointer`;
      dot.addEventListener('click',()=>{currentIdx=j;renderSlides()});
      dotsEl.appendChild(dot);
    });
    prevBtn.style.display=tilePhotos.length>1?'flex':'none';
    nextBtn.style.display=tilePhotos.length>1?'flex':'none';
    dotsEl.style.display=tilePhotos.length>1?'flex':'none';
    delBtn.style.display='flex';
  }

  prevBtn.addEventListener('click',e=>{e.stopPropagation();currentIdx=(currentIdx-1+tilePhotos.length)%tilePhotos.length;renderSlides()});
  nextBtn.addEventListener('click',e=>{e.stopPropagation();currentIdx=(currentIdx+1)%tilePhotos.length;renderSlides()});
  delBtn.addEventListener('click',e=>{
    e.stopPropagation();
    tilePhotos.splice(currentIdx,1);
    currentIdx=Math.min(currentIdx,tilePhotos.length-1);
    renderSlides(); toast('🗑 Photo removed');
  });

  div.querySelector(`#gfile${i}`).addEventListener('change',e=>{
    const files=Array.from(e.target.files);
    if(!files.length)return;
    let loaded=0;
    files.forEach(file=>{
      const reader=new FileReader();
      reader.onload=ev=>{
        openCrop(ev.target.result,cropped=>{
          tilePhotos.push(cropped);
          currentIdx=tilePhotos.length-1;
          renderSlides();
          toast('📸 Photo added!');
        });
        loaded++;
      };
      reader.readAsDataURL(file);
    });
    e.target.value='';
  });

  galleryRow.appendChild(div);
});
// CURSOR
const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
document.addEventListener('mousemove',e=>{
  const x=e.clientX, y=e.clientY;
  cur.style.left=x+'px'; cur.style.top=y+'px';
  cur2.style.left=x+'px'; cur2.style.top=y+'px';
});
document.querySelectorAll('a,button,.proj-card,.exp-card,.g-item,.stat-box').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('hovering'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('hovering'));
});

// LOADER
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('out');
    earnBadge(0,'🔍 Explorer — Welcome to Palak\'s world!');
  },2100);
});

// SCROLL EFFECTS
const nav2=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav2.classList.toggle('scrolled',scrollY>30);
  // Active nav
  document.querySelectorAll('section[id]').forEach(s=>{
    const a=document.querySelector(`.nav-menu a[href="#${s.id}"]`);
    if(!a)return;
    const rect=s.getBoundingClientRect();
    a.classList.toggle('on',rect.top<=80&&rect.bottom>80);
  });
},{ passive:true });

// REVEAL ON SCROLL
const allRv=document.querySelectorAll('.rv,.rv2,.rv3');
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:.12});
allRv.forEach(el=>ro.observe(el));

// SKILL BARS
const skillFills=document.querySelectorAll('.skill-fill');
const so=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.style.width=e.target.dataset.w+'%';
  });
},{threshold:.4});
skillFills.forEach(f=>so.observe(f));

// MOBILE NAV
document.getElementById('ham').addEventListener('click',()=>{
  document.getElementById('navmenu').classList.toggle('open');
});

// THEME TOGGLE
(function(){
  const html=document.documentElement;
  const btn=document.getElementById('theme-toggle');
  const icon=document.getElementById('theme-icon');
  // Respect saved preference
  const saved=localStorage.getItem('pt-theme');
  if(saved==='dark'){html.setAttribute('data-theme','dark');icon.className='fas fa-sun';}

  btn.addEventListener('click',()=>{
    const isDark=html.getAttribute('data-theme')==='dark';
    if(isDark){
      html.removeAttribute('data-theme');
      icon.className='fas fa-moon';
      localStorage.setItem('pt-theme','light');
      toast('☀️ Light mode');
    } else {
      html.setAttribute('data-theme','dark');
      icon.className='fas fa-sun';
      localStorage.setItem('pt-theme','dark');
      toast('🌙 Dark mode ');
    }
    spawnSparkles(btn.getBoundingClientRect().left+19, btn.getBoundingClientRect().top+19, 8);
  });
})();

// CTA
document.getElementById('unlockBtn').addEventListener('click',e=>{
  e.preventDefault();
  document.getElementById('experience').scrollIntoView({behavior:'smooth'});
});

// HERO MASCOT EASTER EGG
const mascots=[
  'fa-user','fa-star','fa-heart','fa-bolt','fa-brain',
  'fa-code','fa-rocket','fa-graduation-cap'
];
let mascotIdx=0;
document.getElementById('heroMascot').addEventListener('click',e=>{
  mascotIdx=(mascotIdx+1)%mascots.length;
  document.querySelector('.hero-img-emoji').innerHTML=`<i class="fas ${mascots[mascotIdx]}" style="font-size:5rem;color:var(--pink);opacity:.35"></i>`;
  spawnSparkles(e.clientX,e.clientY,10);
  toast('✦ Easter egg found!');
});

// SPARKLES
function spawnSparkles(x,y,n){
  for(let i=0;i<n;i++){
    const s=document.createElement('div');
    s.className='sp';
    const angle=(i/n)*Math.PI*2, dist=40+Math.random()*60;
    s.style.cssText=`left:${x}px;top:${y}px;width:${4+Math.random()*4}px;height:${4+Math.random()*4}px;background:var(--pink);--sx:${Math.cos(angle)*dist}px;--sy:${Math.sin(angle)*dist}px;opacity:.8`;
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),1100);
  }
}
document.addEventListener('click',e=>{
  if(!e.target.closest('input,textarea,button,a')) spawnSparkles(e.clientX,e.clientY,5);
});

// TOAST
let toastT;
function toast(msg){
  const t=document.getElementById('toast');
  t.innerHTML=msg; t.classList.add('show');
  clearTimeout(toastT);
  toastT=setTimeout(()=>t.classList.remove('show'),2600);
}

// GAMIFICATION
const BADGE_MAP={home:0,about:1,experience:2,projects:3,gallery:4,contact:5};
const BADGE_MSGS=['🔍 Explorer — you started the journey!','📖 Reader — you know who I am!','🔬 Researcher — you studied my path!','🛠️ Builder — you checked my work!','🎨 Creative — you saw my gallery!','🏆 Champion — you explored everything!'];
let earned=[];
function earnBadge(id,msg){
  if(earned.includes(id))return;
  earned.push(id);
  // HUD badge
  document.querySelectorAll('.hud-b')[id].classList.add('on');
  // Stars
  const stars=document.querySelectorAll('.hud-star');
  earned.forEach((_,i)=>stars[i].classList.add('on'));
  // Progress
  const pct=Math.round((earned.length/6)*100);
  document.getElementById('hpf').style.width=pct+'%';
  document.getElementById('hpct').textContent=pct+'%';
  toast(msg||BADGE_MSGS[id]);
}
const secObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting&&BADGE_MAP.hasOwnProperty(e.target.id)) earnBadge(BADGE_MAP[e.target.id]);
  });
},{threshold:.3});
Object.keys(BADGE_MAP).forEach(id=>{const el=document.getElementById(id);if(el)secObs.observe(el);});

// FORM
document.getElementById('fsub').addEventListener('click',function(){
  const name=document.getElementById('fname').value.trim();
  const email=document.getElementById('femail').value.trim();
  const msg=document.getElementById('fmsg').value.trim();
  if(!name||!email||!msg){toast('Please fill in all fields.');return;}
  this.textContent='Message sent ✓';
  this.style.background='#12a05c';
  spawnSparkles(window.innerWidth/2,window.innerHeight/2,18);
  earnBadge(5);
  setTimeout(()=>{
    this.textContent='Send Message →';
    this.style.background='';
    document.getElementById('fname').value='';
    document.getElementById('femail').value='';
    document.getElementById('fmsg').value='';
  },3000);
});
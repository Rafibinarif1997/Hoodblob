const images = Array.from({length:51},(_,i)=>`./${String(i+1).padStart(3,'0')}.png`);
const categories = ['sport','street','chill','fun'];
const names = ['Basketball Mood','Street Crouch','Camera Moment','Pixel Flex','Late Night','Game Face','Chill Mode','Soccer Energy','Cap Trick','Quiet Focus','Victory Pose','Weekend Run'];
const grid=document.getElementById('grid');
function category(i){return categories[i%categories.length]}
function render(filter='all'){
  grid.innerHTML='';
  images.forEach((src,i)=>{
    const cat=category(i); if(filter!=='all'&&cat!==filter)return;
    const card=document.createElement('article'); card.className='card'; card.dataset.category=cat;
    card.innerHTML=`<span class="card-num">#${String(i+1).padStart(3,'0')}</span><img src="${src}" loading="lazy" alt="ANSEM STORY #${String(i+1).padStart(3,'0')}"><div class="card-meta"><strong>ANSEM #${String(i+1).padStart(3,'0')}</strong><small>${cat.toUpperCase()}</small></div>`;
    card.onclick=()=>openModal(i,src,cat); grid.appendChild(card);
  });
}
function openModal(i,src,cat){
  document.getElementById('modalImg').src=src;
  document.getElementById('modalImg').alt=`ANSEM STORY #${String(i+1).padStart(3,'0')}`;
  document.getElementById('modalTitle').textContent=`ANSEM #${String(i+1).padStart(3,'0')}`;
  document.getElementById('modalDesc').textContent='A unique Ansem moment — a different fit, activity and expression built around the same recognizable character.';
  document.getElementById('modalStyle').textContent=cat.toUpperCase();
  document.getElementById('modal').classList.add('open'); document.getElementById('modal').setAttribute('aria-hidden','false');
}
document.getElementById('close').onclick=()=>document.getElementById('modal').classList.remove('open');
document.getElementById('modal').onclick=e=>{if(e.target.id==='modal')e.currentTarget.classList.remove('open')};
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.getElementById('modal').classList.remove('open')});
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)});
render();

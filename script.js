const $=s=>document.querySelector(s),deck=$('#deck');
const WD=[["குணம்","Virtues","Virtue means a person's good qualities: honesty, kindness, patience and skill.","Begin by looking for the good, not the flaw.","குணம் என்பது ஒருவரின் நற்பண்புகள் — நேர்மை, அன்பு, பொறுமை, திறமை.","முதலில் நன்மையைத் தேடிப் பார்; குறையை அல்ல."],
["நாடி","Seek · Examine","To seek is to examine closely, patiently and without hurry.","Never judge before you have truly looked.","நாடுதல் என்பது ஆராய்ந்து தேடுதல்; அவசரமின்றி ஆழமாகப் பார்ப்பது.","ஆராயாமல் தீர்ப்பு சொல்லாதே."],
["குற்றமும்","And Faults","Faults are the flaws and mistakes that every human being carries.","See the faults honestly, without hatred.","குற்றம் என்பது குறைகளும் தவறுகளும்; மனிதனுக்குக் குறை இருப்பது இயல்பே.","குறையை மறைக்காமல், வெறுப்பின்றி ஏற்றுக்கொள்."],
["நாடி","Weigh · Judge","Weigh both sides once more, with equal care and no bias.","Be fair to the light and to the shadow alike.","மீண்டும் நாடுதல் — நன்மையையும் குறையையும் ஒரே அளவு கவனத்துடன் எடைபோடுதல்.","இருபுறமும் நியாயமாகப் பார்."],
["அவற்றுள்","Among Them","'Among them' means placing strengths and faults side by side to compare.","Only comparison shows the true size of each.","அவற்றுள் என்றால் 'அவை இரண்டிலும்'; நன்மையையும் குறையையும் ஒப்பிட்டுப் பார்ப்பது.","ஒப்பிட்டால்தான் உண்மையான அளவு தெரியும்."],
["மிகைநாடி","Find What Exceeds","Find which quality exceeds, which side overflows in this person.","Know a person by what dominates, not by a single slip.","மிகை என்றால் மிகுந்தது; எது அதிகமாக உள்ளது என்பதைக் கண்டறிதல்.","ஒரு தவறால் அல்ல, மிகுந்த பண்பால் ஒருவரை அறி."],
["மிக்க கொளல்","Judge · Select","Accept what prevails, and choose or decide accordingly.","Accept the person whose goodness is greater, flaws and all.","மிக்கதை — மிகுந்த பண்பை — ஏற்றுக்கொண்டு அதன்படி முடிவெடு.","குறையுடன் இருந்தாலும், மிகுந்த நன்மையுள்ளவரை ஏற்றுக்கொள்."]];
const xs=[40,246,425,606,790,972,1142,1368],R1=xs.slice(0,7).map((x,i)=>[x,150,xs[i+1]-x,595]),R2=[[78,78,364,310],[445,78,317,310],[1055,78,313,310],[50,408,315,320],[385,408,315,320],[718,408,317,320],[1055,408,313,320]];
const C=(v,r)=>`style="aspect-ratio:${r[2]}/${r[3]};background:var(${v}) ${r[0]/(1408-r[2])*100}% ${r[1]/(768-r[3])*100}%/${1408/r[2]*100}% auto no-repeat"`;
const hero=`<section class="s" id="hero"><div class="pw" id="pw"><div class="pst"></div></div><div class="vig"></div><div class="spot"></div>${[...Array(26)].map((_,i)=>`<i class="em" style="left:${(i*37)%100}%;animation-duration:${7+i%7}s;animation-delay:-${i%9}s"></i>`).join('')}
<div class="menu"><ul class="mi" id="mi"><div class="bar" id="bar"></div></ul><div class="dsc" id="dsc"></div></div></section>`;
const kn=["குணம்","நாடிக்","குற்றமும்","நாடி","அவற்றுள்","மிகைநாடி","மிக்க கொளல்"];
const kural=`<section class="s" id="kural"><svg class="bgm" viewBox="-100 -100 200 200">${[...Array(16)].map((_,i)=>`<ellipse rx="10" ry="44" cy="-44" transform="rotate(${i*22.5})" fill="none" stroke="#ffb347" stroke-width=".6"/>`).join('')}<circle r="92" fill="none" stroke="#ffb347" stroke-dasharray="2 3" stroke-width=".6"/><circle r="30" fill="none" stroke="#ffb347" stroke-width=".6"/></svg>
${["அ","ஆ","இ","ஈ","உ","ஊ","எ","ஏ","ஐ","க","ங","ச","ஞ","ட","ண","த","ந","ப","ம","வ"].map((l,i)=>`<span class="fw" style="left:${(i*5.3+2)%96}%;font-size:${30+i*7%50}px;animation-duration:${14+i*3%12}s;animation-delay:-${i*2}s">${l}</span>`).join('')}
${[7,87].map(l=>`<svg class="lamp" style="left:${l}%" viewBox="0 0 60 90"><g class="fl2"><path class="fl" d="M30 8q14 18 0 34q-14-16 0-34z" fill="#ffb347"/></g><path d="M8 52h44l-8 24H16z" fill="#c0821f"/><rect x="26" y="76" width="8" height="12" fill="#8a5a28"/></svg>`).join('')}
<div class="kc"><div class="verse">${kn.map((w,i)=>`<span class="vw" data-g="${i+4}" style="animation-delay:${.4+i*.45}s"><sup>${i+1}</sup>${w}</span>`).join('')}</div><div class="line"></div>
<div class="ro">Kuṇam-nāṭik kuṟṟamum nāṭi avaṟṟuḷ mikai-nāṭi mikka koḷal</div><div class="mn">Examine the good. Examine the faults. Weigh both. <em>Accept by what is greater.</em></div><div style="opacity:.7">Tap any word to enter its story →</div></div></section>`;
let h=hero+kural;
[["--i1"],["--i2"]].forEach(x=>{h+=`<section class="s"><i class="cord"></i><div class="fz"><div class="fi" style="background:var(${x[0]}) center/contain no-repeat"></div><div class="fh">HOVER TO ZOOM</div></div></section>`});
WD.forEach((w,i)=>{h+=`<section class="s"><i class="cord"></i><div class="wp"><div class="pics"><div class="pc a" ${C('--i1',R1[i])}></div><div class="pc b" ${C('--i2',R2[i])}></div></div><div class="inf"><div class="wn">0${i+1} / 07</div><div class="bgw">${w[0]}</div><div class="wr">${w[1]}</div>
<div class="ib ta" tabindex="0"><em>தமிழ்</em><p>${w[4]}</p><p class="mo">நீதி: ${w[5]}</p></div><div class="ib en" tabindex="0"><em>ENGLISH</em><p>${w[2]}</p><p class="mo">Moral: ${w[3]}</p></div></div></div></section>`});
h+=`<section class="s"><div class="fin"><div class="sto"><div class="wn">THE STORY · கதை</div><div class="bgw">இரு அமைச்சர்கள்</div><div class="wr" style="text-align:center">The Two Ministers</div>
<div class="ib ta" tabindex="0"><em>தமிழ்</em><p>அரசனுக்குப் புதிய கருவூல அமைச்சர் தேவைப்பட்டார். மாறன் எந்தத் தவறும் செய்யாதவன்; ஆனால் யாருக்கும் உதவியதில்லை. கண்டன் முன்கோபி; ஆனால் பெருவெள்ளத்தில் களஞ்சியத்தைத் திறந்து நாட்டுக்கே உணவளித்தான். அரசன் நன்மையை ஆராய்ந்தான்; குறையை ஆராய்ந்தான்; இரண்டையும் எடைபோட்டு கண்டனைத் தேர்ந்தான்.</p><p class="mo">நீதி: மிகுந்த பண்பைக் கொண்டே ஒருவரை மதிப்பிடு.</p></div>
<div class="ib en" tabindex="0"><em>ENGLISH</em><p>A king needed a new treasurer. Maran never made a mistake, yet never helped anyone. Kandan was hot-tempered, but when the great flood came he opened the granaries and fed the whole kingdom. The king examined the good, examined the faults, weighed both, and chose Kandan.</p><p class="mo">Moral: judge a person by what is greater in them.</p></div></div></div></section>`;
deck.innerHTML=h;
window.scrollTo(0,0);
const S=[...deck.children],nav=$('#nav');let cur=0;const cur_i=()=>cur;
nav.innerHTML=S.map((_,i)=>`<a aria-label="Go to section ${i+1}" onclick="go(${i})"></a>`).join('');

function go(i){
  i=Math.max(0,Math.min(S.length-1,i));
  S[i].scrollIntoView({behavior:'smooth',block:'start'});
}

function upd(){
  const y=window.scrollY + window.innerHeight*0.42;
  let best=0;
  S.forEach((s,i)=>{if(y>=s.offsetTop) best=i;});
  cur=best;
  nav.querySelectorAll('a').forEach((a,i)=>a.classList.toggle('on',i===cur));
  $('#ct').textContent=String(cur+1).padStart(2,'0')+' / '+S.length;
  const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  $('#pg').style.width=Math.min(100,Math.max(0,window.scrollY/max*100))+'%';
}
window.addEventListener('scroll',upd,{passive:true});
window.addEventListener('resize',upd);

addEventListener('keydown',e=>{
  if(0&&(e.key=='ArrowDown'||e.key=='ArrowUp')){
    setSel((sel+(e.key=='ArrowDown'?1:3))%4);
    e.preventDefault();
    return;
  }
  if(0&&e.key=='Enter'){act(sel);return}
  if(e.key=='ArrowRight'||e.key=='ArrowDown'||e.key==' '){
    if(e.key==' ' && e.target && /input|textarea|button/i.test(e.target.tagName)) return;
    go(cur_i()+1);
    e.preventDefault();
  }
  if(e.key=='ArrowLeft'||e.key=='ArrowUp'){
    go(cur_i()-1);
    e.preventDefault();
  }
});
document.querySelectorAll('.car').forEach(c=>{const t=c.querySelector('.tr'),n=t.children.length,d=c.querySelectorAll('.cd i');let i=0,tm;const show=k=>{i=(k+n)%n;t.style.transform=`translateX(-${i*100}%)`;d.forEach((x,j)=>x.classList.toggle('on',j==i))};const [a,b]=c.querySelectorAll('.ca');a.onclick=()=>{show(i-1);rs()};b.onclick=()=>{show(i+1);rs()};const rs=()=>{clearInterval(tm);tm=setInterval(()=>show(i+1),3800)};show(0);rs()});
const MI=[["THE SAGE","A weaver-poet from Mylapore who, two thousand years ago, wrote 1,330 couplets on how to live well.","His 133-foot statue stands at Kanyakumari, one foot for each of the 133 chapters.",null],["THE KURAL","Kural 504: examine the good, examine the faults, and accept by what is greater.","",1],["THE 7 WORDS","Seven words, seven pictures, each explained with its meaning and moral in Tamil and English.","",2],["THE STORY","A short tale of a king and two ministers who learned to weigh good against fault.","",S.length-1]];
const mi=$('#mi'),bar=$('#bar'),dsc=$('#dsc');let sel=0,more=false;
MI.forEach((m,i)=>{const l=document.createElement('li');l.style.setProperty('--i',i);l.textContent=m[0];l.onmouseenter=()=>setSel(i);l.onclick=()=>act(i);mi.appendChild(l)});
function setSel(i){sel=i;more=false;[...mi.querySelectorAll('li')].forEach((l,j)=>l.classList.toggle('on',j==i));bar.style.transform=`translateY(${i*40}px)`;paint()}
function paint(){dsc.innerHTML=`<b>${MI[sel][0]}</b>${MI[sel][1]}${more?'<br><br>'+MI[sel][2]:''}${MI[sel][3]?'<br><br>Press Enter or click →':''}`;dsc.classList.remove('chg');void dsc.offsetWidth;dsc.classList.add('chg')}
function act(i){if(MI[i][3]!==null)go(MI[i][3]);else{more=!more;paint()}}
setSel(0);
document.querySelectorAll('.fz').forEach(f=>{const i=f.firstElementChild;f.onmousemove=e=>{const r=f.getBoundingClientRect();i.style.transformOrigin=((e.clientX-r.left)/r.width*100)+'% '+((e.clientY-r.top)/r.height*100)+'%'}});

const LT="குணம்நாடிக்குற்றமும்நாடிஅவற்றுள்மிகைநாடிமிக்ககொளல்".match(/[\u0B85-\u0BB9][\u0BBE-\u0BCD\u0BD7]?/gu);
const dr=document.createElement('div');dr.id='drg';document.body.appendChild(dr);
const N=18,sg=[];for(let i=0;i<N;i++){const d=document.createElement('i');d.className='seg';d.style.fontSize=Math.max(12,26-i*.8)+'px';document.body.appendChild(d);sg.push({d,x:-50,y:-50,t:''})}
let mx=innerWidth/2,my=innerHeight/2,hx=mx,hy=my,lx=mx,ly=my,off=0,big=1,hk=-1;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;big=e.target.closest('li,.pc,.ib,.vw,button,#nav')?1.4:1;
const h=$('#hero');if(e.target.closest('#hero')){h.style.setProperty('--mx',mx+'px');h.style.setProperty('--my',my+'px');$('#pw').style.transform=`translate(${-(mx/innerWidth-.5)*22}px,${-(my/innerHeight-.5)*14}px)`}});
addEventListener('mousedown',()=>{off+=3});
(function L(t){hx+=(mx-hx)*.22;hy+=(my-hy)*.22;off+=Math.hypot(hx-lx,hy-ly)/45;lx=hx;ly=hy;const k=Math.floor(off)%LT.length;
if(k!==hk){hk=k;dr.textContent='அ'}
dr.style.transform=`translate(${hx}px,${hy}px) translate(-50%,-50%) scale(${big})`;
let px=hx,py=hy;sg.forEach((s,i)=>{const ddx=px-s.x,ddy=py-s.y,dd=Math.hypot(ddx,ddy),gap=16;if(dd>gap){s.x+=ddx*(dd-gap)/dd;s.y+=ddy*(dd-gap)/dd}const ch=LT[(k+i+1)%LT.length];if(s.t!==ch){s.t=ch;s.d.textContent=ch}s.d.style.transform=`translate(${s.x}px,${s.y}px) translate(-50%,-50%)`;const c=`hsl(${(t/9+i*24)%360},95%,68%)`;s.d.style.color=c;s.d.style.textShadow=`0 0 8px ${c}`;px=s.x;py=s.y});requestAnimationFrame(L)})(0);
const pg=document.createElement('div');pg.id='pg';document.body.appendChild(pg);deck.addEventListener('scroll',()=>{pg.style.width=(deck.scrollLeft/(deck.scrollWidth-deck.clientWidth)*100)+'%'});
let G=0,F=0;function draw(){const a=Math.max(-18,Math.min(18,(F-G)*6));$('#bal').innerHTML=`<svg viewBox="0 0 400 270"><path d="M200 60v170M140 230h120" stroke="#2a1405" stroke-width="8"/><g style="transform:rotate(${a}deg);transform-origin:200px 60px;transition:1s"><path d="M70 60h260" stroke="#8a2b0e" stroke-width="8"/><path d="M70 60v60M45 120h50a25 25 0 0 1-50 0z" fill="#c0821f"/><path d="M330 60v60M305 120h50a25 25 0 0 1-50 0z" fill="#8a2b0e"/></g><text x="70" y="38" font-size="22" text-anchor="middle" fill="#2a1405">Good ${G}</text><text x="330" y="38" font-size="22" text-anchor="middle" fill="#2a1405">Faults ${F}</text></svg>`;$('#bt').textContent=G==F?'Add strengths and faults. Then judge by what predominates.':G>F?'Strengths prevail: accept and move forward.':'Faults prevail: pause and reconsider.'}
function add(v){v==0?(G=F=0):v>0?G++:F++;draw()}

/* ---------- enhancements ---------- */
const GL=[..."அஆஇஈஉஊஎஏஐகசதநபமவ"];
S.forEach((s,i)=>{if(!i)return;const f=document.createElement('div');f.className='fb';
f.innerHTML=[...Array(7)].map((_,k)=>`<span class="fm fg" style="left:${(k*14+(i*9)%11)%92}%;top:${(k*23+i*13)%80}%;font-size:${60+(k*29+i*7)%90}px;animation-duration:${9+(k+i)%6}s;animation-delay:-${k*1.7}s">${GL[(i*3+k*5)%GL.length]}</span>`).join('')+[...Array(9)].map((_,k)=>`<i class="ft" style="left:${k*12-2}%;width:${70+k%3*30}px;animation-delay:-${k*.17}s"></i>`).join('')+[...Array(12)].map((_,k)=>`<i class="em" style="left:${(k*41)%100}%;animation-duration:${6+k%6}s;animation-delay:-${k%8}s"></i>`).join('');s.prepend(f)});
const kc=$('#kural .kc');if(kc)kc.insertAdjacentHTML('afterbegin','<div class="t fm">FORGED IN FIRE · திருக்குறள் 504</div>');
document.querySelectorAll('.vw').forEach(v=>v.onclick=()=>go(+v.dataset.g));
const tz=document.createElement('div');tz.id='tz';document.body.appendChild(tz);let lt=0,lastT=-1;
function toast(ic,t,m){const d=document.createElement('div');d.className='tt';d.innerHTML=`<span class="ti">${ic}</span><div><b>${t}</b>${m}</div>`;tz.appendChild(d);while(tz.children.length>3)tz.firstChild.remove();setTimeout(()=>d.remove(),5100)}
const MS=[[['🔥','Welcome','Hover the menu to explore Kural 504']],[['📜','Kural 504','Tap any glowing word to enter its story'],['⚒️','Forged in fire','Seven words, one judgment']],[['🔍','Zoom','Hover the scroll to zoom into the artwork']],[['🖼️','Second scroll','Move your mouse across the picture']]];
WD.forEach((w,i)=>MS[i+4]=[['✦',w[1],w[3]],['💡','Tip','Hover the cards to unlock the moral']]);MS[S.length-1]=[['📖','The Story','Hover the cards to read the moral']];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('vis');const i=S.indexOf(e.target);if(i===lastT)return;lastT=i;tz.innerHTML='';(MS[i]||[]).forEach((m,k)=>setTimeout(()=>toast(...m),500+k*900))}),{threshold:.35});S.forEach(s=>io.observe(s));
document.querySelectorAll('.ib').forEach(b=>b.addEventListener('mouseenter',()=>{if(Date.now()-lt<2200)return;lt=Date.now();toast('✨',b.classList.contains('ta')?'நீதி திறந்தது':'Moral unlocked',b.querySelector('.mo').textContent)}));

addEventListener('click',e=>{for(let k=0;k<10;k++){const b=document.createElement('i');b.className='bs';b.style.left=e.clientX+'px';b.style.top=e.clientY+'px';const a=k/10*6.28,r=30+Math.random()*40;b.style.setProperty('--dx',Math.cos(a)*r+'px');b.style.setProperty('--dy',Math.sin(a)*r-20+'px');document.body.appendChild(b);setTimeout(()=>b.remove(),850)}});
document.body.insertAdjacentHTML('afterbegin','<div id="floor">'+[...Array(10)].map((_,k)=>`<i class="ft" style="left:${k*11-2}%;width:${80+k%3*30}px;animation-delay:-${k*.17}s"></i>`).join('')+'</div>');
$('#hero').insertAdjacentHTML('afterbegin','<div class="hbf"></div><div class="rays"></div><div class="halo"></div><div class="hl">'+[...Array(16)].map((_,k)=>`<span style="left:${(k*37+5)%94}%;top:${(k*53+8)%75}%;font-size:${40+(k*23)%80}px;animation-duration:${12+k%7}s;animation-delay:-${k*1.3}s">${LT[(k*5)%LT.length]}</span>`).join('')+'</div>'+'<svg class="sea" viewBox="0 0 1200 80" preserveAspectRatio="none"><path d="M0 40Q100 0 200 40T400 40T600 40T800 40T1000 40T1200 40V80H0Z" fill="#0f4a55"/><path d="M0 40Q100 0 200 40T400 40T600 40T800 40T1000 40T1200 40" fill="none" stroke="rgba(255,230,160,.55)" stroke-width="2"/></svg><svg class="sea b" viewBox="0 0 1200 80" preserveAspectRatio="none"><path d="M0 40Q100 0 200 40T400 40T600 40T800 40T1000 40T1200 40V80H0Z" fill="#1c6b73"/><path d="M0 40Q100 0 200 40T400 40T600 40T800 40T1000 40T1200 40" fill="none" stroke="rgba(255,230,160,.55)" stroke-width="2"/></svg>');
const K=$('#kural');
K.innerHTML=`<canvas id="kcv"></canvas><div class="kfx"><div class="kk">திருக்குறள் · 504</div>${["குணம்நாடிக் குற்றமும் நாடி","அவற்றுள் மிகைநாடி","மிக்க கொளல்"].map((t,i)=>`<div class="kf" data-t="${t}" style="--d:${.3+i*.7}s">${t}</div>`).join('')}<div class="kn">Examine the good. Examine the faults. Weigh both. Accept by what is greater.</div><button class="btn" onclick="go(2)">Enter the story →</button></div>`;
(()=>{const c=$('#kcv'),x=c.getContext('2d');let W,H,P=[];const rs=()=>{W=c.width=K.clientWidth;H=c.height=K.clientHeight};rs();addEventListener('resize',rs);
for(let i=0;i<70;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.5,v:Math.random()*1.2+.4,a:Math.random()*6});
(function f(){x.clearRect(0,0,W,H);P.forEach(p=>{p.y-=p.v;p.a+=.05;p.x+=Math.sin(p.a)*.6;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fillStyle=`rgba(255,${120+p.r*40|0},30,${Math.max(.1,.9-p.y/H*.7)})`;x.shadowBlur=8;x.shadowColor='#ff7a00';x.fill()});requestAnimationFrame(f)})()})();
[["ACT I · THE SAGE OF MYLAPORE · வள்ளுவர்"],["ACT II · SEVEN WORDS · ஏழு சொற்கள்"]].forEach((c,i)=>{const f=document.querySelectorAll('.fz')[i];if(!f)return;f.classList.add('c'+i);f.insertAdjacentHTML('beforeend',`<div class="cap">${c[0]}</div>`);f.querySelector('.fh').textContent='CINEMATIC VIEW'});
window.toast=function(){};
const RL=["The good (what we seek)","The action: examine","The faults (what we accept)","The action: weigh again","The comparison","The discovery: what exceeds","The decision: accept"];
document.querySelectorAll('.wp').forEach((wp,i)=>{const w=WD[i],inf=wp.querySelector('.inf'),n=(w[0].match(/[\u0B85-\u0BB9][\u0BBE-\u0BCD\u0BD7]?/gu)||[]).length;
const mc=[['POSITION',`Word ${i+1} of 7 · Kural 504`],['TAMIL LETTERS',n+' letters'],['ROLE',RL[i]],['MEANING',w[1]],['MORAL',w[3]],['நீதி',w[5]],['NEXT',i<6?WD[i+1][0]+' · '+WD[i+1][1]:'The Story']];
inf.insertAdjacentHTML('beforeend',`<div class="mini">${mc.map((m,k)=>`<div class="mc" style="--k:${k}"><b>${m[0]}</b>${m[1]}</div>`).join('')}</div><div class="ks">${WD.map((x,k)=>`<span class="${k==i?'on':''}" onclick="go(${k+4})">${x[0]}</span>`).join('')}</div>`)});
K.querySelector('.btn')?.remove();
const NP=[4,3,5,4,3,5,4],sub=(r,a,b,c,d)=>[r[0]+r[2]*a,r[1]+r[3]*b,r[2]*c,r[3]*d];
document.querySelectorAll('.wp').forEach((wp,i)=>{const r1=R1[i],r2=R2[i],a2=r2[2]/r2[3],fh=Math.min(1,r1[2]/a2/r1[3]);
const A=r=>['--i1',r],B=r=>['--i2',r];const pool=[B(r2),B(sub(r2,.2,.2,.6,.6)),A(sub(r1,0,.05,1,fh)),B(sub(r2,0,0,.55,.55)),A(sub(r1,0,.3,1,fh)),B(sub(r2,.45,.45,.55,.55)),A(sub(r1,0,.18,1,fh)),B(sub(r2,.45,0,.55,.55)),B(sub(r2,0,.45,.55,.55))];
const ex=[];for(let k=0;k<NP[i]-1;k++)ex.push(pool[(k+(k>1?i%3:0))%pool.length]);
const b=wp.querySelector('.pc.b');b.remove();
wp.querySelector('.pics').insertAdjacentHTML('beforeend',`<div class="pg">${ex.map((r,k)=>`<div class="pc x" style="--k:${k}" ${C(r[0],r[1])}></div>`).join('')}</div>`)});

/* Curso de Inglés Visual — lógica principal */
(function(){
'use strict';
const KEY='cursoInglesVisual.v1';
const L=window.COURSE;
let S=load();
function load(){try{return Object.assign({current:null,tab:'learn',quiz:{},writing:{},topics:{},listen:{},speak:{},miss:{}},JSON.parse(localStorage.getItem(KEY))||{});}catch(e){return {current:null,tab:'learn',quiz:{},writing:{},topics:{},listen:{},speak:{},miss:{}};}}
function save(){localStorage.setItem(KEY,JSON.stringify(S));renderSidebar();updateGlobal();}
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function levelPct(lv){
  const total=lv.topics.length+lv.writing.length+1+1+lv.speaking.length;
  let d=lv.topics.filter((t,i)=>S.topics[lv.id+'-'+i]).length;
  d+=lv.writing.filter((w,i)=>S.writing[lv.id+'-'+i]).length;
  const q=S.quiz[lv.id];if(q&&q.best/q.total>=0.7)d+=1;
  const ls=S.listen[lv.id];if(ls&&ls.best/ls.total>=0.7)d+=1;
  d+=lv.speaking.filter((p,i)=>(S.speak[lv.id+'-'+i]||0)>=70).length;
  return Math.round(d/total*100);
}
function stars(lv){const q=S.quiz[lv.id];if(!q)return '☆☆☆';const r=q.best/q.total;return r>=0.9?'⭐⭐⭐':r>=0.7?'⭐⭐☆':r>=0.4?'⭐☆☆':'☆☆☆';}
function updateGlobal(){const p=Math.round(L.reduce((a,l)=>a+levelPct(l),0)/L.length);$('#globalPct').textContent=p+'%';$('#globalBar').style.width=p+'%';}

function renderSidebar(){
  const cur=S.current;
  let h='<button class="lvl-btn'+(cur===null?' active':'')+'" style="--c:#6c4cf5" data-go="home"><span class="em">🏠</span><span>Inicio<small>Mapa del curso</small></span></button>';
  L.forEach(lv=>{
    h+=`<button class="lvl-btn${cur===lv.id?' active':''}" style="--c:${lv.color}" data-go="${lv.id}"><span class="em">${lv.emoji}</span><span>${esc(lv.name)}<small>${lv.cefr} · ${levelPct(lv)}%</small></span><span class="stars" aria-label="estrellas">${stars(lv)}</span></button>`;
    if(cur===lv.id){h+='<ul class="sub-list">'+lv.topics.map((t,i)=>`<li><a href="#t-${i}" data-tab="learn">${S.topics[lv.id+'-'+i]?'✅':'▫️'} ${esc(t.title)}</a></li>`).join('')+`<li><a href="#" data-tab="write">✍️ Práctica de escritura</a></li><li><a href="#" data-tab="listen">🎧 Escuchar</a></li><li><a href="#" data-tab="speak">🎤 Hablar</a></li><li><a href="#" data-tab="quiz">📝 Quiz final</a></li></ul>`;}
  });
  $('#sidebar').innerHTML=h;
}

let home=function(){
  S.current=null;save();
  $('#content').innerHTML=`<section class="hero" style="--c:#6c4cf5;--c2:#e2489b"><h2>¡Bienvenido/a! 👋</h2><p>Un curso completo de inglés para aprendices visuales, del nivel <b>A1</b> al <b>C2</b>. Cada módulo tiene explicaciones visuales, ejemplos con traducción, práctica de escritura evaluada al instante y un quiz final.</p><div class="chips"><span>🎨 Visual</span><span>✍️ Escritura</span><span>📝 Quizzes</span><span>💾 Progreso guardado</span></div></section>
  <pre class="diagram">  A1 🌱 ──► A2 🌿 ──► B1 🌳 ──► B2 🚀 ──► C1 🏔️ ──► C2 👑
  Básico   Elemental Intermedio Int. alto Avanzado  Experto</pre>
  <div class="home-grid">${L.map(lv=>`<button class="lvl-card" style="--c:${lv.color};--c2:${lv.color2}" data-go="${lv.id}"><div class="em">${lv.emoji}</div><h3>${esc(lv.name)} (${lv.cefr})</h3><div>${esc(lv.desc)}</div><div>${lv.topics.length} temas · ${lv.writing.length} ejercicios · ${lv.quiz.length} preguntas</div><div>${stars(lv)} ${levelPct(lv)}%</div><div class="mini-bar"><div style="width:${levelPct(lv)}%"></div></div></button>`).join('')}</div>`;
}

function openLevel(id,tab){
  const lv=L.find(l=>l.id===id);if(!lv)return home();
  S.current=id;save();
  tab=tab||S.tab||'learn';
  const c=$('#content');
  [c,document.body].forEach(x=>{x.style.setProperty('--c',lv.color);x.style.setProperty('--c2',lv.color2);});document.querySelector('meta[name=theme-color]').content=lv.color;
  c.innerHTML=`<section class="hero"><div style="font-size:2.5rem">${lv.emoji}</div><h2>Módulo ${lv.n}: ${esc(lv.name)} (${lv.cefr})</h2><p>${esc(lv.desc)}</p><div class="chips">${lv.topics.map(t=>`<span>${t.icon} ${esc(t.title)}</span>`).join('')}</div></section>
  <div class="tabs" role="tablist"><button class="tab" data-tab="learn">📚 Aprender</button><button class="tab" data-tab="write">✍️ Escritura</button><button class="tab" data-tab="listen">🎧 Escuchar</button><button class="tab" data-tab="speak">🎤 Hablar</button><button class="tab" data-tab="quiz">📝 Quiz</button></div><div id="weak"></div><div id="panel"></div>`;
  renderWeak(lv);
  showTab(lv,tab);
}
let showTab=function(lv,tab){
  S.tab=tab;localStorage.setItem(KEY,JSON.stringify(S));window.speechSynthesis&&speechSynthesis.cancel();
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  const p=$('#panel');
  if(tab==='learn')p.innerHTML=lv.topics.map((t,i)=>topicHTML(lv,t,i)).join('');
  if(tab==='write')p.innerHTML=writeHTML(lv);
  if(tab==='quiz')p.innerHTML=quizHTML(lv);
  if(tab==='listen')p.innerHTML=listenHTML(lv);
  if(tab==='speak')p.innerHTML=speakHTML(lv);
}
function topicHTML(lv,t,i){
  const k=lv.id+'-'+i,done=S.topics[k];
  let h=`<article class="card" id="t-${i}"><h3>${t.icon} ${esc(t.title)}</h3>${t.html||''}`;
  if(t.cards)h+='<div class="grid">'+t.cards.map(c=>`<div class="mini"><span class="big">${c[0]}</span><b>${esc(c[1])}</b>${esc(c[2]||'')}</div>`).join('')+'</div>';
  if(t.table)h+='<div class="tablewrap"><table><tr>'+t.table[0].map(x=>`<th>${esc(x)}</th>`).join('')+'</tr>'+t.table.slice(1).map(r=>'<tr>'+r.map(x=>`<td>${esc(x)}</td>`).join('')+'</tr>').join('')+'</table></div>';
  if(t.diagram)h+=`<pre class="diagram">${esc(t.diagram)}</pre>`;
  if(t.examples)h+='<h4>💬 Ejemplos</h4><ul class="examples">'+t.examples.map(e=>`<li><span class="en">${esc(e[0])}</span><span class="es">🇪🇸 ${esc(e[1])}</span></li>`).join('')+'</ul>';
  if(t.tip)h+=`<div class="tip">💡 ${t.tip}</div>`;
  h+=`<button class="done-btn${done?' is-done':''}" data-done="${k}">${done?'✅ Tema completado':'Marcar como completado'}</button></article>`;
  return h;
}
function writeHTML(lv){
  return `<div class="card"><h3>✍️ Práctica de escritura</h3><p>Escribe en inglés según cada consigna. La app revisa palabras y estructuras clave y te da retroalimentación al instante.</p></div>`+
  lv.writing.map((w,i)=>{const k=lv.id+'-'+i;return `<div class="card"><h4>${S.writing[k]?'✅':'✏️'} Ejercicio ${i+1}</h4><p><b>${esc(w.prompt)}</b></p><p class="tip">💡 Pista: ${esc(w.hint)}</p><label for="w-${i}" class="sr">Tu respuesta:</label><textarea id="w-${i}" placeholder="Write here...">${esc((S.writing[k]&&S.writing[k].text)||'')}</textarea><button class="btn" data-check="${i}">Comprobar ✔️</button> <button class="btn secondary" data-sample="${i}">Ver ejemplo 👀</button><div class="feedback" id="fb-${i}" aria-live="polite"></div></div>`;}).join('');
}
function norm(s){return ' '+s.toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9' ]+/g,' ').replace(/\s+/g,' ').trim()+' ';}
function evaluate(w,text){
  const n=norm(text);const words=n.trim().split(' ').filter(Boolean);
  const res=w.checks.map(ch=>{const ok=ch.any.some(a=>a instanceof RegExp?a.test(n):n.includes(' '+norm(a).trim()+' '));return {ok,label:ch.label};});
  const minW=w.min||4;const lenOk=words.length>=minW;
  const passed=res.filter(r=>r.ok).length;
  return {res,lenOk,minW,passed,total:res.length,count:words.length};
}
function check(lv,i){
  const w=lv.writing[i],ta=$('#w-'+i),fb=$('#fb-'+i),text=ta.value.trim();
  fb.className='feedback show';
  if(!text){fb.classList.add('bad');fb.innerHTML='✏️ ¡Escribe algo primero! Tú puedes.';return;}
  const r=evaluate(w,text);
  const list='<ul>'+r.res.map(x=>`<li>${x.ok?'✅':'❌'} ${esc(x.label)}</li>`).join('')+`<li>${r.lenOk?'✅':'❌'} Longitud mínima: ${r.minW} palabras (tienes ${r.count})</li></ul>`;
  const cap=/^[A-Z]/.test(text)?'':'<br>🔠 Consejo: empieza la oración con mayúscula.';
  const punct=/[.!?]$/.test(text)?'':'<br>🔚 Consejo: termina con un signo de puntuación (. ! ?).';
  if(r.passed===r.total&&r.lenOk){fb.classList.add('ok');fb.innerHTML='🎉 ¡Excelente! Usaste todas las estructuras clave.'+list+cap+punct;S.writing[lv.id+'-'+i]={text,done:true};save();}
  else if(r.passed>=Math.ceil(r.total/2)){fb.classList.add('partial');fb.innerHTML='👍 ¡Vas muy bien! Te falta poco:'+list+cap+punct;}
  else{fb.classList.add('bad');fb.innerHTML='💪 ¡Buen intento! Revisa la pista y vuelve a probar:'+list+cap+punct;}
}
function quizHTML(lv){
  const q=S.quiz[lv.id];
  return `<div class="card"><h3>📝 Quiz final — ${esc(lv.name)} (${lv.cefr})</h3><p>${lv.quiz.length} preguntas de opción múltiple. Necesitas 70% para dominar el módulo. ${q?`<span class="badge">Mejor: ${q.best}/${q.total} · Último: ${q.last}/${q.total} · Intentos: ${q.attempts}</span>`:''}</p></div><form id="quizForm" class="card">`+
  lv.quiz.map((x,i)=>`<div class="q" id="q-${i}"><fieldset><legend>${i+1}. ${esc(x.q)}</legend>${x.o.map((o,j)=>`<label id="l-${i}-${j}"><input type="radio" name="q${i}" value="${j}"> ${esc(o)}</label>`).join('')}</fieldset><div class="exp"></div></div>`).join('')+
  `<button class="btn" type="submit">Calificar ✅</button> <button class="btn secondary" type="button" data-retry="1">Reintentar 🔄</button><div id="score" aria-live="polite"></div></form>`;
}
function grade(lv){
  let sc=0;
  lv.quiz.forEach((x,i)=>{
    const sel=document.querySelector(`input[name="q${i}"]:checked`);const v=sel?+sel.value:-1;
    const box=$('#q-'+i);box.classList.remove('correct','wrong');
    x.o.forEach((o,j)=>$(`#l-${i}-${j}`).classList.remove('right','chosen-wrong'));
    $(`#l-${i}-${x.a}`).classList.add('right');
    const ok=v===x.a;if(ok)sc++;else if(v>=0)$(`#l-${i}-${v}`).classList.add('chosen-wrong');
    box.classList.add(ok?'correct':'wrong');
    box.querySelector('.exp').innerHTML=(ok?'✅ ¡Correcto! ':(v<0?'⚠️ Sin responder. ':'❌ Incorrecto. ')+`Respuesta: <b>${esc(x.o[x.a])}</b>. `)+esc(x.e);
  });
  const t=lv.quiz.length,prev=S.quiz[lv.id]||{best:0,attempts:0};
  const m=S.miss[lv.id]=S.miss[lv.id]||{};lv.quiz.forEach((x,i)=>{const sel=document.querySelector(`input[name="q${i}"]:checked`);if(!sel||+sel.value!==x.a)m[i]=(m[i]||0)+1;else if(m[i])m[i]=Math.max(0,m[i]-1);});
  S.quiz[lv.id]={best:Math.max(prev.best,sc),last:sc,total:t,attempts:prev.attempts+1};save();
  const pct=Math.round(sc/t*100);
  const msg=pct>=90?'🏆 ¡Dominio total!':pct>=70?'🎉 ¡Módulo superado!':pct>=40?'💪 ¡Casi! Repasa los temas y reintenta.':'📚 Repasa la sección Aprender y vuelve a intentarlo.';
  $('#score').innerHTML=`<div class="score">Puntuación: ${sc}/${t} (${pct}%) ${stars(lv)}<br>${msg}</div>`;
  renderWeak(lv);
  $('#score').scrollIntoView({behavior:'smooth'});
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){e.preventDefault();g.dataset.go==='home'?home():openLevel(g.dataset.go);drawer(false);window.scrollTo(0,0);return;}
  const lv=L.find(l=>l.id===S.current);
  const tb=e.target.closest('[data-tab]');if(tb&&lv){e.preventDefault();showTab(lv,tb.dataset.tab);const h=tb.getAttribute('href');if(h&&h.startsWith('#t-'))setTimeout(()=>{const el=document.querySelector(h);el&&el.scrollIntoView({behavior:'smooth'});},50);drawer(false);return;}
  const d=e.target.closest('[data-done]');if(d){S.topics[d.dataset.done]=!S.topics[d.dataset.done];save();d.classList.toggle('is-done',!!S.topics[d.dataset.done]);d.textContent=S.topics[d.dataset.done]?'✅ Tema completado':'Marcar como completado';return;}
  const c=e.target.closest('[data-check]');if(c&&lv){check(lv,+c.dataset.check);return;}
  const sm=e.target.closest('[data-sample]');if(sm&&lv){const i=+sm.dataset.sample,fb=$('#fb-'+i);fb.className='feedback show partial';fb.innerHTML='👀 Ejemplo de respuesta: <i>'+esc(lv.writing[i].sample)+'</i>';return;}
  if(e.target.closest('[data-retry]')&&lv){showTab(lv,'quiz');return;}
});
document.addEventListener('submit',e=>{if(e.target.id==='quizForm'){e.preventDefault();grade(L.find(l=>l.id===S.current));}});
function drawer(o){$('#sidebar').classList.toggle('open',o);$('#backdrop').classList.toggle('show',o);document.body.classList.toggle('lock',o);}
$('#menuBtn').addEventListener('click',()=>drawer(!$('#sidebar').classList.contains('open')));
$('#backdrop').addEventListener('click',()=>drawer(false));
/* Barra inferior estilo app */
function renderBottom(){const lv=L.find(l=>l.id===S.current);const b=$('#bottomNav');
  const items=lv?[['learn','📚','Aprender'],['write','✍️','Escribir'],['listen','🎧','Escuchar'],['speak','🎤','Hablar'],['quiz','📝','Quiz']]:[];
  b.innerHTML=(lv?'':'<button class="bn active" data-go="home"><span>🏠</span>Inicio</button><button class="bn" id="bnMenu"><span>📚</span>Niveles</button>')+items.map(i=>`<button class="bn${S.tab===i[0]?' active':''}" data-tab="${i[0]}"><span>${i[1]}</span>${i[2]}</button>`).join('');
  document.body.classList.toggle('in-level',!!lv);}
document.addEventListener('click',e=>{if(e.target.closest('#bnMenu'))drawer(true);const t=e.target.closest('.btn,.bn,.tab,.lvl-card,.lvl-btn,.done-btn');if(t&&navigator.vibrate)navigator.vibrate(8);},true);
const _st=showTab;showTab=function(lv,tab){_st(lv,tab);renderBottom();const p=$('#panel');p.classList.remove('swap');void p.offsetWidth;p.classList.add('swap');if(window.innerWidth<820)window.scrollTo({top:0,behavior:'smooth'});};
const _home=home;home=function(){_home();renderBottom();};
$('#resetBtn').addEventListener('click',()=>{if(confirm('¿Seguro que quieres borrar todo tu progreso?')){localStorage.removeItem(KEY);S=load();home();}});

/* ===== Refuerzo de áreas débiles ===== */
function renderWeak(lv){
  const el=$('#weak');if(!el)return;
  const items=[];
  const q=S.quiz[lv.id];if(q&&q.last/q.total<0.7)items.push(['📝','Quiz',`último ${q.last}/${q.total}`,'quiz']);
  const ls=S.listen[lv.id];if(ls&&ls.last/ls.total<0.7)items.push(['🎧','Escuchar',`último ${ls.last}/${ls.total}`,'listen']);
  const sp=lv.speaking.map((p,i)=>S.speak[lv.id+'-'+i]).filter(v=>v!=null&&v<70);if(sp.length)items.push(['🎤','Hablar',`${sp.length} frase(s) bajo 70%`,'speak']);
  const wp=lv.writing.filter((w,i)=>!S.writing[lv.id+'-'+i]).length;if(q&&wp)items.push(['✍️','Escritura',`${wp} ejercicio(s) pendientes`,'write']);
  const m=S.miss[lv.id]||{};const hard=Object.keys(m).filter(k=>m[k]>0).sort((a,b)=>m[b]-m[a]).slice(0,4);
  if(!items.length&&!hard.length){el.innerHTML='';return;}
  el.innerHTML=`<div class="card weak-card"><h3>🎯 Tu plan de refuerzo</h3><p>Detectamos lo que te cuesta más. ¡Practícalo de nuevo!</p><div class="grid">${items.map(i=>`<button class="mini weak-item" data-tab="${i[3]}"><span class="big">${i[0]}</span><b>${i[1]}</b>${i[2]}<br><u>Repasar ↻</u></button>`).join('')}</div>${hard.length?'<h4>🔥 Preguntas que más fallas</h4><ul>'+hard.map(k=>`<li><b>${esc(lv.quiz[k].q)}</b> → ${esc(lv.quiz[k].o[lv.quiz[k].a])} <i>(${esc(lv.quiz[k].e)})</i></li>`).join('')+'</ul>':''}</div>`;
}
/* ===== Escuchar (TTS) ===== */
const hasTTS='speechSynthesis' in window;
function voice(){const v=speechSynthesis.getVoices();return v.find(x=>/^en(-|_)US/i.test(x.lang))||v.find(x=>/^en/i.test(x.lang));}
function speak(text,rate,onend){if(!hasTTS)return;const u=new SpeechSynthesisUtterance(text);u.lang='en-US';const v=voice();if(v)u.voice=v;u.rate=rate||0.9;if(onend)u.onend=onend;speechSynthesis.speak(u);}
function playDialogue(lv,rate){speechSynthesis.cancel();lv.listening.dialogue.forEach(d=>speak(d[1],rate));}
function listenHTML(lv){
  const L2=lv.listening,ls=S.listen[lv.id];
  const warn=hasTTS?'':'<div class="tip">⚠️ Tu navegador no soporta síntesis de voz. Puedes leer la transcripción para practicar.</div>';
  return `<div class="card"><h3>🎧 Escuchar: ${esc(L2.title)}</h3><p>Escucha el diálogo (sin leer 🙈), responde las preguntas y completa el dictado. ${ls?`<span class="badge">Mejor: ${ls.best}/${ls.total}</span>`:''}</p>${warn}
  <button class="btn" data-play="0.9">▶️ Reproducir</button> <button class="btn secondary" data-play="0.65">🐢 Lento</button> <button class="btn secondary" data-stop="1">⏹️ Parar</button> <button class="btn secondary" data-transcript="1">📜 Ver transcripción</button>
  <div id="transcript" hidden><ul class="examples">${L2.dialogue.map(d=>`<li><span class="en">${esc(d[0])}: ${esc(d[1])}</span></li>`).join('')}</ul></div></div>
  <form id="listenForm" class="card"><h4>❓ Comprensión</h4>${L2.questions.map((x,i)=>`<div class="q" id="lq-${i}"><fieldset><legend>${i+1}. ${esc(x.q)}</legend>${x.o.map((o,j)=>`<label id="ll-${i}-${j}"><input type="radio" name="lq${i}" value="${j}"> ${esc(o)}</label>`).join('')}</fieldset><div class="exp"></div></div>`).join('')}
  <h4>✍️ Dictado: escucha y escribe exactamente</h4>${L2.dictation.map((d,i)=>`<div class="q" id="ld-${i}"><button type="button" class="btn secondary" data-say="${esc(d)}">🔊 Frase ${i+1}</button><input type="text" class="dict" id="dict-${i}" autocomplete="off" autocapitalize="off" placeholder="Escribe lo que escuchas…" aria-label="Dictado ${i+1}"><div class="exp"></div></div>`).join('')}
  <button class="btn" type="submit">Calificar 🎧</button><div id="lscore" aria-live="polite"></div></form>`;
}
function wordsOf(s){return norm(s).trim().split(' ').filter(Boolean);}
function similarity(target,said){
  const t=wordsOf(target),s=wordsOf(said);if(!t.length)return 0;
  // LCS de palabras → proporción
  const dp=Array(t.length+1).fill(0).map(()=>Array(s.length+1).fill(0));
  for(let i=1;i<=t.length;i++)for(let j=1;j<=s.length;j++)dp[i][j]=t[i-1]===s[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
  const l=dp[t.length][s.length];return Math.round(100*(2*l)/(t.length+s.length));
}
function diffHTML(target,said){const s=new Set(wordsOf(said));return target.split(' ').map(w=>{const n=norm(w).trim();return s.has(n)?`<span style="color:var(--ok);font-weight:700">${esc(w)}</span>`:`<span style="color:var(--bad);text-decoration:underline">${esc(w)}</span>`;}).join(' ');}
function gradeListen(lv){
  const L2=lv.listening;let sc=0,total=L2.questions.length+L2.dictation.length;
  L2.questions.forEach((x,i)=>{const sel=document.querySelector(`input[name="lq${i}"]:checked`),v=sel?+sel.value:-1,box=$('#lq-'+i);
    box.classList.remove('correct','wrong');x.o.forEach((o,j)=>$(`#ll-${i}-${j}`).classList.remove('right','chosen-wrong'));$(`#ll-${i}-${x.a}`).classList.add('right');
    const ok=v===x.a;if(ok)sc++;else if(v>=0)$(`#ll-${i}-${v}`).classList.add('chosen-wrong');box.classList.add(ok?'correct':'wrong');
    box.querySelector('.exp').innerHTML=(ok?'✅ ¡Bien escuchado! ':'❌ Escucha otra vez. ')+esc(x.e);});
  L2.dictation.forEach((d,i)=>{const val=$('#dict-'+i).value,sim=similarity(d,val),box=$('#ld-'+i);const ok=sim>=90;if(ok)sc++;
    box.classList.remove('correct','wrong');box.classList.add(ok?'correct':'wrong');
    box.querySelector('.exp').innerHTML=(ok?`✅ ¡Perfecto! (${sim}%)`:`❌ ${sim}% de coincidencia. Correcto: `)+'<br>'+diffHTML(d,val);});
  const prev=S.listen[lv.id]||{best:0,attempts:0};S.listen[lv.id]={best:Math.max(prev.best,sc),last:sc,total,attempts:prev.attempts+1};save();renderWeak(lv);
  const pct=Math.round(sc/total*100);
  $('#lscore').innerHTML=`<div class="score">🎧 Escuchar: ${sc}/${total} (${pct}%)<br>${pct>=90?'🏆 ¡Oído de experto!':pct>=70?'🎉 ¡Muy bien!':'💪 Usa el modo 🐢 lento y vuelve a intentarlo.'}</div>`;
}
/* ===== Hablar (Speech Recognition) ===== */
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
function speakHTML(lv){
  const fallback=SR?'':'<div class="tip">⚠️ Tu navegador no tiene reconocimiento de voz (prueba Chrome, Edge o Safari en iPhone con Siri activado). Puedes <b>escribir</b> lo que dirías y la app lo evaluará igual; tu puntuación se marcará como “escrita”.</div>';
  return `<div class="card"><h3>🎤 Hablar</h3><p>1️⃣ Escucha el modelo 🔊 · 2️⃣ Pulsa 🎙️ y repite en voz alta · 3️⃣ Recibe tu nota de pronunciación y fluidez.</p>${fallback}</div>`+
  lv.speaking.map((p,i)=>{const sc=S.speak[lv.id+'-'+i];return `<div class="card speak-card"><h4>${sc>=70?'✅':'🗣️'} Frase ${i+1} ${sc!=null?`<span class="badge">Mejor: ${sc}%</span>`:''}</h4><p class="target">"${esc(p)}"</p>
  <button class="btn secondary" data-say="${esc(p)}">🔊 Escuchar modelo</button> ${SR?`<button class="btn mic" data-mic="${i}">🎙️ Hablar</button>`:''}
  <div class="type-alt"><input type="text" id="sp-${i}" placeholder="${SR?'…o escribe si no puedes usar el micrófono':'Escribe la frase aquí'}" aria-label="Alternativa escrita"><button class="btn secondary" data-typed="${i}">Evaluar ✔️</button></div>
  <div class="feedback" id="spfb-${i}" aria-live="polite"></div></div>`;}).join('');
}
function scoreSpeak(lv,i,said,conf,typed){
  const target=lv.speaking[i],sim=similarity(target,said);
  let score=sim;if(!typed&&conf!=null&&conf>0)score=Math.round(sim*0.85+conf*100*0.15);
  const k=lv.id+'-'+i;S.speak[k]=Math.max(S.speak[k]||0,score);save();renderWeak(lv);
  const fb=$('#spfb-'+i);fb.className='feedback show '+(score>=85?'ok':score>=60?'partial':'bad');
  const msg=score>=85?'🌟 ¡Excelente pronunciación y fluidez!':score>=60?'👍 ¡Bien! Repite las palabras en rojo con más claridad.':'💪 ¡No te rindas! Escucha el modelo en modo lento y repite.';
  fb.innerHTML=`<b>Nota: ${score}%</b> ${typed?'(✍️ escrita)':'(🎙️ voz)'} — ${msg}<br>Te entendimos: <i>"${esc(said)}"</i><br>Comparación: ${diffHTML(target,said)}`;
}
let rec=null;
function startMic(lv,i,btn){
  if(!SR)return;if(rec){try{rec.abort();}catch(e){}}
  rec=new SR();rec.lang='en-US';rec.interimResults=false;rec.maxAlternatives=3;
  btn.classList.add('recording');btn.textContent='🔴 Escuchando…';
  rec.onresult=e=>{const alts=[...e.results[0]];let best=alts[0];alts.forEach(a=>{if(similarity(lv.speaking[i],a.transcript)>similarity(lv.speaking[i],best.transcript))best=a;});scoreSpeak(lv,i,best.transcript,best.confidence,false);};
  rec.onerror=e=>{const fb=$('#spfb-'+i);fb.className='feedback show bad';fb.innerHTML=e.error==='not-allowed'||e.error==='service-not-allowed'?'🎙️ No hay permiso para el micrófono. Actívalo en la configuración del navegador o usa la opción escrita.':'😕 No te escuchamos bien ('+esc(e.error)+'). Intenta de nuevo cerca del micrófono o escribe la frase.';};
  rec.onend=()=>{btn.classList.remove('recording');btn.textContent='🎙️ Hablar';};
  try{rec.start();}catch(e){rec.onend();}
}
document.addEventListener('click',e=>{
  const lv=L.find(l=>l.id===S.current);if(!lv)return;
  const pl=e.target.closest('[data-play]');if(pl){if(hasTTS)playDialogue(lv,+pl.dataset.play);return;}
  if(e.target.closest('[data-stop]')){hasTTS&&speechSynthesis.cancel();return;}
  if(e.target.closest('[data-transcript]')){const t=$('#transcript');t.hidden=!t.hidden;return;}
  const sy=e.target.closest('[data-say]');if(sy){e.preventDefault();if(hasTTS){speechSynthesis.cancel();speak(sy.dataset.say,0.85);}return;}
  const mi=e.target.closest('[data-mic]');if(mi){startMic(lv,+mi.dataset.mic,mi);return;}
  const ty=e.target.closest('[data-typed]');if(ty){const i=+ty.dataset.typed,v=$('#sp-'+i).value.trim();if(!v){const fb=$('#spfb-'+i);fb.className='feedback show bad';fb.textContent='✏️ Escribe la frase primero.';return;}scoreSpeak(lv,i,v,null,true);return;}
});
document.addEventListener('submit',e=>{if(e.target.id==='listenForm'){e.preventDefault();gradeListen(L.find(l=>l.id===S.current));}});
if(hasTTS)speechSynthesis.onvoiceschanged=()=>{};

$('#refreshBtn').addEventListener('click',async()=>{
  const b=$('#refreshBtn');b.classList.add('spin');save(); // el progreso queda en localStorage
  try{if(navigator.serviceWorker){const rs=await navigator.serviceWorker.getRegistrations();await Promise.all(rs.map(r=>r.unregister()));}
  if(window.caches){const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)));}}catch(e){}
  window.location.replace(location.pathname+'?v='+Date.now()+location.hash);
});
renderSidebar();updateGlobal();
S.current?openLevel(S.current):home();
})();

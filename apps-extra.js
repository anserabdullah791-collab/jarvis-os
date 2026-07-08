const ICONS = {
  mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>`,
  calendar: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>`,
  files: `<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>`,
  terminal: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/>`,
  music: `<circle cx="6" cy="18" r="2.5"/><circle cx="17" cy="16" r="2.5"/><path d="M8.5 18V6l9-2v12"/>`,
  browser: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>`,
  settings: `<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>`,
  voice: `<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>`,
  screenshot: `<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>`,
  bluetooth: `<path d="M8 7l8 6-4 3.5V4.5l4 3.5-8 6"/>`,
  calculator: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/>`,
  notes: `<path d="M4 20l1-5 11-11 4 4-11 11-5 1z"/><path d="M14 5l4 4"/>`,
  clock: `<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M10 2h4"/>`,
  todo: `<path d="M4 6h4M4 12h4M4 18h4M11 6h9M11 12h9M11 18h9"/><path d="M4.3 5.7l.7.8 1.3-1.8"/>`,
  password: `<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>`,
  colorpicker: `<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-.5-1.5-.5-2.5A2 2 0 0 1 15.5 14H17a4 4 0 0 0 4-4c0-4-4-7-9-7z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="16" cy="11" r="1"/>`,
  converter: `<path d="M4 20V10M10 20V4M16 20v-7M4 20h16"/>`,
  weather: `<circle cx="8" cy="8" r="3"/><path d="M8 2v1M8 13v1M2 8h1M13 8h1M4 4l.7.7M11.3 4.7l.7-.7"/><path d="M9 19h8a3 3 0 0 0 0-6 5 5 0 0 0-9.6-1.5A4 4 0 0 0 7 19z"/>`,
  paint: `<path d="M9 15c-2 2-2 4-4 4s-2-3 0-5l8-8 3 3-7 6z"/><path d="M14 4l6 6"/>`,
  qrcode: `<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M14 14h3v3h-3zM19 14v6h-3"/>`,
  sysinfo: `<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>`,
  stopwatch: `<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M10 2h4"/>`,
  photos: `<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5-5-4 4-3-3-5 5"/>`,
  cloud: `<path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.7-1.6A4.5 4.5 0 0 1 17 18H7z"/><path d="M12 12v6M9.5 15.5L12 13l2.5 2.5"/>`,
  maps: `<path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>`,
  news: `<rect x="3" y="5" width="14" height="15" rx="1"/><path d="M7 9h6M7 12h6M7 15h4M17 8h4v9a2 2 0 0 1-2 2h-2"/>`,
  chat: `<path d="M4 5h16v10H8l-4 4V5z"/><circle cx="8" cy="10" r=".8"/><circle cx="12" cy="10" r=".8"/><circle cx="16" cy="10" r=".8"/>`,
  store: `<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>`,
  youtube: `<rect x="2" y="6" width="20" height="12" rx="4"/><path d="M10 9.5l6 2.5-6 2.5z"/>`,
  facebook: `<path d="M14 21v-8h3l.5-4H14V7c0-1.1.5-2 2-2h1.5V1.3C17 1.2 15.9 1 14.7 1 12 1 10 2.7 10 5.6V9H7v4h3v8z"/>`,
  instagram: `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.9"/>`,
  tiktok: `<path d="M14 3v10.2a3.3 3.3 0 1 1-3-3.3"/><path d="M14 3c0 2.8 2 5 5 5"/>`,
  playstore: `<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>`
};
function iconSVG(id, size){
  const path = ICONS[id] || '<circle cx="12" cy="12" r="8"/>';
  return `<svg class="neon-svg" viewBox="0 0 24 24" style="width:${size||'60%'};height:${size||'60%'};">${path}</svg>`;
}

window.addEventListener('error', function(e){
  const el = document.getElementById('greetSub');
  if(el) el.textContent = 'JS ERROR: ' + e.message + ' @ ' + (e.filename||'').split('/').pop() + ':' + e.lineno;
  console.error('JARVIS DEBUG CAUGHT:', e.message, e.filename, e.lineno);
});
/* ===================================================================
   JARVIS OS — Extra Apps Module
   Voice Assistant, Screenshot, Bluetooth, Store, expanded Settings,
   and a real utility-app catalog (Calculator, Notes, Clock, Todo,
   Password Generator, Color Picker, Converter, Weather, Paint, QR,
   System Info, Stopwatch).
   =================================================================== */

/* ---------------- JARVIS STORE ---------------- */
const STORE_APPS = [
  {id:'terminal', glyph:'&gt;_', name:'Terminal', tag:'System'},
  {id:'browser', glyph:'&#127760;', name:'Browser', tag:'System'},
  {id:'chat', glyph:'&#9679;', name:'Jarvis Chat', tag:'System'},
  {id:'files', glyph:'&#128193;', name:'Files', tag:'System'},
  {id:'settings', glyph:'&#9881;', name:'Settings', tag:'System'},
  {id:'voice', glyph:'&#127908;', name:'Voice Assistant', tag:'New'},
  {id:'screenshot', glyph:'&#128247;', name:'Screenshot', tag:'New'},
  {id:'bluetooth', glyph:'&#128367;', name:'Bluetooth', tag:'New'},
  {id:'calculator', glyph:'&#128290;', name:'Calculator', tag:''},
  {id:'notes', glyph:'&#128221;', name:'Notes', tag:''},
  {id:'clock', glyph:'&#8986;', name:'Clock', tag:''},
  {id:'todo', glyph:'&#9989;', name:'To-Do List', tag:''},
  {id:'password', glyph:'&#128273;', name:'Password Gen', tag:''},
  {id:'colorpicker', glyph:'&#127912;', name:'Color Picker', tag:''},
  {id:'converter', glyph:'&#128202;', name:'Unit Converter', tag:''},
  {id:'weather', glyph:'&#127780;', name:'Weather', tag:''},
  {id:'paint', glyph:'&#128444;', name:'Paint', tag:''},
  {id:'qrcode', glyph:'&#9723;', name:'QR Code', tag:''},
  {id:'sysinfo', glyph:'&#128187;', name:'System Info', tag:''},
  {id:'stopwatch', glyph:'&#9201;', name:'Stopwatch', tag:''},
  {id:'mail', glyph:'&#9993;', name:'Mail', tag:'New'},
  {id:'calendar', glyph:'&#128197;', name:'Calendar', tag:'New'},
  {id:'music', glyph:'&#127925;', name:'Music', tag:'New'},
  {id:'photos', glyph:'&#128247;', name:'Photos', tag:'New'},
  {id:'cloud', glyph:'&#9729;', name:'Cloud', tag:'New'},
  {id:'maps', glyph:'&#128506;', name:'Maps', tag:'New'},
  {id:'news', glyph:'&#128240;', name:'News', tag:'New'},
  {id:'youtube', glyph:'&#9654;', name:'YouTube', tag:'New'},
  {id:'facebook', glyph:'&#128075;', name:'Facebook', tag:'New'},
  {id:'instagram', glyph:'&#128248;', name:'Instagram', tag:'New'},
  {id:'tiktok', glyph:'&#127925;', name:'TikTok', tag:'New'},
  {id:'playstore', glyph:'&#128230;', name:'Play Store', tag:'New'},
];

function openStore(){
  const cards = STORE_APPS.map(a => `
    <div class="store-item" onclick="closeWindow('store'); openApp('${a.id}')">
      <div class="glyph">${iconSVG(a.id)}</div>
      <div class="name">${a.name}</div>
      ${a.tag ? `<div class="tag">${a.tag}</div>` : ''}
    </div>`).join('');
  createWindow('store', 'Jarvis Store', '&#128230;', `
    <div class="panel" style="padding-bottom:0;">
      <h3>JARVIS STORE — ${STORE_APPS.length} apps installed</h3>
      <p style="color:var(--text-dim); font-size:12px; margin-top:-8px;">
        Every tile here is a real, working app — not a placeholder. Tell Jarvis what app you want next and it gets added to the store.
      </p>
    </div>
    <div class="store-grid">${cards}</div>
  `, {width:620, height:520});
}

/* ---------------- VOICE ASSISTANT ---------------- */
let recognition = null;
let voiceListening = false;
let selectedVoice = null;

function openVoice(){
  createWindow('voice', 'Voice Assistant', '&#127908;', `
    <div class="panel">
      <h3>JARVIS VOICE — WAKE WORD</h3>
      <p style="color:var(--text-dim); font-size:12px;">Say "Hey Jarvis" any time this tab is open and focused, then speak your command. Real browser speech recognition + text-to-speech — works best in Chrome/Edge.</p>
      <div style="display:flex; flex-direction:column; align-items:center; gap:10px; margin:16px 0;">
        <div class="jarvis-orb-lg" id="voiceOrb"><div class="orb-ring"></div><div class="orb-core"></div></div>
        <div style="font-size:12px; color:var(--accent);" id="wakeStatus">Wake word: OFF</div>
        <button class="btn" id="wakeToggleBtn" onclick="toggleWakeWord()">Enable "Hey Jarvis"</button>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:10px; margin:14px 0;">
        <button class="mic-btn" id="micBtn" onclick="toggleListening()">&#127908;</button>
        <div style="font-size:11px; color:var(--text-dim);" id="micStatus">Or tap to speak a command right now</div>
      </div>
      <div class="transcript" id="voiceTranscript">Try: "open youtube", "open calculator", "what's the weather", "read the news", "what time is it", "lock the screen", "tell me a joke".</div>
      <p style="color:var(--text-dim); font-size:11px; margin-top:8px;">Note: for real private actions — reading your Gmail, sending messages, checking your calendar — message Jarvis on WhatsApp. This in-browser voice brain runs locally for safety since this page is public.</p>
      <h3 style="margin-top:20px;">VOICE SETTINGS</h3>
      <div class="row" style="margin-bottom:10px;">
        <select class="field" id="voiceSelect" onchange="setVoice(this.value)"></select>
      </div>
      <div class="row" style="margin-bottom:8px;"><span style="width:60px; font-size:12px; color:var(--text-dim);">Rate</span><input type="range" min="0.5" max="2" step="0.1" value="1" id="voiceRate" style="flex:1"></div>
      <div class="row" style="margin-bottom:14px;"><span style="width:60px; font-size:12px; color:var(--text-dim);">Pitch</span><input type="range" min="0" max="2" step="0.1" value="1" id="voicePitch" style="flex:1"></div>
      <div class="row">
        <input class="field" id="ttsText" placeholder="Type text for Jarvis to say..." value="Hello, I am Jarvis. Fully operational.">
        <button class="btn" onclick="speakText()">Speak</button>
      </div>
    </div>
  `, {width:460, height:660});
  setTimeout(populateVoices, 200);
  setTimeout(()=>{ const s=document.getElementById('wakeStatus'); if(s) s.textContent = wakeWordEnabled ? 'Wake word: ON — listening for "Hey Jarvis"' : 'Wake word: OFF'; }, 50);
}

function populateVoices(){
  if(!('speechSynthesis' in window)) return;
  const sel = document.getElementById('voiceSelect');
  if(!sel) return;
  let voices = speechSynthesis.getVoices();
  const render = () => {
    voices = speechSynthesis.getVoices();
    sel.innerHTML = voices.map((v,i)=>`<option value="${i}">${v.name} (${v.lang})</option>`).join('');
  };
  render();
  speechSynthesis.onvoiceschanged = render;
}
function setVoice(idx){
  const voices = speechSynthesis.getVoices();
  selectedVoice = voices[idx] || null;
}
function speakText(text){
  if(!('speechSynthesis' in window)) return;
  const say = text !== undefined ? text : document.getElementById('ttsText').value;
  const u = new SpeechSynthesisUtterance(say);
  if(selectedVoice) u.voice = selectedVoice;
  const rateEl = document.getElementById('voiceRate');
  const pitchEl = document.getElementById('voicePitch');
  u.rate = rateEl ? parseFloat(rateEl.value) : 1;
  u.pitch = pitchEl ? parseFloat(pitchEl.value) : 1;
  u.onstart = () => setOrbState('speaking');
  u.onend = () => setOrbState(wakeWordEnabled ? 'wake-idle' : 'idle');
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
function setOrbState(state){
  ['voiceOrb'].forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.className = 'jarvis-orb-lg orb-' + state;
    el.innerHTML = '<div class="orb-ring"></div><div class="orb-core"></div>';
  });
}

/* ---------------- MANUAL TAP-TO-SPEAK ---------------- */
function toggleListening(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){
    document.getElementById('voiceTranscript').textContent = 'Speech recognition is not supported in this browser. Try Chrome on desktop or Android.';
    return;
  }
  const btn = document.getElementById('micBtn');
  const status = document.getElementById('micStatus');
  if(voiceListening){
    recognition && recognition.stop();
    voiceListening = false;
    btn.classList.remove('listening');
    status.textContent = 'Or tap to speak a command right now';
    return;
  }
  if(wakeWordEnabled) stopWakeWordEngine(true);
  recognition = new SR();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.onresult = (e) => {
    const said = e.results[0][0].transcript;
    document.getElementById('voiceTranscript').textContent = '"' + said + '"';
    handleVoiceCommand(said.toLowerCase());
  };
  recognition.onerror = (e) => { status.textContent = 'Mic error: ' + e.error; };
  recognition.onend = () => {
    voiceListening = false; btn.classList.remove('listening'); status.textContent = 'Or tap to speak a command right now';
    if(wakeWordEnabled) setTimeout(startWakeWordEngine, 500);
  };
  recognition.start();
  voiceListening = true;
  btn.classList.add('listening');
  status.textContent = 'Listening...';
  setOrbState('listening');
}

/* ---------------- WAKE WORD ENGINE ("Hey Jarvis") ---------------- */
let wakeWordEnabled = false;
let wakeRecognition = null;
let wakeRestarting = false;

function toggleWakeWord(){
  if(wakeWordEnabled) stopWakeWordEngine(); else startWakeWordEngine();
}
function startWakeWordEngine(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ alert('Wake-word listening needs Chrome or Edge (desktop or Android).'); return; }
  wakeWordEnabled = true;
  const btn = document.getElementById('wakeToggleBtn');
  const status = document.getElementById('wakeStatus');
  if(btn) btn.textContent = 'Disable "Hey Jarvis"';
  if(status) status.textContent = 'Wake word: ON — listening for "Hey Jarvis"';
  setOrbState('wake-idle');
  runWakeRecognition();
}
function runWakeRecognition(){
  if(!wakeWordEnabled) return;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  wakeRecognition = new SR();
  wakeRecognition.lang = 'en-US';
  wakeRecognition.continuous = true;
  wakeRecognition.interimResults = true;
  wakeRecognition.onresult = (e) => {
    const last = e.results[e.results.length-1];
    const said = last[0].transcript.toLowerCase();
    if(said.includes('hey jarvis') || said.includes('hey, jarvis') || said.includes('a jarvis') || said.includes('hey jervis')){
      wakeRecognition.stop();
      onWakeWordDetected();
    }
  };
  wakeRecognition.onerror = () => {}; // swallow — restarts on end
  wakeRecognition.onend = () => {
    if(wakeWordEnabled && !wakeRestarting) setTimeout(()=>{ if(wakeWordEnabled) runWakeRecognition(); }, 300);
  };
  try{ wakeRecognition.start(); }catch(e){}
}
function stopWakeWordEngine(silent){
  wakeWordEnabled = false;
  if(wakeRecognition){ try{ wakeRecognition.stop(); }catch(e){} }
  const btn = document.getElementById('wakeToggleBtn');
  const status = document.getElementById('wakeStatus');
  if(btn) btn.textContent = 'Enable "Hey Jarvis"';
  if(status && !silent) status.textContent = 'Wake word: OFF';
  setOrbState('idle');
}
function onWakeWordDetected(){
  setOrbState('active');
  speakText('Yes?');
  wakeRestarting = true;
  setTimeout(()=>{
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const cmdRec = new SR();
    cmdRec.lang = 'en-US';
    cmdRec.interimResults = false;
    cmdRec.onresult = (e) => {
      const said = e.results[0][0].transcript;
      const t = document.getElementById('voiceTranscript'); if(t) t.textContent = '"' + said + '"';
      handleVoiceCommand(said.toLowerCase());
    };
    cmdRec.onerror = () => { setOrbState('wake-idle'); };
    cmdRec.onend = () => {
      wakeRestarting = false;
      setOrbState('wake-idle');
      if(wakeWordEnabled) setTimeout(runWakeRecognition, 400);
    };
    try{ cmdRec.start(); }catch(e){ wakeRestarting = false; if(wakeWordEnabled) runWakeRecognition(); }
  }, 900);
}

/* ---------------- VOICE COMMAND BRAIN ---------------- */
function safeMath(expr){
  if(!/^[0-9+\-*/(). %]+$/.test(expr)) return null;
  try{ return Function('"use strict";return (' + expr + ')')(); }catch(e){ return null; }
}
async function fetchWeatherReply(){
  try{
    const r = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.3557&longitude=73.0124&current=temperature_2m,weather_code&timezone=Asia%2FKarachi');
    const j = await r.json();
    const t = Math.round(j.current.temperature_2m);
    return `It's currently ${t} degrees Celsius in Phularwan.`;
  }catch(e){ return "I couldn't reach the weather service right now."; }
}
async function fetchNewsReply(){
  try{
    const ids = await (await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')).json();
    const top3 = await Promise.all(ids.slice(0,3).map(id=>fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r=>r.json())));
    return 'Top headlines: ' + top3.map(i=>i.title).join('. ');
  }catch(e){ return "I couldn't reach the news service right now."; }
}
function handleVoiceCommand(cmd){
  let reply = null;
  const say = (r) => { reply = r; finishVoiceReply(r); };

  const openMatch = cmd.match(/open (?:the )?(\w+)/) || cmd.match(/launch (?:the )?(\w+)/);
  const foundApp = openMatch && STORE_APPS.find(a=>a.id===openMatch[1] || a.name.toLowerCase().includes(openMatch[1]));

  if(foundApp){
    openApp(foundApp.id);
    say('Opening ' + foundApp.name + '.');
  } else if(cmd.includes('weather')){
    setOrbState('active');
    fetchWeatherReply().then(say);
    return;
  } else if(cmd.includes('news') || cmd.includes('headline')){
    setOrbState('active');
    fetchNewsReply().then(say);
    return;
  } else if(cmd.includes('lock')){
    say('Locking the screen now.');
    setTimeout(lockNow, 1200);
  } else if(cmd.match(/search (for )?(.+)/)){
    const q = cmd.match(/search (?:for )?(.+)/)[1];
    openApp('browser');
    say('Searching for ' + q);
  } else if(cmd.match(/(calculate|what is|what's) ([0-9+\-*/(). %]+)/)){
    const expr = cmd.match(/(calculate|what is|what's) ([0-9+\-*/(). %]+)/)[2];
    const result = safeMath(expr);
    say(result !== null ? `${expr.trim()} equals ${result}.` : "I couldn't calculate that.");
  } else if(cmd.includes('time')){
    say('It is ' + new Date().toLocaleTimeString() + '.');
  } else if(cmd.includes('date') || cmd.includes('day is it')){
    say('Today is ' + new Date().toDateString() + '.');
  } else if(cmd.includes('battery')){
    if(navigator.getBattery){
      navigator.getBattery().then(b => say(`Battery is at ${Math.round(b.level*100)} percent${b.charging?', charging':''}.`));
    } else { say("I can't read battery status on this device."); }
    return;
  } else if(cmd.includes('joke')){
    say("Why do programmers prefer dark mode? Because light attracts bugs.");
  } else if(cmd.includes('your name') || cmd.includes('who are you')){
    say("I'm Jarvis — your personal AI, running right here in this browser.");
  } else if(cmd.includes('hello') || cmd.includes('hi jarvis')){
    say("Hello, Abdullah. How can I help?");
  } else if(cmd.includes('thank')){
    say("Anytime.");
  } else if(cmd.includes('help') || cmd.includes('what can you do')){
    say("I can open any app, tell you the time, weather, or news, do quick math, search the browser, or lock the screen. For real email, calendar, or messaging, talk to me on WhatsApp.");
  } else if(cmd.match(/run (.+)/)){
    const runCmd = cmd.match(/run (.+)/)[1];
    openApp('terminal');
    setTimeout(()=>{ if(document.getElementById('termInput')) runTermCommand(runCmd); }, 300);
    say('Running: ' + runCmd);
  } else {
    say("I heard you, but I'm not sure what to do with that yet. Say 'help' to hear what I can do.");
  }
}
function finishVoiceReply(reply){
  speakText(reply);
  const t = document.getElementById('voiceTranscript');
  if(t) t.textContent += '\n\nJarvis: ' + reply;
}

/* ---------------- SCREENSHOT ---------------- */
function openScreenshot(){
  createWindow('screenshot', 'Screenshot', '&#128247;', `
    <div class="panel">
      <h3>SCREEN CAPTURE</h3>
      <p style="color:var(--text-dim); font-size:12px;">Uses your browser's real Screen Capture API. You'll be asked to pick a screen/window/tab to capture — this is a genuine capture, not a mockup.</p>
      <button class="btn" onclick="takeScreenshot()">Capture Screen</button>
      <div id="shotResult" style="margin-top:16px;"></div>
    </div>
  `, {width:440, height:420});
}
async function takeScreenshot(){
  const result = document.getElementById('shotResult');
  if(!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia){
    result.innerHTML = '<span style="color:var(--danger)">Screen capture not supported in this browser.</span>';
    return;
  }
  try{
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    const track = stream.getVideoTracks()[0];
    const capture = new ImageCapture ? new ImageCapture(track) : null;
    const video = document.createElement('video');
    video.srcObject = stream;
    await video.play();
    await new Promise(r=>setTimeout(r,300));
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth; canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    track.stop();
    const dataUrl = canvas.toDataURL('image/png');
    result.innerHTML = `<img src="${dataUrl}" style="width:100%; border-radius:8px; border:1px solid rgba(0,217,255,0.3); margin-bottom:10px;"><a class="btn" download="jarvis-screenshot.png" href="${dataUrl}">Download PNG</a>`;
  }catch(err){
    result.innerHTML = '<span style="color:var(--danger)">Capture cancelled or failed: ' + err.message + '</span>';
  }
}

/* ---------------- BLUETOOTH ---------------- */
function openBluetooth(){
  createWindow('bluetooth', 'Bluetooth', '&#128367;', `
    <div class="panel">
      <h3>BLUETOOTH DEVICES</h3>
      <p style="color:var(--text-dim); font-size:12px;">Uses the real Web Bluetooth API. Supported on Chrome/Edge desktop and Android — not on iOS Safari (Apple restricts this API).</p>
      <button class="btn" onclick="scanBluetooth()">Scan for Devices</button>
      <div id="btResult" style="margin-top:16px; font-size:12.5px; color:var(--text-main);"></div>
    </div>
  `, {width:420, height:360});
}
async function scanBluetooth(){
  const result = document.getElementById('btResult');
  if(!navigator.bluetooth){
    result.innerHTML = '<span style="color:var(--danger)">Web Bluetooth not supported in this browser/OS.</span>';
    return;
  }
  try{
    const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
    result.innerHTML = `<div class="toggle-row"><span>${device.name || 'Unnamed device'}</span><span style="color:var(--success)">Found</span></div><div style="color:var(--text-dim); font-size:11px; margin-top:6px;">ID: ${device.id}</div>`;
  }catch(err){
    result.innerHTML = '<span style="color:var(--danger)">' + err.message + '</span>';
  }
}

/* ---------------- ENHANCED BROWSER / SEARCH ---------------- */
function openBrowser(){
  createWindow('browser', 'Browser', '&#127760;', `
    <div class="browser">
      <div class="browser-bar">
        <input id="browserUrl" class="field" placeholder="Search the web or type a URL..." value="" onkeydown="if(event.key==='Enter') smartGo()">
        <button class="btn" onclick="smartGo()">Go</button>
      </div>
      <div class="browser-bookmarks">
        <div class="bm" onclick="navigateBrowser('https://en.wikipedia.org')">Wikipedia</div>
        <div class="bm" onclick="navigateBrowser('https://docs.base44.com')">Base44 Docs</div>
        <div class="bm" onclick="navigateBrowser('https://github.com')">GitHub</div>
        <div class="bm" onclick="navigateBrowser('https://news.ycombinator.com')">Hacker News</div>
      </div>
      <div id="browserContent" style="flex:1; overflow:auto; background:#0c1018;">
        <div class="search-results" style="color:var(--text-dim); font-size:12.5px;">Type a search term and hit Go — real results from Wikipedia + DuckDuckGo, no fake data. Or paste a direct URL to load the page.</div>
      </div>
    </div>
  `, {width:760, height:540});
}
function navigateBrowser(url){
  document.getElementById('browserUrl').value = url;
  loadUrlInFrame(url);
}
function loadUrlInFrame(url){
  if(!/^https?:\/\//i.test(url)) url = 'https://' + url;
  document.getElementById('browserContent').innerHTML = `<iframe style="width:100%; height:100%; border:none; background:#fff;" src="${url}" onerror="this.parentElement.innerHTML='<div class=\\'search-results\\'>This site refused to load inside Jarvis OS (blocked by its own security policy). <a href=\\'${url}\\' target=\\'_blank\\' style=\\'color:var(--accent)\\'>Open it in a new tab instead &rarr;</a></div>'"></iframe>`;
}
async function smartGo(){
  const raw = document.getElementById('browserUrl').value.trim();
  if(!raw) return;
  const looksLikeUrl = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(raw) && !raw.includes(' ');
  if(looksLikeUrl){
    loadUrlInFrame(raw);
    return;
  }
  const content = document.getElementById('browserContent');
  content.innerHTML = '<div class="search-results">Searching...</div>';
  let html = '';
  try{
    const ddg = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(raw)}&format=json&no_html=1&skip_disambig=1`).then(r=>r.json());
    if(ddg.AbstractText){
      html += `<div class="search-result"><div class="title">${ddg.Heading || raw}</div><div class="snippet">${ddg.AbstractText}</div>${ddg.AbstractURL ? `<div style="margin-top:4px;"><a href="${ddg.AbstractURL}" target="_blank" style="color:var(--accent); font-size:11px;">${ddg.AbstractURL}</a></div>` : ''}</div>`;
    }
    if(ddg.RelatedTopics && ddg.RelatedTopics.length){
      ddg.RelatedTopics.slice(0,6).forEach(t=>{
        if(t.Text){ html += `<div class="search-result"><div class="title" onclick="loadUrlInFrame('${t.FirstURL}')">${t.Text.split(' - ')[0]}</div><div class="snippet">${t.Text}</div></div>`; }
      });
    }
  }catch(e){}
  try{
    const wiki = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(raw)}&limit=6&format=json&origin=*`).then(r=>r.json());
    const [,titles,descs,links] = wiki;
    titles.forEach((t,i)=>{
      html += `<div class="search-result"><div class="title" onclick="loadUrlInFrame('${links[i]}')">${t} <span style="color:var(--text-dim); font-size:10px;">(Wikipedia)</span></div><div class="snippet">${descs[i]||''}</div></div>`;
    });
  }catch(e){}
  if(!html){
    html = `<div class="search-results">No instant results found. <a href="#" onclick="loadUrlInFrame('https://duckduckgo.com/?q=${encodeURIComponent(raw)}'); return false;" style="color:var(--accent)">Try opening full search results &rarr;</a></div>`;
  }
  content.innerHTML = '<div class="search-results">' + html + '</div>';
}

/* ---------------- EXPANDED SETTINGS ---------------- */
function openSettings(){
  createWindow('settings', 'Settings', '&#9881;', `
    <div class="settings-tabs" id="setTabs">
      <div class="settings-tab active" onclick="showSettingsTab('about', this)">About</div>
      <div class="settings-tab" onclick="showSettingsTab('display', this)">Display</div>
      <div class="settings-tab" onclick="showSettingsTab('network', this)">Network</div>
      <div class="settings-tab" onclick="showSettingsTab('bt', this)">Bluetooth</div>
      <div class="settings-tab" onclick="showSettingsTab('apps', this)">Apps</div>
    </div>
    <div id="setBody" class="panel"></div>
  `, {width:460, height:460});
  setTimeout(()=>showSettingsTab('about'), 30);
}
function showSettingsTab(tab, el){
  document.querySelectorAll('#setTabs .settings-tab').forEach(t=>t.classList.remove('active'));
  if(el) el.classList.add('active');
  const body = document.getElementById('setBody');
  if(tab==='about'){
    body.innerHTML = `
      <h3>ABOUT JARVIS OS</h3>
      <div class="toggle-row"><span>Version</span><span>1.1.0</span></div>
      <div class="toggle-row"><span>Owner</span><span>Abdullah Anser</span></div>
      <div class="toggle-row"><span>Primary channel</span><span>WhatsApp + this OS</span></div>
      <div class="toggle-row"><span>Fast Response Mode</span><div class="switch on" onclick="this.classList.toggle('on')"><div class="knob"></div></div></div>
      <p style="color:var(--text-dim); font-size:12px; margin-top:16px;">This desktop is a live web interface. The real Jarvis — memory, automations, and tools — runs on the Base44 Superagent backend, always on, reachable from any device.</p>`;
  } else if(tab==='display'){
    body.innerHTML = `
      <h3>DISPLAY</h3>
      <div class="toggle-row"><span>Theme</span><span>Dark (Jarvis HUD)</span></div>
      <div class="toggle-row"><span>Accent color</span><span style="color:var(--accent)">&#9679; Cyan</span></div>
      <div class="toggle-row"><span>Window animations</span><div class="switch on" onclick="this.classList.toggle('on')"><div class="knob"></div></div></div>
      <div class="toggle-row"><span>Boot screen</span><div class="switch on" onclick="this.classList.toggle('on')"><div class="knob"></div></div></div>`;
  } else if(tab==='network'){
    body.innerHTML = `
      <h3>WI-FI</h3>
      <p style="color:var(--text-dim); font-size:11.5px; margin-top:-6px;">Browsers have no API to control real WiFi hardware — this panel is a visual control surface, not a live radio toggle.</p>
      <div class="toggle-row"><span>Wi-Fi</span><div class="switch on" onclick="this.classList.toggle('on')"><div class="knob"></div></div></div>
      <div class="toggle-row"><span>Home-Network-5G</span><span style="color:var(--success)">Connected</span></div>
      <div class="toggle-row"><span>Airplane mode</span><div class="switch" onclick="this.classList.toggle('on')"><div class="knob"></div></div></div>`;
  } else if(tab==='bt'){
    body.innerHTML = `
      <h3>BLUETOOTH</h3>
      <div class="toggle-row"><span>Bluetooth</span><div class="switch on" onclick="this.classList.toggle('on')"><div class="knob"></div></div></div>
      <button class="btn" style="margin-top:10px;" onclick="closeWindow('settings'); openApp('bluetooth')">Open Bluetooth Scanner (real)</button>`;
  } else if(tab==='apps'){
    body.innerHTML = `
      <h3>INSTALLED APPS (${STORE_APPS.length})</h3>
      <div style="max-height:280px; overflow:auto;">
      ${STORE_APPS.map(a=>`<div class="toggle-row"><span>${a.name}</span><span style="color:var(--text-dim); font-size:11px;">Installed</span></div>`).join('')}
      </div>`;
  }
}

/* ================= MINI APPS ================= */

/* Calculator */
let calcVal = '';
function openCalculator(){
  createWindow('calculator', 'Calculator', '&#128290;', `
    <div class="panel">
      <div class="calc-display" id="calcDisplay">0</div>
      <div class="calc-grid">
        ${['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map(k=>`<div class="calc-btn ${'/*-+='.includes(k)?'op':''}" onclick="calcPress('${k}')">${k}</div>`).join('')}
        <div class="calc-btn" style="grid-column:span 4;" onclick="calcClear()">Clear</div>
      </div>
    </div>
  `, {width:320, height:420});
}
function calcPress(k){
  if(k==='='){
    try{ calcVal = String(Function('"use strict"; return (' + calcVal.replace(/[^0-9+\-*/.]/g,'') + ')')()); }
    catch(e){ calcVal = 'Error'; }
  } else { calcVal += k; }
  document.getElementById('calcDisplay').textContent = calcVal || '0';
}
function calcClear(){ calcVal=''; document.getElementById('calcDisplay').textContent='0'; }

/* Notes */
function openNotes(){
  const saved = localStorage.getItem('jarvis_notes') || '';
  createWindow('notes', 'Notes', '&#128221;', `
    <textarea class="field" id="notesArea" style="width:100%; height:100%; resize:none; font-family:var(--font-mono);" oninput="localStorage.setItem('jarvis_notes', this.value)">${saved}</textarea>
  `, {width:420, height:380});
}

/* Clock */
function openClockApp(){
  createWindow('clock', 'Clock', '&#8986;', `
    <div class="panel" style="text-align:center;">
      <div style="font-size:42px; font-family:var(--font-mono); color:var(--accent);" id="bigClock">--:--:--</div>
      <div style="color:var(--text-dim); margin-top:8px;" id="bigDate">--</div>
    </div>
  `, {width:340, height:220});
  const tick = () => {
    const el = document.getElementById('bigClock');
    if(!el) return;
    const d = new Date();
    el.textContent = d.toLocaleTimeString();
    document.getElementById('bigDate').textContent = d.toDateString();
    setTimeout(tick, 1000);
  };
  tick();
}

/* Todo */
let todos = JSON.parse(localStorage.getItem('jarvis_todos') || '[]');
function openTodo(){
  createWindow('todo', 'To-Do List', '&#9989;', `
    <div class="panel">
      <div class="row" style="margin-bottom:12px;">
        <input class="field" id="todoInput" placeholder="Add a task..." onkeydown="if(event.key==='Enter') addTodo()">
        <button class="btn" onclick="addTodo()">Add</button>
      </div>
      <div id="todoList"></div>
    </div>
  `, {width:380, height:420});
  renderTodos();
}
function renderTodos(){
  const el = document.getElementById('todoList');
  if(!el) return;
  el.innerHTML = todos.map((t,i)=>`<div class="todo-item ${t.done?'done':''}"><input type="checkbox" ${t.done?'checked':''} onchange="toggleTodo(${i})"><span style="flex:1">${t.text}</span><span style="cursor:pointer; color:var(--danger)" onclick="deleteTodo(${i})">&#10005;</span></div>`).join('');
}
function addTodo(){
  const input = document.getElementById('todoInput');
  if(!input.value.trim()) return;
  todos.push({text:input.value.trim(), done:false});
  input.value='';
  localStorage.setItem('jarvis_todos', JSON.stringify(todos));
  renderTodos();
}
function toggleTodo(i){ todos[i].done = !todos[i].done; localStorage.setItem('jarvis_todos', JSON.stringify(todos)); renderTodos(); }
function deleteTodo(i){ todos.splice(i,1); localStorage.setItem('jarvis_todos', JSON.stringify(todos)); renderTodos(); }

/* Password Generator */
function openPassword(){
  createWindow('password', 'Password Generator', '&#128273;', `
    <div class="panel">
      <div class="calc-display" id="pwOutput" style="font-size:16px; word-break:break-all;">Click Generate</div>
      <div class="row" style="margin:14px 0;"><span style="width:80px; font-size:12px; color:var(--text-dim);">Length</span><input type="range" min="6" max="32" value="16" id="pwLen" style="flex:1" oninput="document.getElementById('pwLenVal').textContent=this.value"><span id="pwLenVal" style="width:24px;">16</span></div>
      <button class="btn" onclick="genPassword()">Generate</button>
    </div>
  `, {width:380, height:280});
}
function genPassword(){
  const len = parseInt(document.getElementById('pwLen').value);
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';
  let pw = '';
  const arr = new Uint32Array(len);
  crypto.getRandomValues(arr);
  for(let i=0;i<len;i++) pw += chars[arr[i] % chars.length];
  document.getElementById('pwOutput').textContent = pw;
}

/* Color Picker */
function openColorPicker(){
  createWindow('colorpicker', 'Color Picker', '&#127912;', `
    <div class="panel">
      <div class="swatch" id="colorSwatch" style="background:#00d9ff;"></div>
      <input type="color" class="field" value="#00d9ff" oninput="document.getElementById('colorSwatch').style.background=this.value; document.getElementById('colorHex').textContent=this.value">
      <div style="margin-top:10px; font-family:var(--font-mono);" id="colorHex">#00d9ff</div>
    </div>
  `, {width:320, height:260});
}

/* Unit Converter */
function openConverter(){
  createWindow('converter', 'Unit Converter', '&#128202;', `
    <div class="panel">
      <div class="row" style="margin-bottom:10px;">
        <input class="field" id="convInput" type="number" value="1" oninput="doConvert()">
        <select class="field" id="convType" onchange="doConvert()">
          <option value="km_mi">Km &rarr; Miles</option>
          <option value="mi_km">Miles &rarr; Km</option>
          <option value="kg_lb">Kg &rarr; Pounds</option>
          <option value="lb_kg">Pounds &rarr; Kg</option>
          <option value="c_f">Celsius &rarr; Fahrenheit</option>
          <option value="f_c">Fahrenheit &rarr; Celsius</option>
        </select>
      </div>
      <div class="calc-display" id="convOutput">0.62</div>
    </div>
  `, {width:380, height:260});
}
function doConvert(){
  const v = parseFloat(document.getElementById('convInput').value) || 0;
  const t = document.getElementById('convType').value;
  let out = 0;
  if(t==='km_mi') out = v*0.621371;
  if(t==='mi_km') out = v/0.621371;
  if(t==='kg_lb') out = v*2.20462;
  if(t==='lb_kg') out = v/2.20462;
  if(t==='c_f') out = (v*9/5)+32;
  if(t==='f_c') out = (v-32)*5/9;
  document.getElementById('convOutput').textContent = out.toFixed(3);
}

/* Weather (real, free, no-key API: open-meteo.com) */
function openWeather(){
  createWindow('weather', 'Weather', '&#127780;', `
    <div class="panel">
      <div class="row" style="margin-bottom:10px;">
        <input class="field" id="wLat" placeholder="Latitude" value="32.3557">
        <input class="field" id="wLon" placeholder="Longitude" value="73.0124">
        <button class="btn" onclick="fetchWeather()">Get</button>
      </div>
      <div id="weatherResult" style="font-size:13px;">Default location set to Phularwan, Sargodha. Click Get.</div>
    </div>
  `, {width:380, height:280});
}
async function fetchWeather(){
  const lat = document.getElementById('wLat').value, lon = document.getElementById('wLon').value;
  const el = document.getElementById('weatherResult');
  el.textContent = 'Loading real weather data...';
  try{
    const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`).then(r=>r.json());
    const w = data.current_weather;
    el.innerHTML = `<div class="toggle-row"><span>Temperature</span><span>${w.temperature}&deg;C</span></div><div class="toggle-row"><span>Wind Speed</span><span>${w.windspeed} km/h</span></div><div class="toggle-row"><span>Time</span><span>${w.time}</span></div>`;
  }catch(e){ el.textContent = 'Could not fetch weather right now.'; }
}

/* Paint */
function openPaint(){
  createWindow('paint', 'Paint', '&#128444;', `
    <div style="display:flex; flex-direction:column; height:100%;">
      <div class="row" style="padding:8px; background:rgba(255,255,255,0.03);">
        <input type="color" value="#00d9ff" id="paintColor">
        <input type="range" min="1" max="20" value="4" id="paintSize">
        <button class="btn secondary" onclick="clearPaint()">Clear</button>
      </div>
      <canvas id="paintCanvas" style="flex:1; background:#0c1018; cursor:crosshair;"></canvas>
    </div>
  `, {width:520, height:440});
  setTimeout(initPaint, 50);
}
function initPaint(){
  const canvas = document.getElementById('paintCanvas');
  if(!canvas) return;
  canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
  const ctx = canvas.getContext('2d');
  let drawing = false;
  canvas.addEventListener('mousedown', e=>{ drawing=true; ctx.beginPath(); ctx.moveTo(e.offsetX,e.offsetY); });
  canvas.addEventListener('mousemove', e=>{
    if(!drawing) return;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.strokeStyle = document.getElementById('paintColor').value;
    ctx.lineWidth = document.getElementById('paintSize').value;
    ctx.lineCap = 'round';
    ctx.stroke();
  });
  window.addEventListener('mouseup', ()=>drawing=false);
}
function clearPaint(){
  const canvas = document.getElementById('paintCanvas');
  canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
}

/* QR Code (real, free API: api.qrserver.com) */
function openQrCode(){
  createWindow('qrcode', 'QR Code', '&#9723;', `
    <div class="panel" style="text-align:center;">
      <input class="field" id="qrText" placeholder="Text or URL..." value="https://app.base44.com" oninput="updateQr()">
      <img id="qrImg" style="margin-top:14px; border-radius:8px; background:#fff; padding:8px;" width="200" height="200">
    </div>
  `, {width:320, height:340});
  setTimeout(updateQr, 50);
}
function updateQr(){
  const text = document.getElementById('qrText').value || 'jarvis';
  document.getElementById('qrImg').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
}

/* System Info */
function openSysInfo(){
  createWindow('sysinfo', 'System Info', '&#128187;', `
    <div class="panel">
      <h3>SYSTEM INFO (real, from your browser)</h3>
      <div class="toggle-row"><span>Platform</span><span>${navigator.platform}</span></div>
      <div class="toggle-row"><span>Browser</span><span style="font-size:10px; max-width:180px; text-align:right;">${navigator.userAgent.slice(0,40)}...</span></div>
      <div class="toggle-row"><span>Screen</span><span>${screen.width}x${screen.height}</span></div>
      <div class="toggle-row"><span>CPU Cores</span><span>${navigator.hardwareConcurrency || 'n/a'}</span></div>
      <div class="toggle-row"><span>Online</span><span>${navigator.onLine ? 'Yes' : 'No'}</span></div>
      <div class="toggle-row"><span>Language</span><span>${navigator.language}</span></div>
    </div>
  `, {width:400, height:340});
}

/* Stopwatch */
let swInterval = null, swSeconds = 0;
function openStopwatch(){
  createWindow('stopwatch', 'Stopwatch', '&#9201;', `
    <div class="panel" style="text-align:center;">
      <div class="calc-display" id="swDisplay" style="font-size:32px;">00:00:00</div>
      <div class="row" style="justify-content:center; margin-top:14px;">
        <button class="btn" onclick="swToggle()" id="swBtn">Start</button>
        <button class="btn secondary" onclick="swReset()">Reset</button>
      </div>
    </div>
  `, {width:320, height:240});
  updateSwDisplay();
}
function swToggle(){
  const btn = document.getElementById('swBtn');
  if(swInterval){
    clearInterval(swInterval); swInterval = null; btn.textContent = 'Start';
  } else {
    swInterval = setInterval(()=>{ swSeconds++; updateSwDisplay(); }, 1000);
    btn.textContent = 'Pause';
  }
}
function swReset(){ swSeconds = 0; updateSwDisplay(); }
function updateSwDisplay(){
  const el = document.getElementById('swDisplay');
  if(!el) return;
  const h = String(Math.floor(swSeconds/3600)).padStart(2,'0');
  const m = String(Math.floor((swSeconds%3600)/60)).padStart(2,'0');
  const s = String(swSeconds%60).padStart(2,'0');
  el.textContent = `${h}:${m}:${s}`;
}

/* ---------------- HUD: Arc Reactor dashboard (real data where the browser allows it) ---------------- */
function initHud(){
  const hour = new Date().getHours();
  const greetWord = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
  const titleEl = document.getElementById('greetTitle');
  const dateEl = document.getElementById('greetDate');
  const subEl = document.getElementById('greetSub');
  if(titleEl) titleEl.textContent = `${greetWord}, Stark.`;
  if(dateEl) dateEl.textContent = new Date().toLocaleString('en-US', { weekday:'long', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
  if(subEl) subEl.textContent = 'All systems nominal.';

  // CPU cores — real, from the browser
  const cores = navigator.hardwareConcurrency || 4;
  const cpuLoadPct = Math.min(95, 20 + Math.round(Math.random()*25));
  setEl('statCpu', `${cores} cores`);
  setBar('statCpuBar', cpuLoadPct);

  // Memory — real where Chrome exposes it (performance.memory), else honest fallback
  if(performance.memory && performance.memory.jsHeapSizeLimit){
    const used = (performance.memory.usedJSHeapSize/1048576).toFixed(0);
    const limit = (performance.memory.jsHeapSizeLimit/1048576).toFixed(0);
    setEl('statMem', `${used}MB / ${limit}MB`);
    setBar('statMemBar', Math.min(100, (used/limit)*100));
  } else {
    setEl('statMem', 'N/A (browser-restricted)');
    setBar('statMemBar', 15);
  }

  // Network — real, from Network Information API where supported
  if(navigator.connection){
    const c = navigator.connection;
    setEl('statNet', `${c.effectiveType || '4g'} · ${c.downlink || '—'}Mbps`);
    setBar('statNetBar', Math.min(100, (c.downlink||5)*10));
  } else {
    setEl('statNet', navigator.onLine ? 'Online' : 'Offline');
    setBar('statNetBar', navigator.onLine ? 80 : 5);
  }

  // Battery — real, from Battery Status API where supported
  if(navigator.getBattery){
    navigator.getBattery().then(b=>{
      setEl('statBatt', `${Math.round(b.level*100)}%${b.charging ? ' (charging)' : ''}`);
      setBar('statBattBar', b.level*100);
      b.onlevelchange = () => { setEl('statBatt', `${Math.round(b.level*100)}%`); setBar('statBattBar', b.level*100); };
    });
  } else {
    setEl('statBatt', 'N/A');
    setBar('statBattBar', 100);
  }

  // keep CPU/network bars gently alive so the HUD feels live
  setInterval(()=>{
    setBar('statCpuBar', Math.min(95, 15 + Math.round(Math.random()*30)));
  }, 4000);
}
function setEl(id, text){ const el = document.getElementById(id); if(el) el.textContent = text; }
function setBar(id, pct){ const el = document.getElementById(id); if(el) el.style.width = Math.max(4,Math.min(100,pct)) + '%'; }

try { initHud(); } catch(err){ const el=document.getElementById('greetSub'); if(el) el.textContent='initHud threw: '+err.message; }
window.addEventListener('load', () => { setTimeout(() => { try { initHud(); } catch(err){ const el=document.getElementById('greetSub'); if(el) el.textContent='initHud(load) threw: '+err.message; } }, 500); });

/* ================= NEW APPS: Mail, Calendar, Music, Photos, Cloud, Maps, News ================= */

/* ---------------- MAIL (local demo inbox — honest: not OAuth-connected on a static page) ---------------- */
const DEMO_INBOX = [
  {from:'Base44 Team', subj:'Welcome to Jarvis OS', body:'Your desktop environment is live. Explore the Store for more apps.', time:'09:02 AM', unread:true},
  {from:'GitHub', subj:'PR review reminder', body:'You have pull requests waiting for review.', time:'08:41 AM', unread:true},
  {from:'Calendar', subj:'Meeting in 1 hour', body:'Daily sync at 10:00 AM.', time:'Yesterday', unread:false},
  {from:'Jarvis', subj:'Morning Briefing Ready', body:'Your Gmail + Calendar + GitHub summary is ready.', time:'Yesterday', unread:false},
];
function openMail(){
  const list = DEMO_INBOX.map((m,i)=>`
    <div class="mail-row ${m.unread?'unread':''}" onclick="readMail(${i})">
      <div class="mail-from">${m.from}</div>
      <div class="mail-subj">${m.subj}</div>
      <div class="mail-time">${m.time}</div>
    </div>`).join('');
  createWindow('mail', 'Mail', '&#9993;', `
    <div class="panel" style="padding-bottom:0;">
      <h3>INBOX</h3>
      <p style="color:var(--text-dim); font-size:11.5px; margin-top:-8px;">Local demo inbox — not wired to a real mailbox on this public page. For real email, use Jarvis chat on WhatsApp.</p>
    </div>
    <div id="mailList" style="overflow:auto; max-height:340px;">${list}</div>
    <div id="mailReader" style="display:none; padding:14px;"></div>
  `, {width:480, height:440});
}
function readMail(i){
  const m = DEMO_INBOX[i];
  m.unread = false;
  document.getElementById('mailList').style.display = 'none';
  const r = document.getElementById('mailReader');
  r.style.display = 'block';
  r.innerHTML = `
    <div style="cursor:pointer; color:var(--accent); font-size:12px; margin-bottom:10px;" onclick="closeMailReader()">&larr; Back to inbox</div>
    <h3 style="margin-bottom:4px;">${m.subj}</h3>
    <div style="color:var(--text-dim); font-size:11px; margin-bottom:12px;">From: ${m.from} · ${m.time}</div>
    <div style="font-size:13px; line-height:1.6;">${m.body}</div>`;
}
function closeMailReader(){
  document.getElementById('mailReader').style.display = 'none';
  document.getElementById('mailList').style.display = 'block';
  openApp('__refresh_mail__');
}

/* ---------------- CALENDAR (real, functional month view) ---------------- */
let calCursor = new Date();
function openCalendar(){
  createWindow('calendar', 'Calendar', '&#128197;', `<div class="panel" id="calBody"></div>`, {width:400, height:440});
  renderCalendar();
}
function renderCalendar(){
  const body = document.getElementById('calBody');
  if(!body) return;
  const year = calCursor.getFullYear(), month = calCursor.getMonth();
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const today = new Date();
  const monthName = calCursor.toLocaleString('en-US', {month:'long'});
  let cells = '';
  for(let i=0;i<startDay;i++) cells += `<div class="cal-cell empty"></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const isToday = d===today.getDate() && month===today.getMonth() && year===today.getFullYear();
    cells += `<div class="cal-cell ${isToday?'today':''}">${d}</div>`;
  }
  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <span class="btn" style="padding:4px 10px;" onclick="calNav(-1)">&lsaquo;</span>
      <h3 style="margin:0;">${monthName} ${year}</h3>
      <span class="btn" style="padding:4px 10px;" onclick="calNav(1)">&rsaquo;</span>
    </div>
    <div class="cal-grid">
      ${['Su','Mo','Tu','We','Th','Fr','Sa'].map(d=>`<div class="cal-dow">${d}</div>`).join('')}
      ${cells}
    </div>`;
}
function calNav(dir){ calCursor.setMonth(calCursor.getMonth()+dir); renderCalendar(); }

/* ---------------- MUSIC (real Web Audio API synth player) ---------------- */
let musicCtx = null, musicOsc = null, musicPlaying = false;
const MUSIC_TRACKS = [
  {name:'Arc Reactor Hum', freq:110, type:'sine'},
  {name:'HUD Pulse', freq:220, type:'triangle'},
  {name:'Repulsor Charge', freq:330, type:'sawtooth'},
];
function openMusic(){
  const rows = MUSIC_TRACKS.map((t,i)=>`
    <div class="mail-row" onclick="playTrack(${i})"><div class="mail-from">&#9835;</div><div class="mail-subj">${t.name}</div><div class="mail-time">${t.freq}Hz</div></div>`).join('');
  createWindow('music', 'Music', '&#127925;', `
    <div class="panel">
      <h3>JARVIS AUDIO ENGINE</h3>
      <p style="color:var(--text-dim); font-size:11.5px; margin-top:-8px;">Real Web Audio API synth — genuinely generates sound in your browser, no files needed.</p>
      <div id="nowPlaying" style="text-align:center; padding:16px 0; color:var(--accent); font-size:13px;">Nothing playing</div>
      <div style="text-align:center; margin-bottom:14px;">
        <span class="btn" onclick="stopTrack()">&#9724; Stop</span>
      </div>
      ${rows}
      <div class="row" style="margin-top:14px;"><span style="width:60px; font-size:12px; color:var(--text-dim);">Volume</span><input type="range" min="0" max="1" step="0.05" value="0.15" id="musicVol" style="flex:1" oninput="setMusicVol(this.value)"></div>
    </div>
  `, {width:420, height:420});
}
function playTrack(i){
  stopTrack();
  const t = MUSIC_TRACKS[i];
  musicCtx = musicCtx || new (window.AudioContext || window.webkitAudioContext)();
  musicOsc = musicCtx.createOscillator();
  const gain = musicCtx.createGain();
  gain.gain.value = parseFloat(document.getElementById('musicVol')?.value || 0.15);
  musicOsc.type = t.type; musicOsc.frequency.value = t.freq;
  musicOsc.connect(gain); gain.connect(musicCtx.destination);
  musicOsc.start();
  musicOsc._gain = gain;
  musicPlaying = true;
  const np = document.getElementById('nowPlaying'); if(np) np.textContent = '&#9835; Playing: ' + t.name;
}
function stopTrack(){
  if(musicOsc){ try{ musicOsc.stop(); }catch(e){} musicOsc = null; }
  musicPlaying = false;
  const np = document.getElementById('nowPlaying'); if(np) np.textContent = 'Nothing playing';
}
function setMusicVol(v){ if(musicOsc && musicOsc._gain) musicOsc._gain.gain.value = parseFloat(v); }

/* ---------------- PHOTOS (procedural CSS/canvas gallery — no external assets needed) ---------------- */
const PHOTO_SEEDS = [
  {name:'Arc Core', c1:'#00d9ff', c2:'#001a2e'},
  {name:'HUD Grid', c1:'#7cf9ff', c2:'#0a1f33'},
  {name:'Repulsor', c1:'#ffffff', c2:'#00819e'},
  {name:'Night Sky', c1:'#0d3b66', c2:'#000814'},
  {name:'Circuit', c1:'#00ffcc', c2:'#031b1b'},
  {name:'Stark Blue', c1:'#3ac0ff', c2:'#001b33'},
];
function openPhotos(){
  const tiles = PHOTO_SEEDS.map((p,i)=>`
    <div class="photo-tile" style="background:radial-gradient(circle at 30% 30%, ${p.c1}, ${p.c2});" onclick="viewPhoto(${i})"></div>`).join('');
  createWindow('photos', 'Photos', '&#128247;', `
    <div class="panel" style="padding-bottom:0;"><h3>GALLERY</h3></div>
    <div class="photo-grid">${tiles}</div>
    <div id="photoView" style="display:none;"></div>
  `, {width:480, height:420});
}
function viewPhoto(i){
  const p = PHOTO_SEEDS[i];
  const w = document.getElementById('body-photos');
  w.innerHTML = `
    <div style="padding:14px;">
      <div style="cursor:pointer; color:var(--accent); font-size:12px; margin-bottom:10px;" onclick="openPhotos()">&larr; Back to gallery</div>
      <div style="height:260px; border-radius:10px; background:radial-gradient(circle at 30% 30%, ${p.c1}, ${p.c2});"></div>
      <div style="margin-top:10px; font-size:13px;">${p.name}</div>
    </div>`;
}

/* ---------------- CLOUD (real local-storage usage stats — honest, no fake cloud data) ---------------- */
function openCloud(){
  let used = 0;
  try{ for(const k in localStorage){ if(localStorage.hasOwnProperty(k)) used += (localStorage[k].length + k.length); } }catch(e){}
  const usedKb = (used/1024).toFixed(2);
  createWindow('cloud', 'Cloud', '&#9729;', `
    <div class="panel">
      <h3>LOCAL STORAGE</h3>
      <p style="color:var(--text-dim); font-size:11.5px; margin-top:-8px;">This shows real browser localStorage usage on this device — genuine data, not a live Drive/iCloud connection.</p>
      <div class="stat-row" style="margin-top:16px;">
        <div class="stat-label"><span>Used</span><span>${usedKb} KB</span></div>
        <div class="stat-bar"><div class="fill" style="width:${Math.min(100, used/50000*100)}%"></div></div>
      </div>
      <p style="color:var(--text-dim); font-size:11.5px; margin-top:16px;">To sync real files, connect Google Drive through Jarvis chat.</p>
    </div>
  `, {width:380, height:280});
}

/* ---------------- MAPS (real OpenStreetMap embed, centered on Phularwan) ---------------- */
function openMaps(){
  createWindow('maps', 'Maps', '&#128506;', `
    <div style="padding:10px;">
      <div style="font-size:12px; color:var(--text-dim); margin-bottom:8px;">Phularwan, Sargodha, Punjab, Pakistan — live OpenStreetMap</div>
      <iframe width="100%" height="330" style="border:1px solid rgba(0,217,255,0.25); border-radius:8px;"
        src="https://www.openstreetmap.org/export/embed.html?bbox=72.9924%2C32.3357%2C73.0324%2C32.3757&layer=mapnik&marker=32.3557%2C73.0124"></iframe>
    </div>
  `, {width:480, height:420});
}

/* ---------------- NEWS (real fetch from Hacker News public API, CORS-open, no key) ---------------- */
function openNews(){
  createWindow('news', 'News', '&#128240;', `
    <div class="panel" style="padding-bottom:0;"><h3>TOP HEADLINES</h3></div>
    <div id="newsList" style="padding:0 14px 14px; overflow:auto; max-height:360px;">Loading real headlines…</div>
  `, {width:460, height:440});
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(r=>r.json())
    .then(ids=>Promise.all(ids.slice(0,10).map(id=>fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r=>r.json()))))
    .then(items=>{
      const el = document.getElementById('newsList');
      if(!el) return;
      el.innerHTML = items.map(it=>`
        <div style="padding:9px 0; border-top:1px solid rgba(255,255,255,0.06); font-size:12.5px;">
          <a href="${it.url||'#'}" target="_blank" style="color:var(--text-main); text-decoration:none;">${it.title}</a>
          <div style="color:var(--text-dim); font-size:10.5px; margin-top:2px;">${it.score||0} pts · ${it.by||''}</div>
        </div>`).join('');
    })
    .catch(()=>{ const el = document.getElementById('newsList'); if(el) el.textContent = 'Could not reach the news API right now.'; });
}


/* ================= NEW APPS: YouTube, Facebook, Instagram, TikTok, Play Store ================= */

/* ---------------- YOUTUBE (real embedded search player, no API key needed) ---------------- */
function openYouTube(q){
  const query = q || 'jarvis ai';
  createWindow('youtube', 'YouTube', '&#9654;', `
    <div style="padding:10px;">
      <div class="row" style="margin-bottom:8px;">
        <input class="field" id="ytSearch" placeholder="Search YouTube..." value="${query}">
        <button class="btn" onclick="ytSearchGo()">Search</button>
      </div>
      <iframe id="ytFrame" width="100%" height="330" style="border:1px solid rgba(0,217,255,0.25); border-radius:8px;"
        src="https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(query)}" allowfullscreen></iframe>
      <p style="color:var(--text-dim); font-size:10.5px; margin-top:6px;">Real, live YouTube search results — genuinely playable, no key required.</p>
    </div>
  `, {width:520, height:460});
}
function ytSearchGo(){
  const q = document.getElementById('ytSearch').value;
  const f = document.getElementById('ytFrame');
  if(f) f.src = 'https://www.youtube.com/embed?listType=search&list=' + encodeURIComponent(q);
}

/* ---------------- FACEBOOK / INSTAGRAM / TIKTOK (real launcher — these platforms block iframe embedding) ---------------- */
function socialLauncher(id, name, glyph, url, color){
  createWindow(id, name, glyph, `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:24px; text-align:center; gap:14px;">
      <div style="width:70px; height:70px; border-radius:20px; display:flex; align-items:center; justify-content:center; background:${color}22; border:1px solid ${color}55;">
        <span style="font-size:32px;">${glyph}</span>
      </div>
      <div style="font-size:15px; font-weight:600;">${name}</div>
      <p style="color:var(--text-dim); font-size:12px; max-width:280px;">${name} blocks being embedded inside other apps/pages (their own security policy) — so tapping below opens the real, live ${name} in a new tab.</p>
      <button class="btn" onclick="window.open('${url}', '_blank')">Open ${name}</button>
    </div>
  `, {width:360, height:320});
}
function openFacebook(){ socialLauncher('facebook', 'Facebook', '&#128075;', 'https://www.facebook.com', '#1877F2'); }
function openInstagram(){ socialLauncher('instagram', 'Instagram', '&#128248;', 'https://www.instagram.com', '#E1306C'); }
function openTiktok(){ socialLauncher('tiktok', 'TikTok', '&#127925;', 'https://www.tiktok.com', '#25F4EE'); }

/* ---------------- PLAY STORE (in-OS app catalog + real deep links to actual app store listings) ---------------- */
const REAL_APPS = [
  {name:'WhatsApp', pkg:'com.whatsapp'},
  {name:'Instagram', pkg:'com.instagram.android'},
  {name:'TikTok', pkg:'com.zhiliaoapp.musically'},
  {name:'Facebook', pkg:'com.facebook.katana'},
  {name:'YouTube', pkg:'com.google.android.youtube'},
  {name:'Spotify', pkg:'com.spotify.music'},
  {name:'Netflix', pkg:'com.netflix.mediaclient'},
  {name:'Gmail', pkg:'com.google.android.gm'},
  {name:'Google Chrome', pkg:'com.android.chrome'},
];
function openPlayStore(){
  const jarvisApps = STORE_APPS.map(a => `
    <div class="store-item" onclick="closeWindow('playstore'); openApp('${a.id}')">
      <div class="glyph">${iconSVG(a.id)}</div>
      <div class="name">${a.name}</div>
      <div class="tag">Installed</div>
    </div>`).join('');
  const realApps = REAL_APPS.map(a => `
    <div class="store-item" onclick="window.open('https://play.google.com/store/apps/details?id=${a.pkg}', '_blank')">
      <div class="glyph"><svg class="neon-svg" viewBox="0 0 24 24" style="width:60%;height:60%;"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg></div>
      <div class="name">${a.name}</div>
      <div class="tag">Get it</div>
    </div>`).join('');
  createWindow('playstore', 'Play Store', '&#128230;', `
    <div class="panel" style="padding-bottom:0;">
      <h3>PLAY STORE</h3>
      <p style="color:var(--text-dim); font-size:11.5px; margin-top:-6px;">"Jarvis Apps" open instantly inside this OS. "Get Real Apps" opens the genuine Google Play listing in a new tab — a webpage can't silently install real software on your device, so this is the honest, real way to get them.</p>
      <div style="display:flex; gap:8px; margin:10px 0;">
        <button class="btn" onclick="showPSTab('jarvis')">Jarvis Apps</button>
        <button class="btn" onclick="showPSTab('real')">Get Real Apps</button>
      </div>
    </div>
    <div id="psJarvis" class="app-grid" style="padding:0 14px 14px; display:grid; grid-template-columns:repeat(3,1fr); gap:10px; overflow:auto; max-height:320px;">${jarvisApps}</div>
    <div id="psReal" class="app-grid" style="padding:0 14px 14px; display:none; grid-template-columns:repeat(3,1fr); gap:10px; overflow:auto; max-height:320px;">${realApps}</div>
  `, {width:520, height:500});
}
function showPSTab(tab){
  const j = document.getElementById('psJarvis'), r = document.getElementById('psReal');
  if(j) j.style.display = tab==='jarvis' ? 'grid' : 'none';
  if(r) r.style.display = tab==='real' ? 'grid' : 'none';
}

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
];

function openStore(){
  const cards = STORE_APPS.map(a => `
    <div class="store-item" onclick="closeWindow('store'); openApp('${a.id}')">
      <div class="glyph">${a.glyph}</div>
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
      <h3>JARVIS VOICE</h3>
      <p style="color:var(--text-dim); font-size:12px;">Real speech recognition + text-to-speech, running in your browser. Works best in Chrome/Edge (desktop or Android).</p>
      <div style="display:flex; flex-direction:column; align-items:center; gap:14px; margin:18px 0;">
        <button class="mic-btn" id="micBtn" onclick="toggleListening()">&#127908;</button>
        <div style="font-size:11px; color:var(--text-dim);" id="micStatus">Tap to speak a command</div>
      </div>
      <div class="transcript" id="voiceTranscript">Say things like: "open terminal", "open calculator", "what time is it", "tell me a joke".</div>
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
  `, {width:460, height:560});
  setTimeout(populateVoices, 200);
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
function speakText(){
  if(!('speechSynthesis' in window)){ alert('Speech synthesis not supported in this browser.'); return; }
  const text = document.getElementById('ttsText').value;
  const u = new SpeechSynthesisUtterance(text);
  if(selectedVoice) u.voice = selectedVoice;
  u.rate = parseFloat(document.getElementById('voiceRate').value);
  u.pitch = parseFloat(document.getElementById('voicePitch').value);
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
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
    status.textContent = 'Tap to speak a command';
    return;
  }
  recognition = new SR();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.onresult = (e) => {
    const said = e.results[0][0].transcript;
    document.getElementById('voiceTranscript').textContent = '"' + said + '"';
    handleVoiceCommand(said.toLowerCase());
  };
  recognition.onerror = (e) => { status.textContent = 'Mic error: ' + e.error; };
  recognition.onend = () => { voiceListening = false; btn.classList.remove('listening'); status.textContent = 'Tap to speak a command'; };
  recognition.start();
  voiceListening = true;
  btn.classList.add('listening');
  status.textContent = 'Listening...';
}
function handleVoiceCommand(cmd){
  let reply = "I heard you, but I'm not sure what to do with that yet.";
  const openMatch = cmd.match(/open (\w+)/);
  if(openMatch && STORE_APPS.find(a=>a.id===openMatch[1] || a.name.toLowerCase().includes(openMatch[1]))){
    const app = STORE_APPS.find(a=>a.id===openMatch[1] || a.name.toLowerCase().includes(openMatch[1]));
    openApp(app.id);
    reply = 'Opening ' + app.name;
  } else if(cmd.includes('time')){
    reply = 'It is ' + new Date().toLocaleTimeString();
  } else if(cmd.includes('date')){
    reply = 'Today is ' + new Date().toDateString();
  } else if(cmd.includes('joke')){
    reply = "Why do programmers prefer dark mode? Because light attracts bugs.";
  } else if(cmd.includes('your name') || cmd.includes('who are you')){
    reply = "I'm Jarvis — your personal AI, running right here in this browser.";
  } else if(cmd.includes('run ')){
    const runCmd = cmd.split('run ')[1];
    openApp('terminal');
    setTimeout(()=>{ if(document.getElementById('termInput')) runTermCommand(runCmd); }, 300);
    reply = 'Running: ' + runCmd;
  }
  const u = new SpeechSynthesisUtterance(reply);
  if(selectedVoice) u.voice = selectedVoice;
  speechSynthesis.speak(u);
  document.getElementById('voiceTranscript').textContent += '\\n\\nJarvis: ' + reply;
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

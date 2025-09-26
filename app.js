
/* ==== Config ==== */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwwM315NzkoTvt9FWvThCnZTLFs0Dj066b1-JVngBW9BtkGNkxN4a0FeIkRoLRE7Q7qfw/exec";
const DASHBOARD_PASSWORD = "PowerChina2025";
const TRAINING_LINKS = {
  "Environmental Manual": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EUpvUnWPN9BBseBz71LmG10BZ4Iac61_TNohL5E60hW9cw?e=INlKgQ",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/EXJjcDWO_TJHvcFS-Q83y-QBrhn1kiMyaqYtjrtj27kbTQ?e=2PLtfc",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/ET8SEeMQPpBIqdVyDPItggEB042ajYo4HgyW4IYUMtY-TQ?e=hE2Jje"
  },
  "Environmental Work Conditions": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/ESLm2h3UgtxCliG11DBLxgUBEem3Ui8NGLM4Qa7RSrRq8g?e=Rd6u6S",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/ETPyi8Pk8ItJmtmEe9qQZngBB9SQA0IbACsn9fwGmJbzmw?e=1nQOIv",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/ESloxR1asxhMrFar7BSjEb4BnEU--_vDg9bFn5fIJcm-TA?e=eUNQtx"
  },
  "Environmental Aspects & Impacts": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EUs_vQ7GX11PolvcPsfxtfABxQG1efiqjKeZs5y6fV8JtQ?e=xBtkJl",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/EetNspHWswxPuiTsA1eKudkBRcC7kKtdImOvDOyLCsj_xQ?e=FWencU",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/EYEPlGE95TJPgHwqJSc59ssBSqCQZ6dKPtSZ9LayjyZaJA?e=SxsaBO"
  },
  "Environmental Monitoring & Control": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EdF0P7ugFy5DjRP6mctNQEgBAi6U_cU-Bjmc_iOo0b91NA?e=tGONzH",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/Ecj7aPmsGMhKto8osVdJS4MBGeQhmelHecKijB7by1XnLQ?e=m1Ariq",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/EZIZ33srqpNCrKrKbIj4gTEBOqobjHJvzPY9qt0lWC79Hw?e=ZLhYMx"
  },
  "HouseKeeping and 5S": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EXacRCY35IVGuAFp-9X1aV4BnedCZmUAd-5gr6K53wTt5A?e=RfuEiG",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/ERopTSJPoVRGlLgvL47NTFkBvZ2v0VL9qG5BTljub8OsJw?e=7UhkzD",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/Ef7XRJhz4Z1DiVNfHyRlJBoBAPN5P5WA4FsLIBT-vNZ22A?e=GAJG8U"
  },
  "Integrated Waste Management": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/Ebv6Zc3TnWVLoAmTbt8d2iABsuZ_XMYpQHArzv1oEizOZQ?e=xUXum3",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/Efhv3Y0BdgFHq2AZMz-GE0ABVmOjXg_XchKGf6kgEPrFGw?e=WdxM8M",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/ES6maWFNucBBtieUdcz4vHcBtD6e1RZbCtTg6GEeKvBGPw?e=nyFtxE"
  },
  "Hazard Materials and COSHH": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EWBDfrEVsodLk68nNnViPYABsXhPiNkRIvawr3thJeohfQ?e=ffTdqR",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/EZQ9VC_s9Y9CluffQ9qla6wBsVi12VqKhkFsIhlR5GIv0A?e=oIxj9b",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/EfpT_vkWk_xDqLrbG4B5w-UBotroNriRANIHYDUNxcN6-w?e=JjSZpb"
  },
  "Biodeversity Conservation": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EWBDfrEVsodLk68nNnViPYABsXhPiNkRIvawr3thJeohfQ?e=c6a0fo",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/EYhrZjsioilOtBIt88PxjNMBWI-svTI82ZNJmcmrCXrcOQ?e=fVzDhB",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/EdFY_HgnyJlKrbSlBk0Wj5oBDTBJxFFJAVBgYttOukwhHA?e=xRAoXE"
  },
  "Spill Contingency": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EUp4ic7BLQhCgCyGWHZDKkMBAn3zlQib_7bAx5WSBJ4mgA?e=rL4MzG",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/EQaSwdQY3xRGomNd0SLIr_oBOA7Ew6UvjJwUHRFMf5UHJA?e=dtlAvL",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/EYAR1LANQAJFnO2QPMHmkB8Bu6DM5D9ftVgcK7Nb0vswyA?e=sZRhnB"
  },
  "GBVH": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EceDlg2fpW9Jqgw5d-WAFf4BFEy1HWKpIPkJje38T6tefg?e=ZGz2et",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/EYp-urmjCNpAnMv1qR8c0_8B5hye1eqwqNt27GTIiU171A?e=szp1ae",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/EbWd7fQDirJFqkObKgFMBrYB7mZek87KxIn6-0wgM7Abhg?e=chFwWp"
    },
  "Code of Conduct": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EWjn5Uul-T5KucE643esENgBcxnPozbB-Ywb_4d-Zj95qg?e=FMneBe",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/EWz_H8bsmUpGrL-5DrP2BH4BT-GbAunb9sYpZVol8fNjgQ?e=rcqYeI",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/EWpAqpuYAapJoRk2duQItEMBlUYjdM_PKX8exe3IvzOTaA?e=FGfdnt"
    },
  "Griveance Mechanism": {
    "English": "https://1drv.ms/p/c/c073f729a3415e41/EUQwMvizqoZGtyFZZB5tW9sB7CUGBPeARcGSugHje3vdwg?e=6bEGIh",
    "العربية": "https://1drv.ms/p/c/c073f729a3415e41/Ed4gnWbQsNFMoiDJkjfw9xsBZV0TIsI0M1SGTyQCY71Uwg?e=4Mjy6X",
    "中文": "https://1drv.ms/p/c/c073f729a3415e41/EbE1mzoKXl1Eh95EmFnPU-IBUyJGV2_ojDnW_E69mniy-w?e=1bgV00"
    },
};

/* ==== Tabs ==== */
const tabPortal = document.getElementById('tab-portal');
const tabDashboard = document.getElementById('tab-dashboard');
const sectionPortal = document.getElementById('section-portal');
const sectionDashboard = document.getElementById('section-dashboard');
function showPortal(){ 
  sectionPortal.classList.remove('hidden'); sectionDashboard.classList.add('hidden');
  tabPortal.classList.add('active'); tabDashboard.classList.remove('active');
}
function showDashboard(){ 
  sectionPortal.classList.add('hidden'); sectionDashboard.classList.remove('hidden');
  tabDashboard.classList.add('active'); tabPortal.classList.remove('active');
}
tabPortal.addEventListener('click', showPortal);
tabDashboard.addEventListener('click', () => {
  const pass = prompt('Enter Dashboard Password:');
  if(pass === DASHBOARD_PASSWORD){ showDashboard(); loadDashboard(); }
  else alert('Access Denied');
});

/* ==== Populate Topics ==== */
const topicSel = document.getElementById('topic');
Object.keys(TRAINING_LINKS).forEach(t => {
  const opt = document.createElement('option'); opt.value = t; opt.textContent = t; topicSel.appendChild(opt);
});

/* ==== Start Training ==== */
const langSel = document.getElementById('language');
const startBtn = document.getElementById('startTrainingBtn');
function currentTrainingURL(){ 
  const topic = topicSel.value; 
  const lang = langSel.value;
  return (TRAINING_LINKS[topic]||{})[lang] || '';
}
startBtn.addEventListener('click', () => {
  const url = currentTrainingURL();
  if(url && url.startsWith('http')) window.open(url, '_blank');
  else alert('Please select language and topic to start training.');
});

/* ==== Registration Submit (to GAS) with fallback local storage ==== */
const form = document.getElementById('trainingForm');
const statusEl = document.getElementById('formStatus');
function saveLocal(entry){
  const key = 'pc_registrations';
  const arr = JSON.parse(localStorage.getItem(key) || '[]');
  arr.push(entry);
  localStorage.setItem(key, JSON.stringify(arr));
}
form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  statusEl.textContent = 'Submitting...';
  const fd = new FormData(form);
  const topic = fd.get('topic'); const lang = fd.get('language');
  const payload = new URLSearchParams(fd);
  payload.append('trainingLink', (TRAINING_LINKS[topic]||{})[lang] || '');
  payload.append('timestamp', new Date().toISOString());

  try{
    const res = await fetch(SCRIPT_URL, { method:'POST', body: payload });
    if(!res.ok) throw new Error('Network error');
    statusEl.textContent = 'Registration submitted.';
  }catch(err){
    // Fallback local
    const obj = Object.fromEntries(new URLSearchParams(payload).entries());
    saveLocal(obj);
    statusEl.textContent = 'Saved locally (offline).';
  }
  form.reset();
});

/* ==== Dashboard (reads from GAS ?mode=read, otherwise uses local) ==== */
let charts = {}
function destroyIfExists(id){ if(charts[id]){ charts[id].destroy(); delete charts[id]; } }

function drawPie(id, items){
  destroyIfExists(id);
  const ctx = document.getElementById(id).getContext('2d');
  charts[id] = new Chart(ctx, { type:'pie', data:{ labels: items.map(i=>i.label), datasets:[{ data: items.map(i=>i.value) }] }, options:{ responsive:true } });
}
function drawBar(id, items){
  destroyIfExists(id);
  const ctx = document.getElementById(id).getContext('2d');
  charts[id] = new Chart(ctx, { type:'bar', data:{ labels: items.map(i=>i.label), datasets:[{ data: items.map(i=>i.value) }] }, options:{ responsive:true, scales:{ y:{ beginAtZero:true } } } });
}
function drawLine(id, items){
  destroyIfExists(id);
  const ctx = document.getElementById(id).getContext('2d');
  charts[id] = new Chart(ctx, { type:'line', data:{ labels: items.map(i=>i.label), datasets:[{ data: items.map(i=>i.value), fill:false }] }, options:{ responsive:true, scales:{ y:{ beginAtZero:true } } } });
}

async function loadDashboard(){
  const kpiTotal = document.getElementById('kpiTotal');
  const kpiToday = document.getElementById('kpiToday');
  const kpiCompanies = document.getElementById('kpiCompanies');
  const tbody = document.getElementById('tableBody');

  tbody.innerHTML = '<tr><td colspan=\"6\">Loading...</td></tr>';
  let data;
  try{
    const res = await fetch(SCRIPT_URL + '?mode=read');
    data = await res.json();
  }catch(e){
    // Build from local storage
    const arr = JSON.parse(localStorage.getItem('pc_registrations')||'[]');
    const companies = new Set(arr.map(r=>r.company||r.Company||r['Company Name']||''));
    const today = new Date().toISOString().slice(0,10);
    kpiTotal.textContent = arr.length;
    kpiToday.textContent = arr.filter(r=>(r.timestamp||'').slice(0,10)===today).length;
    kpiCompanies.textContent = Array.from(companies).filter(Boolean).length;

    tbody.innerHTML = '';
    arr.forEach((r,i)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${i+1}</td><td>${r.name||''}</td><td>${r.company||''}</td><td>${r.jobTitle||''}</td><td>${r.language||''}</td><td>${r.topic||''}</td>`;
      tbody.appendChild(tr);
    });

    // Simple charts from local
    const langMap = {}; arr.forEach(r=>{ langMap[r.language] = (langMap[r.language]||0)+1; });
    const topicMap = {}; arr.forEach(r=>{ topicMap[r.topic] = (topicMap[r.topic]||0)+1; });
    const monthlyMap = {}; arr.forEach(r=>{ const m=(r.timestamp||'').slice(0,7); if(m) monthlyMap[m]=(monthlyMap[m]||0)+1; });
    drawPie('chartLanguages', Object.entries(langMap).map(([label,value])=>({label,value})));
    drawBar('chartTopics', Object.entries(topicMap).map(([label,value])=>({label,value})));
    drawLine('chartMonthly', Object.entries(monthlyMap).map(([label,value])=>({label,value})));
    return;
  }

  // If fetched from GAS, expect structure: totals, languages, topics, monthly, rows
  kpiTotal.textContent = data?.totals?.total ?? 0;
  kpiToday.textContent = data?.totals?.today ?? 0;
  kpiCompanies.textContent = data?.totals?.companies ?? 0;

  tbody.innerHTML = '';
  (data?.rows||[]).forEach((r,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i+1}</td><td>${r.name||''}</td><td>${r.company||''}</td><td>${r.jobTitle||''}</td><td>${r.language||''}</td><td>${r.topic||''}</td>`;
    tbody.appendChild(tr);
  });

  drawPie('chartLanguages', data.languages||[]);
  drawBar('chartTopics', data.topics||[]);
  drawLine('chartMonthly', data.monthly||[]);
}

/* ==== Export local data as CSV ==== */
document.getElementById('btnExport').addEventListener('click', ()=>{
  const arr = JSON.parse(localStorage.getItem('pc_registrations')||'[]');
  if(!arr.length){ alert('No local data to export.'); return; }
  const cols = Object.keys(arr[0]);
  const csv = [cols.join(',')].concat(arr.map(o=>cols.map(c=>(''+(o[c]??'')).replace(/\"/g,'\"\"')).map(v=>`\"${v}\"`).join(','))).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'registrations.csv'; a.click();
  URL.revokeObjectURL(url);
});

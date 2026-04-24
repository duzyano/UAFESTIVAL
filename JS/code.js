// ── DATA ──────────────────────────────────────────────────────────────
const translations = {
  nl: {
    heroDate: 'Zaterdag 6 september 2025 • Utrecht',
    heroTitle: 'Welkom bij<br>❤️U Festival',
    heroSubtitle: 'Het festival voor (nieuwe) studenten in de regio Utrecht — een aanvulling op UIT. Strijkviertel, Utrecht.',
    newsLabel: 'Nieuws &amp; Meldingen',
    nc1: { tag: 'Info', title: 'Deuren open om 12:00', body: 'Het festivalterrein is geopend van 12:00 tot 23:00 uur. Houd je ticket en ID bij de hand.' },
    nc2: { tag: 'Info', title: 'Gratis shuttlebus vanaf Utrecht Centraal', body: 'Pak de gratis shuttlebus aan de Mineurslaan. Rijdt heen tot 19:00, terug vanaf 21:00.' },
    nc3: { tag: 'Info', title: 'Lockers beschikbaar op het terrein', body: 'Huur een medium of grote locker op het terrein. Niet online te reserveren.' },
    nc4: { tag: 'Info', title: 'Parkeren: VOL=VOL', body: 'Parkeer op P+R Papendorp. Koop je ticket online van tevoren. PIN ONLY bij parkeerwachter.' },
    infoLabel: 'Festival Informatie',
    schedLabel: 'Festivalprogramma',
    day1: 'Dag 1', day1sub: 'Zat 6 sep',
    day2: 'Dag 2', day2sub: '',
    tabAll: 'Alles',
    mapLabel: 'Festivalkaart',
    mapLegendLabel: 'Locaties',
    legFood: 'Food & Bar',
    legEhbo: 'Op het terrein',
    navHome: 'Home', navInfo: 'Info', navSched: 'Schema', navMap: 'Kaart',
  },
  en: {
    heroDate: 'Saturday September 6, 2025 • Utrecht',
    heroTitle: 'Welcome to<br>❤️U Festival',
    heroSubtitle: 'The festival for (new) students in the Utrecht region — a complement to UIT. Strijkviertel, Utrecht.',
    newsLabel: 'News &amp; Updates',
    nc1: { tag: 'Info', title: 'Gates open at 12:00', body: 'The festival grounds are open from 12:00 to 23:00. Have your ticket and ID ready.' },
    nc2: { tag: 'Info', title: 'Free shuttle from Utrecht Centraal', body: 'Take the free shuttle bus at Mineurslaan. Runs to the festival until 19:00, back from 21:00.' },
    nc3: { tag: 'Info', title: 'Lockers available on site', body: 'Rent a medium or large locker on the festival grounds. Cannot be reserved online.' },
    nc4: { tag: 'Info', title: 'Parking: FULL=FULL', body: 'Park at P+R Papendorp. Buy your ticket online in advance. PIN ONLY at parking attendant.' },
    infoLabel: 'Festival Information',
    schedLabel: 'Festival Schedule',
    day1: 'Day 1', day1sub: 'Sat Sep 6',
    day2: 'Day 2', day2sub: '',
    tabAll: 'All',
    mapLabel: 'Festival Map',
    mapLegendLabel: 'Locations',
    legFood: 'Food & Bar',
    legEhbo: 'On site',
    navHome: 'Home', navInfo: 'Info', navSched: 'Schedule', navMap: 'Map',
  }
};

// ── INFO DATA (edit here to update content) ───────────────────────────
// Each accordion item: { icon, title: {nl, en}, html: {nl, en} }
const infoData = [
  {
    icon: 'info',
    title: { nl: 'Algemeen & Contact', en: 'General & Contact' },
    html: {
      nl: `
        <div class="info-row"><span class="material-icons-round">favorite</span><span>❤️U Festival is voor (nieuwe) studenten in de regio Utrecht — een aanvulling op UIT.</span></div>
        <div class="info-row"><span class="material-icons-round">location_on</span><span><strong>Locatie:</strong> Strijkviertel, Utrecht</span></div>
        <div class="info-row"><span class="material-icons-round">navigation</span><span><strong>Navigatieadres:</strong> Strijkviertelweg, Utrecht</span></div>
        <div class="info-row"><span class="material-icons-round">calendar_today</span><span>Zaterdag 6 september 2025</span></div>
        <div class="info-row"><span class="material-icons-round">schedule</span><span>12:00 – 23:00 uur</span></div>
      `,
      en: `
        <div class="info-row"><span class="material-icons-round">favorite</span><span>❤️U Festival is for (new) students in the Utrecht region — a complement to UIT.</span></div>
        <div class="info-row"><span class="material-icons-round">location_on</span><span><strong>Location:</strong> Strijkviertel, Utrecht</span></div>
        <div class="info-row"><span class="material-icons-round">navigation</span><span><strong>Navigation address:</strong> Strijkviertelweg, Utrecht</span></div>
        <div class="info-row"><span class="material-icons-round">calendar_today</span><span>Saturday September 6, 2025</span></div>
        <div class="info-row"><span class="material-icons-round">schedule</span><span>12:00 – 23:00</span></div>
      `
    }
  },
  {
    icon: 'directions_bike',
    title: { nl: 'Bereikbaarheid', en: 'Getting Here' },
    html: {
      nl: `
        <div class="info-row"><span class="material-icons-round">directions_bike</span><span><strong>Fiets</strong><br>Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de gehele dag kunt stallen.</span></div>
        <div class="info-row"><span class="material-icons-round">local_parking</span><span><strong>Auto</strong><br>Parkeer op P+R Papendorp — volg de borden 'P online ticket'. Geen ticket vooraf? Koop bij de parkeerwachter op locatie (PIN ONLY). Let op: <strong>VOL = VOL</strong>.</span></div>
        <div class="info-row"><span class="material-icons-round">directions_bus</span><span><strong>OV</strong><br>Kom je met het openbaar vervoer? Plan je trip via <strong>9292.nl</strong>.</span></div>
        <div class="info-row"><span class="material-icons-round">airport_shuttle</span><span><strong>Gratis Shuttlebus</strong><br>Vanaf Utrecht Centraal (Mineurslaan) rijdt een gratis shuttlebus. Volg de witte bordjes met zwarte pijlen en '❤️U Festival'.<br><br>🚌 Richting festival: <strong>12:00 – 19:00</strong><br>🚌 Richting station: <strong>vanaf 21:00</strong></span></div>
        <div class="info-row"><span class="material-icons-round">local_taxi</span><span><strong>Taxi / Kiss &amp; Ride</strong><br>Navigeer naar Strijkviertel, De Meern (Utrecht). Volg de borden 'Kiss &amp; Ride ❤️U Festival'.</span></div>
      `,
      en: `
        <div class="info-row"><span class="material-icons-round">directions_bike</span><span><strong>Bicycle</strong><br>A large free bicycle parking area is available where you can leave your bike all day.</span></div>
        <div class="info-row"><span class="material-icons-round">local_parking</span><span><strong>Car</strong><br>Park at P+R Papendorp — follow signs for 'P online ticket'. No advance ticket? Buy one from the parking attendant on site (PIN ONLY). Note: <strong>FULL = FULL</strong>.</span></div>
        <div class="info-row"><span class="material-icons-round">directions_bus</span><span><strong>Public Transport</strong><br>Travelling by public transport? Plan your trip via <strong>9292.nl</strong>.</span></div>
        <div class="info-row"><span class="material-icons-round">airport_shuttle</span><span><strong>Free Shuttle Bus</strong><br>A free shuttle bus runs from Utrecht Centraal (Mineurslaan). Follow the white signs with black arrows and '❤️U Festival'.<br><br>🚌 To the festival: <strong>12:00 – 19:00</strong><br>🚌 To the station: <strong>from 21:00</strong></span></div>
        <div class="info-row"><span class="material-icons-round">local_taxi</span><span><strong>Taxi / Kiss &amp; Ride</strong><br>Navigate to Strijkviertel, De Meern (Utrecht). Follow the signs for 'Kiss &amp; Ride ❤️U Festival'.</span></div>
      `
    }
  },
  {
    icon: 'lock',
    title: { nl: 'Lockers', en: 'Lockers' },
    html: {
      nl: `
        <div class="info-row"><span class="material-icons-round">lock</span><span>Op het festivalterrein zijn kluisjes aanwezig waar je je spullen veilig kunt opbergen.</span></div>
        <div class="info-row"><span class="material-icons-round">checkroom</span><span>Hier passen 3 à 4 jassen in. Je kunt je kluisje gedurende de hele dag zo vaak je wilt openen en sluiten.</span></div>
        <div class="highlight-box">⚠️ Het is niet mogelijk om online een kluisje te reserveren.</div>
      `,
      en: `
        <div class="info-row"><span class="material-icons-round">lock</span><span>Lockers are available on the festival grounds where you can safely store your belongings.</span></div>
        <div class="info-row"><span class="material-icons-round">checkroom</span><span>Medium and large lockers are available. You can open and close your locker as many times as you like throughout the day.</span></div>
        <div class="highlight-box">⚠️ Online locker reservations are not possible.</div>
      `
    }
  },
  {
    icon: 'emoji_events',
    title: { nl: 'Golden-GLU', en: 'Golden-GLU' },
    html: {
      nl: `
        <div class="info-row"><span class="material-icons-round" style="color:#E3B505">workspace_premium</span><span>Studenten van het GLU hebben tijdens het festival speciale privileges en zijn herkenbaar aan een <strong style="color:#E3B505">gouden armbandje</strong>.</span></div>
        <div class="info-row"><span class="material-icons-round" style="color:#E3B505">wc</span><span>Gebruik de <strong>gouden toiletten</strong> zonder te wachten.</span></div>
        <div class="info-row"><span class="material-icons-round" style="color:#E3B505">local_bar</span><span>Bestel aan <strong>goud gemarkeerde bestelpunten</strong> aan de bars — zonder in de rij te staan.</span></div>
        <div class="highlight-box" style="background:rgba(227,181,5,.1);border-color:rgba(227,181,5,.3)">🏅 Ben jij een GLU-student? Zorg dat je je gouden armbandje bij de ingang ophaalt!</div>
      `,
      en: `
        <div class="info-row"><span class="material-icons-round" style="color:#E3B505">workspace_premium</span><span>GLU students have special privileges at the festival and are recognisable by a <strong style="color:#E3B505">golden wristband</strong>.</span></div>
        <div class="info-row"><span class="material-icons-round" style="color:#E3B505">wc</span><span>Use the <strong>golden toilets</strong> without queuing.</span></div>
        <div class="info-row"><span class="material-icons-round" style="color:#E3B505">local_bar</span><span>Order at <strong>gold-marked ordering points</strong> at the bars — no waiting in line.</span></div>
        <div class="highlight-box" style="background:rgba(227,181,5,.1);border-color:rgba(227,181,5,.3)">🏅 Are you a GLU student? Make sure to collect your golden wristband at the entrance!</div>
      `
    }
  },
  {
    icon: 'help',
    title: { nl: 'FAQ', en: 'FAQ' },
    html: {
      nl: `
        <div style="margin-bottom:14px">
          <div style="font-weight:700;margin-bottom:6px">💊 Ik gebruik medicatie. Wat nu?</div>
          <div style="color:var(--fg2);line-height:1.6;font-size:13px">Het is toegestaan om medicijnen mee te nemen in een dosis die je maximaal nodig hebt op 1 dag. Een <strong>doktersverklaring / medicatiepaspoort is verplicht</strong>. De beveiliging beoordeelt de documentatie en controleert de medicijnen. De EHBO kan medicijnen in bewaring nemen (bijv. als ze gevaarlijk zijn i.c.m. alcohol) — je kunt ze dan alleen bij de EHBO innemen.</div>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:14px;margin-bottom:14px">
          <div style="font-weight:700;margin-bottom:6px">🚪 Mag ik het festivalterrein tussentijds verlaten?</div>
          <div style="color:var(--fg2);line-height:1.6;font-size:13px">Nee, helaas niet. Om de veiligheid van alle bezoekers te waarborgen, is het niet toegestaan het terrein tussentijds te verlaten. Hier kunnen geen uitzonderingen voor worden gemaakt. Er zijn genoeg loungeplekken, foodstands &amp; bars om het een hele dag uit te houden!</div>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:14px">
          <div style="font-weight:700;margin-bottom:6px">🔒 Zijn er lockers?</div>
          <div style="color:var(--fg2);line-height:1.6;font-size:13px">Ja! Op het terrein kun je medium &amp; grote lockers huren. Niet online te reserveren.</div>
        </div>
      `,
      en: `
        <div style="margin-bottom:14px">
          <div style="font-weight:700;margin-bottom:6px">💊 I use medication. What now?</div>
          <div style="color:var(--fg2);line-height:1.6;font-size:13px">You may bring medication in a quantity sufficient for one day only. A <strong>doctor's statement / medication passport is required</strong>. Security will assess the documentation and check the medication. The first aid team may hold your medication (e.g. if dangerous in combination with alcohol) — you can only take it at the first aid post in that case.</div>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:14px;margin-bottom:14px">
          <div style="font-weight:700;margin-bottom:6px">🚪 Can I leave the festival grounds during the event?</div>
          <div style="color:var(--fg2);line-height:1.6;font-size:13px">No, unfortunately not. To ensure the safety of all visitors, leaving and re-entering the festival grounds is not permitted. No exceptions can be made. There are plenty of lounge spots, food stands &amp; bars to keep you going all day!</div>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:14px">
          <div style="font-weight:700;margin-bottom:6px">🔒 Are there lockers?</div>
          <div style="color:var(--fg2);line-height:1.6;font-size:13px">Yes! Medium &amp; large lockers are available on site. Cannot be reserved online.</div>
        </div>
      `
    }
  }
];

// ── PROGRAMME DATA ────────────────────────────────────────────────────
const programme = {
  1: [
    { stage:'main',      name:'The Opening Act',   genre:'Indie Rock',    time:'14:30', duration:60  },
    { stage:'cave',      name:'Basement Sounds',   genre:'Techno',        time:'15:00', duration:75  },
    { stage:'forest',    name:'Luna & Friends',    genre:'Folk / Soul',   time:'15:30', duration:60  },
    { stage:'main',      name:'Electronic Pulse',  genre:'Electronic',    time:'16:15', duration:75  },
    { stage:'underground',name:'Deep Down',        genre:'Deep House',    time:'16:00', duration:90  },
    { stage:'cave',      name:'DJ Artis',          genre:'House / Tech',  time:'17:00', duration:60  },
    { stage:'forest',    name:'Wild Roots',        genre:'World Music',   time:'17:15', duration:75  },
    { stage:'main',      name:'Nova Collective',   genre:'Pop / Synth',   time:'18:00', duration:75  },
    { stage:'underground',name:'Subterranean',     genre:'Drum & Bass',   time:'18:15', duration:90  },
    { stage:'cave',      name:'CAVE Residency',    genre:'Techno',        time:'19:00', duration:120 },
    { stage:'forest',    name:'Midnight Pines',    genre:'Ambient',       time:'19:30', duration:90  },
    { stage:'main',      name:'THE HEADLINER',     genre:'Electronic',    time:'20:30', duration:90  },
    { stage:'underground',name:'After Party Pt.1', genre:'House',         time:'21:00', duration:120 },
    { stage:'main',      name:'Closing Set',       genre:'Techno',        time:'23:00', duration:60  },
  ],
  2: [
    { stage:'forest',    name:'Morning Birds',     genre:'Acoustic',      time:'14:00', duration:60  },
    { stage:'cave',      name:'Sunday Sessions',   genre:'Minimal',       time:'14:30', duration:75  },
    { stage:'main',      name:'Solar Winds',       genre:'Post-Rock',     time:'15:00', duration:75  },
    { stage:'underground',name:'Rave Revival',     genre:'Rave / Hard',   time:'15:00', duration:90  },
    { stage:'forest',    name:'Echo Valley',       genre:'Psychedelic',   time:'16:00', duration:60  },
    { stage:'cave',      name:'Dusk Ritual',       genre:'Dark Techno',   time:'16:30', duration:90  },
    { stage:'main',      name:'Collective Groove', genre:'Funk / Soul',   time:'17:00', duration:75  },
    { stage:'underground',name:'The Vortex',       genre:'Industrial',    time:'17:30', duration:90  },
    { stage:'forest',    name:'Stargazers',        genre:'Downtempo',     time:'18:00', duration:75  },
    { stage:'main',      name:'HEADLINER DAY 2',   genre:'Electro Pop',   time:'20:00', duration:90  },
    { stage:'cave',      name:'Last Dance',        genre:'House',         time:'21:30', duration:90  },
    { stage:'underground',name:'Closing Rave',     genre:'Techno',        time:'22:00', duration:120 },
  ]
};

const popups = {
  'info-news': { tag: 'Info', title: 'Deuren open om 12:00', body: 'Het festivalterrein is geopend van 12:00 tot 23:00 uur op zaterdag 6 september 2025. Houd je ticket en geldig legitimatiebewijs bij de hand.' },
  'update-news': { tag: 'Info', title: 'Gratis Shuttlebus', body: 'Vanaf Utrecht Centraal (Mineurslaan) rijdt een gratis shuttlebus richting het festivalterrein. Volg de witte bordjes met zwarte pijlen en "❤️U Festival". Richting festival: 12:00–19:00. Richting station: vanaf 21:00.' },
  'lineup-news': { tag: 'Info', title: 'Lockers', body: 'Op het terrein zijn medium en grote lockers beschikbaar. Er passen 3 à 4 jassen in. Je kunt je locker de hele dag vrij openen en sluiten. Online reserveren is niet mogelijk.' },
  'parking-news': { tag: 'Info', title: 'Parkeren: P+R Papendorp', body: 'Parkeer op P+R Papendorp. Volg de borden "P online ticket". Geen ticket vooraf? Koop bij de parkeerwachter op locatie (PIN ONLY). Let op: VOL = VOL.' },
  'loc-main': { tag: 'Podium', title: 'Main Stage', body: 'Het hoofdpodium van ❤️U Festival. Gelegen op het centrale festivalterrein bij Strijkviertel, Utrecht.' },
  'loc-cave': { tag: 'Podium', title: 'Cave Stage', body: 'Een intieme podiumervaring met elektronische muziek en club sounds.' },
  'loc-forest': { tag: 'Podium', title: 'Forest Stage', body: 'Een groene setting voor rustigere en meer akoestische optredens.' },
  'loc-underground': { tag: 'Podium', title: 'Underground Stage', body: 'De meest intieme podiumervaring voor rave en elektronica.' },
  'loc-food': { tag: 'Locatie', title: 'Food & Bar', body: 'Diverse foodstands en barren verspreid over het festivalterrein. Cashless betalen aanbevolen.' },
  'loc-ehbo': { tag: 'Locatie', title: 'EHBO-post', body: 'De EHBO-post is bereikbaar op het festivalterrein. Bij nood: ga naar de dichtstbijzijnde security of EHBO-medewerker.' },
};

// ── STATE ─────────────────────────────────────────────────────────────
let currentLang = 'nl';
let currentTheme = 'light';
let currentDay = 1;
let currentStage = 'all';
let currentScreen = 'home';

// ── NAVIGATION ────────────────────────────────────────────────────────
function setScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  currentScreen = name;
  if (name === 'schedule') renderSchedule();
}

// ── THEME ─────────────────────────────────────────────────────────────
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', currentTheme);
  document.getElementById('themeIcon').textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
}

// ── LANGUAGE ─────────────────────────────────────────────────────────
function toggleLang() {
  currentLang = currentLang === 'nl' ? 'en' : 'nl';
  document.getElementById('langBtn').textContent = currentLang === 'nl' ? '🇳🇱' : '🇬🇧';
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];
  // Hero
  document.getElementById('hero-date').innerHTML = t.heroDate;
  document.getElementById('hero-title').innerHTML = t.heroTitle;
  document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
  document.getElementById('news-label').innerHTML = t.newsLabel;
  // News cards
  ['nc1','nc2','nc3','nc4'].forEach((id,i) => {
    const card = t[id];
    const el = document.getElementById(id + '-title');
    if (el) el.textContent = card.title;
    const b = document.getElementById(id + '-body');
    if (b) b.textContent = card.body;
  });
  // Info
  document.getElementById('info-screen-label').textContent = t.infoLabel;
  renderAccordion(currentLang);
  // Schedule
  document.getElementById('sched-label').textContent = t.schedLabel;
  document.getElementById('day1-btn').innerHTML = t.day1 + '<span>' + t.day1sub + '</span>';
  document.getElementById('day2-btn').innerHTML = t.day2 + '<span>' + t.day2sub + '</span>';
  document.getElementById('tab-all').textContent = t.tabAll;
  // Map
  document.getElementById('map-label').textContent = t.mapLabel;
  document.getElementById('map-legend-label').textContent = t.mapLegendLabel;
  document.getElementById('leg-food').textContent = t.legFood;
  document.getElementById('leg-ehbo').textContent = t.legEhbo;
  // Nav
  document.getElementById('nav-home-label').textContent = t.navHome;
  document.getElementById('nav-info-label').textContent = t.navInfo;
  document.getElementById('nav-sched-label').textContent = t.navSched;
  document.getElementById('nav-map-label').textContent = t.navMap;
  // Re-render schedule if open
  if (currentScreen === 'schedule') renderSchedule();
}

// ── ACCORDION RENDERER ───────────────────────────────────────────────
function renderAccordion(lang) {
  const container = document.getElementById('accordion-container');
  if (!container) return;
  container.innerHTML = infoData.map((item, i) => `
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAcc(this)">
        <div class="accordion-header-left">
          <div class="accordion-icon-wrap"><span class="material-icons-round">${item.icon}</span></div>
          <div class="accordion-title">${item.title[lang]}</div>
        </div>
        <span class="material-icons-round accordion-chevron">expand_more</span>
      </div>
      <div class="accordion-body">
        <div class="accordion-content">${item.html[lang]}</div>
      </div>
    </div>
  `).join('');
}

function toggleAcc(header) {
  const item = header.closest('.accordion-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── SCHEDULE ─────────────────────────────────────────────────────────
function setDay(d) {
  currentDay = d;
  document.getElementById('day1-btn').classList.toggle('active', d === 1);
  document.getElementById('day2-btn').classList.toggle('active', d === 2);
  renderSchedule();
}

function setStage(s, btn) {
  currentStage = s;
  document.querySelectorAll('.stage-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderSchedule();
}

function timeToMins(t) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}
function minsToTime(m) {
  const h = Math.floor(m / 60) % 24;
  const min = m % 60;
  return (h < 10 ? '0' : '') + h + ':' + (min < 10 ? '0' : '') + min;
}

function renderSchedule() {
  const grid = document.getElementById('time-grid');
  const acts = programme[currentDay].filter(a =>
    currentStage === 'all' || a.stage === currentStage
  );

  if (acts.length === 0) {
    grid.innerHTML = '<div style="text-align:center;padding:40px 20px;color:var(--fg2);font-style:italic;font-size:14px">Geen optredens voor dit podium.</div>';
    return;
  }

  // Sort by time
  const sorted = [...acts].sort((a,b) => timeToMins(a.time) - timeToMins(b.time));

  // Group by 30-min slots
  const minStart = timeToMins(sorted[0].time);
  const maxEnd   = Math.max(...sorted.map(a => timeToMins(a.time) + a.duration));

  let html = '';
  for (let m = minStart; m <= maxEnd; m += 30) {
    const slotActs = sorted.filter(a => timeToMins(a.time) >= m && timeToMins(a.time) < m + 30);
    html += `<div class="time-slot">
      <div class="time-label">${minsToTime(m)}</div>
      <div class="time-line-area">
        <div class="time-line"></div>
        ${slotActs.map(a => `
          <div class="act-block stage-${a.stage}" onclick="openActPopup(${JSON.stringify(a).replace(/"/g,'&quot;')})">
            <div class="act-name">${a.name}</div>
            <div class="act-meta">${a.time} · ${a.duration} min · ${stageLabel(a.stage)}</div>
            <div class="act-genre-badge">${a.genre}</div>
          </div>`).join('')}
      </div>
    </div>`;
  }
  grid.innerHTML = html;
}

function stageLabel(s) {
  const labels = { main: 'Main Stage', cave: 'Cave', forest: 'Forest Stage', underground: 'Underground' };
  return labels[s] || s;
}

function openActPopup(act) {
  const inner = document.getElementById('popup-inner');
  inner.innerHTML = `
    <div class="popup-tag">${stageLabel(act.stage)}</div>
    <div class="popup-title">${act.name}</div>
    <div class="popup-sub">${act.genre}</div>
    <div class="popup-body">
      <div class="info-row" style="margin-bottom:8px"><span class="material-icons-round" style="font-size:18px;color:var(--accent)">schedule</span><span><strong>${act.time}</strong> – ${minsToTime(timeToMins(act.time) + act.duration)} (${act.duration} min)</span></div>
      <div class="info-row"><span class="material-icons-round" style="font-size:18px;color:var(--cerulean)">place</span><span>${stageLabel(act.stage)}</span></div>
    </div>`;
  document.getElementById('popup-overlay').classList.add('open');
}

// ── POPUPS ────────────────────────────────────────────────────────────
function openPopup(key) {
  const p = popups[key];
  if (!p) return;
  document.getElementById('popup-inner').innerHTML = `
    ${p.tag ? `<div class="popup-tag">${p.tag}</div>` : ''}
    <div class="popup-title">${p.title}</div>
    <div class="popup-body" style="margin-top:10px">${p.body}</div>`;
  document.getElementById('popup-overlay').classList.add('open');
}

function closePopup(e) {
  if (!e || e.target === document.getElementById('popup-overlay') || e.type !== 'click' || e.currentTarget.classList.contains('popup-close')) {
    document.getElementById('popup-overlay').classList.remove('open');
  }
}

// ── INIT ──────────────────────────────────────────────────────────────
renderAccordion(currentLang);
renderSchedule();
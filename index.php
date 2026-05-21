<?php // U Festival App ?>
<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>U Festival</title>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div id="app">
  <div class="topbar">
    <div class="topbar-logo">
      <svg width="34" height="34" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="black"/>
        <!-- Heart -->
        <path d="M50 38 C50 38 35 25 25 32 C15 39 18 52 30 60 L50 76 L70 60 C82 52 85 39 75 32 C65 25 50 38 50 38Z" fill="#F03228"/>
        <!-- U -->
        <path d="M32 30 L32 55 C32 65 40 72 50 72 C60 72 68 65 68 55 L68 30" stroke="white" stroke-width="10" stroke-linecap="round" fill="none"/>
      </svg>
      <span class="topbar-logo-text">Festival</span>
    </div>
    <div class="topbar-controls">
      <button class="ctrl-btn" onclick="toggleLang()" id="langBtn" title="Taal">🇳🇱</button>
      <button class="ctrl-btn" onclick="toggleTheme()" title="Thema">
        <span class="material-icons-round" id="themeIcon" style="font-size:18px">dark_mode</span>
      </button>
    </div>
  </div>

  <div class="screens">
    <!-- HOME -->
    <div class="screen active" id="screen-home">
      <div class="hero-section">
        <div class="hero-date" id="hero-date">Zaterdag 6 september 2025 • Utrecht</div>
        <div class="hero-title" id="hero-title">Welkom bij<br>❤️U Festival</div>
        <div class="hero-subtitle" id="hero-subtitle">Het festival voor (nieuwe) studenten in de regio Utrecht — een aanvulling op UIT. Strijkviertel, Utrecht.</div>
      </div>
      <div class="section-label" id="news-label">Nieuws &amp; Meldingen</div>
      <div class="news-card news-card-info" onclick="openPopup('nc1')">
        <div class="news-card-tag tag-info">Info</div>
        <div class="news-card-title" id="nc1-title">Deuren open om 10:00</div>
        <div class="news-card-body" id="nc1-body">Het festivalterrein is geopend van 10:00 tot 23:45 uur. Houd je ticket en ID bij de hand.</div>
      </div>
      <div class="news-card news-card-info" onclick="openPopup('nc2')">
        <div class="news-card-tag tag-info">Info</div>
        <div class="news-card-title" id="nc2-title">Gratis shuttlebus vanaf Utrecht Centraal</div>
        <div class="news-card-body" id="nc2-body">Pak de gratis shuttlebus aan de Mineurslaan. Rijdt heen tot 19:00, terug vanaf 21:00.</div>
      </div>
      <div class="news-card news-card-info" onclick="openPopup('nc3')">
        <div class="news-card-tag tag-info">Info</div>
        <div class="news-card-title" id="nc3-title">Lockers beschikbaar op het terrein</div>
        <div class="news-card-body" id="nc3-body">Huur een medium of grote locker op het terrein. Niet online te reserveren.</div>
      </div>
      <div class="news-card news-card-info" onclick="openPopup('nc4')">
        <div class="news-card-tag tag-info">Info</div>
        <div class="news-card-title" id="nc4-title">Parkeren: VOL=VOL</div>
        <div class="news-card-body" id="nc4-body">Parkeer op P+R Papendorp. Koop je ticket online van tevoren. PIN ONLY bij parkeerwachter.</div>
      </div>
    </div>

    <!-- INFO -->
    <div class="screen" id="screen-info">
      <div class="section-label" id="info-screen-label">Festival Informatie</div>
      <div id="accordion-container"></div>
    </div>

    <!-- SCHEDULE -->
    <div class="screen" id="screen-schedule">
      <div class="section-label" id="sched-label">Festivalprogramma</div>
      <div class="day-selector">
        <button class="day-btn active" id="day1-btn" onclick="setDay(1)">Dag 1<span>Zat 6 sep</span></button>
        <button class="day-btn" id="day2-btn" onclick="setDay(2)">Dag 2<span>Zo 7 sep</span></button>
      </div>
      <div class="stage-tabs" id="stage-tabs">
        <button class="stage-tab active" onclick="setStage('all',this)" id="tab-all">Alles</button>
        <button class="stage-tab" onclick="setStage('poton',this)">Poton</button>
        <button class="stage-tab" onclick="setStage('thelake',this)">The Lake</button>
        <button class="stage-tab" onclick="setStage('theclub',this)">The Club</button>
        <button class="stage-tab" onclick="setStage('hanggar',this)">Hanggar</button>
      </div>
      <div id="time-grid"></div>
    </div>

    <!-- MAP -->
    <div class="screen" id="screen-map">
      <div class="section-label" id="map-label">Festivalkaart</div>
      <div class="map-container">
        <svg class="map-svg" viewBox="0 0 400 440" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="440" fill="var(--bg2)"/>
          <!-- terrain outline -->
          <path d="M30 60 L370 60 L370 380 L30 380 Z" fill="none" stroke="var(--border)" stroke-width="2" stroke-dasharray="8,4"/>
          <!-- Main entrance -->
          <rect x="160" y="360" width="80" height="20" rx="4" fill="var(--cerulean)" opacity=".3"/>
          <text x="200" y="374" text-anchor="middle" font-size="9" fill="var(--cerulean)" font-weight="700">INGANG</text>
          <!-- Poton stage -->
          <rect x="140" y="80" width="120" height="70" rx="8" fill="rgba(240,50,40,.2)" stroke="var(--accent)" stroke-width="1.5"/>
          <text x="200" y="118" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">POTON</text>
          <text x="200" y="132" text-anchor="middle" font-size="9" fill="var(--fg2)">Hoofdpodium</text>
          <!-- The Lake -->
          <rect x="40" y="180" width="100" height="60" rx="8" fill="rgba(36,123,160,.2)" stroke="var(--cerulean)" stroke-width="1.5"/>
          <text x="90" y="213" text-anchor="middle" font-size="10" fill="var(--cerulean)" font-weight="700">THE LAKE</text>
          <text x="90" y="227" text-anchor="middle" font-size="9" fill="var(--fg2)">Talentpodium</text>
          <!-- The Club -->
          <rect x="260" y="180" width="100" height="60" rx="8" fill="rgba(227,181,5,.2)" stroke="var(--saffron)" stroke-width="1.5"/>
          <text x="310" y="213" text-anchor="middle" font-size="10" fill="var(--saffron)" font-weight="700">THE CLUB</text>
          <text x="310" y="227" text-anchor="middle" font-size="9" fill="var(--fg2)">Entertainment</text>
          <!-- Hanggar -->
          <rect x="140" y="270" width="120" height="60" rx="8" fill="rgba(139,92,246,.2)" stroke="var(--purple)" stroke-width="1.5"/>
          <text x="200" y="303" text-anchor="middle" font-size="10" fill="var(--purple)" font-weight="700">HANGGAR</text>
          <text x="200" y="317" text-anchor="middle" font-size="9" fill="var(--fg2)">DJ stage</text>
          <!-- Food -->
          <circle cx="80" cy="310" r="18" fill="rgba(240,50,40,.1)" stroke="var(--accent)" stroke-width="1.5" onclick="openPopup('loc-food')" style="cursor:pointer"/>
          <text x="80" y="314" text-anchor="middle" font-size="9" fill="var(--accent)" font-weight="700">🍺</text>
          <!-- EHBO -->
          <circle cx="330" cy="310" r="18" fill="rgba(240,50,40,.1)" stroke="var(--accent)" stroke-width="1.5" onclick="openPopup('loc-ehbo')" style="cursor:pointer"/>
          <text x="330" y="314" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">+</text>
          <!-- Fiets parking -->
          <rect x="40" y="80" width="70" height="50" rx="6" fill="rgba(36,123,160,.1)" stroke="var(--cerulean)" stroke-width="1"/>
          <text x="75" y="107" text-anchor="middle" font-size="9" fill="var(--cerulean)">🚲 Fiets</text>
          <!-- Auto parking -->
          <rect x="300" y="80" width="60" height="50" rx="6" fill="rgba(36,123,160,.1)" stroke="var(--cerulean)" stroke-width="1"/>
          <text x="330" y="107" text-anchor="middle" font-size="9" fill="var(--cerulean)">🅿 Auto</text>
          <!-- title -->
          <text x="200" y="420" text-anchor="middle" font-size="10" fill="var(--fg2)">Strijkviertel, Utrecht</text>
        </svg>
      </div>
      <div class="section-label" id="map-legend-label">Locaties</div>
      <div class="map-legend">
        <div class="legend-item" onclick="openPopup('loc-poton')">
          <div class="legend-dot" style="background:var(--accent)"></div>
          <div><div class="legend-item-label">Poton</div><div class="legend-item-sub">Hoofdpodium</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-thelake')">
          <div class="legend-dot" style="background:var(--cerulean)"></div>
          <div><div class="legend-item-label">The Lake</div><div class="legend-item-sub">Talentpodium</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-theclub')">
          <div class="legend-dot" style="background:var(--saffron)"></div>
          <div><div class="legend-item-label">The Club</div><div class="legend-item-sub">Entertainment</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-hanggar')">
          <div class="legend-dot" style="background:var(--purple)"></div>
          <div><div class="legend-item-label">Hanggar</div><div class="legend-item-sub">DJ Stage</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-food')" id="leg-food-item">
          <div class="legend-dot" style="background:var(--accent)"></div>
          <div><div class="legend-item-label" id="leg-food">Food &amp; Bar</div><div class="legend-item-sub">Cashless</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-ehbo')" id="leg-ehbo-item">
          <div class="legend-dot" style="background:#22c55e"></div>
          <div><div class="legend-item-label" id="leg-ehbo">Op het terrein</div><div class="legend-item-sub">EHBO</div></div>
        </div>
      </div>
    </div>
  </div>

  <nav class="bottom-nav">
    <button class="nav-item active" id="nav-home" onclick="setScreen('home')">
      <span class="material-icons-round">home</span>
      <span class="nav-label" id="nav-home-label">Home</span>
    </button>
    <button class="nav-item" id="nav-info" onclick="setScreen('info')">
      <span class="material-icons-round">info</span>
      <span class="nav-label" id="nav-info-label">Info</span>
    </button>
    <button class="nav-item" id="nav-schedule" onclick="setScreen('schedule')">
      <span class="material-icons-round">calendar_month</span>
      <span class="nav-label" id="nav-sched-label">Schema</span>
    </button>
    <button class="nav-item" id="nav-map" onclick="setScreen('map')">
      <span class="material-icons-round">map</span>
      <span class="nav-label" id="nav-map-label">Kaart</span>
    </button>
  </nav>
</div>

<!-- ACT DETAIL FULL SCREEN -->
<div class="act-detail-screen" id="act-detail-screen">
  <div class="act-detail-topbar">
    <button class="act-detail-back" onclick="closeActDetail()">
      <span class="material-icons-round">arrow_back_ios</span>
      <span>Festival</span>
    </button>
    <div class="act-detail-topbar-title">Festival</div>
    <div style="width:80px;display:flex;justify-content:flex-end">
      <button class="ctrl-btn" onclick="toggleLangFromDetail()" id="langBtnDetail">🇳🇱</button>
    </div>
  </div>
  <div id="act-detail-content" style="flex:1;overflow-y:auto;display:flex;flex-direction:column">
    <!-- filled by JS -->
  </div>
</div>

<!-- POPUP -->
<div class="popup-overlay" id="popup-overlay" onclick="closePopup(event)">
  <div class="popup-sheet">
    <div class="popup-handle"></div>
    <button class="popup-close" onclick="document.getElementById('popup-overlay').classList.remove('open')">
      <span class="material-icons-round" style="font-size:18px">close</span>
    </button>
    <div id="popup-inner"></div>
  </div>
</div>

<script src="app.js"></script>
</body>
</html>
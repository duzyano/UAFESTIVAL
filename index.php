<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#000000">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<title>Festival App</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
<link rel="stylesheet" href="style/style.css">
</head>
<body data-theme="light">

<div id="app">
  <!-- TOP BAR -->
  <header class="topbar">
    <div class="topbar-logo">
      <!-- Logo SVG inline (black/white adaptive) -->
      <svg viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg" id="logo-svg">
        <text x="0" y="30" font-family="Sansation, sans-serif" font-weight="700" font-size="26" fill="currentColor">❤️U Festival</text>
      </svg>
    </div>
    <div class="topbar-controls">
      <button class="ctrl-btn flag-btn" id="langBtn" title="Language" onclick="toggleLang()">🇳🇱</button>
      <button class="ctrl-btn" id="themeBtn" onclick="toggleTheme()" title="Theme">
        <span class="material-icons-round" style="font-size:18px" id="themeIcon">dark_mode</span>
      </button>
    </div>
  </header>

  <!-- SCREENS -->
  <div class="screens">

    <!-- HOME -->
    <section class="screen active" id="screen-home">
      <div class="hero-section">
        <div class="hero-date" id="hero-date">Zaterdag 6 september 2025 • Utrecht</div>
        <div class="hero-title" id="hero-title">Welkom bij<br>❤️U Festival</div>
        <div class="hero-subtitle" id="hero-subtitle">Het festival voor (nieuwe) studenten in de regio Utrecht — een aanvulling op UIT. Strijkviertel, Utrecht.</div>
      </div>

      <div class="section-label" id="news-label">Nieuws &amp; Meldingen</div>

      <div class="news-card news-card-info" onclick="openPopup('info-news')">
        <span class="news-card-tag tag-info" id="tag-info">Info</span>
        <div class="news-card-title" id="nc1-title">Deuren open om 12:00</div>
        <div class="news-card-body" id="nc1-body">Het festivalterrein is geopend van 12:00 tot 23:00 uur. Houd je ticket en ID bij de hand.</div>
        <div class="news-card-time">Zaterdag 6 september</div>
      </div>

      <div class="news-card news-card-accent" onclick="openPopup('update-news')">
        <span class="news-card-tag tag-update" id="tag-update">Info</span>
        <div class="news-card-title" id="nc2-title">Gratis shuttlebus vanaf Utrecht Centraal</div>
        <div class="news-card-body" id="nc2-body">Pak de gratis shuttlebus aan de Mineurslaan. Volg de witte bordjes met zwarte pijlen én '❤️U Festival'.</div>
        <div class="news-card-time">Zaterdag 6 september</div>
      </div>

      <div class="news-card news-card-lineup" onclick="openPopup('lineup-news')">
        <span class="news-card-tag tag-lineup" id="tag-lineup">Info</span>
        <div class="news-card-title" id="nc3-title">Lockers beschikbaar op het terrein</div>
        <div class="news-card-body" id="nc3-body">Huur een medium of grote locker op het terrein. Niet online te reserveren.</div>
        <div class="news-card-time">Zaterdag 6 september</div>
      </div>

      <div class="news-card news-card-info" onclick="openPopup('parking-news')">
        <span class="news-card-tag tag-info">Info</span>
        <div class="news-card-title" id="nc4-title">Parkeren: VOL = VOL</div>
        <div class="news-card-body" id="nc4-body">Parkeer op P+R Papendorp. Koop je ticket online van tevoren. PIN ONLY bij de parkeerwachter op locatie.</div>
        <div class="news-card-time">Zaterdag 6 september</div>
      </div>
    </section>

    <!-- INFO -->
    <section class="screen" id="screen-info">
      <div class="section-label" id="info-screen-label">Festival Informatie</div>
      <div id="accordion-container"></div>
    </section>

    <!-- SCHEDULE -->
    <section class="screen" id="screen-schedule">
      <div class="section-label" id="sched-label">Festivalprogramma</div>

      <div class="day-selector">
        <button class="day-btn active" id="day1-btn" onclick="setDay(1)">
          Dag 1<span>Zat 13 jun</span>
        </button>
        <button class="day-btn" id="day2-btn" onclick="setDay(2)">
          Dag 2<span>Zon 14 jun</span>
        </button>
      </div>

      <div class="stage-tabs" id="stage-tabs">
        <button class="stage-tab active" onclick="setStage('all',this)" id="tab-all">Alles</button>
        <button class="stage-tab" onclick="setStage('main',this)">Main Stage</button>
        <button class="stage-tab" onclick="setStage('cave',this)">Cave</button>
        <button class="stage-tab" onclick="setStage('forest',this)">Forest</button>
        <button class="stage-tab" onclick="setStage('underground',this)">Underground</button>
      </div>

      <div class="time-grid" id="time-grid"></div>
    </section>

    <!-- MAP -->
    <section class="screen" id="screen-map">
      <div class="section-label" id="map-label">Festivalkaart</div>

      <div class="map-container">
        <svg class="map-svg" viewBox="0 0 300 330" xmlns="http://www.w3.org/2000/svg" id="festival-map">
          <!-- Ground -->
          <rect width="300" height="330" fill="#1a1a2e" rx="4"/>
          <!-- Grass areas -->
          <ellipse cx="150" cy="160" rx="130" ry="120" fill="#1e3a2f" opacity=".8"/>
          <!-- Paths -->
          <line x1="150" y1="310" x2="150" y2="50" stroke="#2d2d2d" stroke-width="14" opacity=".7"/>
          <line x1="20" y1="165" x2="280" y2="165" stroke="#2d2d2d" stroke-width="10" opacity=".6"/>
          <line x1="80" y1="90" x2="220" y2="240" stroke="#2d2d2d" stroke-width="8" opacity=".4"/>

          <!-- MAIN STAGE -->
          <rect x="110" y="30" width="80" height="50" rx="6" fill="#F03228" opacity=".9"/>
          <text x="150" y="50" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="8" font-weight="700">MAIN</text>
          <text x="150" y="62" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="7">STAGE</text>

          <!-- CAVE STAGE -->
          <rect x="20" y="110" width="70" height="44" rx="6" fill="#247BA0" opacity=".9"/>
          <text x="55" y="128" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="8" font-weight="700">CAVE</text>
          <text x="55" y="140" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="7">STAGE</text>

          <!-- FOREST STAGE -->
          <rect x="210" y="100" width="70" height="44" rx="6" fill="#E3B505" opacity=".9"/>
          <text x="245" y="118" text-anchor="middle" fill="#000" font-family="Sansation,sans-serif" font-size="8" font-weight="700">FOREST</text>
          <text x="245" y="130" text-anchor="middle" fill="#000" font-family="Sansation,sans-serif" font-size="7">STAGE</text>

          <!-- UNDERGROUND STAGE -->
          <rect x="80" y="220" width="80" height="44" rx="6" fill="#8B5CF6" opacity=".9"/>
          <text x="120" y="238" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="7" font-weight="700">UNDERGROUND</text>
          <text x="120" y="250" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="7">STAGE</text>

          <!-- ENTRANCE -->
          <rect x="120" y="290" width="60" height="30" rx="4" fill="#444"/>
          <text x="150" y="309" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="8">INGANG</text>

          <!-- FOOD AREA -->
          <circle cx="200" cy="190" r="22" fill="#2d5a27" stroke="#4a7c59" stroke-width="1.5"/>
          <text x="200" y="188" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="7" font-weight="700">FOOD</text>
          <text x="200" y="198" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="7">&amp; BAR</text>

          <!-- EHBO -->
          <circle cx="60" cy="210" r="16" fill="#dc2626" opacity=".85"/>
          <text x="60" y="208" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="9" font-weight="700">+</text>
          <text x="60" y="218" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="6">EHBO</text>

          <!-- TOILETS -->
          <circle cx="230" cy="240" r="14" fill="#374151" stroke="#6b7280" stroke-width="1"/>
          <text x="230" y="238" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="7">🚻</text>
          <text x="230" y="248" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="5">WC</text>

          <!-- INFO TENT -->
          <circle cx="150" cy="170" r="12" fill="#374151" stroke="#6b7280" stroke-width="1"/>
          <text x="150" y="168" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="8" font-weight="700">i</text>
          <text x="150" y="178" text-anchor="middle" fill="white" font-family="Sansation,sans-serif" font-size="5">INFO</text>

          <!-- GPS location pulse -->
          <circle cx="170" cy="190" r="10" fill="#247BA0" opacity=".2" class="location-pulse"/>
          <circle cx="170" cy="190" r="5" fill="#247BA0"/>
          <circle cx="170" cy="190" r="2.5" fill="white"/>
        </svg>

        <div class="map-controls">
          <div class="map-ctrl-btn" onclick="alert('GPS actief')">
            <span class="material-icons-round" style="font-size:18px;color:var(--cerulean)">my_location</span>
          </div>
          <div class="map-ctrl-btn" onclick="alert('Zoom in')">
            <span class="material-icons-round" style="font-size:18px">add</span>
          </div>
          <div class="map-ctrl-btn" onclick="alert('Zoom out')">
            <span class="material-icons-round" style="font-size:18px">remove</span>
          </div>
        </div>
      </div>

      <div class="section-label" id="map-legend-label">Locaties</div>
      <div class="map-legend">
        <div class="legend-item" onclick="openPopup('loc-main')">
          <div class="legend-dot" style="background:#F03228"></div>
          <div><div class="legend-item-label">Main Stage</div><div class="legend-item-sub">Noordzijde</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-cave')">
          <div class="legend-dot" style="background:#247BA0"></div>
          <div><div class="legend-item-label">Cave</div><div class="legend-item-sub">Westzijde</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-forest')">
          <div class="legend-dot" style="background:#E3B505"></div>
          <div><div class="legend-item-label">Forest Stage</div><div class="legend-item-sub">Oostzijde</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-underground')">
          <div class="legend-dot" style="background:#8B5CF6"></div>
          <div><div class="legend-item-label">Underground</div><div class="legend-item-sub">Zuidzijde</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-food')">
          <div class="legend-dot" style="background:#4a7c59"></div>
          <div><div class="legend-item-label" id="leg-food">Food &amp; Bar</div><div class="legend-item-sub">Centrum</div></div>
        </div>
        <div class="legend-item" onclick="openPopup('loc-ehbo')">
          <div class="legend-dot" style="background:#dc2626"></div>
          <div><div class="legend-item-label">EHBO</div><div class="legend-item-sub" id="leg-ehbo">Westzijde</div></div>
        </div>
      </div>
    </section>

  </div>

  <!-- BOTTOM NAV -->
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
      <span class="material-icons-round">grid_view</span>
      <span class="nav-label" id="nav-sched-label">Schema</span>
    </button>
    <button class="nav-item" id="nav-map" onclick="setScreen('map')">
      <span class="material-icons-round">map</span>
      <span class="nav-label" id="nav-map-label">Kaart</span>
    </button>
  </nav>
</div>

<!-- POPUP OVERLAY -->
<div class="popup-overlay" id="popup-overlay" onclick="closePopup(event)">
  <div class="popup-sheet" id="popup-sheet">
    <div class="popup-handle"></div>
    <button class="popup-close" onclick="closePopup()"><span class="material-icons-round" style="font-size:16px">close</span></button>
    <div id="popup-inner"></div>
  </div>
</div>

<script src="JS/code.js"></script>
</body>
</html>
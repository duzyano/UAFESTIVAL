<?php // ❤️U Festival App ?>
<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>❤️U Festival</title>
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
      <div id="map-topbar">
        <div class="section-label" id="map-label" style="margin:0">Festivalkaart</div>
      </div>

      <div id="map-viewport">
        <div id="map-canvas">
          <div id="map-svg-wrap">
            <!-- Real festival SVG embedded — loads from file, fallback to img -->
            <img src="assets/kaart_festival_markers.svg" alt="Festivalkaart"
                 style="width:700px;height:auto;display:block" draggable="false"
                 id="map-img">
          </div>

          <!-- Stage markers corrected to SVG 2330x1353 positions -->
          <!-- Ponton(1):  rode gebouw links cx≈310,cy≈870  → 13.3%, 64.3% -->
          <!-- The Lake(2):waterrand links   cx≈680,cy≈700  → 29.2%, 51.7% -->
          <!-- The Club(3):pier midden       cx≈1020,cy≈660 → 43.8%, 48.8% -->
          <!-- Hangar(4):  loods rechts      cx≈1890,cy≈310 → 81.1%, 22.9% -->
          <div class="map-marker m-1" style="left:13.3%;top:64.3%" onclick="openStagePopup('poton')">
            <div class="marker-pin">
              <div class="marker-circle">1</div>
              <div class="marker-tail"></div>
            </div>
          </div>
          <div class="map-marker m-2" style="left:29.2%;top:51.7%" onclick="openStagePopup('thelake')">
            <div class="marker-pin">
              <div class="marker-circle">2</div>
              <div class="marker-tail"></div>
            </div>
          </div>
          <div class="map-marker m-3" style="left:43.8%;top:48.8%" onclick="openStagePopup('theclub')">
            <div class="marker-pin">
              <div class="marker-circle">3</div>
              <div class="marker-tail"></div>
            </div>
          </div>
          <div class="map-marker m-4" style="left:81.1%;top:22.9%" onclick="openStagePopup('hanggar')">
            <div class="marker-pin">
              <div class="marker-circle">4</div>
              <div class="marker-tail"></div>
            </div>
          </div>

          <!-- User location dot (hidden until GPS acquired) -->
          <div class="map-marker" id="user-loc-marker" style="display:none;left:50%;top:50%">
            <div class="user-dot"></div>
          </div>
        </div>

        <!-- Zoom / locate buttons -->
        <div id="map-controls">
          <button class="map-ctrl-btn" onclick="mapZoom(1.3)" title="Inzoomen">
            <span class="material-icons-round" style="font-size:20px">add</span>
          </button>
          <button class="map-ctrl-btn" onclick="mapZoom(0.77)" title="Uitzoomen">
            <span class="material-icons-round" style="font-size:20px">remove</span>
          </button>
          <button class="map-ctrl-btn" onclick="mapReset()" title="Alles zichtbaar">
            <span class="material-icons-round" style="font-size:20px">fit_screen</span>
          </button>
          <button class="map-ctrl-btn" onclick="locateUser()" title="Mijn locatie" id="locate-btn">
            <span class="material-icons-round" style="font-size:20px">my_location</span>
          </button>
        </div>
      </div>

      <!-- Legend -->
      <div id="map-legend-wrap">
        <div class="section-label" id="map-legend-label" style="margin-bottom:8px">Locaties</div>
        <div class="map-legend">
          <div class="legend-item" onclick="openStagePopup('poton')">
            <div class="legend-dot" style="background:#F03228"></div>
            <div><div class="legend-item-label">1 · Ponton</div><div class="legend-item-sub" id="leg-1-sub">Hoofdpodium</div></div>
          </div>
          <div class="legend-item" onclick="openStagePopup('thelake')">
            <div class="legend-dot" style="background:#F03228"></div>
            <div><div class="legend-item-label">2 · The Lake</div><div class="legend-item-sub" id="leg-2-sub">Talent</div></div>
          </div>
          <div class="legend-item" onclick="openStagePopup('theclub')">
            <div class="legend-dot" style="background:#F03228"></div>
            <div><div class="legend-item-label">3 · The Club</div><div class="legend-item-sub" id="leg-3-sub">Theater &amp; Comedy</div></div>
          </div>
          <div class="legend-item" onclick="openStagePopup('hanggar')">
            <div class="legend-dot" style="background:#F03228"></div>
            <div><div class="legend-item-label">4 · Hangar</div><div class="legend-item-sub" id="leg-4-sub">House / Techno</div></div>
          </div>
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

// ── TRANSLATIONS ──────────────────────────────────────────────────────
const T = {
  nl: {
    heroDate: 'Zaterdag 6 september 2025 • Utrecht',
    heroTitle: 'Welkom bij<br>❤️U Festival',
    heroSub: 'Het festival voor (nieuwe) studenten in de regio Utrecht — een aanvulling op UIT. Strijkviertel, Utrecht.',
    newsLabel: 'Nieuws &amp; Meldingen',
    nc1t: 'Deuren open om 10:00', nc1b: 'Het festivalterrein is geopend van 10:00 tot 23:45 uur. Houd je ticket en ID bij de hand.',
    nc2t: 'Gratis shuttlebus vanaf Utrecht Centraal', nc2b: 'Pak de gratis shuttlebus aan de Mineurslaan. Rijdt heen tot 19:00, terug vanaf 21:00.',
    nc3t: 'Lockers beschikbaar', nc3b: 'Huur een medium of grote locker op het terrein. Niet online te reserveren.',
    nc4t: 'Parkeren: VOL=VOL', nc4b: 'Parkeer op P+R Papendorp. Koop je ticket online van tevoren. PIN ONLY bij parkeerwachter.',
    infoLabel: 'Festival Informatie',
    schedLabel: 'Festivalprogramma',
    day1: 'Dag 1', day1s: 'Zat 6 sep', day2: 'Dag 2', day2s: 'Zo 7 sep',
    tabAll: 'Alles',
    mapLabel: 'Festivalkaart', mapLeg: 'Locaties', legFood: 'Food & Bar', legEhbo: 'Op het terrein',
    hint: 'Scroll horizontaal voor het blokkenschema.',
    notify: 'Meldingen inschakelen',
    favAdd: 'Markeer favoriet', favRemove: 'Verwijder favoriet',
    navHome: 'Home', navInfo: 'Info', navSched: 'Schema', navMap: 'Kaart',
    watchVideo: 'Bekijk video',
  },
  en: {
    heroDate: 'Saturday September 6, 2025 • Utrecht',
    heroTitle: 'Welcome to<br>❤️U Festival',
    heroSub: 'The festival for (new) students in the Utrecht region — a complement to UIT. Strijkviertel, Utrecht.',
    newsLabel: 'News &amp; Updates',
    nc1t: 'Gates open at 10:00', nc1b: 'The festival grounds are open from 10:00 to 23:45. Have your ticket and ID ready.',
    nc2t: 'Free shuttle from Utrecht Centraal', nc2b: 'Take the free shuttle bus at Mineurslaan. Runs to festival until 19:00, back from 21:00.',
    nc3t: 'Lockers available on site', nc3b: 'Rent a medium or large locker on the festival grounds. Cannot be reserved online.',
    nc4t: 'Parking: FULL=FULL', nc4b: 'Park at P+R Papendorp. Buy your ticket online in advance. PIN ONLY at parking attendant.',
    infoLabel: 'Festival Information',
    schedLabel: 'Festival Schedule',
    day1: 'Day 1', day1s: 'Sat Sep 6', day2: 'Day 2', day2s: 'Sun Sep 7',
    tabAll: 'All',
    mapLabel: 'Festival Map', mapLeg: 'Locations', legFood: 'Food & Bar', legEhbo: 'On site',
    hint: 'Scroll horizontally to explore the block schedule.',
    notify: 'Enable reminders',
    favAdd: 'Save favorite', favRemove: 'Remove favorite',
    navHome: 'Home', navInfo: 'Info', navSched: 'Schedule', navMap: 'Map',
    watchVideo: 'Watch video',
  }
};

// ── ACTS DATA ─────────────────────────────────────────────────────────
// Images: assets/image.png = Armin, image copy.png = Martin, image copy 2.png = Kensington, etc.
const acts = {
  armin: {
    name: 'Armin van Buuren',
    short: { nl: 'trance icon', en: 'trance icon' },
    desc: {
      nl: 'Vijf keer uitgeroepen tot "World\'s No. 1 DJ". Armin brengt euforische, energieke sets die festivals als Tomorrowland en Ultra vullen. Zijn opbeurende melodieën en vloeiende mixen houden mensen urenlang dansen.',
      en: 'Five-time "World\'s No. 1 DJ" and trance icon, Armin delivers euphoric, high-energy sets that have headlined festivals from Tomorrowland to Ultra. His uplifting melodies and impeccable mixing keep crowds dancing for hours.'
    },
    img: 'assets/image.png',
    video: 'https://www.youtube.com/watch?v=TxvpctgU_s8'
  },
  martin: {
    name: 'Martin Garrix',
    short: { nl: 'EDM superstar', en: 'EDM superstar' },
    desc: {
      nl: 'Martin brak door als tiener met "Animals" en groeide uit tot een van de grootste namen in EDM. Zijn anthems en stadiondrops maken hem tot een gegarandeerde festivalhit in heel Europa.',
      en: 'Broke through as a teenager with "Animals," Martin Garrix has become one of the biggest names in EDM. His anthemic big-room tracks and stadium-sized drops make him a festival favorite across Europe.'
    },
    img: 'assets/image copy.png',
    video: 'https://www.youtube.com/watch?v=Zv1QV6lrc_Y'
  },
  kensington: {
    name: 'Kensington',
    short: { nl: 'indie rock anthems', en: 'indie rock anthems' },
    desc: {
      nl: 'Rotterdamse indie rockformatie met krachtige refreinen en gelaagde gitaarpartijen. Hits als "Streets" en "Riddles" laten hun arena-ready songwriting horen.',
      en: 'Rotterdam-born indie rock quintet known for soaring choruses and driving guitar riffs. Hits like "Streets" and "Riddles" showcase their knack for arena-ready hooks and emotionally charged lyricism.'
    },
    img: 'assets/image copy 2.png',
    video: 'https://www.youtube.com/watch?v=IH77eOyV95o'
  },
  within: {
    name: 'Within Temptation',
    short: { nl: 'symphonic metal pioneers', en: 'symphonic metal pioneers' },
    desc: {
      nl: 'Symphonic metalpioniers onder leiding van Sharon den Adel. Cinematische soundscapes en operavocale performances maken hun festivalshows dramatisch en visueel indrukwekkend.',
      en: 'Symphonic metal pioneers fronted by Sharon den Adel. Their cinematic soundscapes and operatic vocals translate into dramatic, visually stunning festival performances.'
    },
    img: 'assets/image copy 3.png',
    video: 'https://www.youtube.com/watch?v=iQVei5C2N4E'
  },
  destaat: {
    name: 'De Staat',
    short: { nl: 'experimental rock innovators', en: 'experimental rock innovators' },
    desc: {
      nl: 'Experimenterende rockband uit Nijmegen met funky grooves, hoekige gitaarlijnen en theatrale podiumshows.',
      en: 'Experimental rock outfit from Nijmegen, blending funky grooves with angular guitar work and theatrical stagecraft.'
    },
    img: 'assets/image copy 4.png',
    video: 'https://www.youtube.com/watch?v=0ttGgIQpAUc'
  },
  chefspecial: {
    name: "Chef'Special",
    short: { nl: 'genre-blending funk-pop', en: 'genre-blending funk-pop' },
    desc: {
      nl: 'Een Haarlemse viermansformatie die funk, pop, rock en hiphop mixt. Hun vrolijke, genre-vrije sound maakt voor feestelijke live-shows.',
      en: 'A four-piece from Haarlem mixing funk, pop, rock and hip-hop. Their upbeat, genre-fluid sound makes for joyous, dance-floor-friendly live shows.'
    },
    img: 'assets/image copy 5.png',
    video: 'https://www.youtube.com/watch?v=l3jRIr44lss'
  },
  navarone: {
    name: 'Navarone',
    short: { nl: 'hard-hitting rock four-piece', en: 'hard-hitting rock four-piece' },
    desc: {
      nl: 'Utrechtse rockformatie met riffgedreven anthems en dynamische zang. Hun liveshows ademen rauwe energie.',
      en: "Utrecht's hard-hitting rock four-piece, delivering riff-driven anthems and dynamic vocals. With a live reputation for raw intensity, they're tailor-made for late-night main stages."
    },
    img: 'assets/image copy 6.png',
    video: 'https://www.youtube.com/watch?v=EvLpaCSnc4k'
  },
  dotan: {
    name: 'Dotan',
    short: { nl: 'folk-pop singer-songwriter', en: 'folk-pop singer-songwriter' },
    desc: {
      nl: 'Folk-pop singer-songwriter met intieme stem en akoestische arrangementen, vooral bekend van "Home".',
      en: 'Folk-pop singer-songwriter whose intimate voice and acoustic arrangements (notably on "Home") have earned him platinum sales and sell-out shows.'
    },
    img: 'assets/image copy 7.png',
    video: 'https://www.youtube.com/watch?v=FZEuqzW16Nw'
  },
  eefje: {
    name: 'Eefje de Visser',
    short: { nl: 'atmospheric indie-pop', en: 'atmospheric indie-pop' },
    desc: {
      nl: 'Indie-popartieste met dromerige, elektronisch getinte songs. Haar hypnotiserende vocals creëren een perfecte twilight festivalvibe.',
      en: 'Indie-pop artist crafting atmospheric, electronic-tinged songs. Her hypnotic vocals and lush production create a dreamlike vibe perfect for twilight festival slots.'
    },
    img: 'assets/image copy 8.png',
    video: 'https://www.youtube.com/watch?v=6IlLJNmLDMg'
  },
  froukje: {
    name: 'Froukje',
    short: { nl: 'candid pop songwriter', en: 'candid pop songwriter' },
    desc: {
      nl: 'Doorbraakpopster Froukje Veenstra combineert eerlijke teksten met catchy synthhooks. Stem van haar generatie.',
      en: "Breakthrough pop singer Froukje Veenstra combines candid lyrics with catchy, synth-driven hooks. Since her 2021 debut, she's become a voice of her generation."
    },
    img: 'assets/image copy 9.png',
    video: 'https://www.youtube.com/watch?v=g4PlReX9e-E'
  },
  spinvis: {
    name: 'Spinvis',
    short: { nl: 'poetic lo-fi surrealist', en: 'poetic lo-fi surrealist' },
    desc: {
      nl: 'Erik de Jong maakt als Spinvis poëtische, collageachtige pop met gesproken fragmenten en dromerige observaties.',
      en: 'Erik de Jong performs under the moniker Spinvis, crafting poetic, collage-like songs that blend spoken-word snippets, lo-fi electronics and wistful pop.'
    },
    img: 'assets/image copy 10.png',
    video: 'https://www.youtube.com/watch?v=F3ZTrGWSLf4'
  }
};

// ── PROGRAMME (exact times from block schema screenshot) ─────────────
// Stages: poton, thelake, theclub, hanggar
// Times read from the image: "Voorlopig blokkenschema LoveU Festival 2026"
const programme = {
  1: [
    // POTON
    { act:'armin',       stage:'poton',    genre:'Trance',             time:'10:15', dur:75  },
    { act:'kensington',  stage:'poton',    genre:'Indie Rock',         time:'13:00', dur:90  },
    { act:'destaat',     stage:'poton',    genre:'Experimental Rock',  time:'15:00', dur:105 },
    { act:'navarone',    stage:'poton',    genre:'Rock',               time:'17:00', dur:105 },
    { act:'dotan',       stage:'poton',    genre:'Folk Pop',           time:'19:15', dur:105 },
    { act:'froukje',     stage:'poton',    genre:'Pop',                time:'21:45', dur:105 },
    // THE LAKE - talent sets
    { act:'talent1a',    stage:'thelake',  genre:'Talent',             time:'10:00', dur:60  },
    { act:'talent2a',    stage:'thelake',  genre:'Talent',             time:'11:15', dur:60  },
    { act:'talent3a',    stage:'thelake',  genre:'Talent',             time:'13:00', dur:75  },
    { act:'talent4a',    stage:'thelake',  genre:'Talent',             time:'15:00', dur:75  },
    { act:'talent5a',    stage:'thelake',  genre:'Talent',             time:'17:00', dur:75  },
    { act:'talent6a',    stage:'thelake',  genre:'Talent',             time:'19:15', dur:75  },
    { act:'talent7a',    stage:'thelake',  genre:'Talent',             time:'21:45', dur:75  },
    // THE CLUB
    { act:'comedy1',     stage:'theclub',  genre:'Comedy',             time:'11:30', dur:75  },
    { act:'lecture1',    stage:'theclub',  genre:'Lecture',            time:'13:45', dur:75  },
    { act:'theater1',    stage:'theclub',  genre:'Theater',            time:'15:45', dur:75  },
    { act:'movie1',      stage:'theclub',  genre:'Movie',              time:'17:00', dur:90  },
    { act:'performance1',stage:'theclub',  genre:'Performance',        time:'19:15', dur:75  },
    { act:'illusion1',   stage:'theclub',  genre:'Illusionist',        time:'21:30', dur:90  },
    // HANGGAR
    { act:'dj1a',        stage:'hanggar',  genre:'DJ',                 time:'10:00', dur:60  },
    { act:'dj2a',        stage:'hanggar',  genre:'DJ',                 time:'11:15', dur:60  },
    { act:'dj3a',        stage:'hanggar',  genre:'DJ',                 time:'12:30', dur:75  },
    { act:'dj4a',        stage:'hanggar',  genre:'DJ',                 time:'14:00', dur:75  },
    { act:'dj5a',        stage:'hanggar',  genre:'DJ',                 time:'15:45', dur:75  },
    { act:'dj6a',        stage:'hanggar',  genre:'DJ',                 time:'17:30', dur:75  },
    { act:'dj7a',        stage:'hanggar',  genre:'DJ',                 time:'19:15', dur:75  },
    { act:'dj8a',        stage:'hanggar',  genre:'DJ',                 time:'21:00', dur:165 },
  ],
  2: [
    // POTON
    { act:'martin',      stage:'poton',    genre:'EDM',                time:'10:30', dur:165 },
    { act:'within',      stage:'poton',    genre:'Symphonic Metal',    time:'14:00', dur:120 },
    { act:'chefspecial', stage:'poton',    genre:'Funk Pop',           time:'16:45', dur:120 },
    { act:'eefje',       stage:'poton',    genre:'Indie Pop',          time:'19:15', dur:120 },
    { act:'spinvis',     stage:'poton',    genre:'Dream Pop',          time:'21:45', dur:105 },
    // THE LAKE - talent sets
    { act:'talent1b',    stage:'thelake',  genre:'Talent',             time:'10:00', dur:60  },
    { act:'talent2b',    stage:'thelake',  genre:'Talent',             time:'11:15', dur:60  },
    { act:'talent3b',    stage:'thelake',  genre:'Talent',             time:'13:00', dur:75  },
    { act:'talent4b',    stage:'thelake',  genre:'Talent',             time:'15:00', dur:75  },
    { act:'talent5b',    stage:'thelake',  genre:'Talent',             time:'17:00', dur:75  },
    { act:'talent6b',    stage:'thelake',  genre:'Talent',             time:'19:15', dur:75  },
    // THE CLUB
    { act:'comedy2',     stage:'theclub',  genre:'Comedy',             time:'11:30', dur:75  },
    { act:'lecture2',    stage:'theclub',  genre:'Lecture',            time:'13:45', dur:75  },
    { act:'theater2',    stage:'theclub',  genre:'Theater',            time:'15:45', dur:75  },
    { act:'movie2',      stage:'theclub',  genre:'Movie',              time:'17:00', dur:90  },
    { act:'magic2',      stage:'theclub',  genre:'Magic Show',         time:'19:30', dur:90  },
    // HANGGAR
    { act:'dj1b',        stage:'hanggar',  genre:'DJ',                 time:'10:00', dur:75  },
    { act:'dj2b',        stage:'hanggar',  genre:'DJ',                 time:'11:30', dur:105 },
    { act:'dj3b',        stage:'hanggar',  genre:'DJ',                 time:'13:30', dur:75  },
    { act:'dj4b',        stage:'hanggar',  genre:'DJ',                 time:'15:00', dur:90  },
    { act:'dj5b',        stage:'hanggar',  genre:'DJ',                 time:'16:45', dur:90  },
    { act:'dj6b',        stage:'hanggar',  genre:'DJ',                 time:'18:30', dur:75  },
    { act:'dj7b',        stage:'hanggar',  genre:'DJ',                 time:'20:00', dur:75  },
    { act:'dj8b',        stage:'hanggar',  genre:'DJ',                 time:'21:30', dur:135 },
  ]
};

// Generic act info for non-named acts
function getActInfo(actId) {
  if (acts[actId]) return acts[actId];
  const item = getAllItems().find(i => i.act === actId);
  if (!item) return { name: actId, short:{nl:'',en:''}, desc:{nl:'',en:''}, img:'', video:'' };
  const name = actId.startsWith('talent') ? `Talent Set ${actId.replace(/[^0-9]/g,'')}` :
               actId.startsWith('dj') ? `DJ Set ${actId.replace(/[^0-9]/g,'')}` :
               actId.charAt(0).toUpperCase() + actId.slice(1);
  return { name, short:{nl:item.genre,en:item.genre}, desc:{nl:'Meer informatie volgt.',en:'More information to follow.'}, img:'', video:'' };
}
function getAllItems() {
  return [...(programme[1]||[]), ...(programme[2]||[])];
}

// ── INFO ACCORDION DATA ───────────────────────────────────────────────
const infoData = [
  {
    icon: 'info',
    title: { nl: 'Algemeen & Contact', en: 'General & Contact' },
    html: {
      nl: `<div class="info-row"><span class="material-icons-round">favorite</span><span>❤️U Festival is voor (nieuwe) studenten in de regio Utrecht — een aanvulling op UIT.</span></div>
           <div class="info-row"><span class="material-icons-round">location_on</span><span><strong>Locatie:</strong> Strijkviertel, Utrecht</span></div>
           <div class="info-row"><span class="material-icons-round">navigation</span><span><strong>Navigatieadres:</strong> Strijkviertelweg, Utrecht</span></div>
           <div class="info-row"><span class="material-icons-round">calendar_today</span><span>Zaterdag 6 september 2025</span></div>
           <div class="info-row"><span class="material-icons-round">schedule</span><span>10:00 – 23:45 uur</span></div>`,
      en: `<div class="info-row"><span class="material-icons-round">favorite</span><span>❤️U Festival is for (new) students in the Utrecht region — a complement to UIT.</span></div>
           <div class="info-row"><span class="material-icons-round">location_on</span><span><strong>Location:</strong> Strijkviertel, Utrecht</span></div>
           <div class="info-row"><span class="material-icons-round">navigation</span><span><strong>Navigation address:</strong> Strijkviertelweg, Utrecht</span></div>
           <div class="info-row"><span class="material-icons-round">calendar_today</span><span>Saturday September 6, 2025</span></div>
           <div class="info-row"><span class="material-icons-round">schedule</span><span>10:00 – 23:45</span></div>`
    }
  },
  {
    icon: 'directions_bike',
    title: { nl: 'Bereikbaarheid', en: 'Getting Here' },
    html: {
      nl: `<div class="info-row"><span class="material-icons-round">directions_bike</span><span><strong>Fiets</strong><br>Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de gehele dag kunt stallen.</span></div>
           <div class="info-row"><span class="material-icons-round">local_parking</span><span><strong>Auto</strong><br>Parkeer op P+R Papendorp — volg de borden 'P online ticket'. Geen ticket vooraf? Koop bij de parkeerwachter (PIN ONLY). Let op: <strong>VOL = VOL</strong>.</span></div>
           <div class="info-row"><span class="material-icons-round">directions_bus</span><span><strong>OV</strong><br>Plan je trip via <strong>9292.nl</strong>.</span></div>
           <div class="info-row"><span class="material-icons-round">airport_shuttle</span><span><strong>Gratis Shuttlebus</strong><br>Vanaf Utrecht Centraal (Mineurslaan). Volg witte bordjes met '❤️U Festival'.<br><br>🚌 Richting festival: <strong>12:00 – 19:00</strong><br>🚌 Richting station: <strong>vanaf 21:00</strong></span></div>
           <div class="info-row"><span class="material-icons-round">local_taxi</span><span><strong>Taxi / Kiss &amp; Ride</strong><br>Navigeer naar Strijkviertel, De Meern (Utrecht). Volg de borden 'Kiss &amp; Ride ❤️U Festival'.</span></div>`,
      en: `<div class="info-row"><span class="material-icons-round">directions_bike</span><span><strong>Bicycle</strong><br>A large free bicycle parking area is available where you can leave your bike all day.</span></div>
           <div class="info-row"><span class="material-icons-round">local_parking</span><span><strong>Car</strong><br>Park at P+R Papendorp — follow signs for 'P online ticket'. No advance ticket? Buy from parking attendant (PIN ONLY). Note: <strong>FULL = FULL</strong>.</span></div>
           <div class="info-row"><span class="material-icons-round">directions_bus</span><span><strong>Public Transport</strong><br>Plan your trip via <strong>9292.nl</strong>.</span></div>
           <div class="info-row"><span class="material-icons-round">airport_shuttle</span><span><strong>Free Shuttle Bus</strong><br>From Utrecht Centraal (Mineurslaan). Follow white signs with '❤️U Festival'.<br><br>🚌 To festival: <strong>12:00 – 19:00</strong><br>🚌 To station: <strong>from 21:00</strong></span></div>
           <div class="info-row"><span class="material-icons-round">local_taxi</span><span><strong>Taxi / Kiss &amp; Ride</strong><br>Navigate to Strijkviertel, De Meern (Utrecht). Follow signs for 'Kiss &amp; Ride ❤️U Festival'.</span></div>`
    }
  },
  {
    icon: 'lock',
    title: { nl: 'Lockers', en: 'Lockers' },
    html: {
      nl: `<div class="info-row"><span class="material-icons-round">lock</span><span>Op het festivalterrein zijn kluisjes aanwezig waar je je spullen veilig kunt opbergen.</span></div>
           <div class="info-row"><span class="material-icons-round">checkroom</span><span>Medium en grote lockers beschikbaar. Je kunt je kluisje gedurende de hele dag zo vaak je wilt openen en sluiten.</span></div>
           <div class="highlight-box">⚠️ Het is niet mogelijk om online een kluisje te reserveren.</div>`,
      en: `<div class="info-row"><span class="material-icons-round">lock</span><span>Lockers are available on the festival grounds where you can safely store your belongings.</span></div>
           <div class="info-row"><span class="material-icons-round">checkroom</span><span>Medium and large lockers available. You can open and close your locker as many times as you like throughout the day.</span></div>
           <div class="highlight-box">⚠️ Online locker reservations are not possible.</div>`
    }
  },
  {
    icon: 'emoji_events',
    title: { nl: 'Golden-GLU', en: 'Golden-GLU' },
    html: {
      nl: `<div class="info-row"><span class="material-icons-round" style="color:#E3B505">workspace_premium</span><span>Studenten van het GLU hebben speciale privileges en zijn herkenbaar aan een <strong style="color:#E3B505">gouden armbandje</strong>.</span></div>
           <div class="info-row"><span class="material-icons-round" style="color:#E3B505">wc</span><span>Gebruik de <strong>gouden toiletten</strong> zonder te wachten.</span></div>
           <div class="info-row"><span class="material-icons-round" style="color:#E3B505">local_bar</span><span>Bestel aan <strong>goud gemarkeerde bestelpunten</strong> — zonder in de rij te staan.</span></div>
           <div class="highlight-box" style="background:rgba(227,181,5,.1);border-color:rgba(227,181,5,.3)">🏅 Ben jij een GLU-student? Haal je gouden armbandje op bij de ingang!</div>`,
      en: `<div class="info-row"><span class="material-icons-round" style="color:#E3B505">workspace_premium</span><span>GLU students have special privileges and are recognisable by a <strong style="color:#E3B505">golden wristband</strong>.</span></div>
           <div class="info-row"><span class="material-icons-round" style="color:#E3B505">wc</span><span>Use the <strong>golden toilets</strong> without queuing.</span></div>
           <div class="info-row"><span class="material-icons-round" style="color:#E3B505">local_bar</span><span>Order at <strong>gold-marked ordering points</strong> at the bars — no waiting in line.</span></div>
           <div class="highlight-box" style="background:rgba(227,181,5,.1);border-color:rgba(227,181,5,.3)">🏅 Are you a GLU student? Collect your golden wristband at the entrance!</div>`
    }
  },
  {
    icon: 'help',
    title: { nl: 'FAQ', en: 'FAQ' },
    html: {
      nl: `<div style="margin-bottom:14px"><div style="font-weight:700;margin-bottom:6px">💊 Ik gebruik medicatie. Wat nu?</div><div style="color:var(--fg2);line-height:1.6;font-size:13px">Medicijnen meenemen is toegestaan in een dosis voor maximaal 1 dag. Een <strong>doktersverklaring is verplicht</strong>. De EHBO kan medicijnen in bewaring nemen.</div></div>
           <div style="border-top:1px solid var(--border);padding-top:14px;margin-bottom:14px"><div style="font-weight:700;margin-bottom:6px">🚪 Mag ik het terrein tussentijds verlaten?</div><div style="color:var(--fg2);line-height:1.6;font-size:13px">Nee, helaas niet. Om veiligheid te waarborgen, is het niet toegestaan het terrein tussentijds te verlaten.</div></div>
           <div style="border-top:1px solid var(--border);padding-top:14px"><div style="font-weight:700;margin-bottom:6px">🔒 Zijn er lockers?</div><div style="color:var(--fg2);line-height:1.6;font-size:13px">Ja! Medium &amp; grote lockers op het terrein. Niet online te reserveren.</div></div>`,
      en: `<div style="margin-bottom:14px"><div style="font-weight:700;margin-bottom:6px">💊 I use medication. What now?</div><div style="color:var(--fg2);line-height:1.6;font-size:13px">You may bring medication for one day only. A <strong>doctor's statement is required</strong>. The first aid team may hold your medication.</div></div>
           <div style="border-top:1px solid var(--border);padding-top:14px;margin-bottom:14px"><div style="font-weight:700;margin-bottom:6px">🚪 Can I leave the festival grounds?</div><div style="color:var(--fg2);line-height:1.6;font-size:13px">No, unfortunately not. To ensure safety, leaving and re-entering is not permitted.</div></div>
           <div style="border-top:1px solid var(--border);padding-top:14px"><div style="font-weight:700;margin-bottom:6px">🔒 Are there lockers?</div><div style="color:var(--fg2);line-height:1.6;font-size:13px">Yes! Medium &amp; large lockers available on site. Cannot be reserved online.</div></div>`
    }
  }
];

// ── POPUPS ────────────────────────────────────────────────────────────
const popups = {
  nc1: { tag:'Info', title:{nl:'Deuren open om 10:00',en:'Gates open at 10:00'}, body:{nl:'Het festivalterrein is geopend van 10:00 tot 23:45 uur. Houd je ticket en geldig legitimatiebewijs bij de hand.',en:'The festival grounds are open from 10:00 to 23:45. Have your ticket and valid ID ready.'} },
  nc2: { tag:'Info', title:{nl:'Gratis Shuttlebus',en:'Free Shuttle Bus'}, body:{nl:'Vanaf Utrecht Centraal (Mineurslaan) rijdt een gratis shuttlebus. Richting festival: 12:00–19:00. Richting station: vanaf 21:00.',en:'A free shuttle bus runs from Utrecht Centraal (Mineurslaan). To festival: 12:00–19:00. To station: from 21:00.'} },
  nc3: { tag:'Info', title:{nl:'Lockers',en:'Lockers'}, body:{nl:'Op het terrein zijn medium en grote lockers beschikbaar. Je kunt je locker de hele dag vrij openen en sluiten. Online reserveren is niet mogelijk.',en:'Medium & large lockers are available on site. You can open and close your locker all day. Cannot be reserved online.'} },
  nc4: { tag:'Info', title:{nl:'Parkeren: P+R Papendorp',en:'Parking: P+R Papendorp'}, body:{nl:'Parkeer op P+R Papendorp. Volg de borden "P online ticket". Geen ticket vooraf? Koop bij de parkeerwachter op locatie (PIN ONLY). Let op: VOL = VOL.',en:'Park at P+R Papendorp. Follow signs for "P online ticket". No advance ticket? Buy from parking attendant (PIN ONLY). Note: FULL = FULL.'} },
  'loc-poton': { tag:'Podium', title:{nl:'Poton',en:'Poton'}, body:{nl:'Het hoofdpodium van ❤️U Festival.',en:'The main stage of ❤️U Festival.'} },
  'loc-thelake': { tag:'Podium', title:{nl:'The Lake',en:'The Lake'}, body:{nl:'Talentpodium voor opkomend talent.',en:'Talent stage for emerging acts.'} },
  'loc-theclub': { tag:'Podium', title:{nl:'The Club',en:'The Club'}, body:{nl:'Entertainment podium met comedy, theater, film en meer.',en:'Entertainment stage with comedy, theatre, film and more.'} },
  'loc-hanggar': { tag:'Podium', title:{nl:'Hanggar',en:'Hanggar'}, body:{nl:'DJ stage voor de beste beats.',en:'DJ stage for the best beats.'} },
  'loc-food': { tag:'Locatie', title:{nl:'Food & Bar',en:'Food & Bar'}, body:{nl:'Diverse foodstands en barren verspreid over het terrein. Cashless betalen aanbevolen.',en:'Various food stands and bars across the festival grounds. Cashless payment recommended.'} },
  'loc-ehbo': { tag:'Locatie', title:{nl:'EHBO-post',en:'First Aid'}, body:{nl:'De EHBO-post is bereikbaar op het festivalterrein. Bij nood: ga naar de dichtstbijzijnde security of EHBO-medewerker.',en:'The first aid post is available on the festival grounds. In an emergency, go to the nearest security or first aid staff member.'} },
};

// ── STATE ─────────────────────────────────────────────────────────────
let lang = 'nl';
let theme = 'light';
let currentDay = 1;
let currentStage = 'all';
let currentScreen = 'home';
let favorites;
try { favorites = new Set(JSON.parse(localStorage.getItem('ufestival-favs') || '[]')); } catch(e) { favorites = new Set(); }
let notifTimers = [];

function saveFavs() { try { localStorage.setItem('ufestival-favs', JSON.stringify([...favorites])); } catch(e){} }

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
  theme = theme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', theme);
  document.getElementById('themeIcon').textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
}

// ── LANGUAGE ──────────────────────────────────────────────────────────
function toggleLang() {
  lang = lang === 'nl' ? 'en' : 'nl';
  document.getElementById('langBtn').textContent = lang === 'nl' ? '🇳🇱' : '🇬🇧';
  const d = document.getElementById('langBtnDetail');
  if (d) d.textContent = lang === 'nl' ? '🇳🇱' : '🇬🇧';
  applyTranslations();
}
function t(key) { return T[lang][key] || key; }

function applyTranslations() {
  const tv = T[lang];
  document.getElementById('hero-date').textContent = tv.heroDate;
  document.getElementById('hero-title').innerHTML = tv.heroTitle;
  document.getElementById('hero-subtitle').textContent = tv.heroSub;
  document.getElementById('news-label').innerHTML = tv.newsLabel;
  document.getElementById('nc1-title').textContent = tv.nc1t;
  document.getElementById('nc1-body').textContent = tv.nc1b;
  document.getElementById('nc2-title').textContent = tv.nc2t;
  document.getElementById('nc2-body').textContent = tv.nc2b;
  document.getElementById('nc3-title').textContent = tv.nc3t;
  document.getElementById('nc3-body').textContent = tv.nc3b;
  document.getElementById('nc4-title').textContent = tv.nc4t;
  document.getElementById('nc4-body').textContent = tv.nc4b;
  document.getElementById('info-screen-label').textContent = tv.infoLabel;
  document.getElementById('sched-label').textContent = tv.schedLabel;
  document.getElementById('day1-btn').innerHTML = tv.day1 + '<span>' + tv.day1s + '</span>';
  document.getElementById('day2-btn').innerHTML = tv.day2 + '<span>' + tv.day2s + '</span>';
  document.getElementById('tab-all').textContent = tv.tabAll;
  document.getElementById('map-label').textContent = tv.mapLabel;
  document.getElementById('map-legend-label').textContent = tv.mapLeg;
  document.getElementById('leg-food').textContent = tv.legFood;
  document.getElementById('leg-ehbo').textContent = tv.legEhbo;
  document.getElementById('nav-home-label').textContent = tv.navHome;
  document.getElementById('nav-info-label').textContent = tv.navInfo;
  document.getElementById('nav-sched-label').textContent = tv.navSched;
  document.getElementById('nav-map-label').textContent = tv.navMap;
  renderAccordion();
  if (currentScreen === 'schedule') renderSchedule();
}

// ── ACCORDION ─────────────────────────────────────────────────────────
function renderAccordion() {
  const container = document.getElementById('accordion-container');
  if (!container) return;
  container.innerHTML = infoData.map(item => `
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

// ── SCHEDULE ──────────────────────────────────────────────────────────
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

function toMins(t) { const [h,m] = t.split(':').map(Number); return h*60+m; }
function fromMins(m) { const h=Math.floor(m/60)%24, mn=m%60; return (h<10?'0':'')+h+':'+(mn<10?'0':'')+mn; }

const STAGE_ORDER = ['poton','thelake','theclub','hanggar'];
const STAGE_LABELS = { poton:'Poton', thelake:'The Lake', theclub:'The Club', hanggar:'Hanggar' };
const PX_PER_MIN = 3; // pixels per minute

function renderSchedule() {
  const grid = document.getElementById('time-grid');
  const dayItems = (programme[currentDay] || []);
  const filtered = currentStage === 'all' ? dayItems : dayItems.filter(i => i.stage === currentStage);

  if (!filtered.length) {
    grid.innerHTML = `<div style="text-align:center;padding:40px;color:var(--fg2);font-style:italic;font-size:14px">${lang==='nl'?'Geen optredens voor deze selectie.':'No performances found.'}</div>`;
    return;
  }

  const allMins = dayItems.map(i => toMins(i.time));
  const allEndMins = dayItems.map(i => toMins(i.time) + i.dur);
  const minStart = Math.min(...allMins);
  const maxEnd = Math.max(...allEndMins);
  const totalWidth = (maxEnd - minStart) * PX_PER_MIN;
  const STAGE_H = 80;
  const NAME_W = 85;

  // Time labels every 30 min
  const timeMarks = [];
  const roundedStart = Math.floor(minStart / 30) * 30;
  for (let m = roundedStart; m <= maxEnd; m += 30) timeMarks.push(m);

  const stages = STAGE_ORDER.filter(s => currentStage === 'all' || s === currentStage);

  let html = `<div class="schedule-tools">
    <div class="schedule-hint">${t('hint')}</div>
    <button class="btn-primary" onclick="requestNotifs()">${t('notify')}</button>
  </div>`;

  html += `<div class="schedule-scroll" id="sched-scroll">`;

  // Time header row
  html += `<div style="display:flex;margin-bottom:4px">`;
  html += `<div style="width:${NAME_W}px;flex-shrink:0"></div>`;
  html += `<div style="position:relative;width:${totalWidth}px;height:24px;flex-shrink:0">`;
  timeMarks.forEach(m => {
    const left = (m - minStart) * PX_PER_MIN;
    html += `<div style="position:absolute;left:${left}px;top:0;height:100%;border-left:1px solid var(--border);padding-left:3px">
      <span style="font-size:9px;font-weight:700;color:var(--fg2);white-space:nowrap">${fromMins(m)}</span>
    </div>`;
  });
  html += `</div></div>`;

  // Stage rows
  stages.forEach(stage => {
    const rowItems = filtered.filter(i => i.stage === stage);
    html += `<div style="display:flex;margin-bottom:8px;align-items:flex-start">`;
    html += `<div style="width:${NAME_W}px;flex-shrink:0;font-size:10px;font-weight:700;color:var(--fg2);text-transform:uppercase;letter-spacing:.5px;padding-top:${STAGE_H/2-8}px;padding-right:6px;line-height:1.2">${STAGE_LABELS[stage]}</div>`;
    html += `<div style="position:relative;width:${totalWidth}px;height:${STAGE_H}px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);flex-shrink:0;overflow:hidden">`;
    // grid lines
    timeMarks.forEach(m => {
      const left = (m - minStart) * PX_PER_MIN;
      html += `<div style="position:absolute;left:${left}px;top:0;bottom:0;border-left:1px solid var(--border);pointer-events:none;opacity:.5"></div>`;
    });
    // blocks
    rowItems.forEach(item => {
      const left = (toMins(item.time) - minStart) * PX_PER_MIN;
      const width = Math.max(item.dur * PX_PER_MIN - 4, 20);
      const isFav = favorites.has(item.act);
      const actInfo = getActInfo(item.act);
      const isNamed = !!acts[item.act];
      html += `<button class="act-block stage-${item.stage}${isFav?' favorite':''}" 
        style="left:${left+2}px;width:${width}px;top:6px;bottom:6px;height:auto"
        onclick="openActDetail('${item.act}',${currentDay})">
        <div class="act-name" style="font-size:${width<60?'9':'11'}px">${actInfo.name}${isFav?' ★':''}</div>
        ${width > 50 ? `<div class="act-time">${item.time} · ${item.dur}m</div>` : ''}
        ${width > 80 && isNamed ? `<div class="act-genre">${item.genre}</div>` : ''}
      </button>`;
    });
    html += `</div></div>`;
  });

  html += `</div>`;
  grid.innerHTML = html;
}

// ── ACT DETAIL FULL SCREEN ────────────────────────────────────────────
let detailActId = null;
let detailDay = null;

function openActDetail(actId, day) {
  detailActId = actId;
  detailDay = day;
  renderActDetail();
  document.getElementById('act-detail-screen').classList.add('open');
  document.getElementById('act-detail-screen').scrollTop = 0;
}

function closeActDetail() {
  document.getElementById('act-detail-screen').classList.remove('open');
}

function renderActDetail() {
  const actId = detailActId;
  const day = detailDay;
  const info = getActInfo(actId);
  const item = (programme[day]||[]).find(i => i.act === actId) || {};
  const isFav = favorites.has(actId);
  const isNamed = !!acts[actId];
  const content = document.getElementById('act-detail-content');

  // Full descriptions for named acts (longer versions)
  const fullDesc = {
    nl: {
      armin: 'Armin van Buuren is vijf keer uitgeroepen tot "World\'s No. 1 DJ" en een ware trance-icoon. Zijn sets zijn euforisch, energiek en vol opbeurende melodieën die mensen urenlang aan het dansen houden. Van Tomorrowland tot Ultra — Armin heeft de grootste podia ter wereld veroverd met zijn onberispelijke mixen en adembenemende drops.',
      martin: 'Martin Garrix brak door als tiener met het nummer "Animals" en is uitgegroeid tot een van de grootste namen in de EDM-wereld. Zijn anthems met grote kamerklanken en drops op stadionformaat maken hem tot een festival-favoriet door heel Europa. Met tientallen platina hits op zijn naam is Martin een ware EDM-superster.',
      kensington: 'Kensington is een Rotterdamse indie rockformatie bekend om hun meeslepende refreinen en krachtige gitaarpartijen. Hits als "Streets" en "Riddles" laten hun talent voor arena-ready songwriting en emotioneel beladen lyriek zien. Hun liveshows zijn energiek, groots en onvergetelijk.',
      within: 'Within Temptation is een symfonische metalpionier onder leiding van de indrukwekkende Sharon den Adel. Hun cinematische soundscapes en operavocale performances — denk aan "Ice Queen" en "Mother Earth" — vertalen zich naar dramatische, visueel verbluffende festivalshows die je nooit vergeet.',
      destaat: 'De Staat is een experimenterende rockband uit Nijmegen die funky grooves combineert met hoekige gitaarlijnen en theatrale podiumshows. Met nummers als "Witch Doctor" en "Down Town" laten ze hun genre-overstijgende aanpak en aanstekelijke energie horen.',
      chefspecial: "Chef'Special is een Haarlemse viermansformatie die funk, pop, rock en hiphop mixt tot een uniek geheel. Hun vrolijke, genre-vrije sound op nummers als 'Amigo' en 'In Your Arms' zorgt voor feestelijke, dans-vriendelijke liveshows.",
      navarone: 'Navarone is een Utrechtse rockformatie met riffgedreven anthems en dynamische zang. Hun liveshows ademen rauwe energie en rauwe intensiteit — precies wat een late-night hoofdpodium nodig heeft.',
      dotan: 'Dotan is een folk-pop singer-songwriter met een intieme stem en akoestische arrangementen, vooral bekend van zijn doorbraakhit "Home". Zijn oprechte verhalenvertelling en platinasales bewijzen zijn diepe verbinding met zijn publiek.',
      eefje: 'Eefje de Visser is een indie-popartieste die dromerige, elektronisch getinte songs maakt. Haar hypnotiserende vocals en rijke productie — zoals te horen op "Ongeveer" — creëren een twilight festivalvibe die werkelijk betoverend is.',
      froukje: 'Froukje Veenstra combineert eerlijke teksten met catchy synthhooks tot een uniek popsound. Sinds haar debuut in 2021 is ze uitgegroeid tot een stem van haar generatie. Haar openhartige, herkenbare songs raken luisteraars diep.',
      spinvis: 'Spinvis is de eenmansband van Erik de Jong.\n\nHet in 2002 uitgekomen Lo-Fi-debuut laat werk horen dat Spinvis op een zolderkamertje in elkaar knutselde. Hij maakte daarbij vooral gebruik van computers, maar ook van allerlei andere attributen zoals fluitjes en pandabals. De mix van deze lo-fi elektronica met poëtische, bijna gefluisterde teksten en dromerige observaties maakt zijn muziek tot een unieke ervaring.\n\nSinds zijn debuut is Spinvis een vaste waarde in de Nederlandse indie geworden, bekend om zijn verhalen die tegelijkertijd intiem en surrealistisch aanvoelen. Zijn liveshows draaien alledaagse details om in gedeelde, droomachtige ervaringen.'
    },
    en: {
      armin: 'Armin van Buuren is a five-time "World\'s No. 1 DJ" and true trance icon. His sets are euphoric, energetic and full of uplifting melodies that keep crowds dancing for hours. From Tomorrowland to Ultra — Armin has conquered the world\'s biggest stages with his impeccable mixing and breathtaking drops.',
      martin: 'Martin Garrix broke through as a teenager with "Animals" and has grown into one of the biggest names in the EDM world. His anthemic big-room tracks and stadium-sized drops make him a festival favourite across Europe. With dozens of platinum hits to his name, Martin is a true EDM superstar.',
      kensington: 'Kensington is a Rotterdam-born indie rock quintet known for soaring choruses and driving guitar riffs. Hits like "Streets" and "Riddles" showcase their knack for arena-ready hooks and emotionally charged lyricism. Their live shows are energetic, grand and unforgettable.',
      within: 'Within Temptation are symphonic metal pioneers fronted by the remarkable Sharon den Adel. Their cinematic soundscapes and operatic vocals — think "Ice Queen" and "Mother Earth" — translate into dramatic, visually stunning festival performances you\'ll never forget.',
      destaat: 'De Staat is an experimental rock outfit from Nijmegen, blending funky grooves with angular guitar work and theatrical stagecraft. Tracks like "Witch Doctor" and "Down Town" highlight their genre-bending approach and infectious energy.',
      chefspecial: "Chef'Special is a four-piece from Haarlem mixing funk, pop, rock and hip-hop into a unique whole. Their upbeat, genre-fluid sound on songs like 'Amigo' and 'In Your Arms' makes for joyous, dance-floor-friendly live shows.",
      navarone: "Utrecht's hard-hitting rock four-piece, delivering riff-driven anthems and dynamic vocals. With a live reputation for raw intensity, they're tailor-made for late-night main stages.",
      dotan: 'Dotan is a folk-pop singer-songwriter whose intimate voice and acoustic arrangements (notably on "Home") have earned him platinum sales and sell-out shows. His heartfelt storytelling connects deeply with audiences everywhere.',
      eefje: 'Eefje de Visser is an indie-pop artist crafting atmospheric, electronic-tinged songs. Her hypnotic vocals and lush production (as heard on "Ongeveer") create a dreamlike vibe perfect for twilight festival slots.',
      froukje: "Froukje Veenstra combines candid lyrics with catchy, synth-driven hooks into a unique pop sound. Since her 2021 debut, she's become a voice of her generation. Her honest, relatable songs resonate deeply with listeners.",
      spinvis: 'Spinvis is the one-man band of Erik de Jong.\n\nHis 2002 lo-fi debut showcases work Spinvis cobbled together in his attic, using computers alongside all sorts of other tools like whistles and toys. The mix of lo-fi electronics with poetic, almost whispered lyrics and dreamy observations makes his music a truly unique experience.\n\nSince his debut, Spinvis has become a fixture of Dutch indie, known for narratives that feel both intimate and surreal. His live shows turn everyday observations into shared, dreamlike experiences.'
    }
  };

  const desc = (isNamed && fullDesc[lang] && fullDesc[lang][actId])
    ? fullDesc[lang][actId]
    : info.desc[lang];

  // Format multiline desc
  const descHtml = desc.split('\n\n').map(p => `<p style="margin-bottom:16px">${p}</p>`).join('');

  content.innerHTML = `
    ${isNamed && info.img
      ? `<img class="act-detail-hero" src="${info.img}" alt="${info.name}" onerror="this.outerHTML='<div class=act-detail-hero-placeholder><span class=material-icons-round style=font-size:48px;color:rgba(255,255,255,.2)>music_note</span></div>'">`
      : `<div class="act-detail-hero-placeholder"><span class="material-icons-round" style="font-size:48px;color:rgba(255,255,255,.2)">music_note</span></div>`
    }
    <div class="act-detail-body">
      <div class="act-detail-header">
        <div>
          <div class="act-detail-name">${info.name}</div>
          <div class="act-detail-sub">${info.short[lang]}</div>
        </div>
        ${isNamed ? `
        <button class="act-detail-fav-btn${isFav?' active':''}" onclick="toggleFav('${actId}')" id="fav-btn-detail">
          <span class="material-icons-round">${isFav?'favorite':'favorite_border'}</span>
        </button>` : ''}
      </div>

      <div class="act-detail-desc">${descHtml}</div>

      ${item.time ? `
      <div class="act-detail-meta">
        <div class="act-detail-meta-row">
          <span class="material-icons-round">schedule</span>
          <span>${item.time} – ${fromMins(toMins(item.time)+item.dur)} (${item.dur} min)</span>
        </div>
        <div class="act-detail-meta-row">
          <span class="material-icons-round">location_on</span>
          <span>${STAGE_LABELS[item.stage]||''}</span>
        </div>
        <div class="act-detail-meta-row">
          <span class="material-icons-round">music_note</span>
          <span>${item.genre}</span>
        </div>
      </div>` : ''}

      ${isNamed && info.video ? `
      <a class="act-detail-video-btn" href="${info.video}" target="_blank" rel="noreferrer">
        <span class="material-icons-round">play_circle</span>
        ${lang==='nl'?'Bekijk video':'Watch video'}
      </a>` : ''}
    </div>`;
}

function toggleFav(actId) {
  if (favorites.has(actId)) favorites.delete(actId);
  else favorites.add(actId);
  saveFavs();
  renderSchedule();
  if (document.getElementById('act-detail-screen').classList.contains('open')) {
    renderActDetail();
  }
}

function toggleLangFromDetail() {
  toggleLang();
  document.getElementById('langBtnDetail').textContent = lang === 'nl' ? '🇳🇱' : '🇬🇧';
  if (detailActId) renderActDetail();
}

// ── GENERIC POPUP ─────────────────────────────────────────────────────
function openPopup(key) {
  const p = popups[key];
  if (!p) return;
  const title = typeof p.title === 'object' ? p.title[lang] : p.title;
  const body = typeof p.body === 'object' ? p.body[lang] : p.body;
  document.getElementById('popup-inner').innerHTML = `
    ${p.tag ? `<div class="popup-tag">${p.tag}</div>` : ''}
    <div class="popup-title">${title}</div>
    <div class="popup-body" style="margin-top:10px">${body}</div>`;
  document.getElementById('popup-overlay').classList.add('open');
}

function closePopup(e) {
  if (e.target === document.getElementById('popup-overlay')) {
    document.getElementById('popup-overlay').classList.remove('open');
  }
}

// ── NOTIFICATIONS ─────────────────────────────────────────────────────
function requestNotifs() {
  if (!('Notification' in window)) { alert(lang==='nl'?'Notificaties niet ondersteund.':'Notifications not supported.'); return; }
  if (Notification.permission === 'granted') { scheduleNotifs(); alert(lang==='nl'?'Meldingen ingeschakeld!':'Reminders enabled!'); return; }
  Notification.requestPermission().then(p => {
    if (p === 'granted') { scheduleNotifs(); alert(lang==='nl'?'Meldingen ingeschakeld!':'Reminders enabled!'); }
  });
}

function scheduleNotifs() {
  notifTimers.forEach(t => clearTimeout(t));
  notifTimers = [];
  const now = Date.now();
  [1,2].forEach(day => {
    (programme[day]||[]).forEach(item => {
      if (!acts[item.act]) return; // only named acts
      [15,10,5].forEach(min => {
        const d = new Date('2025-09-' + (day===1?'06':'07') + 'T' + item.time + ':00');
        const when = d.getTime() - min*60000;
        if (when > now) {
          notifTimers.push(setTimeout(() => {
            new Notification(`${acts[item.act].name} — ${min}${lang==='nl'?' min voor aanvang':' min before start'}`, {
              body: `${STAGE_LABELS[item.stage]} · ${item.time}`
            });
          }, when - now));
        }
      });
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────────────
renderAccordion();

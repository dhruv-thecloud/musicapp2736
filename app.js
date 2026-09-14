const USERS_KEY = "pulsemuse-users";
const SESSION_KEY = "pulsemuse-session";
const APPLE_TOKEN_KEY = "pulsemuse-apple-developer-token";
const APPLE_STOREFRONT_KEY = "pulsemuse-apple-storefront";

const catalog = [
  {
    id: "aurora-drive",
    title: "Aurora Drive",
    artist: "Nova Youth",
    source: "pulsemuse",
    vibe: "club",
    mood: "uplift",
    description: "Neon house with a tight kick, bright stabs, and after-hours momentum.",
    tempo: 124,
    energy: 4,
    genres: ["House", "Electronic", "Dance"],
    notes: [261.63, 329.63, 392.0, 493.88],
    bass: [65.41, 65.41, 73.42, 82.41],
  },
  {
    id: "quiet-current",
    title: "Quiet Current",
    artist: "Glass Harbor",
    source: "pulsemuse",
    vibe: "focus",
    mood: "focus",
    description: "Downtempo pulse for deep work with a soft analog bassline and airy pads.",
    tempo: 96,
    energy: 2,
    genres: ["Lo-fi", "Chillhop", "Focus"],
    notes: [220.0, 246.94, 261.63, 293.66],
    bass: [55.0, 61.74, 65.41, 73.42],
  },
  {
    id: "afterglow-static",
    title: "Afterglow Static",
    artist: "Mira Vale",
    source: "pulsemuse",
    vibe: "ambient",
    mood: "dream",
    description: "Slow bloom ambience with filtered textures and late-night guitar shimmer.",
    tempo: 82,
    energy: 1,
    genres: ["Ambient", "Dream Pop", "Indie"],
    notes: [196.0, 220.0, 261.63, 293.66],
    bass: [49.0, 55.0, 58.27, 65.41],
  },
  {
    id: "shadow-signal",
    title: "Shadow Signal",
    artist: "Circuit Bloom",
    source: "pulsemuse",
    vibe: "generated",
    mood: "dark",
    description: "Darkwave pressure with broken drums and a descending synth motif.",
    tempo: 118,
    energy: 5,
    genres: ["Darkwave", "Synthwave", "Electronic"],
    notes: [329.63, 311.13, 261.63, 220.0],
    bass: [82.41, 77.78, 65.41, 55.0],
  },
  {
    id: "skyline-hearts",
    title: "Skyline Hearts",
    artist: "Citrus Bloom",
    source: "pulsemuse",
    vibe: "club",
    mood: "uplift",
    description: "Glossy dance-pop hooks with bright synth chords and a stadium chorus.",
    tempo: 122,
    energy: 4,
    genres: ["Pop", "Dance Pop", "Electropop"],
    notes: [293.66, 329.63, 440.0, 523.25],
    bass: [73.42, 82.41, 98.0, 110.0],
  },
  {
    id: "concrete-halo",
    title: "Concrete Halo",
    artist: "Lowlight Theory",
    source: "pulsemuse",
    vibe: "club",
    mood: "dark",
    description: "A moody hip-hop cut with sub-bass movement and clipped lead textures.",
    tempo: 94,
    energy: 4,
    genres: ["Hip-Hop", "Rap", "Trap"],
    notes: [220.0, 246.94, 220.0, 196.0],
    bass: [49.0, 55.0, 58.27, 55.0],
  },
  {
    id: "blue-hour-lines",
    title: "Blue Hour Lines",
    artist: "June Quartet",
    source: "pulsemuse",
    vibe: "focus",
    mood: "dream",
    description: "Soft electric piano phrasing and brushed rhythm for a late jazz focus set.",
    tempo: 88,
    energy: 2,
    genres: ["Jazz", "Soul", "Instrumental"],
    notes: [261.63, 293.66, 349.23, 392.0],
    bass: [65.41, 73.42, 61.74, 55.0],
  },
  {
    id: "dustline-radio",
    title: "Dustline Radio",
    artist: "Marble Creek",
    source: "pulsemuse",
    vibe: "focus",
    mood: "focus",
    description: "Acoustic storytelling with warm percussion and a country-folk backbone.",
    tempo: 90,
    energy: 2,
    genres: ["Country", "Folk", "Acoustic"],
    notes: [246.94, 261.63, 293.66, 329.63],
    bass: [61.74, 65.41, 73.42, 82.41],
  },
  {
    id: "monsoon-neon",
    title: "Monsoon Neon",
    artist: "Asha Thread",
    source: "pulsemuse",
    vibe: "generated",
    mood: "dream",
    description: "A Bollywood-inspired shimmer with cinematic strings and elastic bass pulses.",
    tempo: 108,
    energy: 4,
    genres: ["Bollywood", "Indian Pop", "Soundtrack"],
    notes: [261.63, 311.13, 349.23, 466.16],
    bass: [65.41, 77.78, 87.31, 98.0],
  },
  {
    id: "solar-movimiento",
    title: "Solar Movimiento",
    artist: "Luna Norte",
    source: "pulsemuse",
    vibe: "club",
    mood: "uplift",
    description: "High-gloss reggaeton with rolling percussion and a warm melodic top line.",
    tempo: 102,
    energy: 4,
    genres: ["Reggaeton", "Latin", "Dance"],
    notes: [261.63, 293.66, 329.63, 392.0],
    bass: [65.41, 73.42, 65.41, 82.41],
  },
  {
    id: "palm-echo",
    title: "Palm Echo",
    artist: "The Tide Union",
    source: "pulsemuse",
    vibe: "club",
    mood: "uplift",
    description: "Afrobeats bounce with bright guitar chops and a low-end pocket.",
    tempo: 110,
    energy: 4,
    genres: ["Afrobeats", "Global Pop", "Dance"],
    notes: [293.66, 329.63, 392.0, 440.0],
    bass: [73.42, 82.41, 98.0, 110.0],
  },
  {
    id: "pixel-crush",
    title: "Pixel Crush",
    artist: "Velour City",
    source: "pulsemuse",
    vibe: "club",
    mood: "uplift",
    description: "Sharp K-pop energy with syncopated hooks and a glossy electronic chassis.",
    tempo: 128,
    energy: 5,
    genres: ["K-Pop", "Pop", "Electropop"],
    notes: [329.63, 392.0, 493.88, 523.25],
    bass: [82.41, 98.0, 110.0, 123.47],
  },
  {
    id: "iron-bloom",
    title: "Iron Bloom",
    artist: "Static Valley",
    source: "pulsemuse",
    vibe: "generated",
    mood: "dark",
    description: "Metal tension translated into synth form with aggressive rhythm and dark harmonics.",
    tempo: 132,
    energy: 5,
    genres: ["Metal", "Hard Rock", "Alternative"],
    notes: [196.0, 220.0, 261.63, 246.94],
    bass: [49.0, 55.0, 49.0, 61.74],
  },
  {
    id: "velvet-window",
    title: "Velvet Window",
    artist: "Paper Arrows",
    source: "pulsemuse",
    vibe: "ambient",
    mood: "dream",
    description: "Indie-pop drift with hazy chorus textures and an intimate pulse.",
    tempo: 98,
    energy: 3,
    genres: ["Indie", "Alternative", "Dream Pop"],
    notes: [246.94, 293.66, 329.63, 392.0],
    bass: [61.74, 73.42, 82.41, 73.42],
  },
  {
    id: "orchid-nocturne",
    title: "Orchid Nocturne",
    artist: "Vale Orchestra",
    source: "pulsemuse",
    vibe: "ambient",
    mood: "dream",
    description: "Classical and cinematic textures designed for deep breathing and slow focus.",
    tempo: 76,
    energy: 1,
    genres: ["Classical", "Orchestral", "Cinematic"],
    notes: [220.0, 261.63, 293.66, 329.63],
    bass: [55.0, 61.74, 65.41, 73.42],
  },
];

const genreAtlas = [
  "All",
  "Pop",
  "Rock",
  "Hip-Hop",
  "Rap",
  "R&B",
  "Soul",
  "Jazz",
  "Blues",
  "Country",
  "Folk",
  "Indie",
  "Alternative",
  "Electronic",
  "EDM",
  "House",
  "Techno",
  "Trance",
  "Drum & Bass",
  "Ambient",
  "Lo-fi",
  "Classical",
  "Orchestral",
  "Latin",
  "Reggaeton",
  "Afrobeats",
  "K-Pop",
  "J-Pop",
  "Metal",
  "Punk",
  "Disco",
  "Funk",
  "Bollywood",
  "Soundtrack",
  "Acoustic",
  "Global Pop",
];

const videoCurations = [
  {
    id: "a-list-pop",
    type: "playlist",
    title: "A-List Pop",
    artist: "Apple Music Pop",
    genre: "Pop",
    query: "a-list pop apple music",
    url: "https://music.apple.com/us/playlist/a-list-pop/pl.5ee8333dbe944d9f9151e97d92d1ead9",
    description: "A current Apple Music pop playlist you can queue once MusicKit is connected.",
  },
  {
    id: "creative-focus",
    type: "playlist",
    title: "Creative Focus",
    artist: "Apple Music Focus",
    genre: "Focus",
    query: "creative focus apple music",
    url: "https://music.apple.com/us/playlist/creative-focus/pl.4351e59aabd44f73a7b2a832020acc55",
    description: "A focus-heavy Apple Music playlist that suits the app's work sessions.",
  },
  {
    id: "calm",
    type: "playlist",
    title: "Calm",
    artist: "Apple Music Chill",
    genre: "Ambient",
    query: "calm apple music playlist",
    url: "https://music.apple.com/us/playlist/calm/pl.72c3bf39e63e4d4b8945c63b5cf393d4",
    description: "A softer Apple Music playlist for ambient or low-intensity listening.",
  },
  {
    id: "blinding-lights-ep",
    type: "album",
    title: "Blinding Lights - EP",
    artist: "The Weeknd",
    genre: "R&B",
    query: "blinding lights apple music",
    url: "https://music.apple.com/us/album/blinding-lights-ep/1531552242",
    description: "A direct Apple Music album URL that can be used as a queue descriptor on the web.",
  },
  {
    id: "deep-focus",
    type: "playlist",
    title: "Deep Focus",
    artist: "Apple Music Focus",
    genre: "Electronic",
    query: "deep focus apple music",
    url: "https://music.apple.com/us/playlist/deep-focus/pl.556863bb540c4651b6196bf82e2a3bb9",
    description: "A long-form Apple Music focus playlist for the embedded queue lane.",
  },
];

const youtubeCurations = [
  {
    id: "believer-song",
    type: "track",
    title: "Believer",
    artist: "Imagine Dragons",
    query: "believer apple music",
    url: "https://music.apple.com/us/song/1442257631",
    description: "A direct Apple Music song URL for testing MusicKit queue playback.",
    mood: "uplift",
  },
  {
    id: "never-gonna-song",
    type: "track",
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    query: "never gonna give you up apple music",
    url: "https://music.apple.com/us/song/1438556832",
    description: "A stable Apple Music song link that should queue cleanly with MusicKit.",
    mood: "uplift",
  },
  {
    id: "blinding-lights-album",
    type: "album",
    title: "Blinding Lights - EP",
    artist: "The Weeknd",
    query: "blinding lights the weeknd apple music",
    url: "https://music.apple.com/us/album/blinding-lights-ep/1531552242",
    description: "A direct Apple Music album URL that works well as a queue descriptor.",
    mood: "dream",
  },
  {
    id: "music-video-rick",
    type: "music-video",
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    query: "never gonna give you up apple music video",
    url: "https://music.apple.com/us/music-video/never-gonna-give-you-up/1559900284",
    description: "A direct Apple Music music-video URL for richer media playback tests.",
    mood: "focus",
  },
];

const youtubeSuggestions = [
  {
    id: "yt-uk-drill",
    title: "UK Drill",
    genre: "UK Drill Rap",
    query: "uk drill rap playlist",
    url: "https://www.youtube.com/results?search_query=uk+drill+rap+playlist",
    description: "Fast access to UK drill rap playlists and fresh drill sets on YouTube.",
  },
  {
    id: "yt-romance",
    title: "Romance",
    genre: "Romantic Songs",
    query: "romantic songs playlist",
    url: "https://www.youtube.com/results?search_query=romantic+songs+playlist",
    description: "A softer romance lane for love songs, slow pop, and mellow playlists.",
  },
  {
    id: "yt-afrobeats",
    title: "Afrobeats",
    genre: "Afrobeats",
    query: "afrobeats playlist",
    url: "https://www.youtube.com/results?search_query=afrobeats+playlist",
    description: "Afrobeats playlists and upbeat sets for warmer, more rhythmic listening.",
  },
  {
    id: "yt-bollywood",
    title: "Bollywood",
    genre: "Bollywood",
    query: "bollywood songs playlist",
    url: "https://www.youtube.com/results?search_query=bollywood+songs+playlist",
    description: "Bollywood hits, romantic film songs, and large playlist collections.",
  },
  {
    id: "yt-kpop",
    title: "K-Pop",
    genre: "K-Pop",
    query: "kpop playlist",
    url: "https://www.youtube.com/results?search_query=kpop+playlist",
    description: "K-pop mixes, comeback playlists, and performance-heavy music video lanes.",
  },
  {
    id: "yt-lofi",
    title: "Lo-fi",
    genre: "Lo-fi",
    query: "lofi hip hop playlist",
    url: "https://www.youtube.com/results?search_query=lofi+hip+hop+playlist",
    description: "Lo-fi and study playlists for background listening and calmer sessions.",
  },
];

const defaultYoutubeStatus =
  "Paste an Apple Music song, album, or playlist link to load it here. If MusicKit is configured and authorized, the app can queue full playback in the page.";

const moodNoteBanks = {
  uplift: [261.63, 293.66, 329.63, 392.0, 523.25],
  dream: [220.0, 261.63, 293.66, 349.23, 440.0],
  dark: [196.0, 233.08, 261.63, 311.13, 349.23],
  focus: [246.94, 261.63, 293.66, 329.63, 392.0],
};

const moodBassBanks = {
  uplift: [65.41, 73.42, 82.41, 98.0],
  dream: [55.0, 61.74, 65.41, 73.42],
  dark: [49.0, 55.0, 58.27, 65.41],
  focus: [61.74, 65.41, 73.42, 82.41],
};

const moodTempoHints = {
  uplift: 118,
  dream: 102,
  dark: 96,
  focus: 90,
};

const genreTempoHints = {
  pop: 116,
  "hip-hop": 94,
  rap: 94,
  latin: 102,
  reggaeton: 102,
  "k-pop": 124,
  jazz: 88,
  funk: 108,
  rock: 110,
  electronic: 122,
  dance: 122,
  ambient: 82,
  classical: 78,
};

const state = {
  authMode: "signin",
  currentUser: loadSession(),
  filter: "all",
  activeGenre: "All",
  library: [],
  currentTrack: null,
  currentSource: "idle",
  isPlaying: false,
  progressTimer: null,
  audioContext: null,
  currentNodes: [],
  voiceEnabled: false,
  generatedCounter: 1,
  assistantProfile: {
    lastMood: "",
    lastTopic: "",
  },
  previewCache: {},
  appleMusicReady: false,
  appleMusicAuthorized: false,
  appleMusic: null,
};

const elements = {
  authGate: document.querySelector("#authGate"),
  appRoot: document.querySelector("#appRoot"),
  showSignin: document.querySelector("#showSignin"),
  showSignup: document.querySelector("#showSignup"),
  authMessage: document.querySelector("#authMessage"),
  signinForm: document.querySelector("#signinForm"),
  signupForm: document.querySelector("#signupForm"),
  signinId: document.querySelector("#signinId"),
  signinPassword: document.querySelector("#signinPassword"),
  signupId: document.querySelector("#signupId"),
  signupPassword: document.querySelector("#signupPassword"),
  logoutButton: document.querySelector("#logoutButton"),
  welcomeUser: document.querySelector("#welcomeUser"),
  currentUserLabel: document.querySelector("#currentUserLabel"),
  catalogGrid: document.querySelector("#catalogGrid"),
  genreGrid: document.querySelector("#genreGrid"),
  genreSpotlight: document.querySelector("#genreSpotlight"),
  libraryList: document.querySelector("#libraryList"),
  libraryCount: document.querySelector("#libraryCount"),
  generatedTrack: document.querySelector("#generatedTrack"),
  generatorForm: document.querySelector("#generatorForm"),
  promptInput: document.querySelector("#promptInput"),
  moodSelect: document.querySelector("#moodSelect"),
  tempoInput: document.querySelector("#tempoInput"),
  tempoValue: document.querySelector("#tempoValue"),
  energyInput: document.querySelector("#energyInput"),
  energyValue: document.querySelector("#energyValue"),
  assistantFeed: document.querySelector("#assistantFeed"),
  assistantForm: document.querySelector("#assistantForm"),
  assistantInput: document.querySelector("#assistantInput"),
  heroStatus: document.querySelector("#heroStatus"),
  voiceStatus: document.querySelector("#voiceStatus"),
  nowPlayingTitle: document.querySelector("#nowPlayingTitle"),
  nowPlayingDetail: document.querySelector("#nowPlayingDetail"),
  sessionPulse: document.querySelector("#sessionPulse"),
  playerSourceLabel: document.querySelector("#playerSourceLabel"),
  playPauseButton: document.querySelector("#playPauseButton"),
  progressBar: document.querySelector("#progressBar"),
  playFeatured: document.querySelector("#playFeatured"),
  generateFeatured: document.querySelector("#generateFeatured"),
  playYoutubeFeatured: document.querySelector("#playYoutubeFeatured"),
  shuffleMix: document.querySelector("#shuffleMix"),
  voiceToggle: document.querySelector("#voiceToggle"),
  micButton: document.querySelector("#micButton"),
  videoGrid: document.querySelector("#videoGrid"),
  youtubeSuggestionGrid: document.querySelector("#youtubeSuggestionGrid"),
  youtubeGrid: document.querySelector("#youtubeGrid"),
  spotifyPlayer: document.querySelector("#spotifyPlayer"),
  audioPreview: document.querySelector("#audioPreview"),
  appleDeveloperToken: document.querySelector("#appleDeveloperToken"),
  appleStorefront: document.querySelector("#appleStorefront"),
  appleConnectButton: document.querySelector("#appleConnectButton"),
  appleAuthorizeButton: document.querySelector("#appleAuthorizeButton"),
  appleStatus: document.querySelector("#appleStatus"),
  youtubeForm: document.querySelector("#youtubeForm"),
  youtubeTitleInput: document.querySelector("#youtubeTitleInput"),
  youtubeUrlInput: document.querySelector("#youtubeUrlInput"),
  youtubeSearchButton: document.querySelector("#youtubeSearchButton"),
  youtubeSaveButton: document.querySelector("#youtubeSaveButton"),
  youtubeStatus: document.querySelector("#youtubeStatus"),
  openCurrentSource: document.querySelector("#openCurrentSource"),
};

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition || null;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;
}

bindEvents();
renderCatalog();
renderGenres();
renderVideoCurations();
renderYoutubeSuggestions();
renderYouTubeCurations();
hydrateAssistant();
hydrateAppleMusicConfig();
setAuthMode("signin");
applyAuthState();

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".nav-item")
        .forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.filter = button.dataset.filter;
      renderCatalog();
    });
  });

  elements.showSignin.addEventListener("click", () => setAuthMode("signin"));
  elements.showSignup.addEventListener("click", () => setAuthMode("signup"));
  elements.signinForm.addEventListener("submit", handleSignin);
  elements.signupForm.addEventListener("submit", handleSignup);
  elements.logoutButton.addEventListener("click", handleLogout);

  elements.tempoInput.addEventListener("input", () => {
    elements.tempoValue.textContent = `${elements.tempoInput.value} BPM`;
  });

  elements.energyInput.addEventListener("input", () => {
    elements.energyValue.textContent = `Level ${elements.energyInput.value}`;
  });

  elements.generatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!ensureAuthenticated()) return;
    const generated = buildGeneratedTrack({
      prompt: elements.promptInput.value.trim(),
      mood: elements.moodSelect.value,
      tempo: Number(elements.tempoInput.value),
      energy: Number(elements.energyInput.value),
    });
    renderGeneratedTrack(generated);
    speakResponse(`Generated ${generated.title}. ${generated.description}`);
  });

  elements.assistantForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!ensureAuthenticated()) return;
    const text = elements.assistantInput.value.trim();
    if (!text) return;
    elements.assistantInput.value = "";
    handleAssistantTurn(text);
  });

  elements.playPauseButton.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    toggleCurrentPlayback();
  });

  elements.progressBar.addEventListener("input", () => {
    if (state.currentSource === "preview") {
      const duration = elements.audioPreview.duration;
      if (!Number.isFinite(duration) || duration <= 0) {
        elements.progressBar.value = "0";
        return;
      }
      elements.audioPreview.currentTime = (Number(elements.progressBar.value) / 100) * duration;
      return;
    }

    if (state.currentSource === "spotify") {
      elements.progressBar.value = "0";
    }
  });

  elements.playFeatured.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    queueTrack(catalog[0]);
  });

  elements.generateFeatured.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    const generated = buildGeneratedTrack({
      prompt: "cinematic synthwave opener with bright arps and a cinematic rise",
      mood: "dream",
      tempo: 108,
      energy: 4,
    });
    renderGeneratedTrack(generated);
    queueTrack(generated);
  });

  elements.playYoutubeFeatured.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    const featured = youtubeCurations[0];
    queueTrack(createEmbeddedTrack(featured));
    updateYouTubeStatus(`Loaded ${featured.title}. If Apple Music is connected, the app will try full playback; otherwise it will use the local preview.`);
  });

  elements.shuffleMix.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    const options = state.filter === "all"
      ? [...catalog, ...state.library]
      : [...catalog, ...state.library].filter((track) => track.vibe === state.filter);
    const selection = options[Math.floor(Math.random() * options.length)];
    if (selection) {
      queueTrack(selection);
      pushMessage("ai", `Queued ${selection.title} for a quick change of atmosphere.`);
    }
  });

  elements.voiceToggle.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    toggleVoiceAssistant();
  });

  elements.micButton.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    startListening();
  });

  elements.youtubeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!ensureAuthenticated()) return;
    loadYouTubeFromInput();
  });

  elements.youtubeSearchButton.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    const query = elements.youtubeUrlInput.value.trim() || elements.youtubeTitleInput.value.trim();
    if (!query) {
      updateYouTubeStatus("Add a search phrase or track note first.");
      return;
    }
    openSpotifySearch(query);
    updateYouTubeStatus(`Opened Apple Music search for "${query}".`);
  });

  elements.youtubeSaveButton.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    if (!state.currentTrack || state.currentTrack.source !== "spotify") {
      pushMessage("ai", "Load an Apple Music-linked track first, then save it to your library.");
      return;
    }
    saveToLibrary(state.currentTrack);
  });

  elements.appleConnectButton.addEventListener("click", () => {
    if (!ensureAuthenticated()) return;
    configureAppleMusic();
  });

  elements.appleAuthorizeButton.addEventListener("click", async () => {
    if (!ensureAuthenticated()) return;
    await authorizeAppleMusic();
  });

  elements.openCurrentSource.addEventListener("click", () => {
    if (!state.currentTrack) return;
    openTrackSource(state.currentTrack);
  });

  if (recognition) {
    recognition.addEventListener("result", (event) => {
      const transcript = event.results[0][0].transcript;
      elements.assistantInput.value = transcript;
      handleAssistantTurn(transcript);
    });

    recognition.addEventListener("end", () => {
      updateVoiceStatus(state.voiceEnabled ? "Voice ready" : "Listening off");
    });
  }

  elements.audioPreview.addEventListener("loadedmetadata", () => {
    if (state.currentSource !== "preview") return;
    elements.progressBar.disabled = false;
    elements.progressBar.value = "0";
  });

  elements.audioPreview.addEventListener("timeupdate", () => {
    if (state.currentSource !== "preview") return;
    const duration = elements.audioPreview.duration;
    if (!Number.isFinite(duration) || duration <= 0) return;
    elements.progressBar.value = String((elements.audioPreview.currentTime / duration) * 100);
  });

  elements.audioPreview.addEventListener("play", () => {
    if (state.currentSource !== "preview" || !state.currentTrack) return;
    state.isPlaying = true;
    elements.playPauseButton.disabled = false;
    elements.playPauseButton.textContent = "Pause";
    elements.sessionPulse.textContent = "Preview live";
  });

  elements.audioPreview.addEventListener("pause", () => {
    if (state.currentSource !== "preview" || !state.currentTrack) return;
    state.isPlaying = false;
    elements.playPauseButton.textContent = "Play";
    if (elements.audioPreview.ended) {
      elements.sessionPulse.textContent = "Finished";
      elements.progressBar.value = "100";
      return;
    }
    elements.sessionPulse.textContent = "Preview paused";
  });

  elements.audioPreview.addEventListener("ended", () => {
    if (state.currentSource !== "preview") return;
    state.isPlaying = false;
    elements.playPauseButton.textContent = "Play";
    elements.sessionPulse.textContent = "Finished";
    elements.progressBar.value = "100";
  });

  elements.audioPreview.addEventListener("error", () => {
    if (!state.currentTrack || state.currentSource !== "preview") return;
    updateYouTubeStatus(
      `The in-page preview could not start for ${state.currentTrack.title}. Connect Apple Music if you want full in-page playback for that item.`
    );
    renderAppleEmbed(state.currentTrack.contentUrl || state.currentTrack.url || "");
  });
}

function handleSignin(event) {
  event.preventDefault();
  const userId = sanitizeUserId(elements.signinId.value);
  const password = elements.signinPassword.value;

  if (!userId || !password) {
    setAuthMessage("Enter both ID and password.");
    return;
  }

  const users = loadUsers();
  if (!users[userId] || users[userId].password !== password) {
    setAuthMessage("That ID or password does not match this browser's saved account.");
    return;
  }

  state.currentUser = userId;
  saveSession(userId);
  setAuthMessage(`Signed in as ${userId}.`);
  elements.signinForm.reset();
  applyAuthState();
}

function handleSignup(event) {
  event.preventDefault();
  const userId = sanitizeUserId(elements.signupId.value);
  const password = elements.signupPassword.value;

  if (userId.length < 3) {
    setAuthMessage("Choose an ID with at least 3 characters.");
    return;
  }

  if (password.length < 4) {
    setAuthMessage("Choose a password with at least 4 characters.");
    return;
  }

  const users = loadUsers();
  if (users[userId]) {
    setAuthMessage("That ID already exists in this browser. Sign in instead.");
    return;
  }

  users[userId] = { password };
  saveUsers(users);
  state.currentUser = userId;
  saveSession(userId);
  setAuthMessage(`Account created for ${userId}.`);
  elements.signupForm.reset();
  applyAuthState();
}

function handleLogout() {
  stopAllPlayback(true);
  state.currentUser = "";
  state.library = [];
  state.voiceEnabled = false;
  clearSession();
  renderLibrary();
  updateVoiceStatus("Listening off");
  setAuthMode("signin");
  applyAuthState();
}

function setAuthMode(mode) {
  state.authMode = mode;
  const isSignin = mode === "signin";
  elements.showSignin.classList.toggle("active", isSignin);
  elements.showSignup.classList.toggle("active", !isSignin);
  elements.signinForm.classList.toggle("hidden", !isSignin);
  elements.signupForm.classList.toggle("hidden", isSignin);
  if (!elements.authMessage.textContent.trim()) {
    setAuthMessage("Use any local ID and password you created in this browser.");
  }
}

function applyAuthState() {
  const authenticated = Boolean(state.currentUser);
  elements.authGate.classList.toggle("hidden", authenticated);
  elements.appRoot.classList.toggle("hidden", !authenticated);
  elements.appRoot.setAttribute("aria-hidden", String(!authenticated));

  if (authenticated) {
    state.library = loadLibraryForUser(state.currentUser);
    renderLibrary();
    updateAccountCard();
    if (!elements.assistantFeed.children.length) {
      hydrateAssistant();
    }
    pushMessage("ai", `Session open for ${state.currentUser}. Ask for a mood or start building a new track.`);
    return;
  }

  updateAccountCard();
  elements.assistantFeed.innerHTML = "";
  hydrateAssistant();
}

function updateAccountCard() {
  if (state.currentUser) {
    elements.welcomeUser.textContent = `${sentenceCase(state.currentUser)}'s room`;
    elements.currentUserLabel.textContent = `Signed in with ID ${state.currentUser}`;
    return;
  }

  elements.welcomeUser.textContent = "Guest session";
  elements.currentUserLabel.textContent = "Not signed in";
}

function hydrateAppleMusicConfig() {
  const savedToken = localStorage.getItem(APPLE_TOKEN_KEY) || "";
  const savedStorefront = localStorage.getItem(APPLE_STOREFRONT_KEY) || "us";
  elements.appleDeveloperToken.value = savedToken;
  elements.appleStorefront.value = savedStorefront;
  updateAppleStatus(
    savedToken
      ? "Saved Apple Music token found. Connect Apple Music, then authorize an Apple Music subscriber account."
      : "Apple Music is not connected yet. Add a developer token, connect, then authorize an Apple Music account to enable full web playback."
  );
}

function updateAppleStatus(text) {
  elements.appleStatus.textContent = text;
}

function canUseAppleMusicPlayback() {
  return Boolean(state.appleMusicReady && state.appleMusicAuthorized && state.appleMusic);
}

function configureAppleMusic() {
  const developerToken = elements.appleDeveloperToken.value.trim();
  const storefront = elements.appleStorefront.value.trim() || "us";

  if (!developerToken) {
    updateAppleStatus("Add an Apple Music developer token first.");
    return false;
  }

  if (!window.MusicKit) {
    updateAppleStatus("MusicKit JS did not load. Reload the page and try again.");
    return false;
  }

  try {
    window.MusicKit.configure({
      developerToken,
      storefrontId: storefront,
      declarativeMarkup: true,
    });
    state.appleMusic = window.MusicKit.getInstance();
    state.appleMusicReady = true;
    state.appleMusicAuthorized = Boolean(state.appleMusic.musicUserToken);
    localStorage.setItem(APPLE_TOKEN_KEY, developerToken);
    localStorage.setItem(APPLE_STOREFRONT_KEY, storefront);
    updateAppleStatus(
      state.appleMusicAuthorized
        ? `Apple Music connected for storefront ${storefront}.`
        : `Apple Music connected for storefront ${storefront}. Authorize a subscriber account to unlock full playback.`
    );
    return true;
  } catch (error) {
    state.appleMusicReady = false;
    state.appleMusic = null;
    updateAppleStatus("Apple Music connection failed. Check the developer token and try again.");
    return false;
  }
}

async function authorizeAppleMusic() {
  if (!state.appleMusicReady && !configureAppleMusic()) {
    return false;
  }

  try {
    await state.appleMusic.authorize();
    state.appleMusicAuthorized = true;
    updateAppleStatus("Apple Music authorization complete. Full web playback is ready.");
    return true;
  } catch (error) {
    state.appleMusicAuthorized = false;
    updateAppleStatus("Apple Music authorization failed or was cancelled.");
    return false;
  }
}

function renderAppleEmbed(contentUrl) {
  if (!contentUrl) {
    elements.spotifyPlayer.innerHTML = `
      <div class="embed-placeholder">
        Apple Music artwork and embed will appear here after you load a song, album, or playlist URL.
      </div>
    `;
    return;
  }

  if (window.MusicKit && typeof window.MusicKit.generateEmbedCode === "function") {
    elements.spotifyPlayer.innerHTML = window.MusicKit.generateEmbedCode(contentUrl);
    return;
  }

  elements.spotifyPlayer.innerHTML = `
    <div class="embed-placeholder">
      Open this Apple Music source in a new tab: ${escapeHtml(contentUrl)}
    </div>
  `;
}

function ensureAuthenticated() {
  if (state.currentUser) return true;
  setAuthMode("signin");
  setAuthMessage("Sign in or create an account to use PulseMuse.");
  applyAuthState();
  return false;
}

function setAuthMessage(text) {
  elements.authMessage.textContent = text;
}

function renderCatalog() {
  const tracks = catalog.filter((track) => {
    const filterMatch = state.filter === "all" || track.vibe === state.filter;
    const genreMatch =
      state.activeGenre === "All" || (track.genres || []).includes(state.activeGenre);
    return filterMatch && genreMatch;
  });

  elements.catalogGrid.innerHTML = "";

  if (!tracks.length) {
    const empty = document.createElement("div");
    empty.className = "generated-track empty-state";
    empty.textContent = "No mixes in this lane yet. Generate one in the lab and save it to your library.";
    elements.catalogGrid.appendChild(empty);
    return;
  }

  tracks.forEach((track) => {
    const card = document.createElement("article");
    card.className = "catalog-card";
    card.innerHTML = `
      <span class="track-badge">${track.genres[0]} • ${track.tempo} BPM</span>
      <strong>${track.title}</strong>
      <p>${track.artist}</p>
      <p>${track.description}</p>
      <div class="catalog-actions">
        <button class="primary-button" data-action="play" type="button">Play</button>
        <button class="secondary-button" data-action="save" type="button">Save</button>
      </div>
    `;
    card.querySelector('[data-action="play"]').addEventListener("click", () => queueTrack(track));
    card.querySelector('[data-action="save"]').addEventListener("click", () => saveToLibrary(track));
    elements.catalogGrid.appendChild(card);
  });
}

function renderGenres() {
  elements.genreGrid.innerHTML = "";
  elements.genreSpotlight.textContent =
    state.activeGenre === "All" ? "All genres" : `${state.activeGenre} selected`;

  genreAtlas.forEach((genre) => {
    const button = document.createElement("button");
    button.className = `genre-chip ${state.activeGenre === genre ? "active" : ""}`;
    button.type = "button";
    button.textContent = genre;
    button.addEventListener("click", () => {
      state.activeGenre = genre;
      renderGenres();
      renderCatalog();
      if (genre !== "All") {
        elements.youtubeTitleInput.value = `${genre} lane`;
        elements.youtubeUrlInput.value = `${genre} apple music`;
      }
    });
    elements.genreGrid.appendChild(button);
  });
}

function renderVideoCurations() {
  elements.videoGrid.innerHTML = "";

  videoCurations.forEach((video) => {
    const card = document.createElement("article");
    card.className = "video-card";
    card.innerHTML = `
      <span class="track-badge">apple music • ${video.genre}</span>
      <strong>${video.title}</strong>
      <p>${video.artist}</p>
      <p>${video.description}</p>
      <div class="catalog-actions">
        <button class="primary-button" data-action="play" type="button">Play here</button>
        <button class="secondary-button" data-action="search" type="button">Search more</button>
      </div>
    `;

    card.querySelector('[data-action="play"]').addEventListener("click", () => {
      queueTrack(createEmbeddedTrack(video, "spotify"));
      updateYouTubeStatus(`Loaded ${video.title}. The app will use Apple Music playback when available and local preview otherwise.`);
    });

    card.querySelector('[data-action="search"]').addEventListener("click", () => {
      openSpotifySearch(video.query);
      updateYouTubeStatus(`Opened a broader Apple Music search for ${video.genre}.`);
    });

    elements.videoGrid.appendChild(card);
  });
}

function renderYoutubeSuggestions() {
  elements.youtubeSuggestionGrid.innerHTML = "";

  youtubeSuggestions.forEach((suggestion) => {
    const card = document.createElement("article");
    card.className = "video-card";
    card.innerHTML = `
      <span class="track-badge">youtube • ${suggestion.genre}</span>
      <strong>${suggestion.title}</strong>
      <p>${suggestion.description}</p>
      <div class="catalog-actions">
        <button class="primary-button" data-action="open" type="button">Open on YouTube</button>
        <button class="secondary-button" data-action="fill" type="button">Use genre</button>
      </div>
    `;

    card.querySelector('[data-action="open"]').addEventListener("click", () => {
      window.open(suggestion.url, "_blank", "noopener");
      updateYouTubeStatus(`Opened YouTube results for ${suggestion.genre}.`);
    });

    card.querySelector('[data-action="fill"]').addEventListener("click", () => {
      elements.youtubeTitleInput.value = suggestion.title;
      elements.youtubeUrlInput.value = suggestion.query;
      pushMessage("ai", `Loaded ${suggestion.genre} into the search box. Use it for YouTube discovery or generation prompts.`);
    });

    elements.youtubeSuggestionGrid.appendChild(card);
  });
}

function renderGeneratedTrack(track) {
  elements.generatedTrack.classList.remove("empty-state");
  elements.generatedTrack.innerHTML = `
    <span class="track-badge">generated • ${track.tempo} BPM</span>
    <strong>${track.title}</strong>
    <p>${track.description}</p>
    <div class="catalog-actions">
      <button class="primary-button" data-action="play-generated" type="button">Play</button>
      <button class="secondary-button" data-action="save-generated" type="button">Save to library</button>
    </div>
    <div class="catalog-actions">
      <span>Mood: ${track.mood}</span>
      <span>Energy:</span>
      <div class="energy-bars">${renderEnergy(track.energy)}</div>
    </div>
  `;

  elements.generatedTrack
    .querySelector('[data-action="play-generated"]')
    .addEventListener("click", () => queueTrack(track));
  elements.generatedTrack
    .querySelector('[data-action="save-generated"]')
    .addEventListener("click", () => saveToLibrary(track));

  state.currentTrack = track;
  state.currentSource = "synth";
  updateSourceButton(track);
  elements.heroStatus.textContent = `${track.title} is ready in Generator Lab`;
}

function renderYouTubeCurations() {
  elements.youtubeGrid.innerHTML = "";

  youtubeCurations.forEach((curation) => {
    const card = document.createElement("article");
    card.className = "youtube-card";
    card.innerHTML = `
      <span class="track-badge">apple music • ${curation.mood}</span>
      <strong>${curation.title}</strong>
      <p>${curation.artist}</p>
      <p>${curation.description}</p>
      <div class="catalog-actions">
        <button class="primary-button" data-action="play" type="button">Play here</button>
        <button class="secondary-button" data-action="search" type="button">Search more</button>
        <button class="secondary-button" data-action="generate" type="button">Use as prompt</button>
      </div>
    `;

    card.querySelector('[data-action="play"]').addEventListener("click", () => {
      queueTrack(createEmbeddedTrack(curation));
      updateYouTubeStatus(`Loaded ${curation.title}. The app will use Apple Music playback when available and local preview otherwise.`);
    });

    card.querySelector('[data-action="search"]').addEventListener("click", () => {
      openSpotifySearch(curation.query);
      updateYouTubeStatus(`Opened a broader Apple Music search for ${curation.title}.`);
    });

    card.querySelector('[data-action="generate"]').addEventListener("click", () => {
      elements.promptInput.value = `${curation.query} with a ${curation.mood} emotional arc`;
      elements.moodSelect.value = curation.mood;
      pushMessage("ai", `Moved ${curation.title} into the generator prompt so you can build a local version.`);
    });

    elements.youtubeGrid.appendChild(card);
  });
}

function renderEnergy(level) {
  return Array.from({ length: 5 }, (_, index) => {
    const active = index < level ? "on" : "";
    return `<span class="${active}"></span>`;
  }).join("");
}

function renderLibrary() {
  elements.libraryCount.textContent = `${state.library.length} saved`;
  elements.libraryList.innerHTML = "";

  if (!state.library.length) {
    const empty = document.createElement("div");
    empty.className = "library-item";
    empty.textContent = "Saved tracks, Apple Music picks, and generated ideas will appear here.";
    elements.libraryList.appendChild(empty);
    return;
  }

  state.library.forEach((track) => {
    const item = document.createElement("button");
    item.className = "library-item ghost-button";
    item.type = "button";
    item.innerHTML = `
      <strong>${track.title}</strong>
      <span>${track.artist || "PulseMuse AI"} • ${labelSource(track)}</span>
    `;
    item.addEventListener("click", () => queueTrack(track));
    elements.libraryList.appendChild(item);
  });
}

function buildGeneratedTrack({ prompt, mood, tempo, energy }) {
  const text = prompt || `${mood} electronic sketch`;
  const promptMood = inferMoodFromPrompt(text) || mood;
  const title = titleFromPrompt(text, state.generatedCounter);
  state.generatedCounter += 1;

  return {
    id: `generated-${Date.now()}`,
    title,
    artist: "PulseMuse AI",
    source: "pulsemuse",
    vibe: "generated",
    mood: promptMood,
    description: `${sentenceCase(promptMood)} cut inspired by "${text}", designed for ${tempo} BPM with energy level ${energy}.`,
    tempo,
    energy,
    notes: createPattern(moodNoteBanks[promptMood], energy),
    bass: createPattern(moodBassBanks[promptMood], Math.max(2, energy - 1)),
  };
}

function createPattern(bank, energy) {
  const length = 4 + energy;
  return Array.from({ length }, (_, index) => bank[(index * energy + index) % bank.length]);
}

function buildPreviewBlueprint(track) {
  const seedText = `${track.title || ""} ${track.artist || ""} ${track.genre || track.query || ""}`;
  const mood = track.mood || inferMoodFromPrompt(seedText) || "uplift";
  const energy =
    track.energy ||
    (mood === "focus" ? 2 : mood === "dream" ? 3 : track.type === "playlist" ? 4 : 4);
  const genreHint = `${track.genre || track.query || ""}`.toLowerCase();
  const matchedGenre =
    Object.keys(genreTempoHints).find((genre) => genreHint.includes(genre)) || "";
  const tempo = track.tempo || genreTempoHints[matchedGenre] || moodTempoHints[mood] || 108;

  return {
    mood,
    energy,
    tempo,
    notes: createPattern(moodNoteBanks[mood], Math.max(2, energy)),
    bass: createPattern(moodBassBanks[mood], Math.max(2, energy - 1)),
  };
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash) + 1;
}

function noiseAt(sampleIndex, seed) {
  const value = Math.sin((sampleIndex + 1) * (seed + 17) * 12.9898) * 43758.5453;
  return (value - Math.floor(value)) * 2 - 1;
}

function encodeWav(samples, sampleRate) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const writeString = (offset, value) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset + index, value.charCodeAt(index));
    }
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  samples.forEach((sample) => {
    const clamped = Math.max(-1, Math.min(1, sample));
    view.setInt16(offset, clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff, true);
    offset += 2;
  });

  return new Blob([view], { type: "audio/wav" });
}

function createPreviewUrl(track) {
  const blueprint = buildPreviewBlueprint(track);
  const sampleRate = 22050;
  const bars = track.type === "playlist" ? 12 : 8;
  const duration = (bars * 4 * 60) / blueprint.tempo;
  const totalSamples = Math.floor(duration * sampleRate);
  const samples = new Float32Array(totalSamples);
  const beatDuration = 60 / blueprint.tempo;
  const stepDuration = beatDuration / 2;
  const seed = hashString(`${track.id} ${track.title} ${track.artist || ""}`);
  const noteAccent = 1 + (seed % 5) * 0.04;

  for (let index = 0; index < totalSamples; index += 1) {
    const time = index / sampleRate;
    const beatPhase = (time % beatDuration) / beatDuration;
    const stepPhase = (time % stepDuration) / stepDuration;
    const noteIndex = Math.floor(time / stepDuration) % blueprint.notes.length;
    const bassIndex = Math.floor(time / beatDuration) % blueprint.bass.length;
    const note = blueprint.notes[noteIndex];
    const bass = blueprint.bass[bassIndex];

    const leadEnvelope = Math.pow(1 - stepPhase, 2.1) * (0.26 + blueprint.energy * 0.045);
    const padEnvelope = 0.12 + (blueprint.mood === "dream" ? 0.08 : 0.03);
    const bassEnvelope = 0.25 + (1 - beatPhase) * 0.08;

    let lead =
      Math.sin(2 * Math.PI * note * time * noteAccent) +
      0.34 * Math.sin(2 * Math.PI * note * 2 * time + 0.22);
    let pad =
      0.62 * Math.sin(2 * Math.PI * (note / 2) * time + 0.3) +
      0.38 * Math.sin(2 * Math.PI * (note / 4) * time + 0.8);
    let bassWave = Math.sin(2 * Math.PI * bass * time) * bassEnvelope;

    if (blueprint.mood === "dark") {
      lead += 0.18 * Math.sign(Math.sin(2 * Math.PI * note * time * 0.5));
      bassWave *= 1.18;
    }

    if (blueprint.mood === "focus") {
      pad *= 0.78;
      lead *= 0.72;
    }

    if (blueprint.mood === "dream") {
      pad *= 1.18;
      lead *= 0.88;
    }

    const kickTime = time % beatDuration;
    const kick =
      kickTime < 0.18
        ? Math.sin(2 * Math.PI * (46 + 120 * kickTime) * kickTime) * Math.exp(-kickTime * 20)
        : 0;

    const hatTime = time % stepDuration;
    const hat =
      hatTime < 0.04 && blueprint.mood !== "focus"
        ? noiseAt(index, seed) * Math.exp(-hatTime * 90) * 0.05
        : 0;

    const sidechain = 1 - Math.max(0, 1 - kickTime / 0.16) * 0.28;
    const mix =
      (lead * leadEnvelope + pad * padEnvelope + bassWave * 0.72 + kick * 0.9 + hat) * sidechain;

    samples[index] = Math.tanh(mix * 1.35);
  }

  return URL.createObjectURL(encodeWav(samples, sampleRate));
}

function getPreviewUrl(track) {
  const cacheKey = track.id || `${track.spotifyId || "spotify"}-${track.title || track.query || "preview"}`;
  if (!state.previewCache[cacheKey]) {
    state.previewCache[cacheKey] = createPreviewUrl(track);
  }
  return state.previewCache[cacheKey];
}

function queueTrack(track) {
  if (!track || !ensureAuthenticated()) return;
  if (track.source === "spotify") {
    playAudioPreview(track);
    return;
  }
  playSynthTrack(track);
}

function playSynthTrack(track) {
  stopAllPlayback(false);
  state.currentTrack = track;
  state.currentSource = "synth";

  const audioContext = getAudioContext();
  const stepDuration = 60 / track.tempo;
  const now = audioContext.currentTime + 0.04;
  const totalSteps = Math.max(track.notes.length, track.bass.length);
  const durationMs = totalSteps * stepDuration * 1000;

  track.notes.forEach((frequency, index) => {
    const lead = audioContext.createOscillator();
    const leadGain = audioContext.createGain();
    lead.type = track.mood === "dark" ? "sawtooth" : "triangle";
    lead.frequency.value = frequency;
    leadGain.gain.setValueAtTime(0.0001, now + index * stepDuration);
    leadGain.gain.exponentialRampToValueAtTime(
      0.07 + track.energy * 0.012,
      now + index * stepDuration + 0.03
    );
    leadGain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + index * stepDuration + stepDuration * 0.9
    );
    lead.connect(leadGain).connect(audioContext.destination);
    lead.start(now + index * stepDuration);
    lead.stop(now + index * stepDuration + stepDuration);
    state.currentNodes.push(lead, leadGain);
  });

  track.bass.forEach((frequency, index) => {
    const bass = audioContext.createOscillator();
    const bassGain = audioContext.createGain();
    bass.type = "sine";
    bass.frequency.value = frequency;
    bassGain.gain.setValueAtTime(0.0001, now + index * stepDuration);
    bassGain.gain.exponentialRampToValueAtTime(
      0.05 + track.energy * 0.006,
      now + index * stepDuration + 0.04
    );
    bassGain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + index * stepDuration + stepDuration
    );
    bass.connect(bassGain).connect(audioContext.destination);
    bass.start(now + index * stepDuration);
    bass.stop(now + index * stepDuration + stepDuration + 0.04);
    state.currentNodes.push(bass, bassGain);
  });

  updatePlayer(track, true);
  startTimedProgress(durationMs);
}

function playSpotifyTrack(track) {
  stopAllPlayback(false);
  state.currentTrack = track;
  state.currentSource = "spotify";
  elements.youtubeTitleInput.value = track.title;
  elements.youtubeUrlInput.value = track.url || track.query || createSpotifyOpenUrl(track.type, track.spotifyId);
  elements.spotifyPlayer.src = track.embedUrl;
  updatePlayer(track, false);
  updateYouTubeStatus(`Loaded ${track.title} in the SoundCloud embed. Use the embedded player to start or pause playback.`);
}

function playAudioPreview(track) {
  stopAllPlayback(false);
  state.currentTrack = track;
  state.currentSource = "preview";
  elements.youtubeTitleInput.value = track.title;
  elements.youtubeUrlInput.value =
    track.url || track.query || createSpotifyOpenUrl(track.type || "track", track.spotifyId || "");

  if (track.embedUrl) {
    elements.spotifyPlayer.src = track.embedUrl;
  }

  elements.audioPreview.src = getPreviewUrl(track);
  elements.audioPreview.currentTime = 0;
  updatePlayer(track, true);
  updateYouTubeStatus(
    `Playing an in-page preview for ${track.title}. The SoundCloud dock stays loaded beside it if you want the source card too.`
  );

  const playback = elements.audioPreview.play();
  if (playback && typeof playback.catch === "function") {
    playback.catch(() => {
      updateYouTubeStatus(
        `The browser blocked the in-page preview for ${track.title}. Use the SoundCloud embed below or click play again.`
      );
      playSpotifyTrack(track);
    });
  }
}

function toggleCurrentPlayback() {
  if (!state.currentTrack) {
    queueTrack(catalog[0]);
    return;
  }

  if (state.currentSource === "preview") {
    if (elements.audioPreview.paused) {
      elements.audioPreview.play();
    } else {
      elements.audioPreview.pause();
    }
    return;
  }

  if (state.currentSource === "spotify") {
    elements.spotifyPlayer.focus();
    return;
  }

  if (state.isPlaying) {
    pauseSynthTrack();
  } else {
    playSynthTrack(state.currentTrack);
  }
}

function pauseSynthTrack() {
  stopSynthNodes();
  clearProgressTimer();
  state.isPlaying = false;
  elements.playPauseButton.textContent = "Play";
  elements.sessionPulse.textContent = "Paused";
  elements.progressBar.value = "0";
}

function loadYouTubeFromInput() {
  const rawValue = elements.youtubeUrlInput.value.trim();
  const title = elements.youtubeTitleInput.value.trim();

  if (!rawValue) {
    updateYouTubeStatus("Paste a SoundCloud link or type a search phrase first.");
    return;
  }

  const parsed = parseSpotifyInput(rawValue);

  if (!parsed.id) {
    openSpotifySearch(rawValue);
    updateYouTubeStatus(`Opened SoundCloud search for "${rawValue}". Paste a specific SoundCloud link to embed it in the dock.`);
    pushMessage("ai", "Opened SoundCloud search in a new tab. Paste a public track or playlist link back here to play it inside the app.");
    return;
  }

  const track = {
    id: `soundcloud-${parsed.type}-${parsed.id}`,
    title: title || `SoundCloud ${sentenceCase(parsed.type)}`,
    artist: "SoundCloud",
    source: "spotify",
    vibe: "soundcloud",
    mood: inferMoodFromPrompt(title || rawValue) || "dream",
    description: `Imported from a SoundCloud ${parsed.type} link.`,
    spotifyId: parsed.id,
    type: parsed.type,
    embedUrl: createSpotifyEmbedUrl(parsed.type, parsed.url),
    url: parsed.url,
    query: title || rawValue,
  };

  playAudioPreview(track);
  pushMessage("ai", `Loaded ${track.title} into the page and generated a playable preview for it.`);
}

function startTimedProgress(durationMs) {
  clearProgressTimer();
  state.progressTimer = window.setInterval(() => {
    const nextValue = Number(elements.progressBar.value) + 100 / Math.max(1, durationMs / 120);
    if (nextValue >= 100) {
      clearProgressTimer();
      state.isPlaying = false;
      elements.playPauseButton.textContent = "Play";
      elements.sessionPulse.textContent = "Finished";
      elements.progressBar.value = "100";
    } else {
      elements.progressBar.value = String(nextValue);
    }
  }, 120);
}

function clearProgressTimer() {
  window.clearInterval(state.progressTimer);
  state.progressTimer = null;
}

function stopAllPlayback(resetTrack = false) {
  stopSynthNodes();
  elements.audioPreview.pause();
  elements.audioPreview.currentTime = 0;
  elements.audioPreview.removeAttribute("src");
  elements.audioPreview.load();
  elements.spotifyPlayer.src = "";

  clearProgressTimer();
  state.isPlaying = false;
  elements.playPauseButton.textContent = "Play";
  elements.playPauseButton.disabled = false;
  elements.progressBar.value = "0";
  elements.progressBar.disabled = false;
  elements.sessionPulse.textContent = "Idle";
  elements.playerSourceLabel.textContent = "Awaiting track";

  if (resetTrack) {
    state.currentTrack = null;
    state.currentSource = "idle";
    elements.nowPlayingTitle.textContent = "Nothing yet";
    elements.nowPlayingDetail.textContent = "Choose a mix, import SoundCloud, or generate one.";
    elements.heroStatus.textContent = "Late-night synth glide";
    updateSourceButton(null);
  }
}

function stopSynthNodes() {
  state.currentNodes.forEach((node) => {
    if (typeof node.stop === "function") {
      try {
        node.stop();
      } catch (error) {
        // Ignore nodes already stopped by scheduled playback.
      }
    }
    if (typeof node.disconnect === "function") {
      node.disconnect();
    }
  });
  state.currentNodes = [];
}

function updatePlayer(track, playing) {
  state.isPlaying = playing;
  elements.progressBar.value = "0";
  elements.playPauseButton.textContent = playing ? "Pause" : "Play";
  elements.nowPlayingTitle.textContent = track.title;
  elements.nowPlayingDetail.textContent = buildTrackDetail(track);
  const isSpotifyEmbedOnly = state.currentSource === "spotify";
  elements.sessionPulse.textContent = isSpotifyEmbedOnly
    ? "SoundCloud ready"
    : state.currentSource === "preview"
      ? "Preview live"
      : `${sentenceCase(track.mood)} energy`;
  elements.playerSourceLabel.textContent = labelSource(track);
  elements.heroStatus.textContent = isSpotifyEmbedOnly
    ? `${track.title} is docked from SoundCloud`
    : state.currentSource === "preview"
      ? `${track.title} is playing as an in-page preview`
      : `${track.title} is shaping the room`;
  elements.playPauseButton.disabled = isSpotifyEmbedOnly;
  elements.playPauseButton.textContent = isSpotifyEmbedOnly ? "Use embed" : playing ? "Pause" : "Play";
  elements.progressBar.disabled = isSpotifyEmbedOnly;
  updateSourceButton(track);
}

function buildTrackDetail(track) {
  if (track.source === "spotify") {
    return state.currentSource === "preview"
      ? `${track.artist || "SoundCloud"} • in-page preview with SoundCloud source`
      : `${track.artist || "SoundCloud"} • embedded source`;
  }
  return `${track.artist || "PulseMuse AI"} • ${track.tempo} BPM`;
}

function updateSourceButton(track) {
  if (!track) {
    elements.openCurrentSource.disabled = true;
    return;
  }

  const canOpen = Boolean(track.source === "spotify" && (track.url || track.query));
  elements.openCurrentSource.disabled = !canOpen;
}

function getAudioContext() {
  if (!state.audioContext) {
    state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (state.audioContext.state === "suspended") {
    state.audioContext.resume();
  }
  return state.audioContext;
}

function saveToLibrary(track) {
  if (!ensureAuthenticated()) return;
  if (state.library.some((item) => item.id === track.id)) {
    pushMessage("ai", `${track.title} is already saved in your library.`);
    return;
  }

  state.library.unshift(track);
  persistLibrary();
  renderLibrary();
  pushMessage("ai", `Saved ${track.title} to your library.`);
}

function persistLibrary() {
  if (!state.currentUser) return;
  localStorage.setItem(getLibraryKey(state.currentUser), JSON.stringify(state.library));
}

function loadLibraryForUser(userId) {
  if (!userId) return [];
  try {
    return JSON.parse(localStorage.getItem(getLibraryKey(userId)) || "[]");
  } catch (error) {
    return [];
  }
}

function getLibraryKey(userId) {
  return `pulsemuse-library:${userId}`;
}

function hydrateAssistant() {
  if (elements.assistantFeed.children.length) return;
  pushMessage(
    "ai",
    "I can talk through recommendations, play in-page previews for SoundCloud picks, load pasted SoundCloud links into the dock, or generate a new track from your prompt."
  );
}

function pushMessage(role, content) {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.textContent = content;
  elements.assistantFeed.appendChild(message);
  elements.assistantFeed.scrollTop = elements.assistantFeed.scrollHeight;
}

async function handleAssistantTurn(input) {
  pushMessage("user", input);
  const typing = showTypingIndicator();
  const response = resolveAssistant(input);
  await wait(420 + Math.min(780, input.length * 16));
  typing.remove();
  pushMessage("ai", response);
  speakResponse(response);
}

function showTypingIndicator() {
  const typing = document.createElement("div");
  typing.className = "message ai typing";
  typing.textContent = "PulseMuse AI is typing...";
  elements.assistantFeed.appendChild(typing);
  elements.assistantFeed.scrollTop = elements.assistantFeed.scrollHeight;
  return typing;
}

function resolveAssistant(input) {
  const text = input.toLowerCase();
  const name = state.currentUser ? sentenceCase(state.currentUser) : "there";
  const directMatch = findEmbeddedMedia(text);

  if (directMatch && /(play|start|queue|put on)/.test(text)) {
    queueTrack(createEmbeddedTrack(directMatch, directMatch.kind));
    state.assistantProfile.lastTopic = directMatch.title;
    return `Absolutely, ${name}. I've put ${directMatch.title} by ${directMatch.artist} on inside the page, so you can stay here while it plays.`;
  }

  const youtubePick = findYoutubeSuggestion(text);
  if (youtubePick && /(youtube|playlist|drill|romance|afrobeats|bollywood|k-?pop|lo-?fi)/.test(text)) {
    window.open(youtubePick.url, "_blank", "noopener");
    return `I opened a YouTube lane for ${youtubePick.genre}. If you want another genre, ask for UK drill, romance, afrobeats, Bollywood, K-pop, or lo-fi.`;
  }

  if (text.includes("video")) {
    const fallbackGenre = state.activeGenre === "All" ? "pop" : state.activeGenre;
    const query = input.replace(/video|music video|play/gi, "").trim() || `${fallbackGenre} music video`;
    const videoPick = findYoutubeSuggestion(query) || findVideoByGenre(fallbackGenre);
    if (videoPick && query === `${fallbackGenre} music video`) {
      window.open(videoPick.url, "_blank", "noopener");
      state.assistantProfile.lastTopic = videoPick.title;
      return `I opened a YouTube lane for ${videoPick.genre || videoPick.title}. If you want something else in ${fallbackGenre}, I can open a broader YouTube search too.`;
    }
    openYouTubeVideoSearch(query);
    return `I opened a YouTube search for ${query}.`;
  }

  if (text.includes("soundcloud") || text.includes("spotify")) {
    const parsed = parseSpotifyInput(input);

    if (parsed.id) {
      const track = {
        id: `soundcloud-${parsed.type}-${parsed.id}`,
        title: elements.youtubeTitleInput.value.trim() || `SoundCloud ${sentenceCase(parsed.type)}`,
        artist: "SoundCloud",
        source: "spotify",
        vibe: "soundcloud",
        mood: inferMoodFromPrompt(input) || "dream",
        description: `Imported from a SoundCloud ${parsed.type} request.`,
        spotifyId: parsed.id,
        type: parsed.type,
        embedUrl: createSpotifyEmbedUrl(parsed.type, parsed.url),
        url: parsed.url,
        query: input,
      };
      playAudioPreview(track);
      return `Loaded that SoundCloud link, ${name}. I started an in-page preview and left the SoundCloud dock ready beside it.`;
    }

    const query = input.replace(/spotify|soundcloud|play/gi, "").trim() || "fresh music";
    openSpotifySearch(query);
    return `I opened a broader SoundCloud search for ${query}. If you paste any result link here, I can load it directly into the webpage.`;
  }

  if (text.includes("focus")) {
    queueTrack(catalog.find((track) => track.vibe === "focus"));
    state.assistantProfile.lastMood = "focus";
    return "I queued Quiet Current for you. It keeps the motion steady and soft enough that it should not fight for your attention.";
  }

  if (text.includes("ambient") || text.includes("sleep") || text.includes("calm")) {
    queueTrack(catalog.find((track) => track.vibe === "ambient"));
    state.assistantProfile.lastMood = "calm";
    return "Afterglow Static is playing now. It leans slow, spacious, and gentle, so it should calm the room down quickly.";
  }

  if (text.includes("club") || text.includes("party") || text.includes("dance")) {
    queueTrack(catalog.find((track) => track.vibe === "club"));
    state.assistantProfile.lastMood = "party";
    return "I switched the room to Aurora Drive. It has brighter drums and more forward motion, so it should feel more alive right away.";
  }

  if (text.includes("generate") || text.includes("make")) {
    const mood = inferMoodFromPrompt(text) || "uplift";
    const generated = buildGeneratedTrack({
      prompt: input,
      mood,
      tempo: mood === "dark" ? 118 : 110,
      energy: mood === "focus" ? 2 : 4,
    });
    renderGeneratedTrack(generated);
    state.assistantProfile.lastMood = mood;
    return `I built ${generated.title} for you. It's sitting in Generator Lab now, ready to play or save if that direction feels right.`;
  }

  if (text.includes("recommend") || text.includes("suggest")) {
    const genre = state.activeGenre === "All" ? "Pop" : state.activeGenre;
    const recommendation = pickCatalogRecommendation(genre);
    if (recommendation) {
      queueTrack(recommendation);
      state.assistantProfile.lastTopic = recommendation.title;
      return `My first pick for this room is ${recommendation.title} by ${recommendation.artist}. I've already queued it so you can judge it immediately instead of reading a long explanation.`;
    }
  }

  if (text.includes("what are you playing") || text.includes("now playing")) {
    if (!state.currentTrack) {
      return "Nothing is playing yet. If you want, I can start one of the inline SoundCloud picks, choose a genre match, or generate something original.";
    }
    return `Right now it's ${state.currentTrack.title} from ${labelSource(state.currentTrack)}. If you want, I can keep this vibe going or shift the room somewhere completely different.`;
  }

  if (text.includes("how are you")) {
    return "I'm good. I'm tracking the current mood, the active genre, and what you've been asking for, so I can respond more like a music partner than a command line.";
  }

  if (text.includes("thank")) {
    return "Anytime. If you want, I can line up something heavier, calmer, more visual, or more experimental next.";
  }

  if (text.includes("hello") || text.includes("hi")) {
    return `Hi ${name}. I'm ready. Tell me what mood you want, ask me to play one of the inline songs, or paste a SoundCloud link and I'll keep it inside the page.`;
  }

  return "I can help with that, but I need a little more direction. Ask for a genre, a mood, a music video, a recommendation, or tell me to generate something from a prompt.";
}

function toggleVoiceAssistant() {
  state.voiceEnabled = !state.voiceEnabled;
  elements.voiceToggle.textContent = state.voiceEnabled ? "Disable voice AI" : "Enable voice AI";
  updateVoiceStatus(state.voiceEnabled ? "Voice ready" : "Listening off");
  if (state.voiceEnabled) {
    speakResponse("Voice assistant enabled.");
  } else if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function startListening() {
  if (!recognition) {
    pushMessage("ai", "Speech recognition is not available in this browser. Typing still works.");
    return;
  }
  if (!state.voiceEnabled) {
    state.voiceEnabled = true;
    elements.voiceToggle.textContent = "Disable voice AI";
  }
  updateVoiceStatus("Listening...");
  try {
    recognition.start();
  } catch (error) {
    pushMessage("ai", "Microphone capture is already active. Speak once the browser prompt clears.");
  }
}

function speakResponse(text) {
  if (!state.voiceEnabled || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.02;
  utterance.pitch = 1.0;
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
}

function updateVoiceStatus(text) {
  elements.voiceStatus.textContent = text;
}

function updateYouTubeStatus(text) {
  elements.youtubeStatus.textContent = text;
}

function parseSpotifyInput(input) {
  const trimmed = input.trim();
  const directUrlMatch = trimmed.match(
    /^(https?:\/\/(?:www\.)?(?:soundcloud\.com|m\.soundcloud\.com|api\.soundcloud\.com)\/[^\s?#]+(?:[^\s#]*)?)$/i
  );

  if (directUrlMatch) {
    const url = directUrlMatch[1];
    return {
      type: /\/sets\/|\/favorites/i.test(url) ? "playlist" : "track",
      id: String(hashString(url)),
      url,
    };
  }

  return {
    type: "",
    id: "",
    url: "",
  };
}

function openSpotifySearch(query) {
  const url = `https://soundcloud.com/search?q=${encodeURIComponent(query)}`;
  window.open(url, "_blank", "noopener");
}

function openYouTubeVideoSearch(query) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  window.open(url, "_blank", "noopener");
}

function openTrackSource(track) {
  if (!track) return;
  if (track.source === "spotify") {
    if (track.url && !/api\.soundcloud\.com/i.test(track.url)) {
      window.open(track.url, "_blank", "noopener");
      return;
    }
    if (track.query) {
      openSpotifySearch(track.query);
    }
  }
}

function createEmbeddedTrack(item, kind = "track") {
  const sourceUrl = item.url || createSpotifyOpenUrl(item.type, item.query || item.id);
  return {
    id: `soundcloud-${item.type}-${item.id}`,
    title: item.title,
    artist: item.artist || "SoundCloud",
    source: "spotify",
    vibe: kind === "video" ? "soundcloud-curation" : "soundcloud",
    mood: item.mood || inferMoodFromPrompt(item.title) || "uplift",
    description: item.description,
    spotifyId: item.id,
    type: item.type,
    embedUrl: createSpotifyEmbedUrl(item.type, sourceUrl),
    url: sourceUrl,
    query: item.query || item.title,
    genre: item.genre || "",
  };
}

function findEmbeddedMedia(text) {
  const allMedia = [
    ...youtubeCurations.map((item) => ({ ...item, kind: "track" })),
    ...videoCurations.map((item) => ({ ...item, kind: "video" })),
  ];

  return allMedia.find((item) => {
    const haystack = `${item.title} ${item.artist || ""} ${item.genre || ""}`.toLowerCase();
    return haystack.includes(text) || text.includes(item.title.toLowerCase());
  });
}

function findVideoByGenre(genre) {
  return videoCurations.find((item) => item.genre.toLowerCase() === genre.toLowerCase()) || null;
}

function findYoutubeSuggestion(text) {
  return (
    youtubeSuggestions.find((item) => {
      const haystack = `${item.title} ${item.genre} ${item.query}`.toLowerCase();
      return haystack.includes(text) || text.includes(item.genre.toLowerCase()) || text.includes(item.title.toLowerCase());
    }) || null
  );
}

function pickCatalogRecommendation(genre) {
  return (
    catalog.find((track) => (track.genres || []).includes(genre)) ||
    catalog.find((track) => track.vibe === "club") ||
    catalog[0]
  );
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function createSpotifyOpenUrl(type, id) {
  const query = typeof id === "string" && id ? id : type;
  return `https://soundcloud.com/search?q=${encodeURIComponent(query)}`;
}

function createSpotifyEmbedUrl(type, id) {
  const url = typeof id === "string" && /^https?:\/\//i.test(id) ? id : createSpotifyOpenUrl(type, id);
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff875c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
}

function inferMoodFromPrompt(prompt) {
  const text = prompt.toLowerCase();
  if (/(dark|moody|shadow|midnight|cyberpunk)/.test(text)) return "dark";
  if (/(dream|airy|sunrise|float|cinematic|ambient)/.test(text)) return "dream";
  if (/(focus|study|deep work|minimal|clean)/.test(text)) return "focus";
  if (/(uplift|bright|party|house|summer|happy|dance)/.test(text)) return "uplift";
  return "";
}

function titleFromPrompt(prompt, count) {
  const cleanWords = prompt
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map(sentenceCase);

  if (!cleanWords.length) {
    return `Generated Pulse ${count}`;
  }

  return cleanWords.join(" ");
}

function sentenceCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function labelSource(track) {
  if (track.source === "spotify") {
    const isCurrentPreview =
      state.currentTrack && state.currentTrack.id === track.id && state.currentSource === "preview";
    return isCurrentPreview ? "SoundCloud preview" : "SoundCloud";
  }
  if (track.vibe === "generated") return "PulseMuse AI";
  return "PulseMuse";
}

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadSession() {
  return localStorage.getItem(SESSION_KEY) || "";
}

function saveSession(userId) {
  localStorage.setItem(SESSION_KEY, userId);
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function sanitizeUserId(value) {
  return value.trim().toLowerCase();
}

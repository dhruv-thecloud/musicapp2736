# PulseMuse

PulseMuse is a self-contained browser music app prototype inspired by streaming apps, with two extra pieces:

- a prompt-based music generator powered by the Web Audio API
- a talking AI assistant powered by browser speech synthesis and speech recognition
- a SoundCloud embed dock that can load pasted public SoundCloud tracks and playlists
- a local sign-up and sign-in layer that stores accounts in the browser
- a broad genre atlas and music-video lane for wider streaming-style browsing

## Features

- Streaming-style browsing UI with curated mixes and a persistent library
- Unique editorial dashboard layout with an auth gate and per-user library state
- Broad genre browsing with many major genres and a video discovery lane
- Generated tracks with mood, tempo, and energy controls
- Inline SoundCloud picks that play directly inside the page, plus embedded playback for pasted public SoundCloud links
- More conversational local AI chat responses, with optional voice output and microphone input in supported browsers
- Responsive layout for desktop and mobile

## Run

Open [`index.html`](./index.html) in a modern browser.

For the best experience, use a Chromium-based browser so both Web Audio and Web Speech work consistently.
SoundCloud embeds also work more reliably when the app is served from a local server instead of opened directly from disk.

## Accounts

Sign-up and sign-in are local-only. User IDs, passwords, session state, and saved libraries are stored in browser `localStorage`, so they work as a front-end prototype and not as a secure backend authentication system.

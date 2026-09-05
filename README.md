# NeuroPlay — Dementia Care & Memory Companion (Prototype)

A frontend-only hackathon prototype. No backend, database, or real AI — everything
runs on mock data, React state, and localStorage.

## 1. Setup & run

```bash
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

To type-check / production build:
```bash
npm run build
```

## 2. Demo flow

Landing page → **Try Demo** (or Sign In with `demo@example.com` / `123456`) →
Caregiver Dashboard → tap the floating companion (bottom-right) → Daily
Activities → mark a reminder done → Cognitive Games → play a game → Memories →
open a memory → Ask Companion → Family Circle → Progress.

Everything is interactive: reminders complete, games score and track progress,
memory modals open, the companion responds to quick replies, and Settings (gear
icon, top right) has Large Text / High Contrast toggles and a Reset Demo button.

## 3. Project structure

```
src/
  data/mockData.ts        ← ALL demo content lives here (routine, family
                             reminders, memories, family circle, games, stats)
  services/                ← mock service functions, one per future API
    authService.ts
    companionService.ts
    gameService.ts
    memoryService.ts
    reminderService.ts
  context/AppContext.tsx   ← global state (auth, routine, games, settings, toasts)
  components/              ← reusable UI building blocks
  pages/                   ← one file per route/screen
  types.ts                 ← shared TypeScript interfaces
```

## 4. Where to replace demo content

- **Images**: `src/data/mockData.ts` → each `memories[].image` is a plain URL.
  Swap in real family photos (a public URL or a file under `src/assets/`).
- **Family data**: `src/data/mockData.ts` → `familyMembers`, `familyReminders`,
  `lovedOneMessages`, and `patientProfile` at the top of the file.
- **Games & questions**: `src/data/mockData.ts` → `games[]`. Add more
  `GameQuestionData` entries or flip `implemented: true` on the remaining
  game stubs (Family Connections, Remember the Object, Pattern Match) once
  you build their question sets.

## 5. Where to connect a real backend later

Every service file in `src/services/` is written as an async function with
the same signature a real API call would have — swap the mock body for a
`fetch`/SDK call and nothing else in the app needs to change:

- `authService.ts` → real Authentication API
- `companionService.ts` → `getCompanionResponse(intent, context)` is built to
  proxy straight to a real AI Companion API (LLM call) later
- `gameService.ts` → Cognitive Game API
- `memoryService.ts` → Memory Storage API (photo upload/fetch)
- `reminderService.ts` → Reminder API (push notifications, scheduling)

`AppContext.tsx` currently holds all state in React state + localStorage;
this is the seam where you'd add real data fetching (e.g. React Query) once
those services talk to a real backend.

## 6. Notes

- The floating companion character (Sunny) is a hand-drawn inline SVG in
  `src/components/CompanionCharacter.tsx` — swap it for a different
  illustration or a Lottie animation later without touching any layout code.
- Progress / engagement language intentionally avoids medical diagnosis
  terms, per the product brief, and includes a disclaimer on the Progress page.

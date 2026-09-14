# React Chat Practice

A frontend-only chat app UI built with React + Vite, using mock/local data. No backend required — this project is focused purely on practicing React fundamentals: components, state, hooks, and effects.

## Goal

This is a learning project, not a production app. The aim is to build a realistic-feeling chat interface entirely with fake data, so that later a real backend (Firebase, Supabase, or a custom Node.js server) can be swapped in without rewriting the UI.

## Features

- Conversation list with active conversation selection
- Message list with sending, auto-scroll, and timestamps
- Simulated replies (fake "typing..." + canned response)
- Message state persisted to `localStorage` across refreshes
- Dark mode, unread badges, and search (planned)

## Tech Stack

- React
- Vite
- Plain CSS (no UI framework, to practice styling by hand)

## Project Structure

```
react-chat-practice/
├── public/
├── src/
│   ├── components/
│   │   ├── ConversationList.jsx
│   │   ├── ConversationItem.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── ChatHeader.jsx
│   │   ├── MessageList.jsx
│   │   ├── MessageBubble.jsx
│   │   ├── MessageInput.jsx
│   │   └── TypingIndicator.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useAutoScroll.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/react-chat-practice.git
cd react-chat-practice
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Roadmap

- [x] Set up project structure
- [ ] Design mock data shapes (users, conversations, messages)
- [ ] Build component tree
- [ ] Wire up state (active conversation, messages)
- [ ] Message sending + simulated replies
- [ ] Auto-scroll, timestamps, typing indicator
- [ ] Persist messages to localStorage
- [ ] Dark mode, unread badges, search
- [ ] (Later) Swap mock data layer for a real backend

## Notes

All chat data currently lives in `src/data/mockData.js`. Components read from and update this data through props/state only — no component talks to `mockData.js` directly — so that a real backend can eventually replace it with minimal changes to the UI layer.
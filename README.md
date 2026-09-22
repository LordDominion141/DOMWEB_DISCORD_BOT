# DomWeb Bot 🤖
<img alt='Thumbnail' src='./assets/ChatGPT Image Sep 18, 2026, 09_56_13 AM.png'>



DomWeb Bot is an automated JavaScript learning companion for Discord. It delivers a curated progression of daily coding questions directly to users via Direct Messages (DMs), tracks individual progress across skill tiers, handles modal-based answer submissions, and automatically resets daily quotas using a scheduled cron routine.

## 🚀 Features

- **Multi-Tier Curriculum:** Delivers questions categorized into `Beginner`, `Intermediate`, and `Advanced` levels.
- **Robust State Persistence:** Implements a proxy-wrapped, file-backed `sessions.json` engine. User states automatically save on modification and persist across server restarts.
- **Slash Commands & Modals:** Uses Discord's modern layout framework to present visual form overlays (`ModalBuilder`) for answering questions cleanly.
- **Automated Pacing:** Uses `node-cron` to automatically refresh daily allowances and distribute questions at scheduled intervals.
- **DM Isolation:** Interacts entirely in private DMs so user workflows do not clutter public text channels.

---

## 🛠️ Commands Available

| Command | Description |
| :--- | :--- |
| `/start` | Select your level from a select menu and initialize your learning routine. |
| `/switch` | Modify your active skill level tier. |
| `/stop` | Halt your daily questioning routine. |
| `/answer` | Triggers a multi-line popup text field (`Modal`) to submit an explanation. |
| `/source` | Fetches code documentation references for the active question. |
| `/help` | Pins a helpful guide containing operational syntax rules. |

---

## 📁 File Structure Overview

```text
domweb-bot/
├── commands/            # Slash command execution files
│   ├── answer.js
│   ├── help.js
│   ├── ping.js
│   ├── source.js
│   ├── start.js
│   ├── stop.js
│   └── switch.js
├── components/          # Reusable UI overlays (Modals, Embeds)
│   ├── answerModal.js
│   └── helpMessage.js
├── db/                  # Curriculum question banks & arrays
│   ├── advanced.js
│   ├── beginner.js
│   └── intermediate.js
├── operations/          # Direct messaging handling routines
│   └── sendMessage.js
├── states/              # State storage and persistence layers
│   └── activeSessions.js
├── .env                 # Protected environment secrets
├── .gitignore           # File exclusion mapping for Git
├── index.js             # Bot entrypoint & event coordinator
├── package.json         # Dependency configuration manifest
└── sessions.json        # Automatically generated persistent storage
```

---

## 💻 Local Setup & Installation

### 1. Prerequisites
Ensure you have **Node.js (v18.x or later)** installed on your machine.

### 2. Clone and Install Dependencies
Navigate into your project folder and run:
```bash
npm install
```

### 3. Configure Environment Variables
Create a file named `.env` in the root directory and append your secure application data:
```env
DISCORD_TOKEN=your_bot_token_here
USER_ID=your_discord_account_id
PORT=3000
```

### 4. Run the Bot Locally
For continuous development mode (auto-restarts when files change):
```bash
npm run dev
```
To run the standard deployment execution command:
```bash
npm start
```

---

## 🌐 Deployment Configuration (Render)

This bot is configured to run seamlessly on **Render's Free Tier**:

1. **Keep-Alive Endpoint:** Contains an integrated `express` web service to satisfy Render's port binding (`PORT 3000`) and handle auto-pings to prevent container sleep intervals.
2. **State Recovery:** Reads/writes local user structures safely via `sessions.json`. 
   * *Note: Render's ephemeral filesystem wipes this file during new builds or server restarts. For permanent scalability, integrate a database driver.*

---

## 📜 License
This project is open-source and available under the **MIT License**.

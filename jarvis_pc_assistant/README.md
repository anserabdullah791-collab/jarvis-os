# Jarvis PC Voice Assistant

A real, locally-running voice assistant for your Windows or Linux computer.
Say **"Hey Jarvis"**, it wakes up, listens to your command, and either:

1. **Handles it instantly, locally** — opens your real browser, YouTube,
   Instagram, Facebook, TikTok, Play Store, Notepad/text editor, Calculator,
   File Manager, Terminal, the Jarvis OS dashboard, tells you the time/date,
   a joke, etc. These are genuine actions on your actual machine.
2. **Or, if it's not a known local command, asks the real brain** — it sends
   the question to the actual Jarvis Superagent (the same one you talk to in
   chat / WhatsApp) over its official Agent API, and speaks the real answer
   back to you out loud. That's how it can genuinely check your Gmail,
   Calendar, GitHub, run automations, etc. — not a fake canned response.

Credit where due: the wake-word + system-command pattern here was adapted
from two open-source projects — `kishanrajput23/Jarvis-Desktop-Voice-Assistant`
(SpeechRecognition/pyttsx3 + system commands) and `isair/jarvis` (routing
anything it doesn't recognize to a real, tool-using brain instead of a
scripted reply).

## What this is (and isn't), honestly

- This **really** opens real apps and websites on your real computer, and
  **really** talks to a live microphone and speaker. Not a simulation.
- The "ask the real brain" path is a genuine network call to Jarvis's
  official API — real actions (like reading email) actually happen.
- What it can't do: it cannot bypass Windows/Linux permission prompts, it
  needs a working microphone, and continuous wake-word listening uses your
  CPU/battery a bit more than normal — that's true of any always-listening
  assistant, not a limitation specific to this one.

## Setup

### 1. Install Python
You need Python 3.10 or newer. Get it from https://python.org (Windows: tick
"Add Python to PATH" during install). Linux usually already has it.

### 2. Run the installer
**Windows:** right-click `install_windows.ps1` → "Run with PowerShell".
If Windows blocks it, open PowerShell in this folder and run:
```
Set-ExecutionPolicy -Scope Process Bypass
.\install_windows.ps1
```

**Linux:**
```
chmod +x install_linux.sh
./install_linux.sh
```

The installer creates a virtual environment, installs everything needed, and
launches the assistant for first-time setup.

### 3. Connect it to the real brain (optional but recommended)
On first run it'll ask for two things — get them from the Base44 editor's
**Developer / API Docs** panel for this Superagent:
- The API base URL
- Your personal API key

Paste them in (or leave blank and edit `config.json` later — see
`config.json.example`). Without this, local commands (opening apps, time,
jokes) still work fine — you just won't get real answers for anything else.

### 4. Talk to it
```
python jarvis_pc_assistant.py
```
Say **"Hey Jarvis"**, wait for "Yes?", then say your command. Try:
- "Hey Jarvis, open YouTube"
- "Hey Jarvis, open Instagram"
- "Hey Jarvis, what time is it"
- "Hey Jarvis, what's on my calendar today" *(routes to the real brain)*

Press `Ctrl+C` to quit.

## Make it start automatically

**Windows** — Task Scheduler (most reliable):
1. Open Task Scheduler → Create Task
2. Trigger: "At log on"
3. Action: Start a program → `powershell.exe`, arguments:
   `-ExecutionPolicy Bypass -File "C:\path\to\jarvis_pc_assistant\install_windows.ps1"`
   (or point straight at `venv\Scripts\python.exe jarvis_pc_assistant.py` once installed)

**Linux** — systemd user service (`jarvis-voice.service` included):
```
mkdir -p ~/.config/systemd/user
cp jarvis-voice.service ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable --now jarvis-voice.service
loginctl enable-linger $USER
```

## Voice commands it understands locally
| Say | Does |
|---|---|
| "open YouTube / Instagram / Facebook / TikTok / Play Store" | Opens the real site in your browser |
| "play [song/artist] on YouTube" | Real YouTube search, opens results |
| "open browser / notepad / calculator / file manager / terminal" | Opens the real app on your OS |
| "open Jarvis OS" / "open my dashboard" | Opens your Jarvis OS desktop web app |
| "what time is it" / "what's the date" | Speaks the real current time/date |
| "tell me a joke" | Tells one |
| "goodbye" / "stop listening" | Goes quiet until you say the wake word again |
| *(anything else)* | Sent to the real Jarvis brain, real answer spoken back |

## Troubleshooting
- **No microphone detected / PyAudio install fails on Windows:** run
  `venv\Scripts\pip install pipwin` then `venv\Scripts\pipwin install pyaudio`.
- **No sound output on Linux:** `sudo apt install espeak` (the installer
  tries this already).
- **"I couldn't reach my real brain":** double check `api_base` and
  `api_key` in `config.json` are pasted exactly from the editor's API docs.

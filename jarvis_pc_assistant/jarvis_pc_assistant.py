#!/usr/bin/env python3
"""
Jarvis PC Voice Assistant
--------------------------
A real, locally-running voice assistant for Windows / Linux.

- Wake word: say "Hey Jarvis" and it starts listening for a command.
- Instant local commands: opens real apps/websites on YOUR machine (browser,
  notepad, calculator, YouTube, Instagram, Facebook, TikTok, Play Store,
  file manager, terminal, the Jarvis OS dashboard, time/date, jokes...).
- Real brain: anything it doesn't recognize as a local command gets sent to
  the actual Jarvis Superagent (the one you're talking to in chat / WhatsApp)
  over its official Agent API, so it can genuinely check your email,
  calendar, GitHub, run automations, etc. The spoken reply comes back out
  loud through your speakers.

Architecture credit: wake-word + command-router pattern adapted from the
open-source repos kishanrajput23/Jarvis-Desktop-Voice-Assistant (system
commands, SpeechRecognition/pyttsx3 usage) and isair/jarvis (routing
unmatched queries to a real tool-using brain instead of canned replies).

SETUP (see README.md for full details):
  1. pip install -r requirements.txt
  2. Get your Agent API key + base URL from the Base44 editor
     (Developer / API Docs panel) and put them in config.json
     (first run will prompt you and save it for you).
  3. Run: python jarvis_pc_assistant.py
"""

import datetime
import json
import os
import platform
import random
import subprocess
import sys
import webbrowser

import pyttsx3
import requests
import speech_recognition as sr

try:
    import pyjokes
    HAS_JOKES = True
except ImportError:
    HAS_JOKES = False

CONFIG_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "config.json")
WAKE_WORDS = ("hey jarvis", "jarvis", "hey friday", "friday")
OS_NAME = platform.system()  # 'Windows', 'Linux', 'Darwin'

JARVIS_OS_URL = "https://anserabdullah791-collab.github.io/jarvis-os/"

# ---------------------------------------------------------------------------
# Config / first-run setup
# ---------------------------------------------------------------------------

def load_config():
    if os.path.exists(CONFIG_PATH):
        with open(CONFIG_PATH, "r") as f:
            return json.load(f)
    return {}


def save_config(cfg):
    with open(CONFIG_PATH, "w") as f:
        json.dump(cfg, f, indent=2)


def first_run_setup():
    print("=" * 60)
    print(" JARVIS PC ASSISTANT - first-time setup")
    print("=" * 60)
    print("To give this assistant its real brain (Gmail, Calendar, GitHub,")
    print("WhatsApp, automations - everything the real Jarvis can already do)")
    print("it needs to talk to the Jarvis Superagent's official Agent API.")
    print()
    print("Get these from the Base44 editor -> Developer / API Docs panel:")
    print("  1) The API base URL (looks like https://.../api/agents/<id>)")
    print("  2) Your personal API key")
    print()
    base_url = input("Paste the API base URL (or leave blank to skip for now): ").strip()
    api_key = input("Paste your API key (or leave blank to skip for now): ").strip()
    cfg = {"api_base": base_url, "api_key": api_key, "conversation_id": ""}
    save_config(cfg)
    print("\nSaved to config.json. You can edit this file any time.")
    print("(Local commands - opening apps/sites, time, jokes - work fine")
    print(" even without this. Only 'ask the real brain' needs it.)\n")
    return cfg


# ---------------------------------------------------------------------------
# Speech engine
# ---------------------------------------------------------------------------

engine = pyttsx3.init()
engine.setProperty("rate", 175)
engine.setProperty("volume", 1.0)


def speak(text: str):
    print(f"JARVIS: {text}")
    try:
        engine.say(text)
        engine.runAndWait()
    except Exception as e:
        print(f"[voice output unavailable: {e}]")


def listen(timeout=5, phrase_time_limit=8):
    """Listen from the default microphone and return lowercase text, or None."""
    r = sr.Recognizer()
    r.pause_threshold = 0.8
    with sr.Microphone() as source:
        try:
            audio = r.listen(source, timeout=timeout, phrase_time_limit=phrase_time_limit)
        except sr.WaitTimeoutError:
            return None
    try:
        text = r.recognize_google(audio)
        print(f"YOU: {text}")
        return text.lower()
    except sr.UnknownValueError:
        return None
    except sr.RequestError as e:
        print(f"[speech recognition service error: {e}]")
        return None


# ---------------------------------------------------------------------------
# Real brain bridge (Agent API)
# ---------------------------------------------------------------------------

def ask_real_jarvis(cfg, query: str) -> str:
    api_base = cfg.get("api_base")
    api_key = cfg.get("api_key")
    if not api_base or not api_key:
        return ("I'm not connected to my real brain yet - add your API key "
                "and base URL to config.json to unlock that (see README).")
    try:
        conv_id = cfg.get("conversation_id") or ""
        if not conv_id:
            r = requests.post(
                f"{api_base}/conversations",
                headers={"api_key": api_key},
                json={},
                timeout=30,
            )
            r.raise_for_status()
            conv_id = r.json().get("id", "")
            cfg["conversation_id"] = conv_id
            save_config(cfg)

        r = requests.post(
            f"{api_base}/conversations/{conv_id}/messages",
            headers={"api_key": api_key},
            json={"content": query},
            timeout=120,
        )
        r.raise_for_status()
        data = r.json()
        return data.get("content") or data.get("message") or str(data)
    except requests.exceptions.RequestException as e:
        return f"I couldn't reach my real brain right now ({e})."


# ---------------------------------------------------------------------------
# Local app / website launcher (cross-platform, real OS actions)
# ---------------------------------------------------------------------------

def open_path_or_app(cmd_windows=None, cmd_linux=None, cmd_darwin=None, url_fallback=None):
    try:
        if OS_NAME == "Windows" and cmd_windows:
            if isinstance(cmd_windows, str) and os.path.exists(cmd_windows):
                os.startfile(cmd_windows)
            else:
                subprocess.Popen(cmd_windows, shell=True)
        elif OS_NAME == "Linux" and cmd_linux:
            subprocess.Popen(cmd_linux, shell=isinstance(cmd_linux, str))
        elif OS_NAME == "Darwin" and cmd_darwin:
            subprocess.Popen(cmd_darwin, shell=isinstance(cmd_darwin, str))
        elif url_fallback:
            webbrowser.open(url_fallback)
        else:
            return False
        return True
    except Exception as e:
        print(f"[could not launch: {e}]")
        if url_fallback:
            webbrowser.open(url_fallback)
        return False


LOCAL_SITES = {
    "youtube": "https://www.youtube.com",
    "facebook": "https://www.facebook.com",
    "instagram": "https://www.instagram.com",
    "tiktok": "https://www.tiktok.com",
    "play store": "https://play.google.com/store",
    "gmail": "https://mail.google.com",
    "calendar": "https://calendar.google.com",
    "github": "https://github.com",
    "whatsapp": "https://web.whatsapp.com",
    "jarvis os": JARVIS_OS_URL,
    "jarvis dashboard": JARVIS_OS_URL,
    "my dashboard": JARVIS_OS_URL,
}


def handle_local_command(query: str):
    """Return True/'SLEEP' if handled locally, False if it should go to the real brain."""

    if any(p in query for p in ("what time", "current time", "tell me the time")):
        speak(datetime.datetime.now().strftime("It's %I:%M %p."))
        return True

    if any(p in query for p in ("what's the date", "what is the date", "today's date")):
        speak(datetime.datetime.now().strftime("Today is %A, %B %d, %Y."))
        return True

    if "joke" in query:
        if HAS_JOKES:
            speak(pyjokes.get_joke())
        else:
            speak("Why did the AI cross the road? To optimize the chicken's route.")
        return True

    for site, url in LOCAL_SITES.items():
        if f"open {site}" in query or query.strip() == site:
            speak(f"Opening {site}.")
            webbrowser.open(url)
            return True

    if "youtube" in query and ("play" in query or "search" in query):
        term = query.replace("play", "").replace("search", "").replace("on youtube", "").replace("youtube", "").strip()
        speak(f"Playing {term} on YouTube." if term else "Opening YouTube.")
        webbrowser.open(f"https://www.youtube.com/results?search_query={requests.utils.quote(term)}" if term else LOCAL_SITES["youtube"])
        return True

    if "open browser" in query or query.strip() in ("open chrome", "open google"):
        speak("Opening your browser.")
        webbrowser.open("https://www.google.com")
        return True

    if "open notepad" in query or "open text editor" in query or "open editor" in query:
        speak("Opening a text editor.")
        open_path_or_app(cmd_windows="notepad.exe", cmd_linux=["xdg-open", os.path.expanduser("~")], cmd_darwin=["open", "-a", "TextEdit"])
        return True

    if "open calculator" in query:
        speak("Opening the calculator.")
        open_path_or_app(cmd_windows="calc.exe", cmd_linux="gnome-calculator || xcalc", cmd_darwin=["open", "-a", "Calculator"])
        return True

    if "open file manager" in query or "open files" in query or "open explorer" in query:
        speak("Opening the file manager.")
        open_path_or_app(cmd_windows="explorer.exe", cmd_linux=["xdg-open", os.path.expanduser("~")], cmd_darwin=["open", os.path.expanduser("~")])
        return True

    if "open terminal" in query or "open command prompt" in query:
        speak("Opening a terminal.")
        open_path_or_app(cmd_windows="cmd.exe", cmd_linux="x-terminal-emulator || gnome-terminal || xterm", cmd_darwin=["open", "-a", "Terminal"])
        return True

    if any(p in query for p in ("go to sleep", "goodbye", "stop listening", "shut down", "exit jarvis")):
        speak("Going quiet. Say Hey Jarvis anytime to wake me back up.")
        return "SLEEP"

    return False


# ---------------------------------------------------------------------------
# Main loop
# ---------------------------------------------------------------------------

def main():
    cfg = load_config()
    if not cfg:
        cfg = first_run_setup()

    speak("Jarvis PC assistant online. Say 'Hey Jarvis' any time.")
    print("\n(Press Ctrl+C to quit.)\n")

    try:
        while True:
            heard = listen(timeout=None, phrase_time_limit=4)
            if not heard:
                continue
            if any(w in heard for w in WAKE_WORDS):
                speak("Yes?")
                heard_cmd = listen(timeout=6, phrase_time_limit=12)
                if not heard_cmd:
                    speak("I didn't catch that.")
                    continue
                process_command(cfg, heard_cmd)
    except KeyboardInterrupt:
        speak("Shutting down. Goodbye.")
        sys.exit(0)


def process_command(cfg, query: str):
    result = handle_local_command(query)
    if result == "SLEEP" or result is True:
        return
    # Not a known local command -> ask the real brain
    speak("Let me check on that.")
    answer = ask_real_jarvis(cfg, query)
    speak(answer)


if __name__ == "__main__":
    main()

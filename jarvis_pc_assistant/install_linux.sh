#!/usr/bin/env bash
set -e
echo "============================================================"
echo "  Installing Jarvis PC Voice Assistant (Linux)"
echo "============================================================"

if ! command -v python3 &>/dev/null; then
    echo "python3 not found. Install it with your package manager first, e.g.:"
    echo "  sudo apt install python3 python3-venv python3-pip"
    exit 1
fi

echo "Checking system packages needed for microphone + speech (portaudio, espeak)..."
if command -v apt &>/dev/null; then
    echo "You may be prompted for your sudo password to install portaudio19-dev, espeak, flac:"
    sudo apt update -qq && sudo apt install -y portaudio19-dev espeak flac python3-venv || true
fi

echo "Creating virtual environment..."
python3 -m venv venv

echo "Installing Python dependencies..."
./venv/bin/pip install --upgrade pip
./venv/bin/pip install -r requirements.txt

echo ""
echo "============================================================"
echo "  Install complete. Launching first-time setup..."
echo "============================================================"
./venv/bin/python jarvis_pc_assistant.py

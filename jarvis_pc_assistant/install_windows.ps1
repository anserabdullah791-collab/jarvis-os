# Jarvis PC Voice Assistant - Windows installer (PowerShell)
# Right-click this file -> "Run with PowerShell" (or run from a PowerShell prompt).
# If Windows blocks scripts, first run:  Set-ExecutionPolicy -Scope Process Bypass

Write-Host "============================================================"
Write-Host "  Installing Jarvis PC Voice Assistant (Windows)"
Write-Host "============================================================"

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Host "Python was not found. Install Python 3.10+ from https://python.org"
    Write-Host "(tick 'Add Python to PATH' during install), then re-run this script."
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Creating virtual environment..."
python -m venv venv

Write-Host "Installing dependencies (this can take a minute)..."
& .\venv\Scripts\pip install --upgrade pip
& .\venv\Scripts\pip install -r requirements.txt

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "If PyAudio failed to install, run these two lines then re-run this script:"
    Write-Host "    .\venv\Scripts\pip install pipwin"
    Write-Host "    .\venv\Scripts\pipwin install pyaudio"
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "============================================================"
Write-Host "  Install complete. Launching first-time setup..."
Write-Host "============================================================"
& .\venv\Scripts\python jarvis_pc_assistant.py
Read-Host "Press Enter to exit"

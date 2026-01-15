# ShowWiFiPasswords.js

A Flipper Zero BadUSB script that automatically extracts and displays all saved WiFi profiles and their passwords on a Windows target machine.

## Features

- **Stealthy execution**: Mimics a legitimate HID device (Flipper Zero BadUSB)
- **One-click WiFi dump**: Retrieves all WiFi SSIDs and passwords
- **Formatted output**: Clean table display with profile names and passwords
- **Universal Windows support**: Works on any Windows machine with PowerShell

## How It Works

1. **Device Setup**: Spoofs Flipper Zero HID device with legitimate vendor/product IDs
2. **Run Dialog**: Opens Windows Run dialog (Win+R)
3. **PowerShell Execution**: Launches PowerShell and runs WiFi profile extraction
4. **Output**: Displays formatted table with all saved WiFi credentials

## Usage

### Prerequisites
- Flipper Zero with custom firmware
- Target: Windows machine (tested on Windows 10/11)

### Installation
1. Copy `ShowWiFiPasswords.js` to your Flipper Zero SD card:
/ext/apps/scripts/ShowWiFiPasswords.js



### Execution
1. Run the script from the Apps (in main menu)
2. Plug into target Windows machine
3. Wait ~3 seconds for execution and results

## Demo

PROFILE_NAME PASSWORD

MyHomeWiFi secret123
OfficeWiFi Company2023
CoffeeShop FreeWiFi456


Security Notes ⚠️
For educational/pentesting use only

Requires physical USB access

PowerShell execution may trigger AV

Admin privileges NOT required

Compatibility
OS	Status
Windows 11	✅ Working
Linux/macOS	❌ Windows-only
License
MIT License - See LICENSE for details.
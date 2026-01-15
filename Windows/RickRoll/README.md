# Rick Roll BadUSB Payload - **KNOWN ISSUES DOCUMENTED**


**Rick Astley "Never Gonna Give You Up" payload** that opens YouTube + types lyrics in Notepad.

## 🎵 Script Functionality
Opens Rick Roll YouTube video (dQw4w9WgXcQ)

Opens Notepad → Ctrl+N new file

Types FULL song lyrics line-by-line

PowerShell popup finale



## ⚠️ **KNOWN PROBLEMS**

### **1. Only Works with English Keyboard**
❌ Polish keyboard (Warsaw/PL) → Garbled text
❌ "We're no strangers to love" → "We're strangersto e"
❌ Flipper sends US QWERTY keycodes only
❌ Non-US layouts remap: l→missing, o→shifted chars



**Status:** **UNRESOLVED** - Requires US English keyboard layout

### **2. Lyrics Connect / Missing Spaces** 
❌ "strangers to love" → "strangersto e"
❌ "know the rules" → "ow he rulesand o"
❌ Words merge across STRING boundaries
❌ Notepad buffer drops chars despite DELAYs



**Status:** **UNRESOLVED** - Words still connect, needs split STRING + higher delays

### **3. Windows 11 Notepad Too Slow**
❌ DEFAULT_DELAY 150ms still drops letters
❌ STRING_DELAY 80ms insufficient
❌ Long lines (>25 chars) fail completely



**Status:** **UNRESOLVED** - Requires CMD or Notepad++ instead

## 📋 Current Script Structure
DEFAULT_DELAY 150 + STRING_DELAY 80
GUI r → powershell → notepad → CTRL N
STRING lyrics line-by-line → ENTER → DELAY 500
PowerShell popup finale



## 🛠️ Current Workarounds (NOT IMPLEMENTED)
PowerShell: Force en-US keyboard layout

Split STRING: 15-char chunks + DELAY 250ms

CMD echo: Faster than Notepad

ALTSTRING: Layout-independent (slower)


## 💾 Installation
Copy script → /badusb/rickroll.txt

Save UTF-8 NO BOM, Unix LF line endings

MUST use English(US) keyboard

BadUSB → Run


## 📊 Compatibility Matrix
| Layout | Clean Lyrics | Spaces OK | Status |
|--------|-------------|-----------|--------|
| English US | ✅ Partial | ❌ Connects | **USE ONLY** |
| Polish PL | ❌ Garbled | ❌ Garbled | **BROKEN** |
| German DE | ❌ Garbled | ❌ Garbled | **BROKEN** |
| Windows 11 | ❌ Slow | ❌ Drops | **PROBLEMATIC** |

## 🎯 Expected vs Actual Output
EXPECTED: "We're no strangers to love"
ACTUAL: "We're strangersto e"

EXPECTED: "You know the rules and so do I"
ACTUAL: "You ow he rulesand o"



**Current status: Works ~60% on EN-US keyboards, completely broken on Polish layout**


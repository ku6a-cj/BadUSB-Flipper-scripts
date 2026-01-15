# WSAD Spammer for Flipper Zero

**Keep your game session alive automatically!**  
This BadUSB script prevents idle kickouts in popular games by simulating continuous WSAD key presses, moving your character in smooth circles.

## 🎮 What it does
- Emulates a keyboard that spams WSAD keys in a circular pattern
- Keeps your character moving indefinitely to avoid AFK/session timeouts
- Perfect for MMOs, battle royales, or any game with idle detection

## 📱 Requirements
- **Flipper Zero** with custom
- Game that responds to WSAD arrow keys
- USB  cable

## 🚀 Installation
1. Copy the script to your Flipper Zero:
/ext/apps/Scripts/wsadSpammer.js


## ⚙️ Usage
1. Plug Flipper Zero into your gaming PC
2. Run the script from apps menu
3. **Ensure game window is active/focused**
4. Watch your character circle automatically!

Script will:
- Wait for USB connection (2-5 seconds)
- Start infinite WSAD circle pattern
- Each direction held for 4 seconds
- Smooth transitions with 200ms delays

## 💻 Script Breakdown
Circle Pattern: D → S → A → S → A → W → D → W

4s hold per key

200ms release delay

1s pause between full circles

text

## 🔧 Customization
Edit the script to adjust:
- `delay(4000)` - Hold time per key (ms)
- `delay(200)` - Release pause (ms)
- `delay(1000)` - Circle pause (ms)
- Add spacebar or mouse clicks for menus

## ⚠️ Disclaimer
- Use responsibly and per game ToS
- May trigger anti-cheat in competitive games
- Test in single-player first
- Flipper Zero identifies as generic HID keyboard

## 🎯 Compatible Games
Works with any WSAD-controlled game:
-find it yourself ;P

## 🐛 Troubleshooting
| Issue | Solution |
|-------|----------|
| Not working | Ensure game window is focused |
| Too fast/slow | Adjust delay values |
| Not recognized | Try different USB port |
| Anti-cheat flags | Reduce hold times |

## 📝 License
MIT License - Use at your own risk!

## 🤝 Contributing
Pull requests welcome!  
Share your movement patterns or game-specific tweaks.

---

**Made with ❤️ for gamers by Flipper Zero community**
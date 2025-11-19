# 🚀 START HERE - Quick Start Guide

## You're 3 Steps Away from Running the Website!

---

## STEP 1️⃣: Check Prerequisites (1 minute)

Open Terminal/Command Prompt and run:

```bash
node --version
npm --version
```

**You should see version numbers like:**
```
v18.17.0
9.6.7
```

**If you don't see versions:**
- Download Node.js: https://nodejs.org/ (click LTS)
- Install it
- Restart your computer
- Try the command again

---

## STEP 2️⃣: Open Project in VS Code (2 minutes)

1. Open VS Code
2. Click **File → Open Folder**
3. Select the project folder
4. Click **Open**

You should see the file list on the left side.

---

## STEP 3️⃣: Install Dependencies (5 minutes)

1. Click **Terminal → New Terminal** (in top menu)
2. You should see a terminal at the bottom
3. Copy & paste this command:

```bash
npm install && cd server && npm install && cd ..
```

**Wait for it to finish.** You'll see "added X packages" message.

---

## STEP 4️⃣: Start Backend Server (Terminal 1)

Copy & paste:

```bash
cd server && npm start
```

**You should see:**
```
Server running on http://localhost:5000
```

**Keep this terminal open! Don't close it!**

---

## STEP 5️⃣: Open New Terminal (for Frontend)

1. Click the **+** button in the terminal panel
2. A new terminal appears

---

## STEP 6️⃣: Start Frontend Server (Terminal 2)

Copy & paste:

```bash
npm run dev
```

**You should see:**
```
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
```

---

## STEP 7️⃣: Open in Browser

**Copy this URL into your browser:**

```
http://localhost:5173
```

🎉 **The website should load!**

---

## What You Should See

✅ AudioStore website with products
✅ Blue navigation bar at top
✅ Products displayed as cards
✅ Blue chat button in bottom-right corner
✅ Links to different pages

---

## Test the Chatbot

1. Click the blue chat bubble (bottom-right)
2. Type: "Tell me about earbuds"
3. Bot should respond

---

## Now You Can

✅ Browse all products
✅ Filter by category and price
✅ View product details
✅ Compare products
✅ Search for products
✅ Chat with the AI assistant
✅ Visit About, Contact, FAQ pages
✅ Make changes to code (they appear automatically)

---

## Terminal Overview

```
Your Computer
│
├─ Terminal 1 (RUNNING)
│  └─ cd server && npm start
│     └─ Shows: "Server running on :5000"
│
├─ Terminal 2 (RUNNING)
│  └─ npm run dev
│     └─ Shows: "ready in XXX ms"
│
└─ Browser
   └─ http://localhost:5173
      └─ Website loads!
```

**BOTH terminals must be running!**

---

## If Something Goes Wrong

### ❌ "npm: command not found"
→ Install Node.js from https://nodejs.org/

### ❌ "Port 5000 already in use"
→ See COMMON_ISSUES.md (Issue #2)

### ❌ Blank page or "Cannot GET /"
→ Check if Terminal 2 shows "ready in XXX ms"
→ If not, run `npm run dev` again

### ❌ Chatbot doesn't work
→ Check if Terminal 1 shows "Server running"
→ If not, the backend isn't running

### ❌ "Cannot find module"
→ Run: `npm install` then `cd server && npm install && cd ..`

**For more help, see:**
- COPY_PASTE_COMMANDS.md (just copy & paste)
- SETUP_GUIDE.md (detailed steps)
- COMMON_ISSUES.md (problems & solutions)
- VISUAL_GUIDE.md (pictures & diagrams)

---

## Quick Reference

### To Stop Servers
Press in the terminal:
```
Ctrl + C
```

### To See Code Changes
1. Save file: Ctrl+S
2. Refresh browser: F5
3. For backend changes, restart server: Ctrl+C then `npm start`

### To Clear Terminal
```
Ctrl + L
```

### To View Browser Console (for errors)
Press: **F12**

---

## File Structure

```
Your Project
├── src/              ← Frontend code (React)
├── server/           ← Backend code (Express)
├── package.json      ← Frontend dependencies
├── COPY_PASTE_COMMANDS.md  ← Just copy & paste
├── SETUP_GUIDE.md    ← Detailed guide
├── COMMON_ISSUES.md  ← Problems & solutions
└── ... other files
```

---

## Success Checklist

- [ ] Node.js installed and verified
- [ ] Project open in VS Code
- [ ] Dependencies installed (npm install)
- [ ] Backend running (Terminal 1)
- [ ] Frontend running (Terminal 2)
- [ ] Website loads in browser
- [ ] Can see products
- [ ] Chatbot works
- [ ] Can navigate pages

**If all checkboxes are ticked: YOU'RE DONE! 🎉**

---

## What Next?

### Explore Features:
- Click through all pages
- Try the chatbot
- Compare products
- Use search and filters

### Make Changes:
- Edit files in `src/` folder
- Changes appear automatically
- For backend changes, restart server

### Build for Production:
```bash
npm run build
```

Output will be in `dist/` folder

---

## Support

If you get stuck:

1. **Check error message** - Copy it exactly
2. **Search COMMON_ISSUES.md** - Your error is probably there
3. **Check browser console** - Press F12 and look for red errors
4. **Restart everything** - Press Ctrl+C in both terminals and start again
5. **Nuclear option** - See "Quick Reset" in COMMON_ISSUES.md

---

## That's It!

Follow the 7 steps above and you'll have a working website in 10 minutes.

**Start with STEP 1 above ⬆️**

Good luck! 🚀

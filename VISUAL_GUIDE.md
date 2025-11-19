# Visual Step-by-Step Guide

## How to Open and Run Project in VS Code

### Step 1: Open the Project Folder

```
1. Open VS Code
2. File → Open Folder
3. Select the project folder
4. Click "Open"
```

You should see the file structure on the left side panel.

---

### Step 2: Open Terminal

```
VS Code Top Menu:
┌─────────────────────────────┐
│ File  Edit  View  Terminal  │ ← Click "Terminal"
└─────────────────────────────┘
     ↓
Select "New Terminal"
```

You'll see a terminal panel at the bottom:

```
┌──────────────────────────────────────────┐
│ Project Folder                          │
│ ├── src/                                │
│ ├── server/                             │
│ └── package.json                        │
├──────────────────────────────────────────┤
│ Terminal (bottom)                       │
│ project-folder$ █                       │ ← Cursor here
└──────────────────────────────────────────┘
```

---

### Step 3: Install Dependencies

**In Terminal, type:**

```bash
npm install
```

**Progress bar appears:**
```
npm install
added 72 packages in 2.5s
✓ Completed
```

---

### Step 4: Install Backend Dependencies

**In Terminal, type:**

```bash
cd server
npm install
cd ..
```

**After this:**
```
✓ Backend dependencies installed
✓ You're back in project root
```

---

### Step 5: Create New Terminal (for Backend)

```
┌──────────────────────────────────────────┐
│ Terminal (bottom)                       │
│                                         │
│ project-folder$ █                       │ ← Terminal 1
│
│ [Click + button here] ← Click this     │
└──────────────────────────────────────────┘

Result:
┌──────────────────────────────────────────┐
│ Terminal 1: npm install (✓ done)       │
│ Terminal 2: project-folder$ █          │ ← New terminal
└──────────────────────────────────────────┘
```

---

### Step 6: Start Backend Server

**In Terminal 1, type:**

```bash
cd server
npm start
```

**You should see:**
```
Server running on http://localhost:5000
```

**Important:** Keep this running! Don't close this terminal.

```
Terminal 1:
┌────────────────────────────────────────┐
│ cd server                              │
│ npm start                              │
│ Server running on http://localhost:5000│
│                                        │
│ ✓ KEEP THIS RUNNING                    │
└────────────────────────────────────────┘
```

---

### Step 7: Start Frontend

**In Terminal 2, type:**

```bash
npm run dev
```

**You should see:**
```
VITE v5.4.8  ready in 245 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

```
Terminal 2:
┌────────────────────────────────────────┐
│ npm run dev                            │
│                                        │
│ VITE v5.4.8  ready in 245 ms          │
│ ➜  Local:   http://localhost:5173/    │
│                                        │
│ ✓ Frontend is ready!                   │
└────────────────────────────────────────┘
```

---

### Step 8: Open Browser

```
VS Code                          Browser
┌──────────────────┐            ┌─────────────────────────────────┐
│ Both terminals   │  ═══════>  │ http://localhost:5173           │
│ showing "ready"  │            │                                 │
│                  │            │ AudioStore Website              │
│ Terminal 1: :5000│            │ ✓ Loads and works!              │
│ Terminal 2: :5173│            │                                 │
└──────────────────┘            └─────────────────────────────────┘
```

---

## System Architecture Diagram

```
Your Computer
│
├─ Terminal 1 (Backend)
│  │
│  ├─ cd server
│  ├─ npm start
│  └─ Server running on PORT 5000
│     │
│     ├─ Chatbot API (/api/chat)
│     ├─ Handles requests
│     └─ Returns AI responses
│
├─ Terminal 2 (Frontend)
│  │
│  ├─ npm run dev
│  ├─ Frontend running on PORT 5173
│  └─ Website with:
│     ├─ Navigation
│     ├─ Products
│     ├─ Categories
│     └─ Chatbot (sends requests to :5000)
│
└─ Browser
   │
   └─ http://localhost:5173
      │
      ├─ Displays website
      ├─ Chatbot widget
      └─ Communicates with backend (:5000)
```

---

## Data Flow

```
1. User opens browser → http://localhost:5173
           ↓
2. React Frontend loads
           ↓
3. Frontend fetches products from Supabase
           ↓
4. Products display on website
           ↓
5. User clicks chatbot
           ↓
6. User types message
           ↓
7. Frontend sends to Backend (:5000/api/chat)
           ↓
8. Backend processes message
           ↓
9. Backend returns response
           ↓
10. Frontend displays response in chat
           ↓
11. User sees answer!
```

---

## Terminal Appearance

### What SUCCESS looks like:

```
Terminal 1 (Backend):
$ cd server
$ npm start
Server running on http://localhost:5000
```

```
Terminal 2 (Frontend):
$ npm run dev

VITE v5.4.8  ready in 245 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### What ERRORS look like:

❌ **Error 1: Port already in use**
```
Error: listen EADDRINUSE: address already in use :::5000
```
→ Solution: Close other apps using port 5000

❌ **Error 2: npm not found**
```
npm: command not found
```
→ Solution: Install Node.js properly

❌ **Error 3: Module not found**
```
Error: Cannot find module 'express'
```
→ Solution: Run `npm install` again

---

## Keyboard Shortcuts in Terminal

```
Ctrl + C    = Stop server (press when needed)
Ctrl + L    = Clear terminal
↑ Arrow     = Previous command
↓ Arrow     = Next command
Ctrl + +    = Zoom in terminal
Ctrl + -    = Zoom out terminal
```

---

## Quick Troubleshooting Checklist

```
□ Both servers running?
  Terminal 1: See "Server running on :5000"?
  Terminal 2: See "ready in XXX ms"?

□ Browser shows website?
  Go to http://localhost:5173

□ Website is loading?
  You see products, navigation, chatbot?

□ Chatbot working?
  Click chat bubble, type message?

□ See errors?
  Check SETUP_GUIDE.md troubleshooting section
```

---

## File Organization

When you're editing code, these are the main folders:

```
src/
├── components/          ← Reusable parts (Navbar, Footer, etc)
│   ├── Navbar.tsx       ← Navigation bar
│   ├── Footer.tsx       ← Footer
│   ├── ProductCard.tsx  ← Product card component
│   └── ChatWidget.tsx   ← Chat widget
│
├── pages/               ← Different pages
│   ├── Home.tsx         ← Homepage
│   ├── Products.tsx     ← All products page
│   ├── ProductDetails.tsx ← Single product
│   ├── Compare.tsx      ← Compare products
│   ├── About.tsx        ← About page
│   ├── Contact.tsx      ← Contact page
│   └── FAQ.tsx          ← FAQ page
│
└── lib/
    └── supabase.ts      ← Database connection

server/
├── index.js             ← Backend API
└── package.json         ← Dependencies
```

---

## Making Changes

### To edit a file:

```
1. Find file in left panel
2. Click to open
3. Edit code
4. Save (Ctrl + S)
5. Changes appear in browser automatically! (no restart needed for frontend)
```

### For backend changes:

```
1. Edit server/index.js
2. Save
3. Press Ctrl+C in Terminal 1
4. Run: npm start again
5. Changes are live
```

---

## Need to See Logs?

```
Terminal 1 logs:
├─ Backend errors
├─ API requests
└─ Server status

Terminal 2 logs:
├─ Frontend errors
├─ Build errors
└─ File changes

Browser console logs:
├─ Press F12 in browser
├─ Click "Console" tab
└─ See frontend errors
```

---

## Everything Running Correctly?

You should see:

✅ Terminal 1: "Server running on http://localhost:5000"
✅ Terminal 2: "ready in XXX ms"
✅ Browser: Website loads with products
✅ Chatbot: Blue bubble in bottom-right corner
✅ Navigation: Can click through all pages

**If all ✅, you're ready to go!**

# Complete Step-by-Step Setup Guide for VS Code

## Prerequisites Check

Before you start, make sure you have these installed:

### 1. Check if Node.js is Installed
Open Terminal/Command Prompt and run:
```bash
node --version
npm --version
```

You should see version numbers (e.g., v18.0.0 and 9.0.0)

**If not installed:**
- Download and install from: https://nodejs.org/ (LTS version recommended)
- After installation, restart your computer
- Verify again with the commands above

### 2. Check if Git is Installed
```bash
git --version
```

**If not installed:**
- Download and install from: https://git-scm.com/

---

## Step 1: Open VS Code

1. Open VS Code
2. Click "File" → "Open Folder"
3. Navigate to your project folder (where you cloned/saved the project)
4. Select the project folder and click "Open"

---

## Step 2: Open Terminal in VS Code

1. Click "Terminal" in the top menu
2. Click "New Terminal"
3. You should see a terminal panel at the bottom of VS Code

---

## Step 3: Install Frontend Dependencies

In the VS Code terminal, make sure you're in the project root folder.

Run this command:
```bash
npm install
```

**Wait for it to complete.** You'll see:
- Lots of blue text scrolling
- Finally: "added X packages" message

This takes 2-5 minutes. Don't interrupt it.

---

## Step 4: Install Backend Dependencies

In the **same terminal**, run:
```bash
cd server
npm install
```

**Wait for it to complete.** You'll see the same "added X packages" message.

This takes 1-2 minutes.

---

## Step 5: Go Back to Root Folder

```bash
cd ..
```

---

## Step 6: Start the Backend Server

**Keep the current terminal open and run:**
```bash
cd server
npm start
```

**You should see:**
```
Server running on http://localhost:5000
```

**IMPORTANT:** Keep this terminal running. Don't close it or press Ctrl+C.

---

## Step 7: Open a New Terminal

1. Click the "+" button in the terminal panel (at the bottom of VS Code)
2. Or use keyboard shortcut: Ctrl + Shift + `

You now have 2 terminals running.

---

## Step 8: Start the Frontend

In the **new terminal**, make sure you're in the project root:
```bash
npm run dev
```

**You should see:**
```
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
```

---

## Step 9: Open Browser

1. Open your web browser (Chrome, Firefox, Safari, or Edge)
2. Go to: **http://localhost:5173**

**You should see the AudioStore website!**

---

## Step 10: Test Everything

### Test Navigation:
- Click "Products" in navbar
- Click different category links
- Click "About", "Contact", "FAQ"

### Test Chatbot:
- Click the blue chat bubble in bottom-right corner
- Type: "Tell me about earbuds"
- You should get a response

### Test Product Features:
- Click "View Details" on any product
- Scroll down to see specs
- Click "Compare Products" button

---

## Troubleshooting

### Problem 1: Command Not Found / npm: command not found

**Solution:**
- Node.js is not installed correctly
- Restart VS Code completely
- Restart your computer
- Re-install Node.js from https://nodejs.org/

### Problem 2: Port 5000 Already in Use

**Backend error:**
```
Port 5000 is already in use
```

**Solution:**
- Find what's using port 5000 and close it, OR
- Change the port in `server/index.js` on line 4:
  ```javascript
  const PORT = 5001; // Change from 5000 to 5001
  ```

### Problem 3: Port 5173 Already in Use

**Frontend error:**
```
Port 5173 is already in use
```

**Solution:**
- Close any other VS Code windows
- Or kill the process and try again

### Problem 4: Blank Page or "Cannot GET /"

**This means:**
- Frontend is not running
- Check terminal 2 - does it say "ready in XXX ms"?
- If not, run `npm run dev` again

### Problem 5: Chatbot Not Working

**This means:**
- Backend is not running
- Check terminal 1 - does it say "Server running on http://localhost:5000"?
- If not, check if port 5000 is available (see Problem 2)

### Problem 6: Module Not Found Error

**Solution:**
```bash
npm install
cd server
npm install
cd ..
```

Then run both servers again.

---

## Complete Terminal Commands Reference

### To Start Everything (from scratch):

**Terminal 1:**
```bash
cd server
npm start
```

**Terminal 2:**
```bash
npm run dev
```

### To Stop Servers:
- Press `Ctrl + C` in each terminal

### To Restart:
1. Press `Ctrl + C` to stop both servers
2. Run the commands above again

---

## Understanding the File Structure

```
project/
├── src/                    ← Frontend code (React)
│   ├── components/         ← Reusable UI components
│   ├── pages/             ← Different pages
│   ├── App.tsx            ← Main app file
│   └── main.tsx           ← Entry point
├── server/                ← Backend code (Express)
│   └── index.js           ← Server file
├── supabase/              ← Database setup
├── package.json           ← Frontend dependencies
├── vite.config.ts         ← Frontend config
└── .env                   ← Environment variables
```

---

## What's Running?

- **Terminal 1 (Backend):** Express server on http://localhost:5000
  - Handles chatbot API requests
  - Port: 5000

- **Terminal 2 (Frontend):** React app on http://localhost:5173
  - The website you see
  - Port: 5173

---

## Next Steps

Once everything is running:

1. **Explore the website** - Navigate through all pages
2. **Test the chatbot** - Ask various questions
3. **View products** - Click on products to see details
4. **Compare products** - Use the compare feature
5. **Make changes** - Edit code and see live updates

---

## Development Workflow

1. Keep both servers running
2. Edit code in `src/` folder
3. Changes appear automatically (hot reload)
4. For backend changes, restart the server (stop with Ctrl+C, then run `npm start` again)

---

## Need Help?

Check these files:
- PROJECT_README.md - Full documentation
- QUICKSTART.md - Quick reference

If still stuck:
1. Check if all commands completed without errors
2. Check if both terminals show the "ready" messages
3. Try refreshing the browser (F5)
4. Restart VS Code completely

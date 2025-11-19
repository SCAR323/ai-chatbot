# Copy-Paste Commands (Just Copy & Paste These)

## The Easiest Way to Get Started

### Step 1: Open VS Code Terminal
```
Click: Terminal → New Terminal
```

### Step 2: Copy and Paste This (all at once):

```bash
npm install
```

**Wait for it to finish** (you'll see "added X packages")

---

## Step 3: Go to Server Folder

Copy and paste:

```bash
cd server
npm install
cd ..
```

**Wait for it to finish**

---

## Step 4: START BACKEND SERVER

Copy and paste this in **Terminal 1**:

```bash
cd server
npm start
```

**You should see:**
```
Server running on http://localhost:5000
```

**LEAVE THIS TERMINAL RUNNING**

---

## Step 5: CREATE NEW TERMINAL

```
Click the + button in terminal panel
```

---

## Step 6: START FRONTEND

Copy and paste this in **Terminal 2**:

```bash
npm run dev
```

**You should see:**
```
VITE v5.x.x ready in XXX ms
➜  Local:   http://localhost:5173/
```

---

## Step 7: Open Browser

**Copy this URL and paste in browser:**

```
http://localhost:5173
```

**Done! The website should load!**

---

---

## If Something Goes Wrong

### "Port 5000 already in use"

Copy and paste in Terminal 1:

```bash
# Mac/Linux
lsof -i :5000
kill -9 [number]

# Windows
netstat -ano | findstr :5000
taskkill /PID [number] /F
```

Then try starting backend again.

### "Port 5173 already in use"

Press `Ctrl + C` in Terminal 2, then:

```bash
npm run dev
```

### "npm: command not found"

Download and install Node.js from: https://nodejs.org/

Then restart VS Code and try again.

### "Cannot find module"

```bash
npm install
cd server
npm install
cd ..
```

Then restart both servers (Ctrl+C, then run commands again)

---

## Quick Reference

### To Stop Servers:
Press in the terminal:
```
Ctrl + C
```

### To Restart Backend:
```bash
cd server
npm start
```

### To Restart Frontend:
```bash
npm run dev
```

### To See Latest Changes:
1. Save file (Ctrl+S)
2. Refresh browser (F5)
3. If backend changed, restart it (Ctrl+C then `npm start`)

---

## Full Fresh Start (if completely broken)

Copy and paste step by step:

**Terminal 1:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
cd server
npm start
```

**Terminal 2:**
```bash
npm run dev
```

Then go to: http://localhost:5173

---

## All Commands in One Place

```bash
# Step 1: Install frontend
npm install

# Step 2: Install backend
cd server
npm install
cd ..

# Step 3: Start backend (Terminal 1)
cd server
npm start

# Step 4: Start frontend (Terminal 2)
npm run dev

# Step 5: Open browser
http://localhost:5173
```

---

## To Seed Database (if needed):

```bash
node scripts/seed-database.js
```

Wait for message:
```
🎉 Database seeding completed successfully!
```

---

## To Build for Production:

```bash
npm run build
```

Output in: `dist/` folder

---

## To Check Everything:

```bash
node --version
npm --version
cd server
npm start
# (Should see "Server running on http://localhost:5000")
# Press Ctrl+C

npm run dev
# (Should see "ready in XXX ms")
# Press Ctrl+C

echo "All good!"
```

---

## Understanding Terminal 1 vs Terminal 2

**Terminal 1 - Backend:**
```bash
cd server
npm start
→ Output: Server running on http://localhost:5000
→ Keep running in background
→ Press Ctrl+C to stop
```

**Terminal 2 - Frontend:**
```bash
npm run dev
→ Output: ready in XXX ms at http://localhost:5173/
→ Keep running in background
→ Press Ctrl+C to stop
```

**Both must be running for website to work!**

---

## Copy-Paste Checklist

- [ ] Run: `npm install` (wait for finish)
- [ ] Run: `cd server && npm install && cd ..` (wait for finish)
- [ ] Terminal 1: `cd server && npm start` (see "Server running on :5000")
- [ ] Open new terminal (click +)
- [ ] Terminal 2: `npm run dev` (see "ready in XXX ms")
- [ ] Open browser: http://localhost:5173
- [ ] See website? ✅ Success!
- [ ] Click chat bubble and test
- [ ] Navigate through pages
- [ ] Check products load

---

## Can't Copy-Paste Commands?

Here's what to type manually:

Terminal 1:
```
npm install
cd server
npm install
cd ..
cd server
npm start
```

Terminal 2:
```
npm run dev
```

Browser:
```
http://localhost:5173
```

---

## Emergency Commands

**If website is frozen:**
- Press Ctrl+C in both terminals
- Wait 2 seconds
- Run commands again

**If nothing works:**
```bash
# Delete everything
rm -rf node_modules
rm -rf server/node_modules
rm package-lock.json
rm server/package-lock.json

# Reinstall
npm install
cd server
npm install
cd ..

# Start fresh
cd server
npm start
# New terminal:
npm run dev
```

**This takes 5 minutes but fixes 90% of issues**

---

## Video Guide (Text Format)

```
1. Open VS Code
   ↓
2. Open Terminal (Terminal → New Terminal)
   ↓
3. Type: npm install
   ↓ (wait)
4. Type: cd server && npm install && cd ..
   ↓ (wait)
5. Type: cd server && npm start
   ↓ (see "Server running")
6. Click + to open new terminal
   ↓
7. Type: npm run dev
   ↓ (see "ready in XXX ms")
8. Open browser: http://localhost:5173
   ↓
9. Website loads! ✅
```

---

## Success Messages to Look For

✅ Backend success:
```
Server running on http://localhost:5000
```

✅ Frontend success:
```
VITE v5.4.8  ready in 245 ms
➜  Local:   http://localhost:5173/
```

✅ Website success:
```
See products, navigation, chat button
```

❌ Backend failure:
```
Error: Cannot find module 'express'
→ Solution: cd server && npm install && cd ..
```

❌ Frontend failure:
```
Error: Cannot find module '@supabase/supabase-js'
→ Solution: npm install
```

❌ Connection failure:
```
Chatbot: No response
→ Solution: Make sure backend is running in Terminal 1
```

---

## That's It!

If both terminals show success messages and browser loads the website, **you're done!**

Everything is working. Now you can:
- Browse products
- Use filters
- Compare products
- Chat with bot
- View all pages
- Make changes to code (hot reload)

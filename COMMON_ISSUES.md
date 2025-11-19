# Common Issues & Solutions

## Issue #1: "npm: command not found"

### Problem:
```
$ npm install
-bash: npm: command not found
```

### Why it happens:
Node.js is not installed or not in PATH

### Solution:

**Step 1:** Download Node.js
- Go to https://nodejs.org/
- Click "LTS" (Long Term Support)
- Download the installer

**Step 2:** Install Node.js
- Run the installer
- Click "Next" through all steps
- Click "Install"
- When done, restart your computer

**Step 3:** Verify installation
```bash
node --version
npm --version
```

Should show version numbers (e.g., v18.17.0 and 9.6.7)

**Step 4:** Restart VS Code
- Close all VS Code windows
- Open VS Code again
- Try again

---

## Issue #2: "Port 5000 is already in use"

### Problem:
```
Error: listen EADDRINUSE: address already in use :::5000
```

### Why it happens:
Something else is using port 5000

### Solution A (Recommended):

**Windows:**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with the number)
taskkill /PID [PID] /F
```

**Mac/Linux:**
```bash
# Find and kill process
lsof -i :5000
kill -9 [PID]
```

### Solution B (Easy):

Change the port in `server/index.js`:

1. Open `server/index.js` in VS Code
2. Find line 4:
   ```javascript
   const PORT = 5000;
   ```
3. Change it to:
   ```javascript
   const PORT = 5001;
   ```
4. Save the file
5. Restart the server
6. The server runs on port 5001 instead

---

## Issue #3: "Port 5173 is already in use"

### Problem:
```
Port 5173 is already in use
```

### Solution:

**Option A:** Find and close what's using it
```bash
# Mac/Linux
lsof -i :5173
kill -9 [PID]

# Windows
netstat -ano | findstr :5173
taskkill /PID [PID] /F
```

**Option B:** Let Vite use a different port automatically
- Press `Ctrl + C` in Terminal 2
- Run: `npm run dev` again
- It will use port 5174 or higher

---

## Issue #4: Blank Page - "Cannot GET /"

### Problem:
```
Browser shows: "Cannot GET /"
```

### Why it happens:
Frontend is not running

### Solution:

**Step 1:** Check Terminal 2
- Does it show "ready in XXX ms"?
- If not, the frontend didn't start

**Step 2:** Start frontend
```bash
npm run dev
```

**Step 3:** Wait for "ready" message
```
VITE v5.4.8  ready in 245 ms
➜  Local:   http://localhost:5173/
```

**Step 4:** Refresh browser (F5 or Cmd+R)

---

## Issue #5: Chatbot Not Working

### Problem:
```
Chat opens but no response, or error message
```

### Why it happens:
Backend is not running

### Solution:

**Step 1:** Check Terminal 1
- Does it show "Server running on http://localhost:5000"?
- If not, backend is not running

**Step 2:** Start backend
```bash
cd server
npm start
```

**Step 3:** Wait for message
```
Server running on http://localhost:5000
```

**Step 4:** Go back to browser
- Refresh page (F5)
- Try chatbot again

---

## Issue #6: "Cannot find module 'express'"

### Problem:
```
Error: Cannot find module 'express'
```

### Why it happens:
Backend dependencies not installed

### Solution:

```bash
# Go to server folder
cd server

# Install dependencies
npm install

# Go back to root
cd ..

# Start backend
cd server
npm start
```

---

## Issue #7: "Cannot find module '@supabase/supabase-js'"

### Problem:
```
Module not found: Error: Can't resolve '@supabase/supabase-js'
```

### Why it happens:
Frontend dependencies not installed

### Solution:

```bash
# Make sure you're in project root (not server folder)
npm install

# If that doesn't work, try:
npm install --legacy-peer-deps

# Then start frontend
npm run dev
```

---

## Issue #8: Buttons Don't Work

### Problem:
```
Click buttons but nothing happens
Errors in browser console
```

### Why it happens:
JavaScript error in frontend

### Solution:

**Step 1:** Check browser console for errors
- Press F12 (or Ctrl+Shift+I on Windows, Cmd+Option+I on Mac)
- Click "Console" tab
- Look for red errors

**Step 2:** Take a screenshot of error
- This helps identify the problem

**Step 3:** Restart everything
```bash
# Terminal 1: Press Ctrl+C
# Terminal 2: Press Ctrl+C

# Then restart both
cd server
npm start

# New terminal:
npm run dev
```

**Step 4:** Refresh browser (F5)

---

## Issue #9: Hot Reload Not Working

### Problem:
```
I edit code but changes don't appear
```

### Why it happens:
VS Code needs to be in focus, or file wasn't saved

### Solution:

**Step 1:** Make sure you save the file
- Press Ctrl+S (or Cmd+S on Mac)
- File name shouldn't show a dot (●) next to it

**Step 2:** Wait 1-2 seconds
- Let Vite recompile

**Step 3:** Refresh browser (F5)
- Or go to http://localhost:5173 again

**Step 4:** For backend changes
- You MUST restart the server
- Press Ctrl+C in Terminal 1
- Run `npm start` again

---

## Issue #10: Website Loads Slowly

### Problem:
```
Takes a long time to load
```

### Solution:

**Step 1:** Check if both servers are running
```
Terminal 1: "Server running..."?
Terminal 2: "ready in XXX ms"?
```

**Step 2:** Wait longer
- First load takes 10-15 seconds
- Subsequent loads are faster

**Step 3:** Check your internet
- Database queries need internet
- Make sure you're connected

**Step 4:** If still slow
- Check if other apps are using CPU
- Close unnecessary programs
- Try in a different browser

---

## Issue #11: Database Connection Error

### Problem:
```
Error: Cannot connect to database
Products not loading
```

### Why it happens:
Supabase credentials are missing

### Solution:

**Check .env file:**

1. Open `.env` file in VS Code
2. Should have these lines:
   ```
   VITE_SUPABASE_URL=https://...
   VITE_SUPABASE_ANON_KEY=eyJ...
   ```

3. If empty or missing:
   - Contact the project creator for credentials
   - Or set up your own Supabase project

4. After adding credentials:
   - Restart both terminals
   - Refresh browser

---

## Issue #12: TypeScript Errors

### Problem:
```
Red squiggly lines in VS Code
Error: Type 'X' is not assignable to type 'Y'
```

### Solution:

This is usually just VS Code being slow. Ignore it if:
- Website still loads
- No errors in terminal
- Website works fine

If you want to fix it:

```bash
npm run typecheck
```

Then fix any real errors that show up.

---

## Issue #13: Project Won't Start - Multiple Errors

### Problem:
```
Everything seems broken
Many errors in terminal
```

### Nuclear Solution (Clears everything):

```bash
# Stop both terminals (Ctrl+C)

# Delete node_modules
rm -rf node_modules
rm -rf server/node_modules

# Delete package lock
rm package-lock.json
rm server/package-lock.json

# Reinstall everything
npm install
cd server
npm install
cd ..

# Start again
cd server
npm start

# New terminal:
npm run dev
```

This takes 5 minutes but usually fixes everything.

---

## Issue #14: "EACCES: permission denied"

### Problem (Mac/Linux):
```
Error: EACCES: permission denied, open '/...'
```

### Solution:

Try running with sudo:
```bash
sudo npm install
```

Or change npm permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

---

## Issue #15: Browser Shows Old Version

### Problem:
```
I edited code but old website appears
```

### Solution:

**Step 1:** Hard refresh browser
- Windows: Ctrl+Shift+R
- Mac: Cmd+Shift+R
- Or: F5 + Ctrl

**Step 2:** Clear browser cache
- Press F12
- Right-click refresh button
- Click "Empty cache and hard refresh"

**Step 3:** If still not working
- Press Ctrl+C in Terminal 2
- Run `npm run dev` again
- Refresh page

---

## Quick Diagnostic Checklist

Run this to check everything:

```bash
# Check Node
node --version
npm --version

# Check if ports are available
netstat -ano | findstr :5000 (Windows)
lsof -i :5000 (Mac/Linux)

# Check npm packages
npm list
cd server
npm list
cd ..

# Check if .env exists
ls -la .env

# Check if files exist
ls src/
ls server/
```

---

## Still Stuck?

Try these in order:

1. **Restart everything**
   - Close all terminals
   - Close VS Code
   - Close browser
   - Restart computer

2. **Delete and reinstall**
   - Delete node_modules
   - Run nuclear solution above

3. **Check prerequisites**
   - Is Node.js installed? (`node --version`)
   - Are you in right folder? (`ls` should show src/, server/, etc)
   - Is port 5000 and 5173 available?

4. **Search for error message**
   - Copy exact error message
   - Search on Google
   - Often there's a quick fix

5. **Ask for help**
   - Describe what you see
   - Share error message
   - List steps you took

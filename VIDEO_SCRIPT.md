# Video Script - How to Run AudioStore in VS Code

## Scene 1: Before You Start (30 seconds)

**Show Screen:**
- Closed VS Code
- Desktop

**Voiceover:**
"Before you start, make sure you have Node.js installed. Open your terminal or command prompt and type:"

**Show Command:**
```
node --version
npm --version
```

**Voiceover:**
"If you see version numbers, you're ready. If not, download Node.js from nodejs.org, install it, and restart your computer."

---

## Scene 2: Open Project (30 seconds)

**Show Screen:**
- Opening VS Code
- Click File → Open Folder

**Voiceover:**
"Step 1: Open VS Code and click File, then Open Folder. Navigate to your AudioStore project folder and click Open."

**Show:**
- File structure appears on left

**Voiceover:**
"You should see all the project files on the left side."

---

## Scene 3: Open Terminal (30 seconds)

**Show Screen:**
- Top menu: Terminal → New Terminal

**Voiceover:**
"Step 2: Click Terminal in the top menu, then click New Terminal. A terminal panel will appear at the bottom."

**Show:**
- Terminal appears at bottom with cursor

---

## Scene 4: Install Dependencies (1 minute)

**Show Screen:**
- Terminal is open
- Typing command

**Voiceover:**
"Step 3: Copy and paste this command. This installs all the dependencies your project needs."

**Type/Show:**
```bash
npm install
```

**Voiceover:**
"You'll see lots of text scrolling. Just wait for it to finish. This takes about 2-3 minutes."

**Show:**
- Text scrolling, then "added X packages"

**Voiceover:**
"Great! Now install the backend dependencies. Copy and paste this:"

**Type/Show:**
```bash
cd server && npm install && cd ..
```

**Voiceover:**
"Wait for it to finish again. You're all set with dependencies now."

---

## Scene 5: Start Backend (1 minute)

**Show Screen:**
- Terminal ready

**Voiceover:**
"Step 4: Now we start the backend server. This handles the chatbot and API. Type this command:"

**Type/Show:**
```bash
cd server && npm start
```

**Voiceover:**
"You should see a message that says 'Server running on http://localhost:5000'. Perfect! This means the backend is working."

**Show:**
- "Server running on http://localhost:5000" message

**Voiceover:**
"Important: Don't close this terminal or press Ctrl+C. Keep it running in the background. We need it for the chatbot to work."

---

## Scene 6: New Terminal (30 seconds)

**Show Screen:**
- Terminal panel with + button
- Click + button

**Voiceover:**
"Step 5: Now we need a second terminal for the frontend. Click the plus button in the terminal panel."

**Show:**
- New terminal appears

**Voiceover:**
"Great! Now we have two terminals running."

---

## Scene 7: Start Frontend (1 minute)

**Show Screen:**
- New terminal is active
- Type command

**Voiceover:**
"Step 6: In this new terminal, type this command to start the frontend:"

**Type/Show:**
```bash
npm run dev
```

**Voiceover:**
"You should see a message that says 'ready in XXX ms' and a URL. This means the frontend is ready."

**Show:**
- "VITE v5.x.x ready in 245 ms"
- "http://localhost:5173/"

---

## Scene 8: Open Browser (1 minute)

**Show Screen:**
- Browser window
- Address bar

**Voiceover:**
"Step 7: The final step. Open your web browser, go to the address bar, and type:"

**Type/Show:**
```
http://localhost:5173
```

**Press Enter**

**Show:**
- Website loads
- Products appear
- Navigation bar visible

**Voiceover:**
"And there you go! The AudioStore website is now running on your computer. You can see all the products, navigate through pages, and everything is working."

---

## Scene 9: Features Demo (2 minutes)

**Show Screen:**
- Website homepage

**Voiceover:**
"Let me quickly show you what you can do now."

### Sub-Scene: Products
**Click Products in navbar**

**Voiceover:**
"Click Products to see all 60+ products across 6 categories."

**Show:**
- Products load
- Filter panel on left
- Products displayed

**Voiceover:**
"You can filter by category, search for products, and filter by price range."

### Sub-Scene: Product Details
**Click View Details on a product**

**Voiceover:**
"Click View Details on any product to see full specifications, features, ratings, and more."

**Show:**
- Product details page
- Image gallery
- Specifications table

### Sub-Scene: Compare
**Click Compare Products**

**Voiceover:**
"You can compare two products side-by-side to see the differences."

**Show:**
- Compare page
- Search for products
- Comparison table

### Sub-Scene: Chatbot
**Click chat bubble**

**Voiceover:**
"Click the blue chat bubble in the corner to talk to the AI assistant."

**Show:**
- Chat opens
- Type a message: "Tell me about earbuds"
- Bot responds

**Voiceover:**
"The chatbot can help with product recommendations, answer questions about warranty, shipping, returns, and more."

---

## Scene 10: Making Changes (1 minute)

**Show Screen:**
- VS Code editor
- Edit a file

**Voiceover:**
"As you develop, whenever you make changes to the code, you can see them instantly in the browser."

**Edit:**
- Change some text in a file
- Save (Ctrl+S)

**Show:**
- Changes appear in browser automatically
- Page updates

**Voiceover:**
"Just save the file, and the website updates automatically. For backend changes, you need to restart the server."

---

## Scene 11: Troubleshooting (1 minute)

**Show Screen:**
- Command line with error

**Voiceover:**
"If something goes wrong, here are quick solutions:"

### Problem 1: Port Already in Use

**Show:**
```
Port 5000 is already in use
```

**Voiceover:**
"If you see 'Port already in use', something else is using that port. You can either:"
- "Find and close it, or"
- "Change the port number in server/index.js"

### Problem 2: Blank Page

**Show:**
- Blank browser page

**Voiceover:**
"If the page is blank, check if the frontend terminal shows 'ready'. If not, run npm run dev again."

### Problem 3: Chatbot Not Working

**Voiceover:**
"If the chatbot doesn't work, make sure the backend terminal shows 'Server running'. If not, it's not started yet."

### Problem 4: Module Not Found

**Show:**
```
Cannot find module 'express'
```

**Voiceover:**
"If you see 'Cannot find module' errors, run npm install again in both the root and server folders."

---

## Scene 12: Wrap Up (30 seconds)

**Show Screen:**
- Website running
- All features visible

**Voiceover:**
"That's it! You now have a fully functional e-commerce website running on your computer. You can:"

**List on screen:**
- Browse products
- Use filters and search
- Compare products
- Chat with AI
- Navigate all pages
- Make changes and see updates instantly

**Voiceover:**
"For more detailed help, check the documentation files included in the project. Happy developing!"

---

## Total Duration: 10-12 minutes

---

## Notes for Video

- Speak slowly and clearly
- Pause between steps
- Highlight important messages in terminal
- Show the browser loading gradually
- Demo at least 3-4 features
- Keep troubleshooting section light
- End on success screen

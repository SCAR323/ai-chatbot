# Quick Start Guide

## Running the AudioStore Website

### Step 1: Start the Backend Server (Chatbot)

Open a terminal and run:

```bash
cd server
npm start
```

You should see:
```
Server running on http://localhost:5000
```

Keep this terminal running.

### Step 2: Start the Frontend (in a new terminal)

Open a new terminal and run:

```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### Step 3: Open Your Browser

Navigate to: **http://localhost:5173**

## What You'll See

1. **Home Page** - Beautiful hero section with featured products
2. **Navigation** - Click on different categories in the navbar
3. **Products** - Browse all products with filters and search
4. **Product Details** - Click "View Details" on any product
5. **Compare** - Compare two products side-by-side
6. **Chatbot** - Click the blue chat icon in bottom-right corner

## Testing the Chatbot

Click the chat widget and try these questions:

- "Tell me about your earbuds"
- "What's your warranty policy?"
- "How do I return a product?"
- "Recommend a product for gaming"
- "Compare products"
- "What are shipping times?"

## Pages to Explore

- **Home** (http://localhost:5173) - Landing page
- **Products** - Click "Products" in navbar
- **Earbuds** - Click "Earbuds" in navbar
- **About** - Company information
- **Contact** - Contact form
- **FAQ** - Searchable questions

## Features to Try

1. **Search Products** - Use the search bar in Products page
2. **Filter by Category** - Select a category in the filters
3. **Filter by Price** - Choose a price range
4. **Product Comparison** - Click "Compare Products" button
5. **View Specifications** - Check detailed specs on product pages
6. **Chat with AI** - Ask the chatbot anything about products

## Troubleshooting

### Backend Not Working
- Make sure you're in the `server` folder
- Check if port 5000 is available
- Look for errors in the terminal

### Frontend Not Working
- Make sure you're in the project root folder
- Check if port 5173 is available
- Run `npm install` if you haven't already

### Chatbot Not Responding
- Ensure the backend server is running on port 5000
- Check browser console for errors (F12)
- Verify the backend URL in ChatWidget.tsx is correct

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Need Help?

- Check PROJECT_README.md for detailed documentation
- Look at the chatbot responses for product information
- All product data is stored in Supabase database

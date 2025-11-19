# AudioStore - Complete Modern Electronics E-commerce Website

A full-featured, modern electronics e-commerce website built with React, TypeScript, Tailwind CSS, Supabase, and Express. This project showcases a complete BOAT/Boult-style audio products store with product browsing, comparison, and an intelligent chatbot assistant.

## Features

### Pages & Functionality
- **Home Page**: Hero section with featured products, best sellers, and new arrivals
- **Products Page**: Complete product catalog with filtering by category and price, plus search
- **Category Pages**: Dedicated pages for Earbuds, Headphones, Speakers, Soundbars, Smartwatches, and Accessories
- **Product Details**: Detailed product pages with image gallery, specifications, features, and ratings
- **Compare Page**: Side-by-side product comparison with feature analysis
- **About Page**: Company information and mission
- **Contact Page**: Contact form with support information
- **FAQ Page**: Searchable frequently asked questions with filtering

### Key Features
- 60+ premium products across 6 categories
- Advanced filtering and search
- Product comparison tool
- AI-powered chatbot assistant
- Responsive design (mobile, tablet, desktop)
- Modern gradient design with smooth animations
- Supabase database integration
- REST API backend with Express

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Lucide React for icons
- Supabase client for database

### Backend
- Node.js with Express
- CORS enabled for API access
- Intelligent chatbot with pattern matching

### Database
- Supabase PostgreSQL
- Row Level Security (RLS)
- Structured product, category, and FAQ data

## Project Structure

```
project/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── ChatWidget.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── Compare.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── FAQ.tsx
│   ├── lib/              # Utilities
│   │   └── supabase.ts   # Supabase client & types
│   ├── App.tsx           # Main app with routing
│   └── main.tsx          # Entry point
├── server/               # Backend Express server
│   ├── index.js          # API endpoints & chatbot
│   └── package.json
├── scripts/
│   └── seed-database.js  # Database seeding script
└── supabase/
    └── migrations/       # Database migrations

```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase project (already configured)

### Installation

1. Install frontend dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

### Running the Application

You need to run both the frontend and backend:

**Terminal 1 - Frontend:**
```bash
npm run dev
```
The frontend will run on http://localhost:5173

**Terminal 2 - Backend (Chatbot API):**
```bash
cd server
npm start
```
The backend will run on http://localhost:5000

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## Database Setup

The database is already set up with:
- **Categories**: 6 product categories
- **Products**: 60+ products (10+ per category)
- **FAQs**: 12 frequently asked questions

To re-seed the database (if needed):
```bash
node scripts/seed-database.js
```

## Chatbot Features

The AI chatbot can help with:
- Product information and recommendations
- Comparing products
- Answering FAQs about warranty, returns, shipping, payments
- Providing support information
- Explaining product features and specifications

The chatbot uses intelligent pattern matching to understand user queries and provide relevant responses.

## API Endpoints

### POST /api/chat
Chatbot endpoint for user queries

**Request:**
```json
{
  "message": "Tell me about your earbuds"
}
```

**Response:**
```json
{
  "response": "Our earbuds offer superior sound quality...",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/health
Health check endpoint

## Product Categories

1. **Earbuds/TWS** - 10 products (₹999 - ₹5,499)
2. **Headphones** - 10 products (₹1,299 - ₹14,999)
3. **Speakers** - 10 products (₹799 - ₹9,999)
4. **Soundbars** - 10 products (₹2,999 - ₹24,999)
5. **Smartwatches** - 10 products (₹1,499 - ₹12,999)
6. **Accessories** - 10 products (₹499 - ₹3,499)

## Design Highlights

- Modern gradient design with blue/cyan theme
- Smooth animations and hover effects
- Fully responsive layout
- Clean, intuitive navigation
- Professional product cards
- Comparison table with visual indicators
- Floating chatbot widget
- Toast notifications (contact form)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images from Pexels
- Code splitting with React lazy loading
- Fast build with Vite
- Efficient database queries

## Future Enhancements

Potential features for future development:
- User authentication
- Shopping cart functionality
- Order processing
- Payment integration
- Product reviews and ratings
- Wishlist
- Advanced chatbot with AI model integration
- Email notifications
- Admin dashboard

## Support

For questions or issues:
- Email: support@audiostore.com
- Phone: 1800-123-4567
- Use the chatbot widget on any page

## License

This is a demonstration project. All product images are from Pexels (free to use).

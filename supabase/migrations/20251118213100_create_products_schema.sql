/*
  # Electronics Store Database Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `slug` (text, unique)
      - `description` (text)
      - `created_at` (timestamp)
    
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category_id` (uuid, foreign key)
      - `price` (numeric)
      - `image_url` (text)
      - `images` (jsonb - array of image URLs)
      - `description` (text)
      - `features` (jsonb - array of features)
      - `specifications` (jsonb - object with specs)
      - `rating` (numeric)
      - `created_at` (timestamp)
    
    - `faqs`
      - `id` (uuid, primary key)
      - `question` (text)
      - `answer` (text)
      - `category` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (no auth required for browsing)
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  price numeric NOT NULL,
  image_url text NOT NULL,
  images jsonb DEFAULT '[]'::jsonb,
  description text,
  features jsonb DEFAULT '[]'::jsonb,
  specifications jsonb DEFAULT '{}'::jsonb,
  rating numeric DEFAULT 4.5,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view faqs"
  ON faqs FOR SELECT
  USING (true);
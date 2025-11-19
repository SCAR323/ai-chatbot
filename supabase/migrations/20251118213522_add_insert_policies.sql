/*
  # Add Insert Policies for Seeding

  1. Security Updates
    - Add public insert policies for categories, products, and FAQs
    - This allows the seed script to populate the database
    - In production, these should be restricted to admin users only
*/

CREATE POLICY "Anyone can insert categories"
  ON categories FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can insert products"
  ON products FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can insert faqs"
  ON faqs FOR INSERT
  WITH CHECK (true);
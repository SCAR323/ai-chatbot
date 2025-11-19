import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
};

export type Product = {
  id: string;
  name: string;
  category_id: string;
  price: number;
  image_url: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Record<string, string>;
  rating: number;
  created_at: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  created_at: string;
};

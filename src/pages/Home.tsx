import { useEffect, useState } from 'react';
import { Star, TrendingUp, Zap, Award } from 'lucide-react';
import { supabase, Product } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const { data: products } = await supabase
      .from('products')
      .select('*')
      .order('rating', { ascending: false });

    if (products) {
      setFeaturedProducts(products.slice(0, 4));
      setBestSellers(products.slice(4, 8));
      setNewArrivals(products.slice(8, 12));
    }
  };

  const handleViewDetails = (productId: string) => {
    onNavigate('product-details', { productId });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Experience Premium Audio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover the perfect sound for every moment with our cutting-edge audio products
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800">Fast Delivery</h3>
            </div>
            <p className="text-gray-600">Get your products delivered within 2-5 business days</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800">1 Year Warranty</h3>
            </div>
            <p className="text-gray-600">All products come with manufacturer warranty</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800">Premium Quality</h3>
            </div>
            <p className="text-gray-600">Top-rated products with excellent reviews</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked products for you</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <TrendingUp className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Sellers</h2>
              <p className="text-gray-600">Most popular products</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <TrendingUp className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">New Arrivals</h2>
              <p className="text-gray-600">Latest products in store</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <TrendingUp className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Our AI assistant can help you find the perfect product
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

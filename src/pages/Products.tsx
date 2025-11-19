import { useEffect, useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { supabase, Product, Category } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

interface ProductsProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory, searchQuery, priceRange]);

  const loadData = async () => {
    const [{ data: productsData }, { data: categoriesData }] = await Promise.all([
      supabase.from('products').select('*').order('name'),
      supabase.from('categories').select('*').order('name'),
    ]);

    if (productsData) setProducts(productsData);
    if (categoriesData) setCategories(categoriesData);
  };

  const filterProducts = () => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category_id === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.features.some((f) => f.toLowerCase().includes(query))
      );
    }

    if (priceRange !== 'all') {
      const ranges: Record<string, [number, number]> = {
        under1000: [0, 1000],
        '1000-3000': [1000, 3000],
        '3000-7000': [3000, 7000],
        above7000: [7000, Infinity],
      };
      const [min, max] = ranges[priceRange];
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    }

    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSearchQuery('');
    setPriceRange('all');
  };

  const handleViewDetails = (productId: string) => {
    onNavigate('product-details', { productId });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="text-blue-100 text-lg">
            Browse our complete collection of premium audio products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:hidden">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <span className="font-semibold">Filters</span>
              <Filter className="h-5 w-5" />
            </button>
          </div>

          <aside
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } md:block md:w-64 flex-shrink-0`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                {(selectedCategory || searchQuery || priceRange !== 'all') && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </button>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="all">All Prices</option>
                  <option value="under1000">Under ₹1,000</option>
                  <option value="1000-3000">₹1,000 - ₹3,000</option>
                  <option value="3000-7000">₹3,000 - ₹7,000</option>
                  <option value="above7000">Above ₹7,000</option>
                </select>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <button
                onClick={() => onNavigate('compare')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Compare Products
              </button>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 rounded-lg shadow-md text-center">
                <p className="text-gray-600 text-lg">
                  No products found matching your criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

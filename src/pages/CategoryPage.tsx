import { useEffect, useState } from 'react';
import { supabase, Product, Category } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

interface CategoryPageProps {
  categorySlug: string;
  onNavigate: (page: string, data?: any) => void;
}

export default function CategoryPage({ categorySlug, onNavigate }: CategoryPageProps) {
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategoryAndProducts();
  }, [categorySlug]);

  const loadCategoryAndProducts = async () => {
    setLoading(true);

    const { data: categoryData } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', categorySlug)
      .maybeSingle();

    if (categoryData) {
      setCategory(categoryData);

      const { data: productsData } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', categoryData.id)
        .order('rating', { ascending: false });

      if (productsData) {
        setProducts(productsData);
      }
    }

    setLoading(false);
  };

  const handleViewDetails = (productId: string) => {
    onNavigate('product-details', { productId });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h2>
          <button
            onClick={() => onNavigate('products')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Browse All Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-blue-100 text-lg">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            {products.length} {products.length === 1 ? 'product' : 'products'} available
          </p>
          <button
            onClick={() => onNavigate('compare')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Compare Products
          </button>
        </div>

        {products.length === 0 ? (
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <p className="text-gray-600 text-lg">No products available in this category</p>
            <button
              onClick={() => onNavigate('products')}
              className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Browse All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

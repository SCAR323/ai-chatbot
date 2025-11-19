import { useEffect, useState } from 'react';
import { Check, X as XIcon, Search } from 'lucide-react';
import { supabase, Product } from '../lib/supabase';

interface CompareProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function Compare({ onNavigate }: CompareProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<(Product | null)>([null, null]);
  const [searchQuery, setSearchQuery] = useState(['', '']);
  const [searchResults, setSearchResults] = useState<Product[][]>([[], []]);
  const [showSearch, setShowSearch] = useState<boolean[]>([true, true]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    handleSearch(0);
  }, [searchQuery[0], products]);

  useEffect(() => {
    handleSearch(1);
  }, [searchQuery[1], products]);

  const loadProducts = async () => {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('name');

    if (data) {
      setProducts(data);
    }
  };

  const handleSearch = (index: number) => {
    const query = searchQuery[index].toLowerCase();
    if (!query) {
      setSearchResults((prev) => {
        const newResults = [...prev];
        newResults[index] = [];
        return newResults;
      });
      return;
    }

    const results = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
      .slice(0, 5);

    setSearchResults((prev) => {
      const newResults = [...prev];
      newResults[index] = results;
      return newResults;
    });
  };

  const selectProduct = (index: number, product: Product) => {
    const newSelected = [...selectedProducts];
    newSelected[index] = product;
    setSelectedProducts(newSelected);
    setShowSearch((prev) => {
      const newShow = [...prev];
      newShow[index] = false;
      return newShow;
    });
  };

  const removeProduct = (index: number) => {
    const newSelected = [...selectedProducts];
    newSelected[index] = null;
    setSelectedProducts(newSelected);
    setShowSearch((prev) => {
      const newShow = [...prev];
      newShow[index] = true;
      return newShow;
    });
    setSearchQuery((prev) => {
      const newQuery = [...prev];
      newQuery[index] = '';
      return newQuery;
    });
  };

  const product1 = selectedProducts[0];
  const product2 = selectedProducts[1];

  const allSpecs = new Set<string>();
  if (product1) Object.keys(product1.specifications).forEach((key) => allSpecs.add(key));
  if (product2) Object.keys(product2.specifications).forEach((key) => allSpecs.add(key));
  const specKeys = Array.from(allSpecs);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Compare Products</h1>
          <p className="text-blue-100 text-lg">
            Select two products to compare their features and specifications
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[0, 1].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              {showSearch[index] ? (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Product {index + 1}
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery[index]}
                      onChange={(e) => {
                        const newQuery = [...searchQuery];
                        newQuery[index] = e.target.value;
                        setSearchQuery(newQuery);
                      }}
                      placeholder="Search for a product..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {searchResults[index].length > 0 && (
                    <div className="mt-2 border border-gray-200 rounded-lg max-h-60 overflow-y-auto">
                      {searchResults[index].map((product) => (
                        <button
                          key={product.id}
                          onClick={() => selectProduct(index, product)}
                          className="w-full p-3 hover:bg-gray-50 flex items-center text-left border-b border-gray-100 last:border-b-0"
                        >
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded mr-3"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-600">₹{product.price.toLocaleString()}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : selectedProducts[index] ? (
                <div className="relative">
                  <button
                    onClick={() => removeProduct(index)}
                    className="absolute top-0 right-0 p-1 bg-red-100 hover:bg-red-200 rounded-full transition-colors"
                  >
                    <XIcon className="h-4 w-4 text-red-600" />
                  </button>
                  <img
                    src={selectedProducts[index]!.image_url}
                    alt={selectedProducts[index]!.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedProducts[index]!.name}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">
                    ₹{selectedProducts[index]!.price.toLocaleString()}
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {product1 && product2 && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <h2 className="text-2xl font-bold">Comparison Results</h2>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 font-semibold">
                <div>Feature</div>
                <div className="text-center">{product1.name}</div>
                <div className="text-center">{product2.name}</div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4">
                <div className="font-medium text-gray-700">Price</div>
                <div className="text-center">
                  <span className={product1.price < product2.price ? 'text-green-600 font-bold' : ''}>
                    ₹{product1.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-center">
                  <span className={product2.price < product1.price ? 'text-green-600 font-bold' : ''}>
                    ₹{product2.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50">
                <div className="font-medium text-gray-700">Rating</div>
                <div className="text-center">
                  <span className={product1.rating > product2.rating ? 'text-green-600 font-bold' : ''}>
                    {product1.rating} ⭐
                  </span>
                </div>
                <div className="text-center">
                  <span className={product2.rating > product1.rating ? 'text-green-600 font-bold' : ''}>
                    {product2.rating} ⭐
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="font-semibold text-gray-900 mb-3">Features Comparison</div>
                <div className="space-y-2">
                  {Array.from(
                    new Set([...product1.features, ...product2.features])
                  ).map((feature, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 py-2">
                      <div className="text-sm text-gray-700">{feature}</div>
                      <div className="text-center">
                        {product1.features.includes(feature) ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <XIcon className="h-5 w-5 text-red-400 mx-auto" />
                        )}
                      </div>
                      <div className="text-center">
                        {product2.features.includes(feature) ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <XIcon className="h-5 w-5 text-red-400 mx-auto" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gray-50">
                <div className="font-semibold text-gray-900 mb-3">Specifications</div>
                <div className="space-y-2">
                  {specKeys.map((key, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 py-2">
                      <div className="text-sm font-medium text-gray-700">{key}</div>
                      <div className="text-sm text-center text-gray-900">
                        {product1.specifications[key] || '-'}
                      </div>
                      <div className="text-sm text-center text-gray-900">
                        {product2.specifications[key] || '-'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => onNavigate('product-details', { productId: product1.id })}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View {product1.name}
                </button>
                <button
                  onClick={() => onNavigate('product-details', { productId: product2.id })}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View {product2.name}
                </button>
              </div>
            </div>
          </div>
        )}

        {(!product1 || !product2) && (
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <p className="text-gray-600 text-lg">
              Please select two products to start comparing
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

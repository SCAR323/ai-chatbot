import { useEffect, useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, RefreshCw } from 'lucide-react';
import { supabase, Product } from '../lib/supabase';

interface ProductDetailsProps {
  productId: string;
  onNavigate: (page: string, data?: any) => void;
}

export default function ProductDetails({ productId, onNavigate }: ProductDetailsProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    loadProduct();
  }, [productId]);

  const loadProduct = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .maybeSingle();

    if (data) {
      setProduct(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
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

  const images = product.images.length > 0 ? product.images : [product.image_url];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('products')}
          className="text-blue-600 hover:text-blue-700 font-medium mb-6 flex items-center"
        >
          ← Back to Products
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`border-2 rounded-lg overflow-hidden ${
                        selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <div className="flex items-center">
                    <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-blue-600 fill-current mr-1" />
                      <span className="text-blue-900 font-semibold">{product.rating}</span>
                      <span className="text-blue-700 ml-1 text-sm">(245 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ₹{Math.round(product.price * 1.3).toLocaleString()}
                  </span>
                  <span className="ml-2 text-green-600 font-semibold">23% OFF</span>
                </div>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
                  Buy Now
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-700 font-medium">1 Year Warranty</p>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-700 font-medium">Free Delivery</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-700 font-medium">7-Day Returns</p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('compare')}
                className="w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Compare with Other Products
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

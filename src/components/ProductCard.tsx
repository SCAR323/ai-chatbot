import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
  onViewDetails: (productId: string) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
            <Star className="h-3 w-3 mr-1 fill-current" />
            {product.rating}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          <button
            onClick={() => onViewDetails(product.id)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center"
          >
            View Details
          </button>
        </div>

        <button className="w-full mt-3 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

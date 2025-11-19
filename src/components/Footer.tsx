import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">AudioStore</h3>
            <p className="text-sm mb-4">
              Your premium destination for high-quality audio products and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-blue-400 transition-colors">
                  All Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-blue-400 transition-colors">
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('category-earbuds')} className="hover:text-blue-400 transition-colors">
                  Earbuds
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category-headphones')} className="hover:text-blue-400 transition-colors">
                  Headphones
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category-speakers')} className="hover:text-blue-400 transition-colors">
                  Speakers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category-smartwatches')} className="hover:text-blue-400 transition-colors">
                  Smartwatches
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>support@audiostore.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>1800-123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>123 Audio Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 AudioStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

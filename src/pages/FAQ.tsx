import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { supabase, FAQ as FAQType } from '../lib/supabase';

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQType[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FAQType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    loadFaqs();
  }, []);

  useEffect(() => {
    filterFaqs();
  }, [faqs, searchQuery, selectedCategory]);

  const loadFaqs = async () => {
    const { data } = await supabase
      .from('faqs')
      .select('*')
      .order('created_at');

    if (data) {
      setFaqs(data);
    }
  };

  const filterFaqs = () => {
    let filtered = [...faqs];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
    }

    setFilteredFaqs(filtered);
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'warranty', label: 'Warranty' },
    { value: 'returns', label: 'Returns & Refunds' },
    { value: 'shipping', label: 'Shipping' },
    { value: 'products', label: 'Products' },
    { value: 'payment', label: 'Payment' },
    { value: 'support', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-100 text-lg">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search FAQs
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <p className="text-gray-600 text-lg">No FAQs found matching your search</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-blue-100 mb-6">
            Our support team is here to help you with any questions or concerns
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-sm text-blue-100 mb-1">Email Us</p>
              <p className="font-semibold">support@audiostore.com</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-sm text-blue-100 mb-1">Call Us</p>
              <p className="font-semibold">1800-123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

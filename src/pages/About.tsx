import { Award, Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About AudioStore</h1>
          <p className="text-blue-100 text-lg">
            Your trusted partner in premium audio products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg mb-4">
            AudioStore was founded with a simple mission: to bring high-quality audio products to music lovers,
            gamers, and audiophiles across India. We believe that everyone deserves access to premium sound
            experiences without breaking the bank.
          </p>
          <p className="text-gray-700 text-lg">
            Since our inception, we've partnered with leading audio brands and manufacturers to curate a
            collection of products that deliver exceptional performance, durability, and value. From wireless
            earbuds to professional headphones, every product in our store is carefully selected and tested
            by our team of audio enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Only the best products make it to our store</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+ Customers</h3>
            <p className="text-gray-600">Trusted by thousands of happy customers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Dedicated team to help you choose right</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Passion Driven</h3>
            <p className="text-gray-600">We love what we do and it shows</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-700">
                We never compromise on quality. Every product goes through rigorous testing to ensure
                it meets our high standards before it reaches you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-700">
                Your happiness is our success. We go above and beyond to ensure you're completely
                satisfied with your purchase and experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fair Pricing</h3>
              <p className="text-gray-700">
                We believe premium audio shouldn't be expensive. We work directly with manufacturers
                to bring you the best prices without hidden costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We stay ahead of the curve by constantly updating our catalog with the latest
                innovations in audio technology.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose AudioStore?</h2>
          <p className="text-xl text-blue-100 mb-6">
            We're not just a store - we're your audio companion. With expert advice, genuine products,
            hassle-free returns, and dedicated support, we make your audio journey seamless and enjoyable.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✓ Genuine Products</div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✓ 1 Year Warranty</div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✓ Free Shipping</div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✓ 7-Day Returns</div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✓ Expert Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

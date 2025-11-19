import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">
            We're here to help. Reach out to us anytime!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">support@audiostore.com</p>
            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">1800-123-4567</p>
            <p className="text-sm text-gray-500">Mon-Sat, 9 AM - 6 PM</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-2">123 Audio Street, Mumbai</p>
            <p className="text-sm text-gray-500">India - 400001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Warranty & Service</h3>
                  <p className="text-gray-600 text-sm">
                    All products come with a 1-year manufacturer warranty. For warranty claims,
                    please contact our support team with your order details and product information.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Returns & Refunds</h3>
                  <p className="text-gray-600 text-sm">
                    We offer a 7-day no-questions-asked return policy. Products must be in original
                    condition with all accessories and packaging. Refunds are processed within 5-7
                    business days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Order Tracking</h3>
                  <p className="text-gray-600 text-sm">
                    Track your order using the link sent to your email and SMS after shipment.
                    For any delivery issues, contact our support team with your order number.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-lg shadow-lg text-white">
              <div className="flex items-start mb-4">
                <Clock className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-blue-100 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-blue-100 text-sm">Sunday: Closed</p>
                  <p className="text-blue-100 text-sm mt-2">
                    We respond to all emails within 24 hours during business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

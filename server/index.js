import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const productKnowledge = {
  earbuds: "Our earbuds offer superior sound quality with active noise cancellation, long battery life (up to 30 hours with case), and IPX5 water resistance.",
  headphones: "Our headphones feature premium audio drivers, comfortable padding, wireless connectivity, and studio-quality sound for immersive listening.",
  speakers: "Our Bluetooth speakers deliver 360-degree sound, deep bass, portable design, and up to 20 hours of playtime on a single charge.",
  soundbars: "Our soundbars provide cinematic audio experience with Dolby Atmos support, wireless subwoofer, and multiple connectivity options.",
  smartwatches: "Our smartwatches include health tracking, fitness monitoring, heart rate sensor, sleep tracking, and 7-day battery life.",
  accessories: "We offer fast charging cables, power banks with multiple ports, wireless chargers, and premium protective cases."
};

const faqResponses = {
  warranty: "All our products come with a 1-year manufacturer warranty covering manufacturing defects. Extended warranty options are available at purchase.",
  returns: "We offer a 7-day no-questions-asked return policy. Products must be in original condition with all accessories and packaging.",
  shipping: "Free shipping on orders above ₹999. Standard delivery takes 3-5 business days. Express delivery available for metro cities.",
  payment: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery for orders below ₹50,000.",
  tracking: "You'll receive a tracking link via SMS and email once your order is shipped. You can track your order in real-time."
};

function generateResponse(message) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('warranty')) {
    return faqResponses.warranty;
  }

  if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
    return faqResponses.returns;
  }

  if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
    return faqResponses.shipping;
  }

  if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
    return faqResponses.payment;
  }

  if (lowerMessage.includes('track')) {
    return faqResponses.tracking;
  }

  if (lowerMessage.includes('earbud') || lowerMessage.includes('tws')) {
    return productKnowledge.earbuds;
  }

  if (lowerMessage.includes('headphone')) {
    return productKnowledge.headphones;
  }

  if (lowerMessage.includes('speaker')) {
    return productKnowledge.speakers;
  }

  if (lowerMessage.includes('soundbar')) {
    return productKnowledge.soundbars;
  }

  if (lowerMessage.includes('smartwatch') || lowerMessage.includes('watch')) {
    return productKnowledge.smartwatches;
  }

  if (lowerMessage.includes('cable') || lowerMessage.includes('charger') || lowerMessage.includes('powerbank')) {
    return productKnowledge.accessories;
  }

  if (lowerMessage.includes('compare') || lowerMessage.includes('difference') || lowerMessage.includes('better')) {
    return "I can help you compare products! Please visit our Compare page where you can select two products side by side. I'll highlight the key differences in features, price, and specifications to help you make the best choice.";
  }

  if (lowerMessage.includes('recommend') || lowerMessage.includes('best') || lowerMessage.includes('suggest')) {
    return "I'd be happy to recommend products! For best recommendations, could you tell me: 1) What's your budget? 2) What will you primarily use it for (music, calls, sports, gaming)? 3) Any specific features you need (noise cancellation, water resistance, etc.)?";
  }

  if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return "Our products range from ₹499 to ₹14,999. Budget options start at ₹499 for basic accessories, mid-range products are ₹2,000-₹5,000, and premium offerings go up to ₹14,999. Check our Products page for detailed pricing!";
  }

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! 👋 Welcome to our electronics store. I'm here to help you with product information, comparisons, FAQs, and recommendations. How can I assist you today?";
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
    return "You can reach our support team at support@audiostore.com or call us at 1800-123-4567 (Mon-Sat, 9 AM - 6 PM). For immediate assistance, check our FAQ page or continue chatting with me!";
  }

  return "I'm here to help with product information, comparisons, warranty details, shipping, returns, and recommendations. Could you please rephrase your question or ask about a specific product category, policy, or feature?";
}

app.post('/api/chat', (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = generateResponse(message);

    res.json({
      response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

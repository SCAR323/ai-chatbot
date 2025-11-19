import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const categories = [
  { name: 'Earbuds', slug: 'earbuds', description: 'True Wireless Stereo earbuds with premium sound quality' },
  { name: 'Headphones', slug: 'headphones', description: 'Over-ear and on-ear headphones for immersive audio' },
  { name: 'Speakers', slug: 'speakers', description: 'Portable Bluetooth speakers with powerful bass' },
  { name: 'Soundbars', slug: 'soundbars', description: 'Premium soundbars for home entertainment' },
  { name: 'Smartwatches', slug: 'smartwatches', description: 'Feature-packed smartwatches for fitness and connectivity' },
  { name: 'Accessories', slug: 'accessories', description: 'Chargers, cables, and power banks' }
];

const products = {
  earbuds: [
    {
      name: 'Aero Pro TWS',
      price: 2999,
      image_url: 'https://images.pexels.com/photos/8000575/pexels-photo-8000575.jpeg',
      images: ['https://images.pexels.com/photos/8000575/pexels-photo-8000575.jpeg'],
      description: 'Premium TWS earbuds with Active Noise Cancellation and 30-hour battery life',
      features: ['Active Noise Cancellation', '30H Playtime', 'IPX5 Water Resistant', 'Low Latency Gaming Mode', 'Touch Controls'],
      specifications: {
        'Driver Size': '10mm Dynamic Drivers',
        'Bluetooth': 'v5.3',
        'Battery Life': '30 Hours (with case)',
        'Charging': 'USB Type-C + Wireless',
        'Water Resistance': 'IPX5',
        'Weight': '4g per earbud'
      },
      rating: 4.8
    },
    {
      name: 'Beat X1 Buds',
      price: 1499,
      image_url: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
      images: ['https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg'],
      description: 'Affordable TWS with premium sound and comfortable fit',
      features: ['Deep Bass', '20H Playtime', 'Voice Assistant', 'Ergonomic Design', 'Quick Charging'],
      specifications: {
        'Driver Size': '8mm Drivers',
        'Bluetooth': 'v5.1',
        'Battery Life': '20 Hours (with case)',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX4',
        'Weight': '5g per earbud'
      },
      rating: 4.5
    },
    {
      name: 'Sport Fit Pro',
      price: 3499,
      image_url: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      images: ['https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'],
      description: 'Sports earbuds with secure fit and sweatproof design',
      features: ['Secure Ear Hooks', 'Sweatproof', '25H Playtime', 'Ambient Mode', 'Fast Charging'],
      specifications: {
        'Driver Size': '11mm Drivers',
        'Bluetooth': 'v5.2',
        'Battery Life': '25 Hours (with case)',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX7',
        'Weight': '6g per earbud'
      },
      rating: 4.7
    },
    {
      name: 'Ultra Quiet ANC',
      price: 4999,
      image_url: 'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg',
      images: ['https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg'],
      description: 'Premium ANC earbuds with industry-leading noise cancellation',
      features: ['Advanced ANC', '35H Playtime', 'Transparency Mode', 'Multi-device Pairing', 'Premium Case'],
      specifications: {
        'Driver Size': '12mm Dynamic Drivers',
        'Bluetooth': 'v5.3',
        'Battery Life': '35 Hours (with case)',
        'Charging': 'USB Type-C + Wireless',
        'Water Resistance': 'IPX5',
        'Weight': '5g per earbud'
      },
      rating: 4.9
    },
    {
      name: 'Groove Mini',
      price: 999,
      image_url: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      images: ['https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'],
      description: 'Compact and budget-friendly TWS earbuds',
      features: ['Compact Design', '15H Playtime', 'Clear Calls', 'Auto Pairing', 'Lightweight'],
      specifications: {
        'Driver Size': '6mm Drivers',
        'Bluetooth': 'v5.0',
        'Battery Life': '15 Hours (with case)',
        'Charging': 'Micro USB',
        'Water Resistance': 'IPX4',
        'Weight': '4g per earbud'
      },
      rating: 4.3
    },
    {
      name: 'Bass Master TWS',
      price: 2499,
      image_url: 'https://images.pexels.com/photos/8000575/pexels-photo-8000575.jpeg',
      images: ['https://images.pexels.com/photos/8000575/pexels-photo-8000575.jpeg'],
      description: 'Bass-heavy earbuds for music lovers',
      features: ['Extra Bass', '28H Playtime', 'Gaming Mode', 'Touch Controls', 'Voice Assistant'],
      specifications: {
        'Driver Size': '10mm Bass Drivers',
        'Bluetooth': 'v5.2',
        'Battery Life': '28 Hours (with case)',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX5',
        'Weight': '5g per earbud'
      },
      rating: 4.6
    },
    {
      name: 'Crystal Clear Pro',
      price: 3999,
      image_url: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
      images: ['https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg'],
      description: 'Audiophile-grade TWS with crystal clear sound',
      features: ['Hi-Res Audio', 'Dual Drivers', '32H Playtime', 'App Control', 'Premium Build'],
      specifications: {
        'Driver Size': 'Dual 10mm + 6mm Drivers',
        'Bluetooth': 'v5.3',
        'Battery Life': '32 Hours (with case)',
        'Charging': 'USB Type-C + Wireless',
        'Water Resistance': 'IPX5',
        'Weight': '5g per earbud'
      },
      rating: 4.8
    },
    {
      name: 'Fit Buds Lite',
      price: 1299,
      image_url: 'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg',
      images: ['https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg'],
      description: 'Lightweight earbuds for everyday use',
      features: ['Ultra Light', '18H Playtime', 'Clear Audio', 'Comfortable Fit', 'Auto Connect'],
      specifications: {
        'Driver Size': '8mm Drivers',
        'Bluetooth': 'v5.1',
        'Battery Life': '18 Hours (with case)',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX4',
        'Weight': '3g per earbud'
      },
      rating: 4.4
    },
    {
      name: 'Power Buds Max',
      price: 5499,
      image_url: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      images: ['https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'],
      description: 'Premium TWS with maximum battery and features',
      features: ['40H Playtime', 'Hybrid ANC', 'LDAC Support', 'Wireless Charging', 'Premium Leather Case'],
      specifications: {
        'Driver Size': '13mm Titanium Drivers',
        'Bluetooth': 'v5.3',
        'Battery Life': '40 Hours (with case)',
        'Charging': 'USB Type-C + Wireless',
        'Water Resistance': 'IPX6',
        'Weight': '6g per earbud'
      },
      rating: 4.9
    },
    {
      name: 'Zen Calm ANC',
      price: 3799,
      image_url: 'https://images.pexels.com/photos/8000575/pexels-photo-8000575.jpeg',
      images: ['https://images.pexels.com/photos/8000575/pexels-photo-8000575.jpeg'],
      description: 'ANC earbuds designed for peace and tranquility',
      features: ['Adaptive ANC', '30H Playtime', 'Meditation Mode', 'Ambient Sound', 'Comfortable Fit'],
      specifications: {
        'Driver Size': '11mm Drivers',
        'Bluetooth': 'v5.2',
        'Battery Life': '30 Hours (with case)',
        'Charging': 'USB Type-C + Wireless',
        'Water Resistance': 'IPX5',
        'Weight': '5g per earbud'
      },
      rating: 4.7
    }
  ],
  headphones: [
    {
      name: 'Studio Pro Wireless',
      price: 6999,
      image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'],
      description: 'Professional over-ear headphones with studio-quality sound',
      features: ['50mm Drivers', 'Active ANC', '50H Playtime', 'Wired + Wireless', 'Memory Foam Cushions'],
      specifications: {
        'Driver Size': '50mm Dynamic Drivers',
        'Bluetooth': 'v5.2',
        'Battery Life': '50 Hours',
        'Charging': 'USB Type-C',
        'Weight': '280g',
        'Cable': '3.5mm + USB-C'
      },
      rating: 4.8
    },
    {
      name: 'Bass Heavy X2',
      price: 3999,
      image_url: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      images: ['https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'],
      description: 'Bass-focused wireless headphones for EDM and hip-hop lovers',
      features: ['Extra Bass', '40H Playtime', 'Soft Ear Cups', 'Foldable', 'Built-in Mic'],
      specifications: {
        'Driver Size': '40mm Bass Drivers',
        'Bluetooth': 'v5.1',
        'Battery Life': '40 Hours',
        'Charging': 'USB Type-C',
        'Weight': '250g',
        'Cable': '3.5mm AUX'
      },
      rating: 4.6
    },
    {
      name: 'Travel Comfort ANC',
      price: 8999,
      image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'],
      description: 'Premium ANC headphones perfect for travel',
      features: ['Industry-leading ANC', '60H Playtime', 'Travel Case', 'Multi-point Connection', 'Premium Leather'],
      specifications: {
        'Driver Size': '45mm Drivers',
        'Bluetooth': 'v5.3',
        'Battery Life': '60 Hours',
        'Charging': 'USB Type-C',
        'Weight': '300g',
        'Cable': '3.5mm + Aircraft Adapter'
      },
      rating: 4.9
    },
    {
      name: 'Sport Force On-Ear',
      price: 2499,
      image_url: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      images: ['https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'],
      description: 'Lightweight on-ear headphones for sports and fitness',
      features: ['Sweatproof', '30H Playtime', 'Adjustable Headband', 'Foldable', 'Quick Charge'],
      specifications: {
        'Driver Size': '35mm Drivers',
        'Bluetooth': 'v5.0',
        'Battery Life': '30 Hours',
        'Charging': 'USB Type-C',
        'Weight': '180g',
        'Cable': '3.5mm AUX'
      },
      rating: 4.5
    },
    {
      name: 'Budget Beat On-Ear',
      price: 1499,
      image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'],
      description: 'Affordable on-ear headphones with decent sound',
      features: ['20H Playtime', 'Foldable', 'Soft Padding', 'Built-in Mic', 'Lightweight'],
      specifications: {
        'Driver Size': '32mm Drivers',
        'Bluetooth': 'v5.0',
        'Battery Life': '20 Hours',
        'Charging': 'Micro USB',
        'Weight': '160g',
        'Cable': '3.5mm AUX'
      },
      rating: 4.2
    },
    {
      name: 'Gaming Master Pro',
      price: 5499,
      image_url: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      images: ['https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'],
      description: 'Gaming headphones with 7.1 surround sound',
      features: ['7.1 Surround', 'Low Latency', '45H Playtime', 'RGB Lighting', 'Detachable Mic'],
      specifications: {
        'Driver Size': '50mm Gaming Drivers',
        'Bluetooth': 'v5.2 + 2.4GHz Dongle',
        'Battery Life': '45 Hours',
        'Charging': 'USB Type-C',
        'Weight': '320g',
        'Cable': '3.5mm + USB-C'
      },
      rating: 4.7
    },
    {
      name: 'Classic Wired Studio',
      price: 2999,
      image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'],
      description: 'Wired studio headphones for audiophiles',
      features: ['Hi-Res Audio', 'Open-back Design', 'Detachable Cable', 'Velour Cushions', 'Gold-plated Jack'],
      specifications: {
        'Driver Size': '50mm Open-back Drivers',
        'Bluetooth': 'None (Wired only)',
        'Battery Life': 'N/A',
        'Charging': 'N/A',
        'Weight': '250g',
        'Cable': '3.5mm + 6.35mm Adapter'
      },
      rating: 4.8
    },
    {
      name: 'Kids Safe Volume',
      price: 1299,
      image_url: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      images: ['https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'],
      description: 'Volume-limited headphones safe for children',
      features: ['85dB Volume Limit', 'Durable Build', '15H Playtime', 'Colorful Design', 'Adjustable'],
      specifications: {
        'Driver Size': '30mm Drivers',
        'Bluetooth': 'v5.0',
        'Battery Life': '15 Hours',
        'Charging': 'USB Type-C',
        'Weight': '140g',
        'Cable': '3.5mm AUX'
      },
      rating: 4.6
    },
    {
      name: 'Office Pro Wireless',
      price: 4499,
      image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'],
      description: 'Professional headphones for office and calls',
      features: ['Noise Cancelling Mic', 'ANC', '55H Playtime', 'Multi-device', 'Teams/Zoom Certified'],
      specifications: {
        'Driver Size': '40mm Drivers',
        'Bluetooth': 'v5.2',
        'Battery Life': '55 Hours',
        'Charging': 'USB Type-C',
        'Weight': '230g',
        'Cable': '3.5mm + USB-C'
      },
      rating: 4.7
    },
    {
      name: 'Ultra Premium Flagship',
      price: 14999,
      image_url: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
      images: ['https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'],
      description: 'Flagship headphones with cutting-edge technology',
      features: ['Planar Drivers', 'Adaptive ANC', '70H Playtime', 'LDAC/aptX HD', 'Luxe Materials'],
      specifications: {
        'Driver Size': '50mm Planar Magnetic',
        'Bluetooth': 'v5.3',
        'Battery Life': '70 Hours',
        'Charging': 'USB Type-C + Wireless',
        'Weight': '350g',
        'Cable': 'Balanced + USB-C'
      },
      rating: 5.0
    }
  ],
  speakers: [
    {
      name: 'Thunder Bass 360',
      price: 3499,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: '360-degree portable speaker with thundering bass',
      features: ['360° Sound', 'Deep Bass', '20H Playtime', 'IPX7 Waterproof', 'TWS Pairing'],
      specifications: {
        'Output Power': '30W',
        'Bluetooth': 'v5.2',
        'Battery Life': '20 Hours',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX7',
        'Weight': '850g'
      },
      rating: 4.7
    },
    {
      name: 'Mini Pocket Speaker',
      price: 999,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Compact pocket-sized speaker with big sound',
      features: ['Compact Design', '10H Playtime', 'Portable', 'Aux Input', 'Lightweight'],
      specifications: {
        'Output Power': '5W',
        'Bluetooth': 'v5.0',
        'Battery Life': '10 Hours',
        'Charging': 'Micro USB',
        'Water Resistance': 'IPX5',
        'Weight': '200g'
      },
      rating: 4.3
    },
    {
      name: 'Party Blast Pro',
      price: 7999,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Party speaker with RGB lights and massive sound',
      features: ['RGB Lights', '100W Output', '15H Playtime', 'Mic Input', 'TWS Pairing'],
      specifications: {
        'Output Power': '100W',
        'Bluetooth': 'v5.2',
        'Battery Life': '15 Hours',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX5',
        'Weight': '3.5kg'
      },
      rating: 4.8
    },
    {
      name: 'Outdoor Adventure',
      price: 4999,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Rugged outdoor speaker built for adventures',
      features: ['Shockproof', 'Dustproof', '25H Playtime', 'IPX7', 'Carabiner Clip'],
      specifications: {
        'Output Power': '20W',
        'Bluetooth': 'v5.1',
        'Battery Life': '25 Hours',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX7',
        'Weight': '650g'
      },
      rating: 4.6
    },
    {
      name: 'Home Sound Station',
      price: 5999,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Premium home speaker with room-filling sound',
      features: ['Room-filling Audio', '40W Output', 'Wi-Fi + Bluetooth', 'Voice Assistant', 'Multi-room'],
      specifications: {
        'Output Power': '40W',
        'Bluetooth': 'v5.2 + Wi-Fi',
        'Battery Life': 'AC Powered',
        'Charging': 'Power Adapter',
        'Water Resistance': 'None',
        'Weight': '2.2kg'
      },
      rating: 4.7
    },
    {
      name: 'Cylinder 360 Pro',
      price: 6499,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Cylindrical speaker with 360-degree premium audio',
      features: ['360° Sound', '50W Output', '18H Playtime', 'Premium Build', 'App Control'],
      specifications: {
        'Output Power': '50W',
        'Bluetooth': 'v5.3',
        'Battery Life': '18 Hours',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX6',
        'Weight': '1.5kg'
      },
      rating: 4.8
    },
    {
      name: 'Waterproof Pool Speaker',
      price: 2999,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Floating waterproof speaker perfect for pools',
      features: ['Floats on Water', 'IPX7', '12H Playtime', 'Colorful Design', 'LED Lights'],
      specifications: {
        'Output Power': '10W',
        'Bluetooth': 'v5.0',
        'Battery Life': '12 Hours',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX7 (Floats)',
        'Weight': '400g'
      },
      rating: 4.5
    },
    {
      name: 'Studio Monitor Pair',
      price: 12999,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Professional studio monitor speakers (pair)',
      features: ['Studio Quality', 'Balanced Sound', 'Multiple Inputs', 'Bi-amped', 'Acoustic Tuning'],
      specifications: {
        'Output Power': '60W x 2',
        'Bluetooth': 'v5.2 + Wired',
        'Battery Life': 'AC Powered',
        'Charging': 'Power Adapter',
        'Water Resistance': 'None',
        'Weight': '4kg (pair)'
      },
      rating: 4.9
    },
    {
      name: 'Clip-On Mini',
      price: 799,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Ultra-portable clip-on speaker for travel',
      features: ['Clip Design', '8H Playtime', 'Ultra Portable', 'Waterproof', 'Compact'],
      specifications: {
        'Output Power': '3W',
        'Bluetooth': 'v5.0',
        'Battery Life': '8 Hours',
        'Charging': 'Micro USB',
        'Water Resistance': 'IPX5',
        'Weight': '120g'
      },
      rating: 4.2
    },
    {
      name: 'Bass Cannon XL',
      price: 9999,
      image_url: 'https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg',
      images: ['https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg'],
      description: 'Extra-large speaker with earth-shaking bass',
      features: ['Massive Bass', '120W Output', '20H Playtime', 'TWS', 'Guitar Input'],
      specifications: {
        'Output Power': '120W',
        'Bluetooth': 'v5.2',
        'Battery Life': '20 Hours',
        'Charging': 'USB Type-C',
        'Water Resistance': 'IPX5',
        'Weight': '5kg'
      },
      rating: 4.8
    }
  ],
  soundbars: [
    {
      name: 'Cinema Master 5.1',
      price: 12999,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Premium 5.1 soundbar with wireless subwoofer',
      features: ['5.1 Surround', 'Wireless Subwoofer', 'Dolby Atmos', 'HDMI ARC', 'Multiple Modes'],
      specifications: {
        'Output Power': '400W',
        'Channels': '5.1',
        'Connectivity': 'HDMI, Optical, Bluetooth',
        'Subwoofer': 'Wireless 150W',
        'Dolby Atmos': 'Yes',
        'Dimensions': '110cm soundbar'
      },
      rating: 4.9
    },
    {
      name: 'Budget Home Theater',
      price: 4999,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Affordable 2.1 soundbar for home entertainment',
      features: ['2.1 Channel', 'Wired Subwoofer', 'Bluetooth', 'Remote Control', 'Wall Mountable'],
      specifications: {
        'Output Power': '120W',
        'Channels': '2.1',
        'Connectivity': 'Optical, AUX, Bluetooth',
        'Subwoofer': 'Wired 40W',
        'Dolby Atmos': 'No',
        'Dimensions': '90cm soundbar'
      },
      rating: 4.4
    },
    {
      name: 'Smart Voice Bar',
      price: 8999,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Smart soundbar with built-in voice assistant',
      features: ['Voice Control', '3.1 Channel', 'Wi-Fi + Bluetooth', 'Multi-room', 'Streaming Apps'],
      specifications: {
        'Output Power': '280W',
        'Channels': '3.1',
        'Connectivity': 'HDMI, Wi-Fi, Bluetooth',
        'Subwoofer': 'Wireless 100W',
        'Dolby Atmos': 'Yes',
        'Dimensions': '105cm soundbar'
      },
      rating: 4.7
    },
    {
      name: 'Compact TV Soundbar',
      price: 3499,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Compact soundbar for small to medium TVs',
      features: ['Compact Design', '2.0 Channel', 'Bluetooth', 'Wall Mount', 'Clear Dialogue'],
      specifications: {
        'Output Power': '80W',
        'Channels': '2.0',
        'Connectivity': 'Optical, AUX, Bluetooth',
        'Subwoofer': 'None',
        'Dolby Atmos': 'No',
        'Dimensions': '70cm soundbar'
      },
      rating: 4.3
    },
    {
      name: 'Atmos Pro 7.1',
      price: 19999,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Premium 7.1 Dolby Atmos soundbar system',
      features: ['7.1.2 Atmos', 'Wireless Sub + Satellites', 'HDMI eARC', '4K Passthrough', 'Calibration'],
      specifications: {
        'Output Power': '600W',
        'Channels': '7.1.2',
        'Connectivity': 'HDMI eARC, Optical, Bluetooth',
        'Subwoofer': 'Wireless 200W',
        'Dolby Atmos': 'Yes (7.1.2)',
        'Dimensions': '120cm soundbar'
      },
      rating: 5.0
    },
    {
      name: 'Gaming Soundbar RGB',
      price: 6999,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Gaming-focused soundbar with RGB lighting',
      features: ['RGB Lighting', '2.1 Channel', 'Low Latency', 'Gaming Modes', 'USB Audio'],
      specifications: {
        'Output Power': '180W',
        'Channels': '2.1',
        'Connectivity': 'USB, Optical, Bluetooth',
        'Subwoofer': 'Wired 60W',
        'Dolby Atmos': 'No',
        'Dimensions': '95cm soundbar'
      },
      rating: 4.6
    },
    {
      name: 'Slim Wall Mount Bar',
      price: 5499,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Ultra-slim soundbar that blends with your TV',
      features: ['Ultra Slim', '2.1 Channel', 'Virtual Surround', 'HDMI ARC', 'Elegant Design'],
      specifications: {
        'Output Power': '150W',
        'Channels': '2.1',
        'Connectivity': 'HDMI ARC, Optical, Bluetooth',
        'Subwoofer': 'Wireless 50W',
        'Dolby Atmos': 'No',
        'Dimensions': '100cm soundbar'
      },
      rating: 4.5
    },
    {
      name: 'All-in-One Cinema',
      price: 7499,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'All-in-one soundbar with built-in subwoofer',
      features: ['Built-in Subwoofer', '3.0 Channel', 'No External Sub', 'HDMI ARC', 'Space Saving'],
      specifications: {
        'Output Power': '220W',
        'Channels': '3.0',
        'Connectivity': 'HDMI ARC, Optical, Bluetooth',
        'Subwoofer': 'Built-in',
        'Dolby Atmos': 'Virtual',
        'Dimensions': '100cm soundbar'
      },
      rating: 4.6
    },
    {
      name: 'Wireless TV Sound',
      price: 2999,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Basic wireless soundbar for TV audio upgrade',
      features: ['Wireless', '2.0 Channel', 'Easy Setup', 'Remote Control', 'Bluetooth'],
      specifications: {
        'Output Power': '60W',
        'Channels': '2.0',
        'Connectivity': 'Optical, Bluetooth',
        'Subwoofer': 'None',
        'Dolby Atmos': 'No',
        'Dimensions': '80cm soundbar'
      },
      rating: 4.2
    },
    {
      name: 'Premium Atmos Ultra',
      price: 24999,
      image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
      images: ['https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'],
      description: 'Flagship soundbar with ultimate home theater experience',
      features: ['9.1.4 Atmos', 'Wireless Everything', 'Room Calibration', '8K Passthrough', 'Premium Build'],
      specifications: {
        'Output Power': '800W',
        'Channels': '9.1.4',
        'Connectivity': 'HDMI eARC, Wi-Fi, Bluetooth',
        'Subwoofer': 'Dual Wireless 250W',
        'Dolby Atmos': 'Yes (9.1.4)',
        'Dimensions': '130cm soundbar'
      },
      rating: 5.0
    }
  ],
  smartwatches: [
    {
      name: 'Fit Pro Max',
      price: 4999,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Premium fitness smartwatch with all-day tracking',
      features: ['Heart Rate', 'SpO2', 'Sleep Tracking', '100+ Sports Modes', '7-Day Battery'],
      specifications: {
        'Display': '1.4" AMOLED',
        'Battery Life': '7 Days',
        'Water Resistance': '5ATM',
        'Sensors': 'HR, SpO2, Accelerometer',
        'Connectivity': 'Bluetooth 5.2',
        'Weight': '45g'
      },
      rating: 4.7
    },
    {
      name: 'Smart Active',
      price: 2999,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Affordable smartwatch for active lifestyle',
      features: ['Activity Tracking', 'Notifications', 'Music Control', '50+ Sports', '5-Day Battery'],
      specifications: {
        'Display': '1.3" TFT',
        'Battery Life': '5 Days',
        'Water Resistance': '3ATM',
        'Sensors': 'HR, Accelerometer',
        'Connectivity': 'Bluetooth 5.0',
        'Weight': '40g'
      },
      rating: 4.4
    },
    {
      name: 'Elite Sports Watch',
      price: 7999,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Professional sports watch with GPS and advanced metrics',
      features: ['Built-in GPS', 'Advanced Metrics', 'Route Tracking', 'VO2 Max', '10-Day Battery'],
      specifications: {
        'Display': '1.5" AMOLED',
        'Battery Life': '10 Days (30h GPS)',
        'Water Resistance': '10ATM',
        'Sensors': 'GPS, HR, SpO2, Altimeter',
        'Connectivity': 'Bluetooth 5.2',
        'Weight': '55g'
      },
      rating: 4.9
    },
    {
      name: 'Fashion Smart',
      price: 3499,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Stylish smartwatch with fashion-forward design',
      features: ['Stylish Design', 'AMOLED Display', 'Health Tracking', 'Multiple Watch Faces', '6-Day Battery'],
      specifications: {
        'Display': '1.4" AMOLED',
        'Battery Life': '6 Days',
        'Water Resistance': '5ATM',
        'Sensors': 'HR, SpO2',
        'Connectivity': 'Bluetooth 5.1',
        'Weight': '38g'
      },
      rating: 4.5
    },
    {
      name: 'Budget Fit Band',
      price: 1499,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Affordable fitness band for basic tracking',
      features: ['Step Counter', 'Heart Rate', 'Sleep Monitor', 'Call Alerts', '14-Day Battery'],
      specifications: {
        'Display': '0.96" LCD',
        'Battery Life': '14 Days',
        'Water Resistance': 'IP68',
        'Sensors': 'HR, Accelerometer',
        'Connectivity': 'Bluetooth 5.0',
        'Weight': '25g'
      },
      rating: 4.2
    },
    {
      name: 'Health Monitor Pro',
      price: 5999,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Health-focused smartwatch with medical-grade sensors',
      features: ['ECG Monitor', 'Blood Pressure', 'Stress Tracking', 'Women Health', '8-Day Battery'],
      specifications: {
        'Display': '1.4" AMOLED',
        'Battery Life': '8 Days',
        'Water Resistance': '5ATM',
        'Sensors': 'ECG, BP, HR, SpO2, Temp',
        'Connectivity': 'Bluetooth 5.2',
        'Weight': '48g'
      },
      rating: 4.8
    },
    {
      name: 'Kids Safety Watch',
      price: 2499,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Smartwatch for kids with GPS and safety features',
      features: ['GPS Tracking', 'SOS Button', 'Geofencing', 'Call Parents', '3-Day Battery'],
      specifications: {
        'Display': '1.2" LCD',
        'Battery Life': '3 Days',
        'Water Resistance': 'IP67',
        'Sensors': 'GPS, Accelerometer',
        'Connectivity': '4G + Bluetooth',
        'Weight': '35g'
      },
      rating: 4.6
    },
    {
      name: 'Rugged Outdoor',
      price: 6499,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Rugged smartwatch built for extreme conditions',
      features: ['Military Grade', 'Extreme Temperature', 'Compass', 'Barometer', '20-Day Battery'],
      specifications: {
        'Display': '1.3" MIP',
        'Battery Life': '20 Days',
        'Water Resistance': '10ATM + MIL-STD',
        'Sensors': 'GPS, Compass, Altimeter, HR',
        'Connectivity': 'Bluetooth 5.1',
        'Weight': '65g'
      },
      rating: 4.7
    },
    {
      name: 'Business Smart',
      price: 4499,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Professional smartwatch for business users',
      features: ['Email Sync', 'Calendar', 'Premium Build', 'Voice Calls', '7-Day Battery'],
      specifications: {
        'Display': '1.4" AMOLED',
        'Battery Life': '7 Days',
        'Water Resistance': '5ATM',
        'Sensors': 'HR, SpO2',
        'Connectivity': 'Bluetooth 5.2 + Wi-Fi',
        'Weight': '50g'
      },
      rating: 4.6
    },
    {
      name: 'Ultra Premium Flagship',
      price: 12999,
      image_url: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'],
      description: 'Flagship smartwatch with cutting-edge technology',
      features: ['Sapphire Glass', 'Titanium Body', 'Cellular', 'All Sensors', '14-Day Battery'],
      specifications: {
        'Display': '1.5" LTPO AMOLED',
        'Battery Life': '14 Days',
        'Water Resistance': '10ATM + IP68',
        'Sensors': 'All (ECG, BP, Temp, GPS)',
        'Connectivity': '4G + Wi-Fi + Bluetooth',
        'Weight': '60g'
      },
      rating: 5.0
    }
  ],
  accessories: [
    {
      name: 'Fast Charge 65W',
      price: 1299,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'GaN 65W fast charger for all devices',
      features: ['65W Output', 'GaN Technology', 'Dual Ports', 'Universal', 'Compact'],
      specifications: {
        'Output': '65W (USB-C PD)',
        'Ports': '2x USB-C',
        'Technology': 'GaN III',
        'Safety': 'Over-current Protection',
        'Cable': 'Not Included',
        'Weight': '120g'
      },
      rating: 4.7
    },
    {
      name: 'Power Bank 20000mAh',
      price: 1999,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'High-capacity power bank with fast charging',
      features: ['20000mAh', 'Fast Charging', '3 Ports', 'Digital Display', 'LED Torch'],
      specifications: {
        'Capacity': '20000mAh',
        'Input': 'USB-C 18W',
        'Output': '2x USB-A + 1x USB-C',
        'Max Output': '22.5W',
        'Charging Time': '6-8 hours',
        'Weight': '420g'
      },
      rating: 4.6
    },
    {
      name: 'USB-C Cable 3pack',
      price: 499,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'Premium braided USB-C cables (3-pack)',
      features: ['Braided Design', 'Fast Charging', '3 Lengths', 'Durable', '10000+ Bends'],
      specifications: {
        'Type': 'USB-C to USB-C',
        'Lengths': '1m, 1.5m, 2m',
        'Data Transfer': 'USB 3.1 (10Gbps)',
        'Power': 'Up to 100W PD',
        'Material': 'Nylon Braided',
        'Warranty': '1 Year'
      },
      rating: 4.5
    },
    {
      name: 'Wireless Charger Pad',
      price: 999,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: '15W wireless charging pad with LED indicator',
      features: ['15W Fast Wireless', 'LED Indicator', 'Anti-slip', 'Case Friendly', 'Safe Charging'],
      specifications: {
        'Output': '15W / 10W / 7.5W / 5W',
        'Input': 'USB-C 18W',
        'Compatibility': 'Qi-enabled Devices',
        'Safety': 'FOD, OTP, OVP',
        'Cable': 'Included (1m)',
        'Dimensions': '10cm diameter'
      },
      rating: 4.4
    },
    {
      name: '3-in-1 Wireless Stand',
      price: 2499,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'Charge phone, watch, and earbuds simultaneously',
      features: ['3-in-1 Design', 'Fast Charging', 'Premium Build', 'Adjustable Angle', 'LED Light'],
      specifications: {
        'Phone Output': '15W',
        'Watch Output': '3W',
        'Earbuds Output': '5W',
        'Input': 'USB-C 30W',
        'Material': 'Aluminum + Silicone',
        'Dimensions': '20cm x 15cm'
      },
      rating: 4.8
    },
    {
      name: 'Car Charger Dual Port',
      price: 699,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'Fast car charger with dual USB ports',
      features: ['36W Total', 'Dual Ports', 'LED Display', 'Smart Charging', 'Compact'],
      specifications: {
        'Output': '18W per port',
        'Ports': '2x USB-A',
        'Input': '12-24V DC',
        'Technology': 'QC 3.0',
        'Safety': 'Short Circuit Protection',
        'Weight': '25g'
      },
      rating: 4.5
    },
    {
      name: 'Lightning Cable MFi',
      price: 799,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'MFi certified Lightning cable for Apple devices',
      features: ['MFi Certified', 'Fast Charging', 'Braided', 'Durable', 'Data Sync'],
      specifications: {
        'Type': 'USB-A to Lightning',
        'Length': '2m',
        'Certification': 'Apple MFi',
        'Power': 'Up to 2.4A',
        'Material': 'Nylon Braided',
        'Warranty': '1 Year'
      },
      rating: 4.6
    },
    {
      name: 'Magnetic Cable 3-in-1',
      price: 899,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'Magnetic cable with 3 interchangeable tips',
      features: ['Magnetic', '3 Tips Included', 'One-hand Connection', 'LED Indicator', '540° Rotation'],
      specifications: {
        'Tips': 'USB-C, Lightning, Micro USB',
        'Length': '1.2m',
        'Power': 'Up to 3A',
        'Data Transfer': 'Yes',
        'Material': 'Nylon Braided',
        'Magnet Strength': 'Strong Hold'
      },
      rating: 4.5
    },
    {
      name: 'Mini Power Bank 5000mAh',
      price: 799,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'Pocket-sized power bank for emergencies',
      features: ['Ultra Compact', '5000mAh', 'Built-in Cable', 'Lightweight', 'Keychain Loop'],
      specifications: {
        'Capacity': '5000mAh',
        'Input': 'USB-C 10W',
        'Output': '12W',
        'Cable': 'Built-in USB-C',
        'Charging Time': '2-3 hours',
        'Weight': '120g'
      },
      rating: 4.3
    },
    {
      name: 'Multi-Port Hub 100W',
      price: 3499,
      image_url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg',
      images: ['https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'],
      description: 'Premium 100W GaN charger with 4 ports',
      features: ['100W Total', '4 Ports', 'GaN Technology', 'Intelligent Distribution', 'Travel Adapter'],
      specifications: {
        'Output': '100W Total',
        'Ports': '3x USB-C + 1x USB-A',
        'Technology': 'GaN III',
        'Max Single Port': '100W',
        'Safety': 'All Protections',
        'Weight': '200g'
      },
      rating: 4.9
    }
  ]
};

const faqs = [
  {
    question: 'What is the warranty period for your products?',
    answer: 'All our products come with a 1-year manufacturer warranty that covers manufacturing defects. This warranty does not cover physical damage, water damage (unless specified as waterproof), or wear and tear from normal use.',
    category: 'warranty'
  },
  {
    question: 'What is your return and refund policy?',
    answer: 'We offer a 7-day no-questions-asked return policy from the date of delivery. Products must be in original condition with all accessories, packaging, and tags intact. Refunds are processed within 5-7 business days after we receive the returned product.',
    category: 'returns'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days for most locations. Metro cities may receive orders within 2-3 days. Express shipping (1-2 days) is available for select cities at additional cost. Free shipping is available on orders above ₹999.',
    category: 'shipping'
  },
  {
    question: 'How long does it take to fully charge wireless earbuds?',
    answer: 'Most of our wireless earbuds take 1-2 hours to fully charge. The charging case typically takes 2-3 hours for a full charge. Many models support quick charging - 10 minutes of charging can provide 1-2 hours of playback.',
    category: 'products'
  },
  {
    question: 'Are your products water-resistant?',
    answer: 'Many of our products feature water resistance. IPX4 protects against water splashes, IPX5 against water jets, IPX7 means submersible in 1m water for 30 minutes. Check individual product specifications for exact ratings.',
    category: 'products'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, UPI payments, net banking, and digital wallets. Cash on Delivery (COD) is available for orders below ₹50,000. All payments are processed through secure payment gateways.',
    category: 'payment'
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes! Once your order is shipped, you will receive a tracking link via SMS and email. You can track your order in real-time using this link. You can also track your order from your account dashboard.',
    category: 'shipping'
  },
  {
    question: 'What is Active Noise Cancellation (ANC)?',
    answer: 'Active Noise Cancellation uses microphones to detect external sounds and generates opposite sound waves to cancel them out. This technology significantly reduces ambient noise, making it perfect for travel, work, or any noisy environment.',
    category: 'products'
  },
  {
    question: 'How do I connect my Bluetooth device?',
    answer: 'Turn on your device\'s Bluetooth, then press and hold the power button on your audio device until the LED flashes. Select the device name from your phone\'s Bluetooth list. For TWS earbuds, they usually auto-pair when removed from the case.',
    category: 'support'
  },
  {
    question: 'What is the difference between IPX ratings?',
    answer: 'IPX4: Splash-proof (light rain, sweat). IPX5: Water jet resistant (heavy rain, gym). IPX6: Powerful water jets. IPX7: Submersible up to 1m for 30 minutes. IPX8: Submersible beyond 1m. Higher numbers offer better water protection.',
    category: 'products'
  },
  {
    question: 'Do you offer EMI options?',
    answer: 'Yes! We offer No Cost EMI options on orders above ₹3,000 through select credit cards and digital payment providers. EMI tenure ranges from 3 to 12 months depending on the order value. Check at checkout for availability.',
    category: 'payment'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team via email at support@audiostore.com, call us at 1800-123-4567 (Mon-Sat, 9 AM - 6 PM), or use the chat widget on our website. We typically respond to emails within 24 hours.',
    category: 'support'
  }
];

async function seedDatabase() {
  console.log('🌱 Starting database seed...\n');

  console.log('📦 Inserting categories...');
  const { data: insertedCategories, error: categoryError } = await supabase
    .from('categories')
    .upsert(categories, { onConflict: 'slug' })
    .select();

  if (categoryError) {
    console.error('Error inserting categories:', categoryError);
    return;
  }

  console.log(`✅ Inserted ${insertedCategories.length} categories\n`);

  const categoryMap = {};
  insertedCategories.forEach(cat => {
    categoryMap[cat.slug] = cat.id;
  });

  console.log('📱 Inserting products...');
  let totalProducts = 0;

  for (const [categorySlug, productList] of Object.entries(products)) {
    const categoryId = categoryMap[categorySlug];

    const productsWithCategory = productList.map(product => ({
      ...product,
      category_id: categoryId
    }));

    const { data: insertedProducts, error: productError } = await supabase
      .from('products')
      .insert(productsWithCategory)
      .select();

    if (productError) {
      console.error(`Error inserting ${categorySlug} products:`, productError);
      continue;
    }

    console.log(`  ✅ Inserted ${insertedProducts.length} ${categorySlug}`);
    totalProducts += insertedProducts.length;
  }

  console.log(`\n✅ Total products inserted: ${totalProducts}\n`);

  console.log('❓ Inserting FAQs...');
  const { data: insertedFaqs, error: faqError } = await supabase
    .from('faqs')
    .insert(faqs)
    .select();

  if (faqError) {
    console.error('Error inserting FAQs:', faqError);
    return;
  }

  console.log(`✅ Inserted ${insertedFaqs.length} FAQs\n`);

  console.log('🎉 Database seeding completed successfully!');
  console.log(`\nSummary:`);
  console.log(`  - Categories: ${insertedCategories.length}`);
  console.log(`  - Products: ${totalProducts}`);
  console.log(`  - FAQs: ${insertedFaqs.length}`);
}

seedDatabase().catch(console.error);

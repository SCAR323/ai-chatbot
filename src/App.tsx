import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import Compare from './pages/Compare';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

type Page =
  | 'home'
  | 'products'
  | 'category-earbuds'
  | 'category-headphones'
  | 'category-speakers'
  | 'category-soundbars'
  | 'category-smartwatches'
  | 'category-accessories'
  | 'product-details'
  | 'compare'
  | 'about'
  | 'contact'
  | 'faq';

interface NavigationState {
  page: Page;
  data?: any;
}

function App() {
  const [navigation, setNavigation] = useState<NavigationState>({
    page: 'home',
  });

  const handleNavigate = (page: string, data?: any) => {
    setNavigation({ page: page as Page, data });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (navigation.page) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'category-earbuds':
        return <CategoryPage categorySlug="earbuds" onNavigate={handleNavigate} />;
      case 'category-headphones':
        return <CategoryPage categorySlug="headphones" onNavigate={handleNavigate} />;
      case 'category-speakers':
        return <CategoryPage categorySlug="speakers" onNavigate={handleNavigate} />;
      case 'category-soundbars':
        return <CategoryPage categorySlug="soundbars" onNavigate={handleNavigate} />;
      case 'category-smartwatches':
        return <CategoryPage categorySlug="smartwatches" onNavigate={handleNavigate} />;
      case 'category-accessories':
        return <CategoryPage categorySlug="accessories" onNavigate={handleNavigate} />;
      case 'product-details':
        return (
          <ProductDetails
            productId={navigation.data?.productId}
            onNavigate={handleNavigate}
          />
        );
      case 'compare':
        return <Compare onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={navigation.page} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <ChatWidget />
    </div>
  );
}

export default App;

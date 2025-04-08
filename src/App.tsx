import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <div className="relative">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;

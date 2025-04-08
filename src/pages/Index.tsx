import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const siteMetadata = {
  title: "ALAVI - Digital Agency",
  description: "We create beautiful and functional digital experiences",
  keywords: "digital agency, web design, web development, branding, UI/UX",
  author: "ALAVI",
  ogImage: "/og-image.jpg",
  twitterHandle: "@alaviagency",
  siteUrl: "https://alavi.agency"
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="author" content={siteMetadata.author} />
        
        {/* Open Graph */}
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={siteMetadata.ogImage} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={siteMetadata.ogImage} />
        <meta name="twitter:creator" content={siteMetadata.twitterHandle} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />
        
        <main id="main-content" className="relative">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;

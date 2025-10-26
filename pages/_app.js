import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles.css';

// Import Google Fonts
const fontHref = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';

// Default SEO configuration
const defaultSEO = {
  title: 'Adoods - Premium T-Shirts & Apparel',
  description: 'Discover our premium collection of t-shirts. Comfortable, stylish, and made to last.',
  keywords: 't-shirts, apparel, fashion, clothing, premium t-shirts',
  siteUrl: 'https://youraddress.com',
  image: 'https://youraddress.com/img/banner.png',
  twitter: '@youraddress'
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Set up page view tracking
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Here you can add analytics tracking
      // Example: window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: url });
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Get page-specific SEO data or use defaults
  const seo = {
    ...defaultSEO,
    ...(pageProps.seo || {})
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link href={fontHref} rel="stylesheet" />
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
        <meta name="author" content="Adoods" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${seo.siteUrl}${router.asPath}`} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:site_name" content="Adoods" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${seo.siteUrl}${router.asPath}`} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        {seo.twitter && <meta name="twitter:creator" content={seo.twitter} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`${seo.siteUrl}${router.asPath}`} />
        
        <title>{seo.title}</title>
      </Head>
      
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

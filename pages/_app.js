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
  keywords: 't-shirts, apparel, fashion, clothing, premium t-shirts'
};

// Global styles with fixed header support
const globalStyles = `
  html, body, #__next {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  
  /* Ensure the main content starts below the fixed header */
  body {
    padding-top: 80px; /* Match this with your header height */
    min-height: 100vh;
    box-sizing: border-box;
  }
  
  /* Reset box-sizing for all elements */
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button, a {
    cursor: pointer;
  }
`;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Simple route change handler for analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Optional: Add analytics here
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  // Merge SEO data
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href={fontHref} rel="stylesheet" />
        <style>{globalStyles}</style>
      </Head>
      
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  // Optional GA4 loader if VITE_GA_ID is provided
  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID;
    if (!GA_ID) return;
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    const s2 = document.createElement('script');
    s2.innerHTML = `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${GA_ID}');`;
    document.head.appendChild(s1);
    document.head.appendChild(s2);
    return () => {
      document.head.removeChild(s1);
      document.head.removeChild(s2);
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

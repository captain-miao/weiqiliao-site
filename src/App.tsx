import React from 'react';
import Header from './components/Header';
import ProductIntro from './components/ProductIntro';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <ProductIntro />
        <FAQ />
        <Pricing />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Sticky Widgets (CRO Boosters) */}
      
      {/* Sticky WhatsApp Floating Icon */}
      <a
        href="https://wa.me/91873293404?text=Hi!%20I%20am%20interested%20in%20Lakeshore%20Women's%20Mess.%20Please%20share%20room%20availability."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center border border-white/20"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={24} className="fill-white text-green-500" />
      </a>

      {/* Mobile Sticky Quick Action Bar (Call/Book) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-panel py-3 px-4 shadow-2xl border-t border-blueGrey/20 flex gap-4">
        <a
          href="tel:+91873293404"
          className="flex-1 flex items-center justify-center space-x-2 bg-coffee text-white py-3 rounded-xl font-bold text-sm hover:bg-chocolate transition-colors"
        >
          <Phone size={16} />
          <span>Call Support</span>
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center bg-chocolate text-white py-3 rounded-xl font-bold text-sm hover:bg-coffee transition-colors"
        >
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
}

export default App;

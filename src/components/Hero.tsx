import React from 'react';
import { ShieldCheck, Coffee, BookOpen, ChevronRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-ivory alpana-pattern">
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-chocolate/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coffee/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-chocolate/10 border border-chocolate/20 px-4 py-1.5 rounded-full text-chocolate text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-chocolate animate-pulse" />
            <span>Admission Open for 2026 Session</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-coffee">
            <span className="font-bengali block text-2xl sm:text-3xl lg:text-4xl text-chocolate font-medium mb-3">
              নিজের বাড়ির মতন নিরাপদ, পড়াশোনার আদর্শ পরিবেশ।
            </span>
            Premium Girls' Hostel in Dharma, Midnapore
          </h1>

          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            The #1 choice for students of Vidyasagar University and Midnapore College. At Lakeshore Women's Mess, we provide a secure, comfortable, and study-friendly environment with hygienic home-cooked meals. Your perfect second home.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-chocolate text-white px-8 py-4 rounded-xl font-semibold hover:bg-coffee transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-chocolate/20"
            >
              <span>Book A Seat</span>
              <ChevronRight size={18} />
            </a>
            
            <a
              href="https://wa.me/91873293404?text=Hi!%20I%20am%20interested%20in%20Lakeshore%20Women's%20Mess.%20Please%20share%20room%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-coffee border border-blueGrey/30 px-8 py-4 rounded-xl font-semibold hover:bg-warmOffWhite transition-all duration-300 shadow-sm"
            >
              <MessageSquare size={18} className="text-green-600 fill-green-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="pt-6 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start space-y-1">
              <div className="flex items-center text-chocolate">
                <ShieldCheck size={20} className="mr-1.5" />
                <span className="font-bold text-coffee">100% Secure</span>
              </div>
              <span className="text-xs text-charcoal/60">CCTV & Female Warden</span>
            </div>
            <div className="flex flex-col items-center lg:items-start space-y-1">
              <div className="flex items-center text-chocolate">
                <Coffee size={20} className="mr-1.5" />
                <span className="font-bold text-coffee">Hygienic Food</span>
              </div>
              <span className="text-xs text-charcoal/60">3 Home-style Meals Daily</span>
            </div>
            <div className="flex flex-col items-center lg:items-start space-y-1">
              <div className="flex items-center text-chocolate">
                <BookOpen size={20} className="mr-1.5" />
                <span className="font-bold text-coffee">Peaceful</span>
              </div>
              <span className="text-xs text-charcoal/60">Study-friendly Ambiance</span>
            </div>
          </div>
        </div>

        {/* Right Graphic/Image Column with Glassmorphic Card */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Main Frame */}
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
            <img
              src="/images/building.png"
              alt="Lakeshore Women's Mess Building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-transparent to-transparent" />
            
            {/* Embedded Floating Glass Info */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel text-left">
              <p className="text-xs uppercase tracking-wider text-chocolate font-bold">Safe Accommodation for Women</p>
              <h3 className="text-lg font-bold text-coffee leading-snug mt-1">
                Dewan Pukurparh, Dharma, Midnapore
              </h3>
              <p className="text-xs text-charcoal/80 font-bengali mt-1">
                লেকসাইডের মনোরম পরিবেশ ও স্বাস্থ্যকর লাইফস্টাইল।
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-white py-3 px-5 rounded-2xl shadow-xl border border-warmOffWhite flex items-center space-x-3 animate-bounce duration-1000">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
              ★
            </div>
            <div>
              <p className="text-xs text-charcoal/60 leading-none">Google Reviews</p>
              <p className="text-sm font-bold text-coffee">4.2/5.0 Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

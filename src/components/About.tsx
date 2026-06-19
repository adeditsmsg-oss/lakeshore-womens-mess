import React from 'react';
import { Home, Users, CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Home-like Environment',
      description: 'A quiet, disciplined, and family-like atmosphere optimal for study and healthy living.',
      icon: Home
    },
    {
      title: 'Resident Warden & Staff',
      description: '24/7 on-campus warden support to ensure immediate assistance and oversight.',
      icon: Users
    },
    {
      title: 'Daily Housekeeping & Hygiene',
      description: 'Dedicated cleaning service maintaining spotless rooms, corridors, and washrooms daily.',
      icon: CheckCircle
    }
  ];

  return (
    <section id="about" className="py-20 bg-warmOffWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  className="rounded-2xl object-cover aspect-[3/4] shadow-md border-2 border-white transform hover:scale-[1.02] transition-transform duration-300"
                  src="/images/dining.png"
                  alt="Lakeshore Common Dining Hall"
                />
                <div className="bg-chocolate p-6 rounded-2xl text-white shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold block">2019</span>
                  <span className="text-xs uppercase tracking-wider font-semibold font-bengali">স্থাপিত (Estd.)</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-blueGrey/20 text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold text-chocolate block">60+</span>
                  <span className="text-xs text-charcoal/60 uppercase tracking-wider font-semibold">Active Boarders</span>
                </div>
                <img
                  className="rounded-2xl object-cover aspect-[3/4] shadow-md border-2 border-white transform hover:scale-[1.02] transition-transform duration-300"
                  src="/images/bedroom.png"
                  alt="Comfortable Room Setup"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Highlights */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-chocolate font-bengali">আমাদের সম্পর্কে (About Us)</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-coffee mt-2 leading-tight">
                The Safest Hub for Female Students in Dharma
              </h2>
              <p className="text-charcoal/80 mt-4 leading-relaxed">
                Lakeshore Women's Mess has been providing high-quality, secure women's housing in the Dharma area of Midnapore since 2019. We believe that a quiet and clean environment is essential for academic excellence. That is why we dedicate ourselves to professional management, security, and wholesome food.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-chocolate/10 text-chocolate rounded-xl">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-coffee">{item.title}</h3>
                    <p className="text-sm text-charcoal/70 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

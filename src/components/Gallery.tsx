import React, { useState } from 'react';

export default function Gallery() {
  const images = [
    {
      title: 'Hostel Building Exterior',
      desc: 'Secure multi-story residential building located in Dharma, Midnapore.',
      url: '/images/building.png',
      category: 'building'
    },
    {
      title: 'Cozy Bedrooms',
      desc: 'Clean wooden beds with colorful linens, study desks, and shelves.',
      url: '/images/bedroom.png',
      category: 'rooms'
    },
    {
      title: 'Daily Nutritious Food',
      desc: 'Wholesome home-style cooked meals served daily.',
      url: '/images/food.png',
      category: 'food'
    },
    {
      title: 'Spacious Common Dining Hall',
      desc: 'Clean dining tables and seating area for all boarders.',
      url: '/images/dining.png',
      category: 'amenities'
    },
    {
      title: 'Clean Hygienic Washrooms',
      desc: 'Well-maintained bathrooms cleaned daily with standard fittings.',
      url: '/images/bathroom.png',
      category: 'rooms'
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-warmOffWhite border-t border-blueGrey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-chocolate font-bengali">ছবি গ্যালারি (Gallery)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Explore Lakeshore Women's Mess</h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            Take a visual tour around our campus building, bedrooms, dining area, and facilities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['all', 'rooms', 'food', 'amenities', 'building'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                filter === cat
                  ? 'bg-chocolate text-white shadow-md'
                  : 'bg-white text-coffee hover:bg-white/80 border border-blueGrey/30'
              }`}
            >
              {cat === 'all' ? 'All Photos' : cat === 'rooms' ? 'Rooms & Bathrooms' : cat === 'food' ? 'Food' : cat === 'amenities' ? 'Dining & Lobby' : 'Building'}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-md bg-white border border-blueGrey/20 aspect-video sm:aspect-square transform hover:scale-[1.02] transition-all duration-500"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-xs uppercase tracking-wider text-chocolate font-bold mb-1">
                  {img.category === 'rooms' ? 'Rooms & Bathrooms' : img.category === 'food' ? 'Dining & Kitchen' : 'General Amenities'}
                </span>
                <h4 className="text-lg font-bold">{img.title}</h4>
                <p className="text-xs text-white/80 mt-1">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

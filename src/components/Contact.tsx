import React, { useState } from 'react';
import { Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'double',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    // Simulate successful form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', roomType: 'double', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-ivory text-coffee border-t border-blueGrey/20 alpana-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-chocolate font-bengali">যোগাযোগ করুন (Contact)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Book Your Seat / Enquire Today</h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            Ready to visit the hostel or ask a question? Fill out our enquiry form below, and we will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-warmOffWhite space-y-6">
              <h3 className="text-xl font-bold">Contact Details</h3>
              
              <div className="space-y-4">
                <a href="tel:+91873293404" className="flex items-start space-x-4 p-3 rounded-xl hover:bg-warmOffWhite transition-colors">
                  <div className="p-3 bg-chocolate/10 text-chocolate rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/60 leading-none">Call Support</p>
                    <p className="text-base font-bold text-coffee mt-1">+91 87329 3404</p>
                  </div>
                </a>

                <a href="https://wa.me/91873293404" className="flex items-start space-x-4 p-3 rounded-xl hover:bg-warmOffWhite transition-colors">
                  <div className="p-3 bg-green-500/10 text-green-600 rounded-xl">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/60 leading-none">WhatsApp Chat</p>
                    <p className="text-base font-bold text-green-600 mt-1">Chat in WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-3 rounded-xl">
                  <div className="p-3 bg-chocolate/10 text-chocolate rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/60 leading-none">Address</p>
                    <p className="text-base font-bold text-coffee mt-1 leading-snug">
                      Dewan Pukurparh, Mallick Chawk,<br />
                      Dharma, Midnapore, West Bengal 721101
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map (CRO Trust Builder) */}
            <div className="rounded-[2rem] overflow-hidden shadow-lg border border-blueGrey/20 h-[300px]">
              <iframe
                title="Lakeshore Womens Mess Location Map"
                src="https://maps.google.com/maps?q=Lakeshore%20Women's%20mess,%20Dharma,%20Midnapore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-warmOffWhite">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-coffee font-bengali">ধন্যবাদ! আমরা পেয়ে গেছি</h3>
                <p className="text-charcoal/70 font-bengali max-w-sm mx-auto">
                  Your enquiry has been submitted. Our mess supervisor will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-coffee">Room Enquiry Form</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/70 font-bold mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-warmOffWhite border border-blueGrey/20 rounded-xl text-coffee focus:border-chocolate focus:ring-1 focus:ring-chocolate outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/70 font-bold mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-warmOffWhite border border-blueGrey/20 rounded-xl text-coffee focus:border-chocolate focus:ring-1 focus:ring-chocolate outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal/70 font-bold mb-2">Room Preference</label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-4 py-3 bg-warmOffWhite border border-blueGrey/20 rounded-xl text-coffee focus:border-chocolate focus:ring-1 focus:ring-chocolate outline-none transition-colors"
                  >
                    <option value="single">Single Room</option>
                    <option value="double">Double Sharing</option>
                    <option value="multi">Multi Sharing (3-4 Bed)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal/70 font-bold mb-2">Your Message / Queries</label>
                  <textarea
                    rows={4}
                    placeholder="When do you plan to move in? Let us know if you have specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-warmOffWhite border border-blueGrey/20 rounded-xl text-coffee focus:border-chocolate focus:ring-1 focus:ring-chocolate outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-chocolate text-white py-4 rounded-xl font-bold hover:bg-coffee transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-chocolate/10"
                >
                  <Send size={18} />
                  <span>Submit Enquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

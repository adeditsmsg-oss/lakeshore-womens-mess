import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'What facilities are included in the monthly rent?',
      a: 'Our monthly rent covers accommodation (bed, study table, wardrobe), 3 daily home-style meals, high-speed Wi-Fi, water supply, daily housekeeping cleaning, and 24/7 security/CCTV support. There are zero hidden fees.'
    },
    {
      q: 'How much security deposit or advance is required?',
      a: 'We require a 1-month security deposit and the current month’s rent in advance at the time of admission. The security deposit is fully refundable when you leave, provided you give a 1-month advance notice.'
    },
    {
      q: 'What are the curfew timings of the hostel?',
      a: 'For safety, the main gate closes at 9:30 PM. In case of late college classes or examinations, boarders can enter later with prior written permission from the warden.'
    },
    {
      q: 'What type of food is served on the daily menu?',
      a: 'We serve fresh, nutritious home-cooked Bengali meals. Breakfast, lunch (rice, dal, sabji, fish/egg/chicken), and dinner (roti/rice, curry) are cooked daily in our clean on-site kitchen.'
    },
    {
      q: 'Can parents visit or stay at the hostel?',
      a: 'Mothers can stay overnight in guest rooms with prior warden permission (guest charges apply). Fathers and male relatives are only allowed to meet boarders in the common lobby/visitor waiting lounge.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-warmOffWhite border-t border-blueGrey/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-chocolate font-bengali">জিজ্ঞাসাবাদ (FAQ)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-coffee">Frequently Asked Questions</h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            Find answers to common queries regarding rules, facilities, and the admission process.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-blueGrey/20 overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex justify-between items-center text-coffee hover:text-chocolate transition-colors font-semibold"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <span className="ml-4 p-1.5 bg-warmOffWhite text-chocolate rounded-lg flex-shrink-0">
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] border-t border-blueGrey/10 p-6' : 'max-h-0 pointer-events-none'
                } overflow-hidden bg-ivory/40`}
              >
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

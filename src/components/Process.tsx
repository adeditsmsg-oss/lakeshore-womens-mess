import React from 'react';
import { FormInput, Eye, Key } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Online Enquiry',
      description: 'Fill out the booking form or contact us directly via WhatsApp / phone calls.',
      icon: FormInput
    },
    {
      step: '02',
      title: 'Site Visit',
      description: 'Visit the mess in Dharma to inspect the rooms, hygiene, washrooms, and food quality.',
      icon: Eye
    },
    {
      step: '03',
      title: 'Instant Booking',
      description: 'Select your preferred bed sharing, pay the advance deposit, and move in right away.',
      icon: Key
    }
  ];

  return (
    <section className="py-20 bg-ivory text-coffee border-t border-blueGrey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-chocolate font-bengali">ভর্তির সহজ পদ্ধতি (Process)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">How to Secure Your Seat</h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            Booking a safe space for your study years in Midnapore takes only 3 simple, transparent steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-chocolate/10 -translate-y-1/2 pointer-events-none" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-blueGrey/20 relative z-10 hover:border-chocolate transition-all duration-300 text-center space-y-4 hover:shadow-lg"
            >
              <div className="absolute top-4 right-4 text-chocolate/20 text-3xl font-extrabold font-bengali">
                {step.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-chocolate/10 text-chocolate flex items-center justify-center mx-auto">
                <step.icon size={28} />
              </div>
              <h3 className="font-bold text-lg text-coffee">{step.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

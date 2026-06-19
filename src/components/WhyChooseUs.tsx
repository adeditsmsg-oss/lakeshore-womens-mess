import React from 'react';
import { ShieldCheck, Utensils, Sparkles, Ban } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Uncompromised Gated Security',
      description: 'CCTV surveillance cameras across key entry points and standard boundary walls. Outer visitors are restricted from direct entry.',
      icon: ShieldCheck,
    },
    {
      title: 'Hygienic Home-cooked Meals',
      description: 'Daily fresh, nutritious Bengali meals prepared on-campus (rice, dal, sabji, fish/chicken, and light evening snacks). No unhygienic takeout.',
      icon: Utensils,
    },
    {
      title: 'Active Daily Cleaning Service',
      description: 'Our housekeeping staff cleans all common bathrooms, walkways, and stairs daily to prevent health issues.',
      icon: Sparkles,
    },
    {
      title: 'Transparent Pricing Policy',
      description: 'Wi-Fi, water, housekeeping, and standard power backup are covered in the rent. No sudden hidden charges.',
      icon: Ban,
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-warmOffWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-chocolate font-bengali">কেন আমরা সেরা (Why Choose Us)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-coffee">
            What Makes Lakeshore Different?
          </h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            Unlike average local student messes in Midnapore, we run a highly structured, clean, and professionally managed women's PG hostel.
          </p>
        </div>

        {/* Grid and Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* List of Benefits */}
          <div className="lg:col-span-7 space-y-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-blueGrey/20 hover:border-chocolate transition-all duration-300 shadow-sm flex items-start space-x-4"
              >
                <div className="p-3 bg-chocolate/10 text-chocolate rounded-xl">
                  <point.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee text-lg">{point.title}</h4>
                  <p className="text-sm text-charcoal/70 mt-1 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Callout Card */}
          <div className="lg:col-span-5 bg-coffee text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-chocolate/20 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold leading-tight font-bengali">
              অভিভাবকদের জন্য সম্পূর্ণ নিশ্চিন্ততা!
            </h3>
            
            <p className="text-white/80 text-sm mt-4 leading-relaxed">
              We offer safe, parent-like guardianship to all our boarders. Rest easy knowing that hygiene, health, and comfort are managed professionally.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold">Immediate Emergency Medical Assistance</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold">Quiet Lakeside Location for Concentration</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center lg:text-left">
              <p className="text-xs text-white/60">For admissions and query lines:</p>
              <a
                href="tel:+91873293404"
                className="mt-2 inline-block bg-chocolate hover:bg-white hover:text-coffee text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md text-sm"
              >
                Call: +91 87329 3404
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

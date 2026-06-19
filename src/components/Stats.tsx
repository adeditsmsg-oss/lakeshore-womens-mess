import React from 'react';

export default function Stats() {
  const stats = [
    { value: '5+', label: 'Years of Care', desc: 'Serving Midnapore boarders since 2019.' },
    { value: '300+', label: 'Students Hosted', desc: 'Trusted by college and university boarders.' },
    { value: '100%', label: 'Security Record', desc: 'No-incident safety record since launch.' },
    { value: '3 Meals', label: 'Warm Daily Dining', desc: 'Nutritious home-cooked food.' }
  ];

  return (
    <section className="py-16 bg-coffee text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 alpana-pattern" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 group">
              <span className="text-4xl sm:text-5xl font-extrabold text-chocolate block transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </span>
              <h4 className="font-bold text-sm sm:text-base text-white/90">
                {stat.label}
              </h4>
              <p className="text-xs text-white/60">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Riya Dey',
      role: 'Student, Vidyasagar University',
      rating: 5,
      comment: 'লেকশোর উইমেন্স মেসের ঘরগুলো খুব পরিষ্কার এবং সুন্দর। ধর্মায় পড়াশোনা করার জন্য এর থেকে ভালো পরিবেশ আমি পাইনি। ম্যানেজমেন্টের ব্যবহার খুব ভালো।',
      date: '৩ মাস আগে (3 months ago)'
    },
    {
      name: 'Amitava Sen',
      role: 'অভিভাবক (Parent), Kharagpur',
      rating: 5,
      comment: 'আমার মেয়ে এক বছর ধরে এখানে থাকছে। অভিভাবক হিসেবে আমি ওর নিরাপত্তা নিয়ে সম্পূর্ণ নিশ্চিন্ত। সিকিউরিটি গেট এবং সিসিটিভি ক্যামেরা সবসময় সক্রিয় থাকে। খাবারও বেশ ভালো ও স্বাস্থ্যকর।',
      date: '৬ মাস আগে (6 months ago)'
    },
    {
      name: 'Sneha Roy',
      role: 'Post Graduate Student',
      rating: 4,
      comment: 'লেকসাইডের শান্ত হাওয়া এবং নিরিবিলি পরিবেশ পড়ার জন্য আদর্শ। অন্যান্য মেসের মতন এখানে কারেন্ট বা জলের সমস্যা নেই। খাবার ঘরোয়া স্বাদের মতন হয়।',
      date: '১ মাস আগে (1 month ago)'
    },
    {
      name: 'Payel Dutta',
      role: 'Working Professional, Midnapore',
      rating: 4,
      comment: 'অত্যন্ত সাশ্রয়ী ভাড়ার মধ্যে চমৎকার ওয়াই-ফাই এবং সিকিউরিটির সুবিধা। চাকরিজীবীদের জন্যও এটি খুব আরামদায়ক থাকার জায়গা।',
      date: '২ সপ্তাহ আগে (2 weeks ago)'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-ivory text-coffee border-t border-blueGrey/20 alpana-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-chocolate font-bengali">ছাত্রী ও অভিভাবকদের মতামত (Testimonials)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">What Boarders & Parents Say</h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            Read direct reviews and feedback from girls and parents residing in our hostel.
          </p>
        </div>

        {/* Testimonial slider / grid */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Card Container */}
          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-warmOffWhite relative min-h-[300px] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Rating stars */}
              <div className="flex items-center space-x-1 text-chocolate">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-chocolate text-chocolate" />
                ))}
                {[...Array(5 - reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-blueGrey/40" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-xl font-medium text-coffee italic font-bengali leading-relaxed">
                "{reviews[currentIndex].comment}"
              </p>
            </div>

            {/* Author info */}
            <div className="mt-8 pt-6 border-t border-blueGrey/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-chocolate/10 text-chocolate flex items-center justify-center">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee text-base">{reviews[currentIndex].name}</h4>
                  <p className="text-xs text-charcoal/60 font-medium">{reviews[currentIndex].role}</p>
                </div>
              </div>
              
              <div className="text-xs text-charcoal/40 font-bengali self-start sm:self-center">
                {reviews[currentIndex].date}
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute bottom-6 right-8 text-chocolate/5 text-9xl font-serif pointer-events-none select-none">
              ”
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white border border-blueGrey/30 hover:border-chocolate hover:text-chocolate rounded-full text-coffee transition-colors shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white border border-blueGrey/30 hover:border-chocolate hover:text-chocolate rounded-full text-coffee transition-colors shadow-sm"
              aria-label="Next Testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

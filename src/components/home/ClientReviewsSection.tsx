import React from 'react';
import { BUSINESS_INFO } from '../../data/siteData';
import { ArrowUpRight, Star } from 'lucide-react';

interface Review {
  name: string;
  date: string;
  text: string;
}

const REVIEWS: Review[] = [
  { name: 'Rekha', date: '13 Aug 2025', text: 'I had a great experience with Designplus Architects and Structural Consultants! Their quotation was easy to understand and very cost-efficient. They responded quickly to my request and provided speedy service. I also appreciated the flexible appointment options. Overall, their prices are reasonable, and I highly recommend them!' },
  { name: 'Sudhir Soni', date: '9 Oct 2025', text: 'Excellent! I constructed my house at Bhawani Kheda village and it is the best planned house. Very good services given by Mr. Ankur Soni. I suggest everybody to first get vastu consultancy from Design Plus.' },
  { name: 'Krishan Swaroop Verma', date: '28 Nov 2018', text: 'An organization of trained as well as experienced professionals. We are very much satisfied with their services.' },
  { name: 'Naman Soni', date: '27 Nov 2018', text: 'Thoroughly impressed with the working methodology and mechanism. Super professional personnel.' },
  { name: 'Bintu', date: '15 Sep 2022', text: 'Very talented... perfect designs... fully satisfying work.' },
  { name: 'Ram Kishan Soni', date: '28 Nov 2018', text: 'Very experienced professional with best services and construction ideas.' }
];

export function ClientReviewsSection() {
  return (
    <section className="py-20 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-editorial text-4xl text-stone-950 font-normal mb-4">What Clients Say</h2>
          <p className="text-stone-600 font-medium tracking-wide">4.8/5 from 43+ client ratings on JustDial</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-white p-8 border border-stone-200 flex flex-col justify-between">
              <p className="text-stone-700 italic leading-relaxed mb-6">"{review.text}"</p>
              <div>
                <div className="font-bold text-stone-950 mb-1">{review.name}</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider">{review.date} · via JustDial</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors"
          >
            View on Google Maps
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C86635] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#b5582a] transition-colors"
          >
            Review us on Google
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

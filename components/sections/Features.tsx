// components/sections/BuyerLeadsFeatures.jsx
'use client';
import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting];
}

export default function Features() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });

  const features = [
    {
      title: "Targeted Prospect Lists",
      description: "Hand-built prospect lists matching your buyer persona, industry, company size and technographic filters."
    },
    {
      title: "Human-Verified Contacts",
      description: "No scraped junk — every lead is phone or video verified and consent-checked for outreach compliance."
    },
    {
      title: "Appointment-Ready Leads",
      description: "We deliver leads with confirmed interest or booked demo slots — ready for your AE to convert."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 mx-auto px-5 pt-1.5"
    >
      <h2 
        className="text-2xl font-bold text-[#0f172a] mb-5"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        What We Provide
      </h2>
      
      <div className="grid md:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-[0_6px_20px_rgba(16,24,40,0.08)]"
            style={{
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'none' : 'translateY(30px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: `${200 + index * 150}ms`
            }}
          >
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
              {feature.title}
            </h3>
            <p className="text-[#64748b] text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

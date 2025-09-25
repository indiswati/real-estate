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

export default function SellerFeatures() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });

  const features = [
    {
      title: "Exclusive Real Estate Focus",
      description: "Unlike generic lead providers, we specialise in seller leads for real estate, ensuring higher conversion rates and relevance."
    },
    {
      title: "Data-Driven Targeting",
      description: "Our proprietary algorithms and 20 years of insights help identify motivated property owners ready to sell."
    },
    {
      title: "Verified & Qualified Leads",
      description: "Every lead undergoes human verification to ensure accuracy, intent, and compliance with industry standards."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="max-w-[1150px] mb-10 mx-auto px-5 pt-1.5"
    >
      <h2 
        className="text-2xl font-bold text-[#0f172a] mb-5"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        Why Choose L4RG Seller Leads?
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

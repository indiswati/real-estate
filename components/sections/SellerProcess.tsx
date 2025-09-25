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

export default function SellerProcess() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });

  const steps = [
    {
      num: "1",
      title: "Discovery & Targeting",
      description: "We align with your agency goals and identify seller profiles within chosen locations."
    },
    {
      num: "2",
      title: "Data Collection",
      description: "Property records, online behaviour, and intent signals are analysed for accuracy."
    },
    {
      num: "3",
      title: "Qualification",
      description: "Our team verifies seller readiness via calls, surveys, and digital tracking."
    },
    {
      num: "4",
      title: "Lead Delivery",
      description: "Qualified seller leads are delivered to your CRM or email inbox in real-time."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="max-w-[1150px] mx-auto px-4 sm:px-5 py-8 lg:py-16"
    >
      {/* Responsive Heading */}
      <h2 
        className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0f172a] mb-4 lg:mb-5 text-center lg:text-left"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        Our Process — From Lead to Listing
      </h2>

      {/* Responsive Grid Layout */}
      <div 
        className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-6 lg:gap-[22px] items-start mt-4 lg:mt-4"
      >
        {/* Steps Column */}
        <div 
          className="flex flex-col order-2 lg:order-1"
          style={{ gap: '14px' }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-3 lg:p-[12px] rounded-xl lg:rounded-[12px]"
              style={{
                gap: '12px',
                boxShadow: '0 8px 30px rgba(9,30,66,0.03)',
                opacity: isSectionVisible ? 1 : 0,
                transform: isSectionVisible ? 'none' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${200 + index * 150}ms`
              }}
            >
              {/* Responsive Number Circle */}
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0"
                style={{
                  minWidth: '32px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                }}
                // Large screen styles
                data-lg-style={{
                  minWidth: '40px',
                  width: '40px', 
                  height: '40px',
                  borderRadius: '10px'
                }}
              >
                {step.num}
              </div>
              
              <div className="flex-1">
                <strong className="block text-[#0f172a] text-sm lg:text-base mb-1">
                  {step.title}
                </strong>
                <p 
                  className="text-xs lg:text-sm leading-relaxed"
                  style={{ 
                    margin: 0, 
                    color: '#64748b' 
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flowchart Column - Show first on mobile */}
        <div 
          className="order-1 lg:order-2"
          style={{
            background: 'linear-gradient(180deg,#ffffff,#fbfdff)',
            padding: '12px',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(16,24,40,0.08)',
            opacity: isSectionVisible ? 1 : 0,
            transform: isSectionVisible ? 'none' : 'translateX(30px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '400ms'
          }}
        >
          {/* Responsive SVG Flowchart */}
          <svg class="flowchart" viewBox="0 0 520 260">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#999"></path>
            </marker>
          </defs>
          <rect x="20" y="20" width="120" height="50" rx="10" ry="10" fill="#fff3e6" stroke="#ffddb8"/>
          <text x="80" y="50" text-anchor="middle" font-size="13">Discovery</text>
          <rect x="180" y="20" width="120" height="50" rx="10" ry="10" fill="#fff3e6" stroke="#ffddb8"/>
          <text x="240" y="50" text-anchor="middle" font-size="13">Data Collection</text>
          <rect x="340" y="20" width="120" height="50" rx="10" ry="10" fill="#fff3e6" stroke="#ffddb8"/>
          <text x="400" y="50" text-anchor="middle" font-size="13">Qualification</text>
          <rect x="180" y="120" width="120" height="50" rx="10" ry="10" fill="#fff3e6" stroke="#ffddb8"/>
          <text x="240" y="150" text-anchor="middle" font-size="13">Lead Delivery</text>
          <line x1="140" y1="45" x2="180" y2="45" stroke="#999" marker-end="url(#arrow)"/>
          <line x1="300" y1="45" x2="340" y2="45" stroke="#999" marker-end="url(#arrow)"/>
          <line x1="400" y1="70" x2="240" y2="120" stroke="#999" marker-end="url(#arrow)"/>
        </svg>
        </div>
      </div>
    </section>
  );
}

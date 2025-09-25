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

export default function LeadsProcess() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });

  const steps = [
    {
      num: "1",
      title: "Discovery & ICP",
      description: "We align on your ideal customer profile, buying triggers and target geos."
    },
    {
      num: "2",
      title: "List Build & Outreach",
      description: "Multi-channel outreach (email, phone, LinkedIn) with A/B tested messaging."
    },
    {
      num: "3",
      title: "Qualification",
      description: "Human verification, intent scoring, and booking confirmation where applicable."
    },
    {
      num: "4",
      title: "Handoff & Reporting",
      description: "Leads pushed to your CRM (HubSpot, Salesforce) with full source attribution."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 mx-auto px-4 sm:px-5 py-8 lg:py-16"
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
        Process — From Target to Demo
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
          <svg 
            className="block w-full h-auto" 
            viewBox="0 0 520 420" 
            role="img"
            // Smaller viewBox for mobile to make text more readable
            style={{ 
              maxWidth: '100%',
              height: 'auto'
            }}
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#e6f0ff"/>
                <stop offset="1" stopColor="#ffffff"/>
              </linearGradient>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#9aaedb"></path>
              </marker>
            </defs>

            {/* Top Row Nodes */}
            <rect x="16" y="20" rx="12" ry="12" width="160" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="96" y="50" fontSize="11" fontWeight="700" textAnchor="middle" fill="#07203b">
              Discovery &amp;
            </text>
            <text x="96" y="65" fontSize="11" fontWeight="700" textAnchor="middle" fill="#07203b">
              ICP
            </text>

            <rect x="190" y="20" rx="12" ry="12" width="160" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="270" y="55" fontSize="11" fontWeight="700" textAnchor="middle" fill="#07203b">
              List Build
            </text>

            <rect x="364" y="20" rx="12" ry="12" width="140" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="434" y="55" fontSize="11" fontWeight="700" textAnchor="middle" fill="#07203b">
              Outreach
            </text>

            {/* Bottom Row Nodes */}
            <rect x="100" y="140" rx="12" ry="12" width="160" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="180" y="175" fontSize="11" fontWeight="700" textAnchor="middle" fill="#07203b">
              Qualification
            </text>

            <rect x="300" y="140" rx="12" ry="12" width="180" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="390" y="170" fontSize="11" fontWeight="700" textAnchor="middle" fill="#07203b">
              Handoff &amp;
            </text>
            <text x="390" y="185" fontSize="11" fontWeight="700" textAnchor="middle" fill="#07203b">
              Reporting
            </text>

            {/* Arrows */}
            <line x1="176" y1="56" x2="190" y2="56" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow)"></line>
            <line x1="350" y1="56" x2="364" y2="56" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow)"></line>
            <path d="M 270 92 C 270 110, 180 130, 180 140" stroke="#9aaedb" strokeWidth="2" fill="none" markerEnd="url(#arrow)"></path>
            <line x1="260" y1="176" x2="300" y2="176" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow)"></line>

            {/* Responsive Labels */}
            <text x="230" y="35" fontSize="9" fill="#5c6b85">Targeting →</text>
            <text x="280" y="155" fontSize="9" fill="#5c6b85">Score &amp; Verify →</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

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

export default function WhatYouGet() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const pathname = usePathname();

  // Get content data based on URL
  const getContentData = () => {
    if (pathname.includes('seller')) {
      return {
        title: "What You Get with L4RG Seller Leads",
        paragraphs: [
          "Our seller lead services deliver more than just contact information. Every lead is thoroughly researched, verified, and qualified to ensure you're connecting with property owners who are genuinely motivated to sell. We focus on quality over quantity, providing leads that convert into real listings.",
          "Whether you're an individual agent building your client base or a large brokerage scaling operations, our seller leads are designed to accelerate your business growth. By connecting you with motivated sellers in your target markets, we help reduce your acquisition costs and increase your closing rates significantly.",
          "Our comprehensive approach includes detailed property information, seller motivation factors, and optimal contact timing to maximize your success rate. Each lead comes with complete background research to help you approach prospects with confidence and relevant market insights."
        ],
        benefits: [
          "Exclusive seller leads tailored to your market area",
          "Verified property ownership and contact details",
          "Motivation scoring and timeline assessment",
          "Faster listing conversions with pre-qualified prospects", 
          "Ongoing lead nurturing and follow-up strategies",
          "Complete property and market analysis included"
        ]
      };
    }

    if (pathname.includes('broker')) {
      return {
        title: "What You Get with L4RG Broker Leads",
        paragraphs: [
          "Our broker lead services go far beyond providing a simple list of names and numbers. Every lead we deliver is thoroughly researched, categorized, and aligned with your unique business goals. This ensures that the brokers you connect with are genuinely positioned to create real estate opportunities and build meaningful partnerships.",
          "Whether you are an independent broker looking to expand your network or a large real estate agency seeking to scale operations, our broker leads deliver measurable impact. By providing direct access to the right professionals, we help you save time, reduce acquisition costs, and maximize deal closure rates."
        ],
        benefits: [
          "Exclusive broker leads tailored to your niche",
          "Verified and updated contact details",
          "Access to local and international real estate brokers",
          "Faster conversions with qualified leads",
          "Ongoing support and lead nurturing strategies"
        ]
      };
    }

    if (pathname.includes('appointment')) {
      return {
        title: "What You Get with L4RG Appointment Setting",
        paragraphs: [
          "Our appointment setting service is designed to handle the heavy lifting of outreach and scheduling, so your sales team can focus on building strong client relationships and closing deals. We take care of the entire process — from initial contact to final confirmation — ensuring a seamless experience for you and your prospects.",
          "Each appointment is carefully pre-qualified to match your business goals. Whether you're targeting motivated sellers, potential homebuyers, or broker partnerships, we tailor our efforts to ensure every meeting is a valuable opportunity. With automated reminders and calendar integration, you'll never miss a chance to connect with high-value clients.",
          "Beyond scheduling, we provide detailed reports and analytics, so you can track performance, measure ROI, and refine strategies. L4RG acts as an extension of your team — delivering consistent, scalable appointment setting that fuels long-term business growth."
        ],
        benefits: [
          "Pre-qualified meetings with buyers, sellers, and brokers",
          "Direct scheduling into your calendar",
          "Follow-up reminders to reduce no-shows",
          "Detailed reporting and performance analytics",
          "Exclusive appointments tailored to your goals"
        ]
      };
    }

    // Default - General leads
    return {
      title: "What You Get with L4RG Lead Generation",
      paragraphs: [
        "Our comprehensive lead generation services provide more than just contact lists. Every lead is thoroughly researched, verified, and qualified to match your ideal customer profile. We focus on delivering high-intent prospects who are ready to engage with your business and move forward in the sales process.",
        "Whether you're a growing startup or an established enterprise, our lead generation solutions are designed to accelerate your sales pipeline. By connecting you with qualified prospects in your target markets, we help reduce your acquisition costs and increase your conversion rates significantly.",
        "Our systematic approach includes detailed prospect profiling, intent scoring, and optimal contact timing to maximize your success rate. Each lead comes with complete background research and context to help you approach prospects with confidence and relevant insights."
      ],
      benefits: [
        "Exclusive leads tailored to your target market",
        "Verified contact details and company information",
        "Intent scoring and qualification assessment",
        "Faster conversions with pre-qualified prospects",
        "Ongoing lead nurturing and follow-up support",
        "Complete prospect analysis and market insights"
      ]
    };
  };

  const currentData = getContentData();

  return (
    <section 
      ref={sectionRef}
      className="max-w-[1150px] mx-auto px-4 sm:px-5 lg:px-8 py-12 lg:py-20"
    >
      {/* Section Title */}
      <h2 
       className="text-4xl md:text-5xl font-bold mb-6 text-center"
            style={{ color: '#062235' }} 
      >
        {currentData.title}
      </h2>

      {/* Content Container */}
      <div 
        className="rounded-xl p-6 lg:p-8 mb-8"
        style={{
          background: 'linear-gradient(180deg,#fff,#fbfdff)',
          boxShadow: '0 6px 20px rgba(16,24,40,0.08)',
          border: '1px solid rgba(226, 232, 240, 0.5)',
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
          transitionDelay: '200ms'
        }}
      >
        {/* Paragraphs */}
        <div className="space-y-6 mb-8">
          {currentData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg leading-relaxed"
              style={{
                color: '#64748b',
                opacity: isSectionVisible ? 1 : 0,
                transform: isSectionVisible ? 'none' : 'translateY(20px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${300 + index * 100}ms`
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Benefits List */}
        <div
          style={{
            opacity: isSectionVisible ? 1 : 0,
            transform: isSectionVisible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '600ms'
          }}
        >
          <h3 
            className="text-xl md:text-2xl font-bold mb-6"
            style={{ color: '#062235' }}
          >
            Key Benefits:
          </h3>
          <ul className="space-y-4">
            {currentData.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start space-x-3"
                style={{
                  opacity: isSectionVisible ? 1 : 0,
                  transform: isSectionVisible ? 'none' : 'translateX(-20px)',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${700 + index * 100}ms`
                }}
              >
                <div 
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)'
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span 
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: '#64748b' }}
                >
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
    </section>
  );
}

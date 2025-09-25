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

export default function Features() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const pathname = usePathname();

  // Get features data based on URL
  const getFeaturesData = () => {
    if (pathname.includes('seller')) {
      return {
        title: "Why Choose L4RG Seller Leads?",
        features: [
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
            title: "Exclusive Real Estate Focus",
            description: "Unlike generic lead providers, we specialise in seller leads for real estate, ensuring higher conversion rates and relevance."
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ),
            title: "Data-Driven Targeting",
            description: "Our proprietary algorithms and 20 years of insights help identify motivated property owners ready to sell."
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Verified & Qualified Leads",
            description: "Every lead undergoes human verification to ensure accuracy, intent, and compliance with industry standards."
          }
        ]
      };
    }

    if (pathname.includes('broker')) {
      return {
        title: "Why Choose L4RG Broker Leads?",
        features: [
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ),
            title: "Network of Verified Brokers",
            description: "Access our extensive database of licensed, active brokers with proven track records in your target markets."
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: "Performance-Based Matching",
            description: "We match you with brokers based on transaction volume, specialization, and compatibility with your business model."
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            ),
            title: "Exclusive Partnerships",
            description: "All broker connections are exclusive to you - no sharing with competitors in your market area."
          }
        ]
      };
    }

    if (pathname.includes('appointment')) {
      return {
        title: "Why Choose Our Appointment Setting?",
        features: [
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ),
            title: "Confirmed Appointments",
            description: "We don't just set appointments - we confirm them with multiple touchpoints to ensure maximum show-up rates."
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            ),
            title: "Multi-Channel Outreach",
            description: "Phone, email, LinkedIn, and SMS coordination to reach prospects through their preferred communication channels."
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Real-Time Scheduling",
            description: "Seamless integration with your calendar system for instant booking and automatic conflict resolution."
          }
        ]
      };
    }

    // Default - General leads/buyer features
    return {
      title: "What We Provide",
      features: [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          ),
          title: "Targeted Prospect Lists",
          description: "Hand-built prospect lists matching your buyer persona, industry, company size and technographic filters."
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          ),
          title: "Human-Verified Contacts",
          description: "No scraped junk — every lead is phone or video verified and consent-checked for outreach compliance."
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          title: "Appointment-Ready Leads",
          description: "We deliver leads with confirmed interest or booked demo slots — ready for your AE to convert."
        }
      ]
    };
  };

  const currentData = getFeaturesData();

  return (
    <section 
      ref={sectionRef}
      className="max-w-[1150px] mb-10 mx-auto px-5 pt-1.5"
    >
      <h2 
        className="text-2xl font-bold mb-5"
        style={{
          color: '#062235',
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        {currentData.title}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-5">
        {currentData.features.map((feature, index) => (
          <div
            key={`${pathname}-feature-${index}`}
            className="rounded-xl p-5"
            style={{
              background: 'linear-gradient(180deg,#fff,#fbfdff)',
              boxShadow: '0 6px 20px rgba(16,24,40,0.08)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'none' : 'translateY(30px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: `${200 + index * 150}ms`
            }}
          >
            {/* Feature Icon */}
            {feature.icon && (
              <div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  color: 'white',
                  opacity: isSectionVisible ? 1 : 0,
                  transform: isSectionVisible ? 'none' : 'scale(0.8)',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${300 + index * 150}ms`
                }}
              >
                {feature.icon}
              </div>
            )}
            
            <h3 
              className="text-lg font-semibold mb-2"
              style={{ color: '#062235' }}
            >
              {feature.title}
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: '#64748b' }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div 
        className="mt-8 text-center"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out',
          transitionDelay: '800ms'
        }}
      >
        <div 
          className="inline-flex items-center justify-center p-4 rounded-xl"
          style={{
            background: 'linear-gradient(180deg,#fff,#fbfdff)',
            boxShadow: '0 6px 20px rgba(16,24,40,0.04)',
            border: '1px solid rgba(226, 232, 240, 0.5)'
          }}
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div 
                className="font-semibold text-sm"
                style={{ color: '#062235' }}
              >
                {pathname.includes('seller') && "Trusted by 500+ Real Estate Agencies"}
                {pathname.includes('broker') && "Connecting 1000+ Successful Partnerships"}
                {pathname.includes('appointment') && "95% Client Satisfaction Rate"}
                {!pathname.includes('seller') && !pathname.includes('broker') && !pathname.includes('appointment') && "Rated 5 Stars by Industry Professionals"}
              </div>
              <div 
                className="text-xs"
                style={{ color: '#64748b' }}
              >
                {pathname.includes('seller') && "Leading seller lead generation platform"}
                {pathname.includes('broker') && "Premier broker networking solution"}
                {pathname.includes('appointment') && "Professional appointment setting service"}
                {!pathname.includes('seller') && !pathname.includes('broker') && !pathname.includes('appointment') && "Comprehensive lead generation platform"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

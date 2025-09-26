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

export default function LeadProcess() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const pathname = usePathname();

  // Get process data based on URL
  const getProcessData = () => {
    if (pathname.includes('real-estate-seller-leads')) {
      return {
        title: "Our Process — From Lead to Listing",
        steps: [
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
        ],
        flowchart: (
          <svg className="block w-full h-auto" viewBox="0 0 520 260" role="img">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#999"></path>
              </marker>
            </defs>
            <rect x="20" y="20" width="120" height="50" rx="10" ry="10" fill="#fff3e6" stroke="#ffddb8"/>
            <text x="80" y="50" textAnchor="middle" fontSize="13">Discovery</text>
            <rect x="180" y="20" width="120" height="50" rx="10" ry="10" fill="#fff3e6" stroke="#ffddb8"/>
            <text x="240" y="50" textAnchor="middle" fontSize="13">Data Collection</text>
            <rect x="340" y="20" width="120" height="50" rx="10" ry="10" fill="#fff3e6" stroke="#ffddb8"/>
            <text x="400" y="50" textAnchor="middle" fontSize="13">Qualification</text>
            <rect x="180" y="120" width="120" height="50" rx="10" ry="10" fill="#fff3e6" stroke="#ffddb8"/>
            <text x="240" y="150" textAnchor="middle" fontSize="13">Lead Delivery</text>
            <line x1="140" y1="45" x2="180" y2="45" stroke="#999" markerEnd="url(#arrow)"/>
            <line x1="300" y1="45" x2="340" y2="45" stroke="#999" markerEnd="url(#arrow)"/>
            <line x1="400" y1="70" x2="240" y2="120" stroke="#999" markerEnd="url(#arrow)"/>
          </svg>
        )
      };
    }

    if (pathname.includes('real-estate-broker-leads')) {
      return {
        title: "Broker Process — From Research to Partnership",
        steps: [
          {
            num: "1",
            title: "Market Research",
            description: "We identify active brokers in your target markets with proven track records."
          },
          {
            num: "2",
            title: "Credential Verification",
            description: "License verification, transaction history analysis, and performance assessment."
          },
          {
            num: "3",
            title: "Outreach & Qualification",
            description: "Direct contact to assess partnership interest and compatibility with your goals."
          },
          {
            num: "4",
            title: "Broker Delivery",
            description: "Qualified broker contacts delivered with full profiles and partnership potential."
          }
        ],
        flowchart: (
          <svg className="block w-full h-auto" viewBox="0 0 520 260" role="img">
            <defs>
              <marker id="arrow-broker" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"></path>
              </marker>
            </defs>
            <rect x="20" y="20" width="120" height="50" rx="10" ry="10" fill="#ecfdf5" stroke="#a7f3d0"/>
            <text x="80" y="50" textAnchor="middle" fontSize="13">Research</text>
            <rect x="180" y="20" width="120" height="50" rx="10" ry="10" fill="#ecfdf5" stroke="#a7f3d0"/>
            <text x="240" y="50" textAnchor="middle" fontSize="13">Verification</text>
            <rect x="340" y="20" width="120" height="50" rx="10" ry="10" fill="#ecfdf5" stroke="#a7f3d0"/>
            <text x="400" y="50" textAnchor="middle" fontSize="13">Qualification</text>
            <rect x="180" y="120" width="120" height="50" rx="10" ry="10" fill="#ecfdf5" stroke="#a7f3d0"/>
            <text x="240" y="150" textAnchor="middle" fontSize="13">Delivery</text>
            <line x1="140" y1="45" x2="180" y2="45" stroke="#10b981" markerEnd="url(#arrow-broker)"/>
            <line x1="300" y1="45" x2="340" y2="45" stroke="#10b981" markerEnd="url(#arrow-broker)"/>
            <line x1="400" y1="70" x2="240" y2="120" stroke="#10b981" markerEnd="url(#arrow-broker)"/>
          </svg>
        )
      };
    }

    if (pathname.includes('real-estate-appointment-setting')) {
      return {
        title: "Appointment Process — From Contact to Meeting",
        steps: [
          {
            num: "1",
            title: "Target Identification",
            description: "We identify your ideal prospects based on your criteria and market focus."
          },
          {
            num: "2",
            title: "Initial Outreach",
            description: "Multi-channel contact approach using phone, email, and digital channels."
          },
          {
            num: "3",
            title: "Appointment Scheduling",
            description: "Calendar coordination, confirmation calls, and meeting preparation."
          },
          {
            num: "4",
            title: "Meeting Handoff",
            description: "Confirmed appointments with prospect background and meeting objectives."
          }
        ],
        flowchart: (
          <svg className="block w-full h-auto" viewBox="0 0 520 260" role="img">
            <defs>
              <marker id="arrow-appointment" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6"></path>
              </marker>
            </defs>
            <rect x="20" y="20" width="120" height="50" rx="10" ry="10" fill="#f3e8ff" stroke="#ddd6fe"/>
            <text x="80" y="50" textAnchor="middle" fontSize="13">Targeting</text>
            <rect x="180" y="20" width="120" height="50" rx="10" ry="10" fill="#f3e8ff" stroke="#ddd6fe"/>
            <text x="240" y="50" textAnchor="middle" fontSize="13">Outreach</text>
            <rect x="340" y="20" width="120" height="50" rx="10" ry="10" fill="#f3e8ff" stroke="#ddd6fe"/>
            <text x="400" y="50" textAnchor="middle" fontSize="13">Scheduling</text>
            <rect x="180" y="120" width="120" height="50" rx="10" ry="10" fill="#f3e8ff" stroke="#ddd6fe"/>
            <text x="240" y="150" textAnchor="middle" fontSize="13">Handoff</text>
            <line x1="140" y1="45" x2="180" y2="45" stroke="#8b5cf6" markerEnd="url(#arrow-appointment)"/>
            <line x1="300" y1="45" x2="340" y2="45" stroke="#8b5cf6" markerEnd="url(#arrow-appointment)"/>
            <line x1="400" y1="70" x2="240" y2="120" stroke="#8b5cf6" markerEnd="url(#arrow-appointment)"/>
          </svg>
        )
      };
    }

    // Default - General leads process
    return {
      title: "Process — From Target to Demo",
      steps: [
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
      ],
      flowchart: (
        <svg className="block w-full h-auto" viewBox="0 0 520 420" role="img">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#e6f0ff"/>
              <stop offset="1" stopColor="#ffffff"/>
            </linearGradient>
            <marker id="arrow-default" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
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
          <line x1="176" y1="56" x2="190" y2="56" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow-default)"></line>
          <line x1="350" y1="56" x2="364" y2="56" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow-default)"></line>
          <path d="M 270 92 C 270 110, 180 130, 180 140" stroke="#9aaedb" strokeWidth="2" fill="none" markerEnd="url(#arrow-default)"></path>
          <line x1="260" y1="176" x2="300" y2="176" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow-default)"></line>

          {/* Responsive Labels */}
          <text x="230" y="35" fontSize="9" fill="#5c6b85">Targeting →</text>
          <text x="280" y="155" fontSize="9" fill="#5c6b85">Score &amp; Verify →</text>
        </svg>
      )
    };
  };

  const currentData = getProcessData();

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="max-w-[1150px] mx-auto px-4 sm:px-5 py-8 lg:py-16"
    >
      {/* Responsive Heading */}
      <h2 
        className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 lg:mb-5 text-center lg:text-left"
        style={{
          color: '#062235',
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        {currentData.title}
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
          {currentData.steps.map((step, index) => (
            <div
              key={`${pathname}-step-${index}`}
              className="flex items-start rounded-xl lg:rounded-[12px]"
              style={{
                background: 'linear-gradient(180deg,#fff,#fbfdff)',
                padding: '12px',
                gap: '12px',
                boxShadow: '0 6px 20px rgba(16,24,40,0.04)',
                border: '1px solid rgba(226, 232, 240, 0.5)',
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
              >
                {step.num}
              </div>
              
              <div className="flex-1">
                <strong 
                  className="block text-sm lg:text-base mb-1"
                  style={{ color: '#062235' }}
                >
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
            border: '1px solid rgba(226, 232, 240, 0.5)',
            opacity: isSectionVisible ? 1 : 0,
            transform: isSectionVisible ? 'none' : 'translateX(30px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '400ms'
          }}
        >
          {/* Dynamic SVG Flowchart */}
          {currentData.flowchart}
        </div>
      </div>
    </section>
  );
}

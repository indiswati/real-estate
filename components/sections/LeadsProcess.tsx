// components/sections/BuyerLeadsProcess.jsx
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
      className="max-w-[1150px] mx-auto px-5"
    >
      <h2 
        className="text-2xl font-bold text-[#0f172a] mb-5"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        Process — From Target to Demo
      </h2>

      {/* .process - display:grid; grid-template-columns: 1fr 460px; gap:22px; align-items:start; margin-top:16px; */}
      <div 
        className="grid items-start mt-4"
        style={{
          gridTemplateColumns: '1fr 460px',
          gap: '22px'
        }}
      >
        {/* .steps - display:flex; flex-direction:column; gap:14px */}
        <div 
          className="flex flex-col"
          style={{ gap: '14px' }}
        >
          {steps.map((step, index) => (
            /* .step - display:flex; gap:12px; align-items:flex-start; background:#fff; padding:12px; border-radius:12px; box-shadow: 0 8px 30px rgba(9,30,66,0.03) */
            <div
              key={index}
              className="flex items-start bg-white"
              style={{
                gap: '12px',
                padding: '12px',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(9,30,66,0.03)',
                opacity: isSectionVisible ? 1 : 0,
                transform: isSectionVisible ? 'none' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${200 + index * 150}ms`
              }}
            >
              {/* .step .num - min-width:40px; height:40px; border-radius:10px; background:linear-gradient(135deg,var(--accent),#55aaff); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700 */}
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold"
                style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '10px',
                }}
              >
                {step.num}
              </div>
              <div>
                <strong className="block text-[#0f172a]">{step.title}</strong>
                {/* .step p - margin:0; color:var(--muted) */}
                <p 
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

        {/* .flow-wrap - background: linear-gradient(180deg,#ffffff,#fbfdff); padding:12px; border-radius:12px; box-shadow:var(--shadow) */}
        <div 
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
          {/* svg.flowchart - width:100%; height:auto; display:block */}
          <svg 
            className="flowchart block" 
            style={{ width: '100%', height: 'auto' }}
            viewBox="0 0 520 420" 
            role="img"
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

            {/* Nodes */}
            <rect x="16" y="20" rx="12" ry="12" width="160" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="96" y="55" fontSize="13" fontWeight="700" textAnchor="middle" fill="#07203b">Discovery & ICP</text>

            <rect x="190" y="20" rx="12" ry="12" width="160" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="270" y="55" fontSize="13" fontWeight="700" textAnchor="middle" fill="#07203b">List Build</text>

            <rect x="364" y="20" rx="12" ry="12" width="140" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="434" y="55" fontSize="13" fontWeight="700" textAnchor="middle" fill="#07203b">Outreach</text>

            <rect x="100" y="140" rx="12" ry="12" width="160" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="180" y="175" fontSize="13" fontWeight="700" textAnchor="middle" fill="#07203b">Qualification</text>

            <rect x="300" y="140" rx="12" ry="12" width="180" height="72" fill="url(#g1)" stroke="#dbe9ff" />
            <text x="390" y="175" fontSize="13" fontWeight="700" textAnchor="middle" fill="#07203b">Handoff & Reporting</text>

            {/* Arrows */}
            <line x1="176" y1="56" x2="190" y2="56" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow)"></line>
            <line x1="350" y1="56" x2="364" y2="56" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow)"></line>
            <path d="M 270 92 C 270 110, 180 130, 180 140" stroke="#9aaedb" strokeWidth="2" fill="none" markerEnd="url(#arrow)"></path>
            <line x1="260" y1="176" x2="300" y2="176" stroke="#9aaedb" strokeWidth="2" markerEnd="url(#arrow)"></line>

            {/* Labels */}
            <text x="230" y="40" fontSize="11" fill="#5c6b85">Targeting →</text>
            <text x="280" y="160" fontSize="11" fill="#5c6b85">Score & Verify →</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

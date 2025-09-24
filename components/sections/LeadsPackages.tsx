// components/sections/BuyerLeadsPackages.jsx
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

export default function LeadsPackages() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });

  const scrollToSection = (href:any) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      title: "Pilot",
      price: "£950",
      features: [
        "30 qualified buyer leads",
        "Human verification",
        "2-week turnaround"
      ],
      buttonText: "Start Pilot",
      buttonHref: "#contact"
    },
    {
      title: "Scale",
      price: "£2,900",
      features: [
        "100 leads/month",
        "Dedicated campaign manager",
        "CRM integration"
      ],
      buttonText: "Request Quote",
      buttonHref: "#contact"
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Custom SLAs & KPIs",
        "Team-embedded SDR",
        "Advanced analytics"
      ],
      buttonText: "Contact Sales",
      buttonHref: "#contact"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="packages" 
      className="max-w-[1150px] mx-auto px-5 py-16"
    >
      <h2 
        className="text-2xl font-bold text-[#0f172a] mb-3"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        Packages & Pricing
      </h2>
      
      <p 
        className="text-sm mb-3"
        style={{
          color: '#64748b',
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out',
          transitionDelay: '200ms'
        }}
      >
        Pilot-ready packages — transparent pricing and guaranteed data quality.
      </p>

      {/* .packages - display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:12px */}
      <div 
        className="grid gap-4 mt-3"
        style={{
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))'
        }}
        role="list"
      >
        {packages.map((pkg, index) => (
          /* .pkg - background:linear-gradient(180deg,#fff,#fff); padding:18px; border-radius:14px; box-shadow:var(--shadow); text-align:center */
          <div
            key={index}
            className="text-center"
            style={{
              background: 'linear-gradient(180deg,#fff,#fff)',
              padding: '18px',
              borderRadius: '14px',
              boxShadow: '0 6px 20px rgba(16,24,40,0.08)',
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'none' : 'translateY(30px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: `${300 + index * 150}ms`
            }}
            role="listitem"
          >
            {/* .pkg h4 - margin:0 0 8px */}
            <h4 
              className="font-semibold text-[#0f172a]"
              style={{ margin: '0 0 8px' }}
            >
              {pkg.title}
            </h4>
            
            {/* .pkg .price - font-size:1.4rem; font-weight:800; margin-bottom:8px */}
            <div 
              className="text-[#0f172a] mb-2"
              style={{
                fontSize: '1.4rem',
                fontWeight: '800'
              }}
            >
              {pkg.price}
            </div>
            
            {/* .pkg ul - list-style: none; padding:0; margin:0; color:var(--muted) */}
            <ul 
              className="list-none p-0 m-0"
              style={{ color: '#64748b' }}
            >
              {pkg.features.map((feature, featureIndex) => (
                /* .pkg li - padding:6px 0 */
                <li 
                  key={featureIndex}
                  style={{ padding: '6px 0' }}
                >
                  {feature}
                </li>
              ))}
            </ul>
            
            {/* Button with margin-top:10px */}
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => scrollToSection(pkg.buttonHref)}
                /* .secondary-cta - background:transparent;border:1px solid rgba(10,20,40,0.06);padding:9px 14px;border-radius:10px */
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(10,20,40,0.06)',
                  padding: '9px 14px',
                  borderRadius: '10px',
                  color: '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8fafc';
                  e.target.style.color = '#0f6cff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#64748b';
                }}
              >
                {pkg.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

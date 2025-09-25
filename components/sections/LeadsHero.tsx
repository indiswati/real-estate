
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

export default function LeadsHero() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.3 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="overview" 
      className="max-w-[1150px] mx-auto px-5"
    >
      {/* Responsive Grid: 
          - Desktop (lg+): grid-cols-[1fr_460px] 
          - Mobile: grid-cols-1 
      */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-6 lg:gap-9 items-center py-8 lg:py-16">
        
        {/* Hero Left Content */}
        <div 
          className="p-4 lg:p-6 order-2 lg:order-1"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
            borderRadius: '18px',
            boxShadow: '0 6px 20px rgba(16,24,40,0.08)',
            opacity: isHeroVisible ? 1 : 0,
            transform: isHeroVisible ? 'none' : 'translateX(-40px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          {/* Responsive Heading */}
          <h2 
            className="m-0 mb-2.5 text-xl md:text-2xl lg:text-[1.6rem] leading-tight"
            style={{
              color: '#062235',
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            Buyer Leads That Convert — Qualified, Verified & Ready to Buy
          </h2>
          
          {/* Responsive Description */}
          <p 
            className="m-0 mb-[18px] text-sm md:text-base leading-relaxed"
            style={{
              color: '#64748b',
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '300ms'
            }}
          >
            L4RG supplies high-intent buyer leads for SaaS, real estate, finance, and services — fully qualified and tailored to your ideal customer profile. We deliver leads that shorten sales cycles and increase close rates.
          </p>

          {/* Responsive KPIs - Stack on mobile, inline on larger screens */}
          <div 
            className="flex flex-col sm:flex-row gap-3 lg:gap-[14px] mt-5 flex-wrap"
            style={{
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '400ms'
            }}
          >
            {[
              { number: '80%+', label: 'contact rate' },
              { number: '45%+', label: 'lead-to-demo rate' },
              { number: 'Avg £120', label: 'cost per lead (varies)' }
            ].map((kpi, index) => (
              <div 
                key={index}
                className="min-w-[120px] sm:min-w-[130px] flex-1 sm:flex-none text-center sm:text-left"
                style={{
                  background: 'linear-gradient(180deg,#fff,#fbfdff)',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(16,24,40,0.04)'
                }}
              >
                <strong className="block text-base lg:text-[1.1rem]">{kpi.number}</strong>
                <span className="text-xs sm:text-sm" style={{ color: '#64748b' }}>{kpi.label}</span>
              </div>
            ))}
          </div>

          {/* Responsive Buttons - Stack on mobile */}
          <div 
            className="mt-[18px] flex flex-col sm:flex-row gap-3 sm:gap-2"
            style={{
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '500ms'
            }}
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-semibold"
            >
              Book a Demo
            </button>
            
            <button
              onClick={() => scrollToSection('#packages')}
              className="bg-white border border-gray-200 text-gray-800 px-4 sm:px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-semibold"
            >
              View Packages
            </button>
          </div>

          {/* Trust Text */}
          <div 
            className="mt-[18px] text-xs sm:text-sm"
            style={{
              color: '#64748b',
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '600ms'
            }}
          >
            Trusted by growth teams across the UK & EU — scalable, compliant, and easy to plug into your CRM.
          </div>
        </div>

        {/* Hero Right - Cards (order-1 on mobile to show first) */}
        <div 
          className="flex flex-col gap-3 items-center order-1 lg:order-2"
          style={{
            opacity: isHeroVisible ? 1 : 0,
            transform: isHeroVisible ? 'none' : 'translateX(40px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '300ms'
          }}
        >
          {/* Main Image Card */}
          <div 
            className="w-full max-w-md lg:max-w-none"
            style={{
              background: 'linear-gradient(180deg,#fff,#fbfbff)',
              padding: '16px lg:18px',
              borderRadius: '14px',
              boxShadow: '0 6px 20px rgba(16,24,40,0.08)'
            }}
          >
            {/* Responsive Image Height */}
            <img
              className="w-full block"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                height: '200px sm:240px lg:260px',
                objectFit: 'cover'
              }}
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&q=80&auto=format&fit=crop&crop=top"
              alt="Sales team discussing buyer leads"
            />
            
            {/* Responsive Card Footer */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-3 sm:gap-0">
              <div className="text-center sm:text-left">
                <strong className="block text-sm lg:text-base">Start with a Pilot</strong>
                <div className="text-xs lg:text-sm" style={{ color: '#64748b' }}>
                  30 qualified buyer leads — 14-day turnaround
                </div>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full sm:w-auto px-3 py-2 text-sm lg:text-base"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(10,20,40,0.06)',
                    borderRadius: '10px'
                  }}
                >
                  Start Pilot
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Feature Cards - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-2.5 mt-2.5 w-full max-w-md lg:max-w-none">
            {[
              {
                image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&q=60&auto=format&fit=crop&crop=top",
                title: "Data-Driven Targeting",
                description: "ICP + technographics + buying signals"
              },
              {
                image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=60&auto=format&fit=crop&crop=top",
                title: "Qualified by humans", 
                description: "Phone-verified + intent scored"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex-1 flex items-center gap-3 p-3 lg:p-[18px]"
                style={{
                  background: 'linear-gradient(180deg,#fff,#fbfbff)',
                  borderRadius: '14px',
                  boxShadow: '0 6px 20px rgba(16,24,40,0.08)'
                }}
              >
                <img 
                  src={feature.image}
                  alt={feature.title.toLowerCase()}
                  className="w-12 h-12 lg:w-16 lg:h-16 object-cover flex-shrink-0"
                  style={{ borderRadius: '8px' }}
                />
                <div>
                  <strong className="block text-sm lg:text-base">{feature.title}</strong>
                  <div className="text-xs lg:text-sm" style={{ color: '#64748b' }}>
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

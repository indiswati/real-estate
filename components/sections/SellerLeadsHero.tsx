// components/sections/SellerLeadsHero.jsx
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

export default function SellerLeadsHero() {
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
            Seller Leads for Real Estate — 20 Years of Proven Expertise
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
            For two decades, L4RG has been the trusted partner for real estate professionals seeking high-quality seller leads. With over 1.7 lakh verified prospects delivered, we empower agencies, brokers, and agents to close listings faster and grow their market share.
          </p>
          <p className="m-0 mb-[18px] text-sm md:text-base leading-relaxed"
            style={{
              color: '#64748b',
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '300ms'
            }}>Over the last 20 years, we have witnessed how the real estate industry has transformed, and so have the expectations of both buyers and sellers. At L4RG, we have consistently adapted our strategies and tools to stay ahead of these changes. Our seller leads are sourced through a combination of advanced data analytics, AI-driven targeting, and manual verification, making sure that every lead delivered is accurate, motivated, and ready to act.

</p>
<p className="m-0 mb-[18px] text-sm md:text-base leading-relaxed"
            style={{
              color: '#64748b',
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '300ms'
            }}>We know that real estate brokers and agencies cannot afford to waste time chasing cold contacts. That’s why our focus has always been on quality rather than quantity. Our leads are filtered and verified by experts who understand the nuances of the property market, ensuring that when you connect with a prospect, you’re already a step closer to securing a listing.



</p>
<p className="m-0 mb-[18px] text-sm md:text-base leading-relaxed"
            style={{
              color: '#64748b',
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '300ms'
            }}>With over 1.7 lakh seller prospects delivered, our track record speaks for itself. We don’t just deliver contacts — we deliver opportunities. Our long-standing client relationships and 95% retention rate are proof that our leads consistently convert into real transactions, making us a trusted partner for real estate professionals worldwide.

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
              { number: '20%+', label: 'Years Experience' },
              { number: '1.7 Lakh+', label: 'Prospects Delivered' },
              { number: '95%', label: 'Client Retention' }
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
          {/* <div
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
          </div> */}

          {/* Trust Text */}
          {/* <div
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
          </div> */}
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
                objectFit: 'cover',
                padding: '16px lg:18px',
              }}
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop&crop=top"
              alt="Sales team discussing seller leads"
            />

           
            
          </div>

          
        </div>
      </div>
    </section>
  );
}
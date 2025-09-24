// components/sections/BuyerLeadsHero.jsx
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

  const scrollToSection = (href:any) => {
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
      {/* .hero - display:grid; grid-template-columns:1fr 460px; gap:36px; align-items:center; padding:64px 0; */}
      <div className="grid grid-cols-[1fr_460px] gap-9 items-center py-16">
        
        {/* .hero-left - padding:24px; background:linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95)); border-radius:18px; box-shadow:var(--shadow) */}
        <div 
          className="p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
            borderRadius: '18px',
            boxShadow: '0 6px 20px rgba(16,24,40,0.08)',
            opacity: isHeroVisible ? 1 : 0,
            transform: isHeroVisible ? 'none' : 'translateX(-40px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          {/* .hero h2 - font-size:1.6rem; margin:0 0 10px; color:#062235 */}
          <h2 
            className="m-0 mb-2.5"
            style={{
              fontSize: '1.6rem',
              color: '#062235',
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            Buyer Leads That Convert — Qualified, Verified & Ready to Buy
          </h2>
          
          {/* .hero p.lead - margin:0 0 18px; color:var(--muted) */}
          <p 
            className="m-0 mb-[18px]"
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

          {/* .kpis - display:flex; gap:14px; margin-top:20px; flex-wrap:wrap */}
          <div 
            className="flex gap-[14px] mt-5 flex-wrap"
            style={{
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '400ms'
            }}
          >
            {/* .kpi - background:linear-gradient(180deg,#fff,#fbfdff); padding:12px 14px; border-radius:12px; box-shadow: 0 6px 20px rgba(16,24,40,0.04); min-width:130px */}
            <div 
              className="min-w-[130px]"
              style={{
                background: 'linear-gradient(180deg,#fff,#fbfdff)',
                padding: '12px 14px',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(16,24,40,0.04)'
              }}
            >
              {/* .kpi strong - display:block; font-size:1.1rem */}
              <strong className="block" style={{ fontSize: '1.1rem' }}>80%+</strong>
              <span className="text-sm" style={{ color: '#64748b' }}>contact rate</span>
            </div>
            
            <div 
              className="min-w-[130px]"
              style={{
                background: 'linear-gradient(180deg,#fff,#fbfdff)',
                padding: '12px 14px',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(16,24,40,0.04)'
              }}
            >
              <strong className="block" style={{ fontSize: '1.1rem' }}>45%+</strong>
              <span className="text-sm" style={{ color: '#64748b' }}>lead-to-demo rate</span>
            </div>
            
            <div 
              className="min-w-[130px]"
              style={{
                background: 'linear-gradient(180deg,#fff,#fbfdff)',
                padding: '12px 14px',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(16,24,40,0.04)'
              }}
            >
              <strong className="block" style={{ fontSize: '1.1rem' }}>Avg £120</strong>
              <span className="text-sm" style={{ color: '#64748b' }}>cost per lead (varies)</span>
            </div>
          </div>

          {/* .hero-cta - margin-top:18px */}
          <div 
            className="mt-[18px]"
            style={{
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '500ms'
            }}
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
              transform: "none",
            }}
            >
              Book a Demo
            </button>
            {/* .secondary-cta - background:transparent;border:1px solid rgba(10,20,40,0.06);padding:9px 14px;border-radius:10px */}
            <button
              onClick={() => scrollToSection('#packages')}
              className="bg-white border border-gray-200 text-gray-800 px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 ml-5"
            
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
              transform: "none",
            }} 
            >
              View Packages
            </button>
          </div>

          <div 
            className="mt-[18px] text-sm"
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

        {/* .hero-right - display:flex; flex-direction:column; gap:12px; align-items:center; */}
        <div 
          className="flex flex-col gap-3 items-center"
          style={{
            opacity: isHeroVisible ? 1 : 0,
            transform: isHeroVisible ? 'none' : 'translateX(40px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '300ms'
          }}
        >
          {/* .card - background:linear-gradient(180deg,#fff,#fbfbff); padding:18px; border-radius:14px; box-shadow:var(--shadow); width:100%; */}
          <div 
            className="w-full"
            style={{
              background: 'linear-gradient(180deg,#fff,#fbfbff)',
              padding: '18px',
              borderRadius: '14px',
              boxShadow: '0 6px 20px rgba(16,24,40,0.08)'
            }}
          >
            {/* .hero-image - border-radius:12px; overflow:hidden; height:260px; width:100%; display:block; */}
            <img
              className="w-full block"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                height: '260px',
                objectFit: 'cover'
              }}
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&q=80&auto=format&fit=crop&crop=top"
              alt="Sales team discussing buyer leads"
            />
            <div className="flex justify-between items-center mt-3">
              <div>
                <strong className="block">Start with a Pilot</strong>
                <div className="text-sm" style={{ color: '#64748b' }}>30 qualified buyer leads — 14-day turnaround</div>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection('#contact')}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(10,20,40,0.06)',
                    padding: '9px 14px',
                    borderRadius: '10px'
                  }}
                >
                  Start Pilot
                </button>
              </div>
            </div>
          </div>

          {/* Bottom row - flex gap */}
          <div className="flex gap-2.5 mt-2.5 w-full">
            <div 
              className="flex-1 flex items-center gap-3"
              style={{
                background: 'linear-gradient(180deg,#fff,#fbfbff)',
                padding: '18px',
                borderRadius: '14px',
                boxShadow: '0 6px 20px rgba(16,24,40,0.08)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&q=60&auto=format&fit=crop&crop=top" 
                alt="research" 
                className="w-16 h-16 object-cover"
                style={{ borderRadius: '8px' }}
              />
              <div>
                <strong className="block">Data-Driven Targeting</strong>
                <div className="text-sm" style={{ color: '#64748b' }}>ICP + technographics + buying signals</div>
              </div>
            </div>

            <div 
              className="flex-1 flex items-center gap-3"
              style={{
                background: 'linear-gradient(180deg,#fff,#fbfbff)',
                padding: '18px',
                borderRadius: '14px',
                boxShadow: '0 6px 20px rgba(16,24,40,0.08)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=60&auto=format&fit=crop&crop=top" 
                alt="handshake" 
                className="w-16 h-16 object-cover"
                style={{ borderRadius: '8px' }}
              />
              <div>
                <strong className="block">Qualified by humans</strong>
                <div className="text-sm" style={{ color: '#64748b' }}>Phone-verified + intent scored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

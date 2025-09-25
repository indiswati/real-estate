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

export default function LeadsHero() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.3 });
  const pathname = usePathname();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get hero data based on URL
  const getHeroData = () => {
    if (pathname.includes('seller')) {
      return {
        title: "Seller Leads for Real Estate — 20 Years of Proven Expertise",
        description: "For two decades, L4RG has been the trusted partner for real estate professionals seeking high-quality seller leads. With over 1.7 lakh verified prospects delivered, we empower agencies, brokers, and agents to close listings faster and grow their market share.",
        additionalParagraphs: [
          "Over the last 20 years, we have witnessed how the real estate industry has transformed, and so have the expectations of both buyers and sellers. At L4RG, we have consistently adapted our strategies and tools to stay ahead of these changes. Our seller leads are sourced through a combination of advanced data analytics, AI-driven targeting, and manual verification, making sure that every lead delivered is accurate, motivated, and ready to act.",
          "We know that real estate brokers and agencies cannot afford to waste time chasing cold contacts. That's why our focus has always been on quality rather than quantity. Our leads are filtered and verified by experts who understand the nuances of the property market, ensuring that when you connect with a prospect, you're already a step closer to securing a listing.",
          "With over 1.7 lakh seller prospects delivered, our track record speaks for itself. We don't just deliver contacts — we deliver opportunities. Our long-standing client relationships and 95% retention rate are proof that our leads consistently convert into real transactions, making us a trusted partner for real estate professionals worldwide."
        ],
        kpis: [
          { number: '20+', label: 'Years Experience' },
          { number: '1.7 Lakh+', label: 'Prospects Delivered' },
          { number: '95%', label: 'Client Retention' }
        ],
        showButtons: false,
        showTrust: false,
        mainImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop&crop=top",
        mainImageAlt: "Real estate agent with client",
        showBottomCards: false,
        showCardFooter: false
      };
    }

    if (pathname.includes('broker')) {
      return {
        title: "Broker Leads for Real Estate — 20 Years of Proven Expertise",
        description: "4RG has been the trusted partner for real estate professionals, delivering over 1.7 lakh high-quality broker leads that drive sales, partnerships, and long-term business growth.",
        additionalParagraphs: [
          "In today’s competitive real estate market, brokers act as the essential link between property buyers, sellers, and investors. Without strong broker relationships, agencies often struggle to close deals efficiently. Having access to exclusive, verified broker leads ensures your business always stays ahead of the competition and maintains a steady pipeline of opportunities.",
          "At L4RG, we understand the importance of precision in lead generation. For over 20 years, we’ve built a robust network of real estate professionals, supported by advanced data analytics and human verification processes. This allows us to deliver leads that are not only plentiful but also highly relevant and conversion-ready.",
          "By partnering with L4RG, you gain access to broker leads that open doors to new markets, partnerships, and revenue streams. Our leads empower you to focus on building strong business relationships while we handle the complexity of finding and qualifying the right contacts."
        ],
        kpis: [
          { number: '5,000+', label: 'Verified Brokers' },
          { number: '50+', label: 'Markets Covered' },
          { number: '98%', label: 'Verification Rate' }
        ],
        showButtons: false,
        showTrust: false,
        mainImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop&crop=top",
        mainImageAlt: "Real estate agent with client",
        showBottomCards: false,
        showCardFooter: false
      };
    }

    if (pathname.includes('appointment')) {
      return {
        title: "Appointment Setting Services for Real Estate — 20 Years of Expertise",
        description: "L4RG has been helping real estate businesses secure qualified meetings with buyers, sellers, and brokers. With 20 years of industry experience, we ensure your sales team focuses only on closing deals, not chasing prospects.",
        additionalParagraphs: [
          "In the competitive real estate industry, time is your most valuable resource. Sales professionals often spend countless hours prospecting, qualifying, and reaching out, leaving less time for actual deal closures. Appointment setting solves this challenge by connecting you with pre-qualified leads who are ready to engage.",
          "Instead of struggling with cold calls and wasted outreach, our dedicated appointment setting service ensures your calendar is filled with meetings that matter. By filtering and verifying leads in advance, we minimize no-shows and maximize your conversion potential.",
          "At L4RG, we’ve been providing appointment setting services for over 20 years, empowering real estate agencies, brokers, and investors to scale faster. Our expertise lies in aligning qualified prospects with your availability, so you never miss out on valuable opportunities."
        ],
        kpis: [
          { number: '85%', label: 'Show-up Rate' },
          { number: '24hrs', label: 'Average Response Time' },
          { number: '3-5', label: 'Meetings per Week' }
        ],
        showButtons: false,
        showTrust: false,
        mainImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop&crop=top",
        mainImageAlt: "Real estate agent with client",
        showBottomCards: false,
        showCardFooter: false
      };
    }

    // Default - Buyer leads
    return {
      title: "Buyer Leads That Convert — Qualified, Verified & Ready to Buy",
      description: "L4RG supplies high-intent buyer leads for SaaS, real estate, finance, and services — fully qualified and tailored to your ideal customer profile. We deliver leads that shorten sales cycles and increase close rates.",
      additionalParagraphs: [
        "Over the last 20 years, we have witnessed how the real estate industry has transformed, and so have the expectations of both buyers and sellers. At L4RG, we have consistently adapted our strategies and tools to stay ahead of these changes."
      ],
      kpis: [
        { number: '80%+', label: 'contact rate' },
        { number: '45%+', label: 'lead-to-demo rate' },
        { number: 'Avg £120', label: 'cost per lead (varies)' }
      ],
      showButtons: true,
      showTrust: true,
      mainImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&q=80&auto=format&fit=crop&crop=top",
      mainImageAlt: "Sales team discussing buyer leads",
      showBottomCards: true,
      showCardFooter: true,
      cardFooter: {
        title: "Start with a Pilot",
        description: "30 qualified buyer leads — 14-day turnaround"
      },
      bottomFeatures: [
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
      ]
    };
  };

  const currentData = getHeroData();

  return (
    <section
      ref={heroRef}
      id="overview"
      className="max-w-[1150px] mx-auto px-5"
    >
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
            {currentData.title}
          </h2>

          {/* Main Description */}
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
            {currentData.description}
          </p>

          {/* Additional Paragraphs */}
          {currentData.additionalParagraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 mb-[18px] text-sm md:text-base leading-relaxed"
              style={{
                color: '#64748b',
                opacity: isHeroVisible ? 1 : 0,
                transform: isHeroVisible ? 'none' : 'translateY(20px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${300 + (index + 1) * 100}ms`
              }}
            >
              {paragraph}
            </p>
          ))}

          {/* KPIs */}
          <div
            className="flex flex-col sm:flex-row gap-3 lg:gap-[14px] mt-5 flex-wrap"
            style={{
              opacity: isHeroVisible ? 1 : 0,
              transform: isHeroVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '400ms'
            }}
          >
            {currentData.kpis.map((kpi, index) => (
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
                <strong className="block text-base lg:text-[1.1rem]" style={{ color: '#062235' }}>
                  {kpi.number}
                </strong>
                <span className="text-xs sm:text-sm" style={{ color: '#64748b' }}>
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          {currentData.showButtons && (
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
                {pathname.includes('appointment') ? 'Book Consultation' : 'Book a Demo'}
              </button>
              <button
                onClick={() => scrollToSection('#packages')}
                className="bg-white border border-gray-200 px-4 sm:px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-semibold"
                style={{ color: '#062235' }}
              >
                View Packages
              </button>
            </div>
          )}

          {/* Trust Text */}
          {currentData.showTrust && (
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
          )}
        </div>

        {/* Hero Right - Cards */}
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
            <img
              className="w-full block"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                height: '200px sm:240px lg:260px',
                objectFit: 'cover',
                padding: '16px lg:18px',
              }}
              src={currentData.mainImage}
              alt={currentData.mainImageAlt}
            />

            {/* Card Footer */}
            {currentData.showCardFooter && currentData.cardFooter && (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-3 sm:gap-0 p-5">
                <div className="text-center sm:text-left">
                  <strong className="block text-sm lg:text-base" style={{ color: '#062235' }}>
                    {currentData.cardFooter.title}
                  </strong>
                  <div className="text-xs lg:text-sm" style={{ color: '#64748b' }}>
                    {currentData.cardFooter.description}
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full sm:w-auto px-3 py-2 text-sm lg:text-base"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(10,20,40,0.06)',
                      borderRadius: '10px',
                      color: '#062235'
                    }}
                  >
                    Start Pilot
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Feature Cards */}
          {currentData.showBottomCards && currentData.bottomFeatures && (
            <div className="flex flex-col sm:flex-row gap-2.5 mt-2.5 w-full max-w-md lg:max-w-none">
              {currentData.bottomFeatures.map((feature, index) => (
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
                    <strong className="block text-sm lg:text-base" style={{ color: '#062235' }}>
                      {feature.title}
                    </strong>
                    <div className="text-xs lg:text-sm" style={{ color: '#64748b' }}>
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

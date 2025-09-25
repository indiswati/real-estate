'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

// Custom hook for intersection observer (matches the pattern from your sample)
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  return [ref, isIntersecting] as const;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();

  // Section animation refs (following the pattern from your sample)
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.5 });
  const [faqRef, isFaqVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.3 });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dynamic FAQ data based on URL
  const getFAQData = () => {
    if (pathname.includes('seller')) {
      return {
        title: "Seller Leads - Frequently Asked Questions",
        subtitle: "Got questions about seller leads? We've got answers. Find everything you need to know about our seller lead generation services.",
        icon: (
          <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        faqs: [
          {
            question: "What makes L4RG seller leads unique?",
            answer: "We have specialised in real estate for 20 years, delivering over 1.7 lakh verified prospects. Our leads are intent-driven, not just cold contacts."
          },
          {
            question: "How do you verify seller intent?",
            answer: "Our team uses property ownership data, digital signals, and direct phone verification to confirm selling interest before delivering a lead."
          },
          {
            question: "Do you integrate with CRMs?",
            answer: "Yes, we integrate with leading CRMs like Salesforce, HubSpot, and Zoho for seamless lead delivery."
          },
          {
            question: "What is the average turnaround time?",
            answer: "Pilot campaigns can deliver seller leads in as little as 10 days, while ongoing programs provide a steady monthly pipeline."
          },
          {
            question: "What type of sellers do you target?",
            answer: "We target motivated sellers including property owners looking to downsize, investors, distressed property owners, and those relocating for work or family reasons."
          },
          {
            question: "How do you ensure lead quality?",
            answer: "Every seller lead goes through our proprietary 7-step verification process including property ownership verification, motivation assessment, and timeline confirmation."
          }
        ]
      };
    }

    if (pathname.includes('broker')) {
      return {
        title: "Broker Leads - Frequently Asked Questions",
        subtitle: "Learn about our comprehensive broker lead generation and partnership services.",
        icon: (
          <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        faqs: [
          {
            question: "How are broker leads generated?",
            answer: "We use a mix of data research, digital marketing, and industry partnerships to identify high-quality brokers."
          },
          {
            question: "Are the leads exclusive?",
            answer: "Yes, all broker leads provided by L4RG are exclusive and not resold to multiple clients."
          },
          {
            question: "Can I target specific regions?",
            answer: "Absolutely. We provide broker leads based on your preferred locations and markets."
          },
          {
            question: "What information is included with each broker lead?",
            answer: "Each broker lead includes contact details, specialization areas, market focus, years of experience, recent transaction history, and team size."
          },
          {
            question: "How do you verify broker credentials?",
            answer: "We verify all broker licenses, check industry certifications, review transaction history, and confirm current market activity before delivering leads."
          },
          {
            question: "Can I filter brokers by transaction volume?",
            answer: "Yes, we can filter brokers based on their annual transaction volume, average deal size, and specialization in residential or commercial properties."
          }
        ]
      };
    }

    if (pathname.includes('appointment')) {
      return {
        title: "Appointment Setting - Frequently Asked Questions",
        subtitle: "Discover how our appointment setting services can streamline your business meetings and boost your conversion rates.",
        icon: (
          <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        faqs: [
          {
            question: "What industries do you cover for appointment setting?",
            answer: "We specialize in real estate but also support related industries such as mortgage, insurance, and property investment."
          },
          {
            question: "How are appointments confirmed?",
            answer: "All appointments are confirmed via phone and email, with reminders sent to minimize cancellations."
          },
          {
            question: "Can I customize the type of appointments I want?",
            answer: "Yes, we tailor appointment setting to your goals — whether you want more sellers, buyers, or broker meetings."
          },
          {
            question: "What is your appointment success rate?",
            answer: "We maintain an 85% show-up rate through our comprehensive confirmation and reminder system, including 24-hour and 2-hour advance reminders."
          },
          {
            question: "How far in advance can appointments be scheduled?",
            answer: "We can schedule appointments anywhere from same-day (for urgent meetings) to 30 days in advance, depending on your preference and prospect availability."
          },
          {
            question: "Do you handle rescheduling and cancellations?",
            answer: "Yes, our team manages all rescheduling requests and cancellations, automatically finding alternative time slots and keeping your calendar updated in real-time."
          }
        ]
      };
    }

    // Default FAQ data
    return {
      title: "Frequently Asked Questions",
      subtitle: "Got questions about our real estate services? We've got answers. Find everything you need to know about our lead generation and business solutions.",
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      faqs: [
        {
          question: "What makes L4RG different from other lead generation companies?",
          answer: "We have 20 years of specialized experience in real estate, delivering over 1.7 lakh verified prospects with a 95% client retention rate across all our services."
        },
        {
          question: "Do you offer custom lead generation solutions?",
          answer: "Yes, we provide customized lead generation solutions for sellers, buyers, brokers, and appointment setting based on your specific business needs and target market."
        },
        {
          question: "How do you ensure lead quality across all services?",
          answer: "Every lead goes through our proprietary 7-step verification process including data validation, intent scoring, manual review, and industry-specific qualification criteria."
        },
        {
          question: "What support do you provide to clients?",
          answer: "We offer 24/7 customer support, dedicated account managers, comprehensive onboarding, regular performance reviews, and ongoing optimization for all our services."
        },
        {
          question: "Can I integrate your services with my existing CRM?",
          answer: "Yes, we integrate seamlessly with all major CRMs including Salesforce, HubSpot, Zoho, and custom systems through our API and automated data sync."
        },
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing including per-lead pricing, monthly retainers, and performance-based models. Contact us for a customized quote based on your specific requirements."
        }
      ]
    };
  };

  const currentFAQData = getFAQData();

  // Reset open accordion when route changes
  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  return (
    <section 
      className="py-20"
      style={{ 
        background: 'linear-gradient(180deg, #f8fafc, #f1f5f9)',
        opacity: isSectionVisible ? 1 : 0 
      }}
      id="faq"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-16"
          style={{ 
            opacity: isTitleVisible ? 1 : 0, 
            transform: isTitleVisible ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ 
              background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
              opacity: isTitleVisible ? 1 : 0, 
              transform: isTitleVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            {currentFAQData.icon}
          </div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              color: '#062235',
              opacity: isTitleVisible ? 1 : 0, 
              transform: isTitleVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '100ms'
            }}
          >
            {currentFAQData.title}
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ 
              color: '#64748b',
              opacity: isTitleVisible ? 1 : 0, 
              transform: isTitleVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            {currentFAQData.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div 
          ref={faqRef}
          className="space-y-4"
          style={{ 
            opacity: isFaqVisible ? 1 : 0, 
            transform: isFaqVisible ? 'none' : 'translateY(40px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          {currentFAQData.faqs.map((item, index) => (
            <div 
              key={`${pathname}-${index}`} // Key includes pathname to reset state on route change
              className="rounded-2xl overflow-hidden border transition-all duration-300"
              style={{ 
                background: 'linear-gradient(180deg,#fff,#fbfbff)',
                boxShadow: '0 6px 20px rgba(16,24,40,0.04)',
                border: '1px solid rgba(226, 232, 240, 0.5)',
                opacity: isFaqVisible ? 1 : 0, 
                transform: isFaqVisible ? 'none' : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${100 + (index * 100)}ms`
              }}
            >
              {/* Question Button */}
              <button 
                className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 
                  className="text-lg font-semibold pr-4"
                  style={{ color: '#062235' }}
                >
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: openIndex === index 
                        ? 'linear-gradient(135deg, #3b82f6, #6366f1)' 
                        : 'linear-gradient(135deg, #e2e8f0, #f1f5f9)',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg 
                      className={`h-4 w-4 transition-colors duration-300 ${
                        openIndex === index ? 'text-white' : 'text-gray-600'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div 
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6" style={{ borderTop: '1px solid rgba(226, 232, 240, 0.5)' }}>
                    <div className="pt-4">
                      <p 
                        className="leading-relaxed"
                        style={{ color: '#64748b' }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}

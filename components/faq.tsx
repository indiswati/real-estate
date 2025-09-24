'use client';
import { useEffect, useRef, useState } from 'react';

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
  const [openIndex, setOpenIndex] = useState(null);

  // Section animation refs (following the pattern from your sample)
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.5 });
  const [faqRef, isFaqVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.3 });

  const toggleAccordion = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How much can I save on energy bills with open projects dubai?",
      answer: "On average, homeowners can save 15-25% on their heating bills with proper open projects dubai. The exact savings depend on your current insulation levels, home size, and heating system."
    },
    {
      question: "How long does open projects dubai installation take?",
      answer: "Most open projects dubai installations can be completed in 1-2 days, depending on the size of your open projects dubai and the type of insulation being installed."
    },
    {
      question: "Do I need to clear my open projects dubai before insulation installation?",
      answer: "Yes, the open projects dubai needs to be cleared of stored items to allow proper installation. We offer open projects dubai clearance services as part of our comprehensive package."
    },
    {
      question: "What type of insulation is best for my home?",
      answer: "The best insulation type depends on your specific needs, budget, and home structure. Our experts can assess your property and recommend the most suitable option."
    },
    {
      question: "Is open projects dubai covered by any government grants?",
      answer: "Yes, there are various government schemes and grants available for home insulation. We can help you identify and apply for applicable programs."
    },
    {
      question: "How long does open projects dubai last?",
      answer: "Quality open projects dubai can last 40+ years with proper installation. Most materials maintain their effectiveness for the lifetime of your home."
    }
  ];

  return (
    <section 
      className="py-20 bg-gray-50" id="faq"
      ref={sectionRef}
      style={{ opacity: isSectionVisible ? 1 : 0 }}
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
            className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ 
              opacity: isTitleVisible ? 1 : 0, 
              transform: isTitleVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-8 w-8 text-blue-600" 
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ 
              opacity: isTitleVisible ? 1 : 0, 
              transform: isTitleVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '100ms'
            }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ 
              opacity: isTitleVisible ? 1 : 0, 
              transform: isTitleVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            Got questions about open projects dubai? We've got answers. Find everything you need to know about our services and process.
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
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              style={{ 
                opacity: isFaqVisible ? 1 : 0, 
                transform: isFaqVisible ? 'none' : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${100 + (index * 100)}ms`
              }}
            >
              {/* Question Button */}
              <button 
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </button>

              {/* Answer Content */}
              <div 
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed">
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

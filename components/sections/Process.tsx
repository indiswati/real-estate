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

export default function Process() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.5 });
  const pathname = usePathname();

  // Get process data based on URL
  const getProcessData = () => {
    if (pathname.includes('real-estate-seller-leads')) {
      return {
        title: "Our Proven Process",
        subtitle: "From lead identification to listing conversion - our systematic approach delivers results",
        steps: [
          {
            number: "1",
            title: "Define",
            description: "We identify your target seller profile and preferred locations for maximum impact.",
            icon: "🎯"
          },
          {
            number: "2", 
            title: "Research",
            description: "Advanced data mining and market analysis to identify motivated property owners.",
            icon: "🔍"
          },
          {
            number: "3",
            title: "Verify", 
            description: "Human verification of seller intent through calls, surveys, and behavioral tracking.",
            icon: "✅"
          },
          {
            number: "4",
            title: "Deliver",
            description: "Qualified seller leads delivered to your CRM with complete prospect profiles.",
            icon: "🏠"
          }
        ]
      };
    }

    if (pathname.includes('real-estate-broker-leads')) {
      return {
        title: "Our Proven Process",
        subtitle: "Strategic broker identification and partnership development for your business growth",
        steps: [
          {
            number: "1",
            title: "Define",
            description: "We identify your ideal broker profile and market focus for strategic partnerships.",
            icon: "🎯"
          },
          {
            number: "2", 
            title: "Research",
            description: "Our experts conduct in-depth research across databases and professional networks.",
            icon: "🔍"
          },
          {
            number: "3",
            title: "Verify", 
            description: "Each lead is manually verified to ensure accuracy, credentials, and reliability.",
            icon: "✅"
          },
          {
            number: "4",
            title: "Deliver",
            description: "We deliver high-quality, ready-to-convert broker leads with complete profiles.",
            icon: "🤝"
          }
        ]
      };
    }

    if (pathname.includes('real-estate-appointment-setting')) {
      return {
        title: "Our Proven Process",
        subtitle: "From prospect identification to confirmed meetings - streamlining your sales pipeline",
        steps: [
          {
            number: "1",
            title: "Define",
            description: "We work with you to define your target audience and specific meeting goals.",
            icon: "🎯"
          },
          {
            number: "2", 
            title: "Research",
            description: "Our experts identify and qualify potential buyers, sellers, and broker prospects.",
            icon: "🔍"
          },
          {
            number: "3",
            title: "Schedule", 
            description: "We contact prospects and book meetings directly into your calendar system.",
            icon: "📅"
          },
          {
            number: "4",
            title: "Confirm",
            description: "All appointments are confirmed and reminders sent to reduce no-shows significantly.",
            icon: "✅"
          }
        ]
      };
    }

    // Default - General leads process
    return {
      title: "How It Works",
      subtitle: "Our proven 4-step process delivers consistent results for your business",
      steps: [
        {
          number: "1",
          title: "Define",
          description: "We understand your ideal customer profile and business objectives in detail.",
          icon: "🎯"
        },
        {
          number: "2", 
          title: "Research",
          description: "Our team researches and filters targeted prospects using advanced tools.",
          icon: "🔍"
        },
        {
          number: "3",
          title: "Verify", 
          description: "Human verification ensures quality and accuracy of every lead delivered.",
          icon: "✅"
        },
        {
          number: "4",
          title: "Deliver",
          description: "We deliver exclusive leads and book  appointments for your success.",
          icon: "🚀"
        }
      ]
    };
  };

  const currentData = getProcessData();

  return (
    <section 
      id="process" 
      className="py-8"
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        opacity: isSectionVisible ? 1 : 0 
      }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className="text-center mb-6"
          ref={titleRef}
          style={{
            opacity: isTitleVisible ? 1 : 0,
            transform: isTitleVisible ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#062235' }}
          >
            {currentData.title}
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#64748b' }}
          >
            {currentData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentData.steps.map((step, index) => (
            <div key={`${pathname}-step-${index}`} className="relative">
              <div
                className="rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border hover:border-blue-200"
                style={{
                  background: 'linear-gradient(180deg,#fff,#fbfdff)',
                  border: '1px solid rgba(226, 232, 240, 0.5)',
                  opacity: isSectionVisible ? 1 : 0,
                  transform: isSectionVisible ? 'none' : 'translateY(40px)',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${200 + index * 150}ms`
                }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)'
                  }}
                >
                  {step.number}
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: '#062235' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: '#64748b' }}
                >
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector for desktop */}
              {index < currentData.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-500 text-2xl z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}

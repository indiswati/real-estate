// components/sections/Process.jsx
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

export default function Process() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.5 });

  const steps = [
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
      description: "Human verification ensures quality and accuracy of every lead.",
      icon: "✅"
    },
    {
      number: "4",
      title: "Deliver",
      description: "We deliver exclusive leads and book qualified appointments for you.",
      icon: "🚀"
    }
  ];

  return (
    <section 
      id="process" 
      className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50"
      ref={sectionRef}
      style={{ opacity: isSectionVisible ? 1 : 0 }}
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step process delivers consistent results for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
                style={{
                  opacity: isSectionVisible ? 1 : 0,
                  transform: isSectionVisible ? 'none' : 'translateY(40px)',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${200 + index * 150}ms`
                }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
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

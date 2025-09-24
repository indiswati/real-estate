// components/sections/Services.jsx
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

export default function Services() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.5 });

  const services = [
    {
      title: "Buyer Leads",
      description: "High-intent buyer leads tailored to your business, verified and ready to convert with guaranteed ROI.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Seller Leads",
      description: "Connect with motivated sellers looking to list and close faster than the market average.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      )
    },
    {
      title: "Broker Leads",
      description: "Exclusive broker leads to expand your network and grow your business pipeline significantly.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Appointment Setting",
      description: "Our expert team books qualified sales appointments directly into your calendar system.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="services" 
      className="py-8 bg-white"
      ref={sectionRef}
      style={{ opacity: isSectionVisible ? 1 : 0 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="text-center mb-6"
          ref={titleRef}
          style={{
            opacity: isTitleVisible ? 1 : 0,
            transform: isTitleVisible ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive lead generation solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2"
              style={{
                opacity: isSectionVisible ? 1 : 0,
                transform: isSectionVisible ? 'none' : 'translateY(40px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${200 + index * 150}ms`
              }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

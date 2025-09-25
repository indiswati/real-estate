// components/sections/Hero.jsx
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

export default function Hero() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section 
      ref={heroRef}
      className="relative pt-10 pb-12 flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{
          opacity: isHeroVisible ? 1 : 0,
          transform: isHeroVisible ? 'none' : 'translateY(40px)',
          transition: 'all 1s ease-out'
        }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{
            opacity: isHeroVisible ? 1 : 0,
            transform: isHeroVisible ? 'none' : 'translateY(30px)',
            transition: 'all 1s ease-out',
            transitionDelay: '200ms'
          }}
        >
          L4RG Lead Generation Services
        </h2>
        <p 
          className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto"
          style={{
            opacity: isHeroVisible ? 1 : 0,
            transform: isHeroVisible ? 'none' : 'translateY(30px)',
            transition: 'all 1s ease-out',
            transitionDelay: '400ms'
          }}
        >
          Exclusive Buyer, Seller, and Broker Leads with Appointment Setting Solutions
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            opacity: isHeroVisible ? 1 : 0,
            transform: isHeroVisible ? 'none' : 'translateY(30px)',
            transition: 'all 1s ease-out',
            transitionDelay: '600ms'
          }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Get Started Today
          </a>
          <a 
            href="#services" 
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Free Trial
          </a>
        </div>
      </div>
      
    </section>
  );
}

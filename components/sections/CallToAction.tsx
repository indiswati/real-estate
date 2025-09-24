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

export default function CallToAction({
  title = "Still Have Questions?",
  description = "Our expert team is here to help. Contact us for personalized advice and answers to all your questions.",
  primaryButton = {
    text: "Contact Our Experts",
    href: "#contact",
    onClick: null
  },
  secondaryButton = {
    text: "Call: 0123 456 789",
    href: "tel:+01234567890",
    onClick: null
  },
  className = ""
}) {
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.3 });

  const handleButtonClick = (button:any, e:any) => {
    if (button.onClick) {
      e.preventDefault();
      button.onClick();
    } else if (button.href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(button.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      ref={ctaRef} id="cta"
      className={`text-center  mt-10 mb-10 ${className}`}
      style={{ 
        opacity: isCtaVisible ? 1 : 0, 
        transform: isCtaVisible ? 'none' : 'translateY(40px)',
        transition: 'all 0.8s ease-out'
      }}
    >
      <div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl space-y-4 p-8 text-white shadow-2xl max-w-6xl mx-auto  gap-8 "
        style={{ 
          opacity: isCtaVisible ? 1 : 0, 
          transform: isCtaVisible ? 'none' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
          transitionDelay: '200ms'
        }}
      >
        <h3 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ 
            opacity: isCtaVisible ? 1 : 0, 
            transform: isCtaVisible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '300ms'
          }}
        >
          {title}
        </h3>
        
        <p 
          className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg leading-relaxed"
          style={{ 
            opacity: isCtaVisible ? 1 : 0, 
            transform: isCtaVisible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '400ms'
          }}
        >
          {description}
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ 
            opacity: isCtaVisible ? 1 : 0, 
            transform: isCtaVisible ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
            transitionDelay: '500ms'
          }}
        >
          {primaryButton && (
            <a
              href={primaryButton.href}
              onClick={(e) => handleButtonClick(primaryButton, e)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-600 shadow-lg"
            >
              {primaryButton.text}
            </a>
          )}
          
          {secondaryButton && (
            <a
              href={secondaryButton.href}
              onClick={(e) => handleButtonClick(secondaryButton, e)}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              {secondaryButton.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

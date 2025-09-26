// components/sections/Hero.jsx
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

export default function Hero() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.3 });
  const pathname = usePathname();

  // Get hero data based on URL
  const getHeroData = () => {
    if (pathname.includes('real-estate-seller-leads')) {
      return {
        title: "Premium Seller Leads for Real Estate Professionals",
        subtitle: "Connect with motivated property owners ready to sell - verified, qualified, and exclusive to your market area",
        backgroundImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80&auto=format&fit=crop",
        primaryButton: {
          text: "Get Seller Leads",
          href: "#contact"
        },
        secondaryButton: {
          text: "View Success Stories",
          href: "#testimonials"
        }
      };
    }

    if (pathname.includes('real-estate-broker-leads')) {
      return {
        title: "Verified Broker Network & Partnership Opportunities",
        subtitle: "Connect with licensed, high-performing real estate brokers across your target markets for strategic growth",
        backgroundImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&auto=format&fit=crop",
        primaryButton: {
          text: "Find Brokers",
          href: "#contact"
        },
        secondaryButton: {
          text: "Explore Network",
          href: "#services"
        }
      };
    }

    if (pathname.includes('real-estate-appointment-setting')) {
      return {
        title: "Professional Appointment Setting Services",
        subtitle: "Fill your calendar with confirmed, qualified meetings - from prospect identification to final confirmation",
        backgroundImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80&auto=format&fit=crop",
        primaryButton: {
          text: "Schedule Consultation",
          href: "#contact"
        },
        secondaryButton: {
          text: "See Results",
          href: "#process"
        }
      };
    }

    if (pathname.includes('buyer')) {
      return {
        title: "High-Intent Buyer Leads That Convert",
        subtitle: "Qualified, verified buyer leads tailored to your ideal customer profile - ready to purchase and move forward",
        backgroundImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&q=80&auto=format&fit=crop",
        primaryButton: {
          text: "Get Buyer Leads",
          href: "#contact"
        },
        secondaryButton: {
          text: "Start Free Trial",
          href: "#packages"
        }
      };
    }

    // Default - General leads
    return {
      title: "L4RG Lead Generation Services",
      subtitle: "Exclusive Buyer, Seller, and Broker Leads with Appointment Setting Solutions",
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80&auto=format&fit=crop",
      primaryButton: {
        text: "Get Started Today",
        href: "#contact"
      },
      secondaryButton: {
        text: "Free Trial",
        href: "#services"
      }
    };
  };

  const currentData = getHeroData();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative pt-10 pb-12 flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('${currentData.backgroundImage}')`,
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
        <h2 
          className="text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{
            opacity: isHeroVisible ? 1 : 0,
            transform: isHeroVisible ? 'none' : 'translateY(30px)',
            transition: 'all 1s ease-out',
            transitionDelay: '200ms'
          }}
        >
          {currentData.title}
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
          {currentData.subtitle}
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
          <button 
            onClick={() => scrollToSection(currentData.primaryButton.href)}
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            {currentData.primaryButton.text}
          </button>
          <button 
            onClick={() => scrollToSection(currentData.secondaryButton.href)}
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            {currentData.secondaryButton.text}
          </button>
        </div>

       
      </div>
    </section>
  );
}

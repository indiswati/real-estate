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

export function LeadServices() {
  // Section animation ref (following the pattern from your sample)
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.5 });

  const services = [
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 640 512"
          className="text-3xl text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
        </svg>
      ),
      title: "Buyer Leads",
      description: "Our buyer leads are 100% verified and segmented by budget, property type, and location. We focus on serious investors and end-users searching for Dubai's open projects and off-plan properties."
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="text-3xl text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
        </svg>
      ),
      title: "Seller Leads",
      description: "Connect directly with motivated property owners ready to sell. Our seller leads include verified contact details and property information."
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 640 512"
          className="text-3xl text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
        </svg>
      ),
      title: "Broker Leads",
      description: "Expand your professional network with our curated list of brokers and real estate consultants. Build partnerships and close more deals."
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="text-3xl text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path>
        </svg>
      ),
      title: "Appointment Setting",
      description: "Our team schedules qualified meetings on your behalf with interested buyers, sellers, and investors. Focus on closing deals while we handle the logistics."
    }
  ];

  return (
    <section 
      id="lead-services" 
      className="max-w-6xl mx-auto py-20 px-6" 
      ref={sectionRef}
      style={{ opacity: isSectionVisible ? 1 : 0 }}
    >
      <h2
        ref={titleRef}
        className="text-4xl font-bold text-gray-800 mb-16 text-center bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent"
        style={{ 
          opacity: isTitleVisible ? 1 : 0, 
          transform: isTitleVisible ? 'none' : 'translateY(20px)' 
        }}
      >
        Lead Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 border border-white/20 group transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95 active:translate-y-0"
            style={{ 
              opacity: isSectionVisible ? 1 : 0, 
              transform: isSectionVisible ? 'none' : 'translateY(30px)',
              transitionDelay: `${index * 150}ms`
            }}
          >
            <div className="flex items-center mb-4 group-hover:scale-105 transition-transform duration-300">
              {service.icon}
              <h3 className="text-2xl font-semibold text-indigo-600 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-all duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

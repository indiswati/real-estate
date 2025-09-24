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

export function About() {
  // Section animation refs (following the pattern from your sample)
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.5 });
  const [contentRef, isContentVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [imageRef, isImageVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [featuresRef, isFeaturesVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [statsRef, isStatsVisible] = useIntersectionObserver({ threshold: 0.3 });

  const stats = [
    {
      number: "500+",
      label: "Properties Sold"
    },
    {
      number: "1000+",
      label: "Happy Clients"
    },
    {
      number: "50+",
      label: "Awards Won"
    },
    {
      number: "15+",
      label: "Years Experience"
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Verified Properties",
      description: "Every property in our portfolio is thoroughly verified and legally compliant."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Processing",
      description: "Quick turnaround times with our streamlined processes and expert team."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Dedicated professionals with deep knowledge of Dubai's real estate market."
    }
  ];

  return (
    <section 
      id="about" 
      className="bg-gradient-to-br from-gray-50 to-blue-50 py-2 px-6"
      ref={sectionRef}
      style={{ opacity: isSectionVisible ? 1 : 0 }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div 
          className="text-center mb-16"
          style={{ 
            opacity: isTitleVisible ? 1 : 0, 
            transform: isTitleVisible ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h2 
            ref={titleRef}
            className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent"
            style={{ 
              opacity: isTitleVisible ? 1 : 0, 
              transform: isTitleVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            About Open Projects 
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              opacity: isTitleVisible ? 1 : 0, 
              transform: isTitleVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            Discover what sets us apart in Dubai's competitive real estate market and why thousands of clients trust our services.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Content */}
          <div 
            ref={contentRef}
            className="flex flex-col justify-start"
            style={{ 
              opacity: isContentVisible ? 1 : 0, 
              transform: isContentVisible ? 'none' : 'translateX(-50px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <h3 
              className="text-3xl font-bold text-gray-800 mb-6"
              style={{ 
                opacity: isContentVisible ? 1 : 0, 
                transform: isContentVisible ? 'none' : 'translateY(20px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: '100ms'
              }}
            >
              Your Trusted Partner in Dubai Real Estate
            </h3>
            <div 
              className="space-y-4 text-gray-600 leading-relaxed"
              style={{ 
                opacity: isContentVisible ? 1 : 0, 
                transform: isContentVisible ? 'none' : 'translateY(20px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: '200ms'
              }}
            >
              <p>
                With over 15 years of experience in Dubai's dynamic real estate market, RealEstatePro has established itself as a leading force in property investment and development. We specialize in connecting investors with Dubai's most promising off-plan projects and open developments.
              </p>
              <p>
                Our comprehensive approach combines cutting-edge technology with deep market expertise to deliver exceptional results for our clients. From first-time buyers to seasoned investors, we provide personalized solutions that align with your investment goals.
              </p>
              <p>
                We pride ourselves on transparency, professionalism, and delivering measurable results. Our track record speaks for itself - over 500 successful property transactions and a client satisfaction rate of 98%.
              </p>
            </div>
          </div>

          {/* Right Column - Image (aligned to start) */}
          <div 
            ref={imageRef}
            className="flex flex-col justify-start"
            style={{ 
              opacity: isImageVisible ? 1 : 0, 
              transform: isImageVisible ? 'none' : 'translateX(50px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            <div className="relative group">
              <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden p-4 group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="/modern-dubai-skyline-with-skyscrapers.webp"
                  alt="Dubai Real Estate"
                  className="w-full h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-4 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
                
                {/* Floating Stats Card */}
                <div 
                  className="absolute bottom-8 left-8 right-8"
                  style={{ 
                    opacity: isImageVisible ? 1 : 0, 
                    transform: isImageVisible ? 'none' : 'translateY(20px)',
                    transition: 'all 0.8s ease-out',
                    transitionDelay: '600ms'
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white/20 group-hover:bg-white/95 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 group-hover:scale-105 transition-transform duration-300">AED 2B+</div>
                      <div className="text-sm text-gray-600">Total Property Value Handled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Horizontal Layout */}
        <div 
          ref={featuresRef}
          className="mb-20"
          style={{ 
            opacity: isFeaturesVisible ? 1 : 0, 
            transform: isFeaturesVisible ? 'none' : 'translateY(40px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                style={{ 
                  opacity: isFeaturesVisible ? 1 : 0, 
                  transform: isFeaturesVisible ? 'none' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${200 + (index * 150)}ms`
                }}
              >
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-4">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500"
          style={{ 
            opacity: isStatsVisible ? 1 : 0, 
            transform: isStatsVisible ? 'none' : 'translateY(40px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h3 
            className="text-2xl font-bold text-center text-gray-800 mb-8"
            style={{ 
              opacity: isStatsVisible ? 1 : 0, 
              transform: isStatsVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
              transitionDelay: '100ms'
            }}
          >
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{ 
                  opacity: isStatsVisible ? 1 : 0, 
                  transform: isStatsVisible ? 'none' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${200 + (index * 100)}ms`
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

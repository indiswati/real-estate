'use client';
import { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

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

export function Testimonials() {
  // Section animation ref (following the pattern from your sample)
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.5 });

  const testimonials = [
    {
      quote: "RealEstatePro helped me find my dream villa in Dubai in less than a week. Highly professional!",
      author: "Sarah M",
      rating: 5
    },
    {
      quote: "Their appointment setting service saved me hours of back-and-forth with agents.",
      author: "Ahmed R.",
      rating: 4
    },
    {
      quote: "Great lead generation campaigns — we closed 30% more deals this quarter",
      author: "John D.",
      rating: 5
    }
  ];

  return (
    <section 
      className="bg-gradient-to-br from-gray-100 to-blue-100 py-20 px-6" 
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
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 text-center border border-white/20 group transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95 active:translate-y-0"
            style={{ 
              opacity: isSectionVisible ? 1 : 0, 
              transform: isSectionVisible ? 'none' : 'translateY(30px)',
              transitionDelay: `${index * 200}ms`
            }}
          >
            {/* Quote Icon */}
            <div 
              className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors duration-300"
              style={{ 
                opacity: isSectionVisible ? 1 : 0, 
                transform: isSectionVisible ? 'none' : 'scale(0.8)',
                transitionDelay: `${(index * 200) + 100}ms`
              }}
            >
              <Quote className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Rating */}
            <div 
              className="flex items-center justify-center mb-4"
              style={{ 
                opacity: isSectionVisible ? 1 : 0, 
                transform: isSectionVisible ? 'none' : 'translateY(10px)',
                transitionDelay: `${(index * 200) + 150}ms`
              }}
            >
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 text-yellow-400 fill-current mr-1 group-hover:scale-110 transition-transform duration-300" 
                  style={{
                    transitionDelay: `${i * 50}ms`
                  }}
                />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star 
                  key={i + testimonial.rating} 
                  className="w-5 h-5 text-gray-300 mr-1" 
                />
              ))}
            </div>

            <p 
              className="text-gray-600 mb-6 italic text-lg leading-relaxed group-hover:text-gray-700 transition-all duration-300"
              style={{ 
                opacity: isSectionVisible ? 1 : 0, 
                transform: isSectionVisible ? 'none' : 'translateY(15px)',
                transitionDelay: `${(index * 200) + 200}ms`
              }}
            >
              "{testimonial.quote}"
            </p>
            
            <h4 
              className="font-bold text-indigo-600 text-xl group-hover:text-blue-700 group-hover:scale-105 transition-all duration-300"
              style={{ 
                opacity: isSectionVisible ? 1 : 0, 
                transform: isSectionVisible ? 'none' : 'translateY(10px)',
                transitionDelay: `${(index * 200) + 250}ms`
              }}
            >
              {testimonial.author}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

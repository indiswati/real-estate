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

export default function LeadsContact() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('Submitting...');
    
    // Simulate form submission
    setTimeout(() => {
      setFormMessage('Thanks — we received your request. A specialist will contact you within 1 business day.');
      setIsSubmitting(false);
      e.target.reset();
    }, 900);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 mx-auto px-4 sm:px-6 lg:px-8 mx-auto px-4 sm:px-5 py-8 lg:py-16"
      aria-labelledby="contact-heading"
    >
      {/* Responsive Heading */}
      <h2 
        id="contact-heading"
        className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0f172a] mb-3 lg:mb-5 text-center lg:text-left"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        Get Started — Book a Pilot or Request a Quote
      </h2>
      
      {/* Responsive Description */}
      <p 
        className="text-sm md:text-base text-center lg:text-left mb-6 lg:mb-8"
        style={{
          color: '#64748b',
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out',
          transitionDelay: '200ms'
        }}
      >
        Fill the form and our growth specialist will reach out within one business day.
      </p>

      {/* Responsive Grid Layout */}
      <div 
        className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 lg:gap-5 items-start"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
          transitionDelay: '300ms'
        }}
      >
        {/* Form Column */}
        <div className="order-2 lg:order-1">
          <form 
            onSubmit={handleSubmit}
            aria-label="Lead capture form"
            className="space-y-4"
          >
            {/* Company Field */}
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-2">
                Company
              </label>
              <input 
                type="text" 
                required 
                placeholder="Your company name"
                className="w-full px-3 py-3 text-sm lg:text-base rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>

            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-2">
                Full name
              </label>
              <input 
                type="text" 
                required 
                placeholder="Your full name"
                className="w-full px-3 py-3 text-sm lg:text-base rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-2">
                Work email
              </label>
              <input 
                type="email" 
                required 
                placeholder="name@company.com"
                className="w-full px-3 py-3 text-sm lg:text-base rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-2">
                Phone (optional)
              </label>
              <input 
                type="text" 
                placeholder="+44 7000 000000"
                className="w-full px-3 py-3 text-sm lg:text-base rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>

            {/* Service Interest Field */}
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-2">
                Service interest
              </label>
              <select className="w-full px-3 py-3 text-sm lg:text-base rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white">
                <option>Pilot (30 leads)</option>
                <option>Monthly Lead Program</option>
                <option>Enterprise / Custom</option>
              </select>
            </div>

            {/* Notes Field */}
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-2">
                Notes (optional)
              </label>
              <textarea 
                rows={4}
                placeholder="Any target markets, industries or constraints"
                className="w-full px-3 py-3 text-sm lg:text-base rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? 'Submitting...' : 'Request Callback'}
            </button>
            
            {/* Form Message */}
            {formMessage && (
              <div 
                className="text-sm mt-3 p-3 rounded-lg"
                style={{ 
                  color: formMessage.includes('Thanks') ? '#059669' : '#6b7280',
                  backgroundColor: formMessage.includes('Thanks') ? '#d1fae5' : '#f3f4f6'
                }}
              >
                {formMessage}
              </div>
            )}
          </form>
        </div>

        {/* Info Panel - Show first on mobile */}
        <aside 
          className="order-1 lg:order-2 w-full"
          style={{
            padding: '18px',
            background: 'linear-gradient(180deg,#fff,#fbfdff)',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(16,24,40,0.08)'
          }}
        >
          <h3 
            className="text-lg font-semibold text-[#0f172a] mb-4"
            style={{ marginTop: 0 }}
          >
            What happens next?
          </h3>
          
          <ol className="text-sm space-y-3 mb-6" style={{ color: '#64748b' }}>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span>
                <strong className="text-[#0f172a]">We review</strong> your request & confirm availability.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span>
                <strong className="text-[#0f172a]">Discovery call</strong> to finalise ICP and timeline.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span>
                <strong className="text-[#0f172a]">Pilot kickoff</strong> with agreed SLAs and tracking.
              </span>
            </li>
          </ol>

          {/* Contact Information */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div>
              <strong className="block text-[#0f172a] text-sm font-semibold mb-1">
                Email
              </strong>
              <a 
                href="mailto:hello@l4rg.com"
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                hello@l4rg.com
              </a>
            </div>
            
            <div>
              <strong className="block text-[#0f172a] text-sm font-semibold mb-1">
                Phone
              </strong>
              <a 
                href="tel:+442079460000"
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                +44 20 7946 0000
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

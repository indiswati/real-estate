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

  const handleSubmit = async (e:any) => {
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
      
      className="max-w-[1150px] mx-auto px-5 mt-10"
      style={{ paddingBottom: '60px' }}
      aria-labelledby="contact-heading"
    >
      <h2 
        id="contact-heading"
        className="text-2xl font-bold text-[#0f172a] mb-3"
        style={{
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease-out'
        }}
      >
        Get Started — Book a Pilot or Request a Quote
      </h2>
      
      <p 
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

      {/* .contact-grid - display:grid; grid-template-columns:1fr 420px; gap:20px; align-items:start */}
      <div 
        className="grid items-start mt-6"
        style={{
          gridTemplateColumns: '1fr 420px',
          gap: '20px',
          opacity: isSectionVisible ? 1 : 0,
          transform: isSectionVisible ? 'none' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
          transitionDelay: '300ms'
        }}
      >
        {/* Form Column */}
        <div>
          <form 
            onSubmit={handleSubmit}
            aria-label="Lead capture form"
            className="flex flex-col"
            style={{ gap: '12px' }}
          >
            <label className="text-sm font-medium text-[#64748b]">Company</label>
            <input 
              type="text" 
              required 
              placeholder="Your company name"
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid rgba(12,20,30,0.06)',
                fontSize: '0.95rem'
              }}
            />

            <label className="text-sm font-medium text-[#64748b]">Full name</label>
            <input 
              type="text" 
              required 
              placeholder="Your full name"
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid rgba(12,20,30,0.06)',
                fontSize: '0.95rem'
              }}
            />

            <label className="text-sm font-medium text-[#64748b]">Work email</label>
            <input 
              type="email" 
              required 
              placeholder="name@company.com"
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid rgba(12,20,30,0.06)',
                fontSize: '0.95rem'
              }}
            />

            <label className="text-sm font-medium text-[#64748b]">Phone (optional)</label>
            <input 
              type="text" 
              placeholder="+44 7000 000000"
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid rgba(12,20,30,0.06)',
                fontSize: '0.95rem'
              }}
            />

            <label className="text-sm font-medium text-[#64748b]">Service interest</label>
            <select 
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid rgba(12,20,30,0.06)',
                fontSize: '0.95rem'
              }}
            >
              <option>Pilot (30 leads)</option>
              <option>Monthly Lead Program</option>
              <option>Enterprise / Custom</option>
            </select>

            <label className="text-sm font-medium text-[#64748b]">Notes (optional)</label>
            <textarea 
              rows="4" 
              placeholder="Any target markets, industries or constraints"
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid rgba(12,20,30,0.06)',
                fontSize: '0.95rem',
                resize: 'vertical'
              }}
            />

            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
              transform: "none",
            }}
              
              
            >
              {isSubmitting ? 'Submitting...' : 'Request Callback'}
            </button>
            
            {formMessage && (
              <div 
                className="text-sm mt-2"
                style={{ 
                  color: formMessage.includes('Thanks') ? 'green' : '#6b7280'
                }}
              >
                {formMessage}
              </div>
            )}
          </form>
        </div>

        {/* Aside Column */}
        <aside 
          style={{
            padding: '18px',
            background: 'linear-gradient(180deg,#fff,#fbfdff)',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(16,24,40,0.08)'
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#0f172a' }}>
            What happens next?
          </h3>
          
          <ol className="text-sm list-decimal list-inside space-y-2" style={{ color: '#64748b' }}>
            <li><strong className="text-[#0f172a]">We review</strong> your request & confirm availability.</li>
            <li><strong className="text-[#0f172a]">Discovery call</strong> to finalise ICP and timeline.</li>
            <li><strong className="text-[#0f172a]">Pilot kickoff</strong> with agreed SLAs and tracking.</li>
          </ol>

          <div style={{ marginTop: '12px' }}>
            <strong className="block text-[#0f172a]">Email</strong>
            <div className="text-sm" style={{ color: '#64748b' }}>hello@l4rg.com</div>
            
            <strong 
              className="block text-[#0f172a]" 
              style={{ marginTop: '8px' }}
            >
              Phone
            </strong>
            <div className="text-sm" style={{ color: '#64748b' }}>+44 20 7946 0000</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

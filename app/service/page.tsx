// components/ServicesPage.jsx
'use client';
import { useEffect, useRef, useState } from 'react';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Hero from '@/components/sections/Hero';
import { FAQ } from '@/components/faq';
import { Testimonials } from '@/components/testimonials';
import { Header } from '@/components/header';
import SectionHeader from '@/components/sections/Header';
import CallToAction from '@/components/sections/CallToAction';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';

// Custom hook for intersection observer
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

export default function ServicesPage() {
    return (
        <div className="font-poppins bg-gradient-to-br from-gray-50 to-blue-50">
            <Header />
            <Hero />
            <SectionHeader />
            <Services />
            <Process />
            <FAQ />
            <Testimonials />
            {/* <CallToAction /> */}
            <ContactForm />
            <Footer />
            {/* <Contact /> */}
        </div>
    );
}

// app/[service]/page.jsx or components/ServicePage.jsx
'use client';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import Hero from '@/components/sections/Hero';
import { Footer } from '@/components/footer';
import LeadsHero from '@/components/sections/LeadsHero';
import Features from '@/components/sections/Features';
import Process from '@/components/sections/Process';
import LeadsPackages from '@/components/sections/LeadsPackages';
import { Testimonials } from '@/components/testimonials';
import { ContactForm } from '@/components/contact-form';
import { FAQ } from '@/components/faq';
import WhatYouGet from '@/components/sections/WhatYouGet';

export default function Page() {
  const pathname = usePathname();

  // Determine which components to show based on URL
  const getPageComponents = () => {
    const commonComponents = {
      header: <Header key="header" />,
      hero: <Hero key="hero" />,
      leadsHero: <LeadsHero key="leadsHero" />,
      testimonials: <Testimonials key="testimonials" />,
      contact: <ContactForm key="contact" />,
      footer: <Footer key="footer" />
    };

    if (pathname.includes('seller')) {
      return [
        commonComponents.header,
        commonComponents.hero,
        commonComponents.leadsHero,
        <Features key="features" />,
        <Process key="process" />,
        <FAQ key="faq" />,
        commonComponents.testimonials,
        commonComponents.contact,
        commonComponents.footer
      ];
    }

    if (pathname.includes('broker')) {
      return [
        commonComponents.header,
        commonComponents.hero,
        commonComponents.leadsHero,
        <Process key="process" />,
        <WhatYouGet key="whatYouGet" />,
        <FAQ key="faq" />,
        commonComponents.testimonials,
        commonComponents.contact,
        commonComponents.footer
      ];
    }

    if (pathname.includes('appointment')) {
      return [
        commonComponents.header,
        commonComponents.hero,
        commonComponents.leadsHero,
        <Process key="process" />,
        <WhatYouGet key="whatYouGet" />,
        <FAQ key="faq" />,
        commonComponents.testimonials,
        commonComponents.contact,
        commonComponents.footer
      ];
    }

    // Default - Buyer leads page
    return [
      commonComponents.header,
      commonComponents.hero,
      commonComponents.leadsHero,
      <Features key="features" />,
      <Process key="process" />,
      <LeadsPackages key="packages" />,
      <FAQ key="faq" />,
      commonComponents.testimonials,
      commonComponents.contact,
      commonComponents.footer
    ];
  };

  const components = getPageComponents();

  return (
    <div className="font-poppins bg-gradient-to-br from-gray-50 to-blue-50">
      {components.map(component => component)}
    </div>
  );
}

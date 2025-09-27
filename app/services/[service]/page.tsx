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
import { useMemo } from 'react';

// Dynamic schema configuration
const getSchemaConfig = (pathname: string) => {
  const isSellerLeads = pathname?.includes('real-estate-seller-leads');
  const isBrokerLeads = pathname?.includes('real-estate-broker-leads');
  const isAppointmentSetting = pathname?.includes('real-estate-appointment-setting');
  
  if (isSellerLeads) {
    return {
      canonical: "https://www.openprojects.ae/services/real-estate-seller-leads",
      image: "https://d3euc6irt3la1j.cloudfront.net/real-estate-seller-leads-in-dubai.webp",
      productId: "#product2",
      productName: "Real Estate Seller Leads in Dubai",
      reviewCount: "9302",
      audienceType: "Real Estate Agencies, Property Brokers, Realtors, Developers, Sales Teams",
      breadcrumbName: "Seller Leads",
      title: "Real Estate Seller Leads in Dubai | OpenProjects",
      description: "Connect with verified property sellers in Dubai through OpenProjects. Expand your real estate network and grow your business with quality seller leads."
    };
  }
  
  if (isBrokerLeads) {
    return {
      canonical: "https://www.openprojects.ae/services/real-estate-broker-leads",
      image: "https://d3euc6irt3la1j.cloudfront.net/real-estate-broker-leads.webp",
      productId: "#product3",
      productName: "Real Estate Broker Leads in Dubai",
      reviewCount: "972",
      audienceType: "Real Estate Agencies, Property Brokers, Realtors, Developers, Sales Teams",
      breadcrumbName: "Broker Leads",
      title: "Real Estate Broker Leads in Dubai | OpenProjects",
      description: "Connect with verified real estate brokers in Dubai through OpenProjects. Expand your network and grow your business with quality broker leads."
    };
  }
  
  if (isAppointmentSetting) {
    return {
      canonical: "https://www.openprojects.ae/services/real-estate-appointment-setting",
      image: "https://d3euc6irt3la1j.cloudfront.net/real-estate-appointment-setting.webp",
      productId: "#product4",
      productName: "Real Estate Appointment Setting in Dubai",
      reviewCount: "7202",
      audienceType: "Real Estate Agencies, Property Brokers, Realtors, Developers, Sales Teams",
      breadcrumbName: "Appointment Setting",
      title: "Real Estate Appointment Setting in Dubai | OpenProjects",
      description: "Professional appointment setting services for Dubai real estate. OpenProjects helps you schedule qualified meetings with potential buyers and sellers."
    };
  }
  
  // Default - Buyer leads
  return {
    canonical: "https://www.openprojects.ae/services/real-estate-buyer-leads",
    image: "https://d3euc6irt3la1j.cloudfront.net/real-estate-buyer-leads.webp",
    productId: "#product1",
    productName: "Real Estate Buyer Leads in Dubai",
    reviewCount: "93202",
    audienceType: "Real Estate Agencies, Property Brokers, Realtors, Developers, Sales Teams",
    breadcrumbName: "Buyer Leads",
    title: "Dubai Real Estate Buyer Leads | Qualified Prospects Leads",
    description: "Access premium real estate buyer leads in Dubai. OpenProjects delivers verified prospects to help you close more property deals and grow your business."
  };
};

export default function Page() {
  const pathname = usePathname();
  const config = getSchemaConfig(pathname);

  // Generate dynamic schemas based on pathname
  const generateSchemas = (config: any) => {
    const productSchema = {
      "@context": "http://schema.org",
      "@id": config.productId,
      "@type": "Product",
      "name": config.productName,
      "image": [config.image],
      "description": config.description,
      "url": config.canonical,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": config.reviewCount
      },
      "audience": {
        "@type": "Audience",
        "name": "OpenProjects",
        "audienceType": config.audienceType
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.openprojects.ae"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.openprojects.ae/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": config.breadcrumbName,
          "item": config.canonical
        }
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.openprojects.ae",
      "name": "OpenProjects.ae",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.openprojects.ae/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": config.canonical,
      "name": config.title,
      "description": config.description,
      "publisher": {
        "@type": "Organization",
        "name": "OpenProjects.ae",
        "logo": {
          "@type": "ImageObject",
          "url": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Logo.webp"
        },
        "url": config.canonical
      },
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "inLanguage": "en",
      "about": {
        "@type": "Thing",
        "name": config.productName
      }
    };

    return {
      productSchema,
      breadcrumbSchema,
      websiteSchema,
      webPageSchema
    };
  };

  const schemas = generateSchemas(config);

  // Memoize components to prevent unnecessary re-renders
  const components = useMemo(() => {
    const commonComponents = {
      header: <Header />,
      hero: <Hero />,
      leadsHero: <LeadsHero />,
      testimonials: <Testimonials />,
      contact: <ContactForm />,
      footer: <Footer />
    };

    if (pathname?.includes('real-estate-seller-leads')) {
      return [
        { id: 'header', component: commonComponents.header },
        { id: 'hero', component: commonComponents.hero },
        { id: 'leadsHero', component: commonComponents.leadsHero },
        { id: 'features', component: <Features /> },
        { id: 'process', component: <Process /> },
        { id: 'faq', component: <FAQ /> },
        { id: 'testimonials', component: commonComponents.testimonials },
        { id: 'contact', component: commonComponents.contact },
        { id: 'footer', component: commonComponents.footer }
      ];
    }

    if (pathname?.includes('real-estate-broker-leads')) {
      return [
        { id: 'header', component: commonComponents.header },
        { id: 'hero', component: commonComponents.hero },
        { id: 'leadsHero', component: commonComponents.leadsHero },
        { id: 'process', component: <Process /> },
        { id: 'whatYouGet', component: <WhatYouGet /> },
        { id: 'faq', component: <FAQ /> },
        { id: 'testimonials', component: commonComponents.testimonials },
        { id: 'contact', component: commonComponents.contact },
        { id: 'footer', component: commonComponents.footer }
      ];
    }

    if (pathname?.includes('real-estate-appointment-setting')) {
      return [
        { id: 'header', component: commonComponents.header },
        { id: 'hero', component: commonComponents.hero },
        { id: 'leadsHero', component: commonComponents.leadsHero },
        { id: 'process', component: <Process /> },
        { id: 'whatYouGet', component: <WhatYouGet /> },
        { id: 'faq', component: <FAQ /> },
        { id: 'testimonials', component: commonComponents.testimonials },
        { id: 'contact', component: commonComponents.contact },
        { id: 'footer', component: commonComponents.footer }
      ];
    }

    // Default - Buyer leads page
    return [
      { id: 'header', component: commonComponents.header },
      { id: 'hero', component: commonComponents.hero },
      { id: 'leadsHero', component: commonComponents.leadsHero },
      { id: 'features', component: <Features /> },
      { id: 'process', component: <Process /> },
      { id: 'packages', component: <LeadsPackages /> },
      { id: 'faq', component: <FAQ /> },
      { id: 'testimonials', component: commonComponents.testimonials },
      { id: 'contact', component: commonComponents.contact },
      { id: 'footer', component: commonComponents.footer }
    ];
  }, [pathname]);

  return (
    <>
      <div className="font-poppins bg-gradient-to-br from-gray-50 to-blue-50">
        {components.map(({ id, component }) => (
          <div key={id}>
            {component}
          </div>
        ))}
      </div>

      {/* Dynamic Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPageSchema) }}
      />
    </>
  );
}

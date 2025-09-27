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
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real Estate Services in Dubai | Buyer, Seller, Broker Leads & Appointment Setting",
  description: "Discover OpenProjects' real estate services in Dubai including buyer leads, seller leads, broker leads, and appointment setting. Grow your business today.",
  keywords: "Dubai real estate services, buyer leads Dubai, seller leads Dubai, broker leads Dubai, appointment setting Dubai, OpenProjects services",
  authors: [{ name: "OpenProjects" }],
  generator: "OpenProjects",
  applicationName: "OpenProjects.ae",
  referrer: "origin-when-cross-origin",
  creator: "OpenProjects",
  publisher: "OpenProjects.ae",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.openprojects.ae/services",
    languages: {
      'en-US': 'https://www.openprojects.ae/services',
      'en-AE': 'https://www.openprojects.ae/services/en-AE',
      'de-DE': 'https://www.openprojects.ae/services/de-DE',
      'es-ES': 'https://www.openprojects.ae/services/es-ES',
      'fr-FR': 'https://www.openprojects.ae/services/fr-FR',
      'pt-BR': 'https://www.openprojects.ae/services/pt-BR',
      'en-GB': 'https://www.openprojects.ae/services/en-GB',
      'en-CA': 'https://www.openprojects.ae/services/en-CA',
      'en-MY': 'https://www.openprojects.ae/services/en-MY',
      'en-SG': 'https://www.openprojects.ae/services/en-SG',
      'en-NG': 'https://www.openprojects.ae/services/en-NG',
      'en-ID': 'https://www.openprojects.ae/services/en-ID',
      'en-IE': 'https://www.openprojects.ae/services/en-IE',
      'en-AU': 'https://www.openprojects.ae/services/en-AU',
      'en-IN': 'https://www.openprojects.ae/services/en-IN',
      'en-NZ': 'https://www.openprojects.ae/services/en-NZ',
      'en-PH': 'https://www.openprojects.ae/services/en-PH',
      'en-ZA': 'https://www.openprojects.ae/services/en-ZA',
      'es-MX': 'https://www.openprojects.ae/services/es-MX',
      'es-CO': 'https://www.openprojects.ae/services/es-CO',
      'es-PE': 'https://www.openprojects.ae/services/es-PE',
      'es-AR': 'https://www.openprojects.ae/services/es-AR',
      'es-CL': 'https://www.openprojects.ae/services/es-CL',
      'es-VE': 'https://www.openprojects.ae/services/es-VE',
      'pt-PT': 'https://www.openprojects.ae/services/pt-PT',
      'fr-CA': 'https://www.openprojects.ae/services/fr-CA',
      'fr-BE': 'https://www.openprojects.ae/services/fr-BE'
    }
  },
  verification: {
    google: "8lLnfgtzeWYzbG6mAgPavNtZqe5C-2KHD63EgwGCYY4",
    yandex: "6c4c214b1ecfc78a",
    other: {
      'msvalidate.01': "3F0EE338EB9D6CC7D5B8613FB0D3B8F9",
      'p:domain_verify': "23785c7c6b52745236df36e5ed7de744"
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.openprojects.ae/services",
    siteName: "OpenProjects.ae - Dubai Real Estate Leads",
    title: "Real Estate Services in Dubai | Buyer, Seller, Broker Leads & Appointment Setting",
    description: "OpenProjects provides expert real estate services in Dubai — buyer leads, seller leads, broker leads, and appointment setting for agents and brokers.",
    images: [{
      url: "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Services.webp",
      width: 1200,
      height: 630,
      alt: "Real Estate Services in Dubai",
      type: "image/webp"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@OpenProjectsUAE",
    creator: "@OpenProjectsUAE",
    title: "Real Estate Services in Dubai | Buyer, Seller, Broker Leads & Appointment Setting",
    description: "Boost your sales with OpenProjects' real estate services in Dubai — buyer leads, seller leads, broker leads, and appointment setting.",
    images: [{
      url: "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Services.webp",
      alt: "Real Estate Services in Dubai"
    }]
  },
  icons: {
    icon: [
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-96x96.webp", sizes: "96x96", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-android-icon-192x192.webp", sizes: "192x192", type: "image/webp" }
    ],
    apple: [
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-57x57.webp", sizes: "57x57", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-60x60.webp", sizes: "60x60", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-72x72.webp", sizes: "72x72", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-76x76.webp", sizes: "76x76", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-114x114.webp", sizes: "114x114", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-120x120.webp", sizes: "120x120", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-144x144.webp", sizes: "144x144", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-152x152.webp", sizes: "152x152", type: "image/webp" },
      { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-180x180.webp", sizes: "180x180", type: "image/webp" }
    ]
  },
  manifest: "https://www.openprojects.ae/manifest.json",
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': 'https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-ms-icon-144x144.webp',
    'copyright': '© 2025'
  }
};



 const jsonLdSchemas = [
    // Product Schema
    {
      "@context": "http://schema.org",
      "@id": "#product5",
      "@type": "Product",
      "name": "Real Estate Services in Dubai",
      "image": ["https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Services.webp"],
      "description": "Buyer leads, seller leads, broker leads, and appointment setting services for Dubai real estate professionals.",
      "url": "https://www.openprojects.ae/services",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "93202"
      },
      "audience": {
        "@type": "Audience",
        "name": "OpenProjects",
        "audienceType": "Real Estate Agencies, Property Brokers, Realtors, Developers, Sales Teams"
      }
    },
    // BreadcrumbList Schema
    {
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
        }
      ]
    },
    // WebSite Schema
    {
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
    },
    // Review Schema
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "John Doe"
      },
      "name": "OpenProjects.ae",
      "url": "https://www.openprojects.ae/services",
      "image": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Services.webp",
      "reviewBody": "OpenProjects.ae delivered demo-ready leads in 10 days — our sales pipeline doubled in a month.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9"
      },
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "OpenProjects.ae",
        "priceRange": "12000",
        "image": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Services.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "OpenProjects.ae, Building 6, Mina Jebel Ali - Jabal Ali Industrial First",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "telephone": "+1 (336) 792-5111"
      }
    },
    // ProfessionalService Schema
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "OpenProjects.ae",
      "image": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Services.webp",
      "url": "https://www.openprojects.ae/services",
      "telephone": "+1 (336) 792-5111",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "OpenProjects.ae, Building 6, Mina Jebel Ali - Jabal Ali Industrial First",
        "addressLocality": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.0657,
        "longitude": 55.17128
      },
      "priceRange": "AED",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/Openprojectsdubai/",
        "https://x.com/OpenProjectsUAE",
        "https://www.instagram.com/openprojectsdubai/",
        "https://www.youtube.com/@OpenprojectsDubai",
        "https://www.linkedin.com/company/openprojectsdubai/",
        "https://www.pinterest.com/openprojectsdubai/",
        "https://www.quora.com/profile/Openprojectsdubai",
        "https://www.tumblr.com/openprojectsdubai",
        "https://www.reddit.com/user/openprojectsdubai/",
        "https://medium.com/@openprojectsdubai",
        "https://openprojectsdubai.wordpress.com/",
        "https://openprojectsdubai.weebly.com/",
        "https://sites.google.com/view/openprojectsdubai/home",
        "https://about.me/openprojectsdubai",
        "https://www.openprojects.ae/services"
      ]
    },
    // EmployerAggregateRating Schema
    {
      "@context": "https://schema.org/",
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "OpenProjects.ae",
        "sameAs": "https://www.openprojects.ae/services"
      },
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "689431"
    },
    // ItemList Schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Real Estate Services in Dubai",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Real Estate Buyer Leads",
          "url": "https://www.openprojects.ae/services/real-estate-buyer-leads",
          "description": "Get verified real estate buyer leads in Dubai tailored to your sales goals."
        },
        {
          "@type": "Service",
          "name": "Real Estate Seller Leads",
          "url": "https://www.openprojects.ae/services/real-estate-seller-leads",
          "description": "Exclusive seller leads to help agents and brokers secure more listings in Dubai."
        },
        {
          "@type": "Service",
          "name": "Real Estate Broker Leads",
          "url": "https://www.openprojects.ae/services/real-estate-broker-leads",
          "description": "Verified broker leads for expanding your professional real estate network."
        },
        {
          "@type": "Service",
          "name": "Real Estate Appointment Setting",
          "url": "https://www.openprojects.ae/services/real-estate-appointment-setting",
          "description": "Professional appointment setting to connect you with qualified buyers and sellers in Dubai."
        }
      ]
    },
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://www.openprojects.ae/services",
      "name": "Real Estate Services in Dubai | OpenProjects",
      "description": "OpenProjects provides premium real estate services in Dubai including buyer leads, seller leads, broker leads, and appointment setting.",
      "publisher": {
        "@type": "Organization",
        "name": "OpenProjects.ae",
        "logo": {
          "@type": "ImageObject",
          "url": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Logo.webp"
        },
        "url": "https://www.openprojects.ae/services"
      },
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "inLanguage": "en",
      "about": {
        "@type": "Thing",
        "name": "OpenProjects.ae"
      }
    },
    // FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why should I choose OpenProjects for real estate services in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OpenProjects has over 20 years of experience in generating real estate leads and setting appointments. Our services are tailored for Dubai's fast-paced market, ensuring better ROI and higher conversion rates."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with both independent agents and large brokerages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, OpenProjects supports individual real estate agents, boutique agencies, and large brokerage firms with scalable lead generation and appointment setting services."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customize the type of leads I receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. You can define filters such as property type, location, budget range, or intent level, and we deliver leads that match your exact criteria."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a minimum package to start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer flexible plans. You can start with a pilot package as low as 50 leads or 50 appointments to test quality before scaling up."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a trial or pilot program available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can start with a pilot batch of 30 leads to evaluate quality before committing to a larger program."
          }
        }
      ]
    },
    // QAPage Schema
    {
      "@context": "https://schema.org",
      "@type": "QAPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does OpenProjects ensure lead quality?",
          "text": "I want to make sure the leads are genuine. How does OpenProjects filter or verify them?",
          "answerCount": 1,
          "upvoteCount": 12,
          "datePublished": "2025-08-17T14:00:00+05:30",
          "author": {
            "@type": "Person",
            "name": "Amit Sharma",
            "url": "https://www.sureshdas.com/"
          },
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All leads are pre-qualified through multi-step verification, including intent screening, phone validation, and compliance checks to ensure only serious prospects are delivered.",
            "dateCreated": "2025-07-14T10:00:00+05:30",
            "upvoteCount": 10,
            "url": "https://www.openprojects.ae/services#q1a1",
            "author": {
              "@type": "Person",
              "name": "Suresh Das",
              "url": "https://www.sureshdas.com/"
            }
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide reporting and analytics for the services?",
          "text": "Yes, clients receive detailed reports including the number of leads delivered, appointments scheduled, conversion performance, and campaign ROI.",
          "answerCount": 1,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom dashboards can also be provided for enterprise clients who need real-time visibility into performance metrics.",
            "dateCreated": "2025-07-14T10:10:00+05:30",
            "url": "https://www.openprojects.ae/services#q3a1"
          }
        },
        {
          "@type": "Question",
          "name": "Can I combine multiple services in one package?",
          "text": "I am interested in buyer leads, broker leads, and appointment setting. Can these services be bundled together?",
          "answerCount": 1,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, OpenProjects allows clients to combine multiple services such as buyer leads, seller leads, broker leads, and appointment setting into a single tailored package for maximum efficiency.",
            "dateCreated": "2025-07-14T10:15:00+05:30",
            "url": "https://www.openprojects.ae/services#q4a1"
          }
        }
      ]
    }
  ];

export default function ServicesPage() {
    return (
        <div className="font-poppins bg-gradient-to-br from-gray-50 to-blue-50">
            {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
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

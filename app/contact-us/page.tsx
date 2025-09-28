// app/buyer-leads/page.jsx
import { Header } from '@/components/header';
import Hero from '@/components/sections/Hero';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import type { Metadata, Viewport } from 'next'

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#ffffff'
}

// Complete metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://www.openprojects.ae'),
  title: "Contact OpenProjects Dubai | Get in Touch Today",
  description: "Have questions about real estate leads or appointment setting? Contact OpenProjects Dubai today for expert support and tailored solutions.",
  keywords: "Contact OpenProjects, real estate leads Dubai contact, buyer seller broker leads support, appointment setting contact Dubai",
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
    canonical: "https://www.openprojects.ae/contact-us",
    languages: {
      'en-US': 'https://www.openprojects.ae/contact-us',
      'en-AE': 'https://www.openprojects.ae/contact-us/en-AE',
      'de-DE': 'https://www.openprojects.ae/contact-us/de-DE',
      'es-ES': 'https://www.openprojects.ae/contact-us/es-ES',
      'fr-FR': 'https://www.openprojects.ae/contact-us/fr-FR',
      'pt-BR': 'https://www.openprojects.ae/contact-us/pt-BR',
      'en-GB': 'https://www.openprojects.ae/contact-us/en-GB',
      'en-CA': 'https://www.openprojects.ae/contact-us/en-CA',
      'en-MY': 'https://www.openprojects.ae/contact-us/en-MY',
      'en-SG': 'https://www.openprojects.ae/contact-us/en-SG',
      'en-NG': 'https://www.openprojects.ae/contact-us/en-NG',
      'en-ID': 'https://www.openprojects.ae/contact-us/en-ID',
      'en-IE': 'https://www.openprojects.ae/contact-us/en-IE',
      'en-AU': 'https://www.openprojects.ae/contact-us/en-AU',
      'en-IN': 'https://www.openprojects.ae/contact-us/en-IN',
      'en-NZ': 'https://www.openprojects.ae/contact-us/en-NZ',
      'en-PH': 'https://www.openprojects.ae/contact-us/en-PH',
      'en-ZA': 'https://www.openprojects.ae/contact-us/en-ZA',
      'es-MX': 'https://www.openprojects.ae/contact-us/es-MX',
      'es-CO': 'https://www.openprojects.ae/contact-us/es-CO',
      'es-PE': 'https://www.openprojects.ae/contact-us/es-PE',
      'es-AR': 'https://www.openprojects.ae/contact-us/es-AR',
      'es-CL': 'https://www.openprojects.ae/contact-us/es-CL',
      'es-VE': 'https://www.openprojects.ae/contact-us/es-VE',
      'pt-PT': 'https://www.openprojects.ae/contact-us/pt-PT',
      'fr-CA': 'https://www.openprojects.ae/contact-us/fr-CA',
      'fr-BE': 'https://www.openprojects.ae/contact-us/fr-BE'
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
    url: "https://www.openprojects.ae/contact-us",
    siteName: "OpenProjects.ae - Dubai Real Estate Leads",
    title: "Contact OpenProjects Dubai | Get in Touch Today",
    description: "Reach out to OpenProjects for real estate leads, broker services, and appointment setting in Dubai. We're here to help.",
    images: [{
      url: "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Contact-Us.webp",
      width: 1200,
      height: 630,
      alt: "Contact OpenProjects Dubai",
      type: "image/webp"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@OpenProjectsUAE",
    creator: "@OpenProjectsUAE",
    title: "Contact OpenProjects Dubai | Get in Touch Today",
    description: "Connect with OpenProjects for real estate leads and appointment setting in Dubai.",
    images: [{
      url: "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Contact-Us.webp",
      width: 1200,
      height: 630,
      alt: "Contact OpenProjects Dubai",
      type: "image/webp"
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
} as const;

// JSON-LD Structured Data Component
export default function ContactPage() {
  const jsonLdSchemas = [
    // Breadcrumb Schema
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
          "name": "Contact Us",
          "item": "https://www.openprojects.ae/contact-us"
        }
      ]
    },
    // Website Schema
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
    // Organization with ContactPoint Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OpenProjects.ae",
      "url": "https://www.openprojects.ae",
      "logo": {
        "@type": "ImageObject",
        "url": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Logo.webp",
        "width": 300,
        "height": 100
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-336-792-5111",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 6, Mina Jebel Ali - Jabal Ali Industrial First",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.0657,
        "longitude": 55.17128
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
        "https://about.me/openprojectsdubai"
      ]
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
      "url": "https://www.openprojects.ae/contact-us",
      "image": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Contact-Us.webp",
      "reviewBody": "OpenProjects.ae delivered demo-ready leads in 10 days — our sales pipeline doubled in a month.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9"
      },
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "OpenProjects.ae",
        "priceRange": "AED 12000-50000",
        "image": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Contact-Us.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Building 6, Mina Jebel Ali - Jabal Ali Industrial First",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "telephone": "+1-336-792-5111"
      }
    },
    // ProfessionalService Schema
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "OpenProjects.ae",
      "image": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Contact-Us.webp",
      "url": "https://www.openprojects.ae/contact-us",
      "telephone": "+1-336-792-5111",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 6, Mina Jebel Ali - Jabal Ali Industrial First",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
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
        "https://www.openprojects.ae/contact-us"
      ]
    },
    // EmployerAggregateRating Schema
    {
      "@context": "https://schema.org/",
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "OpenProjects.ae",
        "sameAs": "https://www.openprojects.ae/contact-us"
      },
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "689431"
    },
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://www.openprojects.ae/contact-us",
      "name": "Contact OpenProjects Dubai | Get in Touch Today",
      "description": "Have questions about real estate leads or appointment setting? Contact OpenProjects Dubai today for expert support and tailored solutions.",
      "publisher": {
        "@type": "Organization",
        "name": "OpenProjects.ae",
        "logo": {
          "@type": "ImageObject",
          "url": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Logo.webp"
        },
        "url": "https://www.openprojects.ae/contact-us"
      },
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "inLanguage": "en",
      "about": {
        "@type": "Thing",
        "name": "OpenProjects.ae Contact Information"
      }
    },
    // ContactPage specific schema
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "url": "https://www.openprojects.ae/contact-us",
      "name": "Contact OpenProjects Dubai",
      "description": "Get in touch with OpenProjects for real estate leads, appointment setting, and expert consultation in Dubai.",
      "mainEntity": {
        "@type": "Organization",
        "name": "OpenProjects.ae",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-336-792-5111",
          "contactType": "customer support",
          "areaServed": "AE"
        }
      }
    }
  ];

  return (
    <div className="font-poppins bg-gradient-to-br from-gray-50 to-blue-50">
      {/* JSON-LD Structured Data */}
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
      <ContactForm />
      <Footer />
    </div>
  );
}

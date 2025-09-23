import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins, Roboto, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "900", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "900", "700"],
  variable: "--font-roboto",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dubai Off-Plan Properties & Open Projects – Verified Listings",
  description:
    "Discover premium off-plan properties and open projects in Dubai. Verified listings, expert guidance, and comprehensive real estate lead generation services.",
  generator: "Open Projects Dubai",
  keywords: "Dubai off-plan properties, open projects Dubai, real estate Dubai, property investment, verified listings",
  authors: [{ name: "Open Projects Dubai" }],
  openGraph: {
    title: "Dubai Off-Plan Properties & Open Projects – Verified Listings",
    description:
      "Discover premium off-plan properties and open projects in Dubai. Verified listings, expert guidance, and comprehensive real estate lead generation services.",
    url: "https://www.openprojects.ae/",
    siteName: "Open Projects Dubai",
    type: "website",
  },
}

// Product Schema [attached_file:1]
const productSchema = {
  "@context": "http://schema.org",
  "@id": "#product",
  "@type": "Product",
  "name": "OpenProjects.ae",
  "image": [
    "https://d3euc6irt3la1j.cloudfront.net/Dubai-Off-Plan-Open-Projects.webp"
  ],
  "description": "Discover Dubai's top off-plan properties and open projects with OpenProjects.ae. Get verified listings, flexible payment plans, and expert insights for buyers, brokers, and investors.",
  "url": "https://www.openprojects.ae",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "993202"
  },
  "audience": {
    "@type": "Audience",
    "name": "OpenProjects.ae",
    "description": "Explore Dubai's off-plan properties and open projects. Verified listings, flexible payment plans, and expert insights for buyers, brokers, and investors.",
    "audienceType": "Property Buyers, Real Estate Investors, Brokers & Agents, Developers & Builders, Real Estate Consultants"
  }
}

// Website Schema [attached_file:1]
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
}

// Review Schema [attached_file:1]
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
  "name": "OpenProjects.ae",
  "url": "https://www.openprojects.ae",
  "image": "https://d3euc6irt3la1j.cloudfront.net/Dubai-Off-Plan-Open-Projects.webp",
  "reviewBody": "OpenProjects.ae helped me find the perfect off-plan property in Dubai. The process was smooth, transparent, and highly professional. Highly recommended!",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.9"
  },
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "OpenProjects.ae",
    "priceRange": "12000",
    "image": "https://d3euc6irt3la1j.cloudfront.net/Dubai-Off-Plan-Open-Projects.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "OpenProjects.ae",
      "addressLocality": "Bulding 6, Mina Jebel Ali - Jabal Ali Industrial First",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "telephone": "+1 (336) 792-5111",
      "addressCountry": {
        "@type": "Country",
        "name": "AE"
      }
    }
  }
}

// Professional Service Schema [attached_file:1]
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "OpenProjects.ae",
  "image": "https://d3euc6irt3la1j.cloudfront.net/Dubai-Off-Plan-Open-Projects.webp",
  "@id": "",
  "url": "https://www.openprojects.ae",
  "telephone": "+1 (336) 792-5111",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "OpenProjects.ae, Bulding 6, Mina Jebel Ali - Jabal Ali Industrial First",
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
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
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
    "https://www.openprojects.ae"
  ]
}

// Employer Aggregate Rating Schema [attached_file:1]
const employerRatingSchema = {
  "@context": "https://schema.org/",
  "@type": "EmployerAggregateRating",
  "itemReviewed": {
    "@type": "Organization",
    "name": "OpenProjects.ae",
    "sameAs": "https://www.openprojects.ae"
  },
  "ratingValue": "4.9",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "689431"
}

// WebPage Schema [attached_file:1]
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.openprojects.ae",
  "name": "OpenProjects.ae",
  "description": "OpenProjects.ae connects buyers, investors, and brokers with Dubai's top off-plan properties and open projects. Verified listings, payment plans, and expert insights included.", 
  "publisher": {
    "@type": "Organization",
    "name": "OpenProjects.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Logo.webp"
    },
    "url": "https://www.openprojects.ae"
  },
  "datePublished": "2005-01-10T09:00:00+05:30",
  "dateModified": "2025-08-17T09:00:00+05:30",
  "inLanguage": "en",
  "about": {
    "@type": "Thing",
    "name": "OpenProjects.ae"
  }
}

// FAQ Page Schema [attached_file:1]
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
     "@type": "Question",
      "name": "What is an off-plan property in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An off-plan property is a real estate unit sold before construction is completed. Buyers can benefit from early payment plans and potential price appreciation."
      }
    },
    {
      "@type": "Question",
      "name": "What is an open project in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An open project refers to a property development currently accepting bookings or investors. It may include off-plan or ready-to-build units."
      }
    },
    {
      "@type": "Question",
      "name": "How can OpenProjects.ae help me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OpenProjects.ae connects buyers, investors, and brokers with verified listings, flexible payment plans, expert guidance, and lead generation services for Dubai real estate."
      }
    },
    {
      "@type": "Question",
      "name": "What payment plans are available for off-plan properties in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most developers offer flexible payment plans for off-plan properties, including installment-based payments during construction and post-handover options."
      }
    },
    {
      "@type": "Question",
      "name": "Can I generate leads for my real estate project through OpenProjects.ae?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, OpenProjects.ae provides lead generation services for brokers and developers, connecting them with verified buyers and investors for Dubai properties."
      }
    }
  ]
}

// QA Page Schema [attached_file:1]
const qaPageSchema = {
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I invest in Dubai off-plan properties?",
      "text": "I am interested in buying off-plan properties in Dubai. What is the process and how can OpenProjects.ae help me?",
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
        "text": "OpenProjects.ae connects you with verified off-plan properties, provides flexible payment plans, expert guidance, and lead generation support to make your investment smooth and secure.",
        "dateCreated": "2025-07-14T10:00:00+05:30",
        "upvoteCount": 10,
        "url": "https://www.openprojects.ae#q1a1",
        "author": {
          "@type": "Person",
          "name": "Suresh Das",
          "url": "https://www.sureshdas.com/"
        }
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of buying off-plan properties in Dubai?",
      "text": "I want to know why investing in off-plan properties in Dubai is a good idea.",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buying off-plan properties in Dubai allows early investment at lower prices, flexible payment plans, and potential high returns as the property value grows during construction.",
        "dateCreated": "2025-07-14T10:10:00+05:30",
        "url": "https://www.openprojects.ae#q3a1"
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a property through OpenProjects.ae?",
      "text": "Is it possible to reserve or book a Dubai off-plan or open project property via OpenProjects.ae?",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, OpenProjects.ae allows you to explore available listings and book your preferred off-plan or open project property directly through the platform with verified developers.",
        "dateCreated": "2025-07-14T10:15:00+05:30",
        "url": "https://www.openprojects.ae#q4a1"
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lead Generation for Off-Plan & Open Projects Dubai</title>
        <meta name="description" content="Generate high-quality buyer & investor leads for Dubai off-plan properties and open projects. Boost sales with targeted campaigns and real-time tracking." />
        <meta name="keywords" content="open projects dubai, off plan properties dubai, buy off plan dubai, dubai off plan apartments, dubai off plan villas, new projects dubai, openprojects.ae, dubai real estate leads, property investment dubai, dubai off plan payment plans, ready to move projects dubai, dubai property developers, dubai real estate marketing, real estate lead generation dubai" />
        <meta property="og:site_name" content="OpenProjects.ae - Dubai Real Estate Leads" />
        <meta property="og:url" content="https://www.openprojects.ae" />
        <meta property="og:image:alt" content="Dubai Skyline with Off-Plan Properties and Open Projects" />
        <meta property="og:title" content="Off-Plan Properties & Open Projects in Dubai | OpenProjects.ae" />
        <meta property="og:description" content="Discover Dubai's top off-plan properties and open projects. Generate leads, book viewings, and invest with trusted developers on OpenProjects.ae." />
        <meta property="og:keywords" content="open projects dubai, off plan properties dubai, buy off plan dubai, dubai off plan apartments, dubai off plan villas, new projects dubai, openprojects.ae, dubai real estate leads, property investment dubai, dubai off plan payment plans, ready to move projects dubai, dubai property developers, dubai real estate marketing, real estate lead generation dubai" />
        <meta name="twitter:title" content="Off-Plan Properties & Open Projects in Dubai | OpenProjects.ae" />
        <meta name="twitter:description" content="Explore off-plan projects, villas, and apartments in Dubai. Get verified leads, book appointments, and invest smartly with OpenProjects.ae." />
        <meta property="twitter:image:alt" content="Dubai Skyline showcasing Off-Plan Properties and Open Projects" />
        <meta name="twitter:image" content="https://d3euc6irt3la1j.cloudfront.net/Dubai-Off-Plan-Open-Projects.webp" />
        <meta property="og:image" content="https://d3euc6irt3la1j.cloudfront.net/Dubai-Off-Plan-Open-Projects.webp" />
        <meta property="og:image:secure_url" content="https://d3euc6irt3la1j.cloudfront.net/Dubai-Off-Plan-Open-Projects.webp" />
        <meta property="og:url" content="https://www.openprojects.ae" />
        <link rel="alternate" href="https://www.openprojects.ae" hrefLang="en-US" />
        <link rel="canonical" href="https://www.openprojects.ae" />
        <meta name="msvalidate.01" content="3F0EE338EB9D6CC7D5B8613FB0D3B8F9" />
        <meta name="google-site-verification" content="8lLnfgtzeWYzbG6mAgPavNtZqe5C-2KHD63EgwGCYY4" />
        <meta name="yandex-verification" content="6c4c214b1ecfc78a" />
        <meta name="p:domain_verify" content="23785c7c6b52745236df36e5ed7de744" />
        <meta property="og:type" content="website" />
        <meta name="author" content="OpenProjects" />
        <meta property="twitter:image:type" content="images/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:type" content="images/webp" />
        <meta property="og:image:width" content="Fix Size" />
        <meta property="og:image:height" content="Fix Size" />
        <meta property="og:type" content="website" />
        <meta name="copyright" content="&copy; 2025" />
        <meta name="twitter:creator" content="@OpenProjectsUAE" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-57x57.webp" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-60x60.webp" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-72x72.webp" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-76x76.webp" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-114x114.webp" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-120x120.webp" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-144x144.webp" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-152x152.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-180x180.webp" />
        
        {/* Standard Icons */}
        <link rel="icon" type="image/webp" sizes="192x192" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-android-icon-192x192.webp" />
        <link rel="icon" type="image/webp" sizes="32x32" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-32x32.webp" />
        <link rel="icon" type="image/webp" sizes="96x96" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-96x96.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-16x16.webp" />
        <link rel="manifest" href="https://www.openprojects.ae//manifest.json" />
        
        {/* Microsoft Tags */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-ms-icon-144x144.webp" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Multiple Locale Support */}
        <meta property="og:locale:alternate" content="en-US" />
        <meta property="og:locale:alternate" content="en-AE" />
        <meta property="og:locale:alternate" content="de-DE" />
        <meta property="og:locale:alternate" content="es-ES" />
        <meta property="og:locale:alternate" content="fr-FR" />
        <meta property="og:locale:alternate" content="pt-BR" />
        <meta property="og:locale:alternate" content="en-GB" />
        <meta property="og:locale:alternate" content="en-CA" />
        <meta property="og:locale:alternate" content="en-MY" />
        <meta property="og:locale:alternate" content="en-SG" />
        <meta property="og:locale:alternate" content="en-NG" />
        <meta property="og:locale:alternate" content="en-ID" />
        <meta property="og:locale:alternate" content="en-IE" />
        <meta property="og:locale:alternate" content="en-AU" />
        <meta property="og:locale:alternate" content="en-IN" />
        <meta property="og:locale:alternate" content="en-NZ" />
        <meta property="og:locale:alternate" content="en-PH" />
        <meta property="og:locale:alternate" content="en-ZA" />
        <meta property="og:locale:alternate" content="es-MX" />
        <meta property="og:locale:alternate" content="es-CO" />
        <meta property="og:locale:alternate" content="es-PE" />
        <meta property="og:locale:alternate" content="es-AR" />
        <meta property="og:locale:alternate" content="es-CL" />
        <meta property="og:locale:alternate" content="es-VE" />
        <meta property="og:locale:alternate" content="pt-PT" />
        <meta property="og:locale:alternate" content="fr-CA" />
        <meta property="og:locale:alternate" content="fr-BE" />

        {/* Schema.org Structured Data - Product Schema [attached_file:1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />

        {/* Schema.org Structured Data - Website Schema [attached_file:1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Schema.org Structured Data - Review Schema [attached_file:1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />

        {/* Schema.org Structured Data - Professional Service Schema [attached_file:1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />

        {/* Schema.org Structured Data - Employer Rating Schema [attached_file:1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(employerRatingSchema) }}
        />

        {/* Schema.org Structured Data - WebPage Schema [attached_file:1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />

        {/* Schema.org Structured Data - FAQ Schema [attached_file:1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Schema.org Structured Data - QA Page Schema [attached_file:1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaPageSchema) }}
        />
      </head>
      <body
        className={`font-sans ${montserrat.variable} ${poppins.variable} ${roboto.variable} ${openSans.variable} antialiased`}
      >
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

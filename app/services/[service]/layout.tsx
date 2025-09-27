import type { Metadata } from 'next'

interface Props {
  params: Promise<{ service: string }>
}

// Dynamic metadata configuration
const getPageConfig = (service: string) => {
  if (service === 'real-estate-seller-leads') {
    return {
      title: "Real Estate Seller Leads in Dubai | OpenProjects",
      description: "Connect with verified property sellers in Dubai through OpenProjects. Expand your real estate network and grow your business with quality seller leads.",
      keywords: "Dubai real estate seller leads, verified seller leads Dubai, property seller leads Dubai, real estate leads Dubai, OpenProjects seller leads",
      canonical: "https://www.openprojects.ae/services/real-estate-seller-leads",
      image: "https://d3euc6irt3la1j.cloudfront.net/real-estate-seller-leads-in-dubai.webp",
    };
  }
  
  if (service === 'real-estate-broker-leads') {
    return {
      title: "Real Estate Broker Leads in Dubai | OpenProjects",
      description: "Connect with verified real estate brokers in Dubai through OpenProjects. Expand your network and grow your business with quality broker leads.",
      keywords: "Dubai real estate broker leads, verified broker leads Dubai, real estate leads Dubai, OpenProjects broker leads",
      canonical: "https://www.openprojects.ae/services/real-estate-broker-leads",
      image: "https://d3euc6irt3la1j.cloudfront.net/real-estate-broker-leads.webp",
    };
  }
  
  if (service === 'real-estate-appointment-setting') {
    return {
      title: "Real Estate Appointment Setting in Dubai | OpenProjects",
      description: "Professional appointment setting services for Dubai real estate. OpenProjects helps you schedule qualified meetings with potential buyers and sellers.",
      keywords: "Dubai real estate appointment setting, property appointment booking Dubai, real estate scheduling Dubai, OpenProjects appointment setting",
      canonical: "https://www.openprojects.ae/services/real-estate-appointment-setting",
      image: "https://d3euc6irt3la1j.cloudfront.net/real-estate-appointment-setting.webp",
    };
  }
  
  // Default - Buyer leads
  return {
    title: "Dubai Real Estate Buyer Leads | Qualified Prospects Leads",
    description: "Access premium real estate buyer leads in Dubai. OpenProjects delivers verified prospects to help you close more property deals and grow your business.",
    keywords: "Dubai real estate buyer leads, property buyer leads Dubai, exclusive buyer leads UAE, qualified buyer prospects Dubai, real estate leads Dubai, real estate investors Dubai, buy property leads UAE, OpenProjects buyer leads",
    canonical: "https://www.openprojects.ae/services/real-estate-buyer-leads",
    image: "https://d3euc6irt3la1j.cloudfront.net/real-estate-buyer-leads.webp",
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const config = getPageConfig(service);

  return {
    metadataBase: new URL('https://www.openprojects.ae'),
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: "OpenProjects" }],
    robots: "index, follow",
    alternates: {
      canonical: config.canonical,
      languages: {
        'en-US': 'https://www.openprojects.ae',
        'en-AE': 'https://www.openprojects.ae/en-AE',
        'de-DE': 'https://www.openprojects.ae/de-DE',
        'es-ES': 'https://www.openprojects.ae/es-ES',
        'fr-FR': 'https://www.openprojects.ae/fr-FR',
        'pt-BR': 'https://www.openprojects.ae/pt-BR',
        'en-GB': 'https://www.openprojects.ae/en-GB',
        'en-CA': 'https://www.openprojects.ae/en-CA',
        'en-MY': 'https://www.openprojects.ae/en-MY',
        'en-SG': 'https://www.openprojects.ae/en-SG',
        'en-NG': 'https://www.openprojects.ae/en-NG',
        'en-ID': 'https://www.openprojects.ae/en-ID',
        'en-IE': 'https://www.openprojects.ae/en-IE',
        'en-AU': 'https://www.openprojects.ae/en-AU',
        'en-IN': 'https://www.openprojects.ae/en-IN',
        'en-NZ': 'https://www.openprojects.ae/en-NZ',
        'en-PH': 'https://www.openprojects.ae/en-PH',
        'en-ZA': 'https://www.openprojects.ae/en-ZA',
        'es-MX': 'https://www.openprojects.ae/es-MX',
        'es-CO': 'https://www.openprojects.ae/es-CO',
        'es-PE': 'https://www.openprojects.ae/es-PE',
        'es-AR': 'https://www.openprojects.ae/es-AR',
        'es-CL': 'https://www.openprojects.ae/es-CL',
        'es-VE': 'https://www.openprojects.ae/es-VE',
        'pt-PT': 'https://www.openprojects.ae/pt-PT',
        'fr-CA': 'https://www.openprojects.ae/fr-CA',
        'fr-BE': 'https://www.openprojects.ae/fr-BE'
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
      url: config.canonical,
      siteName: "OpenProjects.ae - Dubai Real Estate Leads",
      title: config.title,
      description: config.description,
      images: [{
        url: config.image,
        width: 1200,
        height: 630,
        alt: config.title,
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      site: "@OpenProjectsUAE",
      creator: "@OpenProjectsUAE",
      title: config.title,
      description: config.description,
      images: [{
        url: config.image,
        width: 1200,
        height: 630,
        alt: config.title
      }]
    },
    icons: {
      icon: [
        { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
        { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
        { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-favicon-96x96.webp", sizes: "96x96", type: "image/webp" }
      ],
      apple: [
        { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-57x57.webp", sizes: "57x57", type: "image/webp" },
        { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-60x60.webp", sizes: "60x60", type: "image/webp" },
        { url: "https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-apple-icon-180x180.webp", sizes: "180x180", type: "image/webp" }
      ]
    },
    manifest: "https://www.openprojects.ae/manifest.json",
    other: {
      'msapplication-TileColor': '#ffffff',
      'msapplication-TileImage': 'https://d3euc6irt3la1j.cloudfront.net/openprojects-dubai-ms-icon-144x144.webp',
      'theme-color': '#ffffff'
    }
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}

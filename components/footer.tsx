"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

// Custom hook for intersection observer (matches the pattern from your sample)
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isIntersecting] as const
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  // Footer animation refs (following the pattern from your sample)
  const [footerRef, isFooterVisible] = useIntersectionObserver({ threshold: 0.2 })

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#lead-services" },
    { name: "About Us", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  const importantLinks = [
    { name: "Open Projects Dubai", href: "#open-projects-dubai" },
    { name: "Off Plan Properties Dubai", href: "#off-plan-properties-dubai" },
    { name: "Ready to Move Projects Dubai", href: "#ready-to-move-projects-dubai" },
    { name: "New Projects Dubai", href: "#new-projects-dubai" },
    { name: "Real Estate Lead Generation Dubai", href: "#real-estate-lead-generation-dubai" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy-policy" },
    { name: "Terms & Conditions", href: "#terms-conditions" },
    { name: "Refund Policy", href: "#refund-policy" },
    { name: "Cookie Policy", href: "#cookie-policy" },
    { name: "Disclaimer / Legal Notice", href: "#disclaimer-legal-notice" },
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "YouTube", href: "#", icon: Youtube },
    {
      name: "TikTok",
      href: "#",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
        </svg>
      ),
    },
  ]

  return (
    <footer 
      id="contact" 
      className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white pt-[40px]"
      style={{ opacity: isFooterVisible ? 1 : 0 }}
      ref={footerRef}
    >
      <div className="container mx-auto grid md:grid-cols-5 gap-8 px-6">
        {/* About Us Column - Following exact pattern from sample */}
        <div 
          style={{ 
            opacity: isFooterVisible ? 1 : 0, 
            transform: isFooterVisible ? 'none' : 'translateY(20px)' 
          }}
          className="transition-all duration-700 ease-out"
        >
          <h3 className="font-bold text-xl mb-6 flex items-center text-white border-b border-white/20 pb-2">
            <svg 
              stroke="currentColor" 
              fill="currentColor" 
              strokeWidth="0" 
              viewBox="0 0 576 512" 
              className="mr-2 text-blue-300" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
            </svg>
            About Us
          </h3>
          <p className="text-blue-100 leading-relaxed">
            Your trusted partner for buying, selling, and investing in Dubai properties with cutting-edge technology.
          </p>
        </div>

        {/* Quick Links Column */}
        <div 
          style={{ 
            opacity: isFooterVisible ? 1 : 0, 
            transform: isFooterVisible ? 'none' : 'translateY(20px)' 
          }}
          className="transition-all duration-700 ease-out delay-100"
        >
          <h3 className="font-bold text-xl mb-6 text-white border-b border-white/20 pb-2">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-blue-100 hover:text-white transition-colors duration-300 text-left block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links Column */}
        <div 
          style={{ 
            opacity: isFooterVisible ? 1 : 0, 
            transform: isFooterVisible ? 'none' : 'translateY(20px)' 
          }}
          className="transition-all duration-700 ease-out delay-200"
        >
          <h3 className="font-bold text-xl mb-6 text-white border-b border-white/20 pb-2">Important Links</h3>
          <ul className="space-y-3">
            {importantLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div 
          style={{ 
            opacity: isFooterVisible ? 1 : 0, 
            transform: isFooterVisible ? 'none' : 'translateY(20px)' 
          }}
          className="transition-all duration-700 ease-out delay-300"
        >
          <h3 className="font-bold text-xl mb-6 text-white border-b border-white/20 pb-2">Legal</h3>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us Column - Following exact social media pattern from sample */}
        <div 
          style={{ 
            opacity: isFooterVisible ? 1 : 0, 
            transform: isFooterVisible ? 'none' : 'translateY(20px)' 
          }}
          className="transition-all duration-700 ease-out delay-400"
        >
          <h3 className="font-bold text-xl mb-6 text-white border-b border-white/20 pb-2">Follow Us</h3>
          
          {/* Social Icons Grid - matches sample's circular icon pattern */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center text-blue-100 hover:text-white hover:bg-blue-700 transition-all duration-300"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center text-blue-100 hover:text-white hover:bg-blue-700 transition-all duration-300"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center text-blue-100 hover:text-white hover:bg-blue-700 transition-all duration-300"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center text-blue-100 hover:text-white hover:bg-blue-700 transition-all duration-300"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center text-white hover:text-white hover:bg-blue-700 transition-all duration-300"
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
              </svg>
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">Stay connected for updates and insights</p>
        </div>
      </div>

      {/* Bottom Section - Following exact pattern from sample */}
      <div 
        className="text-center mt-12 py-3 border-t border-blue-800/50" 
        style={{ 
          opacity: isFooterVisible ? 1 : 0, 
          transform: isFooterVisible ? 'none' : 'translateY(20px)' 
        }}
      >
        <p className="text-blue-200 text-sm leading-tight">© 2025 RealEstatePro. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

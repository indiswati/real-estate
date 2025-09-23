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
          <ul className="space-y-2">
            {socialLinks.map((social: any) => {
              const IconComponent = social.icon
              return (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    className="inline-flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{social.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

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

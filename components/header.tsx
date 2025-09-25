"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Add this scroll function
const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLeadServicesOpen, setIsLeadServicesOpen] = useState(false)
  const router = useRouter()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleLeadServicesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push("/service")
  }

  const handleDropdownArrowClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLeadServicesOpen(!isLeadServicesOpen)
  }

  const closeDropdown = () => {
    setIsLeadServicesOpen(false)
  }

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50" style={{ transform: "none" }}>
        <div className="max-w-[1365px] mx-auto flex justify-between items-center p-4 relative">
          <h1 className="ml-[33px] cursor-pointer text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            <Image
              alt="RealEstatePro Logo"
              loading="lazy"
              width={100}
              height={40}
              decoding="async"
              data-nimg="1"
              className="h-10 inline-block mr-2"
              style={{ color: "transparent" }}
              src="https://d3euc6irt3la1j.cloudfront.net/OpenProjects-Logo.webp"
            />
          </h1>

          {/* Desktop Navigation */}
          <nav className="space-x-6 hidden md:flex items-center">
            <button
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              style={{ transform: "none" }} 
              onClick={() => router.push("/")}
            >
              Home
            </button>
            <button
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              style={{ transform: "none" }} 
              onClick={() => scrollToElement('about')}
            >
              About Us
            </button>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <button
                  className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                  style={{ transform: "none" }}
                  onClick={handleLeadServicesClick}
                >
                  Lead Services
                </button>
                <button
                  className="hover:text-blue-600 transition-colors duration-300 cursor-pointer p-1"
                  onClick={handleDropdownArrowClick}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className={`h-3 w-3 transition-transform duration-300 ${
                      isLeadServicesOpen ? 'rotate-180' : ''
                    }`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu */}
              <div className={`absolute pt-2 bg-white shadow-xl rounded-xl w-56 border border-gray-100 opacity-100 transform translate-y-0 transition-all duration-300 ease-in-out z-50 ${
                isLeadServicesOpen ? 'block' : 'hidden'
              }`}>
                <button 
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 rounded-t-xl group w-full text-left" 
                  onClick={() => {
                    router.push("/leads/buyer")
                    closeDropdown()
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="text-blue-600 text-lg group-hover:scale-110 transition-transform duration-300"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </svg>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    Buyer Leads
                  </span>
                </button>
                <button 
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group w-full text-left" 
                  onClick={() => {
                    router.push("/leads/seller")
                    closeDropdown()
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-green-600 text-lg group-hover:scale-110 transition-transform duration-300"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <span className="text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    Seller Leads
                  </span>
                </button>
                <button 
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group w-full text-left" 
                  onClick={() => {
                    router.push("/leads/broker")
                    closeDropdown()
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="text-purple-600 text-lg group-hover:scale-110 transition-transform duration-300"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-12c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                  </svg>
                  <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                    Broker Leads
                  </span>
                </button>
                <button 
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 rounded-b-xl group w-full text-left" 
                  onClick={() => {
                    router.push("/leads/appointment")
                    closeDropdown()
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-orange-600 text-lg group-hover:scale-110 transition-transform duration-300"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path>
                  </svg>
                  <span className="text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                    Appointment Setting
                  </span>
                </button>
              </div>
            </div>

            <button
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              style={{ transform: "none" }} 
              onClick={() => router.push("/service")}
            >
              Properties
            </button>
            <button
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              style={{ transform: "none" }} 
              onClick={() => scrollToElement('blog')}
            >
              Blog
            </button>
            <button
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              style={{ transform: "none" }} 
              onClick={() => scrollToElement('contact')}
            >
              Contact
            </button>

            <button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              style={{
                boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
                transform: "none",
              }}
            >
              Buy Now
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4 mr-[-72px]">
            <a
              href="#signin"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
              style={{ transform: "none" }}
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
              style={{
                boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
                transform: "none",
              }}
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button 
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <button
                className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => {
                  router.push("/")
                  closeMobileMenu()
                }}
              >
                Home
              </button>
              
              <button
                className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => {
                  scrollToElement('about')
                  closeMobileMenu()
                }}
              >
                About Us
              </button>

              {/* Mobile Lead Services with Main Button */}
              <div className="border-l-4 border-blue-600 pl-4">
                <button
                  className="font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => {
                    router.push("/leads")
                    closeMobileMenu()
                  }}
                >
                  Lead Services
                </button>
                <div className="space-y-2 ml-4">
                  <button
                    className="w-full text-left p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200"
                    onClick={() => {
                      router.push("/leads/buyer")
                      closeMobileMenu()
                    }}
                  >
                    Buyer Leads
                  </button>
                  <button
                    className="w-full text-left p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200"
                    onClick={() => {
                      router.push("/leads/seller")
                      closeMobileMenu()
                    }}
                  >
                    Seller Leads
                  </button>
                  <button
                    className="w-full text-left p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200"
                    onClick={() => {
                      router.push("/leads/broker")
                      closeMobileMenu()
                    }}
                  >
                    Broker Leads
                  </button>
                  <button
                    className="w-full text-left p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200"
                    onClick={() => {
                      router.push("/leads/appointment")
                      closeMobileMenu()
                    }}
                  >
                    Appointment Setting
                  </button>
                </div>
              </div>

              <button
                className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => {
                  router.push("/service")
                  closeMobileMenu()
                }}
              >
                Properties
              </button>

              <button
                className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => {
                  scrollToElement('blog')
                  closeMobileMenu()
                }}
              >
                Blog
              </button>

              <button
                className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => {
                  scrollToElement('contact')
                  closeMobileMenu()
                }}
              >
                Contact
              </button>

              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                  Buy Now
                </button>
                
                <div className="flex space-x-3">
                  <a
                    href="#signin"
                    className="flex-1 text-center px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </a>
                  <a
                    href="#signup"
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isLeadServicesOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={closeDropdown}
        />
      )}
    </>
  )
}

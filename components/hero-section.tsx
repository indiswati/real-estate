"use client"

import { useState } from "react"
import Image from "next/image"
import { BuyerModal } from "./buyer-modal"
import { SellerModal } from "./seller-modal"

export function HeroSection() {
  const [selectedType, setSelectedType] = useState<"buyer" | "seller">("buyer")
  const [isBuyerModalOpen, setIsBuyerModalOpen] = useState(false)
  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false)

  return (
    <>
      <section
        id="home"
        className="relative text-white pt-10 pb-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #001731 0%, #00426F 50%, #0D76B1 100%)" }}
      >
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-400/5 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-40 left-1/3 w-64 h-64 bg-purple-400/5 rounded-full animate-bounce"></div>
        </div>

        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Column - Slides in from Left */}
            <div
              className="flex flex-col justify-center order-1 xl:order-1 lg:pl-24 animate-slide-from-left"
            >
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-center xl:text-left mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Generate More <br /> Real Estate Leads
                  </h2>
                </div>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-5 max-w-lg mx-auto xl:mx-0">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Let's Get Started</h3>
                    <p className="text-gray-600">Are you looking to buy or sell?</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setIsBuyerModalOpen(true)}
                      className="bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-300 rounded-xl p-6 text-center transition-all duration-300 group hover:scale-105 animate-bounce-in"
                      style={{ animationDelay: "0.9s" }}
                      tabIndex={0}
                    >
                      <span className="text-blue-600 text-3xl mb-3 group-hover:scale-110 transition-transform">🏠</span>
                      <span className="font-semibold text-gray-800 text-lg">Buyer</span>
                      <span className="text-sm text-gray-600 mt-1">Looking to buy property</span>
                    </button>
                    <button
                      onClick={() => setIsSellerModalOpen(true)}
                      className="bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-300 rounded-xl p-6 text-center transition-all duration-300 group hover:scale-105 animate-bounce-in"
                      style={{ animationDelay: "1.1s" }}
                      tabIndex={0}
                    >
                      <span className="text-green-600 text-3xl mb-3 group-hover:scale-110 transition-transform">💰</span>
                      <span className="font-semibold text-gray-800 text-lg">Seller</span>
                      <span className="text-sm text-gray-600 mt-1">Looking to sell property</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Slides in from Right */}
            <div
              className="flex justify-center items-center order-2 xl:order-2 animate-slide-from-right"
            >
              <div className="relative w-full">
                <div className="relative bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden p-4">
                  <Image
                    alt="Real Estate"
                    loading="lazy"
                    width={1920}
                    height={1080}
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-auto rounded-xl"
                    style={{ color: "transparent" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/dubai-off-plan-properties-open-projects-verified-listings.webp"
                  />
                  <div className="absolute inset-4 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div
                      className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 animate-zoom-in"
                      style={{ animationDelay: "1.3s" }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            className="w-6 h-6 text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                          </svg>
                        </div>
                        <div className="text-white">
                          <div className="text-lg font-semibold mb-1">Real Estate Growth</div>
                          <p className="text-white/90 text-sm">Accelerate your business with AI-powered solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -top-3 -left-3 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg animate-bounce animate-float-in"
                  style={{ animationDelay: "1.5s" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="w-6 h-6 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </svg>
                </div>
                <div
                  className="absolute -bottom-3 -right-3 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg animate-bounce animate-float-in"
                  style={{ animationDelay: "1.7s" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <BuyerModal isOpen={isBuyerModalOpen} onClose={() => setIsBuyerModalOpen(false)} />
      <SellerModal isOpen={isSellerModalOpen} onClose={() => setIsSellerModalOpen(false)} />

      <style jsx>{`
        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.98) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .animate-slide-from-left {
          animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-from-right {
          animation: slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 0;
        }

        .animate-zoom-in {
          animation: zoomIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float-in {
          animation: floatIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </>
  )
}

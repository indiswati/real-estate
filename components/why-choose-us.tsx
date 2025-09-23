'use client';
import React from 'react';

export function WhyChooseUs() {
  const features = [
    {
      icon: <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="text-5xl text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path>
            </svg>,
      title: "20+ Years Experience",
      delay: "delay-0"
    },
    {
      icon: <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              className="text-5xl text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
            </svg>,
      title: "20+ Developers", 
      delay: "delay-150"
    },
    {
      icon: <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-5xl text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path>
            </svg>,
      title: "1B+ Revenue Generated",
      delay: "delay-300"
    },
    {
      icon: <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-5xl text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>,
      title: "Verified Listings",
      delay: "delay-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent animate-fade-in">
          Why Choose Us
        </h2>
<p className="text-xl text-gray-600 mb-16 font-body max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart in Dubai's competitive real estate market and why thousands of clients trust our
            services.
          </p>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 group
                transform transition-all duration-700 ease-out
                hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/25
                active:scale-95 active:translate-y-0
                animate-bounce-in
                ${feature.delay}
              `}
              style={{ 
                animation: `bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.2}s both`
              }}
            >
              <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>
              <h4 className="font-bold text-lg text-gray-800 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105">
                {feature.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-bounce-in {
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}

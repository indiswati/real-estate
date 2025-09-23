'use client';
import React from 'react';
export function LatestInsights() {
  const insights = [
    {
      image: "/dubai-property-trends-2025.webp",
      alt: "Dubai Property Trends",
      title: "Dubai Property Trends 2025",
      description: "What's driving buyer demand this year and how to capitalize on emerging opportunities.",
      delay: "delay-0"
    },
    {
      image: "/off-plan-projects-guide.webp",
      alt: "Off-Plan Projects",
      title: "Off-Plan Projects Guide",
      description: "Everything you need to know before investing in Dubai's off-plan developments.",
      delay: "delay-150"
    },
    {
      image: "/maximizing-roi.webp",
      alt: "ROI Tips",
      title: "Maximizing ROI",
      description: "Expert tips to boost rental yield and resale value for your property investments.",
      delay: "delay-300"
    }
  ];

  return (
    <section id="blog" className="container mx-auto py-20 px-6" style={{ opacity: 1 }}>
      <h2
        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent animate-fade-in"
        style={{ opacity: 1, transform: "none" }}
      >
        Latest Insights
      </h2>
<p className="text-xl text-gray-600 mb-16 font-body max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest trends, market analysis, and expert insights from Dubai's real estate market.
          </p>
      <div className="grid md:grid-cols-3 gap-10">
        {insights.map((insight, index) => (
          <article
            key={index}
            className={`
              bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden group
              transform transition-all duration-500 ease-out
              hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25
              active:scale-95 active:translate-y-0
              animate-bounce-in
              ${insight.delay}
            `}
            style={{ 
              opacity: 1, 
              transform: "none",
              animation: `bounceIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s both`
            }}
          >
            <div className="overflow-hidden">
              <img
                alt={insight.alt}
                loading="lazy"
                width="500"
                height="224"
                decoding="async"
                data-nimg="1"
                className="w-full h-56 object-cover group-hover:scale-110 group-hover:brightness-105 transition-all duration-500"
                style={{ color: "transparent" }}
                src={insight.image}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300 origin-left">
                {insight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 group-hover:scale-102 transition-all duration-300">
                {insight.description}
              </p>
            </div>
          </article>
        ))}
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

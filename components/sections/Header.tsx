// components/sections/Header.jsx
'use client';

export default function SectionHeader() {
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#cta' }
  ];

  const scrollToSection = (href:any) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-5">
        <nav>
          <ul className="flex items-center justify-center space-x-8 md:space-x-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-gray-700 font-semibold text-sm md:text-base hover:text-blue-600 transition-colors duration-300 py-2"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

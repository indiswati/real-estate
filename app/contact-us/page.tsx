// app/buyer-leads/page.jsx
import { Header } from '@/components/header';
import Hero from '@/components/sections/Hero';
import { Footer } from '@/components/footer';
import LeadsHero from '@/components/sections/LeadsHero';
import Features from '@/components/sections/Features';
import LeadsProcess from '@/components/sections/LeadsProcess';
import LeadsPackages from '@/components/sections/LeadsPackages';
import { Testimonials } from '@/components/testimonials';
import { ContactForm } from '@/components/contact-form';
import LeadsContact from '@/components/sections/LeadsContact';

export default function Leads() {
  return (
            <div className="font-poppins bg-gradient-to-br from-gray-50 to-blue-50">

      <Header />
      
        <Hero />
        <ContactForm />
      <Footer />
            </div>
  );
}

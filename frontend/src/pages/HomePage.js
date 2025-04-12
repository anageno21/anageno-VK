import React from 'react';
import PageTitle from '../components/PageTitle';
import AboutSection from '../components/AboutSection';
import BenefitsSection from '../components/BenefitsSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <>
      <PageTitle />
      <div className="main-content">
        <AboutSection />
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <NewsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default HomePage;
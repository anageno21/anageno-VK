import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import PageTitle from './components/PageTitle';
import PageTitleService from './components/PageTitleService';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import TherapistSection from './components/TherapistSection';
import AppointmentSection from './components/AppointmentSection';
import BlogGridSection from './components/BlogGridSection';
import BlogDetailsSection from './components/BlogDetailsSection';
import ServiceDetailsSection from './components/ServiceDetailsSection';
import ProductsSection from './components/ProductsSection';
import ShopCartSection from './components/ShopCartSection';
import CheckoutSection from './components/CheckoutSection';
import ProductDetailsSection from './components/ProductDetailsSection';
import TestimonialsCenterSection from './components/TestimonialsCenterSection';
import TestimonialsOneSection from './components/TestimonialsOneSection';
import LayoutThreeSection from './components/LayoutThreeSection';
import LayoutFourSection from './components/LayoutFourSection';

// Define all page components at the top level
const HomePage = () => {
  return (
    <>
      <PageTitle isHomePage={true} />
      <div className="main-content">
        <AboutSection />
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <TestimonialsCenterSection />
        <TestimonialsOneSection />
        <LayoutThreeSection />
        <LayoutFourSection />
        <NewsSection />
        <ContactSection />
      </div>
    </>
  );
};

const AboutPage = () => {
  return (
    <>
      <PageTitle title="About" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'About' }]} />
      <AboutSection />
    </>
  );
};

const ContactPage = () => {
  return (
    <>
      <PageTitle title="Contact Us" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Contact' }]} />
      <ContactSection />
    </>
  );
};

const ServicesPage = () => {
  return (
    <>
      <PageTitleService />
      <ServicesSection />
    </>
  );
};

const TherapistsPage = () => {
  return (
    <>
      <PageTitle title="Our Therapists" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Therapists' }]} />
      <TherapistSection />
    </>
  );
};

const AppointmentPage = () => {
  return (
    <>
      <PageTitle title="Book Appointment" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Appointment' }]} />
      <AppointmentSection />
    </>
  );
};

const BlogGridPage = () => {
  return (
    <>
      <PageTitle title="Blog Grid" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Blog Grid' }]} />
      <BlogGridSection />
    </>
  );
};

const BlogDetailsPage = () => {
  return (
    <>
      <PageTitle title="Blog Details" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Blog', link: '/blog-grid' }, { text: 'Blog Details' }]} />
      <BlogDetailsSection />
    </>
  );
};

const ServiceDetailsPage = () => {
  return (
    <>
      <PageTitle title="Service Details" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Services', link: '/our-service' }, { text: 'Service Details' }]} />
      <ServiceDetailsSection />
    </>
  );
};

const ProductsPage = () => {
  return (
    <>
      <PageTitle title="Our Products" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Our Products' }]} />
      <ProductsSection />
    </>
  );
};

const CartPage = () => {
  return (
    <>
      <PageTitle title="Shopping Cart" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Shopping Cart' }]} />
      <ShopCartSection />
    </>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <PageTitle title="Checkout" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Checkout' }]} />
      <CheckoutSection />
    </>
  );
};

const ProductDetailsPage = () => {
  return (
    <>
      <PageTitle title="Product Details" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Shop', link: '/our-product' }, { text: 'Product Details' }]} />
      <ProductDetailsSection />
    </>
  );
};

const TherapistsDetailsPage = () => {
  return (
    <>
      <PageTitle title="Therapist Details" breadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Therapists', link: '/our-therapists' }, { text: 'Therapist Details' }]} />
      <div>
        <h1>Therapists Details</h1>
        <p>This is a placeholder for the Therapists Details page.</p>
      </div>
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleLoad = () => {
      setIsLoading(false);
    };
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router>
      <div id="wrapper">
        {isLoading && (
          <div id="loading">
            <div id="loading-center">
              <div className="loader-container">
                <div className="wrap-loader">
                  <div className="loader"></div>
                  <div className="icon">
                    <img src="/images/logo/favicon.png" alt="Loading Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isLoading && (
          <>
            <TopBar />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/our-service" element={<ServicesPage />} />
              <Route path="/our-therapists" element={<TherapistsPage />} />
              <Route path="/book-appointment" element={<AppointmentPage />} />
              <Route path="/blog-grid" element={<BlogGridPage />} />
              <Route path="/blog-details" element={<BlogDetailsPage />} />
              <Route path="/service-details" element={<ServiceDetailsPage />} />
              <Route path="/our-product" element={<ProductsPage />} />
              <Route path="/shop-cart" element={<CartPage />} />
              <Route path="/shop-check-out" element={<CheckoutPage />} />
              <Route path="/product-details" element={<ProductDetailsPage />} />
              <Route path="/therapists-details" element={<TherapistsDetailsPage />} />
            </Routes>
            <Footer />
            <MobileNav />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
import React from "react";

import NavigationList from '../components/navigation/TabNavigation';
import Footer from '../components/ui/Footer';
import Hero from '../components/ui/Hero';
import BlogPreview from "../components/content/BlogPreview";
import CustomerJourney from "../components/content/CustomerJourney";
import FAQSection from "../components/content/FAQSection";
import Gallery from "../components/content/Gallery";
import LanguagesSupported from "../components/content/LanguagesSupported";
import SuccessStories from "../components/content/SuccessStories";
import TeamShowcase from "../components/content/TeamShowcase";
import InteractiveMap from "../components/data/InteractiveMap";
import StatsCounter from "../components/data/StatsCounter";
import EventCalendar from "../components/feature/EventCalendar";
import FeatureSection from "../components/feature/FeatureSection";
import AppointmentScheduler from "../components/forms/AppointmentScheduler";
import DiscountOffers from "../components/forms/DiscountOffers";
import NewsletterSignup from "../components/forms/NewsletterSignup";
import ServicesList from "../components/layout/ServicesList";
import PartnersSection from "../components/ui/PartnersSection";
import Testimonials from "../components/ui/Testimonials";
import VideoSection from "../components/ui/VideoSection";
import ScrollToTop from "../components/triggers/ScrollToTop";
import ContactUS from "../components/triggers/ContactUs";

const HomePage = () => {

  return (
    <>
      <NavigationList />
      <Hero />
      <ServicesList />
      <CustomerJourney />
      <FeatureSection />
      <Gallery/>
      <EventCalendar />
      <TeamShowcase />
      <SuccessStories />
      <AppointmentScheduler />
      <LanguagesSupported />
      <FAQSection/>
      <StatsCounter />
      <VideoSection />
      <DiscountOffers />
      <Testimonials />
      <BlogPreview />
      <NewsletterSignup />
      <InteractiveMap />
      <PartnersSection />
      <Footer />
      <ScrollToTop />
      <ContactUS/>
    </>
  );
};

export default HomePage;
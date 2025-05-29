
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import ExperiencesSection from '../components/ExperiencesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedDestinations />
      <ExperiencesSection />
      <Footer />
    </div>
  );
};

export default Index;

"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/hero-section";
import StatsSection from "./components/stats-section";
import Navigation from "./components/navigation";
import WhyUsSection from "./components/why-us-section";
import PricingSection from "./components/pricing-section";
import TestimonialsSection from "./components/testimonials";

import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import FixedButtons from "./components/fixed-buttons";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Pricing Packages */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* About (moved to component) */}
      <AboutSection />

      {/* Contact (moved to component) */}
      <ContactSection />

      {/* Footer (moved to component) */}
      <Footer />

      {/* Fixed Buttons (moved to component) */}
      <FixedButtons onScrollTop={() => scrollToSection("anasayfa")} />
    </div>
  );
}

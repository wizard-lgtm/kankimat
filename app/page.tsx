"use client";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Clock,
  TrendingUp,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";
import HeroSection from "./components/hero-section";
import { Stats } from "fs";
import StatsSection from "./components/stats-section";
import Navigation from "./components/navigation";
import WhyUsSection from "./components/why-us-section";
import PricingSection from "./components/pricing-section";
import TestimonialsSection from "./components/testimonials";

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

      {/* Stats Section */}
      <StatsSection />

      {/* Why Us Section - Replacing Method Section */}
      <WhyUsSection />

      {/* Pricing Packages */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />
      {/* About */}

      <section id="hakkimizda" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Meryem Hoca{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Hakkında
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}

            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl" />

                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full" />

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-64 bg-gradient-to-br from-pink-300 to-purple-400 rounded-3xl flex items-center justify-center">
                  <div className="text-8xl">👩‍🏫</div>
                </div>
              </div>
            </div>

            {/* Text Section */}

            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Merhaba, Ben Meryem!
              </h3>

              <p className="text-gray-700 text-lg">
                10 yıldır matematik öğretmenliği yapıyorum ve online eğitimde
                uzmanlaştım. Matematiğin her öğrenciye öğretilebileceğine
                inanıyorum.
              </p>

              <p className="text-gray-700 text-lg">
                Benim için en önemli şey, öğrencilerimin matematiği anlaması ve
                sevmesidir. Her öğrencinin farklı bir öğrenme stili olduğunu
                biliyorum ve derslerimi buna göre kişiselleştiriyorum.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Eğitim Geçmişim:
                </h4>

                <div className="space-y-3">
                  {[
                    "Matematik Öğretmenliği Lisans",

                    "Online Eğitim Sertifikası",

                    "10+ Yıl Öğretmenlik Tecrübesi",

                    "500+ Başarılı Öğrenci",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <CheckCircle2 className="h-6 w-6 text-pink-600 flex-shrink-0 group-hover:scale-110 transition-transform" />

                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}

      <section
        id="iletisim"
        className="bg-gradient-to-b from-white to-pink-50 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            İletişime{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Geçin
            </span>
          </h2>

          <p className="text-center text-gray-600 mb-16 text-lg">
            Ücretsiz deneme dersi için formu doldurun
          </p>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-pink-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Bizimle İletişime Geçin
                </CardTitle>

                <CardDescription className="text-center">
                  Formu doldurun, en kısa sürede size dönüş yapalım
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);

                    const name = formData.get("name");

                    const phone = formData.get("phone");

                    const message = formData.get("message");

                    const whatsappMessage = `Merhaba,%0A%0A*İsim:* ${name}%0A*Telefon:* ${phone}%0A*Mesaj:* ${message}`;

                    window.open(
                      `https://wa.me/905322923193?text=${whatsappMessage}`,

                      "_blank"
                    );

                    e.currentTarget.reset();
                  }}
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Adınız Soyadınız *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Adınızı ve soyadınızı girin"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Telefon Numaranız *
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="0XXX XXX XX XX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Mesajınız
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors resize-none"
                      placeholder="Hangi konularda yardım istiyorsunuz?"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info Below Form */}

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Card className="border-2 border-pink-200 hover:shadow-lg transition-all">
                <CardContent className="flex items-center gap-3 pt-6">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-pink-600" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-medium">Telefon</p>

                    <a
                      href="tel:905322923193"
                      className="text-pink-600 hover:underline font-semibold"
                    >
                      +90 532 292 31 93
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 hover:shadow-lg transition-all">
                <CardContent className="flex items-center gap-3 pt-6">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-pink-600" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-medium">E-Posta</p>

                    <a
                      href="mailto:destek@kankimat.com.tr"
                      className="text-pink-600 hover:underline font-semibold"
                    >
                      destek@kankimat.com.tr
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                Kanki
              </span>
              mat.com.tr | Matematiğin Kankası
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Buttons */}

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 shadow-lg rounded-full w-16 h-16 p-0 hover:scale-110 transition-transform animate-pulse"
        >
          <a
            href="https://wa.me/905322923193"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="h-6 w-6" />
          </a>
        </Button>

        <Button
          size="lg"
          variant="secondary"
          className="shadow-lg rounded-full w-16 h-16 p-0 hover:scale-110 transition-transform"
          onClick={() => scrollToSection("anasayfa")}
        >
          <span className="text-2xl">↑</span>
        </Button>
      </div>
    </div>
  );
}

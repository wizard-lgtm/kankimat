"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll for navbar background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to sections
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
              Kankimat
            </div>
            <span className="text-sm text-gray-600 hidden md:block">
              Matematiğin Kankası
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              "anasayfa",
              "neden-biz",
              "paketlerimiz",
              "referanslar",
              "hakkimizda",
              "iletisim",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium capitalize"
              >
                {item === "neden-biz"
                  ? "Neden Biz"
                  : item === "anasayfa"
                  ? "Anasayfa"
                  : item === "paketlerimiz"
                  ? "Paketlerimiz"
                  : item === "referanslar"
                  ? "Referanslar"
                  : item === "hakkimizda"
                  ? "Hakkımızda"
                  : "İletişim"}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden"
            variant="ghost"
            size="icon"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mt-4 lg:hidden animate-in fade-in slide-in-from-top duration-300">
            <div className="p-4 bg-white/95 rounded-lg shadow-lg space-y-2">
              {[
                "anasayfa",
                "neden-biz",
                "paketlerimiz",
                "referanslar",
                "hakkimizda",
                "iletisim",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-pink-600 transition-colors font-medium capitalize py-2 px-4 w-full text-left rounded-md"
                >
                  {item === "neden-biz"
                    ? "Neden Biz"
                    : item === "anasayfa"
                    ? "Anasayfa"
                    : item === "paketlerimiz"
                    ? "Paketlerimiz"
                    : item === "referanslar"
                    ? "Referanslar"
                    : item === "hakkimizda"
                    ? "Hakkımızda"
                    : "İletişim"}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

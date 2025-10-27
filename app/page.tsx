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

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
                Kankimat
              </div>

              <span className="text-sm text-gray-600 hidden md:block">
                Matematiğin Kankası
              </span>
            </div>

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
                  className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
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

            <Button
              className="lg:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top duration-300">
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
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
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
          )}
        </div>
      </nav>

      {/* Hero Section */}

      <section id="anasayfa" className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Kanki
                </span>

                <span className="text-gray-900">mat</span>

                <span className="text-gray-600">.com.tr</span>
              </h1>

              <p className="text-2xl text-gray-700">
                Matematiğin{" "}
                <span className="text-pink-600 font-semibold">Kankası</span>
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <CheckCircle2 className="h-6 w-6 text-pink-600 flex-shrink-0 group-hover:scale-110 transition-transform" />

                <p className="text-lg text-gray-700">
                  Matematiğin alfabesini öğretiyoruz.
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <CheckCircle2 className="h-6 w-6 text-pink-600 flex-shrink-0 group-hover:scale-110 transition-transform" />

                <p className="text-lg text-gray-700">
                  Matematik temeliniz mükemmel olacak.
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <CheckCircle2 className="h-6 w-6 text-pink-600 flex-shrink-0 group-hover:scale-110 transition-transform" />

                <p className="text-lg text-gray-700">
                  Matematiği keyifle çalışacaksınız.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 font-medium">
                Ücretsiz Matematik Check Up İçin
              </p>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <a
                  href="https://wa.me/905322923193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />

                  <span>Randevu Al</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-pink-100 to-purple-100">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl font-bold text-pink-600 animate-bounce">
                    📐
                  </div>

                  <p className="text-2xl font-bold text-gray-800">
                    Matematik Temeli
                  </p>

                  <p className="text-gray-600">Her şey doğru temelle başlar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-pink-600" />
                </div>

                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    1065+
                  </p>

                  <p className="text-gray-700 font-medium">Ücretsiz CheckUp</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-pink-600" />
                </div>

                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    35+
                  </p>

                  <p className="text-gray-700 font-medium">Yıllık Tecrübe</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section - Replacing Method Section */}

      <section id="neden-biz" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Neden{" "}
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Kankimat
          </span>
          ?
        </h2>

        <p className="text-xl text-gray-600 text-center mb-16">
          Matematiği sevdiren, anlaşılır ve keyifli bir öğrenme deneyimi
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "💻",

              title: "Online Platform",

              description:
                "Evinden çıkmadan, güvenli ve rahat bir ortamda matematik öğren",
            },

            {
              icon: "⏰",

              title: "Esnek Saatler",

              description: "Kendi programına uygun ders saatlerini belirle",
            },

            {
              icon: "👩‍🏫",

              title: "Deneyimli Eğitmen",

              description:
                "35 yıllık tecrübesiyle uzman eğitmenlerden özel ders al",
            },

            {
              icon: "📊",

              title: "Kişiselleştirilmiş",

              description:
                "Senin seviyene ve ihtiyacına özel hazırlanmış dersler",
            },

            {
              icon: "📝",

              title: "Sınav Hazırlık",

              description:
                "LGS, YKS ve okul sınavlarına özel hazırlık programları",
            },

            {
              icon: "✨",

              title: "Eğlenceli Anlatım",

              description: "Matematiği sevdiren, anlaşılır ve keyifli dersler",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center space-y-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Packages */}

      <section
        id="paketlerimiz"
        className="bg-gradient-to-b from-white to-pink-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Paketlerimiz
            </h2>

            <p className="text-xl text-gray-600">
              Hangi konular matematikte ne kadar yer kaplar?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Package 1 */}

            <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                  Matematiğin %50'si
                </Badge>

                <CardTitle className="text-2xl mt-2">
                  Başlangıç Paketi
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {[
                  "Toplama Çıkarma",

                  "Çarpma Bölme",

                  "Parantez Açma",

                  "Sadeleştirme",

                  "İşlem Önceliği",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>

                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Package 2 */}

            <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                  Matematiğin %65'i
                </Badge>

                <CardTitle className="text-2xl mt-2">Paket-1</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {[
                  "Toplama Çıkarma",

                  "Çarpma Bölme",

                  "Parantez Açma",

                  "Sadeleştirme",

                  "İşlem Önceliği",

                  "Basit Denklem Çözümü",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>

                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Package 3 */}

            <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                  Matematiğin %15'i
                </Badge>

                <CardTitle className="text-2xl mt-2">Paket-2</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {[
                  "Rasyonel Sayılar",

                  "Ondalık Sayılar",

                  "Üslü Sayılar",

                  "Köklü Sayılar",

                  "Çarpanlara Ayırma",

                  "Denklem Çözme",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>

                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Package 4 */}

            <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                  Matematiğin %20'si
                </Badge>

                <CardTitle className="text-2xl mt-2">Paket-3</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {[
                  "Oran Orantı",

                  "Problemler",

                  "Fonksiyonlar",

                  "Polinom",

                  "Trigonometri",

                  "Logaritma",

                  "Karmaşık Sayılar",

                  "2. Derece Denklemler",

                  "Permütasyon Kombinasyon",

                  "Olasılık",

                  "Türev",

                  "İntegral",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>

                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <section
        id="referanslar"
        className="bg-gradient-to-b from-pink-50 to-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Herkes{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Kanki
              </span>
              <span className="text-gray-900">mat</span>.com.tr'u tavsiye ediyor
            </h2>

            <p className="text-xl text-gray-600">
              Herkes{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Kanki
              </span>
              <span className="text-gray-900">mat</span>'e güveniyor
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Meltem Kaya",

                role: "Boğaziçi Üni./Endüstri Müh.",

                text: "Matematik en sevdiğim ders oldu. Hayalim olan Boğaziçi Üniversitesi Endüstri Mühendisliğine girdim.",

                rating: 5,
              },

              {
                name: "Ceylan Demir",

                role: "Öğrenci velisi",

                text: "Çocuğum ile çok ilgilendiler artık matematiği severek yapıyor. Okul notu 98 oldu ve sınavlarda netleri yükseliyor.",

                rating: 5,
              },

              {
                name: "Ahmet Bal",

                role: "Eğitimci Yazar",

                text: "Kankimat harika bir sistem ile matematik sorununu çözmüş. Başarılar diliyorum.",

                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name[0]}
                    </div>

                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>

                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

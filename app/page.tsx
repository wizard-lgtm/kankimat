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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
                Kankimat
              </div>
              <span className="text-sm text-gray-600 hidden md:block">
                Matematiğin Kankası
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="#anasayfa"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Anasayfa
              </Link>
              <Link
                href="#metodumuz"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Metodumuz
              </Link>
              <Link
                href="#paketlerimiz"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Paketlerimiz
              </Link>
              <Link
                href="#ilkelerimiz"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                İlkelerimiz
              </Link>
              <Link
                href="#referanslar"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Referanslar
              </Link>
              <Link
                href="#hakkimizda"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Hakkımızda
              </Link>
              <Link
                href="#iletisim"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                İletişim
              </Link>
            </div>

            <Button className="lg:hidden" variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="anasayfa" className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-orange-600">Kanki</span>
                <span className="text-gray-900">mat</span>
                <span className="text-gray-600">.com.tr</span>
              </h1>
              <p className="text-2xl text-gray-700">
                Matematiğin{" "}
                <span className="text-orange-600 font-semibold">Kankası</span>
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  Matematiğin alfabesini öğretiyoruz.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  Matematik temeliniz mükemmel olacak.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0" />
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
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Link
                  href="https://wa.me/905322923193"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Randevu Al</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl font-bold text-orange-600">📐</div>
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
            <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-600">1065+</p>
                  <p className="text-gray-700 font-medium">Ücretsiz CheckUp</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-600">35+</p>
                  <p className="text-gray-700 font-medium">Yıllık Tecrübe</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodumuz" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Metodumuz
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { step: "1", title: "Ücretsiz Check Up", color: "orange" },
            { step: "2", title: "İhtiyaç Analizi | Planlama", color: "orange" },
            { step: "3", title: "Özel Derse Başlama", color: "orange" },
            { step: "4", title: "Ödevler | Tekrarlar", color: "orange" },
            {
              step: "5",
              title: "100 Gün Ücretsiz Ödev Takibi",
              color: "orange",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 animate-in fade-in slide-in-from-left duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <div className="h-1 flex-1 bg-gradient-to-r from-orange-300 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 flex-1">
                {item.title}
              </h3>
            </div>
          ))}

          <div className="text-center pt-8">
            <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-xl">
              <span className="text-3xl">🏆</span>
              <p className="mt-2 font-semibold">Başarı Garantisi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section
        id="paketlerimiz"
        className="bg-gradient-to-b from-white to-orange-50 py-20"
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
            <Card className="border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit bg-orange-100 text-orange-700 hover:bg-orange-200">
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
                    <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Package 2 */}
            <Card className="border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit bg-orange-100 text-orange-700 hover:bg-orange-200">
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
                    <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Package 3 */}
            <Card className="border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit bg-orange-100 text-orange-700 hover:bg-orange-200">
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
                    <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Package 4 */}
            <Card className="border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit bg-orange-100 text-orange-700 hover:bg-orange-200">
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
                    <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
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

      {/* Principles */}
      <section id="ilkelerimiz" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            İlkelerimiz
          </h2>

          <div className="space-y-6">
            {[
              "Ücretsiz check up yaparız.",
              "Memnun olmazsanız dersin ücretini almayız.",
              "Özel ders sonrası ödev verir ödevin takibini yaparız.",
              "Ders dışında öğrenciye rehberlik yaparız.",
              "Öğrenilmeyen dersi ücretsiz tekrar ederiz.",
            ].map((principle, index) => (
              <Card
                key={index}
                className="border-l-4 border-orange-600 hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex items-center gap-4 py-6">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700">{principle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Herkes <span className="text-orange-600">Kanki</span>
              <span className="text-gray-900">mat</span>.com.tr'u tavsiye ediyor
            </h2>
            <p className="text-xl text-gray-600">
              Herkes <span className="text-orange-600">Kanki</span>
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
                className="border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
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
                        className="h-4 w-4 fill-orange-500 text-orange-500"
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Hakkımızda</h2>

          <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
            <p>
              Okumanın bize fayda sağlaması ve okuduğumuzdan keyif alabilmemiz
              için okumanın temeli olan ALFABEyi bilmemiz lazım.
            </p>
            <p>
              Alfabede bazı harfleri bilmeyince okumak bize işkence olur.
              Alfabeyi tam bilmediğimiz harfler ile okumak bize fayda sağlamaz.
            </p>
            <p>
              Matematiğin de bize keyif ve fayda vermesi için matematiğin
              temelini bilmemiz lazım.
            </p>
            <p className="text-xl font-semibold text-orange-600">
              Okumanın temelinde ALFABE vardır
              <br />
              Matematiğin temelinde de KANKİMAT vardır.
            </p>
            <p className="text-lg font-medium">
              KANKİMAT sistemimizi her gün 15 dakika uygulayan herkes keyifle,
              kolayca matematiği öğrenir.
            </p>
          </div>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
            >
              <Link
                href="https://wa.me/905322923193"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Randevu Al
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="iletisim"
        className="bg-gradient-to-b from-white to-orange-50 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            İletişim
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon:</h3>
                    <a
                      href="tel:905322923193"
                      className="text-orange-600 hover:underline"
                    >
                      +90 532 292 31 93
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-Posta:</h3>
                    <a
                      href="mailto:destek@kankimat.com.tr"
                      className="text-orange-600 hover:underline"
                    >
                      destek@kankimat.com.tr
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ofisimiz:</h3>
                    <p className="text-gray-600">
                      Zeytinlik Mah. Ömer Naci Sok. 32/1
                      <br />
                      Bakırköy / İstanbul
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-orange-200">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.898606276947!2d28.874439999999998!3d40.976031499999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabcbb294708a5%3A0xaf915c79264f63ef!2sZeytinlik%2C%20%C3%96mer%20Naci%20Sk.%20No%3A32%2C%2034140%20Bak%C4%B1rk%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 <span className="text-orange-500">Kanki</span>mat.com.tr |
              Matematiğin Kankası
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 shadow-lg rounded-full w-16 h-16 p-0"
        >
          <Link href="https://wa.me/905322923193" target="_blank">
            <Phone className="h-6 w-6" />
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="secondary"
          className="shadow-lg rounded-full w-16 h-16 p-0"
        >
          <Link href="#anasayfa">
            <span className="text-2xl">↑</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

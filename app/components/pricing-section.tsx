import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingSection() {
  return (
    <section
      id="paketlerimiz"
      className="md:min-h-screen md:flex md:items-center bg-gradient-to-b from-white to-pink-50 py-12 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Paketlerimiz
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Hangi konular matematikte ne kadar yer kaplar?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Package 1 */}

          <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
            <CardHeader>
              <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                Matematiğin %50'si
              </Badge>

              <CardTitle className="text-2xl mt-2">Başlangıç Paketi</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 flex-grow">
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

            {/* Seç button */}
            <div className="px-6 pb-6">
              <button
                aria-label="Paket Seç"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
              >
                Seç
              </button>
            </div>
          </Card>

          {/* Package 2 */}

          <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
            <CardHeader>
              <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                Matematiğin %65'i
              </Badge>

              <CardTitle className="text-2xl mt-2">Paket-1</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 flex-grow">
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

            {/* Seç button */}
            <div className="px-6 pb-6">
              <button
                aria-label="Paket Seç"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
              >
                Seç
              </button>
            </div>
          </Card>

          {/* Package 3 */}

          <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
            <CardHeader>
              <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                Matematiğin %15'i
              </Badge>

              <CardTitle className="text-2xl mt-2">Paket-2</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 flex-grow">
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

            {/* Seç button */}
            <div className="px-6 pb-6">
              <button
                aria-label="Paket Seç"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
              >
                Seç
              </button>
            </div>
          </Card>

          {/* Package 4 */}

          <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
            <CardHeader>
              <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                Matematiğin %20'si
              </Badge>

              <CardTitle className="text-2xl mt-2">Paket-3</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 flex-grow">
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

            {/* Seç button */}
            <div className="px-6 pb-6">
              <button
                aria-label="Paket Seç"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
              >
                Seç
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

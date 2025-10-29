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
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Paketlerimiz
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Hangi konular matematikte ne kadar yer kaplar?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Package 1 */}
          <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
            <CardHeader>
              <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                ÜCRETSİZ
              </Badge>
              <CardTitle className="text-2xl mt-2">Ücretsiz Bilgi Al</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow">
              {["Seviye Tespit", "Öğrenme Planı", "Online Platform"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                )
              )}
            </CardContent>
            <div className="px-6 pb-6">
              <button
                aria-label="Hemen Başla"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
              >
                Hemen Başla
              </button>
            </div>
          </Card>

          {/* Package 2 */}
          <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
            <CardHeader>
              <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                Standart Paket
              </Badge>
              <CardTitle className="text-2xl mt-2">Uygun Fiyat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow">
              {[
                "Haftada 2 Ders (1 Saat)",
                "Özel Ders Materyali",
                "Ödev Takibi",
                "WhatsApp Desteği",
                "Soru Çözüm Desteği",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </CardContent>
            <div className="px-6 pb-6">
              <button
                aria-label="İletişime Geç"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
              >
                İletişime Geç
              </button>
            </div>
          </Card>

          {/* Package 3 */}
          <Card className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
            <CardHeader>
              <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                Yoğun Paket
              </Badge>
              <CardTitle className="text-2xl mt-2">En Popüler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow">
              {[
                "Haftada 3 Ders (1 Saat)",
                "Özel Ders Materyali",
                "Ödev Takibi",
                "7/24 WhatsApp Desteği",
                "Sınav Öncesi Extra Dersler",
                "Veli Görüşmeleri",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </CardContent>
            <div className="px-6 pb-6">
              <button
                aria-label="İletişime Geç"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
              >
                İletişime Geç
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
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
              15 yıldır matematik öğretmenliği yapıyorum ve online eğitimde
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
                  "15+ Yıl Öğretmenlik Tecrübesi",
                  "500+ Başarılı Öğrenci",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    {/* Keep icon usage as-is */}
                    <svg
                      className="h-6 w-6 text-pink-600 flex-shrink-0 group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 16.2 4.8 12l1.4-1.4L9 13.4 18.8 3.6 20.2 5z" />
                    </svg>

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

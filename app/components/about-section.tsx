import { cn } from "@/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AboutSection() {
  return (
    <section
      id="hakkimizda"
      className="container mx-auto px-4 py-16 md:py-24 lg:py-32 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 lg:mb-20 text-center text-gray-900">
          Hakkımızda
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12  ">
          {/* Lottie Animation Section */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <DotLottieReact
              src="/meryem.lottie"
              loop
              autoplay
              className="w-full"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 md:space-y-7">
            <h3 className="text-center lg:text-left text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Merhaba, Ben Meryem!
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              15 yıldır matematik öğretmenliği yapıyorum ve online eğitimde
              uzmanlaştım. Matematiğin her öğrenciye öğretilebileceğine
              inanıyorum.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Benim için en önemli şey, öğrencilerimin matematiği anlaması ve
              sevmesidir. Her öğrencinin farklı bir öğrenme stili olduğunu
              biliyorum ve derslerimi buna göre kişiselleştiriyorum.
            </p>
            <div className="pt-4 md:pt-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                Eğitim Geçmişim:
              </h4>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Matematik Öğretmenliği Lisans",
                  "Online Eğitim Sertifikası",
                  "15+ Yıl Öğretmenlik Tecrübesi",
                  "500+ Başarılı Öğrenci",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 md:gap-4 group"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6 text-pink-600 flex-shrink-0 group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 16.2 4.8 12l1.4-1.4L9 13.4 18.8 3.6 20.2 5z" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
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

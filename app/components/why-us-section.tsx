import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section
      id="neden-biz"
      className="md:min-h-screen md:flex md:flex-col md:items-center md:justify-center container mx-auto px-4 sm:px-6 py-12 md:py-20"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-gray-900">
        Neden{" "}
        <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Kankimat
        </span>
        ?
      </h2>

      <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 md:mb-16">
        Matematiği sevdiren, anlaşılır ve keyifli bir öğrenme deneyimi
      </p>

      {/* stats migrated here */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
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
              "15 yıllık tecrübesiyle uzman eğitmenlerden özel ders al",
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
            className="w-full sm:w-80 border-2 border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
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
  );
}

import { Card, CardContent } from "@/components/ui/card";

export default function WhyUsSection() {
  return (
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
  );
}

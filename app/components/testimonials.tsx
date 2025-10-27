import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section
      id="referanslar"
      className="md:min-h-screen md:flex md:items-center bg-gradient-to-b from-pink-50 to-white py-12 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Herkes{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Kanki
            </span>
            <span className="text-gray-900">mat</span>.com.tr'u tavsiye ediyor
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
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

              text: "Matematik en sevdiğim ders oldu. Meryem Hoca sayesinde hayalim olan Boğaziçi Üniversitesi Endüstri Mühendisliğine girdim.",

              rating: 5,
            },

            {
              name: "Ceylan Demir",

              role: "Öğrenci velisi",

              text: "Çocuğum artık matematiği severek yapıyor. Okul notu 98 oldu ve sınavlarda netleri yükseliyor.",

              rating: 5,
            },

            {
              name: "Ahmet Bal",

              role: "Eğitimci",

              text: "Yıllarca kızımı çeşitli dershanelere gönderdim. Fakat Meryem Hoca sayesinde oğlum sonunda istediği üniversiteye kavuştu!.",

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
  );
}

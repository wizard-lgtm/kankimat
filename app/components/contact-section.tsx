"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
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
                    `https://wa.me/905076427041?text=${whatsappMessage}`,
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
                    +90 507 642 70 41
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
                    href="mailto:meryemkaraca1571@hotmail.com"
                    className="text-pink-600 hover:underline font-semibold"
                  >
                    meryemkaraca1571@hotmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

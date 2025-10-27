"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
export default function HeroSection() {
  return (
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
  );
}

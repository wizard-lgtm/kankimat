"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-pink-600" />
              </div>

              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  1065+
                </p>

                <p className="text-gray-700 font-medium">Ücretsiz CheckUp</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-pink-600" />
              </div>

              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  35+
                </p>

                <p className="text-gray-700 font-medium">Yıllık Tecrübe</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

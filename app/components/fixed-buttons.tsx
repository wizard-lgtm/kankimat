"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function FixedButtons({
  onScrollTop,
}: {
  onScrollTop: () => void;
}) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        asChild
        size="lg"
        className="bg-green-500 hover:bg-green-600 shadow-lg rounded-full w-16 h-16 p-0 hover:scale-110 transition-transform animate-pulse"
      >
        <a
          href="https://wa.me/905076427041"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="h-6 w-6" />
        </a>
      </Button>

      <Button
        size="lg"
        variant="secondary"
        className="shadow-lg rounded-full w-16 h-16 p-0 hover:scale-110 transition-transform"
        onClick={onScrollTop}
      >
        <span className="text-2xl">↑</span>
      </Button>
    </div>
  );
}

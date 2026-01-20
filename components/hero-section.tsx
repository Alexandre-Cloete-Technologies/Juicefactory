import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Fresh fruits and juices"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Real Juice.
          <br />
          <span className="">Real Ingredients.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Freshly squeezed juice available at our store.
          <br />
          Cold-pressed goodness from our family to yours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-citrus-orange hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-md"
          >
            Visit Us
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white/50 text-white hover:bg-white hover:text-black transition-colors px-8 py-6 text-lg font-semibold rounded-md"
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}

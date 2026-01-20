import Image from "next/image";
import { Button } from "@/components/ui/button";

export function StorySection() {
  return (
    <section className="py-20 bg-gray-50" id="story">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/orchard.png"
              alt="Orchard path with trees"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              From Our Family Kitchen to Your Home
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                What started in a small garden-inspired farm in our backyard
                has grown into a community staple. We believe that everyone
                deserves access to the purest, untampered flavors of nature.
              </p>
              <p>
                Every bottle is prepared daily in small batches, ensuring you
                get the highest quality and naturally possible.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-6 text-base font-semibold rounded-md mt-4"
            >
              Learn More About Our Roots
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

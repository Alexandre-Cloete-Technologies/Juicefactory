import { Leaf, MapPin, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Leaf,
      label: "Eco",
      title: "100% Organic",
      description:
        "Pure produce, no additives or preservatives.",
      color: "text-citrus-orange",
    },
    {
      icon: MapPin,
      label: "Visit",
      title: "Visit In-Store",
      description:
        "Order and pick up at our store on Khan Street Eros Park \n Mon - Fri 9am - 5pm.",
      color: "text-citrus-orange",
    },
    {
      icon: Heart,
      label: "Family",
      title: "Family Owned",
      description:
        "Crafted with care in our local kitchen.",
      color: "text-citrus-orange",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-3">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                {/* <p className={`text-sm font-semibold ${feature.color} mb-1`}>
                  {feature.label}
                </p> */}
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Share2, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-6 bg-orange-500 rounded-sm"></div>
              <h3 className="text-lg font-bold text-gray-900">
                Homemade Juice
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Simple homemade pure juice from ingredients grown in our own
              family farm.
            </p>
            <div className="flex gap-3">
              <button
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
              <button
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold text-green-600 mb-4 uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="text-sm">
                <span className="font-semibold">Ph:</span> 01 07 27
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span>{" "}
                juicefactory@gmail.com
              </p>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-sm font-bold text-orange-600 mb-4 uppercase tracking-wide">
              Visit Us
            </h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <p className="font-semibold">Florida</p>
              <p>Main 420, Bldg. 448</p>
              <p>COOPER, FL</p>
              <p className="mt-2">Mon - Fri: 9am - 5pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500">
            © Homemade Juice 2025 | Made by Juice Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}

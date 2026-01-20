"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-8 bg-orange-500 rounded-sm"></div>
              <span className="text-xl font-bold text-gray-900">
                Juice Factory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#menu"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              href="#location"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Location
            </Link>
            <Link
              href="#story"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Our Story
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-4">
            <div className="flex flex-col gap-3">
              <Link
                href="#menu"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="#location"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </Link>
              <Link
                href="#story"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

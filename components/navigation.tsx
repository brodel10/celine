"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-light tracking-wider">
          CI
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed position-relative inset-0 w-full bg-black bg-opacity-95 flex items-center justify-center">
          <div className="flex w-full h-full pt-12 flex-col space-y-8 text-center">
            <Link
              href="/"
              className="text-white hover:text-gray-300 text-2xl tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 text-2xl tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

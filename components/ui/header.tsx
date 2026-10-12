"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Proprietary Engines", href: "#products" },
    { name: "Governance", href: "#governance" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full pt-2 md:pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-4 ring-1 ring-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop action button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[7px] px-4 text-xs font-semibold text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] transition-all rounded-lg"
            >
              Contact Engineering
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="btn-sm bg-indigo-600 py-1.5 px-3 text-xs font-semibold text-white rounded-md sm:hidden"
            >
              Contact
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-gray-900/95 p-4 ring-1 ring-white/10 backdrop-blur-md shadow-2xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-800/60"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-800">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 py-2.5 text-xs font-semibold text-white rounded-lg"
                >
                  Contact Engineering
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

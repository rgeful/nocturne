"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smart-sticky scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll < lastScroll || currentScroll < 80);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-red-700 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/nocturne-logo.svg"
              alt="Nocturne Logo"
              width={180}
              height={50}
              priority
              className="hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
            <Link href="/browse" className="hover:text-red-500 transition-colors">
              Browse
            </Link>
            <Link href="/write" className="hover:text-red-500 transition-colors">
              Write
            </Link>
            <Link href="/story/random" className="hover:text-red-500 transition-colors">
              Random
            </Link>
            <Link href="/profile/me" className="hover:text-red-500 transition-colors">
              Profile
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className="absolute top-[73px] left-0 w-full bg-black/90 backdrop-blur-md border-b border-red-700 shadow-lg">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link
                href="/browse"
                className="text-gray-300 font-medium hover:text-red-500 transition-colors text-lg py-2"
                onClick={closeMobileMenu}
              >
                Browse
              </Link>
              <Link
                href="/write"
                className="text-gray-300 font-medium hover:text-red-500 transition-colors text-lg py-2"
                onClick={closeMobileMenu}
              >
                Write
              </Link>
              <Link
                href="/story/random"
                className="text-gray-300 font-medium hover:text-red-500 transition-colors text-lg py-2"
                onClick={closeMobileMenu}
              >
                Random
              </Link>
              <Link
                href="/profile/me"
                className="text-gray-300 font-medium hover:text-red-500 transition-colors text-lg py-2"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

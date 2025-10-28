"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

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

  return (
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
            width={150}
            height={40}
            priority
            className="hover:opacity-90 transition-opacity duration-200"
          />
        </Link>

        <div className="flex space-x-6 text-gray-300 font-medium">
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
      </div>
    </nav>
  );
}

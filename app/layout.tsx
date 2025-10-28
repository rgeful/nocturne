import "./globals.css";
import NavBar from "@/components/NavBar";
import { Inter, Cinzel_Decorative } from "next/font/google";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Nocturne",
  description: "Modern ad-free creepypasta hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-black text-gray-200`}>
        <NavBar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brag Lab — Moments That Hit Different",
  description: "High-impact corporate experiences designed with bold ideas, cinematic energy, and zero tolerance for average.",
  metadataBase: new URL("https://www.brag-lab.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-noise min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

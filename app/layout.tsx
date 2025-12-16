import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "GoAdventuresCR | Tours & Adventures in Guanacaste, Costa Rica",
  description: "Discover the best tourism experiences in Guanacaste, Costa Rica. Ziplines, cultural tours, nature adventures and more. Book your adventure today!",
  keywords: "Costa Rica, Guanacaste, tours, adventures, zipline, blue zone, tourism, nature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

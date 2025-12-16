import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "GoAdventuresCR | Tours y Aventuras en Guanacaste, Costa Rica",
  description: "Descubre las mejores experiencias de turismo en Guanacaste, Costa Rica. Tirolesas, tours culturales, aventuras en la naturaleza y más. ¡Reserva tu aventura hoy!",
  keywords: "Costa Rica, Guanacaste, tours, aventuras, tirolesa, zona azul, turismo, naturaleza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

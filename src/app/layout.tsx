import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import ScrollObserver from "@/components/ScrollObserver";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oryon Robotics",
  description: "Innovative Learning Solutions in Robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ScrollObserver />
          <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

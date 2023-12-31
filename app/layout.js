
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lupleg Learning Platform",
  description:
    "Lupleg provides interactive and engaging educational resources that adapt to individual learning needs.",
  keywords:
    "Engineering at Lupleg, Lupleg Education, Lupleg Programming, interactive learning, Education SaaS, Lupleg Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

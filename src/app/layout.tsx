import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ToastProvider from "./toastProvider/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaLogic Clone",
  description: "This is clone page of MetaLogic website and all the design and images belongs to metalogic and i am using it for education purpose. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
        <Header />
        {children}
        <Footer />
        </ToastProvider>
          
        </body>
    </html>
  );
}

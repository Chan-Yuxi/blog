import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Provider from "./provider";
import ThemeProvider from "@/components/base/Theme/provider";

import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";

export const metadata: Metadata = {
  title: "Welcome My Blog",
  description: "Written by ChanYuxi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ThemeProvider defaultTheme="system">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

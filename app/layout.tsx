// Importing the Metadata type from Next.js for page meta information
import type { Metadata } from "next";

// Importing the 'Inter' font from Google Fonts
import { Inter } from "next/font/google";

// Importing components: Header and Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing React type for typing children as React.ReactNode (TypeScript support)
import type React from "react";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevStore - Coding Resources for Software Engineers",
  description: "Find the best tutorials, books, tools, templates, and challenges for software engineers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100`}>
        <Header />
        <main className="min-h-screen p-4 md:p-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


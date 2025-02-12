// Import global styles for the app
import "./globals.css";

// Importing the Metadata type from Next.js for page meta information
import type { Metadata } from "next";

// Importing the 'Inter' font from Google Fonts
import { Inter } from "next/font/google";

// Importing components: Header and Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing React type for typing children as React.ReactNode (TypeScript support)
import type React from "react";

// Initialize the Inter font with the "latin" subset (includes basic Latin characters)
const inter = Inter({ subsets: ["latin"] });

// Page metadata: title and description for SEO and browser tab display
export const metadata: Metadata = {
  title: "DevStore - Coding Resources for Software Engineers", // Title for the page
  description: "Find the best tutorials, books, tools, templates, and challenges for software engineers.", // Page description for SEO
};

// Main root layout component, wrapping the entire page
export default function RootLayout({
  children, // 'children' represents the content nested inside the RootLayout component
}: {
  children: React.ReactNode; // Typing 'children' as React.ReactNode, which can be any valid React element
}) {
  return (
    // HTML document structure with language set to English
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100`}>
        {/* The Header component that will appear at the top of the page */}
        <Header />
        
        {/* Main content section, applying padding and ensuring the content takes up at least the full viewport height */}
        <main className="min-h-screen p-4 md:p-8">
          {children} {/* Render the nested child elements (content passed to RootLayout) */}
        </main>
        
        {/* The Footer component that will appear at the bottom of the page */}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Global styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ui/theme-provider"; // Theme provider for handling dark/light themes

// Google font configurations
const geistSans = Geist({
  variable: "--font-geist-sans",  // Custom variable for the font
  subsets: ["latin"],             // Latin subset for proper character support
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",  // Custom variable for the mono font
  subsets: ["latin"],             // Latin subset for the mono font
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Hooria CodeHub",
  description: "Welcome to Hooria CodeHub! A place for coding, tutorials, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}  // Applying fonts
      >
        {/* ThemeProvider wraps the entire application for theme management */}
        <ThemeProvider
          attribute="class"         // Defines where the theme will be applied (class name)
          defaultTheme="light"      // Set default theme as light
          enableSystem              // Allows theme to follow system settings (light/dark)
          disableTransitionOnChange // Disable transition on theme change for faster switching
        >
          {/* Navbar component for navigation */}
          <Navbar />

          {/* Main content where page-specific content will be injected */}
          <main>{children}</main>

          {/* Footer component at the bottom of every page */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

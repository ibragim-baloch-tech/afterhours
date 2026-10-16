import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFTERHOURS",
  description: "Discover. Connect. Go live.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0c" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to main content
        </a>

        <header className="border-b border-border">
          <div className="mx-auto flex w-full max-w-5xl items-center px-5 py-4 sm:px-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-[0.25em]"
            >
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full bg-accent"
              />
              AFTERHOURS
            </Link>
          </div>
        </header>

        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="border-t border-border">
          <div className="mx-auto w-full max-w-5xl px-5 py-6 text-sm text-muted sm:px-8">
            AFTERHOURS is in development.
          </div>
        </footer>
      </body>
    </html>
  );
}
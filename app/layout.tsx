import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
// import "reset.css/reset.css";
import "./globals.css";
import { AppProviders } from "@/providers/appProviders";

const geistSans = Playfair_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Start curating your todo list",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/icons8-tasklist-48.png",
  },
  openGraph: {
    title: "Todo App",
    description: "Start curating your todo list",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #e0cbda 0%, #9f54d6 100%)",
          }}
        >
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Providence Living - Join Our Team in Prince George",
  description: "Be part of transforming senior care in Northern BC. Discover career opportunities at Providence Living's innovative Prince George facility opening in 2027.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

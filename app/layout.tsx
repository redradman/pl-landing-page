import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Providence Living - Prince George | Home for Us",
  description: "Join Providence Living's revolutionary Home for Us model in Prince George. Be part of transforming senior care with relationship-centered approach. Opening Fall 2027.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

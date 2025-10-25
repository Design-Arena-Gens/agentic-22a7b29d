import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website banane ka tarika | Step-by-step Guide",
  description:
    "A practical, actionable guide describing the complete process of building and launching a website."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

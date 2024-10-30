import React from "react";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

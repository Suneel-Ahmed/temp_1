"use client"
import "./globals.css";
import useSmoothScroll from "@/hook/useSmoothScroll";




export default function RootLayout({ children }) {
  useSmoothScroll()
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}

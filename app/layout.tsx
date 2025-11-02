"use client";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
          <h1 className="text-xl font-bold">SmartBite</h1>
          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/order">Order</Link>
            <Link href="/profile">Profile</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

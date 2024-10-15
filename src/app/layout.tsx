"use client";

import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/components/AppProvider";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

export const metadata: Metadata = {
  title: "Keeper",
  description: "A note-taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground">
        <AppProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </AppProvider>
      </body>
    </html>
  );
}

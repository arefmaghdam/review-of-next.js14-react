import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Review of Next.JS 14",
  description: "Review of Next.JS 14",
};

const yekanFont = localFont({
  src: "../../public/font/BYekan.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200 ${yekanFont.className}`}>
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}

import React, { FC } from "react";
import Link from "next/link";
import CodePreview from "@/components/code-preview";

const AddingFonts: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we should download the font and copy to public/font folder
    // in next step we change the layout.tsx codes as below:

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
          <body className={'bg-slate-900 text-slate-200 {yekanFont.className}''}>
            <main className="p-5">{children}</main>
          </body>
        </html>
      );
    }

      `}
      />
    </div>
  );
};

export default AddingFonts;

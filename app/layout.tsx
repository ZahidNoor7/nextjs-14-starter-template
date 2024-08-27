import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APPLICATION_NAME || "NextApp",
  description:
    "Nextjs-14 App Router Starter Template powered by TailwindCSS & ReduxToolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="root" className="RootLayout">
      <head>
        <Script src="@/utils/scripts/theme.ts" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.className} Body h-screen`}>
        <StoreProvider>
          <ToastContainer />
          <div className="min-h-screen">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../style/index.scss";
import "./globals.css";
import AppProvider from "@/contextApi/AppProvider";
import { ProductsProvider } from "@/contextApi/ProductsProvider";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "sonner";
import type { Metadata } from "next";

const siteName = "Flindor Limited";
const tagline =
  "Household goods, electronics, kitchen appliances, home decor & trusted services across Nigeria.";
const description =
  "Flindor Limited — Your trusted store for household goods, electronics, kitchen appliances, home decor, and professional services. Shop quality products and book cleaning, TV installation, AC servicing, furniture assembly & more. Nationwide delivery in Nigeria.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | ${tagline}`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "Flindor",
    "household goods",
    "electronics",
    "kitchen appliances",
    "home decor",
    "Nigeria",
    "cleaning service",
    "TV installation",
    "AC servicing",
    "furniture assembly",
    "online shop Nigeria",
  ],
  authors: [{ name: siteName, url: "https://flindorltd.com" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName,
    title: `${siteName} — ${tagline}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${tagline}`,
    description,
  },
  robots: "noindex, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </head>

        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <AppProvider>
              <ProductsProvider>{children}</ProductsProvider>
            </AppProvider>
            <Toaster position="top-center" richColors />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}

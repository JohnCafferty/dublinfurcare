// components/Layout.tsx

import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="/images/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="shortcut icon"
          href="/images/android-chrome-192x192.png"
        />

        {/* Logo for Google Search */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dublin Pet Grooming",
            "url": "https://www.dublinpetgrooming.ie",
            "logo": "https://www.dublinpetgrooming.ie/images/android-chrome-192x192.png"
          }
          `}
        </script>
      </Head>

      <Header />
      <main className="font-inter bg-[#fdfcfb] text-gray-900 scroll-smooth">
        {children}
      </main>
      <Footer />
    </>
  );
}

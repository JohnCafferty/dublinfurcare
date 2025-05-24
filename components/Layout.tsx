// components/Layout.tsx

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="font-inter bg-[#fdfcfb] text-gray-900 scroll-smooth">
        {children}
      </main>
      <Footer />
    </>
  );
}

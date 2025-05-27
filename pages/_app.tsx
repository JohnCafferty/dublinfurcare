import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <>
      <Component {...pageProps} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/353871213112"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition duration-200"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M16 0c-8.836 0-16 7.163-16 16 ... [shortened for clarity]" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Instagram Floating Button */}
      <a
        href="https://www.instagram.com/dublinpetgrooming"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-50 bg-[#E1306C] hover:bg-[#c92b60] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition duration-200"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M12 2.2c3.2 0 3.6 0 4.9 ... [shortened for clarity]" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
        <span className="hidden sm:inline">Instagram</span>
      </a>
    </>
  );
}

export default MyApp;

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
          <path d="M16 0c-8.836 0-16 7.163-16 16 0 2.773 0.725 5.381 2.104 7.713l-2.139 7.015 7.207-2.108c2.253 1.239 4.792 1.903 7.382 1.903 8.836 0 16-7.163 16-16s-7.164-16-16-16zM16 29.25c-2.221 0-4.395-0.576-6.303-1.671l-0.451-0.264-4.268 1.249 1.249-4.248-0.276-0.453c-1.267-2.072-1.936-4.446-1.936-6.863 0-7.168 5.832-13 13-13s13 5.832 13 13c0 7.168-5.832 13-13 13z" />
          <path d="M22.157 18.602c-0.339-0.17-2.008-0.992-2.32-1.107-0.311-0.115-0.538-0.17-0.765 0.17-0.226 0.339-0.877 1.107-1.076 1.332-0.199 0.226-0.396 0.254-0.735 0.085-0.339-0.17-1.434-0.528-2.73-1.684-1.009-0.899-1.689-2.011-1.885-2.351s-0.021-0.522 0.149-0.691c0.153-0.152 0.339-0.396 0.509-0.593 0.17-0.199 0.226-0.339 0.339-0.565 0.113-0.226 0.057-0.424-0.028-0.593-0.085-0.17-0.765-1.842-1.048-2.523-0.276-0.664-0.56-0.575-0.765-0.584-0.198-0.008-0.424-0.010-0.65-0.010s-0.593 0.085-0.904 0.396c-0.311 0.311-1.187 1.161-1.187 2.83s1.215 3.285 1.384 3.513c0.17 0.226 2.397 3.654 5.812 5.123 0.813 0.351 1.447 0.562 1.941 0.719 0.816 0.26 1.557 0.223 2.141 0.136 0.653-0.097 2.008-0.82 2.291-1.612 0.283-0.793 0.283-1.474 0.198-1.612-0.085-0.141-0.311-0.226-0.65-0.396z" />
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
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0S5.3 0 4.1.1C2.9.1 2.1.2 1.5.4.7.6.1 1.1 0 2.1-.1 2.8-.1 3.6 0 4.9S0 7.3 0 12s0 3.7.1 4.9c.1 1.3.2 2.1.4 2.7.2.9.8 1.5 1.6 1.7.7.2 1.5.3 2.7.4 1.3.1 1.7.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.1-.2 2.7-.4.9-.2 1.5-.8 1.7-1.6.2-.7.3-1.5.4-2.7.1-1.3.1-1.7.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.1-.4-2.7-.2-.9-.8-1.5-1.6-1.7C19.1.2 18.3.1 17.1.1 15.9 0 15.5 0 12 0z" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
        <span className="hidden sm:inline">Instagram</span>
      </a>
    </>
  );
}

export default MyApp;

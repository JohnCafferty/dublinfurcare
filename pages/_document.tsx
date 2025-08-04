import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Chewy&display=swap"
          rel="stylesheet"
        />

        {/* Favicon for Google Search */}
        <link
          rel="icon"
          href="/android-icon-192x192.png"
          type="image/png"
          sizes="192x192"
        />

        {/* Optional fallback */}
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

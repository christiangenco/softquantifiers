import Head from "next/head";
import { Merriweather, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

// Nanum Pen Script

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "900"],
});
const nanum = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata = {
  title: "Vague Quantifiers Survey",
  description: "How many is 'some', 'several', or 'a lot'?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`dark:bg-gray-800 dark:text-white min-h-screen ${merriweather.className} ${nanum.variable}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </body>
    </html>
  );
}

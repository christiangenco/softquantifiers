import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vague Quantifiers Survey",
  description: "How many is 'some', 'several', or 'a lot'?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-gray-800 dark:text-white min-h-screen ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}

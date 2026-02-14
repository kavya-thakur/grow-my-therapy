import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds",
  description:
    "Dr. Maya Reynolds, PsyD offers anxiety, trauma, and burnout therapy in Santa Monica, CA. In-person and telehealth sessions available across California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-[#F8F6F1] text-[#2C2C2C] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

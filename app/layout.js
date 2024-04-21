import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus_jakarta_sans_init = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus_jakarta_sans",
});

export const metadata = {
  title: "E-Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plus_jakarta_sans_init.variable} font-plus_jakarta_sans text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}

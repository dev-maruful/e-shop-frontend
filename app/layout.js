import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const dm_sans_init = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm_sans",
});

export const metadata = {
  title: "E-Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans_init.variable} font-dm_sans text-gray-800`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

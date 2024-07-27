import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grab Merchant",
  description: "Grab Merchant is your go-to platform for managing your business with ease. From handling orders to monitoring sales, our tools are designed to help you streamline operations and boost your productivity. Join Grab Merchant and take your business to the next level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex w-full justify-center bg-black">
          <div className="sm:w-[428px] w-full bg-gray-100 min-h-screen relative">
            {children}
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}

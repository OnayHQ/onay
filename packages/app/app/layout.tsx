import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onay - DeFi Approvals Security",
  description:
    "We check the security of your wallet approvals and revoke it if a security breach happens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-6 md:px-32 py-6`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

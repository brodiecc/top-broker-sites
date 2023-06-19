import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top Broker Sites",
  description: "Top Broker Sites Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ScrollButton />
      </body>
    </html>
  );
}

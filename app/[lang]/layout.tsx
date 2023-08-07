import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import { Metadata } from "next";
import clsx from "clsx";
import GoogleAnalytics from "./GoogleAnalytics";
import { i18n } from "../../i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "../../i18n-config";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <GoogleAnalytics />
      <body className={clsx(inter.className, "bg-white")}>
        <Header lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Top Broker Sites",
  description:
    "Discover the perfect broker for your trading needs at Top Broker Sites. Our powerful comparison tool helps you find the best broker, tailored to your requirements. Unleash your trading potential with our extensive database, comprehensive reviews, and user-friendly interface. Stay updated with our expertly crafted articles on brokers and trading strategies. Empower yourself with the knowledge and tools to make informed investment decisions. Start your journey towards financial success today with Top Broker Sites.",
  openGraph: {
    title: "Top Broker Sites",
    description:
      "Discover the perfect broker for your trading needs at Top Broker Sites. Our powerful comparison tool helps you find the best broker, tailored to your requirements. Unleash your trading potential with our extensive database, comprehensive reviews, and user-friendly interface. Stay updated with our expertly crafted articles on brokers and trading strategies. Empower yourself with the knowledge and tools to make informed investment decisions. Start your journey towards financial success today with Top Broker Sites.",
    images: [
      {
        url: "http://topbrokersites.com/wp-content/uploads/2023/07/OGImage.png",
        width: 1200,
        height: 630,
        alt: "Top Broker Sites",
      },
    ],
  },
};

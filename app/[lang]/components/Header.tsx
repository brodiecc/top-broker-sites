"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { AnimateUnderline } from "./LargeStyles";
import LocaleSwitcher from "./LocaleSwitcher";

interface HeaderDictionary {
  [key: string]: string;
  topBrokerSites: string;
  openMainMenu: string;
  closeMenu: string;
  compare: string;
  learn: string;
  brokerReviews: string;
  tradingStrategies: string;
}

const enDictionary: HeaderDictionary = {
  topBrokerSites: "Top Broker Sites",
  openMainMenu: "Open main menu",
  closeMenu: "Close menu",
  compare: "Compare",
  learn: "Learn",
  brokerReviews: "Broker Reviews",
  tradingStrategies: "Trading Strategies",
};

const viDictionary: HeaderDictionary = {
  topBrokerSites: "Các trang môi giới hàng đầu",
  openMainMenu: "Mở menu chính",
  closeMenu: "Đóng menu",
  compare: "So sánh",
  learn: "Học hỏi",
  brokerReviews: "Đánh giá môi giới",
  tradingStrategies: "Chiến lược giao dịch",
};

const navigation = [
  // { name: "About us", href: "/#about" },
  { name: "learn", href: "/category/beginner-trading" },
  { name: "brokerReviews", href: "/category/broker-review" },
  { name: "tradingStrategies", href: "/category/trading-strategy" },
];

export default function Header({ lang }: any) {
  var dictionary = enDictionary;
  if (lang === "vi") {
    dictionary = viDictionary;
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={`/${lang}`} className="-m-1.5 p-1.5 flex items-center">
            <Image
              src="/tbslogo.svg"
              alt=""
              height={32}
              width={32}
              className="h-8 w-8 mr-2"
            />
            <span className="font-semibold text-2xl tracking-tight text-gray-900">
              {dictionary.topBrokerSites}
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{dictionary.openMainMenu}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={`/${lang}${item.href}`}
              className={AnimateUnderline(
                "text-md font-semibold leading-6 text-gray-700 after:bg-gray-700"
              )}
            >
              {dictionary[item.name]}
            </Link>
          ))}
          <LocaleSwitcher />
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/compare"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
          >
            Compare
          </Link>
        </div> */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <Image
                src="/tbslogo.svg"
                alt=""
                height={32}
                width={32}
                className="mr-2 h-8 w-8"
              />
              <span className="font-semibold text-2xl tracking-tight">
                {dictionary.topBrokerSites}
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={`/${lang}${item.href}`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {dictionary[item.name]}
                  </a>
                ))}
              </div>
              {/* <div className="py-6">
                <Link
                  href="/compare"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
                >
                  Compare
                </Link>
              </div> */}
              <LocaleSwitcher />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

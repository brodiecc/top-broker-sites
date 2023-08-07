import {
  ChartBarIcon,
  ClipboardIcon,
  NewspaperIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { getDictionary } from "@/get-dictionary";
import Link from "next/link";

const features = [
  // {
  //   name: "Comparison tool",
  //   description:
  //     "We provide a comprehensive comparison tool that allows you to easily compare different brokers based on your preferences.",
  //   icon: ChartBarIcon,
  // },
  {
    name: "learn",
    description: "learnDescription",
    icon: ClipboardIcon,
    href: "/category/beginner-trading",
  },
  {
    name: "brokerReviews",
    description: "brokerReviewsDescription",
    icon: ClipboardIcon,
    href: "/category/broker-review",
  },
  {
    name: "tradingStrategies",
    description: "tradingStrategiesDescription",
    icon: NewspaperIcon,
    href: "/category/trading-strategy",
  },
  {
    name: "userInterface",
    description: "userInterfaceDescription",
    icon: GlobeAltIcon,
  },
];

export default async function About({ lang }: any) {
  const dictionary = await getDictionary(lang);

  return (
    <div id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {dictionary.about.titleTop} <br /> {dictionary.about.titleBottom}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {dictionary.about.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) =>
              feature.href ? (
                <Link
                  key={feature.name}
                  href={`/${lang}${feature.href}`}
                  className="border border-white hover:border-gray-500 rounded-lg p-4"
                >
                  <div className="relative pl-16">
                    <div className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {
                        dictionary.about[
                          feature.name as keyof typeof dictionary.about
                        ]
                      }
                    </div>
                    <div className="mt-2 text-base leading-7 text-gray-600">
                      {
                        dictionary.about[
                          feature.description as keyof typeof dictionary.about
                        ]
                      }
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={feature.name}
                  className="border border-white rounded-lg p-4"
                >
                  <div className="relative pl-16">
                    <div className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {
                        dictionary.about[
                          feature.name as keyof typeof dictionary.about
                        ]
                      }
                    </div>
                    <div className="mt-2 text-base leading-7 text-gray-600">
                      {
                        dictionary.about[
                          feature.description as keyof typeof dictionary.about
                        ]
                      }
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

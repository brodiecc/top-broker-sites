import {
  ChartBarIcon,
  ClipboardIcon,
  NewspaperIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Comparison tool",
    description:
      "We provide a comprehensive comparison tool that allows you to easily compare different brokers based on your preferences.",
    icon: ChartBarIcon,
  },
  {
    name: "Broker reviews",
    description:
      "Our reviews provide valuable insights into brokers' features, trading platforms, account types, regulatory compliance, customer service, and more.",
    icon: ClipboardIcon,
  },
  {
    name: "Trading Strategies",
    description:
      "Discover a wide range of effective trading strategies that can enhance your investment decisions and maximize your potential for success",
    icon: NewspaperIcon,
  },
  {
    name: "User-friendly interface",
    description:
      "Our website is designed to be user-friendly and easy to navigate, allowing you to quickly find the information you need.",
    icon: GlobeAltIcon,
  },
];

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Looking for a broker? <br /> Look no further.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help you navigate the complex world of online trading and
            investing. Get access to expert reviews and ratings of the top
            brokers in the industry.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              <span className="text-blue-500">Skip</span> the hassle. <br />
              Find the perfect broker for{" "}
              <span className="text-blue-500">You</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Use our personalized comparison tool to find the broker that suits
              your needs. Whether you are a beginner or an experienced trader,
              our tool can help you make an informed decision and find the right
              broker for you.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="bg-blue-500 ml-4 hover:bg-blue-600 py-2 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Get Started
              </button>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            src="/mantrading.jpeg"
            alt="A man trading on his computer"
            layout="fill"
            objectFit="cover"
            className="aspect-w-3 aspect-h-2 bg-gray-50"
          />
        </div>
      </div>
    </div>
  );
}

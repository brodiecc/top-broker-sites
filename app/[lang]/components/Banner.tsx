import Image from "next/image";
import bannerImage from "/public/hdbanner.jpg";
import { AnimateUnderline } from "./LargeStyles";

export default function Banner() {
  return (
    <div className="w-1920 bg-gray-200 h-[400px] relative">
      <div className="bg-black px-4 bg-opacity-50 h-full py-8 sm:py-28 text-white flex z-10 absolute flex-col inset-x-0 left-50 align-middle">
        <h2 className="text-4xl m-auto font-bold">Trade With 82% Accuracy.</h2>
        <h2 className="text-4xl m-auto font-bold pt-4 sm:pt-0">
          No Trading Experience Needed.
        </h2>
        <button
          className={AnimateUnderline(
            "hover:text-gray-300 text-lg md:text-2xl font-bold leading-6  after:bg-gray-300 m-auto pt-8"
          )}
        >
          Get Access to Our Free Trade Signals →
        </button>
      </div>
      <Image
        src={bannerImage}
        sizes="100vw"
        fill
        alt="phone with trading charts"
        style={{ objectFit: "cover" }}
        placeholder="blur"
        priority
        className="z-0"
      />
    </div>
  );
}

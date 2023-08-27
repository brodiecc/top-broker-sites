import Image from "next/image";
import bannerImage from "/public/hdbanner.jpg";
import { AnimateUnderline } from "./LargeStyles";
import { getDictionary } from "@/get-dictionary";
import Link from "next/link";

export default async function Banner({ lang }: any) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="w-1920 bg-gray-200 h-[400px] relative">
      <div className="bg-black px-4 bg-opacity-50 h-full py-8 sm:py-28 text-white flex z-10 absolute flex-col inset-x-0 left-50 align-middle">
        <h2 className="text-4xl m-auto font-bold">
          {dictionary.banner.titleTop}
        </h2>
        <h2 className="text-4xl m-auto font-bold pt-4 sm:pt-0">
          {dictionary.banner.titleBottom}
        </h2>
        <Link
          className={AnimateUnderline(
            "hover:text-gray-300 text-lg md:text-2xl font-bold leading-6  after:bg-gray-300 m-auto pt-8"
          )}
          href="https://go.td365.com/visit/?bta=35055&nci=5376"
        >
          {dictionary.banner.link}
        </Link>
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

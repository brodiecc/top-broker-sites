import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function PostImage({ title, coverImage, slug }: any) {
  return (
    <Image
      width={800}
      height={450}
      alt={coverImage.node.altText || title}
      src={coverImage?.node.sourceUrl}
      className="w-full rounded-lg bg-gray-100 object-cover aspect-video"
    />
  );
}

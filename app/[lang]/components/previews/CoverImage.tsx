import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, coverImage, slug }: any) {
  if (!coverImage?.node) return null;
  const image = (
    <Image
      width={400}
      height={300}
      alt={coverImage.node.altText || title}
      src={coverImage?.node.sourceUrl}
      className="rounded-2xl bg-gray-100"
    />
  );
  return (
    <div className="sm:mx-0 ">
      {slug ? (
        <Link href={`/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, coverImage, slug }: any) {
  const image = (
    <Image
      fill={true}
      alt={coverImage.node.altText || title}
      src={coverImage?.node.sourceUrl}
      className={cn("shadow-small rounded-2xl bg-gray-100 object-cover", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0 h-64">
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

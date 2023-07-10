import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, coverImage, slug }: any) {
  const image = (
    <Image
      width={800}
      height={450}
      alt={coverImage.node.altText || title}
      src={coverImage?.node.sourceUrl}
      className={cn(
        "shadow-small w-full rounded-2xl bg-gray-100 object-cover sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-2",
        {
          "hover:shadow-medium transition-shadow duration-200": slug,
        }
      )}
    />
  );
  return (
    <div className="sm:mx-0">
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
